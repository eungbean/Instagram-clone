import path from "path";
import {makeExecutableSchema } from "graphql-tools";
import {fileLoader, mergeResolvers, mergeTypes} from "merge-graphql-schemas";


// api 폴더 밑에 모든 type과 resolver 받아오기
// api 폴더 밑에는 Resolver가 아닌 js파일이나 graphql을 두면 무조건 오류가 납니다.
const allTypes = fileLoader(path.join(__dirname, "/api/**/*.graphql"));
const allResolvers = fileLoader(path.join(__dirname, "/api/**/*.js"));

const schema = makeExecutableSchema({
  typeDefs: mergeTypes(allTypes),
  resolvers: mergeResolvers(allResolvers)
});

export default schema;