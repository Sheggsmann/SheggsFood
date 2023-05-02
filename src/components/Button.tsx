import {
  Image,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Sizes } from "@constants/Theme";
import Icon from "@constants/Icon";
import FigText from "./StyledText";
import Styles from "@constants/Styles";
import Colors from "@constants/Colors";
import Device from "@constants/Device";
import { Haptics } from "@src/utils/haptics";

type ButtonProps = {
  text: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  loading?: boolean;
  disabled?: boolean;
};

type GradientButtonProps = ButtonProps;

export function GradientButton({
  text,
  onPress,
  containerStyle,
  textStyle,
  loading,
  disabled,
}: GradientButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      activeOpacity={Styles.activeOpacity}
      onPress={() => {
        Haptics.medium();
        onPress();
      }}
      disabled={disabled}
    >
      <LinearGradient
        colors={[Colors.lightPrimary, Colors.primary]}
        start={{ x: 0.1, y: 0.2 }}
        style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}
      >
        {loading ? (
          <ActivityIndicator size={30} color={"#fff"} />
        ) : (
          <FigText weight="medium" style={[styles.text, { color: "#fff" }, textStyle]}>
            {text}
          </FigText>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

export function Button({ text, onPress, textStyle, containerStyle }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      activeOpacity={Styles.activeOpacity}
      onPress={() => {
        Haptics.medium();
        onPress();
      }}
    >
      <FigText weight="medium" style={[styles.text, textStyle]}>
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
      onPress={() => {
        Haptics.medium();
        onPress();
      }}
      activeOpacity={Styles.activeOpacity}
    >
      <Image source={image} style={{ width: Sizes.icon, height: Sizes.icon }} />
      <FigText style={[styles.text, { marginLeft: Sizes.small }]}>{text}</FigText>
    </TouchableOpacity>
  );
}

type IconButtonProps = {
  icon: keyof typeof Icon;
  onPress: () => void;
  containerStyle?: ViewStyle;
  size?: number;
  tintColor?: string;
};

export function IconButton({ icon, size, tintColor, onPress, containerStyle }: IconButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={Styles.activeOpacity}
      onPress={() => {
        Haptics.medium();
        onPress();
      }}
      style={[
        {
          width: 50,
          height: 50,
          backgroundColor: Colors.lightSecondary,
          borderRadius: Sizes.radius,
          alignItems: "center",
          justifyContent: "center",
        },
        containerStyle,
      ]}
    >
      <Image
        source={Icon[icon]}
        style={{ width: size ? size : Sizes.icon, height: size ? size : Sizes.icon, tintColor }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Device.isSmall ? 50 : 57,
    width: 140,
    borderRadius: Sizes.radius,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
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
