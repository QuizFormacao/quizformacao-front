import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {RiShareForwardLine } from "react-icons/ri";
import CardContent from '@mui/material/CardContent';
import {MdExpandMore} from "react-icons/md";
import Collapse from '@mui/material/Collapse';
import Chip from '@mui/material/Chip';
import DifficultySlider from "../../../components/input/DifficultySlider";

const styles = {
    barColor:{
        backgroundColor:'#fcfcfc',
        height:'50px',
        marginBottom:'-4%'
    },
    position:{
        marginLeft:'1%'
    },
    buttonShowMore:{
        fontSize:10,
        fontWeight: 'bold',
        color: '#a8a6a5',
        marginLeft:'20%',
        marginTop:'3%'
    },
    button:{
        fontSize:10,
        fontWeight: 'bold',
        color: '#a8a6a5',
        marginLeft:'20%',
        marginTop:'25%'
    },
    positionStar:{
        marginTop:'4%'
    },
    textColor:{
        color: '#777678',
        marginRight:'1%'
    },
    descriptionItem:{
        marginTop:'-4%'
    },
    color:{
        color:'#777678',
    },
    chipStyle:{
        marginRight:'1%',
        backgroundColor: '#2196f3',
    },
    size:{
        width:'200%',
        marginTop:'-5%'
    }
};

const MoreInformation = () =>{
    const [seeMore,setSeeMore] = React.useState(false);

    const handleSeeMore = () =>{
        setSeeMore(!seeMore)
    };

    return(
        <List>
            <Divider/>
            <ListItem sx={styles.barColor}>
                <Box sx={{flexGrow: 1}}>
                    <Grid container>

                        <Grid item xs={9} md={9} sx={styles.positionStar}>
                            <Box  component="fieldset" mb={3} borderColor="transparent">
                                <Rating
                                    readOnly
                                    name="customized-empty"
                                    defaultValue={2}
                                    precision={0.5}
                                    emptyIcon={<StarBorderIcon fontSize="inherit" />}/>
                            </Box>
                        </Grid>

                        <Grid item md={1} xs={1} sx={styles.positionStar}>
                            <Button disabled sx={styles.buttonShowMore} variant={"text"} size={"small"} startIcon={<RiShareForwardLine size={20}/>}>
                                1.1mil
                            </Button>
                        </Grid>
                        <Grid item md={2} xs={2}>
                            <Button sx={styles.button} startIcon={<MdExpandMore size={18}/>} onClick={handleSeeMore}>
                                Detalhes
                            </Button >
                        </Grid>
                    </Grid>
                </Box>

            </ListItem>
            <ListItem>
                <Collapse in={seeMore} timeout="auto" unmountOnExit>
                    <CardContent>
                        <List>
                            <ListItem>
                                <h2 className={styles.color}>Detalhes</h2>
                            </ListItem>
                            <ListItem>
                            <Grid container>
                                <Grid md={12} xs={12}>
                                    <Divider sx={styles.size}/>
                                </Grid>
                            </Grid>
                                </ListItem>
                            <ListItem>
                                <h5 className={styles.textColor}>TÓPICOS:</h5>
                                <Chip sx={styles.chipStyle} label={"Orientação a objeto"} size={"small"} color={"primary"}/>
                                <Chip sx={styles.chipStyle} label={"Orientação a objeto"} size={"small"} color={"primary"}/>
                            </ListItem>
                            <ListItem sx={styles.descriptionItem}>
                                <h5 className={styles.textColor}>REQUISITOS:</h5>
                                <Chip sx={styles.chipStyle} label={"Exemplo"} size={"small"} color={"primary"}/>
                            </ListItem>
                            <ListItem sx={styles.descriptionItem}>
                                <h5 className={styles.textColor}>DIFICULDADE:</h5>
                                <DifficultySlider disable/>
                            </ListItem>
                        </List>
                    </CardContent>
                </Collapse>
            </ListItem>

        </List>
    )
};
export default MoreInformation;
