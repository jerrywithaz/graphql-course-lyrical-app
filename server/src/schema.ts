import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';
// import { SongResolver } from './objects/song';
// import { LyricResolver } from './objects/lyric';

/**
 * Builds the GraphQL Schema.
 */
async function schema(): Promise<GraphQLSchema> {
    return await buildSchema({
        resolvers: [`${__dirname}/objects/**/resolver.ts`],
        emitSchemaFile: `${__dirname}/schema.gql`
    });
}
    
export default schema;