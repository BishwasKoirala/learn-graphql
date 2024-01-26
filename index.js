import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// import typedefs ansd pass it to appoloserver
import { typeDefs } from "./schema.js";
// import resolvers i.e function how we respond to query
import { resolvers } from "./resolvers.js";
//server setup

const server = new ApolloServer({
  //it expects 2 arguments :
  typeDefs,
  // descriptiion of data types and relartion of other data types
  resolvers,
  // funcions that dertermines how we respond to query
});

// start apollo server with this method
const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
