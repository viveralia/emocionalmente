import { Ionicons } from "@expo/vector-icons";
import { format, formatRelative, isSameDay } from "date-fns";
import { es } from "date-fns/locale";
import { Heading, HStack, Icon, IconButton, Text, VStack } from "native-base";
import { FC } from "react";

import { esShortRelativeLocale } from "../utils/dates";

export interface DaysNavigationHeaderProps {
  date: Date;
  onNextDatePress: (date: Date) => void;
  onPreviousDatePress: (date: Date) => void;
}

const DaysNavigationHeader: FC<DaysNavigationHeaderProps> = ({
  date,
  onPreviousDatePress,
  onNextDatePress,
}) => {
  const today = new Date();
  const isNextDayButtonDisabled = isSameDay(date, today);

  const handlePreviousDayPress = () => onPreviousDatePress(date);
  const handleNextDayPress = () => onNextDatePress(date);

  return (
    <HStack
      bg="white"
      px={4}
      py={5}
      alignItems="center"
      justifyContent="space-between"
      space={4}
      safeAreaTop
    >
      <VStack flex={1}>
        <Heading color="darkText" textTransform="capitalize" isTruncated>
          {formatRelative(date, today, { locale: esShortRelativeLocale })}
        </Heading>
        <Text color="lightText">{format(date, "d 'de' MMM 'de' yyyy", { locale: es })}</Text>
      </VStack>
      <HStack space={3}>
        <IconButton
          onPress={handlePreviousDayPress}
          icon={<Icon as={Ionicons} name="chevron-back" />}
          borderRadius="full"
          _icon={{
            color: "coolGray.500",
            size: "sm",
          }}
          _hover={{
            bg: "coolGray.800:alpha.20",
          }}
          _pressed={{
            bg: "coolGray.800:alpha.20",
          }}
        />
        <IconButton
          onPress={handleNextDayPress}
          isDisabled={isNextDayButtonDisabled}
          icon={<Icon as={Ionicons} name="chevron-forward" />}
          borderRadius="full"
          _icon={{
            color: isNextDayButtonDisabled ? "coolGray.300" : "coolGray.500",
            size: "sm",
          }}
          _hover={{
            bg: "coolGray.800:alpha.20",
          }}
          _pressed={{
            bg: "coolGray.800:alpha.20",
          }}
        />
      </HStack>
    </HStack>
  );
};

export default DaysNavigationHeader;
