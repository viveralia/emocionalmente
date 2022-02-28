import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { addDays, endOfDay, startOfDay, subDays } from "date-fns";
import { Button, FlatList } from "native-base";
import { FC, useCallback, useEffect, useState } from "react";
import { ListRenderItem } from "react-native";

import { getEntriesByDate } from "../actions/entries.actions";
import DaysNavigationHeader from "../components/DaysNavigationHeader";
import EntryCard from "../components/EntryCard";
import NoEntries from "../components/NoEntries";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { EntryModel } from "../models/entry.model";
import { EntriesStackParamList } from "../navigators/EntriesNavigator";

const EntriesScreen: FC<NativeStackScreenProps<EntriesStackParamList>> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const [date, setDate] = useState(new Date());
  const { entries, isLoading } = useAppSelector((state) => state.entries);

  const getEntries = useCallback(() => {
    const initialDate = startOfDay(date);
    const finalDate = addDays(endOfDay(date), 1);
    dispatch(getEntriesByDate({ initialDate, finalDate }));
  }, [dispatch, date]);

  useEffect(() => {
    getEntries();
  }, [getEntries]);

  const keyExtractor = useCallback((entry: EntryModel) => {
    return entry.id;
  }, []);

  const renderEntryCard: ListRenderItem<EntryModel> = useCallback(({ item: entry }) => {
    return <EntryCard entry={entry} />;
  }, []);

  const handlePreviousDatePress = () => setDate((currentDate) => subDays(currentDate, 1));
  const handleNextDayPress = () => setDate((currentDate) => addDays(currentDate, 1));
  const handleCreateEntryPress = () => navigation.navigate("CreateEntry", { date });

  return (
    <>
      <DaysNavigationHeader
        date={date}
        onNextDatePress={handleNextDayPress}
        onPreviousDatePress={handlePreviousDatePress}
      />
      <FlatList
        p={4}
        refreshing={isLoading}
        onRefresh={getEntries}
        data={entries}
        keyExtractor={keyExtractor}
        renderItem={renderEntryCard}
        ListEmptyComponent={NoEntries}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ flex: entries.length ? 0 : 1 }}
      />
      <Button m={4} onPress={handleCreateEntryPress}>
        Escribir
      </Button>
    </>
  );
};

export default EntriesScreen;
