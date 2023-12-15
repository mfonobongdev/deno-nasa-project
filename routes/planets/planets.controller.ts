import { type Request, type Response } from "@/deps";
import planetsModel from "@/models/planets.model.ts";

function getAllPlanets(_req: Request, res: Response) {
  return res.status(200).json(planetsModel.planets);
}

export default {
  getAllPlanets,
};
