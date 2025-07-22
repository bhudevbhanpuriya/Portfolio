import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message,
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name" className="block text-sm font-semibold text-starry-white mb-2">
          Name
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-space-dark/50 border border-space-blue/50 rounded-lg px-4 py-3 text-starry-white placeholder-gray-400 focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan transition-colors duration-300"
          placeholder="Your Name"
          required
        />
      </div>
      
      <div>
        <Label htmlFor="email" className="block text-sm font-semibold text-starry-white mb-2">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-space-dark/50 border border-space-blue/50 rounded-lg px-4 py-3 text-starry-white placeholder-gray-400 focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan transition-colors duration-300"
          placeholder="your.email@example.com"
          required
        />
      </div>
      
      <div>
        <Label htmlFor="subject" className="block text-sm font-semibold text-starry-white mb-2">
          Subject
        </Label>
        <Input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full bg-space-dark/50 border border-space-blue/50 rounded-lg px-4 py-3 text-starry-white placeholder-gray-400 focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan transition-colors duration-300"
          placeholder="Project Collaboration"
          required
        />
      </div>
      
      <div>
        <Label htmlFor="message" className="block text-sm font-semibold text-starry-white mb-2">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full bg-space-dark/50 border border-space-blue/50 rounded-lg px-4 py-3 text-starry-white placeholder-gray-400 focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan transition-colors duration-300 resize-none"
          placeholder="Tell me about your project or opportunity..."
          required
        />
      </div>
      
      <Button
        type="submit"
        disabled={contactMutation.isPending}
        className="w-full bg-gradient-to-r from-cosmic-purple to-cosmic-light hover:from-cosmic-light hover:to-cyber-cyan py-3 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyber-cyan/25"
      >
        {contactMutation.isPending ? (
          <>
            <i className="fas fa-spinner animate-spin mr-2"></i>
            Sending...
          </>
        ) : (
          <>
            <i className="fas fa-paper-plane mr-2"></i>
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
