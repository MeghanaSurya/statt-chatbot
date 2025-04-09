import React from 'react';
import chatData from '../data/chats.json';

interface ChatListProps {
  onSelectChat: (index: number) => void;
}

const ChatList: React.FC<ChatListProps> = ({ onSelectChat }) => {
  return (
    <div className="chat-list">
      <h3>Chats</h3>
      <ul>
        {chatData.chats.map((chat, index) => (
          <li key={index} onClick={() => onSelectChat(index)}>
            <strong>{chat.name}</strong><br/>
            <small>{chat.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
