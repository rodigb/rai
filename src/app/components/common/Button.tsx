import React from "react";

export default function Button({
  onClick,
  Label,
}: {
  onClick: () => void;
  Label: string;
}) {
  return (
    <button
      type="button"
      className="
    box-border 
    rounded-base 
    font-medium 
    leading-5 
    text-sm 
    px-4 
    py-2.5
    
    text-[var(--color-text)]
    bg-[var(--color-panel)]
    border
    border-[var(--color-foreground)]
    shadow-xs
    
    hover:bg-[var(--color-highlightedBackground)]
    hover:text-[var(--color-highlightedText)]

    focus:outline-none
    focus:ring-4
    focus:ring-[var(--color-highlightedBackground)]
  "
      onClick={onClick}
    >
      {Label}
    </button>
  );
}
