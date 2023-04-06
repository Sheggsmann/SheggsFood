import { INotification } from "../types";

const notifications: INotification[] = [
  {
    id: 1,
    type: "success",
    message: "Your order has been taken by the driver!",
    timestamp: "Recently",
  },
  {
    id: 2,
    type: "money",
    message: "Top Up for $100 was successful",
    timestamp: "10:00 AM",
  },
  {
    id: 3,
    type: "decline",
    message: "Your order has been cancelled",
    timestamp: "22 July 2021",
  },
];

export default notifications;
