import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { MessageCircle, X, Send, Mail } from 'lucide-react';
import { useTheme } from 'next-themes';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatbotProps {
  className?: string;
}

// Simple knowledge base for the chatbot
const knowledgeBase = {
  services: [
    "Odoo Consultant",
    "Application Bug Fixes", 
    "Oracle EBS Upgrade",
    "ERP Next",
    "FBR Digital Invoicing",
    "Web Development",
    "Mobile Development",
    "Digital Transformation"
  ],
  company: {
    name: "ISD Solutions",
    description: "Leading IT solutions provider delivering innovative technology services that drive business growth and digital transformation.",
    location: "1st Floor Potohar Plaza - Blue Area, Lahore, Pakistan",
    phone: "+92 300 807 8456",
    email: "info@isdsolutions.com"
  },
  faqs: {
    "What services do you offer?": "We offer comprehensive IT services including Odoo consulting, ERP systems, FBR digital invoicing, web & mobile development, and digital transformation solutions.",
    "Where are you located?": "We are located at 1st Floor Potohar Plaza - Blue Area, Lahore, Pakistan.",
    "How can I contact you?": "You can reach us at +92 300 807 8456 or email us at info@isdsolutions.com",
    "What is Odoo?": "Odoo is a comprehensive business management software that includes CRM, HR, accounting, inventory, and more. We provide consulting and implementation services.",
    "Do you work with international clients?": "Yes, we work with clients both in Pakistan and internationally, providing remote and on-site services.",
    "What technologies do you use?": "We work with modern technologies including React, Node.js, PHP, Laravel, Vue.js, Angular, and various ERP systems like Odoo and ERP Next."
  }
};

export function Chatbot({ className }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your ISD Solutions assistant. How can I help you today? You can ask me about our services, company, or contact information.",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userInput: string): string => {
    const input = userInput.toLowerCase().trim();
    
    // Check for service-related questions
    if (input.includes('service') || input.includes('offer') || input.includes('provide')) {
      return `We offer the following services:\n${knowledgeBase.services.map(service => `• ${service}`).join('\n')}\n\nWould you like to know more about any specific service?`;
    }
    
    // Check for location questions
    if (input.includes('where') || input.includes('location') || input.includes('address')) {
      return `We are located at ${knowledgeBase.company.location}. You can also reach us at ${knowledgeBase.company.phone} or ${knowledgeBase.company.email}`;
    }
    
    // Check for contact questions
    if (input.includes('contact') || input.includes('phone') || input.includes('email') || input.includes('reach')) {
      return `You can contact us at:\n📞 Phone: ${knowledgeBase.company.phone}\n📧 Email: ${knowledgeBase.company.email}\n📍 Address: ${knowledgeBase.company.location}`;
    }
    
    // Check for company questions
    if (input.includes('company') || input.includes('about') || input.includes('who')) {
      return `${knowledgeBase.company.description} We are based in ${knowledgeBase.company.location} and serve clients both in Pakistan and internationally.`;
    }
    
    // Check for specific service questions
    if (input.includes('odoo')) {
      return "Odoo is a comprehensive business management software that includes CRM, HR, accounting, inventory, and more. We provide consulting, implementation, and customization services for Odoo. Would you like to know more about our Odoo services?";
    }
    
    if (input.includes('erp')) {
      return "We provide ERP (Enterprise Resource Planning) solutions including ERP Next implementation, Oracle EBS upgrades, and custom ERP development. These systems help businesses manage their resources, processes, and data efficiently.";
    }
    
    if (input.includes('fbr') || input.includes('invoicing')) {
      return "FBR Digital Invoicing is Pakistan's Federal Board of Revenue system for digital tax compliance. We help businesses integrate with FBR systems and ensure compliance with tax regulations.";
    }
    
    if (input.includes('web') || input.includes('website')) {
      return "We provide comprehensive web development services including custom websites, e-commerce solutions, web applications, and API development. We use modern technologies like React, Node.js, and PHP.";
    }
    
    if (input.includes('mobile') || input.includes('app')) {
      return "We develop mobile applications for both iOS and Android platforms. Our mobile development services include custom apps, cross-platform solutions, and app maintenance.";
    }
    
    // Check for pricing questions
    if (input.includes('price') || input.includes('cost') || input.includes('quote') || input.includes('estimate')) {
      return "For pricing information and quotes, please contact us directly at info@isdsolutions.com or call +92 300 807 8456. We provide customized quotes based on your specific requirements.";
    }
    
    // Check for FAQ matches
    for (const [question, answer] of Object.entries(knowledgeBase.faqs)) {
      if (input.includes(question.toLowerCase().replace(/[?]/g, '').split(' ').slice(0, 3).join(' '))) {
        return answer;
      }
    }
    
    // Default response for complex queries
    return "I understand you're asking about something specific. For detailed information and complex queries, please contact our team directly. You can:\n\n📧 Email us at info@isdsolutions.com\n📞 Call us at +92 300 807 8456\n\nWe'll be happy to provide you with comprehensive assistance!";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = generateResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleContactEmail = () => {
    window.location.href = `mailto:${knowledgeBase.company.email}`;
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-primary shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-80 h-96 shadow-2xl border-0 bg-card">
          <CardContent className="p-0 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-primary text-primary-foreground rounded-t-lg">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                <h3 className="font-semibold">ISD Solutions Assistant</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 hover:bg-primary/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-background">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                      message.isUser
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <div className="whitespace-pre-line">{message.text}</div>
                    <div className={`text-xs mt-1 ${
                      message.isUser ? 'text-primary-foreground/70' : 'text-muted-foreground'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted text-foreground rounded-lg px-3 py-2 text-sm">
                    <div className="flex items-center gap-1">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="ml-2">Typing...</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t bg-background">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  size="sm"
                  className="px-3"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Quick Contact Button */}
              <Button
                onClick={handleContactEmail}
                variant="outline"
                size="sm"
                className="w-full mt-2 text-xs"
              >
                <Mail className="h-3 w-3 mr-1" />
                Contact via Email
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
} 