const Chat = () => {
	return (
		<div className="container">
			<div className="chat chat-start">
				<div className="chat-bubble chat-bubble-primary">
					What kind of nonsense is this
				</div>
			</div>
			<div className="chat chat-start">
				<div className="chat-bubble chat-bubble-secondary">
					Put me on the Council and not make me a Master!??
				</div>
			</div>
			<div className="chat chat-start">
				<div className="chat-bubble chat-bubble-accent">Annoying</div>
			</div>
			<div className="chat chat-end">
				<div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
			</div>
			<div className="chat chat-end">
				<div className="chat-bubble chat-bubble-success">
					You have been given a great honor.
				</div>
			</div>
			<div className="chat chat-end">
				<div className="chat-bubble chat-bubble-warning">
					To be on the Council at your age.
				</div>
			</div>
			<div className="chat chat-end">
				<div className="chat-bubble chat-bubble-error">Annoying</div>
			</div>
		</div>
	);
};
export default Chat;
