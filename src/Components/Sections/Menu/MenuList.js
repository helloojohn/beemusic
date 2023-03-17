import {
  MdHomeFilled,
  MdAddChart,
  MdOutlineCalendarMonth,
  MdOutlinePeopleAlt,
} from "react-icons/md";
import { FiCompass, FiGrid, FiHeart } from "react-icons/fi";
import { HiOutlineTicket, HiOutlineStar } from "react-icons/hi";



const MenuList = [
  {
    id: 1,
    icon: <MdHomeFilled />,
    name: "Home",
  },
  {
    id: 2,
    icon: <MdAddChart />,
    name: "Trends",
  },
  {
    id: 3,
    icon: <FiCompass />,
    name: "Feed",
  },
];

const DiscoverList = [
  {
    id: 1,
    icon: <FiGrid />,
    name: "New and Notable",
  },
  {
    id: 2,
    icon: <MdOutlineCalendarMonth />,
    name: "Release Calendar",
  },
  {
    id: 3,
    icon: <HiOutlineTicket />,
    name: "Events",
  },
];

const CollectionList = [
  {
    id: 1,
    icon: <FiHeart />,
    name: "Favorite Songs",
  },
  {
    id: 2,
    icon: <MdOutlinePeopleAlt />,
    name: "Artist",
  },
  {
    id: 3,
    icon: <HiOutlineStar />,
    name: "Albums",
  },
];

export { MenuList, DiscoverList, CollectionList };