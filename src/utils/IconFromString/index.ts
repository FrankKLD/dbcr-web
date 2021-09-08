import {
  Home,
  Portrait,
  Envelope,
  Search,
  UserFriends,
  Spinner,
} from "styled-icons/fa-solid";

export const getIconFromString = (iconString: string) => {
  let icon = null;
  switch (iconString) {
    case "Home":
      icon = Home;
      break;
    case "Portrait":
      icon = Portrait;
      break;
    case "Envelope":
      icon = Envelope;
      break;
    case "Search":
      icon = Search;
      break;
    case "UserFriends":
      icon = UserFriends;
      break;
    default:
      icon = Spinner;
      break;
  }
  return icon;
};
