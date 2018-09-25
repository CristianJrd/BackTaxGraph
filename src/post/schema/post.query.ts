import { gql } from "apollo-server";

const postQuery = gql`
	type Query {
		Devices: [Device]
	}
`;

export { postQuery };
