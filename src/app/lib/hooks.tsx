'use client'

// Inside ./src/app/lib/hooks.ts
import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppStore, RootState, AppDispatch } from "./store";

// Changed to lowercase 'u' for proper React hook naming
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
