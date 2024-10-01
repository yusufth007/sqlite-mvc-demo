import express from "express";
import authRoutes from "./routes/auth.js";
import dashboardRoutes from "./routes/dashboard.js";
import passport from "passport";
import session from "express-session";
import db from "./db.js";
import Auth from "./Auth.js";

const initAuth = new Auth();
const app = express();

const PORT = 8080;



app.use(express.urlencoded({extended: false}));
//routes
app.set('view engine', 'pug');

initAuth.init();
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use("/",dashboardRoutes);
app.use("/",authRoutes);

db.sync({ force: false })
  .then(() => {
    app.listen(PORT, console.log('Server is running on port: ' + PORT));
  }); 