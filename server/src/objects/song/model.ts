import { LyricType } from './../lyric/types';
import { Document, Model, Schema, SchemaDefinition, model } from 'mongoose';
import LyricModel, { LyricName, LyricDocument } from '../lyric/model';
import { SongType, AddLyricToSongReturnType } from './types';

/**
 * The Song Document Interface.
 */
export interface SongDocument extends Document {
    title: string;
    lyrics: LyricDocument[];
}

/**
 * The Song Model Interface.
 */
export interface SongModel extends Model<SongDocument> {
    addLyric: (
        songId: SongType["id"], 
        content: LyricType["content"]
    ) => Promise<AddLyricToSongReturnType>;
    findLyrics: (
        id: SongType["id"]
    ) => LyricDocument[];
}

/**
 * The Song Schema Definition.
 */
const definition: SchemaDefinition = {
    title: { 
        type: String, 
        required: true 
    },
    lyrics: [{
        type: Schema.Types.ObjectId,
        ref: LyricName
    }]
};

/**
 * The Song Collection Name
 */
export const SongName = "song";

/**
 * The Song Schema.
 */
const SongSchema: Schema<SongDocument> = new Schema(definition);

/**
 * Adds Lyrics to a Song.
 */
SongSchema.statics.addLyric = async function addLyric(
    this: SongModel,
    songId: SongType["id"], 
    content: LyricType["content"]
): Promise<AddLyricToSongReturnType> {

    const song = await this.findById(songId);

    if (song) {

        const lyric = new LyricModel({ content, songId });

        song.lyrics.push(lyric);
    
        await lyric.save();
    
        await song.save();
    
        return {lyric, song};

    }
    
    return {lyric: null, song: null};
    
};

/**
 * Finds the lyrics (Lyric[]) associated with a particular Song.
 */
SongSchema.statics.findLyrics = async function findLyrics(
    this: SongModel,
    id: SongType["id"]
): Promise<LyricDocument[]> {

    const song = await this.findById(id).populate("lyrics").exec();

    if (song) {
        return song.lyrics;
    }
    
    return [];

};

/**
 * The Song Database Model.
 * @param conn The MongoDB Database Connection.
 */
const SongModel = model<SongDocument, SongModel>(SongName, SongSchema);

export default SongModel;