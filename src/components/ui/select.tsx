import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { FC } from "react";

const SelectVariants = cva("bg-sage-300 h-[48px] border border-gray-200 pl-4", {
  variants: {
    variant: {
      default: "w-full",
    },
    size: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type SelectVariant = keyof typeof SelectVariants;

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">,
    VariantProps<typeof SelectVariants> {
  label?: string;
  labelClassName?: string;
  options?: Array<{
    label: string;
    value: string;
  }>;
}

export const Select: FC<SelectProps> = ({
  label,
  labelClassName,
  options,
  variant,
  size,
  className,
  ...rest
}) => {
  return (
    <label className={cn("flex w-full flex-col mb-6")}>
      {label && (
        <span
          className={cn(
            labelClassName,
            "block mb-1 text-base text-gray-900 font-maison text-[14px] font-medium leading-6"
          )}
        >
          {label}
        </span>
      )}
      <select
        className={cn(
          SelectVariants({ variant, size, className }),
          "min-w-0 py-0 w-full",
          "text-base font-light leading-none",
          "focus:outline-none focus:ring-0",
          "placeholder-gray-500 disabled:placeholder-gray-200 disabled:text-gray-100"
        )}
        {...rest}
      >
        {options?.map((element) => (
          <option value={element.value} key={element.label}>
            {element.label}
          </option>
        ))}
      </select>
    </label>
  );
};
