import * as esbuild from "esbuild";

const options = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  platform: "node",
  target: "es2020",
  outfile: "dist/bundle.js",
  format: "esm",
  logLevel: "info",
  plugins: [] as esbuild.Plugin[],
} satisfies esbuild.BuildOptions;

if (process.argv.includes("--watch")) {
  const context = await esbuild.context(options);

  await context.watch();

  console.log("Watching for changes...");
} else {
  await esbuild.build(options);
}
