import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Content Moderation API",
      version: "1.0.0",
      description: "API for content moderation and user management",
    },
  },
  apis: ["./src/api/v1/routes/*.ts", "./src/api/v1/controllers/*.ts"], 
};

export const swaggerSpec = swaggerJSDoc(options); 

export const setupSwagger = (app: Express): void => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
