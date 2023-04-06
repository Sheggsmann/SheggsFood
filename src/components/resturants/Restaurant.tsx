import { StyleSheet, Image, ViewStyle, Pressable } from "react-native";
import { View } from "@components/Themed";
import { Sizes } from "@constants/Theme";
import { Haptics } from "@src/utils/haptics";
import { IRestaurant } from "@src/types";
import Colors from "@constants/Colors";
import FigText from "@components/StyledText";

type RestaurantProps = {
  restaurant: IRestaurant;
  containerStyle?: ViewStyle;
  onPress?: () => void;
};

export default function Restaurant({ restaurant, onPress, containerStyle }: RestaurantProps) {
  return (
    <View
      lightColor={Colors.grey}
      darkColor={Colors.darkTint}
      style={[styles.container, containerStyle]}
    >
      <Pressable
        style={{ flex: 1 }}
        onPress={() => {
          Haptics.medium();
          onPress && onPress();
        }}
      >
        <View transparent style={styles.imageContainer}>
          <Image source={restaurant.image} style={styles.image} />
        </View>
        <View transparent style={styles.textContainer}>
          <FigText style={{ fontSize: Sizes.font }}>{restaurant.name}</FigText>
          <FigText
            weight="regular"
            lightColor={Colors.light.text2}
            darkColor={Colors.dark.text2}
            style={{ fontSize: Sizes.tinyFont }}
          >
            {restaurant?.distance?.time}
          </FigText>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 185,
    width: 150,
    borderRadius: Sizes.radius,
    padding: Sizes.medium,
  },
  imageContainer: {
    flex: 0.75,
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  textContainer: {
    flex: 0.35,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
