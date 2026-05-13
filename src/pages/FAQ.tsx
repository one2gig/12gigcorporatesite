import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: "What exactly is 12gig?",
    answer: "12gig is Malaysia's premier digital ecosystem designed to connect local 'giggers' (freelancers) with users and small businesses (SMEs). We focus on empowering the local economy through digital transformation, especially in regions like Sabah and Sarawak, by providing a trusted marketplace for services and custom digital solutions."
  },
  {
    question: "How do I become a Gigger on the platform?",
    answer: "Registration is simple! Click on the 'Become a Gigger' button, create your profile, and showcase your skills. We'll verify your details and once approved, you can start receiving service requests from the community."
  },
  {
    question: "Are the service providers on 12gig verified?",
    answer: "Yes. Safety and trust are our priorities. We have a verification process that includes background checks and skill assessments to ensure that every Gigger on our platform is capable and reliable."
  },
  {
    question: "How does 12gig help SMEs 'Go Digital'?",
    answer: "We offer more than just a marketplace. Our SME Solutions include building custom ordering systems, corporate web presence, and internal workflow automation. We help you move away from manual 'WhatsApp-based' operations to efficient, scalable digital platforms."
  },
  {
    question: "Is it safe to pay through 12gig?",
    answer: "Absolutely. We use secure payment gateways to ensure your transactions are protected. Payments are held in escrow and only released to the service provider once you have confirmed that the job is completed to your satisfaction."
  },
  {
    question: "Can I use 12gig for corporate or long-term projects?",
    answer: "Yes. While we facilitate daily micro-tasks, many of our Giggers are high-level professionals capable of long-term contract work. Our SME Solutions division also handles large-scale digital transformation projects for businesses."
  },
  {
    question: "What if I have an issue with a service provided?",
    answer: "We have a dedicated support team and a dispute resolution process. If a service does not meet the agreed-upon standards, you can report it, and we will step in to mediate and ensure a fair outcome for both parties."
  },
  {
    question: "Why the name 12gig?",
    answer: "The name reflects our mission to scale the gig economy (1 to 2 gig... and beyond!). It also carries a local flavor, resonating with the energetic and fast-paced digital growth we represent in Malaysia."
  }
];

export default function FAQ() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
          <Badge className="rounded-full px-4 py-1">FAQ</Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Got <span className="text-primary italic">Questions?</span></h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Everything you need to know about navigating the 12gig ecosystem.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-2xl px-6 bg-card shadow-sm hover:shadow-md transition-all duration-300 border-muted/50 data-[state=open]:border-primary/20"
              >
                <AccordionTrigger className="text-left text-lg font-bold hover:no-underline hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-20 p-12 bg-primary/5 rounded-[2.5rem] border border-primary/10 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Still have questions?</h2>
              <p className="text-muted-foreground">
                We're here to help you get the most out of 12gig. Reach out to our team directly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-full h-14 px-8 gap-2">
                <Mail className="h-5 w-5" />
                Contact Support
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 gap-2">
                <MessageCircle className="h-5 w-5" />
                Live Chat
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
