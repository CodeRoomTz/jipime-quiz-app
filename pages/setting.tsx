import React from 'react'
import { Box, Button, CircularProgress, Typography } from '@mui/material'
import SelectField from '../components/select-field'
import TextFieldInput from '../components/text-field';
import useAxios from '../hooks/useAxios';
import { useSelector } from 'react-redux';
import { RootState } from '../store'
import Router from 'next/router';
const Setting = () => {
    const { response, error, loading } = useAxios({ url: "/api_category.php" })

    const { question_category, question_difficulty, question_type, amount_of_question } = useSelector((store: RootState) => store.setting)

    console.log(question_category, question_difficulty, question_type, amount_of_question)
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        Router.push("/questions")
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
            <TextFieldInput type='number' label="Amount of Questions" />
            <Box mt={3} width="100%">
                <Button fullWidth variant="contained" type="submit">Get Started</Button>
            </Box>
        </form>
    )
}


export default Setting