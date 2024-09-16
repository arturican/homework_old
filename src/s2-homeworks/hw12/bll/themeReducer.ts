const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeId): any => { // fix any
    switch (action.type) {
        case 'SET_THEME': {
            return {
                ...state,
                themeId: action.id,
            }
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({type: 'SET_THEME_ID', id} as const) // fix any
export type ChangeThemeId = ReturnType<typeof changeThemeId>