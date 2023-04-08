import { View } from "./Themed";
import FigText from "./StyledText";
import Colors from "@constants/Colors";

type DotProps = {
  count?: number | boolean;
};

export default function Dot({ count }: DotProps) {
  const isDigit = Number.isInteger(count);

  return (
    <View
      style={{
        width: isDigit ? 12 : 10,
        height: isDigit ? 12 : 10,
        borderRadius: 6,
        backgroundColor: Colors.error,
        position: "absolute",
        top: 2,
        right: -3,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isDigit && <FigText style={{ fontSize: 8, color: "#fff" }}>{count}</FigText>}
    </View>
  );
}
