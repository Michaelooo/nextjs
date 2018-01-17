// 使用原生的方式实现
// const { createServer } = require('http');
// const { parse } = require('url')
// const next = require('next');
// const dev = process.env.NODE_ENV != 'production';
// const app = next({dev});
// const handle = app.getRequestHandler()

// app.prepare().then(() => {
//   createServer((req, res) => {
//     // Be sure to pass `true` as the second argument to `url.parse`.
//     // This tells it to parse the query portion of the URL.
//     const parsedUrl = parse(req.url, true)
//     const { pathname, query } = parsedUrl
//     if (pathname === '/p/aa') {
//       app.render(req, res, '/post', { title: 'Hello Next.js' })
//     } else if (pathname === '/p/bb') {
//       app.render(req, res, '/post', { title: 'Learn Next.js is awesome' })
//     } else {
//       handle(req, res, parsedUrl)
//     }
//   }).listen(3000, err => {
//     if (err) throw err
//     console.log('> Ready on http://localhost:3000')
//   })
// });

// 使用express
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	server.get("/p/:id", (req, res) => {
		const actualPage = "/post";
		const queryParams = { title: req.params.id };
		app.render(req, res, actualPage, queryParams);
	});

	server.get("*", (req, res) => {
		return handle(req, res);
	});

	server.listen(3000, err => {
		if (err) throw err;
		console.log("> Ready on http://localhost:3000");
	});
});
