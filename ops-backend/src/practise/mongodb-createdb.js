// File: ops-backend/src/practise/mongodb-createdb.js
import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function main() {
    await client.connect();
    console.log('Connected successfully to local MongoDB');
    
    // This switches to your database and automatically creates it
    const db = client.db('order-processing');
    const collection = db.collection('orders');
    
    // Inserting a document makes the database permanent
    await collection.insertOne({ item: "test_order", status: "created" });
    console.log('Database "order-processing" and collection "orders" created!');
    
    await client.close();
}

main().catch(console.error);
