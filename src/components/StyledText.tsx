import { Text, TextProps } from "./Themed";
import { Font } from "@constants/Theme";

export type FontTypes = "bold" | "regular" | "medium";

function getFontFromWeight(fontType?: string) {
  switch (fontType) {
    case "bold":
      return Font.bold;
    case "regular":
      return Font.regular;
    case "medium":
      return Font.medium;
    default:
      return Font.medium;
  }
}

export default function FigText(props: TextProps & { weight?: FontTypes }) {
  return (
    <Text {...props} style={[props.style, { fontFamily: getFontFromWeight(props?.weight) }]} />
  );
}
