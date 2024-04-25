import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  useFonts,
  Rubik_400Regular,
  Rubik_600SemiBold,
} from "@expo-google-fonts/rubik";
import Tag from "./src/components/Tag/Tag";
import DetailedRow from "./src/components/DetailedRow/DetailedRow";
import Button from "./src/components/Button/Button";
import AvatarStack from "./src/components/AvatarStack/AvatarStack";
import Placeholder from "./assets/icons/Placeholder.svg";
import GroupcationCard from "./src/components/Groupcation/GroupcationCard/GroupcationCard";

export default function App() {
  let [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const usersInGroup = [
    {
      // image: 'https://i.pinimg.com/564x/d3/05/d6/d305d6b4957713e981c43d381c12b862.jpg',
      initials: "gc",
      userId: "123",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/440px-Patrick_Star.svg.png",
      initials: "hb",
      userId: "456",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/440px-Patrick_Star.svg.png",
      initials: "hb",
      userId: "456",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/440px-Patrick_Star.svg.png",
      initials: "hb",
      userId: "456",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/440px-Patrick_Star.svg.png",
      initials: "hb",
      userId: "456",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        style={{ marginHorizontal: 20 }}
        contentContainerStyle={{ gap: 10 }}
        horizontal={true}
      >
        <GroupcationCard
          groupcationName={"Groupcation Name"}
          groupcationAddress={"City, Country & 99 more"}
          groupcationDates={"1 Jan 3000 to 31 Dec 3000"}
          cardImage={
            "https://images.unsplash.com/photo-1525874684015-58379d421a52?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          cardTag={<Tag tagType="traveler" small />}
          avatarStack={<AvatarStack users={usersInGroup} size={"sm"} />}
          onPressCard={() => console.log("Navigate to groupcation.")}
        />
        <GroupcationCard
          groupcationName={"Groupcation Name"}
          groupcationAddress={"City, Country & 99 more"}
          groupcationDates={"1 Jan 3000 to 31 Dec 3000"}
          cardImage={
            "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          cardTag={<Tag tagType="traveler" small />}
          avatarStack={<AvatarStack users={usersInGroup} size={"sm"} />}
          onPressCard={() => console.log("Navigate to groupcation.")}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
  },
  btn: {
    width: 112,
    height: 30,
  },
});
