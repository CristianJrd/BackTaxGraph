import { gql } from "apollo-server";

const messagesType = gql`
	type Message {
        _id: String
		device: String
		timestamp: String
		data: String
		creae_at: String
	}
`;

export { messagesType };
