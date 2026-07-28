import { Children, cloneElement, useState } from "react";

export const Accordion = ({ children, defaultOpen = -1, className = "" }) => {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className={className}>
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          isOpen: openIndex === index,
          onToggle: () =>
            setOpenIndex(openIndex === index ? -1 : index),
        })
      )}
    </div>
  );
};
