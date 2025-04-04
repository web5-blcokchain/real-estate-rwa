import type { RegisterParams, userResponse } from '@/api/apiMyInfoApi'
import type { StateCreator } from 'zustand'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface StoreState {
  language: string
  userData: userResponse | object
  registerData: RegisterParams | object
  assetId: number
  assetObj: object
  setLanguage: (lang: string) => void
  setUserData: (obj: object) => void
  setRegisterData: (obj: object) => void
  setAssetObj: (obj: object) => void
  setAssetId: (id: number) => void
}

const store: StateCreator<StoreState, [], [['zustand/persist', StoreState]]> = persist(
  set => ({
    language: 'en',
    userData: {},
    registerData: {},
    assetId: 0,
    assetObj: {},
    setLanguage: (language: string) => {
      set({ language })
    },
    setUserData: (obj: object) => {
      set({ userData: obj })
    },
    setRegisterData: (obj: object) => {
      set(state => ({ registerData: { ...state.registerData, ...obj } }))
    },
    setAssetId: (id: number) => {
      set({ assetId: id })
    },
    setAssetObj: (obj: object) => {
      set({ assetObj: obj })
    }
  }),
  { name: 'userInfo' }
)

export const useUserStore = create(store)
