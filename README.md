# Engima Search

An application where users can go to search on Google with a twist. Users will not be given the results of their own queries, but will be given the results of the previous person's query. 

## Technologies Used
- MongoDB
- Express
- React/Redux
- Node.js

## API Documentation
### Query Endpoint
#### GET /query
Retrieves the previous query stored in the database.

Returns: An object with the previous query.

*Example:* 
```
> {
>     "query": "a search string"
> }
> Status: 200 OK

```

#### PUT /query
Finds a document in the collection and updates the query string with a new query string.

Returns: An empty object.

*Example:* 
```
> {
> }
> Status: 200 OK

```

## Special Thanks
This application was a re-creation of https://mysterysear.ch/. I saw this on the front page of reddit and wanted to see if I could recreate it!



