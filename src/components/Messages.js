import Message from "./Message"
import { messages } from "../data";

function Messages() {
    const messageList = messages.map(message => {
        return(
            <Message
                key={message.id}
                type={message.type}
                name={message.name}
                content={message.content}
            />   
        )
    })

    return(
        <main>
            <h2>Messages</h2>
            <section className="messages">
                <ul>
                    {messageList}    
                </ul>
            </section>
            <form className="message-form">
                <input placeholder="Type a message..." />
            </form>
      </main>
    )
}

export default Messages