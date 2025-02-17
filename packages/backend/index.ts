import { createSchema, createYoga } from "graphql-yoga";
import { resolvers } from "./graphql/resolvers.generated";
import { typeDefs } from "./graphql/typeDefs.generated";

const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
});

Bun.serve({
  fetch: (req) => yoga.fetch(req),
});

console.log("Server is running");
