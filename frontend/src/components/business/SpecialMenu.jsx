import { Slider } from "../ui/slider/Slider";
import { SpecialMenuCard } from "./SpecialMenuCard";

export const SpecialMenu = ({ items }) => {
  return (
    <Slider>
      {items.map((item) => (
        <SpecialMenuCard key={item.id} item={item} />
      ))}
    </Slider>
  );
};
