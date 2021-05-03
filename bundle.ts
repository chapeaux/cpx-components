async function bundleFiles(path:string) {
    const { files, diagnostics } = await Deno.emit(path,{
        check: false,
        bundle: "esm",
        compilerOptions: {
            lib: ["es6", "dom"],
            module: 'es6',
            target: 'es6'
        }
    });
    if (diagnostics.length) {
        console.warn(Deno.formatDiagnostics(diagnostics));
    }
    Deno.writeTextFile(path.replace('/src','').replace('.ts','.js'), files['deno:///bundle.js']);
}

const watcher = Deno.watchFs('./components', {recursive: true});
for await (const event of watcher) {
    event.paths.map(path=> {
        if ((/components\/.+\/src/).test(path)) {
            bundleFiles(path);
        } else {
            // maybe do something else at some point
        }
    });
}