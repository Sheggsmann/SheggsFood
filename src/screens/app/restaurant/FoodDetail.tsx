import { useRef, useState } from "react";
import { Image, StyleSheet, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "@components/Themed";
import BottomSheet, { BottomSheetRefProps } from "@components/BottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Sizes } from "@constants/Theme";
import { GradientButton, IconButton } from "@components/Button";
import { trimText } from "@src/utils/functions";
import { AppStackScreenProps } from "@src/types";
import { foods, restaurants } from "@mocks/restaurants";
import FigText from "@components/StyledText";
import Device from "@constants/Device";
import useColorScheme from "@hooks/useColorScheme";
import Colors from "@constants/Colors";
import Styles from "@constants/Styles";
import Icon from "@constants/Icon";
import Testimonials from "@components/resturants/Testimonials";

const restaurant = restaurants[0];
const food = foods[0];

export default function FoodDetail({ navigation }: AppStackScreenProps<"FoodDetail">) {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const backgroundColor =
    colorScheme === "light" ? Colors.light.background : Colors.dark.background;

  const [scrollEnabled, setScrollEnabled] = useState(false);

  const bottomSheetRef = useRef<BottomSheetRefProps>(null);

  const onPress = () => {
    bottomSheetRef?.current?.scrollTo(-100);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ height: Device.height * 0.58 }}>
        <Image
          source={food?.bgImage}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />

        <IconButton
          icon="back"
          containerStyle={{
            position: "absolute",
            top: Device.isSmall ? Sizes.medium : Sizes.xxSmall + insets.top,
            left: Sizes.large,
          }}
          onPress={() => navigation.goBack()}
        />
      </View>

      <View
        style={{
          position: "absolute",
          marginHorizontal: Sizes.large,
          alignSelf: "center",
          width: "100%",
          bottom: Device.isSmall ? Sizes.large : Device.iOS ? insets.bottom : Sizes.medium,
          zIndex: 99,
          ...Styles.screenPadding,
        }}
      >
        <GradientButton
          text="Add To Cart"
          onPress={() => {}}
          containerStyle={{
            width: "100%",
          }}
        />
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        minHeight={Device.height * 0.58}
        maxHeight={Device.height * 0.9}
        containerStyle={{ backgroundColor }}
        onMaxHeightReached={() => setScrollEnabled(true)}
        onMinHeightReached={() => setScrollEnabled(false)}
      >
        <ScrollView scrollEnabled={scrollEnabled} showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1 }}>
            <View style={styles.header}>
              <View style={styles.membership}>
                <FigText lightColor={Colors.primary} darkColor={Colors.primary}>
                  {restaurant?.tag}
                </FigText>
              </View>
              <View
                transparent
                style={{ flexDirection: "row", alignItems: "center", columnGap: Sizes.small }}
              >
                <IconButton
                  size={20}
                  icon="mapPin"
                  containerStyle={{ ...styles.headerIconBtn, backgroundColor: Colors.tintPrimary }}
                  onPress={() => {}}
                />
                <IconButton
                  size={15}
                  icon="heart"
                  containerStyle={styles.headerIconBtn}
                  onPress={() => {}}
                />
              </View>
            </View>

            {/* Food Name */}
            <View style={[styles.header, styles.vMargin]}>
              <View>
                <FigText style={{ fontSize: 27, marginBottom: 4 }}>
                  {trimText(food.name, 25)}
                </FigText>
              </View>
            </View>

            {/* Ratings and Description */}
            <View
              transparent
              style={{
                flexDirection: "row",
                alignItems: "center",
                columnGap: Sizes.large,
                ...Styles.screenPadding,
              }}
            >
              <View style={styles.rating}>
                <Image
                  source={Number.isInteger(restaurant.rating) ? Icon.star1 : Icon.halfStar}
                  style={styles.ratingIcon}
                />
                <FigText lightColor={Colors.light.text2} darkColor={Colors.dark.text2}>
                  {restaurant.rating} Rating
                </FigText>
              </View>

              <View style={styles.rating}>
                <Image source={Icon.shoppingBag} style={styles.ratingIcon} />
                <FigText lightColor={Colors.light.text2} darkColor={Colors.dark.text2}>
                  {food.ordersCount}+ {food.ordersCount < 1 ? "Order" : "Orders"}
                </FigText>
              </View>
            </View>

            <View style={{ marginVertical: Sizes.xxSmall, ...Styles.screenPadding }}>
              <FigText style={{ lineHeight: 20 }}>{food?.description}</FigText>
            </View>

            {/* Testimonials */}
            <Testimonials data={restaurant.testimonials} />

            <View transparent style={{ height: 200 }} />
          </View>
        </ScrollView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  membership: {
    backgroundColor: Colors.tintPrimary,
    padding: Sizes.small,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Sizes.large,
  },
  headerIconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  ratingIcon: {
    width: 22,
    height: 22,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 6,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...Styles.screenPadding,
  },
  vMargin: {
    marginVertical: Sizes.medium,
  },
});
