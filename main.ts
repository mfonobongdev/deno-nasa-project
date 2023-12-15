import { cors, express, morgan } from "@/deps";
import planetsRouter from "@/routes/planets/planets.router.ts";
import launchesRouter from "@/routes/launches/launches.router.ts";

const PORT = Deno.env.get("PORT") || 8000;

const app = express();

/* middleware */
app.use(cors({
  origin: "http://localhost:3000",
}));
app.use(morgan("combined"));
app.use(express.json());

/* routes */
app.use("/planets", planetsRouter);
app.use("/launches", launchesRouter);

console.log(`HTTP server running. Access it at: http://localhost:${PORT}/`);
app.listen(PORT);
