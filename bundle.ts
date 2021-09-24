async function bundleFiles(path: string) {
  const mapFilter = /\.map$/;
  const fileFilter = /^http/;
  const { files, diagnostics } = await Deno.emit(path, {
    check: true,
    compilerOptions: {
      lib: ["es6", "es2021", "dom"],
      strict: false,
      module: "es6",
      target: "es6",
      declaration: true
    },
  });
  
  if (diagnostics.length) {
    console.warn(Deno.formatDiagnostics(diagnostics));
  }
  
  Object.keys(files).map(file => {
    if (!mapFilter.test(file) && !fileFilter.test(file)) {
      console.log(file);
      Deno.writeTextFile(
        file.replace("file://","").replace("/src", "").replace(".ts", ""),
        files[file],
      );
    }
  });
}

const watcher = Deno.watchFs("./components", { recursive: true });
for await (const event of watcher) {
  if (event.kind === 'modify') {
    event.paths.map((path) => {
      if ((/components\/.+\/src/).test(path)) {
        bundleFiles(path);
      } else {
        // maybe do something else at some point
      }
    });
  }
}
