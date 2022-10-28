type App = import("vue").App;
type Component = import("vue").Component;
type VNode = import("vue").VNode;

export type State = {
  baseUri: string;
  currentUser: any;
  mainMenu: any[];
  userMenu: any[];
  resources: any[];
  version: string;
  mainMenuShown: boolean;
  canLeaveForm: boolean;
  canLeaveModal: boolean;
  pushStateWasTriggered: boolean;
  validLicense: true;
  [key: string]: any;
};

export type Store = import("vuex").Store<State>;

export type Color = {
  [key: string]: string;
};

export interface AppConfig {
  algoliaApiKey?: any;
  algoliaAppId?: any;
  appName: string;
  base: string;
  brandColors: Color[];
  brandColorsCSS: string;
  customLoginPath: boolean;
  customLogoutPath: boolean;
  debounce: number;
  footer: string;
  forgotPasswordPath: boolean;
  globalSearchEnabled: boolean;
  hasGloballySearchableResources: boolean;
  initialPath: string;
  locale: string;
  logo?: string;
  mainMenu: Menu[];
  notificationCenterEnabled: boolean;
  notificationPollingInterval: number;
  pagination: string;
  resetPasswordPath: boolean;
  resources: Resource[];
  rtlEnabled: boolean;
  themeSwitcherEnabled: boolean;
  timezone: string;
  translations: Translations;
  userId: number;
  userMenu: Menu[];
  userTimezone?: any;
  version: string;
  withAuthentication: boolean;
  withPasswordReset: boolean;
}

export type Resource = {
  uriKey: string;
  label: string;
  singularLabel: string;
  createButtonLabel: string;
  updateButtonLabel: string;
  authorizedToCreate: boolean;
  searchable: boolean;
  perPageOptions: number[];
  tableStyle: string;
  showColumnBorders: boolean;
  debounce: number;
  clickAction: string;
};

export type Translations = {
  [key: string]: string;
};

export type Menu = {
  key: string;
  name: string;
  component: "menu-section" | "menu-group" | "menu-item";
  items: (Menu | MenuItem)[];
  collapsable: boolean;
  icon: string;
  path: string;
  active?: boolean;
  badge?: Badge;
};

export type MenuItem = {
  active: boolean;
  prefixComponent: boolean;
  onlyOnDetail: boolean;
  badge?: Badge;
  component: "menu-item";
  data?: any;
  external: boolean;
  headers?: Header;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  name: string;
  path: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
};

export type Header = {
  [key: string]: string;
};

export type Badge = {
  typeClass: string;
  value: any;
};

export type Page = {
  [key: string]: Component;
};

export type MountTo = {
  _vnode: VNode;
  __vue_app__: App;
};

export interface ProgressSettings {
  minimum: number;
  easing: string;
  positionUsing: string;
  speed: number;
  trickle: boolean;
  trickleRate: number;
  trickleSpeed: number;
  showSpinner: boolean;
  barSelector: string;
  spinnerSelector: string;
  parent: string;
  template: string;
}

export type Progress = {
  version: string;
  settings: ProgressSettings;
  status?: any;
};

export type ToastedOptions = {
  theme: string;
  position: string;
  duration: number;
};

export type Toasted = {
  id: string;
  options: ToastedOptions;
  global: any;
  groups: any[];
  toasts: any[];
};

export declare type Nova = {
  appConfig: AppConfig;
  bootingCallbacks: ((app: App, store: Store) => void)[];
  notificationPollingInterval: number;
  useShortcuts: boolean;
  mountTo: MountTo;
  $progress: Progress;
  $toasted: Toasted;

  booting: (callback: (app: App, store: Store) => void) => void;
  inertia: (name: string, component: string) => void;
};
