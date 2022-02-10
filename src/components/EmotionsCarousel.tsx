import { FC, useEffect, useState } from "react";
import { Dimensions } from "react-native";

import { Emotion, emotionsList } from "../constants/emotions";
import { getProperSize } from "../utils/size";

const getRandomIndex = (total: number) => {
  return Math.floor(Math.random() * total);
};

const SCREEN_HEIGHT = Dimensions.get("screen").height;
const size = getProperSize(SCREEN_HEIGHT);

interface EmotionsCarouselProps {
  speed?: number;
  emotions?: Emotion[];
}

const EmotionsCarousel: FC<EmotionsCarouselProps> = ({ speed = 1250, emotions = emotionsList }) => {
  const [index, setIndex] = useState(() => getRandomIndex(emotions.length));

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = getRandomIndex(emotions.length);
      setIndex(randomIndex);
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, [speed, emotions]);

  const { EmotionSvg } = emotions[index];

  return <EmotionSvg height={size} width={size} />;
};

export default EmotionsCarousel;
