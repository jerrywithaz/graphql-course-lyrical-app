import { Schema } from 'mongoose';
import { ArgsType, Field, ID } from 'type-graphql';
import { SongType } from './types';

@ArgsType()
export class DeleteSongArgs {

    @Field(() => String) 
    id: SongType["id"];
    
}

@ArgsType()
export class GetSongArgs {

    @Field(() => ID) 
    id: Schema.Types.ObjectId;
    
}