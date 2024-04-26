import { theme } from "../../../../styles/theme";
import ItineraryFilled from "../../../../../assets/icons/Itinerary_Filled.svg";
import ItineraryOutlined from "../../../../../assets/icons/Itinerary_Outlined.svg";
import TravelersFilled from "../../../../../assets/icons/Travelers_Filled.svg";
import TravelersOutlined from "../../../../../assets/icons/Travelers_Outlined.svg";
import DiscoverFilled from "../../../../../assets/icons/Discover_Filled.svg";
import DiscoverOutlined from "../../../../../assets/icons/Discover_Filled.svg";
import MessageFilled from "../../../../../assets/icons/Messages_Filled.svg";
import MessageOutlined from "../../../../../assets/icons/Messages_Outlined.svg";
import PhotosFilled from "../../../../../assets/icons/Photos_Filled.svg";
import PhotosOutlined from "../../../../../assets/icons/Photos_Outlined.svg";

import TestScreen from "../../../../screens/TestScreen";
import TestSecondScreen from "../../../../screens/TestSecondScreen";

const ACTIVE_COLOR = theme.color.primary.base;
const INACTIVE_COLOR = theme.color.surface.onBasePrimary;

const GROUPCATION_TAGS = [
  {
    name: "itinerary",
    activeIcon: <ItineraryFilled color={ACTIVE_COLOR} />,
    inactiveIcon: <ItineraryOutlined color={INACTIVE_COLOR} />,
    component: TestScreen
  },
  {
    name: "travelers",
    activeIcon: <TravelersFilled color={ACTIVE_COLOR} />,
    inactiveIcon: <TravelersOutlined color={INACTIVE_COLOR} />,
    component: TestSecondScreen
  },
  {
    name: "discover",
    activeIcon: <DiscoverFilled color={ACTIVE_COLOR} />,
    inactiveIcon: <DiscoverOutlined color={INACTIVE_COLOR} />,
    component: TestScreen
  },
  {
    name: "message",
    activeIcon: <MessageFilled color={ACTIVE_COLOR} />,
    inactiveIcon: <MessageOutlined color={INACTIVE_COLOR} />,
    component: TestSecondScreen
  },
  {
    name: "photos",
    activeIcon: <PhotosFilled color={ACTIVE_COLOR} />,
    inactiveIcon: <PhotosOutlined color={INACTIVE_COLOR} />,
    component: TestScreen
  },
];

export default { ACTIVE_COLOR, INACTIVE_COLOR, GROUPCATION_TAGS };
