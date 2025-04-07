import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PrivateRoute = (props) => {
    const { children } = props;

    const { user } = useSelector( state => state.user );

    return !user?._id ? <Navigate to="/" /> : children
}

export default PrivateRoute;