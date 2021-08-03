import "./App.css";
import Dashboard from './components/pages/Dashboard'
import ConnectWallet from './components/pages/ConnectWallet'
import HomePage from './components/pages/HomePage'
import CreateEvent from './components/pages/CreateEvent'
import EventList from './components/pages/EventList'
const routes = [
  {
    path: "/",
    exact: true,
    layout: Dashboard,
  },
  {
    path: "/ConnectWallet",
    exact: true,
    layout: ConnectWallet,
  },
  {
    path: "/HomePage",
    exact: true,
    layout: HomePage,
  },
  {
    path: "/CreateEvent",
    exact: true,
    layout: CreateEvent,
  },
  {
    path: "/EventList",
    exact: true,
    layout: EventList,
  },
]

export default routes
