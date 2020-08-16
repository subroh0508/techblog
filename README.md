# Techblog written by Subroh Nishikori

## Scripts
### `prepublish`
- Build articles, Vue.js code(both client and server) and functions of Firebase Functions with `NODE_ENV=production`.

### `firebase:local`
- Preview Firebase Hosting and Functions on `localhost:5000`.
- Require to run `prepublish` beforehand.

### `preview:articles`
- Preview articles and client with `webpack-dev-server` on `localhost:8080`.
- Watch code changes of both articles and client.
- Use to preview the writing of an article.

### `preview:ssr`
- Preview server-side-rendering with Express server on `localhost:8080`.
- Watch only code changes of server.
- Use to server-side-rendering debugging.

## Directory Structure
### articles
- Put the articles of this blog written in markdown.

### packages/articles
- Put scripts transpiling the articles written in markdown to Javascript.

#### Scripts

- `build`: Transpile the articles to Javascript and generate articles title list.
- `watch`: Watch text changes, and transplie each time.

### packages/blog
- Put the blog client code written by Vue.js.
- This directory is root of Firebase project.
  - The code of Firebase Functions exists blow `functions` directory.

#### Scripts

- `build:client`: Build Vue.js code for client mode with `NODE_ENV=production`.
- `build:server`: Build Vue.js code for server mode with `NODE_ENV=production`.
- `build:functions`: Build Firebase Functions code with `NODE_ENV=production`.
- `watch:client`: Watch code changes, and build Vue.js code for client mode with `NODE_ENV=development`.
- `watch:server`: Watch code changes, and build Vue.js code for server mode with `NODE_ENV=development`.
