import { type Request, type Response } from "@/deps";
import launchesModel from "@/models/launches.model.ts";

function httpGetAllLaunches(_req: Request, res: Response) {
  return res.status(200).json(launchesModel.getAllLaunches());
}

export default {
  httpGetAllLaunches,
};
