import { Box, Button } from '@mui/material'
import React, { DOMAttributes } from 'react'
import SelectField from '../components/select-field'
import TextFieldInput from '../components/text-field';
const setting = () => {

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <SelectField label='Category' />
            <SelectField label='Category' />
            <SelectField label='Type' />
            <TextFieldInput type='number' />
            <Box mt={3} width="100%">
                <Button fullWidth variant="contained" type="submit">Get Started</Button>
            </Box>
        </form>
    )
}

export default setting