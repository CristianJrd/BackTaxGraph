import { gql } from "apollo-server";

const messagesQuery = gql`
	type Query {
		Messages: [Message]
	}
`;

export { messagesQuery };
