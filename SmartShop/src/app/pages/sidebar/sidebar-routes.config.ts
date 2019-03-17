export interface RouteInfo {
    path?: string;
    title: string;
    icon?: string;
    abbr?: string;
    submenu?: RouteInfo[];
    visible?: boolean;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', icon: 'fa fa-line-chart' }
];
