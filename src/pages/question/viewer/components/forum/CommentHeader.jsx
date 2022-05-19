import React from "react";

import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Link from '@mui/material/Link';
import Box from "@mui/material/Box";

const styles = {
    box:{
        flexGrow: 1
    },
    userStyle:{
        fontWeight:'bold'
    },
    dateStyle:{
        fontSize: 12,
        color: '#777678',
    },
};

const CommentHeader = () =>{
    return(
        <Grid container>
            <Grid item md={2} xs={2}>
                <Avatar/>
            </Grid>
            <Grid item md={2} xs={2}>
                <Typography sx={styles.userStyle}>
                    <Link color={"inherit"}>
                        Luara de Souza
                    </Link>
                </Typography>
            </Grid>
            <Grid item md={2} xs={2}>
                <Typography sx={styles.dateStyle}>
                    23 de Setembro 2020
                </Typography>
            </Grid>
            <Grid item md={2} xs={2}>
                <IconButton>
                    <MoreVertIcon fontSize={"small"}/>
                </IconButton>
            </Grid>
        </Grid>
    )
};
export default CommentHeader;
