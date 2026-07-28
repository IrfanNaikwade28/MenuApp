import { Accordion } from "../ui/accordion/Accordion";
import { MenuAccordionItem } from "./MenuAccordionItem";

export const MenuItemsContainer = ({ menuCategories }) => {
  if (menuCategories.length === 0) {
    return (
      <div className="mt-8 h-40 flex flex-col items-center justify-center text-center">
        <h3 className="text-lg font-semibold text-primary">
          No dishes found
        </h3>

        <p className="mt-1 text-sm text-secondary">
          Try searching with a different dish or category.
        </p>
      </div>
    );
  }
  return (
    <Accordion className="py-3 flex flex-col gap-2" defaultOpen={0}>
      {menuCategories.map((category) => (
        <MenuAccordionItem key={category.id} category={category} />
      ))}
    </Accordion>
  );
};
