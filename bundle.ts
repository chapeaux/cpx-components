async function bundleFiles(val:any, key?:any) {
    const { files, diagnostics } = await Deno.emit(`./components/${val}/src/${val}.ts`,{
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
    Deno.writeTextFile(`./components/${val}/${val}.js`, files['deno:///bundle.js']);
}

const files = new Map([
    //    ['./components/cpx-keycloak/src/cpx-keycloak.ts','cpx-keycloak'],
    ['CPXUser','cpx-user']
]).forEach(bundleFiles);