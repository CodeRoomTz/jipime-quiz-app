import { SetStateAction, useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';

interface SelectFieldProps {
    label?: string,
    options: { id: string, name: string }[]
}
const SelectField = ({ label, options }: SelectFieldProps) => {
    const [value, setValue] = useState("second")
    const handleSelectChange = (e: { target: { value: SetStateAction<string>; }; }) => { setValue(e.target.value as string) }

    return (
        <Box mt={3} width="100%">
            <FormControl fullWidth size="small">
                <InputLabel id={label}>{label}</InputLabel>
                <Select value={value} labelId={label} label={label} onChange={handleSelectChange}>
                    {options.map(({ name, id }, index) => (
                        <MenuItem key={`${index}${id}`} value={id}>{name}</MenuItem>

                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default SelectField