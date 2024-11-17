import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

//hamile typescript integrate garere react maa projet gardaa useDispatch hook ra useSeletor hook yetikai use garna mildaina, yee duiota hook lai types pani dina parxa.
//tei vayera yeni duiotaa hook lai type diyeko ho yaha

/// yo useselector and usedispatch hook haru chai react-redux ko hook haru hun.

/// data send garna paryo vani usedispatch ani data tanera herna paryo vani useSelector use garnu parxa.
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector //from //type of useselector from store.ts

