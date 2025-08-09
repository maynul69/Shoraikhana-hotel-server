import express from "express"

import "dotenv/config";

import cors from "cors"
import { get } from "mongoose";

const app = express();
app.use(cors()) //enable cross-origin resoure sharing

app.get('/', (req, res) => res.send("API is Working"))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));