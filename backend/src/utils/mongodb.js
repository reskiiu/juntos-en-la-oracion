import { getconnection } from "../database/conectionmongodb.js";

const getparque = async () => { 
    try {
        const database= await getconnection();
        const parque = await database.collection('parque').find().toArray();
        console.table(parque);
        console.log('Parque listed');
    }
    catch (error) {
        console.error('Error al conectar', error);
    } 
};

getparque();



