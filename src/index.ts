import { convertXlsxToCsv } from "xlsx-to-csv-ts";
import { options } from "../public/options";

export async function generate() {
  const result = await convertXlsxToCsv({
    inputFile: options.inputFile,
    outputFilename: options.outputFilename,
    outputDir: options.outputDir,
    filter: options.filter,
  });

  console.log(result.outputPath);
}

generate();
