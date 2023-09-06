import dotenv from "dotenv";
dotenv.config();

export const config = {
  server: {
    port: process.env.SV_PORT || 3001,
  },
};
