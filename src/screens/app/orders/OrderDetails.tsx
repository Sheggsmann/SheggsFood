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
import OrderItem from "@components/orders/OrderItem";
import PriceInfo from "@components/orders/PriceInfo";

export default function OrderDetails({ navigation }: AppStackScreenProps<"OrderDetails">) {
  const colorScheme = useColorScheme();

  const [orderItems, setOrderItems] = useState(orders);

  const increment = (id: number) => {};
  const decrement = (id: number) => {};
  const deleteItem = (id: number) => {
    setOrderItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <SafeAreaView style={Styles.mode(colorScheme).screen}>
      <Image source={Images.pattern1} style={Styles.g.imageBg2} />

      <View transparent style={[Styles.g.padding, Styles.g.header]}>
        <IconButton icon="back" onPress={() => navigation.goBack()} />
      </View>

      <FlatList
        // contentContainerStyle={{ backgroundColor: "transparent" }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View transparent style={Styles.g.screenPadding}>
            <FigText style={{ fontSize: Sizes.bigFont, marginBottom: Sizes.medium }}>
              Order details
            </FigText>
          </View>
        )}
        data={orderItems}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <OrderItem
            data={item}
            onIncrement={() => increment(item.id)}
            onDecrement={() => decrement(item.id)}
            onDelete={() => deleteItem(item.id)}
          />
        )}
        ListFooterComponent={
          <PriceInfo buttonText="Next" onButtonPress={() => navigation.navigate("EditPayment")} />
        }
        ListFooterComponentStyle={{ paddingHorizontal: Sizes.large }}
      />
    </SafeAreaView>
  );
}
