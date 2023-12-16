import { express } from "@/deps";
import launchesController from "./launches.controller.ts";

const launchesRouter = express.Router();

launchesRouter.get("/", launchesController.httpGetAllLaunches);
launchesRouter.post("/", launchesController.httpAddNewLaunch);
launchesRouter.delete("/:id", launchesController.httpAbortLaunch);

export default launchesRouter;
