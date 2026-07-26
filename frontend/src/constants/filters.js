import { Clock, Star, Location, Veg, NonVeg } from "./icons";

const filterData = [
  {
    id: "open",
    label: "Open Now",
    icon: Clock,
    styles: "text-green-600",
  },
  {
    id: "rating",
    label: "Highly Rated",
    icon: Star,
    styles: "",
  },
  {
    id: "near",
    label: "Near By",
    icon: Location,
    styles: "",
  },
  {
    id: "veg",
    label: "Veg",
    icon: Veg,
    styles: "",
  },
  {
    id: "non-veg",
    label: "Non-Veg",
    icon: NonVeg,
    styles: "",
  },
];

export { filterData };
