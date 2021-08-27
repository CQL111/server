import HomeComponent from '../component/home'
import Greeting from '../component/greeting/greeting1'

interface IRouteItem {
    key: string,
    path: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: any,
  
    exact?: boolean,
    routes?: IRouteItem[],
  }
type RouterType = IRouteItem[]

const router:RouterType = [
    {
        key: "home",
        path: "/home",
        component: HomeComponent,
      },
      {
        key: "greeting",
        path: "/greeting",
        component: Greeting,
      },
]
export default router