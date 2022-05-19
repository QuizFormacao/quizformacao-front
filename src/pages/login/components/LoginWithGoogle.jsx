import React from "react";
import GoogleLogin from "react-google-login";
import {FcGoogle} from "react-icons/fc";

import Button from '@mui/material/Button';

const LoginWithGoogle = (props) =>{
    return (
        <GoogleLogin
            clientId="1078294978669-4rjab9advsvstmkoucv5sggcbvjc1qer.apps.googleusercontent.com"
            // onSuccess={responseGoogle}
            // onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            render={renderProps => (
                <Button sx={{
                             width: props.buttonWidth
                            }}
                        color={"primary"}
                        variant={"outlined"}
                        startIcon={<FcGoogle/>}
                        onClick={renderProps.onClick}>Entrar com o Google</Button>
            )}
    />
    )
}

export default LoginWithGoogle;
