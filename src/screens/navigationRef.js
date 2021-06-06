import { NavigationActions  } from 'react-navigation'

let navigator

export const setNavigator = nav => {
    navigator = nav
}

export const navigate = (routeName, parms) => {
    navigator.dispath(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
}