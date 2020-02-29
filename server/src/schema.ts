import { GraphQLSchema } from "graphql";
import { buildSchema } from 'type-graphql';
import { SongResolver } from './objects/song';
import { LyricResolver } from './objects/lyric';

/**
 * Builds the GraphQL Schema.
 */
async function schema(): Promise<GraphQLSchema> {
    return await buildSchema({
        resolvers: [SongResolver, LyricResolver],
        emitSchemaFile: true
    });
}
    
export default schema;