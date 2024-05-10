import { ReactNode, Ref, forwardRef } from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import { FaAngleDown } from "react-icons/fa6";

export const PrimaryAccordion = ({ children }: { children: ReactNode }) => (
  <Accordion.Root
    className="bg-transparent w-full"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    {children}
  </Accordion.Root>
);

interface AccordionProps extends Record<string, string | any> {
  children: ReactNode;
  className?: string;
  value: string;
}

export const AccordionItem = forwardRef(
  (
    { children, className, ...props }: AccordionProps,
    forwardedRef: Ref<HTMLDivElement> | undefined
  ) => (
    <Accordion.Item
      className={classNames("border-b border-b-gray-200", className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

export const AccordionTrigger = forwardRef(
  (
    { children, className, ...props }: AccordionProps,
    forwardedRef: Ref<HTMLButtonElement> | undefined
  ) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={classNames(
          "text-gray-900 text-[16px] cursor-pointer capitalize font-arapey group flex h-[45px] flex-1 cursor-default items-center justify-between bg-transparent leading-none border-b border-b-gray-200",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}

        <FaAngleDown
          className="text-[#667085] ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

export const AccordionContent = forwardRef(
  (
    { children, className, ...props }: AccordionProps,
    forwardedRef: Ref<HTMLDivElement> | undefined
  ) => (
    <Accordion.Content
      className={classNames(
        "text-gray-500 font-arapey bg-transparent data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[13px]",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px]">{children}</div>
    </Accordion.Content>
  )
);
