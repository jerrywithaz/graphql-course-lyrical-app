import { Document, Model, Schema, model, SchemaDefinition } from 'mongoose';
import { SongType } from '../song/types';
import { LyricType } from './types';

/**
 * The Lyric Document Interface and Lyric Methods.
 */
export interface LyricDocument extends Document {
    likes: number;
    content: string;
    songId: SongType["id"];
}

/**
 * The Lyric Model Interface and Lyric Statics.
 */
export interface LyricModel extends Model<LyricDocument> {
    like: (
        id: LyricType["id"]
    ) => Promise<LyricDocument | null>;
}

/**
 * The Lyric Schema Definition.
 */
const definition: SchemaDefinition = {
    likes: { 
        type: Number, 
        default: 0 
    },
    content: { 
        type: String ,
        required: true
    },
    songId: { 
        type: Schema.Types.ObjectId, 
        ref: "song",
        required: true 
    }
};

/**
 * The Lyric Collection Name.
 */
export const LyricName = "lyric";

/**
 * The Lyric Schema.
 */
const LyricSchema: Schema = new Schema(definition);

LyricSchema.statics.like = async function like(
    this: LyricModel,
    id: LyricType["id"]
): Promise<LyricDocument | null> {

    const lyric = await this.findById(id).exec();

    if (lyric) {

        ++lyric.likes;

        return lyric.save();

    }

    return null;

}

/**
 * The Lyric Database Model.
 * @param conn The MongoDB Database Connection.
 */
const LyricModel = model<LyricDocument, LyricModel>(LyricName, LyricSchema);

export default LyricModel;