import { Connection } from 'mongoose';

export type DatabaseConnection = {
    dbConn: Connection;
};