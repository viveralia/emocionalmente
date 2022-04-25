import { Ionicons } from "@expo/vector-icons";
import { format, formatRelative } from "date-fns";
import { es } from "date-fns/locale";
import { Heading, Text, Box, Popover, IconButton } from "native-base";
import { FC } from "react";

import { esShortRelativeLocale } from "../utils/dates";

export interface EntryHeaderProps {
  date: Date;
  isToday: boolean;
}

const EntryHeader: FC<EntryHeaderProps> = ({ date, isToday }) => {
  return (
    <Box mt={2}>
      <Text mb="2">
        {formatRelative(date, new Date(), { locale: esShortRelativeLocale })
          .charAt(0)
          .toUpperCase()}
        {formatRelative(date, new Date(), { locale: esShortRelativeLocale }).slice(1)}
        {", "}
        {format(date, "d 'de' MMM 'de' yyyy", { locale: es })}
      </Text>
      <Box flex={1} flexDirection={"row"} alignItems={"center"}>
        <Heading>{isToday ? "¿Cómo me siento?" : "¿Cómo me sentí?"}</Heading>
        <Popover
          trigger={({ onPress: openPopOver, ...triggerProps }) => {
            return (
              <IconButton {...triggerProps} onPress={openPopOver}>
                <Ionicons name="ios-help-circle-outline" size={24} color="#0891B2" />
              </IconButton>
            );
          }}
        >
          <Popover.Content accessibilityLabel="Instrucciones" w="56">
            <Popover.Arrow />
            <Popover.CloseButton />
            <Popover.Header>Instrucciones</Popover.Header>
            <Popover.Body>
              {"Mantén presionada una emoción para consultar su descripción"}
            </Popover.Body>
          </Popover.Content>
        </Popover>
      </Box>
    </Box>
  );
};

export default EntryHeader;
