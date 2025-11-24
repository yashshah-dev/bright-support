'use client';

import { useState } from 'react';
import { MessageCircle, Phone, Mail, MessageSquare, X } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: Phone,
      label: 'Phone',
      href: 'tel:0414368872',
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      icon: MessageSquare,
      label: 'SMS',
      href: 'sms:0414368872',
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:care@brightsupport.com.au',
      color: 'bg-red-500 hover:bg-red-600',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/610401718904',
      color: 'bg-green-600 hover:bg-green-700',
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Contact Options */}
      {isOpen && (
        <div className="mb-4 flex flex-col gap-3 animate-in">
          {contactOptions.map((option) => (
            <a
              key={option.label}
              href={option.href}
              target={option.label === 'WhatsApp' ? '_blank' : undefined}
              rel={option.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
              className={`${option.color} text-white px-5 py-3.5 rounded-2xl shadow-elegant-lg flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm`}
              aria-label={option.label}
            >
              <option.icon size={20} />
              <span className="font-medium">{option.label}</span>
            </a>
          ))}
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white w-16 h-16 rounded-full shadow-elegant-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X size={26} /> : <MessageCircle size={26} />}
      </button>

      {/* Need Help Label */}
      {!isOpen && (
        <div className="absolute -top-14 right-0 bg-slate-800 text-white px-5 py-2.5 rounded-xl text-sm whitespace-nowrap shadow-elegant-lg border border-slate-700">
          Need Help?
          <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2.5 h-2.5 bg-slate-800 border-r border-b border-slate-700"></div>
        </div>
      )}
    </div>
  );
}
