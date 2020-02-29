import connection from './connection';
import { DatabaseConnection } from '../types';

async function context(): Promise<DatabaseConnection> {

    const dbConn = await connection();

    return { dbConn };

}

export default context;