import { useState } from "react";
import { Image, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { View } from "@components/Themed";
import { IconButton } from "@components/Button";
import { AppStackScreenProps } from "@src/types";
import { Sizes } from "@constants/Theme";
import { paymentMethods } from "@mocks/orders";
import FigText from "@components/StyledText";
import Styles from "@constants/Styles";
import Images from "@constants/Images";
import Colors from "@constants/Colors";
import useColorScheme from "@hooks/useColorScheme";
import Icon from "@constants/Icon";
import Link from "@components/Link";

export default function EditLocation({ navigation }: AppStackScreenProps<"EditLocation">) {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={Styles.mode(colorScheme).screen}>
      <Image source={Images.pattern1} style={Styles.g.imageBg2} />

      <View transparent style={[Styles.g.padding, Styles.g.header]}>
        <IconButton icon="back" onPress={() => navigation.goBack()} />
      </View>

      <View transparent style={Styles.screenPadding}>
        <FigText style={{ fontSize: Sizes.bigFont, paddingVertical: Sizes.medium }}>
          Shipping
        </FigText>

        <View lightColor={Colors.grey} darkColor={Colors.darkTint} style={styles.locationCard}>
          <FigText
            lightColor={Colors.light.text2}
            darkColor={Colors.dark.text2}
            style={styles.locationTitle}
          >
            Order Location
          </FigText>
          <View transparent style={styles.locationContent}>
            <Image source={Images.pinLogo} style={{ width: 35, height: 35 }} />
            <View transparent style={{ flex: 1 }}>
              <FigText style={styles.locationText}>8502 Preston Rd Inglewood Marine 98330</FigText>
            </View>
          </View>
        </View>

        <View lightColor={Colors.grey} darkColor={Colors.darkTint} style={styles.locationCard}>
          <FigText
            lightColor={Colors.light.text2}
            darkColor={Colors.dark.text2}
            style={styles.locationTitle}
          >
            Order Location
          </FigText>
          <View transparent style={styles.locationContent}>
            <Image source={Images.pinLogo} style={{ width: 35, height: 35 }} />
            <View transparent style={{ flex: 1 }}>
              <FigText style={styles.locationText}>
                4517 Washington Ave, Manchester, Kentucky 39495
              </FigText>
            </View>
          </View>

          <View transparent style={styles.linkContainer}>
            <Link
              text="Set Location"
              style={{ color: Colors.primary }}
              onPress={() => navigation.navigate("ConfirmOrder")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  linkContainer: {
    marginTop: Sizes.medium,
    marginLeft: 45,
  },
});
