const tintColorLight = "#53E88B";
const tintColorDark = "#53E88B";
const grayLight = "#F6F6F6";
const grayDark = "";
const greyLight = "#181818";
const greyDark = "";
const green = "#15BE77";
const lightGreen = "#53E88B";
const feintGreen = "rgba(83, 232, 139, 0.3)";
const orange = "#DA6317";
const lightOrange = "rgba(255, 144, 8, 0.1)";
const lightRed = "#FF4B4B";
const yellow = "#FEAD1D";

export default {
  light: {
    text: "#000",
    text2: "rgba(0, 0, 0, 0.7)",
    placeholder: "#B2B2B2",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    chatBg: grayLight,
    chatText: greyLight,
    grey: "rgba(210, 210, 210, 1)",
  },
  dark: {
    text: "#fff",
    text2: "rgba(242, 242, 242, 0.5)",
    placeholder: "rgba(242, 242, 242, 0.2)",
    background: "#0D0D0D",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
    grey: "rgba(242, 242, 242, 0.5)",
  },
  primary: green,
  lightPrimary: lightGreen,
  tintPrimary: feintGreen,
  secondary: orange,
  lightSecondary: lightOrange,
  tintGreen: "rgba(83, 232, 139, 0.1)",
  lightGrey: "rgba(242, 242, 242, 0.2)",
  grey: "rgba(242, 242, 242, 0.5)",
  darkTint: "#252525",
  priceColor: yellow,
  error: lightRed,
  yellow,
};
