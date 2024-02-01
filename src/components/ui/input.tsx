import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const InputVariants = cva("bg-sage-300 h-[48px] border border-gray-200", {
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

export type InputVariant = keyof typeof InputVariants;

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof InputVariants> {
  variant?: InputVariant;
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  error?: string;
  hasError?: boolean;
  inputRightElement?: React.ReactNode;
  inputLeftElement?: React.ReactNode;
  ref?: React.MutableRefObject<HTMLInputElement>;
}

export default function Input({
  variant,
  disabled,
  readOnly,
  className,
  label,
  labelClassName,
  inputClassName,
  error,
  hasError,
  inputRightElement,
  inputLeftElement,
  ref,
  size,
  ...rest
}: InputProps): JSX.Element {
  const [inputType, setInputType] =
    React.useState<React.InputHTMLAttributes<HTMLInputElement>["type"]>("text");

  const toggleVisibility = React.useCallback((): void => {
    if (inputType === "text") {
      setInputType("password");
    } else {
      setInputType("text");
    }
  }, [inputType, setInputType]);

  const rightElement =
    rest.type === "password" ? (
      <div className="cursor-pointer" onClick={toggleVisibility}>
        {inputType === "text" ? (
          <IoEyeOutline size={23} color="#000" />
        ) : (
          <IoEyeOffOutline size={23} color="#000" />
        )}
      </div>
    ) : (
      inputRightElement
    );

  return (
    <label className={cn(className, "flex w-full flex-col mb-6")}>
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

      <div className="relative">
        {inputLeftElement && (
          <span
            className={cn(
              "absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-gray-50 text-base select-none"
            )}
          >
            {inputLeftElement}
          </span>
        )}
        <input
          className={cn(
            InputVariants({ variant, size, className }),
            "min-w-0 py-0 w-full",
            "text-base font-light leading-none",
            "focus:outline-none focus:ring-0",
            "placeholder-gray-500 disabled:placeholder-gray-200 disabled:text-gray-100",
            inputLeftElement ? "pl-10" : "pl-4"
          )}
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
          {...rest}
          type={inputType}
        />

        {rightElement && (
          <span
            className={cn(
              "absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-gray-50 text-base select-none"
            )}
          >
            {rightElement}
          </span>
        )}
      </div>
      {error && <span>{error}</span>}
    </label>
  );
}

Input.displayName = "Input";

export { Input, InputVariants };
