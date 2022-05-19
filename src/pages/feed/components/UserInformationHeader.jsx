import React from "react";
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';

const styles = {
    position:{
        marginTop:'-3%',
    },
    userStyle:{
        fontWeight:'bold'
    },
    dateStyle:{
        fontSize:10,
        color: '#777678',
        marginTop:'-11%'
    },
    iconPosition:{
        marginTop:'30%'
    },
    chipStyle:{
        marginLeft:'10%',
        backgroundColor: '#2196f3',
    },
    chipsPosition:{
        marginLeft: '-2%'
    }
};

const UserInformationHeader = () =>{

    return(
        <List>
            <ListItem >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container>
                        <Grid item >
                            <Avatar sx={styles.iconPosition} />
                        </Grid>

                        <Grid item xs={3} md={3}>
                            <List sx={styles.position}>
                                <ListItem>
                                    <Typography sx={styles.userStyle} variant={"h6"}>
                                        <Link color={"inherit"}>
                                            Luara de Souza
                                        </Link>
                                    </Typography>
                                </ListItem>

                                <ListItem>
                                    <Typography sx={styles.dateStyle} variant={"h6"}>23 de Setembro 2020</Typography>
                                </ListItem>
                            </List>
                        </Grid>

                        <Grid item xs={1} md={1} sx={styles.chipsPosition}>
                            <List>
                                <ListItem>
                                    <Chip sx={styles.chipStyle} size={'small'} label={'Programação'} color={"primary"}/>
                                    <Chip sx={styles.chipStyle} size={'small'} label={'Programação'} color={"primary"}/>
                                    <Chip sx={styles.chipStyle} size={'small'} label={'Programação'} color={"primary"}/>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Box>
            </ListItem>
        </List>
    )
};
export default UserInformationHeader;
