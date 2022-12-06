import express from "express";
import logger from "morgan";
import cors from "cors";

import shoppingListRouter from "./routes/shoppingList.js";

const app = express();

app.use(
	cors("https://638f6489e4ef9500625ee588--darling-stardust-e9a00f.netlify.app/")
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/items", shoppingListRouter);

export default app;
