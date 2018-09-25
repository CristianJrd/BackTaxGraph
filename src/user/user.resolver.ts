import { AuthenticationError } from "apollo-server";
import { userController } from "./user.controller";
import { pubsub } from "../server";

const POST_ADDED = "POST_ADDED";

const userResolver = {
	Subscription: {
		userAdded: {
			subscribe: () => pubsub.asyncIterator([POST_ADDED])
		}
	},
	Query: {
		users(root: any, args: any, context: any) {
			if (!context.authorized) {
				console.error("User not authorized");
				throw new AuthenticationError("you must be logged in");
			}
			return userController.users(root, args.user);
		},
		validateUser(root: any, args: any) {
			return userController.findOrCreateUser(args.idToken);
		}
	},
	Mutation: {
		addUser(root: any, args: any, context: any) {
			pubsub.publish(POST_ADDED, { userAdded: args });
			return userController.addUser(args);
		}
	}
};

export { userResolver };
