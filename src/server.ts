import express from 'express';
import graphQLHTTP from 'express-graphql';
import { ApolloServer, PubSub } from "apollo-server";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cors from 'cors';
import { GraphQLSchema } from "graphql";
import { mergeSchemas } from "graphql-tools";
import {Device} from './post/post.model'
import {Message} from './messages/messages.model'
// const { OAuth2Client } = require("google-auth-library");

/* import dotenv from "dotenv";
import {
	CLIENT_ID,
	DB_NAME,
	MONGO_PORT,
	MONGO_URL
} from "./common/util/secrets";
import { userController } from "./user/user.controller"; */
import schemas from "./schema";
import resolvers from "./resolvers";

export const pubsub = new PubSub();

// function Unix_timestamp(t)
// {
//     let dt = new Date(t*1000);
//     let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
//     let year = dt.getFullYear();
//     let month = months[dt.getMonth()];
//     let date = dt.getDate();
//     const restart = 0;
//     let hr = dt.getHours();
//     let m = "0" + dt.getMinutes();
//     let s = "0" + dt.getSeconds();
//     return /*date + '/' + month + '/' + year + ' ' + */hr + ':' + m.substr(-2)/* + ':' + s.substr(-2)*/;
// }

const PORT = process.env.PORT || 4000
// Load environment variables from .env file, where API keys and passwords are configured
// dotenv.config({ path: ".env" });

// export const client = new OAuth2Client(CLIENT_ID);
// help to debug mongoose
mongoose.set("debug", true);

mongoose.connect(`mongodb://cristian:1q2w3e4r5t6y@ds125932.mlab.com:25932/iotaxi`);
const db = mongoose.connection;
db.on('error',()=> console.log("Error al conectar a la BD"))
	.once('open',() => console.log("Conectado a la BD!!"))

 const schema: GraphQLSchema = mergeSchemas({
	schemas,
	resolvers
});

// GraphQL
const server = new ApolloServer({
    schema,
/* 	context: async ({ req }: any) => {
		if (!req || !req.headers) {
			return;
		}

		const token = req.headers.authorization || "";
		const checkToken = await userController.findOrCreateUser(token);
		if (!checkToken.hasOwnProperty("authorized")) {
			return { user: checkToken, authorized: true };
		}
		return checkToken;
	}, */
	tracing: true
});

/* app.listen(PORT, () => {
    console.log(`Server now running at port ${PORT}`);
});
 */
server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`);
});
