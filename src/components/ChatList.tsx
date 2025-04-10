import React from 'react';
import { useChatData } from '../hooks/useChatData';

interface ChatListProps {
  onSelectChat: (index: number) => void;
}

const ChatList: React.FC<ChatListProps> = ({ onSelectChat }) => {
  const { chats, error } = useChatData();

  if (error) return <div className="error">Failed to load chats: {error}</div>;
  if (!chats.length) return <div>Loading chats...</div>;

  return (
    <div className="chat-list">
      <h3>Chats</h3>
      <ul>
        {chats.map((chat, index) => (
          <li key={index} onClick={() => onSelectChat(index)}>
            <strong>{chat.name}</strong><br />
            <small>{chat.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
