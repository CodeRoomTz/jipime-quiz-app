import { SetStateAction, useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { addCategory, addDifficulty, addType } from '../../store/features/settingSlice/SettingSlice';

interface SelectFieldProps {
    label?: string,
    options: { id: string, name: string }[],
}


const SelectField = ({ label, options }: SelectFieldProps) => {
    const [value, setValue] = useState<string>('')
    const dispatch = useDispatch<AppDispatch>();

    const handleSelectChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setValue(e.target.value as string)
        switch (label) {
            case 'Category':
                dispatch(addCategory(e.target.value as string))
                break;
            case 'Difficulty':
                dispatch(addDifficulty(e.target.value as string))
                break;
            case 'Type':
                dispatch(addType(e.target.value as string))
                break;
            default:
                break;
        }


    }

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