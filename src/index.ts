import express from "express";
import morgan from "morgan";
import { config } from "./config";

function bootstrap() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan("dev"));
  const { port } = config.server;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

bootstrap();
