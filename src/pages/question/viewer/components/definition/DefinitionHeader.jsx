import React from "react";

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const styles = {
    box:{
        flexGrow: 1
    },
    textTest:{
        color: '#9b9a9c',
        fontSize: 13,
        wordBreak: 'break-word'
    },
    text:{
        color: '#9b9a9c',
        fontSize: 13
    },
    dividerCenter:{
        color:'#dedddf'
    }
};

const DefinitionHeader = () => {
    const dataTeste = "12/09/2021";
    const autores = "kguckert, julio, amanda, fernando, joão, felipe"

    return(
        <Box sx={styles.box}>
            <Grid container justify={"center"} spacing={1}>
                <Grid item md={8} xs={12}>
                    <Typography sx={styles.textTest} > <b>AUTORES(S):</b> {autores} </Typography>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Typography sx={styles.text}> <b>DATA DE PUBLICAÇÃO:</b> {dataTeste} </Typography>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Divider sx={styles.dividerCenter}/>
                </Grid>
            </Grid>
        </Box>
    )
};
export default DefinitionHeader;
