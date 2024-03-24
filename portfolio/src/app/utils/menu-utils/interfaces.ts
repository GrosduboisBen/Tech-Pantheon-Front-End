/**
 * App menu navigation names.
 */
export enum E_NavigationLabels {
    HOME = 'Home',
    ABOUT = 'About'
}

/**
 * Raw type of navigation items.
 */
export type T_Navigation =  {
    id: number,
    title: E_NavigationLabels,
    key: string
}

/**
 * Representation of navigation items configuration.
 */
export interface E_NavigationItem {
    name:string
    disabled:boolean
    // TODO: Replace string type by component content or router function.
    content:string
}

/**
 * Create app navigations items for side menu.
 * @returns {T_Navigation}
 */
export function createNavigationList(): T_Navigation[] {
    return Object.entries(E_NavigationLabels).map((item,index) => {
        return {
            id:index,
            title:item[1],
            key: item[0]
        }
    })
}

//TODO Retrieval function.Get E_NavigationLabels key from its label. 
// export function navigationKeyFromLabel(label)