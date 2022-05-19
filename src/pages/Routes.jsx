import React from "react";
import {Routes as RoutesRouter, BrowserRouter, Route} from "react-router-dom"
import {AuthProvider, RedirectIfAuth, RequireAuth} from "../providers/Auth";
import Login from "./login/Login";
import PageNotFound from "./notFound/PageNotFound";
import Feed from "./feed/Feed";
import Question from "./question/Question";

const Routes = () => {
  return (
    <BrowserRouter>
          <AuthProvider>
                <RoutesRouter>
                    <Route exact path={'/'} element={<RequireAuth> <Feed/> </RequireAuth>} />
                    <Route path={'/login/*'} element={<RedirectIfAuth> <Login/> </RedirectIfAuth>} />
                    <Route path={'/questao/*'} element={<RequireAuth> <Question/> </RequireAuth>} />
                    <Route path={'*'} element={<PageNotFound/>} />
                </RoutesRouter>
          </AuthProvider>
      </BrowserRouter>
  );
};

export default Routes;
