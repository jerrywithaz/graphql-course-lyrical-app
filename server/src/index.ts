import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import { connection } from './database';
import buildSchema from './schema';

dotenv.config();

const port = process.env.PORT || 4000;
const isDev = process.env.NODE_ENV === "development";
const playground = isDev ? true : false;

async function bootstrap(): Promise<void> {

    const schema = await buildSchema();
    
    const context = await connection();

    const server = new ApolloServer({
        schema,
        playground,
        context
    });
    
    server.listen(port, () => {
        console.log(`GraphQL listening on port ${port}`);
    });

}

bootstrap();