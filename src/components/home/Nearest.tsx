import Restaurant from "@components/resturants/Restaurant";
import { Sizes } from "@constants/Theme";
import { useNavigation } from "@react-navigation/native";
import { IRestaurant } from "@src/types";
import { FlatList } from "react-native";

type NearestProp = {
  data: IRestaurant[];
};

export default function Nearest({ data }: NearestProp) {
  const navigation = useNavigation();

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      data={data}
      renderItem={({ item }) => (
        <Restaurant
          restaurant={item}
          onPress={() => navigation.navigate("AppNavigation", { screen: "OrderDetails" })}
        />
      )}
      contentContainerStyle={{
        columnGap: Sizes.medium,
        paddingHorizontal: Sizes.large,
        paddingVertical: Sizes.medium,
      }}
    />
  );
}
