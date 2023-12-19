"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        // returns an array of Tracks that will be used to populate
        // the homepage grid of our web client
        // get all tracks, will be used to populate the homepage grid of our web client
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome();
        },
        Track: {
            author: ({ authorId }, _, { dataSources }) => {
                return dataSources.trackAPI.getAuthor(authorId);
            },
        },
    },
};
