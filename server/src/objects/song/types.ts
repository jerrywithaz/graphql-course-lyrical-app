import { Schema } from 'mongoose';
import { ObjectType, Field, ID, InputType } from 'type-graphql';
import { LyricType } from '../lyric';
import { LyricDocument } from '../lyric/model';
import { SongDocument } from './model';

@ObjectType({description: "The Song Object Type."})
@InputType("SongInput")
export class SongType {

    @Field(() => ID)
    id: Schema.Types.ObjectId;

    @Field()
    title: string;

    @Field(() => [LyricType])
    lyrics: LyricType[];

}

@ObjectType({description: "The Output Object Type for Adding a Lyric."})
export class AddLyricOutput {

    @Field(() => LyricType)
    lyric: LyricType;

    @Field(() => SongType)
    song: SongType;

}

export type AddLyricReturnType = {
    lyric: LyricDocument | null;
    song: SongDocument | null;
};