require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
require("./controllers/auth_google");
require("./controllers/auth_spotify");
const app = express();
app.use(express.json());
const User = require("./models/user");
const userRoutes = require("./routes/user");
const passport = require("passport");

port = 8090

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send('<a href="/api/auth/google">Authenticate with Google </a>');
});

// app.get("/", (req, res) => {
//   res.send('<a href="/api/auth/spotify">Authenticate with Spotify </a>');
// });

app.get(
  "/api/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  '/api/auth/spotify',
  passport.authenticate('spotify', {
    scope: ['user-read-email', 'user-read-private'],
    showDialog: true
  })
);


app.get(
  "/api/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/api/auth/google/success",
    failureRedirect: "/api/auth/google/failure",
  })
);

app.get(
  '/api/auth/spotify/callback',
  passport.authenticate('spotify', {
    successRedirect: "/api/auth/spotify/success",
    failureRedirect: "/api/auth/spotify/failure",
  })
);

app.get("/api/auth/google/success", (req, res) => {
  if (req.isAuthenticated()) {
    const userEmail = encodeURIComponent(
      req.user.email || "Email not available"
    );
    res.redirect(`http://localhost:${port}?userEmail=${req.user.email}`);
  } else {
    
    res.status(401).send("User not authenticated");
  }
});

app.get("/api/auth/spotify/success", (req, res) => {
  if (req.isAuthenticated()) {
    console.log(req.user.email);
    const userEmail = encodeURIComponent(
      req.user.email || "Email not available"
    );
    res.redirect(`http://localhost:${port}?userEmail=${req.user.email}`);
    console.log(res)
  } else {
    res.status(401).send("User not authenticated");
  }
});

app.get("/logout", (req, res) => {
  res.clearCookie();
  req.logout((err) => {
    if (err) {
      return res.status(500).send("Error during logout");
    }
    req.session.destroy();

    // Add Cache-Control and Pragma headers to clear cache
    res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");

    res.send("Goodbye!");
  });
});

app.get("/api/auth/google/failure", (req, res) => {
  res.send("Failed to authenticate..");
});

app.get("/api/auth/spotify/failure", (req, res) => {
  res.send("Failed to authenticate..");
});

// Connexion à la base de données MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connecté à la base de données MongoDB"))
  .catch((err) => {
    console.error("Erreur de connexion à la base de données:", err);
    process.exit(1); // Arrête l'application en cas d'échec de la connexion à la base de données
  });

//pemret de valider le CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );

  next();
});

app.use("/api/auth", userRoutes);
app.use("/auth", userRoutes);

module.exports = app;
