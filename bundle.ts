import { walk, walkSync } from "https://deno.land/std/fs/mod.ts";

async function printFileNames(path:string) {
    for await (const entry of walkSync(path)) {
        console.log(entry.path);
    }
}

let watchPaths = Array.from([...walkSync('./components')])
    .filter(path=>path.isDirectory&&(/components\/.+\/(?:src|demo)/).test(path.path))
    .map(path=>path.path);
//printFileNames('./components').then(() => console.log("Done!"));

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

// const files = new Map([
//     //    ['./components/cpx-keycloak/src/cpx-keycloak.ts','cpx-keycloak'],
//     ['CPXBranch','cpx-branch'],
//     ['CPXKeycloak','cpx-keycloak'],
//     ['CPXQuery','cpx-query'],
//     // ['CPXReporter','cpx-reporter'],
//     // ['CPXResult','cpx-result'],
//     // ['CPXState','cpx-state'],
//     // ['CPXTarget','cpx-target'],
//     // ['CPXUrl','cpx-url'],
//     ['CPXUser','cpx-user']
// ]);

const watcher = Deno.watchFs(watchPaths, {recursive: true});
for await (const event of watcher) {
    console.log(event);
    event.paths.map(path=> {
        if ((/components\/.+\/src/).test(path)) {
            bundleFiles(path);
        } else {

        }
    });
}