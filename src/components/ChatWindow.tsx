import React from 'react';
import chatData from '../data/chats.json';

interface ChatWindowProps {
  chatIndex: number;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ chatIndex }) => {
  const chat = chatData.chats[chatIndex];

  return (
    <div className="chat-window">
      <h3>{chat.name}</h3>
      <div className="messages">
        {chat.messages.map((msg, i) => (
          <div key={i} className={msg.source}>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="sources">
        <h4>Sources</h4>
        <ul>
          {chat.sources.map((src, i) => (
            <li key={i}>
              <a href={src.url} target="_blank" rel="noreferrer">{src.title}</a> ({src.sourceType})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatWindow;
