import { express } from "@/deps";
import planetsRouter from "@/routes/planets/planets.router.ts";

const PORT = Deno.env.get("PORT") || 8000;

const app = express();

app.use(express.json());
app.use(planetsRouter);

console.log(`HTTP server running. Access it at: http://localhost:${PORT}/`);
app.listen(PORT);
