import React from "react";

import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Chip from '@mui/material/Chip';
import Box from "@mui/material/Box";
import {Stack} from "@mui/material";

const styles = {

    textArea:{
        color: '#8e8d8f'
    }
};

const Area = () =>{
    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid item md={12} xs={12}>
                    <h5 style={styles.textArea}>ÁREAS:</h5>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item md={12} xs={12}>
                        <Stack
                            direction={{ xs: 'column', md: 'row' }}
                            spacing={1}
                            justifyContent="flex-start"
                            alignItems="baseline"
                            sx={styles.stack}
                        >
                            <Chip label={"Programação"} color={"primary"}/>
                            <Chip label={"Programação"} color={"primary"}/>
                            <Chip label={"Programação"} color={"primary"}/>
                        </Stack>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    )
};
export default Area;
