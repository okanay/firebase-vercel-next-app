import {createSlice} from '@reduxjs/toolkit'

export const extensionNavigation = createSlice({
    name: 'extensionNavigation',
    initialState: {
        value: {
            sideNavigationSelectedType : {
                statusType: "open-menu",
            },
            sideNavigationBarTypes: [
                {
                    statusType: "hidden-menu",
                },
                {
                    statusType: "open-menu",
                }
            ],
            extensionNavigationBars: [
                {
                    extensionID: 0,
                    extensionState: false,
                    value: ""
                },
                {
                    extensionID: 1,
                    extensionState: false,
                    value: ""
                }
            ]
        }
    },
    reducers: {
        changeExtensionState: (state, action) => {

            const find = state.value.extensionNavigationBars.find(item => {
                return item.extensionID === action.payload
            })
            const copyExtension = [...state.value.extensionNavigationBars]

            if (find) {
                let status = false;
                copyExtension.map(item => {
                    if (item.extensionID === find.extensionID && !status) {
                        item.extensionState = !item.extensionState
                        item.value = item.extensionState === true ? "hidden" : ""
                        status = true
                    }
                })

                if (status) {
                    state.value.extensionNavigationBars = copyExtension
                }
            }

        },
        changeSideNavigationSelectedTypeOpposite: (state, action) => {
            const type = state.value.sideNavigationSelectedType.statusType === "open-menu" ? 0 : 1
            state.value.sideNavigationSelectedType = {...state.value.sideNavigationBarTypes[type]}
        },
        changeSideNavigationTypeToClosed: (state, action) => {
            const type = 1
            state.value.sideNavigationSelectedType = {...state.value.sideNavigationBarTypes[type]}
        },
        changeSideNavigationTypeToOpened: (state, action) => {
            const type = 0
            state.value.sideNavigationSelectedType = {...state.value.sideNavigationBarTypes[type]}
        },
    }
})

export const {changeExtensionState, changeSideNavigationSelectedTypeOpposite, changeSideNavigationTypeToClosed, changeSideNavigationTypeToOpened} = extensionNavigation.actions

export default extensionNavigation.reducer