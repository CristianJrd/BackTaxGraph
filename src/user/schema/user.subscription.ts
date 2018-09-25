import { gql } from "apollo-server";

const userSubscription = gql`
	type Subscription {
		userAdded: User
	}
`;

export { userSubscription };
