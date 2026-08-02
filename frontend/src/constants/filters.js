import { Clock, Rating, Location, Veg, NonVeg } from "./icons";

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
    icon: Rating,
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


const filterMenuItemData = [
  {
    id: "under100",
    label: "Under ₹100",
  },
  {
    id: "between100and200",
    label: "₹100 - ₹200",
  },
  {
    id: "between200and300",
    label: "₹200 - ₹300",
  },
  {
    id: "above300",
    label: "Above ₹300",
  },
];

export { filterData, filterMenuItemData };
