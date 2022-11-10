import { MongoClient } from "mongodb";

const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017";
const DB_NAME = "earthquakesDB";
const COLLECTION_NAME = "quakes";
const PAGE_SIZE = 20;

const getQuakes = async function (query = {}, page = 0) {
  let client;

  try {
    client = new MongoClient(mongoURL);
    const quakesCol = client.db(DB_NAME).collection(COLLECTION_NAME);

    return await quakesCol
      .find(query)
      .skip(PAGE_SIZE * page)
      .limit(PAGE_SIZE)
      .toArray();
  } finally {
    console.log("getQuakes: Closing db connection");
    client.close();
  }
};

export default {
  getQuakes,
};
