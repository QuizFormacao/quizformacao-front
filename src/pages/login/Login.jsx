import React from "react";
import {Route, Routes} from "react-router-dom";
import logoSocialStudyBlue from "../../images/icons/social-study-text-blue.png";
import SignUpTeacher from "./components/SignUpTeacher";
import SignUpStudent from "./components/SignUpStudent";
import SignIn from "./components/SignIn";
import Paper from '@mui/material/Paper';
import PageNotFound from "../notFound/PageNotFound";

const styles = {
    paper: {
        margin: '0px 0px auto auto',
        maxWidth: '500px',
        textAlign: 'center',
        minHeight: '100vh',
        paddingBottom: '40px'
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
                <Route path={'/cadastro/*'} element={
                    <Routes>
                        <Route path={'/professor'} element={<SignUpTeacher/>}/>
                        <Route path={'/aluno'} element={<SignUpStudent/>}/>
                    </Routes>
                }/>
                <Route path={'*'} element={<PageNotFound/>}/>
            </Routes>
        </Paper>
    )
}
export default Login;
