import { useMemo } from "react";
import { Text, View } from "react-native";

import RowList from "../../Rows/RowList/RowList";
import RowItemLink from "../../Rows/RowItemLink/RowItemLink";
import { activityCostStyles } from "./styles/ActivityCost.styles";

/**
 * This component renders an activty cost list. The list consists of users and cost for activity.
 * @prop {array} users required -> array of objects with user info 
 * Ex. 
 * const users = [
    {
      userName: "Patrick Star",
      avatar: (
        <Avatar
          size={"sm"}
          avatarImage={{
            uri: "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/440px-Patrick_Star.svg.png",
          }}
        />
      ),
      cost: 90,
    },
    {
      userName: "Spongebob Squarepants",
      avatar: (
        <Avatar
          size={"sm"}
          avatarImage={{
            uri: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/600px-SpongeBob_SquarePants_character.svg.png?20231203073904",
          }}
        />
      ),
      cost: 99999,
    },
  ];
 * @returns {ReactElement} Renders an activity cost list.
 *
 * @example <ActivityCost users={users} />
 */
const ActivityCost = ({ users }) => {
  const getTotalCost = useMemo(() => {
    const costArray = users.map((user) => user.cost);
    const totalOfArray = costArray.reduce((acc, val) => {
      return acc + val;
    }, 0);
    return totalOfArray;
  });
  const totalCost = getTotalCost;

  return (
    <View style={activityCostStyles.container}>
      <View style={activityCostStyles.headerContainer}>
        <Text style={activityCostStyles.title}>Total Cost from Activity</Text>
        <Text
          style={activityCostStyles.totalCost}
        >{`$${totalCost.toLocaleString()}`}</Text>
      </View>
      <RowList isRowItemLink={true}>
        {users.map((user) => {
          return (
            <RowItemLink
              showDivider={true}
              type={"user"}
              label={user.userName}
              cost={`$${user.cost.toLocaleString()}`}
              user={user.avatar}
            />
          );
        })}
      </RowList>
    </View>
  );
};

export default ActivityCost;
