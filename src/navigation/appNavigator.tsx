import { AppStackParamList } from "@src/types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./tabNavigator";
import Notification from "@screens/app/Notification";
import Messages from "@screens/app/chat/Messages";
import CallRinging from "@screens/app/chat/CallRinging";
import Call from "@screens/app/chat/Call";
import FinishOrder from "@screens/app/orders/FinishOrder";
import RateFood from "@screens/app/orders/RateFood";
import RateRestaurant from "@screens/app/orders/RateRestaurant";
import OrderDetails from "@screens/app/orders/OrderDetails";
import ConfirmOrder from "@screens/app/orders/ConfirmOrder";
import EditLocation from "@screens/app/orders/EditLocation";
import EditPayment from "@screens/app/orders/EditPayment";
import RestaurantDetail from "@screens/app/restaurant/RestaurantDetail";
import FoodDetail from "@screens/app/restaurant/FoodDetail";

type StackParamList = AppStackParamList;

const Stack = createNativeStackNavigator<StackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="CallRinging" component={CallRinging} />
      <Stack.Screen name="Call" component={Call} />
      <Stack.Screen name="FinishOrder" component={FinishOrder} />
      <Stack.Screen name="RateFood" component={RateFood} />
      <Stack.Screen name="RateRestaurant" component={RateRestaurant} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
      <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} />
      <Stack.Screen name="EditLocation" component={EditLocation} />
      <Stack.Screen name="EditPayment" component={EditPayment} />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
      <Stack.Screen name="FoodDetail" component={FoodDetail} />
    </Stack.Navigator>
  );
}
