import React, {useEffect, useState} from "react";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Service from "../../../service/Service";
import SignUp from "./SignUp";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const styles = {
    textField: {
        width: '60%'
    }
};

const SignUpStudent = () => {
    let [data, setData] = useState(
        {
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            registrationCode: 0,
            schoolClass: 0,
        }
    );
    let [schoolClasses, setSchoolClasses] = useState([]);

    const handleOnChangeData = (attributeName, event) => {
        setData({...data, [attributeName]: event.target.value});
    }

    useEffect(() => {
        setSchoolClasses([
            {value: 1, label: 'Turma 1'},
            {value: 2, label: 'Turma 2'},
            {value: 3, label: 'Turma 3'},
        ]);
    }, []);

    return (
        <SignUp title={'Aluno'} data={data} handleOnChangeData={handleOnChangeData} fieldStyle={styles.textField} onFinish={Service.signup}>
            <Grid item md={12} xs={12}>
                <TextField sx={styles.textField} size={"small"} variant={"outlined"} label={"Código de matrícula"}
                           onChange={(event) => handleOnChangeData("registrationCode", event)}/>
            </Grid>
            <Grid item md={12} xs={12}>
                <FormControl size={"small"} fullWidth sx={{textAlign: 'start', ...styles.textField}}>
                    <InputLabel id="demo-simple-select-label">Turma</InputLabel>
                    <Select
                        labelId={'Turma'}
                        id={'Turma'}
                        label={'Turma'}
                        onChange={(event) => handleOnChangeData("schoolClass", event)}
                    >
                        {schoolClasses.map((child) => (
                            <MenuItem value={child.value} key={`Turma-${child.value}`}>
                                {child.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
        </SignUp>
    )
}
export default SignUpStudent;
