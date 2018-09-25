import { gql } from "apollo-server";

const postSubscription = gql`
	type Subscription {
		postAdded: Device
	}
`;

export { postSubscription };
