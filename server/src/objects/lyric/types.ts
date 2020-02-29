import { Schema } from 'mongoose';
import { ObjectType, Field, ID, Int, InputType } from 'type-graphql';
import { SongType } from '../song/types';

@ObjectType({description: "The Lyric Object Type."})
@InputType("LyricInput")
export class LyricType {

    @Field(() => ID)
    id: Schema.Types.ObjectId;

    @Field(() => Int)
    likes: number;
    
    @Field()
    content: string;

    @Field(() => String)
    songId: SongType["id"];

    @Field(() => SongType)
    song: SongType;

}