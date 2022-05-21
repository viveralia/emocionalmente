/* eslint-disable react-native/no-inline-styles */

import { Text, Box, Popover } from "native-base";
import { FC } from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { SvgProps } from "react-native-svg";

import { getProperSize } from "../utils/size";

export interface EmotionPickerProps {
  onPress: (event: GestureResponderEvent) => void;
  EmotionSvg: FC<SvgProps>;
  name: string;
  description: string;
  value: string;
}

const SCREEN_HEIGHT = Dimensions.get("screen").height;
const avatarSize = getProperSize(SCREEN_HEIGHT, 0.1, 80);

const EmotionPicker: FC<EmotionPickerProps> = ({
  onPress,
  EmotionSvg,
  name,
  description,
  value,
}) => {
  return (
    <Popover
      trigger={({ onPress: openPopOver, ...triggerProps }) => {
        return (
          <TouchableOpacity
            {...triggerProps}
            onPress={onPress}
            onLongPress={openPopOver}
            activeOpacity={0.5}
          >
            <Box
              style={name == value ? { backgroundColor: "#FBBF24" } : null}
              borderRadius={"full"}
            >
              <EmotionSvg width={avatarSize} height={avatarSize} />
            </Box>
            <Text textAlign={"center"} fontSize="xs" textTransform={"capitalize"}>
              {name ? name : "emoción"}
            </Text>
          </TouchableOpacity>
        );
      }}
    >
      <Popover.Content accessibilityLabel="Descripción de emoción" w="56">
        <Popover.Arrow />
        <Popover.CloseButton />
        <Popover.Header>
          {name ? name.charAt(0).toUpperCase() + name.slice(1) : "Emoción"}
        </Popover.Header>
        <Popover.Body>
          {description
            ? description
            : "Descripción de la emoción. Donec in blandit neque. Duis congue placerat metus id porttitor. Praesent a purus eu nunc efficitur congue nec non."}
        </Popover.Body>
      </Popover.Content>
    </Popover>
  );
};

export default EmotionPicker;
