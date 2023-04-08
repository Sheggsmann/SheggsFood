import { StyleSheet, Image, SafeAreaView, ScrollView, FlatList } from "react-native";
import { RootTabScreenProps } from "@src/types";
import { View } from "@components/Themed";
import { IconButton } from "@components/Button";
import { Sizes } from "@constants/Theme";
import Banner from "@components/home/Banner";
import SearchBar from "@components/SearchBar";
import FigText from "@components/StyledText";
import Styles from "@constants/Styles";
import useColorScheme from "@hooks/useColorScheme";
import Images from "@constants/Images";
import Colors from "@constants/Colors";
import Device from "@constants/Device";
import Link from "@components/Link";
import Nearest from "@components/home/Nearest";
import { foods, restaurants } from "@mocks/restaurants";
import Popular from "@components/home/Popular";

const bannerScreenOffset = (Device.width - Device.width * 0.9) / 2;

const bannerItems = [
  {
    id: 1,
    text: "Special Deal For\nOctober",
    btnText: "Buy now",
    image: Images.banner1,
    lightBg: false,
  },
  {
    id: 2,
    text: "Upcoming Activities",
    btnText: "Order now",
    image: Images.banner2,
    lightBg: true,
    textColor: "#6B3A5B",
  },
];

export default function Home({ navigation }: RootTabScreenProps<"Home">) {
  const colorScheme = useColorScheme();
  const darkMode = colorScheme === "dark";

  return (
    <SafeAreaView style={Styles.mode(colorScheme).screen}>
      <Image source={Images.pattern1} style={Styles.g.imageBg2} />

      <ScrollView
        style={[Styles.g.header, Styles.g.transparent]}
        showsVerticalScrollIndicator={false}
      >
        <View transparent style={[Styles.g.screenPadding, styles.header]}>
          <FigText style={Styles.g.title}>Find Your{"\n"}Favorite Food</FigText>
          <IconButton
            icon="notificationIcon"
            containerStyle={{ backgroundColor: darkMode ? Colors.lightGrey : Colors.grey }}
            onPress={() => navigation.navigate("AppNavigation", { screen: "Notification" })}
          />
        </View>

        {/* Search Bar */}
        <View transparent style={styles.searchBarView}>
          <SearchBar placeholder="What do you want to order?" />
          <IconButton
            icon="filter"
            onPress={() => {}}
            tintColor={darkMode ? "#fff" : Colors.secondary}
            containerStyle={{
              backgroundColor: darkMode ? Colors.darkTint : Colors.lightSecondary,
            }}
          />
        </View>

        {/* Banners */}
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={16}
          keyExtractor={(_, index) => index.toString()}
          data={bannerItems}
          renderItem={({ item }) => (
            <Banner
              text={item.text}
              btnText={item.btnText}
              image={item.image}
              textColor={item.textColor}
              onPress={() => navigation.navigate("AppNavigation", { screen: "FinishOrder" })}
            />
          )}
          contentContainerStyle={{
            height: 150,
            marginVertical: Sizes.large,
            paddingHorizontal: Sizes.large,
            columnGap: bannerScreenOffset,
          }}
        />

        {/* Nearest Restaurants */}
        <View transparent style={styles.section}>
          <View transparent style={[Styles.screenPadding, styles.sectionHeader]}>
            <FigText style={styles.sectionTitle}>Nearest Restaurant</FigText>
            <Link text="View More" style={{ color: Colors.secondary }} />
          </View>

          <Nearest data={restaurants} />
        </View>

        {/* Popular Menu */}
        <View transparent style={styles.section}>
          <View transparent style={[Styles.screenPadding, styles.sectionHeader]}>
            <FigText style={styles.sectionTitle}>Popular Menu</FigText>
            <Link text="View More" style={{ color: Colors.secondary }} />
          </View>

          <Popular
            data={foods.slice(0, 4)}
            onPress={() => navigation.navigate("AppNavigation", { screen: "FoodDetail" })}
          />
        </View>

        <View transparent style={{ height: 100 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchBarView: {
    width: "100%",
    flexDirection: "row",
    columnGap: Sizes.small,
    marginTop: Sizes.large,
    ...Styles.g.screenPadding,
  },
  section: {
    marginTop: Sizes.xxSmall,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: Sizes.xxSmall,
  },
  sectionTitle: {
    fontSize: Sizes.mediumFont,
  },
});
