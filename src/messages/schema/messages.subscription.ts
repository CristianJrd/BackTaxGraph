import { gql } from "apollo-server";

const messagesSubscription = gql`
	type Subscription {
		messageAdded: Message
	}
`;

export { messagesSubscription };
