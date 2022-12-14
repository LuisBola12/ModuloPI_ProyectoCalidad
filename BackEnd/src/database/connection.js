import sql from 'mssql';
import { config } from 'dotenv';

const dbSettings = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options:{
        encrypt: true,
        trustServerCertificate: true,
    }
}
export const getConnection = async () =>{
    try{
        const pool = await sql.connect(dbSettings);
        return pool;
    }catch(e){
        console.log(`Error: ${e}`);
    }
}
export {sql};