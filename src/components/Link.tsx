import Styles from "@constants/Styles";
import { TouchableOpacity, TextStyle } from "react-native";
import FigText, { FontTypes } from "./StyledText";

type LinkProps = {
  text: string;
  onPress?: () => void;
  style?: TextStyle;
  weight?: FontTypes;
};

export default function Link({ text, onPress, style, weight }: LinkProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={Styles.activeOpacity}>
      <FigText weight={weight} style={style}>
        {text}
      </FigText>
    </TouchableOpacity>
  );
}
