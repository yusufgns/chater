import {create} from 'zustand'

const user = (set: any) => ({
    linktier: ''
})

export const useUser = create(user)