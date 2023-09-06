import express from "express";
import morgan from "morgan";

function bootstrap(): void {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan("dev"));
  const { SV_PORT } = process.env ?? 3333;
  app.listen(SV_PORT, () => {
    console.log(`Server running on port ${SV_PORT}`);
  });
}

bootstrap();
