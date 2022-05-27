import React from 'react'
import { FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";

interface TextFieldInputProps {
    type?: string
}
const TextFieldInput = ({ type = 'string' }: TextFieldInputProps) => {

    const handleChange = (event: { target: { value: any; }; }) => {
        console.log(event.target.value)
    };

    return (
        <Box mt={3} width="100%">
            <FormControl fullWidth size="small">
                <TextField
                    onChange={handleChange}
                    variant="outlined"
                    label="Amount of Questions"
                    type={type}
                    size="small"
                />
            </FormControl>
        </Box>

    )
}

export default TextFieldInput