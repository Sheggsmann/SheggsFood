import { StyleSheet, Image } from "react-native";
import { Sizes } from "@constants/Theme";
import { ITestimonial } from "@src/types";
import { View } from "@components/Themed";
import FigText from "@components/StyledText";
import Styles from "@constants/Styles";
import Colors from "@constants/Colors";
import Icon from "@constants/Icon";

type TestimonialsProps = {
  data?: ITestimonial[];
};

export default function Testimonials({ data }: TestimonialsProps) {
  return (
    <View style={[Styles.screenPadding]}>
      <FigText style={styles.headerText}>Testimonials</FigText>

      <View transparent>
        {data?.length &&
          data.map((testimonial, index) => (
            <View
              lightColor={Colors.grey}
              darkColor={Colors.darkTint}
              key={index.toString()}
              style={styles.card}
            >
              <View style={styles.imgContainer}>
                <Image source={testimonial.image} style={styles.image} />
              </View>

              <View transparent style={styles.info}>
                <View transparent style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <View transparent>
                    <FigText style={{ fontSize: Sizes.font }}>{testimonial.name}</FigText>
                    <FigText lightColor={Colors.light.text2} darkColor={Colors.dark.text2}>
                      {testimonial.date}
                    </FigText>
                  </View>

                  <View style={styles.chip}>
                    <Image
                      source={Number.isInteger(testimonial.rating) ? Icon.star1 : Icon.halfStar}
                      style={{ width: 18, height: 18 }}
                    />
                    <FigText style={{ fontSize: Sizes.mediumFont, color: Colors.primary }}>
                      5
                    </FigText>
                  </View>
                </View>

                <FigText style={{ marginTop: Sizes.large }}>{testimonial.testimonial}</FigText>
              </View>
            </View>
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: Sizes.mediumFont,
    marginVertical: Sizes.large,
  },
  card: {
    flexDirection: "row",
    minHeight: 100,
    width: "100%",
    marginBottom: Sizes.medium,
    columnGap: Sizes.medium,
    padding: Sizes.medium,
    borderRadius: Sizes.radius,
  },
  info: {
    flex: 1,
  },
  imgContainer: {
    width: 70,
    height: 70,
    borderRadius: Sizes.radius,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 5,
    backgroundColor: Colors.tintPrimary,
    borderRadius: Sizes.radius,
    width: 55,
    height: 30,
  },
});
