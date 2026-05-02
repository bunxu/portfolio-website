
import React, { useState, useRef, useEffect } from 'react';
import { getUXAdvice } from '../services/geminiService';

const UXMentor: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Hi! I’m your AI UX Mentor. Have a design challenge or need feedback on a UX pattern? Ask me anything!' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const aiResponse = await getUXAdvice(userMsg);
    
    if (aiResponse.startsWith("AUTHENTICATION_ERROR")) {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: "I'm having trouble connecting. It looks like your API key session might have expired or is invalid. Please use the 'Key Settings' button in the navigation to re-select your key." 
      }]);
    } else {
      setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    }
    
    setLoading(false);
  };

  return (
    <section id="mentor" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif mb-4">UX Mentor AI</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Got a quick design question? My custom-trained AI assistant is here to help you 24/7 with best practices and heuristics.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden flex flex-col h-[500px] shadow-sm">
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-5 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white border border-gray-200 text-gray-800 shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 px-5 py-3 rounded-2xl shadow-sm">
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-200 flex gap-3">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., When should I use a modal vs a sidebar?"
              className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button 
              type="submit"
              disabled={loading}
              className="bg-gray-900 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-black disabled:opacity-50 transition-all"
            >
              →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UXMentor;
