import React, {useState} from "react";
import {Link} from "react-router-dom";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {useAuth} from "../../../providers/Auth";

const styles = {
    title: {
        fontFamily: '-webkit-pictograph',
        marginBottom: '10px',
        color: '#9b9a9c'
    },
    textOr: {
        fontFamily: '-webkit-pictograph',
        color: '#9b9a9c',
    },
    button: {
        marginBottom: '40px',
        marginTop: '10px',
    },
    textField: {
        width: '60%'
    }
};

const SignIn = () => {
    const auth = useAuth();
    let [data, setData] = useState(
        {
            email: '',
            password: '',
        })

    const handleOnChangeData = (attributeName, event) => {
        setData({...data, [attributeName]: event.target.value})
    };

    const handleOnClick = () => {
        auth.login(data.email, data.password);
    }

    return (
        <Box sx={{flexGrow: 1, flexWrap: "nowrap"}}>
            <Grid container spacing={2}>
                <Grid item md={12} xs={12}>
                    <Typography sx={styles.title} variant={"h4"}>
                        Login
                    </Typography>
                </Grid>
                <Grid item md={12} xs={12}>
                    <TextField sx={styles.textField} size={"small"} variant={"outlined"} label={"E-mail"}
                               onChange={(event) => handleOnChangeData("email", event)}/>
                </Grid>
                <Grid item md={12} xs={12}>
                    <TextField sx={styles.textField} size={"small"} variant={"outlined"} type={"password"} label={"Senha"}
                               onChange={(event) => handleOnChangeData("password", event)}/>
                </Grid>
                <Grid item md={12} xs={12} sx={{marginLeft: '40%'}}>
                    <Button sx={styles.button} color={"primary"} variant={"contained"} onClick={handleOnClick}>
                        Entrar
                    </Button>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Link to={'/login/cadastro/professor'}>
                        <Typography sx={{color: '#727273', textAlign: 'start', marginLeft: '20%'}}>
                            Professor, crie sua conta
                        </Typography>
                    </Link>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Link to={'/login/cadastro/aluno'}>
                        <Typography sx={{color: '#727273', textAlign: 'start', marginLeft: '20%'}}>
                            Aluno, crie sua conta
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}
export default SignIn;
