import { View } from "@components/Themed";
import Food from "@components/resturants/Food";
import { Sizes } from "@constants/Theme";
import { IFood } from "@src/types";
import { FlatList } from "react-native";
import Styles from "@constants/Styles";

type PopularProp = {
  data: IFood[];
};

export default function Popular({ data }: PopularProp) {
  return (
    <View transparent style={[Styles.screenPadding, { paddingTop: Sizes.medium }]}>
      {data.map((item, index) => (
        <Food food={item} key={index} />
      ))}
    </View>
  );
}
