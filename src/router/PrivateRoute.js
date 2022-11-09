import React, { useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../customContexts/AuthProvider';
const PrivateRoute = ({ children }) => {

    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <> <Spinner animation="border" />
            <div>loading....</div> </>
    }
    if (!user) {
        return <Navigate to='/login' state={{ form: location }} replace></Navigate>;
    }
    return children;

};

export default PrivateRoute;