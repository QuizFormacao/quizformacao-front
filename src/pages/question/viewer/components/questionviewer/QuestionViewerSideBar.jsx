import React from 'react';
import clsx from 'clsx';
import {BsCardHeading} from "react-icons/bs";
import {GoPin} from "react-icons/go";

import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

const drawerWidth = 150;

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
    position:{
        marginLeft: '20%',
    },
    positionOption:{
        marginLeft: '-10%',
    },
    lastListItem: {
        height: "50px",
        marginTop:'5%',
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

export default function QuestionViewerSideBar() {

    const [open, setOpen] = React.useState(false);
    const [haveToBeOpen, setHaveToBe] = React.useState(false);
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
        <div className={styles.root}>
            <CssBaseline/>
            <Drawer
                onMouseOver={handleDrawerOpen}
                onMouseLeave={handleDrawerClose}
                variant="permanent"
                sx={clsx(styles.drawer, {
                    [styles.drawerOpen]: open,
                    [styles.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [styles.drawerOpen]: open,
                        [styles.drawerClose]: !open,
                    }),
                }}>
                <Toolbar/>
                <div className={styles.drawerContainer}>
                    <Divider/>
                    <List>
                        <ListItem button key={'Voltar'} sx={styles.listItem}>
                            <ListItemIcon><KeyboardBackspaceIcon/></ListItemIcon>
                            <ListItemText sx={styles.positionOption}>
                                <h5 className={styles.backFont}>VOLTAR</h5>
                            </ListItemText>
                        </ListItem>

                        <Divider/>
                        <h5 hidden={!open} className={styles.topicText} >FERRAMENTAS</h5>
                        <ListItem button key={'Salvar'}  sx={styles.listItem}>
                            <ListItemIcon><TurnedInIcon/></ListItemIcon>
                            <ListItemText sx={styles.positionOption}>
                                <h5 className={styles.topicFont}>Salvar</h5>
                            </ListItemText>
                        </ListItem>

                        <Divider/>
                        <h5 hidden={!open} className={styles.topicText} >ATALHOS</h5>
                        <ListItem button key={'Enunciado'} sx={styles.listItem}>
                            <ListItemIcon><BsCardHeading size={22} /></ListItemIcon>
                            <ListItemText sx={styles.positionOption}>
                                <h5 hidden={!open} className={styles.topicFont}>Enunciado</h5>
                            </ListItemText>
                        </ListItem>

                        <ListItem  button key={'Resposta'} sx={styles.listItem}>
                            <ListItemText sx={styles.position}>
                                <h5 hidden={!open} className={styles.topicFont}>Resposta</h5>
                            </ListItemText>
                        </ListItem>

                        <ListItem button key={'Comentários'} sx={styles.listItem}>
                            <ListItemText sx={styles.position}>
                                <h5 hidden={!open} className={styles.topicFont}>Comentários</h5>
                            </ListItemText>
                        </ListItem>

                        <ListItem button key={'Detalhes'} sx={styles.listItem}>
                            <ListItemText sx={styles.position}>
                                <h5 hidden={!open} className={styles.topicFont}>Detalhes</h5>
                            </ListItemText>
                        </ListItem>

                        <ListItem button key={'Referências'} sx={styles.listItem}>
                            <ListItemText sx={styles.position}>
                                <h5 hidden={!open} className={styles.topicFont}>Referências</h5>
                            </ListItemText>
                        </ListItem>
                        <Divider/>
                        <ListItem button key={'Fixar barra'} onClick={setHaveToBeOpen} sx={open ? styles.lastListItem : styles.listItem}>
                            <ListItemIcon><GoPin size={22}/></ListItemIcon>
                            <ListItemText sx={styles.positionOption}>
                                <h5 className={styles.topicFont}> {text} </h5>
                            </ListItemText>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    );
}
