import { express } from "@/deps";
import planetsController from "./planets.controller.ts";

const planetsRouter = express.Router();

planetsRouter.get("/", planetsController.getAllPlanets);

export default planetsRouter;
