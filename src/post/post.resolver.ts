import { pubsub } from '../server'
import { postController } from "./post.controller";

const POST_ADDED = "POST_ADDED";

const postResolver = {
	Subscription: {
		postAdded: {
			subscribe: () => pubsub.asyncIterator([POST_ADDED])
		}
	},
	Query: {
		Devices(root: any, args: any, context: any) {
			return postController.Devices();
		}
	},
	Mutation: {
		addPost(root: any, args: any, context: any) {
			pubsub.publish(POST_ADDED, { postAdded: args });
			return postController.addPost(args);
		}
	}
};

export { postResolver };
