import { pubsub } from "../server";
import { messagesController } from "./messages.controlles";

const POST_ADDED = "POST_ADDED";

const messagesResolver = {
	Subscription: {
		messageAdded: {
			subscribe: () => pubsub.asyncIterator([POST_ADDED])
		}
	},
	Query: {
		Messages(root: any, args: any, context: any) {
			return messagesController.Messages();
		}
	},
	Mutation: {
		addPost(root: any, args: any, context: any) {
			pubsub.publish(POST_ADDED, { messageAdded: args });
			return messagesController.addMessage(args);
		}
	}
};

export { messagesResolver };
