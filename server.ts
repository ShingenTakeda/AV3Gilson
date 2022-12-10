// app.ts
import { Application } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { viewEngine, oakAdapter , etaEngine} from "https://deno.land/x/view_engine@v10.5.1c/mod.ts"
import { Test } from "./js/entry.js"

const app = new Application();

Test();

app.use(
  viewEngine(oakAdapter, etaEngine, {
    viewRoot: "./views/html",
  })
);

app.use(async (ctx, next) => {
  ctx.render("index.html", { name: "John" } );
});

Deno.writeTextFileSync('data.txt', 'some data')

await app.listen({ port: 8000 });