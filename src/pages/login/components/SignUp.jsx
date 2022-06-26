import React from "react";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {useAuth} from "../../../providers/Auth";
import {useNavigate} from "react-router-dom";
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';

const styles = {
    title: {
        fontFamily: '-webkit-pictograph',
        marginBottom: '10px',
        color: '#9b9a9c'
    },
    button: {
        marginBottom: '40px',
        marginTop: '30px',
        alignItems: 'start',
        display: 'flex',
        width: '60%',
    },
};

const SignUp = ({title, data, handleOnChangeData, onFinish, fieldStyle, children}) => {
    let auth = useAuth();
    let navigate = useNavigate();

    const handleOnClick = () => {
        let {confirmPassword, ...newData} = data;

        onFinish(newData).then(response => {
            auth.login(newData.email, newData.password);
            //TODO: tratar erros
        });
    }

    const handleOnClickBack = () => {
        navigate(-1);
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item md={12} xs={12}>
                    <Typography sx={styles.title} variant={"h4"}>
                        Cadastro {title}
                    </Typography>
                </Grid>
                <Grid item md={12} xs={12}>
                    <TextField sx={fieldStyle} size={"small"} variant={"outlined"} label={"Nome de usuário"}
                               onChange={(event) => handleOnChangeData("userName", event)}/>
                </Grid>
                <Grid item md={12} xs={12}>
                    <TextField sx={fieldStyle} size={"small"} variant={"outlined"} label={"E-mail"}
                               onChange={(event) => handleOnChangeData("email", event)}/>
                </Grid>
                <Grid item md={12} xs={12}>
                    <TextField sx={fieldStyle} size={"small"} variant={"outlined"} type={"password"} label={"Senha"}
                               onChange={(event) => handleOnChangeData("password", event)}/>
                </Grid>
                <Grid item md={12} xs={12}>
                    <TextField sx={fieldStyle} size={"small"} variant={"outlined"} type={"password"} label={"Confirmar a senha"}
                               onChange={(event) => handleOnChangeData("confirmPassword", event)}/>
                </Grid>
                {children}
                <Grid item md={12} xs={12} sx={{display: 'block ruby'}}>
                    <Box sx={styles.button}>
                        <Button onClick={handleOnClickBack} color={"primary"} variant={"contained"}>
                            <ArrowBackSharpIcon/>
                        </Button>
                        <Button onClick={handleOnClick} sx={{marginLeft: '15px'}} color={"primary"} variant={"contained"}>
                            Finalizar
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
export default SignUp;
