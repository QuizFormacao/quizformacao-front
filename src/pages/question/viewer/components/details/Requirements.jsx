import React from "react";

import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";

const styles = {
    box:{
        flexGrow: 1
    },
    stack:{
        marginLeft: '20px'
    },
    textRequirements:{
        color: '#8e8d8f'
    }
};
const Requirements = () =>{
    return(
        <Box sx={styles.box}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <h5 style={styles.textRequirements}>REQUISITOS:</h5>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Stack
                            direction={{ xs: 'column', md: 'row' }}
                            spacing={1}
                            justifyContent="flex-start"
                            alignItems="baseline"
                            sx={styles.stack}
                        >
                            <Chip label={"Python"} color={"primary"}/>
                            <Chip label={"Orientação a Objeto"} color={"primary"}/>
                            <Chip label={"Orientação a Objeto"} color={"primary"}/>
                        </Stack>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    )
};
export default Requirements;
