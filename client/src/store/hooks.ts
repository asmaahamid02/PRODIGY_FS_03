import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState, AppStore } from './store'
import type { TypedUseSelectorHook } from 'react-redux'
import { useStore } from 'react-redux'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore: () => AppStore = useStore
