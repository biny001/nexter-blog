import { MongoClient } from "mongodb";

const uri: string | undefined = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MongoDB URI is not provided in environment variables.");
}

const client = new MongoClient(uri);

export async function connectDB() {
  console.log(uri);
  try {
    await client.connect();
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error("Error connecting to MongoDb: ", err);
  }
}
