require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";


/* // 하나하나 따로 입력하기
const typeDefs = `type Query{ hello: String! }`;
const resolvers = {Query: {hello: () => "Hi"}};
const server = new GraphQLServer({ typeDefs, resolvers });*/

// api 폴더에 모듈화시켜서 불러오기
import schema from "./schema";
const server = new GraphQLServer({ schema });

server.express.use(logger("dev"));

const PORT = process.env.PORT || 4000;
server.start({ port: PORT }, () =>
  console.log(`💁 Server running on http://localhost:${PORT}`)
);