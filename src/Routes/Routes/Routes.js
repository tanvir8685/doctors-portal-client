import {createBrowserRouter} from 'react-router-dom'
import Main from '../../Layout/Main'
import Appoinment from '../../Pages/Appoinment/Appoinment/Appoinment';
import DashBoard from '../../Pages/DashBoard/DashBoard/DashBoard';
import Home from '../../Pages/Home/Home/Home'
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

 const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/appoinment',
                element:<Appoinment></Appoinment>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {

            }

        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>
    }
])

export default router;