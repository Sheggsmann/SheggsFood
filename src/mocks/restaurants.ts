import Images from "@constants/Images";
import { IRestaurant, IFood } from "@src/types";

export const restaurants: IRestaurant[] = [
  {
    id: 1,
    name: "Vegan Resto",
    image: Images.restaurant1,
    distance: { time: "12 Mins", km: 19 },
    rating: 4.8,
    bgImage: Images.restaurantMenu,
    tag: "Popular",
    description:
      "Most whole Alaskan Red Crabs get broken down into legs, claws, and lump meat. We offer all of these options as well in our online shop, but there is nothing like getting the whole menu because that is not accomplishable",
    testimonials: [
      {
        id: 1,
        name: "Dianell Russel",
        image: Images.user5,
        testimonial: "This is great, So delicious! You Must Here, with your family...",
        rating: 5,
        date: "12 April, 2022",
      },
      {
        id: 2,
        name: "Jay Stance",
        image: Images.user3,
        testimonial: "This is great, So delicious! You Must Here, with your family...",
        rating: 4.5,
        date: "12 April, 2022",
      },
    ],
  },
  { id: 2, name: "Healthy Food", image: Images.restaurant2, distance: { time: "8 Mins" } },
  { id: 3, name: "Good Food", image: Images.restaurant3, distance: { time: "12 Mins" } },
  { id: 4, name: "Smart Resto", image: Images.restaurant4, distance: { time: "9 Mins" } },
  { id: 5, name: "Noodles Grant", image: Images.restaurant5, distance: { time: "15 Mins" } },
  { id: 6, name: "My Tummy", image: Images.restaurant6, distance: { time: "3 Mins" } },
];

export const foods: IFood[] = [
  {
    id: 1,
    image: Images.food1,
    name: "Green Noodle",
    restaurantName: "Noodle Home",
    description: `
Nulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt. Velit non est cillum consequat cupidatat ex Lorem laboris labore aliqua ad duis eu laborum.

Strowberry
Cream
wheat

Nulla occaecat velit laborum exercitation ullamco. Elit labore eu aute elit nostrud culpa velit excepteur deserunt sunt.
`,
    price: 17,
    ordersCount: 2000,
    rating: 4.4,
    bgImage: Images.foodDetail,
    tag: "Popular",
  },
  {
    id: 2,
    image: Images.food2,
    name: "Fruit Salad",
    restaurantName: "Wijeo Resto",
    price: 5,
    ordersCount: 2000,
    rating: 4.4,
  },
  {
    id: 3,
    image: Images.food3,
    name: "Herbal PanCacke",
    restaurantName: "Warung Herbal",
    price: 15,
    ordersCount: 2000,
  },
  {
    id: 4,
    image: Images.food4,
    name: "Egg Warmoil",
    restaurantName: "Warung Herbal",
    price: 35,
    ordersCount: 2000,
  },
  {
    id: 5,
    image: Images.food5,
    name: "Nat IceCream",
    restaurantName: "Icy Spicy",
    price: 16,
    ordersCount: 2000,
  },
  {
    id: 6,
    image: Images.menu1,
    name: "Mongoose Pizza",
    restaurantName: "Icy Spicy",
    price: 16,
    ordersCount: 2000,
  },
  {
    id: 7,
    image: Images.menu2,
    name: "Conroll Beef",
    restaurantName: "Icy Spicy",
    price: 16,
    ordersCount: 2000,
  },
];
