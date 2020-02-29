import { InputType, Field, Int } from "type-graphql";
import { LyricType } from '../lyric';
import { SongType } from "./types";

@InputType({ description: "New Song Data." })
export class AddSongInput implements Partial<SongType> {

    @Field() 
    title: string;
    
    @Field(() => [LyricType])
    lyrics?: LyricType[];

}

@InputType({ description: "Add Lyric to Song Data." })
export class AddLyricToSongInput implements Partial<LyricType> {

    @Field(() => String) 
    songId: SongType["id"];

    @Field() 
    content: string;

    @Field(() => Int, { defaultValue: 0 }) 
    likes?: number;
    
}