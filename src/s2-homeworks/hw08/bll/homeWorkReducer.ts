import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return state.sort((a, b) => action.payload === 'up' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
        }
        case 'check': {

            let kek = state.filter(i => i.age > action.payload)
            return kek.sort((a, b) => a.age - b.age)

            // need to fix
        }
        default:
            return state
    }
}
