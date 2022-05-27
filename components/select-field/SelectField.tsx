import { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';

interface SelectFieldProps {
    label?: string
}
const SelectField = ({ label }: SelectFieldProps) => {
    const [value, setValue] = useState("second")
    const handleSelectChange = () => { }

    return (
        <Box mt={3} width="100%">
            <FormControl fullWidth size="small">
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleSelectChange}>
                    <MenuItem>Option 1</MenuItem>
                    <MenuItem>Option 2</MenuItem>
                    <MenuItem>Option 3</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default SelectField