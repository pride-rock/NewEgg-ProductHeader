# NewEgg-ProductHeader

This component contains the product header of a e-commerce retail site.
It is developed in full-stack in mind with a sqlite3 database, node.js server, and React client with RESTful API.
The API contains a multitude of product information and image renderings of display.

## Dependencies
- [Node.js](https://nodejs.org/en/) w/ [Express.js](https://www.npmjs.com/package/express) & [Axios](https://www.npmjs.com/package/axios)
- [sqlite3](https://www.npmjs.com/package/sqlite3)
- [React](https://reactjs.org/)
- [forever.js](https://github.com/foreverjs/forever)
- Testing:
  - Jest
  - Puppeteer

## Getting Started

### database generation & seeding
- run `sqlite3 (DBFILE NAME) < (SQL FILENAME)` to create empty db file
- execute `databaseInsertion.js` to generate sampleData & seed db file

- server
- `forever start server/index.js` then `npm run server`
- `npm run server-dev`

- webpack
- `npm run react-dev`
