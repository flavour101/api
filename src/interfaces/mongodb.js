import { MongoClient } from "mongodb";
import config from "../config";

const url = `mongodb+srv://${config.mongodb.user}:${config.mongodb.password}@${config.mongodb.cluster}/${config.mongodb.db}?retryWrites=true`;
const options = {
    useNewUrlParser: true
}

const db = {};

db.test = () => {
    MongoClient.connect(url, options, (err, client) => {
        if (err) throw err;

        console.log("Collections Available:")
        client.db(config.mongodb.db)
            .collections()
            .then(collections => {
                collections.forEach(collection => {
                    console.log("- " + collection.s.name)
                })
                client.close();
            })
    })
}

db.fetchAllFromCollection = collection => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            if (err) reject(err);

            client.db(config.mongodb.db)
                .collection(collection)
                .find({})
                .toArray((error, result) => {
                    if (error) reject(err);

                    resolve(result);
                    client.close();
                });
        })
    })
}

db.fetchByIdFromCollection = (collection, id) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            if (err) reject(err);

            client.db(config.mongodb.db)
                .collection(collection)
                .findOne({
                    "id": id
                }, (error, result) => {
                    if (error) reject(err);

                    resolve(result);
                    client.close();
                });
        })
    })
}
// SELECT * FROM image WHERE reference_id='${id}' AND reference_type='blog'

db.fetchImagesByReferenceId = (referenceType, referenceId) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            if (err) reject(err);

            client.db(config.mongodb.db).collection("gallery")
                .find({
                    "reference_type": referenceType,
                    "reference_id": referenceId
                })
                .toArray((error, result) => {
                    if (error) reject(err);

                    resolve(result);
                    client.close();
                });
        })
    })
}

export default db;