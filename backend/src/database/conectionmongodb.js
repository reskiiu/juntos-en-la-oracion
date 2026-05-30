import { MongoClient } from 'mongodb';

const getconnection =async () => { 
    try {
        const mongourl = 'mongodb://localhost:27017/parqueadero';
        const client = await MongoClient.connect(mongourl);
        return client.db();

    }
    catch (error) { 
        console.error('Error al conectar a MongoDB:', error);
    }
};

export {getconnection};

