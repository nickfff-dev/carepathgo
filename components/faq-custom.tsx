import { Plus, Minus } from "lucide-react";

import  * as AccordionPrimitive  from "@radix-ui/react-accordion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

const items = [
  {
    title: "Licensed Doctors & Providers",
    content: "Ensures professionals make all medical decisions — your business carries no medical liability.",
  },
  {
    title: "HIPAA-Compliant Platform & Data Security",
    content:
      "Your clients’ information is treated with the highest standard of privacy and protection.",
  },
  {
    title: "503A FDA Licensed Pharmacy Fulfillment",
    content:
      "Medications are safely compounded and delivered under strict regulatory guidance.",
  },
  {
    title: "Nationwide Coverage",
    content:
      "Our provider network spans all 50 states — you can offer treatments anywhere in the U.S.",
  },
  {
    title: "Turnkey Solution",
    content:
      "From prescription approval to shipping, we take care of it — so you don’t need to hire staff, manage inventory, or become a legal expert.",
  },
  {
    title: "Revenue Growth for Your Business",
    content:
      "You retain profit on programs, earn recurring through refills, and offer new services that expand your client base.",
  },
];

export default function AccordionDefaultOpen() {
  return (
    
    <Accordion
      className="my-4 w-full max-w-2xl bg-white/70 rounded-xl p-3"
      collapsible
      defaultValue="item-0"
      type="single"
    >
      {items.map(({ title, content }, index) => (
        <AccordionItem className="border-b" key={index} value={`item-${index}`}>
          <AccordionPrimitive.Header className="flex">
          <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-6 font-bold md:text-xl md:mb-3 text-[12px] transition-all hover:underline [&[data-state=open]>svg]:rotate-45">
              {title}
              <Plus className="w-6 h-6 shrink-0 text-black transition-transform duration-200 font-bold" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionContent className="text-[1rem]">{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}