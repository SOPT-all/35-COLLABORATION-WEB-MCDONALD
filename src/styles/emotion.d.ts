import '@emotion/react';
import { ColorType, BoxShadowType, FontType } from './theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorType;
    boxShadows: BoxShadowType;
    fonts: FontType;
  }
}
