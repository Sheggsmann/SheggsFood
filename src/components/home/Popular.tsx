import { View } from "@components/Themed";
import Food from "@components/resturants/Food";
import { Sizes } from "@constants/Theme";
import { IFood } from "@src/types";
import Styles from "@constants/Styles";

type PopularProp = {
  data: IFood[];
  onPress?: () => void;
};

export default function Popular({ data, onPress }: PopularProp) {
  return (
    <View transparent style={[Styles.screenPadding, { paddingTop: Sizes.medium }]}>
      {data.map((item, index) => (
        <Food food={item} key={index} onPress={onPress} />
      ))}
    </View>
  );
}
