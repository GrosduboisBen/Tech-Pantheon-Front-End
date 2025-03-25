/**
 * App menu navigation names.
 */
export enum E_NavigationLabels {
  HOME = 'Home',
  USERS = 'Users',
}

/**
 * Raw type of navigation items.
 */
export interface T_Navigation {
  id: number;
  title: E_NavigationLabels;
  key: string;
  disabled: boolean;
}

/**
 * Representation of navigation items configuration.
 */
export interface E_NavigationItem {
  name: string;
  disabled: boolean;
  // TODO: Replace string type by component content or router function.
}

/**
 * Create app navigations items for side menu.
 * @returns {T_Navigation}
 */
export function createNavigationList(): T_Navigation[] {
  return Object.entries(E_NavigationLabels).map((item, index) => {
    return {
      id: index,
      title: item[1],
      key: item[0],
      disabled: navigationStatusFromLabel(item[1]),
    };
  });
}

//TODO Adapt to business logic.
export function navigationStatusFromLabel(label: E_NavigationLabels) {
  switch (label) {
    case E_NavigationLabels.HOME:
      return false;
    case E_NavigationLabels.USERS:
      return false;
    default:
      return true;
  }
}
