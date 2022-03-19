import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: IColors;
    sizes: ISizes;
    gradients: IGradients;
    shadows: IShadows;
  }
}

interface IColors {
  white: string;
  turquoise: string;
  background: string;
  violet: string;
}

interface ISizes {
  size_1: string;
  size_2: string;
  size_3: string;
  size_4: string;
  size_5: string;
  size_6: string;
  size_7: string;
  size_8: string;
  size_9: string;
}

interface IGradients {
  textGradient: string;
}

interface IShadows {
  textShadow: string;
}
