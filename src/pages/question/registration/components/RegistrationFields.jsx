import React, {useState} from "react";
import ReferenceList from "./ReferenceList";
import ImageChips from "./ImageChips";
import TextChips from "./TextChips";
import AccordionComponent from "../../../../components/AccordionComponent";
import SliderInput from "../../../../components/input/SliderInput";
import TextEditor from "../../../../components/input/TextEditor";

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import RegistrationSideBar from "./RegistrationSideBar";

const styles = {
    paper: {
        marginTop:'90px',
        marginLeft: '40px',
        marginRight: '40px',
        marginBottom: '20px',
    },
    box:{
        padding: '20px',
        flexGrow: 1
    },
    title: {
        fontFamily: 'Roboto',
        marginBottom: '10px',
        color: '#9b9a9c'
    },
    buttonStyle:{
        marginTop:'40px',
        marginBottom:'40px',
    },
    lineColor:{
        marginBottom:'15px'
    },
};
const RegistrationFields = (props) => {
    const SIZE_12 = 12;
    let [data, setData] = useState(
        {
            title: '',
            enunciated: '',
            answer: '',
            difficulty: '',
            requirement: [],
            area: [],
            topic: [],
            author: [],
            references: []
        })

    const handleOnChangeData = (attributeName, event) => {
        setData({...data, [attributeName]: event.target.value})
    };

    const handleOnClick = () =>{
        console.log("teste",data)
        fetch("http://localhost:8080/question/", {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {"Content-Type": "application/json"}
        });
    }

    // if(!load) handleOnClick();

    return <Paper elevation={4} sx={styles.paper}>
        <Box sx={styles.box}>
            <Grid container>
                <Grid item md={SIZE_12} xs={SIZE_12}>
                    <Typography sx={styles.title} variant={"h4"} >Adicionar Questão</Typography>
                    <Divider sx={styles.lineColor}/>
                </Grid>

                <Grid item md={SIZE_12} xs={SIZE_12}>
                    <AccordionComponent title={"Título da Questão"}
                                        component={
                                            <TextField id={"questionTitle"}
                                                       fullWidth
                                                       onChange={(event) =>
                                                           handleOnChangeData("title", event)}/>}
                    />
                </Grid>

                <Grid item md={SIZE_12} xs={SIZE_12}>
                    <AccordionComponent title={"Enunciado"}
                                        component={
                                            <TextEditor onChange={(event) => handleOnChangeData("enunciated", event)}/>}
                    />
                </Grid>

                <Grid item md={SIZE_12} xs={SIZE_12}>
                    <AccordionComponent title={"Resposta"}
                                        component={
                                            <TextEditor onChange={(event) => handleOnChangeData("answer", event)}/>}
                    />
                </Grid>

                <Grid item md={SIZE_12} xs={SIZE_12}>
                    <AccordionComponent title={"Dificuldade"}
                                        component={
                                            <SliderInput onChange={(event) => handleOnChangeData("difficulty", event)}
                                                         isDisabled={false}/>}
                    />
                </Grid>

                <Grid item md={SIZE_12} xs={SIZE_12}>
                    <AccordionComponent title={"Requisitos"}
                                        component={
                                            <TextChips inputLabel={"Requisito"}
                                                       onChange={(event) => handleOnChangeData("requirement", event)}
                                                       name={"requirement"}
                                            />}
                    />
                </Grid>

                <Grid item md={SIZE_12} xs={SIZE_12}>
                    <AccordionComponent title={"Áreas"}
                                        component={
                                            <TextChips inputLabel={"Áreas"}
                                                       onChange={(event) => handleOnChangeData("area", event)}
                                                       name={"area"}
                                            />}
                    />
                </Grid>

                <Grid item md={SIZE_12} xs={SIZE_12}>
                    <AccordionComponent title={"Tópicos"}
                                        component={
                                            <TextChips inputLabel={"Tópico"}
                                                       onChange={(event) => handleOnChangeData("topic", event)}
                                                       name={"topic"}
                                            />}
                    />
                </Grid>

                <Grid item md={SIZE_12} xs={SIZE_12}>
                    <AccordionComponent title={"Autores"}
                                        component={
                                            <ImageChips inputLabel={"Autor"}
                                                        onChange={(event) => handleOnChangeData("author", event)}/>}
                    />
                </Grid>

                <Grid item md={SIZE_12} xs={SIZE_12}>
                    <AccordionComponent title={"Referências"}
                                        component={
                                            <ReferenceList inputLabel={"Referência"}
                                                           onChange={(event) => handleOnChangeData("references", event)}
                                                           name={"reference"}/>}
                    />
                </Grid>

                <Grid item md={SIZE_12} xs={SIZE_12}>
                    <div align={"center"}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="medium"
                            sx={styles.buttonStyle}
                            startIcon={<CheckIcon/>}
                            onClick={handleOnClick}
                        >
                            Publicar
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Box>
    </Paper>
};
export default RegistrationFields;
