const express = require("express");
const router = express.Router();
const AuthGGCtrl = require("../controllers/auth_google");

// Route to get auth
/**
 * @openapi
 * /:
 *   get:
 *     summary: Recover authentication
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.get("/", AuthGGCtrl.getAuth);

// Route to get google
/**
 * @openapi
 * /google:
 *   get:
 *     summary: Retrieves authentication via Google
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.get("/google", AuthGGCtrl.getGoogle);
module.exports=router;