import { Message } from "./messages.model";

const messagesController = {
	Messages: () => Message.find({}),
	addMessage: (message: any) => {
		const newMessage = new Message({ 
            _id: message._id,
			device: message.device,
			timestamp: message.timestamp,
			data: message.data,
			creae_at: message.creae_at,
		});
		return newMessage.save();
	}
};

export { messagesController };
