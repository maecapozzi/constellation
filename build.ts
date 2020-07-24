import * as fs from "fs";
import { exec } from "child_process";
import * as path from "path";
import chalk from "chalk";

const log = console.log;

let args = process.argv.slice(2)[0];

fs.readdirSync(args).map((dirName: string) => {
  log(chalk.green(`Attempting to build ${dirName} package`));
  const modPath = `./packages/${dirName}`;

  const packageManifest = path.join(modPath, "package.json");
  const latestBuildDiagnostics = path.join(modPath, "tsconfig.tsbuildinfo");

  if (!packageManifest) {
    throw new Error("This directory is missing a package.json file.");
  }

  // Important! I don't think the dist dir will be re-generated if this file is present.
  if (fs.existsSync(latestBuildDiagnostics)) {
    fs.unlinkSync(latestBuildDiagnostics);
  }

  exec(`lerna run build`, (e, stdout, stderr) => {
    // TODO: Make less bad :scream:
    if (e) throw e;

    log(chalk.green(`Successfully built ${dirName} package`));
  });
});
