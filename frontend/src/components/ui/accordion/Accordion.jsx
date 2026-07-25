import { useState } from "react";

export const Accordion = ({ children, defaultOpen = 0 }) => {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <>
      {children.map((child, index) =>
        child({
          isOpen: openIndex === index,
          onToggle: () => setOpenIndex(openIndex === index ? null : index),
        }),
      )}
    </>
  );
};
