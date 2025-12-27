import { Message } from 'ai/react';

export function Messages({ messages, isLoading }: { messages: Message[]; isLoading: boolean }) {
  return (
    <div className="space-y-6">
      {messages.length === 0 && (
        <div className="text-center text-gray-500 mt-20">
          <p className="text-2xl">🌅 به هوش مصنوعی صبح دانش خوش آمدید!</p>
          <p className="mt-4">سوال خود را بپرسید تا شروع کنیم...</p>
        </div>
      )}
      {messages.map((m) => (
        <div
          key={m.id}
          className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
        >
          <div
            className={`max-w-3xl rounded-3xl px-6 py-4 shadow-xl ${
              m.role === 'user'
                ? 'bg-gradient-to-l from-blue-600 to-indigo-700 text-white'
                : 'bg-gradient-to-r from-green-50 to-emerald-100 text-gray-900 border border-green-200'
            }`}
          >
            <p className="whitespace-pre-wrap text-lg leading-relaxed">{m.content}</p>
          </div>
        </div>
      ))}
      {isLoading && (
        <div className="flex justify-start animate-fade-in">
          <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-3xl px-6 py-4 shadow-xl border border-green-200">
            <div className="flex items-center gap-3">
              <span className="text-lg">در حال پاسخ...</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce delay-100"></div>
                <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
