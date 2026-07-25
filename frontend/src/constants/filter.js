import icon from '../assets/icons'

const filterData = [
  {
    id: "open",
    label: "Open Now",
    icon: icon.Clock,
    styles: 'text-green-600',
  },
  {
    id: "rating",
    label: "Highly Rated",
    icon: icon.Star,
    styles: '',
  },
  {
    id: "near",
    label: "Near By",
    icon: icon.Location,
    styles: '',
  },
  {
    id: "veg",
    label: "Veg",
    icon: icon.Veg,
    styles: '',
  },
  {
    id: "non-veg",
    label: "Non-Veg",
    icon: icon.NonVeg,
    styles: '',
  },
];

export {filterData}
