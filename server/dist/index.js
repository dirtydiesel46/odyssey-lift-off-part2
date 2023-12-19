"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const schema_1 = require("./schema");
const resolvers_1 = require("./resolvers");
const track_api_1 = require("./datasources/track-api");
async function startApolloServer() {
    const server = new server_1.ApolloServer({
        typeDefs: schema_1.typeDefs,
        resolvers: resolvers_1.resolvers,
    });
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        context: async () => {
            const { cache } = server;
            // this object becomes the resolvers contextValue, the third positional argument
            return {
                dataSources: {
                    trackAPI: new track_api_1.TrackAPI({ cache }),
                },
            };
        },
    });
    console.log(`
      🚀  Server is running
      📭  Query at ${url}
    `);
}
startApolloServer();
