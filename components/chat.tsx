'use client';

import { useChat } from 'ai/react';
import { Messages } from './message';
import { Input } from './input';

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });

  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto bg-white shadow-2xl">
      <div className="flex-1 overflow-y-auto p-8 bg-gradient-to-b from-gray-50 to-white">
        <Messages messages={messages} isLoading={isLoading} />
      </div>
      <div className="border-t-4 border-green-600 p-6 bg-white">
        <Input
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
