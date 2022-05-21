/* eslint-disable react-native/no-inline-styles */
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { isSameDay } from "date-fns";
import { FormControl, FlatList, KeyboardAvoidingView } from "native-base";
import { FC } from "react";
import { useForm, Controller } from "react-hook-form";

import { createEntries } from "../actions/entries.actions";
import EmotionPicker from "../components/EmotionPicker";
import EntryFooter from "../components/EntryFooter";
import EntryHeader from "../components/EntryHeader";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { EntriesStackParamList } from "../navigators/EntriesNavigator";
import { getEmotionsByAvatar } from "../utils/emotions";

type FormValues = {
  description: string;
  bodyExpression: string;
  emotion: string | null;
};

const CreateEntryScreen: FC<NativeStackScreenProps<EntriesStackParamList>> = ({
  navigation,
  route,
}) => {
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector((state) => state.user);
  const { date } = route.params as EntriesStackParamList["CreateEntry"];
  const today = new Date();
  const isToday = isSameDay(date, today);

  const onSubmit = (data: FormValues) => {
    dispatch(
      createEntries({
        emotion: data.emotion,
        description: data.description,
        bodyExpression: data.bodyExpression,
        createdAt: date,
      })
    );
    navigation.goBack();
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      emotion: null,
      description: "",
      bodyExpression: "",
    },
  });

  return (
    <KeyboardAvoidingView
      flex={1}
      h={{
        base: "400px",
        lg: "auto",
      }}
      behavior="position"
    >
      <FormControl>
        <Controller
          control={control}
          name="emotion"
          rules={{ required: { value: true, message: "Selecciona una emoción" } }}
          render={({ field: { onChange, value } }) => (
            <FlatList
              paddingX={4}
              numColumns={4}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              data={getEmotionsByAvatar(profile!.avatar)}
              renderItem={({ item: { EmotionSvg, name, description } }) =>
                EmotionPicker({
                  EmotionSvg,
                  description,
                  name,
                  onPress: () => onChange(name),
                  value,
                })
              }
              keyExtractor={(item) => item.id.toString()}
              ListHeaderComponent={() => EntryHeader({ date, isToday })}
              ListFooterComponent={() =>
                EntryFooter({
                  control,
                  errors,
                  onPress: handleSubmit(onSubmit),
                  isToday,
                })
              }
            />
          )}
        />
      </FormControl>
    </KeyboardAvoidingView>
  );
};

export default CreateEntryScreen;
