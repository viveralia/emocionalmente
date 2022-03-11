import { Heading, HStack, Text, VStack } from "native-base";
import { FC } from "react";

import { EntryModel } from "../models/entry.model";
import { getEmotionByName } from "../utils/emotions";

export interface EntryCardProps {
  entry: EntryModel;
}

const EntryCard: FC<EntryCardProps> = ({ entry }) => {
  const { EmotionSvg } = getEmotionByName(entry.emotion)!;

  return (
    <VStack space={2} bg="white" px={4} py={6} mb={4}>
      <HStack alignItems="center" space={2}>
        <EmotionSvg width={64} height={64} />
        <Heading size="md" textTransform="capitalize" isTruncated>
          {entry.emotion}
        </Heading>
      </HStack>
      <VStack space={5}>
        <VStack space={1}>
          <Heading fontWeight="semibold" size="sm">
            ¿Qué me hizo sentir así?
          </Heading>
          <Text color="lightText">{entry.description}</Text>
        </VStack>
        <VStack space={1}>
          <Heading fontWeight="semibold" size="sm">
            ¿Cómo lo expresó mi cuerpo?
          </Heading>
          <Text color="lightText">{entry.bodyExpression}</Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default EntryCard;
