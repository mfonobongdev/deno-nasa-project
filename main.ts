import { cors, express, morgan } from "@/deps";
import planetsRouter from "@/routes/planets/planets.router.ts";

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

console.log(`HTTP server running. Access it at: http://localhost:${PORT}/`);
app.listen(PORT);
