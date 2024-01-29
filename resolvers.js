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
    game(__ , args) {
      return db.games.find((game) => game.id === args.id)
    },
    reviews() {
      return db.reviews;
    },
    //singular review
    review(__ , args) {
      return db.reviews.find((review) => review.id === args.id)
    },
    authors() {
      return db.authors;
    },
    author(__ , args) {
      return db.authors.find((author) => author.id === args.id)
    }

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
