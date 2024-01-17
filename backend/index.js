import {ApolloServer} from '@apollo/server'
import {startStandaloneServer} from '@apollo/server/standalone'
// types
import { typeDefs } from './schema.js'
//db
import db from './_db.js'

const resolvers = {
  Query : {
    games(){
      return db.games
    },
    authors (){
      return db.authors
    },
    reviews(){
      return db.reviews
    }

  }
}

/* */


// sever setup 
const server = new ApolloServer({
  typeDefs,
  resolvers

})

const { url } = await startStandaloneServer(server , {
  listen : {port : 4000}
})

console.log('server read at port ' , 4000)