import { theme } from "../../../styles/theme";
import FavoriteFilled from "../../../../assets/icons/Favorite_Filled.svg";
import TravelersFilled from "../../../../assets/icons/Travelers_Filled.svg";
import Host from "../../../../assets/icons/Host.svg";
import Following from "../../../../assets/icons/Following.svg";
import Member from "../../../../assets/icons/Member.svg";
import Admin from "../../../../assets/icons/Admin.svg";

const ICON_COLOR = theme.color.surface.onBasePrimary;

const SM_LABEL_STYLE = theme.typeography.body.smBold

const TAGS = [
  {
    label: "favorited",
    icon: <FavoriteFilled color={ICON_COLOR} />,
  },
  {
    label: "traveler",
    icon: <TravelersFilled color={ICON_COLOR} />,
  },
  {
    label: "creator",
    icon: <Host color={ICON_COLOR} />,
  },
  {
    label: "following",
    icon: <Following color={ICON_COLOR} />,
  },
  {
    label: "member",
    icon: <Member color={ICON_COLOR} />,
  },
  {
    label: "admin",
    icon: <Admin color={ICON_COLOR} />,
  },
];

export default { TAGS, SM_LABEL_STYLE }
