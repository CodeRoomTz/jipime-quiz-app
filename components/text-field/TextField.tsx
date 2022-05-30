import React from 'react'
import { FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from 'react-redux';
import { addNumberOfQuestions } from '../../store/features/settingSlice/SettingSlice';

interface TextFieldInputProps {
    type?: string,
    label: string
}
const TextFieldInput = ({ type = 'string', label }: TextFieldInputProps) => {

    const dispatch = useDispatch()

    const handleChange = (event: { target: { value: any; }; }) => {
        switch (label) {
            case "Amount of Questions":
                dispatch(addNumberOfQuestions(event.target.value))
                break;
            default:
                break;
        }
    };

    return (
        <Box mt={3} width="100%">
            <FormControl fullWidth size="small">
                <TextField
                    onChange={handleChange}
                    variant="outlined"
                    label={label}
                    type={type}
                    size="small"
                />
            </FormControl>
        </Box>

    )
}

export default TextFieldInput