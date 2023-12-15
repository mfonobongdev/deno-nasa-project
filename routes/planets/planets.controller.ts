import { type Request, type Response } from "@/deps";
import planetsModel from "@/models/planets.model.ts";

function httpGetAllPlanets(_req: Request, res: Response) {
  return res.status(200).json(planetsModel.getAllPlanets());
}

export default {
  httpGetAllPlanets,
};
