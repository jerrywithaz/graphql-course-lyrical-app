import { 
    Resolver, 
    Query,
    Args,
    FieldResolver,
    Root,
    Mutation
} from 'type-graphql';
import { SongType } from '../song';
import { SongDocument } from '../song/model';
import { LyricType } from './types';
import { 
    GetLyricArgs, LikeLyricArgs, GetLyricsArgs 
} from './args';
import { getLyric, like } from './apis';
import { getSong, getLyrics } from '../song/apis';
import { LyricDocument } from './model';

/**
 * The Resolver for the `Lyric` Object Type.
 * 
 * Tells GraphQL how to transform a GraphQL operation into the appropriate data for a Lyric.
 * 
 */
@Resolver(() => LyricType)
class LyricResolver {

    /**
     ******************* Queries *******************
     */

    /**
     * Returns a Lyric.
     */
    @Query(() => [LyricType], {nullable: true})
    async getLyrics(
        @Args() { songId }: GetLyricsArgs
    ): Promise<LyricDocument[]> {
        return getLyrics(songId);
    }

    /**
     * Returns a Lyric.
     */
    @Query(() => LyricType, {nullable: true})
    async getLyric(
        @Args() { id }: GetLyricArgs
    ): Promise<LyricDocument | null> {
        return getLyric(id);
    }

    /**
     ******************* Mutations *******************
     */
    
     /**
      * Increases a Lyric's likes by 1.
      */
    @Mutation(() => LyricType)
    async like(
        @Args() { id }: LikeLyricArgs
    ): Promise<LyricDocument | null> {
        return like(id);
    }

    /**
     ******************* Field Resolvers *******************
     */

    /**
     * Get Lyric's Song.
     * @param lyric The Root Lyric
     */
    @FieldResolver(() => SongType)
    async song(
        @Root() lyric: LyricDocument
    ): Promise<SongDocument | null> {
        return getSong(lyric.songId);
    }

}

export default LyricResolver;