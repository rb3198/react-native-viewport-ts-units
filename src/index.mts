import { Dimensions } from "react-native";

export const vw = (width: number) =>
  Dimensions.get("window").width * (width / 100);
export const vh = (height: number) =>
  Dimensions.get("window").height * (height / 100);
export const vmin = (length: number) =>
  Math.min(
    Dimensions.get("window").width * (length / 100),
    Dimensions.get("window").height * (length / 100)
  );
export const vmax = (length: number) =>
  Math.max(
    Dimensions.get("window").width * (length / 100),
    Dimensions.get("window").height * (length / 100)
  );
