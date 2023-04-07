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

export default function EditPayment({ navigation }: AppStackScreenProps<"EditPayment">) {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={Styles.mode(colorScheme).screen}>
      <Image source={Images.pattern1} style={Styles.g.imageBg2} />

      <View transparent style={[Styles.g.padding, Styles.g.header]}>
        <IconButton icon="back" onPress={() => navigation.goBack()} />
      </View>

      <ScrollView style={Styles.screenPadding}>
        <FigText style={{ fontSize: Sizes.bigFont, paddingVertical: Sizes.medium }}>
          Payment
        </FigText>

        {paymentMethods.map((method, index) => {
          return (
            <TouchableOpacity
              key={index.toString()}
              activeOpacity={Styles.activeOpacity}
              style={[
                styles.paymentCard,
                { backgroundColor: colorScheme === "dark" ? Colors.darkTint : Colors.grey },
              ]}
              onPress={() => navigation.navigate("EditLocation")}
            >
              <Image
                source={
                  colorScheme === "dark"
                    ? Images[method.provider]
                    : Images[`${method.provider}Light`]
                }
                style={styles.paymentImg}
              />
              <FigText>2121 8352 8465 ****</FigText>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  paymentContainer: {
    paddingVertical: Sizes.medium,
  },
  paymentCard: {
    flexDirection: "row",
    alignItems: "center",
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
