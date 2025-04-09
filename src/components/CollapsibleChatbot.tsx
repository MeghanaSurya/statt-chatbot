import React, { useState } from 'react';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
import '../styles/Chatbot.css';

const CollapsibleChatbot = () => {
  const [view, setView] = useState<'collapsed' | 'opened' | 'expanded'>('collapsed');
  const [selectedChatIndex, setSelectedChatIndex] = useState<number | null>(null);

  const handleToggle = () => {
    if (view === 'collapsed') setView('opened');
    else if (view === 'opened') setView('expanded');
    else setView('collapsed');
  };

  return (
    <div className={`chatbot-container ${view}`}>
      <button className="toggle-button" onClick={handleToggle}>
        {view === 'collapsed' ? 'Open Chat' : view === 'opened' ? 'Expand' : 'Collapse'}
      </button>

      {(view === 'opened' || view === 'expanded') && (
        <div className="chat-ui">
          <ChatList onSelectChat={setSelectedChatIndex} />
          {selectedChatIndex !== null && <ChatWindow chatIndex={selectedChatIndex} />}
        </div>
      )}
    </div>
  );
};

export default CollapsibleChatbot;
