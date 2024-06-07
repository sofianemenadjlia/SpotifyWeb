const express = require("express");
const router = express.Router();
const AuthSPCtrl = require("../controllers/auth_spotify");

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
router.get("/", AuthSPCtrl.getAuth);

// Route to get spotify
/**
 * @openapi
 * /spotify:
 *   get:
 *     summary: Retrieves authentication via Spotify
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.get("/spotify", AuthSPCtrl.getSpotify);
module.exports=router;