import { ViewStyle, Image, StyleSheet } from "react-native";
import { View } from "@components/Themed";
import { Sizes } from "@constants/Theme";
import { IChatList } from "@src/types";
import { IconButton } from "@components/Button";
import FigText from "@components/StyledText";
import Colors from "@constants/Colors";
import useColorScheme from "@hooks/useColorScheme";

type ChatProfileProps = {
  containerStyle?: ViewStyle;
  imageContainerStyle?: ViewStyle;
  user: IChatList;
  onCallPress: () => void;
};

export default function ChatProfile({
  containerStyle,
  imageContainerStyle,
  user,
  onCallPress,
}: ChatProfileProps) {
  const colorScheme = useColorScheme();
  const darkMode = colorScheme === "dark";

  return (
    <View
      lightColor={Colors.light.background}
      darkColor={Colors.lightGrey}
      style={[styles.container, containerStyle]}
    >
      <View transparent style={[styles.imageWrapper, imageContainerStyle]}>
        <Image source={user?.image} style={styles.image} />
      </View>

      <View transparent style={{ flex: 1 }}>
        <FigText style={{ fontSize: Sizes.font }}>{user?.name}</FigText>
        <View
          transparent
          style={{ flexDirection: "row", alignItems: "center", marginTop: Sizes.xSmall }}
        >
          <View
            style={[
              styles.dot,
              {
                backgroundColor: user.isOnline
                  ? Colors.lightPrimary
                  : darkMode
                  ? Colors.dark.grey
                  : Colors.light.grey,
              },
            ]}
          />
          <FigText lightColor={Colors.light.text2} darkColor={Colors.dark.text2}>
            {user.isOnline ? "Online" : "Offline"}
          </FigText>
        </View>
      </View>

      <View transparent>
        <IconButton
          tintColor={darkMode ? "#fff" : Colors.lightPrimary}
          icon="call"
          size={20}
          containerStyle={{
            width: 45,
            height: 45,
            borderRadius: 25,
            backgroundColor: Colors.tintGreen,
          }}
          onPress={() => onCallPress()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    padding: Sizes.medium,
    borderRadius: Sizes.radius,
    flexDirection: "row",
    alignItems: "center",
    columnGap: Sizes.xSmall,
  },
  imageWrapper: {
    width: 60,
    height: 60,
    borderRadius: Sizes.radius,
    overflow: "hidden",
    backgroundColor: Colors.grey,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: Colors.lightPrimary,
    marginRight: 5,
  },
});
