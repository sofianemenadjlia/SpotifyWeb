const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");
const auth = require("../middleware/auth");

// Route to sign up
/**
 * @openapi
 * /signup:
 *   post:
 *     summary: Register a new user
 *     requestBody:
 *       description: User information for registration
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User registered successfully
 */
router.post("/signup", userCtrl.signup);

// Route to log in
/**
 * @openapi
 * /login:
 *   post:
 *     summary: Log in as an existing user
 *     requestBody:
 *       description: User credentials for login
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User logged in successfully
 */
router.post("/login", userCtrl.login);

// Route to delete a user
/**
 * @openapi
 * /{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User ID to delete
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: User deleted successfully
 */
router.delete("/:id", auth, userCtrl.deleteUser);

// Route to update a user
/**
 * @openapi
 * /{id}:
 *   put:
 *     summary: Update a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User ID to update
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       description: Updated user information
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User updated successfully
 */
router.put("/:id", auth, userCtrl.putUser);

// Route to get a user by ID (requires authentication)
/**
 * @openapi
 * /{id}:
 *   get:
 *     summary: Get a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User ID to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: User retrieved successfully
 */
router.get("/:id", auth, userCtrl.getUser);

// Route to get a user by ID (public)
/**
 * @openapi
 * /{id}:
 *   get:
 *     summary: Get a user by ID (public)
 *     parameters:
 *       - in: path
 *         name: id
 *         description: User ID to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: User retrieved successfully
 */
router.get("/:id", userCtrl.getUser);

module.exports = router;
