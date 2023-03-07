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
                    menuExtensionClass: "-translate-x-full translate-x-0 ",
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
        changeExtensionState: async (state, action) => {

            const find = await state.value.extensionNavigationBars.find(item =>
            {
                return item.extensionID === action.payload
            })

            const copyExtension = [...state.value.extensionNavigationBars]

            if (find) {
                copyExtension.map(item => {
                    if (item.extensionID === find.extensionID)
                    {
                        item.extensionState = !item.extensionState
                        item.value = item.extensionState === true ? "hidden" : ""
                    }
                })


                state.value.extensionNavigationBars = copyExtension

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