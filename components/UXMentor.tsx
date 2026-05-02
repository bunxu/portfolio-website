
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Send, Sparkles, User, Bot } from 'lucide-react';
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
    <section id="mentor" className="py-32 bg-transparent">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 glass rounded-full text-blue-600 font-black text-[10px] uppercase tracking-widest">
            <Sparkles size={14} /> AI Powered
          </div>
          <h2 className="text-5xl md:text-6xl font-serif mb-6 tracking-tight">UX Mentor AI</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            Got a quick design question? My custom-trained AI assistant is here to help you 24/7 with best practices and heuristics.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-[40px] overflow-hidden flex flex-col h-[600px] shadow-2xl border-white/50"
        >
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-6 scrollbar-hide">
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex items-end gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`p-2 rounded-xl glass ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'text-blue-600'}`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`max-w-[75%] px-7 py-4 rounded-[28px] text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'glass backdrop-blur-3xl text-slate-800 rounded-bl-none font-medium'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {loading && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start items-end gap-3"
              >
                <div className="p-2 rounded-xl glass text-blue-600">
                  <Bot size={16} />
                </div>
                <div className="glass px-7 py-5 rounded-[28px] rounded-bl-none shadow-sm">
                  <span className="flex gap-1.5">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </span>
                </div>
              </motion.div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-6 bg-white/30 backdrop-blur-2xl border-t border-white/30 flex gap-4">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about UX patterns, heuristics, or accessibility..."
              className="flex-1 glass bg-white/40 border-white/20 rounded-[24px] px-8 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-400 font-medium"
            />
            <button 
              type="submit"
              disabled={loading}
              className="bg-slate-900 text-white w-14 h-14 rounded-[24px] flex items-center justify-center hover:bg-blue-600 disabled:opacity-50 transition-all shadow-xl shadow-blue-900/10"
            >
              <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default UXMentor;
