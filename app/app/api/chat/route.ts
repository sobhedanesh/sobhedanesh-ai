import { OpenAIStream, StreamingTextResponse } from 'ai';
import { Configuration, OpenAIApi } from 'openai-edge';

const config = new Configuration({
  apiKey: process.env.XAI_API_KEY!,
  basePath: 'https://api.x.ai/v1',
});

const openai = new OpenAIApi(config);

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.createChatCompletion({
    model: 'grok-beta',
    stream: true,
    messages: [
      {
        role: 'system',
        content: 'تو دستیار هوشمند "هوش مصنوعی صبح دانش" هستی. پاسخ‌ها رو مفید، دقیق، دوستانه و به زبان فارسی بده. از ایموجی مناسب استفاده کن.'
      },
      ...messages
    ],
    temperature: 0.7,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
