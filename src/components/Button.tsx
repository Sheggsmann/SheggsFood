import { Image, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Sizes } from "@constants/Theme";
import Icon from "@constants/Icon";
import FigText from "./StyledText";
import Styles from "@constants/Styles";
import Colors from "@constants/Colors";

type ButtonProps = {
  text: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
};

export function GradientButton({ text, onPress, containerStyle }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      activeOpacity={Styles.activeOpacity}
      onPress={onPress}
    >
      <LinearGradient
        colors={[Colors.lightGreen, Colors.green]}
        start={{ x: 0.1, y: 0.2 }}
        style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}
      >
        <FigText weight="medium" style={[styles.text, { color: "#fff" }]}>
          {text}
        </FigText>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export function Button({ text, onPress, containerStyle }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      activeOpacity={Styles.activeOpacity}
      onPress={onPress}
    >
      <FigText weight="medium" style={styles.text}>
        {text}
      </FigText>
    </TouchableOpacity>
  );
}

type IconTextButtonProps = ButtonProps & { image: any };

export function IconTextButton({ text, image, onPress, containerStyle }: IconTextButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, styles.container2, containerStyle]}
      onPress={onPress}
      activeOpacity={Styles.activeOpacity}
    >
      <Image source={image} style={{ width: Sizes.icon, height: Sizes.icon }} />
      <FigText style={[styles.text, { marginLeft: Sizes.small }]}>{text}</FigText>
    </TouchableOpacity>
  );
}

type IconButtonProps = { icon: keyof typeof Icon; onPress: () => void; containerStyle?: ViewStyle };

export function IconButton({ icon, onPress, containerStyle }: IconButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={Styles.activeOpacity}
      onPress={onPress}
      style={[
        {
          width: 50,
          height: 50,
          backgroundColor: Colors.lightOrange,
          borderRadius: Sizes.radius,
          alignItems: "center",
          justifyContent: "center",
        },
        containerStyle,
      ]}
    >
      <Image source={Icon[icon]} style={{ width: Sizes.icon, height: Sizes.icon }} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 57,
    width: 140,
    borderRadius: Sizes.radius,
    overflow: "hidden",
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: Sizes.font,
  },
});
