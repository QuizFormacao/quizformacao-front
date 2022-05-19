import React from 'react';
import clsx from 'clsx';
import {AiFillPushpin} from "react-icons/ai";

import KeyboardBackspaceTwoToneIcon from '@mui/icons-material/KeyboardBackspaceTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import UnarchiveTwoToneIcon from '@mui/icons-material/UnarchiveTwoTone';
import SaveAltTwoToneIcon from '@mui/icons-material/SaveAltTwoTone';
import ArchiveTwoToneIcon from '@mui/icons-material/ArchiveTwoTone';
import CssBaseline from '@mui/material/CssBaseline';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';

const drawerWidth = 190;

const styles = {
    root: {
        display: 'flex',
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    // drawerOpen: {
    //     width: drawerWidth,
    //     transition: theme.transitions.create('width', {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.enteringScreen,
    //     }),
    // },
    // drawerClose: {
    //     transition: theme.transitions.create('width', {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.leavingScreen,
    //     }),
    //     whiteSpace:'nowrap',
    //     width: theme.spacing(7) + 1,
    //     [theme.breakpoints.up('sm')]: {
    //         width: theme.spacing(7) + 1,
    //     },
    // },
    drawerContainer: {
        overflow: 'hidden',
    },
    listItem: {
        height: "50px",
    },

    lastListItem: {
        height: "50px",
        // marginTop:'330px'
    },
    position:{
       marginLeft: '-10%',
    },

    topicText:{
        font: 'Helvetica',
        marginLeft:'15px',
        color: '#777678'
    },

    topicFont:{
        fontSize: 13,
        font: 'Helvetica',
        fontWeight: 'normal',
    },

    backFont:{
        font: 'Helvetica',
        fontWeight: 'normal',
    }

};

export default function RegistrationSideBar() {
    // let haveToBeOpen = false;
    const [haveToBeOpen, setHaveToBe] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [text, setText] = React.useState("Fixar a barra");

    const setHaveToBeOpen = () =>{
        setHaveToBe(!haveToBeOpen);
        if (haveToBeOpen){
            setText("Fixar a barra");
        }else {
            setText("Desafixar a barra")
        }
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        if (!haveToBeOpen){
            setOpen(false);
        }
    };

    return (
        <div sx={styles.root}>
            <CssBaseline />
            <Drawer
                onMouseOver={handleDrawerOpen}
                onMouseLeave={handleDrawerClose}
                variant="permanent"
                className={clsx(styles.drawer, {
                    [styles.drawerOpen]: open,
                    [styles.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [styles.drawerOpen]: open,
                        [styles.drawerClose]: !open,
                    }),
                }}
            >
                <Toolbar/>
                <div sx={styles.drawerContainer}>
                    <Divider />
                    <List>
                        <ListItem button key={'Voltar'} sx={styles.listItem}>
                            <ListItemIcon><KeyboardBackspaceTwoToneIcon/></ListItemIcon>
                            <ListItemText sx={styles.position}>
                                <h5 className={styles.backFont}>VOLTAR</h5>
                            </ListItemText>
                        </ListItem>

                        <Divider/>
                        <h5 hidden={!open} className={styles.topicText} >FERRAMENTAS</h5>

                        <ListItem button key={'Vizualizar a questão'} sx={styles.listItem}>
                            <ListItemIcon><VisibilityTwoToneIcon/></ListItemIcon>
                            <ListItemText sx={styles.position}>
                                <h5 className={styles.topicFont}>Visualizar questão</h5>
                            </ListItemText>
                        </ListItem>

                        <ListItem button key={'Salvar como rascunho'}  sx={styles.listItem}>
                            <ListItemIcon><SaveAltTwoToneIcon/></ListItemIcon>
                            <ListItemText sx={styles.position}>
                                <h5 className={styles.topicFont}>Salvar como rascunho</h5>
                            </ListItemText>
                        </ListItem>

                        <ListItem button key={'Exibir todos os campos'} sx={styles.listItem}>
                            <ListItemIcon><UnarchiveTwoToneIcon/></ListItemIcon>
                            <ListItemText sx={styles.position}>
                                <h5 className={styles.topicFont}>Exibir todos os campos</h5>
                            </ListItemText>
                        </ListItem>

                        <ListItem button key={'Ocultar todos os campos'} sx={styles.listItem}>
                            <ListItemIcon><ArchiveTwoToneIcon/></ListItemIcon>
                            <ListItemText sx={styles.position}>
                                <h5 className={styles.topicFont}>Ocultar todos os campos</h5>
                            </ListItemText>
                        </ListItem>
                        <Divider />
                        <ListItem button key={'Fixar barra'} onClick={setHaveToBeOpen} sx={open ? styles.lastListItem : styles.listItem}>
                            <ListItemIcon><AiFillPushpin size={25}/></ListItemIcon>
                            <ListItemText sx={styles.position}>
                                <h5 className={styles.topicFont}> {text} </h5>
                            </ListItemText>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    );
}
