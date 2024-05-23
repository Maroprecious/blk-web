import { createStore, atom } from "jotai";
import { atomWithStorage } from 'jotai/utils'
import { UserData } from "@/utils/types";

export const userAtom_ = (key: 'user') => {
    const getInitialValue = () => {
        const item = localStorage.getItem(key)
        if (item !== null) {
            return JSON.parse(item)
        }
        return {}
    }
    const baseAtom = atom(getInitialValue())
    const derivedAtom = atom(
        (get) => get(baseAtom),
        (get, set, update) => {
            const nextValue =
                typeof update === 'function' ? update(get(baseAtom)) : update
            set(baseAtom, nextValue)
            localStorage.setItem(key, JSON.stringify(nextValue))
        }
    )
    return derivedAtom
}

export const userAtom = userAtom_('user')
