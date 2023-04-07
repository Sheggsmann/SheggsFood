import { IOrder, IPaymentMethod } from "@src/types";
import { foods, restaurants } from "./restaurants";

const orders: IOrder[] = [
  { id: 1, food: foods[0], restaurant: restaurants[0], quantity: 1 },
  { id: 2, food: foods[1], restaurant: restaurants[1], quantity: 1 },
  { id: 3, food: foods[2], restaurant: restaurants[2], quantity: 3 },
];

export const paymentMethods: IPaymentMethod[] = [
  { id: 1, provider: "paypal", cardNumber: 2121845284622234 },
  { id: 2, provider: "payoneer", cardNumber: 2121845284622234 },
  { id: 3, provider: "visa", cardNumber: 2121845284622234 },
];

export default orders;
