import { gql } from "apollo-server";

const userMutation = gql`
	type Mutation {
		addUser(email: String,
	name: String,
	picture: String,
	given_name: String,
	family_name: String,
	locale: String): User
	}
`;
export { userMutation };
