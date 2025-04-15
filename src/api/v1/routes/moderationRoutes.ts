import { Router } from "express";
import {
  moderatePost,
  flagUser,
  getPostById,
  getUserProfile,
  getFlaggedContentStats,
} from "../controllers/moderationController";

const router: Router = Router();

/**
 * @swagger
 * /api/v1/moderation/post/{id}:
 *   get:
 *     summary: Get post details
 *     description: Retrieve details of a specific post by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post details retrieved successfully
 */
router.get("/post/:id", getPostById);

/**
 * @swagger
 * /api/v1/moderation/post/{id}/moderate:
 *   post:
 *     summary: Moderate a post
 *     description: Apply moderation actions to a post.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post moderated successfully
 */
router.post("/post/:id/moderate", moderatePost);

/**
 * @swagger
 * /api/v1/moderation/user/{id}/profile:
 *   get:
 *     summary: Get user profile
 *     description: Retrieve the profile of a specific user.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 */
router.get("/user/:id/profile", getUserProfile);

/**
 * @swagger
 * /api/v1/moderation/user/{id}/flag:
 *   post:
 *     summary: Flag a user
 *     description: Flag a user for moderation.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User flagged successfully
 */
router.post("/user/:id/flag", flagUser);

/**
 * @swagger
 * /api/v1/moderation/content/flags/stats:
 *   get:
 *     summary: Get flagged content statistics
 *     description: Retrieve statistics on flagged content.
 *     responses:
 *       200:
 *         description: Flagged content statistics retrieved successfully
 */
router.get("/content/flags/stats", getFlaggedContentStats);

export default router;
