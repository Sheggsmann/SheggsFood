import { StyleSheet } from "react-native";
import { Button, GradientButton } from "@components/Button";
import { View } from "@components/Themed";
import { Input } from "@components/Input";
import { Sizes } from "@constants/Theme";
import Colors from "@constants/Colors";
import useColorScheme from "@hooks/useColorScheme";

type FeedbackProps = {
  onSkip: () => void;
  onSubmit: () => void;
};

export default function Feedback({ onSkip, onSubmit }: FeedbackProps) {
  const colorScheme = useColorScheme();
  return (
    <View style={[styles.container]}>
      <Input placeholder="Leave feedback" icon="editIcon" />
      <View style={styles.btnContainer}>
        <GradientButton text="Submit" containerStyle={styles.gBtn} onPress={onSubmit} />
        <Button
          text="Skip"
          onPress={onSkip}
          containerStyle={{
            ...styles.btn,
            backgroundColor: colorScheme === "dark" ? Colors.darkTint : Colors.light.chatBg,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Sizes.large,
    justifyContent: "flex-end",
  },
  btnContainer: {
    flexDirection: "row",
    columnGap: Sizes.medium,
    marginTop: Sizes.medium,
  },
  gBtn: {
    flex: 2,
  },
  btn: {
    flex: 1,
  },
});
