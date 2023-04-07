import { useState } from "react";
import { Image, SafeAreaView, StyleSheet } from "react-native";
import { View } from "@components/Themed";
import { IconButton } from "@components/Button";
import { AppStackScreenProps } from "@src/types";
import { Sizes } from "@constants/Theme";
import useColorScheme from "@hooks/useColorScheme";
import FigText from "@components/StyledText";
import Styles from "@constants/Styles";
import Images from "@constants/Images";
import PriceInfo from "@components/orders/PriceInfo";
import Colors from "@constants/Colors";
import Link from "@components/Link";

export default function ConfirmOrder({ navigation }: AppStackScreenProps<"ConfirmOrder">) {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={Styles.mode(colorScheme).screen}>
      <Image source={Images.pattern1} style={Styles.g.imageBg2} />

      <View transparent style={[Styles.g.padding, Styles.g.header]}>
        <IconButton icon="back" onPress={() => navigation.goBack()} />
      </View>

      <View transparent style={[Styles.screenPadding, { flex: 1 }]}>
        <FigText style={{ fontSize: Sizes.bigFont, paddingVertical: Sizes.medium }}>
          Confirm Order
        </FigText>

        <View style={{ flex: 1 }}>
          <View lightColor={Colors.grey} darkColor={Colors.darkTint} style={styles.locationCard}>
            <View transparent style={styles.cardHeader}>
              <FigText
                lightColor={Colors.light.text2}
                darkColor={Colors.dark.text2}
                style={styles.locationTitle}
              >
                Deliver To
              </FigText>
              <Link
                text="Edit"
                style={{ color: Colors.primary }}
                onPress={() => navigation.navigate("EditLocation")}
              />
            </View>

            <View transparent style={styles.locationContent}>
              <Image source={Images.pinLogo} style={{ width: 35, height: 35 }} />
              <View transparent style={{ flex: 1 }}>
                <FigText style={styles.locationText}>
                  8502 Preston Rd Inglewood Marine 98330
                </FigText>
              </View>
            </View>
          </View>

          <View lightColor={Colors.grey} darkColor={Colors.darkTint} style={styles.paymentCard}>
            <View transparent style={styles.cardHeader}>
              <FigText
                lightColor={Colors.light.text2}
                darkColor={Colors.dark.text2}
                style={styles.locationTitle}
              >
                Payment Method
              </FigText>
              <Link
                text="Edit"
                style={{ color: Colors.primary }}
                onPress={() => navigation.navigate("EditPayment")}
              />
            </View>

            <View
              transparent
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Image
                source={colorScheme === "dark" ? Images.paypal : Images.paypalLight}
                style={styles.paymentImg}
              />
              <FigText>2121 8352 8465 ****</FigText>
            </View>
          </View>
        </View>

        <PriceInfo onButtonPress={() => navigation.navigate("EditPayment")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  locationTitle: {
    marginBottom: Sizes.small,
  },
  locationCard: {
    padding: Sizes.large,
    borderRadius: Sizes.radius,
    marginBottom: Sizes.medium,
  },
  locationContent: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: Sizes.small,
    width: "100%",
  },
  locationText: {
    lineHeight: Sizes.large,
  },
  paymentCard: {
    justifyContent: "space-between",
    padding: Sizes.medium,
    borderRadius: Sizes.radius,
    marginBottom: Sizes.medium,
  },
  paymentImg: {
    width: 100,
    maxHeight: 50,
    resizeMode: "contain",
  },
});
