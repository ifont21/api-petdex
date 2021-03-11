import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import fileUpload from "express-fileupload";
import morgan from "morgan";
import router from "./routes";

const app = express();

const port = process.env.PORT ?? 8080;

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/static", express.static("public"));
app.use(fileUpload());

app.get("/", (request: express.Request, response: express.Response) => {
  response.send("init");
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server running from port ${port}...`);
});
