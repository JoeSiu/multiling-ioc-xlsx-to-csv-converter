import { convertXlsxToCsv } from "xlsx-to-csv-ts";
import data from "../public/manifest.json";

export async function generate() {
  const result = await convertXlsxToCsv({
    inputFile: data.inputFile,
    outputFilename: data.outputFilename,
    outputDir: data.outputDir,
    filter: data.filter,
  });

  console.log(result.outputPath);
}

generate();
