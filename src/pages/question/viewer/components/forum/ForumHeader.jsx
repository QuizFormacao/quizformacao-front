import React from "react";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";

const styles = {
    box:{
        flexGrow: 1
    },
    button:{
        marginTop: '10px',
        marginBottom: '20px'
    },
    textField:{
        width: '100%'
    },
    textTitle:{
        fontWeight: 'bold',
        color: '#8e8d8f',
        marginBottom: '10px'
    },
};

const ForumHeader = () =>{
    return(
        <Box sx={styles.box}>
            <Grid container>
                <Grid item xs={12} md={12}>
                    <Typography sx={styles.textTitle} variant={'h4'}>Comentários</Typography>
                </Grid>
                <Grid item xs={12} md={12} >
                    <TextField variant="outlined" sx={styles.textField}/>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        sx={styles.button}
                    >
                        Comentar
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
};
export default ForumHeader;
