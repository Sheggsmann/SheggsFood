import Restaurant from "@components/resturants/Restaurant";
import { Sizes } from "@constants/Theme";
import { IRestaurant } from "@src/types";
import { FlatList } from "react-native";

type NearestProp = {
  data: IRestaurant[];
};

export default function Nearest({ data }: NearestProp) {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      data={data}
      renderItem={({ item }) => <Restaurant restaurant={item} />}
      contentContainerStyle={{
        columnGap: Sizes.medium,
        paddingHorizontal: Sizes.large,
        paddingVertical: Sizes.medium,
      }}
    />
  );
}
