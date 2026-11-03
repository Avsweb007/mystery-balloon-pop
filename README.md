# Mystery Balloon Pop 🎈

An original two-player game conceived by Avsweb007 and built with ChatGPT assistance for a Handshake game-building challenge.

[Play the game](https://mystery-balloon-pop-amy.ovoidcamel1.chatgpt.site/)

## How to play
Create a room, share its code with a friend, and have both players get ready. Pop balloons to discover mystery prizes. Rare prizes earn more points. The highest score wins the 60-second round.

## About the project
Avsweb007 imagined colorful balloons floating upward with hidden surprises inside. She guided the design and tested the game with a family member. ChatGPT assisted with coding, testing, and publishing.

Built with JavaScript, HTML, CSS, Cloudflare Workers, and D1. The client and server are in worker/index.js. The SQL schema is in drizzle/0000_rooms.sql. Version checks prevent two players claiming the same balloon.

## Run locally
Install Node.js 24 or later. Open this folder in a terminal and run:

```sh
npm run dev
```

Visit http://localhost:4173 in two browser sessions. The development server automatically creates a local SQLite database.

Run automated tests with:

```sh
npm test
```

Tests cover room capacity, authentication, countdown, simultaneous pops, score consistency, round limits, rematches, and client script syntax.

## Hosting
The link above is the working multiplayer version. GitHub holds the source. GitHub Pages alone cannot run the server and database. Hosting elsewhere requires a compatible Worker runtime and a D1 database binding named DB, initialized with the included SQL schema. Hosting account identifiers, credentials, and live player data are excluded from this export.

## Future ideas
More surprise animals, backgrounds, and birds that interact with balloons.
