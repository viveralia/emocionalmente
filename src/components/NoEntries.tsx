import { Box, Text } from "native-base";
import { FC } from "react";

const NoEntries: FC = () => {
  return (
    <Box flex={1} justifyContent="center" px={4}>
      <Text textAlign="center" mb={6}>
        Parece que no he escrito nada aún
      </Text>
    </Box>
  );
};

export default NoEntries;
