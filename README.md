# no Db Review (Race Scorer)

## frontend checklist

- reset.css
- package.json
  - main => go to server

**Proxy**
src/setupProxy.js

```js
const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/api", { target: "http://localhost:4000/" }));
};
```

### Folder-structure

- src/

  - index.js
  - App.js
  - reset.css
  - App.css
  - setupProxy.js
  - components/
    - Header/
      - Header.js
      - Header.css
    - StartingRoster/
      - StartingRoster.js
      - StartingRoster.css
    - FinalResults
      - FinalResults.js
    - AthleteAdder/
      - AthleteAdder.js
      - AthleteAdder.css

### dependencies

- `axios`

## backend checklist

- `express`

### data

```js
{
       id: Number,
       athlete: String,
       athleteImage: String,

}
```

### endpoints

- get: (get all athlete) `/api/people/get`

- get: (get final results) `/api/resultslist/get`

- post: (create athlete to start) `/api/startlist/create`

- post: (create athlete to final results) `/api/resultslist/create`

- put: (update athlete) `/api/startlist/update`

- delete: (delete athlete) `/api/startlist/delete`
