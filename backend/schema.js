export const typeDefs = `#graphql
  type Game {
    id : ID!
    title : String 
    platform : [String!]!
  }

  type Review {
    id : ID!
    rating : Int!
    content : String!
  }

  type Author {
    id : ID!
    name : String!
    verified: Boolean!
  }

  type Query {
    reviews : [Review]
    games : [Game]
    authors : [Author]
  }
`

// 5 types of qgql
// int , float , string , bool , ID

// ! mark means not nullable

// the query type is must I guess