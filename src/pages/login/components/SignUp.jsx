import React, {useState} from "react";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Service from "../../../service/Service";
import {useAuth} from "../../../providers/Auth";
import {Link} from "react-router-dom";

const styles = {
    title: {
        fontFamily: '-webkit-pictograph',
        marginBottom: '10px',
        color: '#9b9a9c'
    },
    button: {
        marginBottom: '40px',
        marginTop: '10px',
    },
    textField: {
        width: '60%'
    }
};

const SignUp = () => {
    let auth = useAuth();
    let [data, setData] = useState(
        {
            email: '',
            password: '',
            confirmPassword: '',
            userName: '',
            avatar: null,
            idStamps: null,
            idUserLevel: 1,
        });

    const handleOnChangeData = (attributeName, event) => {
        setData({...data, [attributeName]: event.target.value});
    }

    const handleOnClick = () => {
        let {confirmPassword, ...newData} = data;

        Service.signup(newData).then(response => {
            auth.login(newData.email, newData.password);
            //TODO: tratar erros
        });
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item md={12} xs={12}>
                    <Typography sx={styles.title} variant={"h4"}>
                        Cadastrar-se
                    </Typography>
                </Grid>
                <Grid item md={12} xs={12}>
                    <TextField sx={styles.textField} size={"small"} variant={"outlined"} label={"Nome de usuário"}
                               onChange={(event) => handleOnChangeData("userName", event)}/>
                </Grid>
                <Grid item md={12} xs={12}>
                    <TextField sx={styles.textField} size={"small"} variant={"outlined"} label={"E-mail"}
                               onChange={(event) => handleOnChangeData("email", event)}/>
                </Grid>
                <Grid item md={12} xs={12}>
                    <TextField sx={styles.textField} size={"small"} variant={"outlined"} type={"password"} label={"Senha"}
                               onChange={(event) => handleOnChangeData("password", event)}/>
                </Grid>
                <Grid item md={12} xs={12}>
                    <TextField sx={styles.textField} size={"small"} variant={"outlined"} type={"password"} label={"Confirmar a senha"}
                               onChange={(event) => handleOnChangeData("confirmPassword", event)}/>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Link to={'/login'}>
                        <Typography sx={{color: '#727273'}}>
                            Já possui cadastro?
                        </Typography>
                    </Link>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Button onClick={handleOnClick} sx={styles.button} color={"primary"} variant={"contained"}>
                        Entrar
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}
export default SignUp;
