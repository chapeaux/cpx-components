const mapFilter = /\.map$/;
const fileFilter = /^http/;
const jsFilter = /\.js$/;
const declarationFilter = /\.d.ts$/;
const importMapPath = './import_map.json';

async function browserEmit(path: string) {
  //console.info('Browser Path',path);
  let { files, diagnostics } = await Deno.emit(path, {
    check: true,
    importMapPath: importMapPath,
    compilerOptions: {
      lib: ["es6", "es2021", "dom"],
      strict: false,
      module: "es6",
      target: "es6",
      declaration: true,
      sourceMap: false
    },
  });
  
  if (diagnostics.length) {
    console.warn(Deno.formatDiagnostics(diagnostics));
  }
  //console.log(Object.keys(files));  
  Object.keys(files).map(file => {
    //console.info('Browser Emit:',file, 'Map:',!mapFilter.test(file), 'File:', !fileFilter.test(file), 'JS:',!jsFilter.test(file));
    if (!fileFilter.test(file) && (mapFilter.test(file) || jsFilter.test(file))) {
      const newFileName = file.replace("file://","").replace("/src", "").replace(".ts", "");
      //console.log('Browser',newFileName);
      Deno.writeTextFile(
        newFileName,
        files[file],
      );
    }
  });

  ({ files, diagnostics } = await Deno.emit(path, {
    check: true,
    importMapPath: importMapPath,
    compilerOptions: {
      lib: ["es6","es2021","dom"],
      strict: false,
      module: "commonjs",
      target: "es6",
      
    }
  }));

  if (diagnostics.length) {
    console.warn(Deno.formatDiagnostics(diagnostics));
  }
  
  Object.keys(files).map(file => {
    //console.info('CJS file',file, 'Map:',!mapFilter.test(file), 'File:', !fileFilter.test(file), 'JS:',!jsFilter.test(file));
    if (!mapFilter.test(file) && !fileFilter.test(file) && jsFilter.test(file)) {
      const newFileName = file.replace("file://","").replace("/src", "").replace(".ts", ".cjs");
      //console.log('CJS',newFileName);
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
  if (event.kind === 'modify') {
    event.paths.map((path) => {
      if ((/components\/.+\/src/).test(path)) {
        browserEmit(path);
      } else {
        // maybe do something else at some point
      }
    });
  }
}
