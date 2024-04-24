import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
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
      <DetailedRow
        rowLabel={"row label"}
        rowText={"row text"}
        rowButton={
          <Button
            buttonType="primary"
            buttonSize={"sm"}
            onPress={() => console.log("here")}
            iconRight={<Placeholder color="white" />}
            iconLeft={<Placeholder color="white" />}
          >
            Label
          </Button>
        }
        avatarStack={<AvatarStack users={usersInGroup} size={"md"} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: 112,
    height: 30,
  },
});
