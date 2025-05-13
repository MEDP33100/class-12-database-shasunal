const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://linshasuna:homework12@homework12.22npdqd.mongodb.net/?retryWrites=true&w=majority&appName=Homework12";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
    tlsAllowInvalidCertificates: true
});

const databaseConnection = {
    client: client,
    run: async function () {
        try {
            const db = client.db('petsData');
            const pets = db.collection('petsCollection');
            const query = { type: 'Cat' }; // test query for demo
            const result = await pets.findOne(query);
            console.log('Test query result:', result);
        } finally {
            await client.close();
        }
    }
};

module.exports = databaseConnection;
