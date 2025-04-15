import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import { setupSwagger } from "./swagger";
import moderationRoutes from "./api/v1/routes/moderationRoutes";

const app: Express = express();

// Security Headers using Helmet
app.use(helmet());
app.use(express.json());
setupSwagger(app);

/**
 * Mount moderation routes on /api/v1/moderation
 */
app.use("/api/v1/moderation", moderationRoutes);

/**
 * Default error handler for unmatched routes
 */
app.use((req: Request, res: Response): void => {
	res.status(404).json({ message: "Endpoint not found" });
});

export default app;