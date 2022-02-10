import { Emotion, emotionsList } from "../constants/emotions";

export const getEmotionsByAvatar = (avatar: Emotion["avatar"]) => {
  return emotionsList.filter((emotion) => emotion.avatar === avatar);
};

export const getEmotionById = (id: number) => {
  return emotionsList.find((emotion) => emotion.id === id);
};
