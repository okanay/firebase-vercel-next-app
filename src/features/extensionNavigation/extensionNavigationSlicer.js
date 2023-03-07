import {createSlice} from '@reduxjs/toolkit'

export const extensionNavigation = createSlice({
    name: 'extensionNavigation',
    initialState: {
        value: {
            sideNavigationSelectedType : {
                statusType: "open-menu",
                menuExtensionClass: "",
            },
            sideNavigationBarTypes: [
                {
                    statusType: "hidden-menu",
                    menuExtensionClass: "hidden tablet:block",
                },
                {
                    statusType: "open-menu",
                    menuExtensionClass: "",
                }
            ],
            extensionNavigationBars: [
                {
                    extensionID: 0,
                    extensionState: true,
                    value: "hidden"
                },
                {
                    extensionID: 1,
                    extensionState: true,
                    value: "hidden"
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
        changeSideNavigationTypeToOpen: (state, action) => {
            const type = 0
            state.value.sideNavigationSelectedType = {...state.value.sideNavigationBarTypes[type]}
        },
    }
})

export const {changeExtensionState, changeSideNavigationSelectedTypeOpposite, changeSideNavigationTypeToOpen} = extensionNavigation.actions

export default extensionNavigation.reducer