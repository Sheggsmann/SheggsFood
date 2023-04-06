import { ViewStyle } from "react-native";
import { View } from "@components/Themed";
import { Sizes } from "@constants/Theme";
import { IconButton } from "@components/Button";

type RatingProps = { style?: ViewStyle; rating: number; onChange?: (value: number) => void };

const STAR_SIZE = 32;

export default function Rating({ style, rating, onChange }: RatingProps) {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      {new Array(5).fill(0).map((_, index) => {
        return (
          <IconButton
            key={index.toString()}
            icon="star"
            onPress={() => {
              onChange && onChange(index + 1);
            }}
            containerStyle={{
              marginHorizontal: Sizes.xSmall,
              width: STAR_SIZE,
              height: STAR_SIZE,
              backgroundColor: "transparent",
              opacity: rating > index ? 1 : 0.5,
            }}
          />
        );
      })}
    </View>
  );
}
