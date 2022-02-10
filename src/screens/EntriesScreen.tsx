import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { startOfToday } from "date-fns";
import { addDays, endOfToday } from "date-fns/esm";
import { Box, Text, Heading, ScrollView, Button } from "native-base";
import { FC, Fragment, useEffect } from "react";

import { getEntriesByDate } from "../actions/entry.actions";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { EntriesStackParamList } from "../navigators/EntriesNavigator";

const EntriesScreen: FC<NativeStackScreenProps<EntriesStackParamList>> = ({ navigation }) => {
  const { entries } = useAppSelector((state) => state.entry);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const initialDate = startOfToday();
    const finalDate = addDays(endOfToday(), 1);
    dispatch(getEntriesByDate({ initialDate: initialDate, finalDate: finalDate }));
  }, [dispatch]);

  const handlePress = () => {
    navigation.navigate("CreateEntry");
  };

  return (
    <ScrollView>
      <Box safeArea p={5} flex={1} alignItems="center" justifyContent="center">
        <Heading>Entries</Heading>
        {entries.length ? (
          entries.map((entry) => (
            <Fragment key={entry.id}>
              <Text>{entry.emotion}</Text>
              <Text>{entry.description}</Text>
              <Text>{entry.bodyExpression}</Text>
              <Text>{JSON.stringify(entry.createdAt)}</Text>
            </Fragment>
          ))
        ) : (
          <Text>No entries available</Text>
        )}

        <Button mt={2} onPress={handlePress}>
          Create entry
        </Button>
      </Box>
    </ScrollView>
  );
};

export default EntriesScreen;
