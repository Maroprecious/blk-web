import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  const faqs = [
    {
      question: "Who can attend Back Rooted Retreats?",
      answer:
        "Our retreats are open to individuals aged 28-60 living in the United States. Whether you're a seasoned wellness enthusiast or        new to holistic living, our retreats cater to a wide range of       backgrounds and experiences.",
    },
    {
      question: "Who can attend Back Rooted Retreats?",
      answer:
        "Our retreats are open to individuals aged 28-60 living in the United States. Whether you're a seasoned wellness enthusiast or        new to holistic living, our retreats cater to a wide range of       backgrounds and experiences.",
    },
    {
      question: "How do I book a retreat?",
      answer:
        "Our retreats are open to individuals aged 28-60 living in the United States. Whether you're a seasoned wellness enthusiast or        new to holistic living, our retreats cater to a wide range of       backgrounds and experiences.",
    },
    {
      question: "What's included in the retreat package?",
      answer:
        "Our retreats are open to individuals aged 28-60 living in the United States. Whether you're a seasoned wellness enthusiast or        new to holistic living, our retreats cater to a wide range of       backgrounds and experiences.",
    },
    {
      question: "Can I customize my retreat experience?",
      answer:
        "Our retreats are open to individuals aged 28-60 living in the United States. Whether you're a seasoned wellness enthusiast or        new to holistic living, our retreats cater to a wide range of       backgrounds and experiences.",
    },
    {
      question: "What should I bring to a retreat?",
      answer:
        "Our retreats are open to individuals aged 28-60 living in the United States. Whether you're a seasoned wellness enthusiast or        new to holistic living, our retreats cater to a wide range of       backgrounds and experiences.",
    },
    {
      question: "Is there a community aspect to the retreats?",
      answer:
        "Our retreats are open to individuals aged 28-60 living in the United States. Whether you're a seasoned wellness enthusiast or        new to holistic living, our retreats cater to a wide range of       backgrounds and experiences.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "Our retreats are open to individuals aged 28-60 living in the United States. Whether you're a seasoned wellness enthusiast or        new to holistic living, our retreats cater to a wide range of       backgrounds and experiences.",
    },
  ];
  return (
    <section className="mt-10">
      <div className="flex flex-col lg:flex-row gap-6">
        <h3 className="lg:text-6xl font-recoleta text-[#CF956F]">
          Frequently Asked Questions
        </h3>
        <div className="w-full max-w-[736px]">
          {faqs.map((faq, index) => {
            return (
              <Accordion type="single" collapsible key={index}>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="lg:text-3xl">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#667085]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
