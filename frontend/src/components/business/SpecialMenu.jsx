import { Accordion } from "../ui/accordion/Accordion";
import { AccordionItem } from "../ui/accordion/AccordionItem";
import { Slider } from "../ui/slider/Slider";
import { SpecialMenuCard } from "./SpecialMenuCard";

export const SpecialMenu = ({ items }) => {
  return (
    <div className="mt-7">
      <Accordion defaultOpen={0}>
        <AccordionItem
          title="Today's Special Menu"
          subtitle="Choose from our today's special menu"
          className="text-primary"
          headerTextStyling="text-xl"
          headerStyle="px-2"
        >
          <Slider className="mt-3">
            {items.map((item) => (
              <SpecialMenuCard key={item.id} item={item} />
            ))}
          </Slider>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
