import mongoose from 'mongoose';

const uri =  "mongodb+srv://zerry:Soccer85@cluster0-skqet.mongodb.net/test?retryWrites=true&w=majority&authSource=admin";

async function connection(): Promise<mongoose.Connection> {

    try {

        mongoose.Promise = global.Promise;
        mongoose.connect(uri, { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        mongoose.connection
            .once('open', () => console.log('Connected to MongoLab instance.'))
            .on('error', error => console.log('Error connecting to MongoLab:', error));

        return mongoose.connection;

    } catch (error) {
        return error;
    }
    

}

export default connection;