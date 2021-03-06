import { LyricType } from '../lyric/types';
import { LyricDocument } from '../lyric/model';
import SongModel, { SongDocument } from './model';
import { SongType, AddLyricToSongReturnType } from './types';
import { AddSongInput, AddLyricToSongInput } from './inputs';

export async function addSong(
    data: AddSongInput
): Promise<SongDocument> {
    return new SongModel(data).save();
}

export async function deleteSong(
    id: SongType["id"]
): Promise<SongDocument | null> {

    const query = SongModel.findById(id);
    const song = await query.exec();

    await query.remove();

    return song;
}

export async function addLyricToSong(
    { songId, content}: AddLyricToSongInput
): Promise<AddLyricToSongReturnType> {
    return SongModel.addLyric(songId, content);
}

export async function getSongs(): Promise<SongDocument[]> {
    return await SongModel.find({}).exec();
}

export async function getSong(
    id: SongType["id"]
): Promise<SongDocument | null> {
    return SongModel.findById(id);
}

export async function getLyrics(
    id: LyricType["id"]
): Promise<LyricDocument[]> {
    return SongModel.findLyrics(id);
}