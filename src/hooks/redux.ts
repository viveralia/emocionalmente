import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { RootState, Dispatch } from "../store";

export const useAppDispatch = () => useDispatch<Dispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
