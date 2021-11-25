import express from "express";
import cors from "cors";
import * as userController from "./controllers/userController.js";
import * as eventsController from "./controllers/eventsController.js";
import authenticationJWT from "./middlewares/authenticationJWT.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/sign-up", userController.signUp);
app.post("/sign-in", userController.signIn);

app.post(
  "/financial-events",
  authenticationJWT,
  eventsController.createFinancialEvent
);

app.get(
  "/financial-events",
  authenticationJWT,
  eventsController.getFinancialEvents
);

app.get(
  "/financial-events/sum",
  authenticationJWT,
  eventsController.getSumFinancialEvents
);

export default app;
