import React from "react";
import {Route, Routes} from "react-router-dom";
import logoSocialStudyBlue from "../../images/icons/social-study-text-blue.png";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Paper from '@mui/material/Paper';
import PageNotFound from "../notFound/PageNotFound";

const styles = {
    paper: {
        margin: '0px 0px auto auto',
        maxWidth: '500px',
        textAlign: 'center',
        height: '100vh',
    },
    imageGrid: {
        padding: '50px'
    },
};

const Login = () => {
    return (
        <Paper elevation={3} sx={styles.paper} square>
            <div style={styles.imageGrid}>
                <img src={logoSocialStudyBlue} alt="SocialStudy" width='50%'/>
            </div>
            <Routes>
                <Route path={'/'} element={<SignIn/>}/>
                <Route path={'/cadastro'} element={<SignUp/>}/>
                <Route path={'*'} element={<PageNotFound/>}/>
            </Routes>
        </Paper>
    )
}
export default Login;
