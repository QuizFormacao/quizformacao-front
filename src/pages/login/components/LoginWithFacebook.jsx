import React from "react";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { SiFacebook } from "react-icons/si";

import Button from '@mui/material/Button';

const LoginWithFacebook = (props) => {
    return (
        <FacebookLogin
            appId="188409049845616"
            autoLoad
            fields="name,email,picture"
            // callback={responseFacebook}
            // cssClass="my-facebook-button-class"
            // icon="fa-facebook"
            render={renderProps => (
                <Button sx={{backgroundColor: '#2196f3',
                             width: props.buttonWidth
                            }}
                        color={"primary"}
                        variant={"contained"}
                        startIcon={<SiFacebook/>}
                        onClick={renderProps.onClick}>Entrar com o facebook</Button>
                )}
        />
    )
}

export default LoginWithFacebook;
