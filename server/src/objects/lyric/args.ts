import { ArgsType, Field, ID, Int } from 'type-graphql';
import { LyricType } from './types';
import { SongType } from '../song';

@ArgsType()
export class AddLyricArgs {

    @Field(() => Int, { defaultValue: 0})
    likes?: number;
    
    @Field()
    content: string;

    @Field(() => String)
    songId: SongType["id"];
    
}

@ArgsType()
export class GetLyricsArgs {

    @Field(() => ID) 
    songId: SongType["id"];
    
}

@ArgsType()
export class GetLyricArgs {

    @Field(() => ID) 
    id: LyricType["id"];
    
}

@ArgsType()
export class LikeLyricArgs {

    @Field(() => ID) 
    id: LyricType["id"];
    
}