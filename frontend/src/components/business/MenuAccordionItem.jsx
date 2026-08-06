import { AccordionItem } from "../ui/accordion/AccordionItem";
import { MenuListItem } from "./MenuListItem";

export const MenuAccordionItem = ({ category, isOpen, onToggle }) => {
  return (
    <AccordionItem
      title={`${category.name} (${category.items.length})`}
      headerTextStyling="text-lg"
      className="rounded-xl border border-gray-200 bg-back-secondary py-4"
      headerStyle="px-4"
      isOpen={isOpen}
      onToggle={onToggle}
    >
      <div className="mt-3 flex h-20 w-full gap-2 overflow-x-auto remove-scrollbar">
        {category.categoryImages.map((item) => (
          <img
            key={item.id}
            loading="lazy"
            className="h-16 min-w-16 rounded-[14px] object-cover"
            src={item.image}
          />
        ))}
      </div>
      <div className="flex flex-col gap-3 pb-2">
        {category.items.map((item) => (
          <MenuListItem key={item.id} item={item} />
        ))}
      </div>
    </AccordionItem>
  );
};
