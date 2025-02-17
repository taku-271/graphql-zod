import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "src/schema.graphql",
  generates: {
    "../backend/graphql": defineConfig({
      resolverRelativeTargetDir: "../../backend/graphql/resolvers",
    }),
    "../frontend/graphql/graphql.ts": {
      plugins: ["typescript", "typescript-validation-schema"],
      config: {
        schema: "zod",
        directives: {
          required: {
            msg: ["min", "1", "$1"],
          },
          alphabet: {
            msg: [
              "regex",
              "/^[\\u3040-\\u309F\\u30A0-\\u30FF\\u4E00-\\u9FFFsA-Za-z0-9-]+$/",
              "$1",
            ],
          },
          japanese: {
            msg: [
              "regex",
              "/^[\\u3040-\\u309F\\u30A0-\\u30FF\\u4E00-\\u9FFFs]+$/",
              "$1",
            ],
          },
        },
      },
    },
  },
};

export default config;
