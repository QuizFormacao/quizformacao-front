import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const styles = {
    initialAccordionState:{
        width: 'auto',
        marginLeft: '5%',
        marginRight:'5%',
        backgroundColor:'#ffffff'
    },
    secondAccordionState:{
        backgroundColor:'#2196f3',
        fontWeight: 'bold'
    },
    initialStateText:{
        color:'#000000',
        marginTop:'15px',
        fontSize: 17
    },
    secondStateText:{
        color:'#ffffff',
        marginTop:'15px',
        fontSize: 17
    },
    whiteBackgroundColor:{
        backgroundColor:'#ffffff'
    }
};

const AccordionComponent = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Accordion
            elevation={'2'}
            sx={open? styles.secondAccordionState : styles.initialAccordionState}
            onChange={handleClick}>

            <AccordionSummary
                sx={open ? styles.secondStateText : styles.initialStateText}
                expandIcon={<ExpandMoreIcon/>}>
                {props.title}
            </AccordionSummary>

            <AccordionDetails sx={styles.whiteBackgroundColor} >
                {props.component}
            </AccordionDetails>
        </Accordion>
    );
};
export default AccordionComponent;
