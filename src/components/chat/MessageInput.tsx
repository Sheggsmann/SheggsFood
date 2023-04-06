import { useState } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { View, TextInput } from "@components/Themed";
import { Font, Sizes } from "@constants/Theme";
import { IconButton } from "@components/Button";
import Colors from "@constants/Colors";
import useColorScheme from "@hooks/useColorScheme";

type MessageInputProps = {
  containerStyle: ViewStyle;
  onSend: (message: string) => void;
};

export default function MessageInput({ containerStyle, onSend }: MessageInputProps) {
  const colorScheme = useColorScheme();
  const darkMode = colorScheme === "dark";

  const [message, setMessage] = useState("");

  return (
    <View transparent style={[styles.container, containerStyle]}>
      <View
        lightColor={Colors.light.chatBg}
        darkColor={Colors.lightGrey}
        style={styles.inputContainer}
      >
        <TextInput
          style={[styles.input, { fontFamily: Font.medium }]}
          onChangeText={(text) => setMessage(text)}
          value={message}
          placeholder="Enter Message..."
        />
        <IconButton
          containerStyle={{ backgroundColor: "transparent", height: "100%" }}
          icon="send"
          onPress={() => {
            const msg = message;
            if (!msg) return;

            setMessage("");
            onSend(msg);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Sizes.radius,
    overflow: "hidden",
  },
  input: {
    flex: 1,
    height: "100%",
    paddingHorizontal: Sizes.medium,
    paddingVertical: Sizes.medium,
    alignItems: "center",
  },
});
