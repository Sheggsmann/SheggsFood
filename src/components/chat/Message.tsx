import { memo } from "react";
import { StyleSheet, Image, ViewStyle } from "react-native";
import { View } from "@components/Themed";
import { IMessage } from "@src/types";
import { Sizes } from "@constants/Theme";
import { LinearGradient } from "expo-linear-gradient";
import FigText from "@components/StyledText";
import Colors from "@constants/Colors";

type MessageProps = {
  message: IMessage;
  isCurrentUser: boolean;
  containerStyle?: ViewStyle;
};

export default memo(function Message({ message, isCurrentUser }: MessageProps) {
  return isCurrentUser ? (
    <View transparent style={styles.container}>
      <LinearGradient
        colors={[Colors.lightPrimary, Colors.primary]}
        start={{ x: 0.1, y: 0.2 }}
        style={[styles.messageContainer, { alignSelf: isCurrentUser ? "flex-end" : "flex-start" }]}
      >
        <FigText
          style={{ fontSize: Sizes.smallFont }}
          weight="medium"
          lightColor="#fff"
          darkColor="#fff"
        >
          {message.message}
        </FigText>
      </LinearGradient>
    </View>
  ) : (
    <View transparent style={styles.container}>
      <View
        lightColor={Colors.light.chatBg}
        darkColor={Colors.lightGrey}
        style={[styles.messageContainer, { alignSelf: isCurrentUser ? "flex-end" : "flex-start" }]}
      >
        <FigText
          lightColor={Colors.light.chatText}
          style={{ fontSize: Sizes.smallFont }}
          weight="medium"
        >
          {message.message}
        </FigText>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  messageContainer: {
    maxWidth: "80%",
    flexDirection: "row",
    alignSelf: "flex-end",
    padding: Sizes.small,
    borderRadius: Sizes.radius / 2,
  },
});
