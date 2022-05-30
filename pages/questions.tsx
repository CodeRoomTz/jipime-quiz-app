import { Button, CircularProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store'
import useAxios from '../hooks/useAxios';
import { decode } from 'html-entities';
import { handleScoreChange } from '../store/features/scoreSlice/scoreSlice';
import Router from 'next/router';

const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
};

const Questions = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [options, setOptions] = useState<string[]>([]);

    const dispatch = useDispatch()

    const {
        question_category,
        question_difficulty,
        question_type,
        amount_of_question,
    } = useSelector((state: RootState) => state.setting)
    const { score } = useSelector((store: RootState) => store.score)

    let apiUrl = `/api.php?amount=${amount_of_question}`

    if (question_category) {
        apiUrl = apiUrl.concat(`&category=${question_category}`);
    }
    if (question_difficulty) {
        apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
    }
    if (question_type) {
        apiUrl = apiUrl.concat(`&type=${question_type}`);
    }

    const { response, loading } = useAxios({ url: apiUrl });


    useEffect(() => {
        if (response?.data.results.length) {
            const question = response?.data.results[questionIndex];
            let answers = [...question.incorrect_answers];
            answers.splice(
                getRandomInt(question.incorrect_answers.length),
                0,
                question.correct_answer
            );
            setOptions(answers);
        }
    }, [response, questionIndex]);

    const handleClickAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        const question = response?.data.results[questionIndex];
        if (e.currentTarget.textContent === question.correct_answer) {
            dispatch(handleScoreChange(score + 1));
        }

        if (questionIndex + 1 < response?.data.results.length) {
            setQuestionIndex(questionIndex + 1);
        } else {
            Router.push("/score")
        }
    }
    if (loading) {
        return (
            <Box mt={20}>
                <CircularProgress />
            </Box>
        )
    }
    return (
        <Box>
            <Typography variant="h4">Questions {questionIndex + 1}</Typography>
            <Typography mt={5}>
                {decode(response?.data.results[questionIndex].question)}
            </Typography>
            {options.map((data, id) => (
                <Box mt={2} key={id}>
                    <Button onClick={handleClickAnswer} variant="contained">
                        {decode(data)}
                    </Button>
                </Box>
            ))}
            <Box mt={5}>
                Score: {score} / {response?.data.results.length}
            </Box>
        </Box>
    );
}


export default Questions