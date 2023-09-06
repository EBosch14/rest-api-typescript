import express from "express";
import morgan from "morgan";
import { config } from "./config";
import { healthRouter } from "./health/health.route";

function bootstrap() {
  const { port } = config.server;
  const app = express();

  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/health", healthRouter);

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

bootstrap();
