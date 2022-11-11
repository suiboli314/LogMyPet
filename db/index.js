import { MongoClient } from "mongodb";
import config from "../config.js";

const mongoURL = config.MONGO_URL || "mongodb://localhost:27017";
const DB_NAME = "logMyPetDB";
// const USER_COLLECTION_NAME = "users";
const PET_COLLECTION_NAME = "pets";
const PAGE_SIZE = 20;

const getPets = async function (page = 0) {
  let client;

  try {
    client = new MongoClient(mongoURL);
    const petsCol = client.db(DB_NAME).collection(PET_COLLECTION_NAME);

    return await petsCol
      .find({})
      .skip(PAGE_SIZE * page)
      .limit(PAGE_SIZE)
      .toArray();
  } finally {
    console.log("getPets: Closing db connection");
    client.close();
  }
};

export default {
  getPets,
};
