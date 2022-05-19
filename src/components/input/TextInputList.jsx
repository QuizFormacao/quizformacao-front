import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TextInputList = (props) => {
    const set = (event, value) => {
        event.preventDefault();
        setState(state+value);
    };

    const add = (event) => { set(event,1);};
    const remove = (event) => { set(event,-1); };

    let [state, setState] = useState(0);

    const texts = () => {
        let v = [];
        for (let i = 0; i <= state; i++){
            v[i] = <TextField label={props.inputLabel + " " + (i+1)} fullWidth/>;
        }
        return v;
    };

    return <div>
        {texts()}
        <Button onClick={add}>{"adicionar "+props.inputLabel}</Button>
        <Button onClick={remove}>{"Remover "+props.inputLabel}</Button>
    </div>
};
export default TextInputList;
