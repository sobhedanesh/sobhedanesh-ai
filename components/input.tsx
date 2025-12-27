import { FormEvent } from 'react';

export function Input({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
}: {
  input: string;
  handleInputChange: (e: any) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}) {
  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <input
        className="flex-1 rounded-full border-4 border-green-300 px-8 py-5 text-xl focus:outline-none focus:border-green-600 shadow-2xl transition-all"
        value={input}
        placeholder="سوال خود را اینجا بنویسید..."
        onChange={handleInputChange}
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="rounded-full bg-gradient-to-r from-green-600 to-emerald-700 px-12 py-5 text-white text-xl font-bold hover:from-green-700 hover:to-emerald-800 disabled:opacity-60 transition-all shadow-2xl"
      >
        {isLoading ? 'در حال ارسال...' : 'ارسال'}
      </button>
    </form>
  );
}
