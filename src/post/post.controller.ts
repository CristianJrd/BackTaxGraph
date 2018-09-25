import { Device } from "./post.model";

const postController = {
	Devices: () => Device.find({}),
	addPost: (post: any) => {
		const newPost = new Device({
			sigfox: post.sigfox,
			concesion: post.concesion,
			name: post.name,
			marcaVehicle: post.marcaVehicle, 
			modeloVehicle: post.modeloVehicle,
			placaVehicle: post.placaVehicle,
			image_url_fvehicle: post.image_url_fvehicle,
			image_url_lvehicle: post.image_url_lvehicle,
			image_url_rvehicle: post.image_url_rvehicle,
			image_url_bvehicle: post.image_url_bvehicle,
			image_url_conductor: post.image_url_conductor,
			conductorFullName: post.conductorFullName,
			conductorAddress: post.conductorAddress,
			conductorDistrict: post.conductorDistrict,
			conductorNumExt: post.conductorNumExt,
			conductorNumInt: post.conductorNumInt,
			conductorTel: post.conductorTel,
			lastLocation: post.lastLocation,
			contTravel: post.contTravel,
			contTime: post.contTime,
			contKm: post.contKm,
			contEfectivo: post.contEfectivo
		});
		return newPost.save();
	}
};

export { postController };
