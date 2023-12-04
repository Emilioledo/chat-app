import React, { useEffect, useState } from "react";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import { Socket } from "socket.io-client";
import { connectSocket } from "../../services";

interface Message {
  id: number;
  text: string;
}

export const ChatBox: React.FC = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") {
      return;
    }
    setNewMessage("");
    socket?.emit("chat", newMessage);
  };

  useEffect(() => {
    const socket = connectSocket();
    socket.on("chat", (data) => {
      setMessages((prev) => [...prev, { id: data.id, text: data.message }]);
    });
    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Container style={{ width: "100%", margin: "auto", marginTop: "20px" }}>
      <div
        style={{
          height: "800px",
          border: "1px solid #ccc",
          overflowY: "scroll",
          marginBottom: "10px",
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{ padding: "8px", borderBottom: "1px solid #eee" }}
          >
            {message.id}: {message.text}
          </div>
        ))}
      </div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Type your message"
          aria-label="Type your message"
          value={newMessage}
          onChange={handleInputChange}
        />
        <Button variant="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </InputGroup>
    </Container>
  );
};
