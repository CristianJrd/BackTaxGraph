/* import {
	addMockFunctionsToSchema,
	gql,
	makeExecutableSchema
} from "apollo-server";
import { GraphQLSchema } from "graphql";
import { userType, userQuery, userMutation } from "./schema";
import { userSubscription } from "./schema/user.subscription";

const userSchema: GraphQLSchema = makeExecutableSchema({
	typeDefs: [userMutation, userType, userQuery, userSubscription]
});
addMockFunctionsToSchema({ schema: userSchema });

export { userSchema };
 */