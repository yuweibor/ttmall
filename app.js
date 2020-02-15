const Koa = require("koa");
const json = require("koa-json");
const logger = require("koa-logger");
const KoaRouter = require("koa-router");
const parser = require("koa-bodyparser");

const app = new Koa();
const router = new KoaRouter();

// Json Prettier Middleware
app.use(json());
app.use(parser());
app.use(logger());

// Simple Middleware Example
app.use(async ctx => (ctx.body = { msg: "Hello world" }));

app.listen(4113, () => console.log("----------Server Started----------"));

module.exports = app;
