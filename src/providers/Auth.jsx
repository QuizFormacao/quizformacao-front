import React from "react";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import Service from '../service/Service';

let AuthContext = React.createContext(null);
export const AuthProvider = ({ children }) => {
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || '/';

    let [user, setUser] = React.useState(Service.getUser());

    let login = (login, password) => {
        Service.login(login, password).then((response) => {
            //TODO: tratar erros
            setUser(response);
            navigate(from, { replace: true });
        });
    };

    let logout = (redirectTo) => {
        Service.logout(); //TODO: Criar logout backend
        setUser(Service.getUser());
        if(redirectTo) navigate(redirectTo, { replace: true });
    };

    let value = { token: user.token, login, logout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
    return React.useContext(AuthContext);
}

export const RequireAuth = ({ children, to }) => {
    let auth = useAuth();
    let location = useLocation();

    if (!auth.token) {
        return <Navigate to={to || '/login'} state={{ from: location }} replace />;
    }

    return children;
}

export const RedirectIfAuth = ({ children, to }) => {
    let auth = useAuth();

    if (auth.token) {
        return <Navigate to={to || '/'} replace />;
    }

    return children;
}