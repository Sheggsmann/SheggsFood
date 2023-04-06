import Images from "@constants/Images";
import { IRestaurant, IFood } from "@src/types";

export const restaurants: IRestaurant[] = [
  { id: 1, name: "Vegan Resto", image: Images.restaurant1, distance: { time: "12 Mins" } },
  { id: 2, name: "Healthy Food", image: Images.restaurant2, distance: { time: "8 Mins" } },
  { id: 3, name: "Good Food", image: Images.restaurant3, distance: { time: "12 Mins" } },
  { id: 4, name: "Smart Resto", image: Images.restaurant4, distance: { time: "9 Mins" } },
  { id: 5, name: "Noodles Grant", image: Images.restaurant5, distance: { time: "15 Mins" } },
  { id: 6, name: "My Tummy", image: Images.restaurant6, distance: { time: "3 Mins" } },
];

export const foods: IFood[] = [
  { id: 1, image: Images.food1, name: "Green Noodle", restaurantName: "Noodle Home", price: 17 },
  { id: 2, image: Images.food2, name: "Fruit Salad", restaurantName: "Wijeo Resto", price: 5 },
  {
    id: 3,
    image: Images.food3,
    name: "Herbal PanCacke",
    restaurantName: "Warung Herbal",
    price: 15,
  },
];
