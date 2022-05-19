import React, {useState, Fragment} from "react";

import ReferenceField from "./ReferenceField";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const styles = {
    grid: {
        display: 'grid',
        // gap: 2,
        width: 'auto',
    },
};

const ReferenceList = ({onChange, name}) =>{
    const [records, setRecords] = useState([]);
    const [text, setText] = useState("");

    const handleOnChangeText = (event) =>{
        setText(event.target.value);
    };
    const handleOnClickAdd = () =>{
        records.push(text);
        setRecords(records);
        setText("");

        onChange({
            target: {
                value: records
            }});
    };
    const onEditReferenceField = (text, index) =>{
        records[index] = text;
        setRecords(records);
    };
    const onRemoveReferenceField = (index) =>{

        records.splice(index,1);
        setRecords(records);
    };

    return(
        <Fragment>
            <Box sx={styles.grid}>
                <Grid container>
                    {
                        records.map((element, index) =>
                            (<Grid item xs={12} sm={12} md={12} key={name + "-" + element}>
                                <ReferenceField
                                    onEdit={(text) =>{onEditReferenceField(text, index)}}
                                    onRemove={(text) =>{onRemoveReferenceField(index)}}
                                    elementText={element}/>
                            </Grid>)
                        )
                    }
                    <Grid item xs={12} sm={12} md={12}>
                        <TextField onChange={handleOnChangeText} value={text} multiline fullWidth/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="medium"
                            onClick={handleOnClickAdd}
                            style={{marginTop:'10px'}}
                        >
                            Adicionar
                        </Button>
                    </Grid>
                </Grid>
           </Box>
        </Fragment>
    )
};
export default ReferenceList;
