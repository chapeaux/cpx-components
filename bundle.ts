import {emit, bundle} from "https://deno.land/x/emit@0.0.1/mod.ts";

const mapFilter = /\.map$/;
const fileFilter = /^http/;
const jsFilter = /\.js$/;
const declarationFilter = /\.d.ts$/;
const importMapPath = "./import_map.json";

async function browserEmit(path: string) {
  //console.info('Browser Path',path);
  let { files, diagnostics } = await Deno.emit(path, {
    check: true,
    //importMapPath: importMapPath,
    compilerOptions: {
      lib: ["es6", "esnext", "dom"],
      strict: false,
      module: "esnext",
      target: "es6",
      declaration: true,
      sourceMap: false,
    },
  });

  if (diagnostics.length) {
    console.warn(Deno.formatDiagnostics(diagnostics));
  }
  
  Object.keys(files).map((file) => {
    if (
      !fileFilter.test(file) && (mapFilter.test(file) || jsFilter.test(file))
    ) {
      const newFileName = file.replace("file://", "").replace("/src", "")
        .replace(".ts", "");
      Deno.writeTextFile(
        newFileName,
        files[file],
      );
    }
  });

  return path;
}

const watcher = Deno.watchFs("./components", { recursive: true });
for await (const event of watcher) {
  if (event.kind === "modify") {
    event.paths.map((path) => {
      if ((/components\/.+\/src/).test(path)) {
        browserEmit(path);
      } else {
        // maybe do something else at some point
      }
    });
  }
}
