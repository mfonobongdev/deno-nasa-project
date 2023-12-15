import { parse, path } from "@/deps";

const planets: Planet[] = [];

const pathToFile = path.join(Deno.cwd(), "data", "kepler_data.csv");
const file = await Deno.open(pathToFile, { read: true });

await file.readable.pipeTo(writableStream());

function getAllPlanets() {
  return planets;
}

export default {
  getAllPlanets,
};

/* functions */
function writableStream() {
  return new WritableStream<Uint8Array>({
    // deno-lint-ignore require-await
    async write(chunk) {
      try {
        // Convert Uint8Array to string
        const chunkString = new TextDecoder().decode(chunk);

        // Process the chunk
        const records: Planet[] = parse(chunkString, {
          comment: "#",
          columns: true,
          delimiter: ",",
          trim: true,
          quote: false,
          skip_records_with_empty_values: true,
        });

        for (const record of records) {
          if (isHabitablePlanet(record)) {
            planets.push(record);
          }
        }
      } catch (error) {
        console.error(`Error processing chunk: ${error.message}`);
      }
    },
  });
}

function isHabitablePlanet(planet: Planet) {
  const isNotTooCold = Number(planet.koi_insol) > 0.36;
  const isNotTooHot = Number(planet.koi_insol) < 1.11;
  const isNotTooBig = Number(planet.koi_prad) < 1.6;
  const isConfirmed = planet.koi_disposition === "CONFIRMED";

  return isNotTooCold && isNotTooHot && isNotTooBig && isConfirmed;
}

/* types */
type Planet = {
  "kepler_name": string;
  "koi_prad": string;
  "koi_insol": string;
  "koi_disposition": "CONFIRMED" | "CANDITADE" | "FALSE POSITIVE";
};
