import React from "react";
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import {GiBurningBook, GiNotebook} from "react-icons/gi";
import {Stack} from "@mui/material";

const marks = [
    {
        value: 0,
        label: 'Baixa',
    },
    {
        value: 30,
        label: 'Média',
    },
    {
        value: 60,
        label: 'Alta',
    },
    {
        value: 100,
        label: 'Muito Alta',
    },
];

function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
}

const SliderInput = ({onChange, isDisabled}) => {
    return (
        <Box sx={{ width: 300 }}>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <GiNotebook size={40}/>
                <Slider
                    defaultValue={0}
                    valueLabelFormat={valueLabelFormat}
                    step={null}
                    marks={marks}
                    onChange={onChange}
                    disabled={isDisabled}
                />
                <GiBurningBook size={40}/>
            </Stack>
        </Box>
    )
};
export default SliderInput;
