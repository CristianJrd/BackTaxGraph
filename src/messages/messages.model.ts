import mongoose from "mongoose";

const MessagesSchema = new mongoose.Schema({
	device: {
        type: String,
        required: true
	},
	timestamp: {
        type: String,
        required: true
	},
	data: {
        type: String,
        required: true
	},
	creae_at: {
        type: Date,
        default: new Date()
	}
}, {collection: "Messages", timestamps: true});

const Message = mongoose.model("Messages", MessagesSchema);
export { Message };
