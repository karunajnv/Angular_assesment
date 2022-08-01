import { DashboardComponent } from "./app/dashboard/dashboard.component";
import { OVERVIEW_ROUTES } from "./app/route";


export const mainRouteConfig = [{
    path: OVERVIEW_ROUTES, component: DashboardComponent, data: {
        breadcrumb: 'Overview'
    }
},
]