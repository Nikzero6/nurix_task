import type { ComponentProps } from "react";
import type { IconComponent } from "../icons/tow-bar-icon";
import { cn } from "../utils";

interface SlideCardProps extends ComponentProps<"div"> {}

export function SlideCard({ className, children, ...props }: SlideCardProps) {
  return (
    <div
      className={cn(
        "p-6 flex flex-col gap-2 items-center border rounded-md border-gray-400 w-96 h-44 justify-center hover:bg-lime-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

type SlideCardIconProps = {
  Icon: IconComponent;
};

export function SlideCardIcon({ Icon }: SlideCardIconProps) {
  return <Icon className="text-blue-500 w-5 h-5" />;
}

type SlideCardTitleProps = ComponentProps<"div"> & {
  title: string;
};

export function SlideCardTitle({
  title,
  className,
  ...props
}: SlideCardTitleProps) {
  return (
    <div className={cn("text-lg text-gray-600", className)} {...props}>
      {title}
    </div>
  );
}
