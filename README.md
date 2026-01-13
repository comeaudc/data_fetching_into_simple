# Data Fetching Intro (Making HTTP requests)
-   ANY TIME you make a `request` to an API (Even if it is your API/Database), it's going to be asynchronous
    -   We always have to handle promises (async/await || .then()/.catch())
- You should ALWAYS handle your errors (try/catch || .then().catch())
-   READ THE DOCUMENTATION - make sure your API works BEFORE trying to implement it.
-   Good API = Good Documentation. Make sure it makes sense and works how you want it too.
-   MOST APIs - return data in JSON (JavaScript Object Notation) - standardization of how to format data

-   `fetch(url, {opt})` - built in JS function, that allows us to make requests
-   `axios` - useful library for handling and dealing with http requests
    - with axios you do NOT have to parse json. it is hanlded for you by AXIOS

## Vocab:
-   Request - object we send to ask a API/DB for information, we make a 'request'
-   Reponse - object we recieve/GET back from a DB/API (Fufilled/Rejected)

## Types of Requests:
-   GET - getting/asking for information/data

`My Website --request--> API/DB -- reponse --> My Website`