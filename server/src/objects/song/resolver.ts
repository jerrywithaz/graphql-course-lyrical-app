import { 
    Resolver, 
    Query,
    Args,
    FieldResolver,
    Root,
    Mutation,
    Arg
} from 'type-graphql';
import { LyricDocument } from '../lyric/model';
import { SongType, AddLyricReturnType, AddLyricOutput } from './types';
import { 
    GetSongArgs, 
    DeleteSongArgs
} from './args';
import { getLyrics, addSong, getSong, getSongs, addLyric, deleteSong } from './apis';
import { SongDocument } from './model';
import { AddLyricInput, AddSongInput } from './inputs';

/**
 * The Resolver for the `Song` Object Type.
 * 
 * Tells GraphQL how to transform a GraphQL operation into the appropriate data for Songs.
 * 
 */
@Resolver(() => SongType)
class SongResolver {

    /**
     ******************* Queries *******************
     */

    // Get Collection of Songs
    @Query(() => [SongType])
    async getSongs(): Promise<SongDocument[]> {
        return getSongs();
    }

    // Get a Song
    @Query(() => SongType, {nullable: true})
    async getSong(
        @Args() { id }: GetSongArgs
    ): Promise<SongDocument | null> {
        return getSong(id);
    }
    
    /**
     ******************* Mutations *******************
     */

    @Mutation(() => AddLyricOutput)
    async addLyric(
        @Arg("data") data: AddLyricInput
    ): Promise<AddLyricReturnType> {
        return addLyric(data);
    }

    @Mutation(() => SongType)
    async addSong(
        @Arg("data") data: AddSongInput
    ): Promise<SongDocument | null> {
        return addSong(data);
    }

    @Mutation(() => SongType)
    async deleteSong(
        @Args() { id }: DeleteSongArgs
    ): Promise<SongDocument | null> {
        return deleteSong(id);
    }

    /**
     ******************* Field Resolvers *******************
     */

    // Get the Songs Lyrics
    @FieldResolver()
    async lyrics(
        @Root() song: SongDocument,
    ): Promise<LyricDocument[]> {
        return getLyrics(song.id);
    }

}

export default SongResolver;