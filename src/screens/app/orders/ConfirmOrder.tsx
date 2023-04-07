import { useState } from "react";
import { Image, SafeAreaView, FlatList } from "react-native";
import { View } from "@components/Themed";
import { IconButton } from "@components/Button";
import { AppStackScreenProps } from "@src/types";
import { Sizes } from "@constants/Theme";
import orders from "@mocks/orders";
import FigText from "@components/StyledText";
import Styles from "@constants/Styles";
import Images from "@constants/Images";
import useColorScheme from "@hooks/useColorScheme";
import PriceInfo from "@components/orders/PriceInfo";

export default function ConfirmOrder({ navigation }: AppStackScreenProps<"ConfirmOrder">) {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={Styles.mode(colorScheme).screen}>
      <Image source={Images.pattern1} style={Styles.g.imageBg2} />

      <View transparent style={[Styles.g.padding, Styles.g.header]}>
        <IconButton icon="back" onPress={() => navigation.goBack()} />
      </View>

      <View transparent style={[Styles.screenPadding, { flex: 1 }]}>
        <View transparent style={{ flex: 1 }}>
          <FigText>Welcome</FigText>
        </View>
        <PriceInfo onButtonPress={() => navigation.navigate("EditLocation")} />
      </View>
    </SafeAreaView>
  );
}
