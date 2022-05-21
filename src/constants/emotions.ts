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
    description:
      "Es la turbación del ánimo que se produce por una falta cometida o por alguna acción humillante y deshonrosa, ya sea propia o ajena.",
    avatar: "LUP",
  },
  {
    id: 2,
    name: "enamorada",
    EmotionSvg: Emotion2,
    description:
      "Hace referencia a un estado emocional de alegría y felicidad que sentimos cuando nos encontramos fuertemente atraídos por otra persona, a la que idealizamos y le atribuimos toda una serie de cualidades que en la mayoría de los casos magnificamos.",
    avatar: "VALU",
  },
  {
    id: 3,
    name: "confundido",
    EmotionSvg: Emotion3,
    description: "Mezclar cosas o personas que no puedan distinguirse unas de otras.",
    avatar: "LUP",
  },
  {
    id: 4,
    name: "envidiosa",
    EmotionSvg: Emotion4,
    description:
      "Es un sentimiento o estado mental en el cual existe dolor o desdicha por no poseer uno mismo lo que tiene el otro, sea en bienes, cualidades superiores u otra clase de cosas tangibles e intangibles.",
    avatar: "VALU",
  },
  {
    id: 5,
    name: "pensativo",
    EmotionSvg: Emotion5,
    description:
      "Meditas intensamente algún pensamiento o idea de una manera intensa y está abstraído en sus pensamientos.",
    avatar: "LUP",
  },
  {
    id: 6,
    name: "apática",
    EmotionSvg: Emotion6,
    description: "Estado de ánimo impasible que se refleja en la ausencia de ganas o entusiasmo. ",
    avatar: "VALU",
  },
  {
    id: 7,
    name: "aterrado",
    EmotionSvg: Emotion7,
    description:
      "Sensación desagradable provocada por la percepción de peligro, real o imaginario.",
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
    description:
      "Es un estado emocional temporal que podemos elegir o no tener frente a las cosas.",
    avatar: "VALU",
  },
  {
    id: 10,
    name: "enojado",
    EmotionSvg: Emotion10,
    description:
      "El enojo es una alteración anímica que genera irritación, rabia y/o afán de revancha o venganza.",
    avatar: "LUP",
  },
  {
    id: 11,
    name: "aterrada",
    EmotionSvg: Emotion11,
    description:
      "Sensación desagradable provocada por la percepción de peligro, real o imaginario.",
    avatar: "VALU",
  },
  {
    id: 12,
    name: "feliz",
    EmotionSvg: Emotion12,
    description:
      "Es un estado emocional temporal que podemos elegir o no tener frente a las cosas.",
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
    description: "Es una sensación de satisfacción.",
    avatar: "LUP",
  },
  {
    id: 17,
    name: "Aterrado?",
    EmotionSvg: Emotion17,
    description: "",
    avatar: "LUP",
  },
  {
    id: 18,
    name: "aburrida",
    EmotionSvg: Emotion18,
    description:
      "Estado de sentirse desinteresado sobre lo que lo rodea a uno, no tener nada que hacer.",
    avatar: "VALU",
  },
  {
    id: 19,
    name: "furioso",
    EmotionSvg: Emotion19,
    description: "Persona que está muy agitada o violenta a causa de un gran enojo.",
    avatar: "LUP",
  },
  {
    id: 20,
    name: "enojada",
    EmotionSvg: Emotion20,
    description:
      "El enojo es una alteración anímica que genera irritación, rabia y/o afán de revancha o venganza.",
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
    description:
      "Es un sentimiento de tensión física o emocional. Puede provenir de cualquier situación o pensamiento que lo haga sentir a uno frustrado, furioso o nervioso. ",
    avatar: "VALU",
  },
  {
    id: 23,
    name: "enamorado",
    EmotionSvg: Emotion23,
    description:
      "Hace referencia a un estado emocional de alegría y felicidad que sentimos cuando nos encontramos fuertemente atraídos por otra persona, a la que idealizamos y le atribuimos toda una serie de cualidades que en la mayoría de los casos magnificamos.",
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
    description: "Mezclar cosas o personas que no puedan distinguirse unas de otras.",
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
    description: "Es una sensación de satisfacción.",
    avatar: "VALU",
  },
  {
    id: 32,
    name: "angustiado",
    EmotionSvg: Emotion32,
    description:
      "Es un estado afectivo que se caracteriza por aparecer como reacción ante un peligro desconocido o impresión.",
    avatar: "LUP",
  },
];

export const profileCharacters = {
  LUP: getEmotionById(28),
  VALU: getEmotionById(9),
};
