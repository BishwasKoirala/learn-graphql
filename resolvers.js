// we need db
import db from "./db.js";

// define resolver function
// funcions that dertermines how we respond to query
export const resolvers = {
  // for every field in root query type
  Query: {
    games() {
      return db.games;
    },

    reviews() {
      return db.reviews;
    },

    authors() {
      return db.authors;
    },
  },
};

/*
  appolo can filter it by these , dont need to worry here
  games {
    id 
    title 
    .....etc
  }
*/
