import React from "react";

import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Chip from '@mui/material/Chip';
import Box from "@mui/material/Box";

const styles = {
    textPosition:{
        // marginLeft: '3%',
        // marginBottom:'-4%'
    },
    textTopics:{
        // marginLeft: '5%',
        // marginBottom: '5%',
        fontWeight: 'Bold',
        fontFamily:'Heveltica',
        color: '#777678',
    },
    chipPosition:{
        // marginLeft: '5%',
        backgroundColor: '#2196f3'
    },
};

const Topics = () =>{
    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid item xs={12} md={12} sx={styles.textPosition}>
                    <h5 className={styles.textTopics}>TÓPICOS:</h5>
                </Grid>
                <Grid item md={12} xs={12}>
                    <List>
                        <ListItem>
                            <Chip sx={styles.chipPosition} label={"Recursividade"} color={"primary"}/>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Box>
    )
};
export default Topics;
