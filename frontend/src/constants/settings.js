import {
  Favorite,
  AboutIcon,
  PrivacyIcon,
  ContactSupport,
  RateApp,
  ShareApp
} from "../constants/icons"
export const settings = [
  {
      id: 1,
      title: "Favourite Restaurants",
      subtitle: "View your saved restaurants",
      icon: Favorite,
      route: "/favorites",
      requiresAuth: true,
    },
    {
      id: 2,
      title: "About MenuApp",
      subtitle: "Learn more about MenuApp",
      icon: AboutIcon,
      route: "/",
      requiresAuth: false,
    },
    {
      id: 3,
      title: "Privacy Policy",
      subtitle: "Read our privacy policy",
      icon: PrivacyIcon,
      route: "/",
      requiresAuth: false,
    },
    {
      id: 4,
      title: "Contact Support",
      subtitle: "Get help from our support team",
      icon: ContactSupport,
      route: "/",
      requiresAuth: false,
    },
    {
      id: 5,
      title: "Rate MenuApp",
      subtitle: "Rate us on the App Store",
      icon: RateApp,
      route: "/",
      requiresAuth: false,
    },
    {
      id: 6,
      title: "Share MenuApp",
      subtitle: "Invite your friends",
      icon: ShareApp,
      route: "/",
      requiresAuth: false,
    },
]
