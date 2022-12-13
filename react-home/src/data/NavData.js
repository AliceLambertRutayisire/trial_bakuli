import * as Falcons from 'react-icons/fa'
import Home from '../pages/Home'
// import * as GameIcons from 'react-icons/gi'
// import * as CircumIcons from 'react-icons/ci'
// import * as TablerIcons from 'react-icons/tb'

export const NavData = [
    {
        title: "Home",
        path: "/Home",
        icon: <Falcons.FaHome />,
    },
    {
        title: "FoodLog",
        path: "/Foodlog",
        icon: <Falcons.FaReceipt/>,
    },
    {
        title: "HealthSpace",
        path: "/HealthSpace",
        icon: <Falcons.FaHeartbeat/>,
    },
    {
        title: "Settings",
        path: "/Settings",
        icon: <Falcons.FaServer/>,
    },

]