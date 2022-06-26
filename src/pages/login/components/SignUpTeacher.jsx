import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Service from "../../../service/Service";
import SignUp from "./SignUp";
import ListField from "../../../components/input/ListField";

const styles = {
    textField: {
        width: '60%'
    }
};

const SignUpTeacher = () => {
    let [data, setData] = useState(
        {
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            subject: '',
            trainingCourses: [],
        }
    );

    const handleOnChangeData = (attributeName, event) => {
        setData({...data, [attributeName]: event.target.value});
        console.log(data);
        console.log(event);
    }

    return (
        <SignUp title={'Professor'} data={data} handleOnChangeData={handleOnChangeData} fieldStyle={styles.textField} onFinish={Service.signup}>
            <Grid item md={12} xs={12}>
                <TextField sx={styles.textField} size={"small"} variant={"outlined"} label={"Disciplina lecionada"}
                           onChange={(event) => handleOnChangeData("subject", event)}/>
            </Grid>
            <Grid item md={12} xs={12} sx={{display: 'block ruby'}}>
                <ListField sx={styles.textField}
                           label={"Cursos de formação"}
                           list={data.trainingCourses}
                           onChange={(event) => handleOnChangeData("trainingCourses", event)}
                />
            </Grid>
        </SignUp>
    )
}
export default SignUpTeacher;
