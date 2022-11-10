import { initializeApp } from "firebase/app";
import * as dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.NODE_ENV;

const firebaseConfig = {
  
};
const app = initializeApp(firebaseConfig);