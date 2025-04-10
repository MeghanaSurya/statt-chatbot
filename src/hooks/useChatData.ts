import { useEffect, useState } from 'react';

export interface Chat {
  name: string;
  date: string;
  messages: { source: string; text: string }[];
  sources: { sourceType: string; title: string; url: string }[];
}

export const useChatData = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/data/chats.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load chats');
        return res.json();
      })
      .then((data) => setChats(data.chats))
      .catch((err) => setError(err.message));
  }, []);

  return { chats, error };
};
