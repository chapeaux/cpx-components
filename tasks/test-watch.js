const cmd = ["./node_modules/.bin/wtr", "components/**/test/*_spec.js", "--node-resolve", "--watch"].concat(Deno.args);
const p = Deno.run({ cmd });
await p.status();