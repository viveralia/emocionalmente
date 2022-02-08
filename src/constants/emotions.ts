import { FC } from "react";
import { SvgProps } from "react-native-svg";

/* eslint-disable import-helpers/order-imports */
import Emotion1 from "../assets/emotions/1.svg";
import Emotion2 from "../assets/emotions/2.svg";
import Emotion3 from "../assets/emotions/3.svg";
import Emotion4 from "../assets/emotions/4.svg";
import Emotion5 from "../assets/emotions/5.svg";
import Emotion6 from "../assets/emotions/6.svg";
import Emotion7 from "../assets/emotions/7.svg";
import Emotion8 from "../assets/emotions/8.svg";
import Emotion9 from "../assets/emotions/9.svg";
import Emotion10 from "../assets/emotions/10.svg";
import Emotion11 from "../assets/emotions/11.svg";
import Emotion12 from "../assets/emotions/12.svg";
import Emotion13 from "../assets/emotions/13.svg";
import Emotion14 from "../assets/emotions/14.svg";
import Emotion15 from "../assets/emotions/15.svg";
import Emotion16 from "../assets/emotions/16.svg";
import Emotion17 from "../assets/emotions/17.svg";
import Emotion18 from "../assets/emotions/18.svg";
import Emotion19 from "../assets/emotions/19.svg";
import Emotion20 from "../assets/emotions/20.svg";
import Emotion21 from "../assets/emotions/21.svg";
import Emotion22 from "../assets/emotions/22.svg";
import Emotion23 from "../assets/emotions/23.svg";
import Emotion24 from "../assets/emotions/24.svg";
import Emotion25 from "../assets/emotions/25.svg";
import Emotion26 from "../assets/emotions/26.svg";
import Emotion27 from "../assets/emotions/27.svg";
import Emotion28 from "../assets/emotions/28.svg";
import Emotion29 from "../assets/emotions/29.svg";
import Emotion30 from "../assets/emotions/30.svg";
import Emotion31 from "../assets/emotions/31.svg";
import Emotion32 from "../assets/emotions/32.svg";
/* eslint-enable import-helpers/order-imports */
import { getEmotionById } from "../utils/emotions";

export interface Emotion {
  id: number;
  name: string;
  description: string;
  EmotionSvg: FC<SvgProps>;
  avatar: "LUP" | "VALU";
}

export const emotionsList: Emotion[] = [
  {
    id: 1,
    name: "avergonzado",
    EmotionSvg: Emotion1,
    description: "",
    avatar: "LUP",
  },
  {
    id: 2,
    name: "enamorada",
    EmotionSvg: Emotion2,
    description: "",
    avatar: "VALU",
  },
  {
    id: 3,
    name: "confundido",
    EmotionSvg: Emotion3,
    description: "",
    avatar: "LUP",
  },
  {
    id: 4,
    name: "envidiosa",
    EmotionSvg: Emotion4,
    description: "",
    avatar: "VALU",
  },
  {
    id: 5,
    name: "pensativo",
    EmotionSvg: Emotion5,
    description: "",
    avatar: "LUP",
  },
  {
    id: 6,
    name: "apática",
    EmotionSvg: Emotion6,
    description: "",
    avatar: "VALU",
  },
  {
    id: 7,
    name: "",
    EmotionSvg: Emotion7,
    description: "",
    avatar: "LUP",
  },
  {
    id: 8,
    name: "",
    EmotionSvg: Emotion8,
    description: "",
    avatar: "VALU",
  },
  {
    id: 9,
    name: "feliz",
    EmotionSvg: Emotion9,
    description: "",
    avatar: "VALU",
  },
  {
    id: 10,
    name: "enojado",
    EmotionSvg: Emotion10,
    description: "",
    avatar: "LUP",
  },
  {
    id: 11,
    name: "aterrada",
    EmotionSvg: Emotion11,
    description: "",
    avatar: "VALU",
  },
  {
    id: 12,
    name: "",
    EmotionSvg: Emotion12,
    description: "",
    avatar: "LUP",
  },
  {
    id: 13,
    name: "",
    EmotionSvg: Emotion13,
    description: "",
    avatar: "VALU",
  },
  {
    id: 14,
    name: "",
    EmotionSvg: Emotion14,
    description: "",
    avatar: "LUP",
  },
  {
    id: 15,
    name: "",
    EmotionSvg: Emotion15,
    description: "",
    avatar: "VALU",
  },
  {
    id: 16,
    name: "seguro",
    EmotionSvg: Emotion16,
    description: "",
    avatar: "LUP",
  },
  {
    id: 17,
    name: "miedo",
    EmotionSvg: Emotion17,
    description: "",
    avatar: "LUP",
  },
  {
    id: 18,
    name: "aburrida",
    EmotionSvg: Emotion18,
    description: "",
    avatar: "VALU",
  },
  {
    id: 19,
    name: "furioso",
    EmotionSvg: Emotion19,
    description: "",
    avatar: "LUP",
  },
  {
    id: 20,
    name: "enojada",
    EmotionSvg: Emotion20,
    description: "",
    avatar: "VALU",
  },
  {
    id: 21,
    name: "",
    EmotionSvg: Emotion21,
    description: "",
    avatar: "LUP",
  },
  {
    id: 22,
    name: "estresada",
    EmotionSvg: Emotion22,
    description: "",
    avatar: "VALU",
  },
  {
    id: 23,
    name: "enamorado",
    EmotionSvg: Emotion23,
    description: "",
    avatar: "LUP",
  },
  {
    id: 24,
    name: "",
    EmotionSvg: Emotion24,
    description: "",
    avatar: "VALU",
  },
  {
    id: 25,
    name: "",
    EmotionSvg: Emotion25,
    description: "",
    avatar: "VALU",
  },
  {
    id: 26,
    name: "",
    EmotionSvg: Emotion26,
    description: "",
    avatar: "LUP",
  },
  {
    id: 27,
    name: "confundida",
    EmotionSvg: Emotion27,
    description: "",
    avatar: "VALU",
  },
  {
    id: 28,
    name: "",
    EmotionSvg: Emotion28,
    description: "",
    avatar: "LUP",
  },
  {
    id: 29,
    name: "",
    EmotionSvg: Emotion29,
    description: "",
    avatar: "VALU",
  },
  {
    id: 30,
    name: "molesto",
    EmotionSvg: Emotion30,
    description: "",
    avatar: "LUP",
  },
  {
    id: 31,
    name: "confiada",
    EmotionSvg: Emotion31,
    description: "",
    avatar: "VALU",
  },
  {
    id: 32,
    name: "angustiado",
    EmotionSvg: Emotion32,
    description: "",
    avatar: "LUP",
  },
];

export const profileCharacters = {
  LUP: getEmotionById(28),
  VALU: getEmotionById(9),
};
