const files = [
    ['./components/cpx-keycloak/src/cpx-keycloak.ts','cpx-keycloak'],
    ['./components/cpx-user/src/cpx-user.ts','cpx-user']
];

await files.map(async f => {
    const [diagnostics, emit] = await Deno.bundle(`./components/${f[1]}/src/${f[1]}.ts`,undefined,{
        lib: ["es6", "dom"],
        //module: 'es6',
        target: 'es6'
    });
    await Deno.writeTextFile(`./components/${f[1]}/${f[1]}.js`, emit)
});
