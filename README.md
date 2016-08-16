
# Aggregator

Search all the API's on the web (google, github, gitlab, youtube, deezer, etc).
Only implements github repository search for now.

Demo: https://ns-ceggwivfji.now.sh

![http://i.imgur.com/9pinj3v.jpg](http://i.imgur.com/9pinj3v.jpg)

## Development

Aggregator uses [choo](https://github.com/yoshuawuyts/choo) and [bulma](http://bulma.io)

Start the webpack dev server:

    npm run dev

Navigate to <http://localhost:3000>.

Any changes you make to your files ( .js, .css, etc.) will trigger a reload.

## Production

When you're ready to deploy:

    npm run build

This will create a `dist` folder:

    .
    └── dist
        ├── index.html
        ├── 5df766af1ced8ff1fe0a.css
        ├── 5df766af1ced8ff1fe0a.js
        └── ...

You can serve the dist folder statically using `http-server`:

    npm start
