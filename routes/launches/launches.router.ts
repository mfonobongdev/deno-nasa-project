import { express } from "@/deps";
import launchesController from "./launches.controller.ts";

const launchesRouter = express.Router();

launchesRouter.get("/", launchesController.httpGetAllLaunches);

export default launchesRouter;
