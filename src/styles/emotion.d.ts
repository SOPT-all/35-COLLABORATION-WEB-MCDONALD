import "@emotion/react";
import { ColorType } from "./theme";
import { FontType } from "./theme";

declare module "@emotion/react" {
  export interface Theme {
    colors: ColorType;
    fonts: FontType;
  }
}
