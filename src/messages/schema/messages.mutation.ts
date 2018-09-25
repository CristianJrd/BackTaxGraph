import { gql } from "apollo-server";

const messagesMutation = gql`
	type Mutation {
		addMessage(
        _id: String
		device: String
		timestamp: String
		data: String
		creae_at: String
		): Message
	}
`;
export { messagesMutation };
