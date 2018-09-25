import { gql } from "apollo-server";

const postMutation = gql`
	type Mutation {
		addPost(
		sigfox: String
		concesion: String
		name: String
		marcaVehicle: String
		modeloVehicle: String
		placaVehicle: String
		image_url_fvehicle: String
		image_url_lvehicle: String
		image_url_rvehicle: String
		image_url_bvehicle: String
		image_url_conductor: String
		conductorFullName: String
		conductorAddress: String
		conductorDistrict: String
		conductorNumExt: String
		conductorNumInt: String
		conductorTel: String
		lastLocation: String
		contTravel: Int
		contTime: Int
		contKm: Int
		contEfectivo: Float
		): Device
	}
`;
export { postMutation };
