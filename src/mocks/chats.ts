import { IChatList, IMessage } from "@src/types";
import Images from "@constants/Images";

export const chatList: IChatList[] = [
  {
    id: 1,
    name: "Anamp",
    image: Images.user1,
    lastMessage: "Your order just arrived!",
    timestamp: "20:00",
    isOnline: true,
  },
  {
    id: 2,
    image: Images.user2,
    name: "Guy Hawkins",
    lastMessage: "You should reply me concerning...",
    timestamp: "1:58",
    isOnline: false,
  },
  {
    id: 3,
    name: "Leslie Alexander",
    image: Images.user3,
    lastMessage: "I am awaiting the message you promised me concerning",
    timestamp: "3:04",
    isOnline: true,
  },
];

export const messages: IMessage[] = [
  { id: 1, senderId: 1, receiverId: 2, message: "Just to order", timestamp: new Date() },
  {
    id: 2,
    senderId: 2,
    receiverId: 1,
    message: "Okay, for what level of spiciness?",
    timestamp: new Date(),
  },
  {
    id: 3,
    senderId: 1,
    receiverId: 2,
    message:
      "I want mine very spicy. I would love a little bit of pepperoni but I dont like soo much pepper.",
    timestamp: new Date(),
  },
  {
    id: 4,
    senderId: 2,
    receiverId: 1,
    message: "Hmm, you have a very spicy and interactive taste to this 😜",
    timestamp: new Date(),
  },
  { id: 5, senderId: 1, receiverId: 2, message: "Okay, wait a minute 👍", timestamp: new Date() },
  { id: 6, senderId: 2, receiverId: 1, message: "Okay, I'm waiting 👍", timestamp: new Date() },
];
