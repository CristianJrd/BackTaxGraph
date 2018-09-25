import { addMockFunctionsToSchema, makeExecutableSchema } from "apollo-server";
import { GraphQLSchema } from "graphql";
import { messagesType, messagesQuery, messagesMutation, messagesSubscription } from "./schema";

const messagesSchema: GraphQLSchema = makeExecutableSchema({
	typeDefs: [messagesType, messagesQuery, messagesMutation, messagesSubscription]
});
addMockFunctionsToSchema({ schema: messagesSchema });

export { messagesSchema };
