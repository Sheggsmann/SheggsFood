import { StyleSheet, Image, ViewStyle, Pressable } from "react-native";
import { View } from "@components/Themed";
import { Sizes } from "@constants/Theme";
import { Haptics } from "@src/utils/haptics";
import { IFood } from "@src/types";
import Colors from "@constants/Colors";
import FigText from "@components/StyledText";
import useColorScheme from "@hooks/useColorScheme";
import { trimText } from "@src/utils/functions";

type FoodWithButtonProps = {
  food: IFood;
  containerStyle?: ViewStyle;
  onPress?: () => void;
  renderRightComponent?: () => JSX.Element;
};

export default function FoodWithButton({
  food,
  onPress,
  containerStyle,
  renderRightComponent,
}: FoodWithButtonProps) {
  const colorScheme = useColorScheme();

  const backgroundColor = colorScheme === "light" ? Colors.grey : Colors.darkTint;

  return (
    <Pressable
      style={[styles.container, containerStyle, { backgroundColor }]}
      onPress={() => {
        Haptics.medium();
        onPress && onPress();
      }}
    >
      <View transparent style={styles.imageContainer}>
        <Image source={food.image} style={styles.image} />
      </View>

      <View transparent style={styles.textContainer}>
        <FigText style={{ fontSize: Sizes.mediumFont }}>{trimText(food.name, 20)}</FigText>
        <FigText
          lightColor={Colors.light.text2}
          darkColor={Colors.dark.text2}
          style={{ marginTop: 4 }}
        >
          {trimText(food.restaurantName, 28)}
        </FigText>
        <FigText style={{ fontSize: Sizes.mediumFont, marginTop: 4, color: Colors.primary }}>
          $ {food.price}
        </FigText>
      </View>

      {renderRightComponent && renderRightComponent()}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginBottom: Sizes.medium,
    borderRadius: Sizes.radius,
    padding: Sizes.medium,
    flexDirection: "row",
    alignItems: "center",
    columnGap: Sizes.small,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: Sizes.radius / 2,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
});
