import { Box, Button, CircularProgress, Typography } from '@mui/material'
import SelectField from '../components/select-field'
import TextFieldInput from '../components/text-field';
import useAxios from '../hooks/useAxios';


const Setting = () => {
    const { response, error, loading } = useAxios({ url: "/api_category.php" })

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()
    }

    if (loading) {
        return (
            <Box mt={20}>
                <CircularProgress />
            </Box>
        )
    }

    if (error) {
        return (
            <Typography variant='h6' mt={20} color="red">
                Something Went Wrong
            </Typography>
        )
    }
    const difficultyOptions = [
        { id: "easy", name: "Easy" },
        { id: "medium", name: "Medium" },
        { id: "hard", name: "Hard" },
    ]

    const typeOptions = [
        { id: "multiple", name: "Multiple Choice" },
        { id: "boolean", name: "True/False" },
    ]

    const categories: { name: string, id: string }[] = response?.data.trivia_categories
    return (
        <form onSubmit={handleSubmit}>
            <SelectField options={categories} label='Category' />
            <SelectField options={difficultyOptions} label='Difficulty' />
            <SelectField options={typeOptions} label='Type' />
            <TextFieldInput type='number' />
            <Box mt={3} width="100%">
                <Button fullWidth variant="contained" type="submit">Get Started</Button>
            </Box>
        </form>
    )
}


export default Setting