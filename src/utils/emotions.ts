import { Emotion, emotionsList } from "../constants/emotions";

export const getEmotionsByAvatar = (avatar: Emotion["avatar"]) => {
  return emotionsList.filter((emotion) => emotion.avatar === avatar);
};

export const getEmotionById = (id: number) => {
  return emotionsList.find((emotion) => emotion.id === id);
};

export const getEmotionByName = (name: string) => {
  return emotionsList.find((emotion) => emotion.name === name);
};
