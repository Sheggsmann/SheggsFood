import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { View } from "@components/Themed";
import { Sizes } from "@constants/Theme";
import FigText from "@components/StyledText";
import Styles from "@constants/Styles";
import Colors from "@constants/Colors";

type ChatListItemProps = {
  image: any;
  name: string;
  lastMessage: string;
  timestamp: string;
  onPress?: () => void;
};

export default function ChatListItem({
  image,
  name,
  lastMessage,
  timestamp,
  onPress,
}: ChatListItemProps) {
  return (
    <TouchableOpacity activeOpacity={Styles.activeOpacity} onPress={onPress}>
      <View style={styles.card} lightColor={Colors.grey} darkColor={Colors.lightGrey}>
        <View
          style={styles.cardImgContainer}
          lightColor={Colors.light.background}
          darkColor={Colors.lightGrey}
        >
          <Image source={image} style={styles.cardImg} />
        </View>

        {/* User Details */}
        <View
          style={[
            Styles.g.transparent,
            {
              flex: 1,
              paddingHorizontal: Sizes.xxSmall,
              justifyContent: "center",
            },
          ]}
        >
          <FigText style={{ fontSize: Sizes.font, marginBottom: Sizes.xxSmall }}>{name}</FigText>
          <FigText
            lightColor={Colors.light.text2}
            darkColor={Colors.dark.text2}
            style={{ fontSize: Sizes.font }}
          >
            {lastMessage.length > 25 ? lastMessage.substring(0, 23) + "..." : lastMessage}
          </FigText>
        </View>

        {/* Time Stamp */}
        <FigText lightColor={Colors.light.text2} darkColor={Colors.dark.text2}>
          {timestamp}
        </FigText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginBottom: Sizes.medium,
    borderRadius: Sizes.radius,
    padding: Sizes.xSmall,
    columnGap: Sizes.xxSmall,
  },
  cardImgContainer: {
    width: 70,
    height: 70,
    borderRadius: Sizes.radius,
    overflow: "hidden",
  },
  cardImg: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    borderRadius: Sizes.radius,
  },
});
