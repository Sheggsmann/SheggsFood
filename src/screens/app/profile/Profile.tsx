import { useRef, useState } from "react";
import { Image, StyleSheet, ScrollView } from "react-native";
import { View } from "@components/Themed";
import BottomSheet, { BottomSheetRefProps } from "@components/BottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Sizes } from "@constants/Theme";
import { GradientButton, IconButton } from "@components/Button";
import { trimText } from "@src/utils/functions";
import user from "@mocks/profile";
import FigText from "@components/StyledText";
import Images from "@constants/Images";
import Device from "@constants/Device";
import useColorScheme from "@hooks/useColorScheme";
import Colors from "@constants/Colors";
import Styles from "@constants/Styles";
import FoodWithButton from "@components/resturants/FoodWithButton";

export default function Profile() {
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
      <View style={{ height: Device.height * 0.5 }}>
        <Image
          source={Images.promise}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        minHeight={Device.height * 0.62}
        maxHeight={Device.height * 0.9}
        containerStyle={{ backgroundColor }}
        onMaxHeightReached={() => setScrollEnabled(true)}
        onMinHeightReached={() => setScrollEnabled(false)}
      >
        <ScrollView contentContainerStyle={[Styles.screenPadding]} scrollEnabled={scrollEnabled}>
          <View style={{ flex: 1 }}>
            <View style={styles.membership}>
              <FigText lightColor={Colors.yellow} darkColor={Colors.yellow}>
                Member Gold
              </FigText>
            </View>

            <View style={styles.header}>
              <View>
                <FigText style={{ fontSize: 27, marginBottom: 4 }}>
                  {trimText(user.name, 20)}
                </FigText>
                <FigText
                  lightColor={Colors.light.text2}
                  darkColor={Colors.dark.text2}
                  style={{ fontSize: Sizes.font }}
                >
                  {user.email}
                </FigText>
              </View>
              <IconButton
                icon="edit"
                onPress={() => {}}
                size={20}
                containerStyle={{ backgroundColor: "transparent" }}
              />
            </View>

            {/* Voucher Notification */}
            <View lightColor={Colors.grey} darkColor={Colors.darkTint} style={styles.voucher}>
              <Image source={Images.voucher} style={styles.voucherImg} />
              <FigText style={{ fontSize: Sizes.font }}>
                You have {user.vouchersCount} Vouchers
              </FigText>
            </View>

            {/* Favourties */}
            <FigText style={{ fontSize: Sizes.font, marginBottom: Sizes.large }}>Favorites</FigText>

            {user.favorites.map((favorite, index) => {
              return (
                <FoodWithButton
                  key={index}
                  food={favorite}
                  renderRightComponent={() => (
                    <GradientButton
                      text="Buy Again"
                      textStyle={{ fontSize: 12 }}
                      containerStyle={{ width: 80, height: 30 }}
                      onPress={() => {}}
                    />
                  )}
                />
              );
            })}

            <View transparent style={{ height: 200 }} />
          </View>
        </ScrollView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  membership: {
    backgroundColor: Colors.lightSecondary,
    padding: Sizes.small,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Sizes.large,
    maxWidth: 120,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: Sizes.medium,
  },
  voucher: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: Sizes.medium,
    padding: Sizes.medium,
    borderRadius: Sizes.radius,
    marginVertical: Sizes.medium,
  },
  voucherImg: {
    width: 50,
    height: 50,
  },
});
