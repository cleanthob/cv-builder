import { ReactNode } from "react";
import {
  TooltipContent,
  Tooltip as TooltipRoot,
  TooltipTrigger,
} from "./primitive";

type TooltipProps = {
  children: ReactNode;
  content: string | number | ReactNode;
};

export const Tooltip = ({ children, content }: TooltipProps) => {
  return (
    <TooltipRoot>
      <TooltipTrigger>
        <span>{children}</span>
      </TooltipTrigger>
      <TooltipContent>
        <p>{content}</p>
      </TooltipContent>
    </TooltipRoot>
  );
};
