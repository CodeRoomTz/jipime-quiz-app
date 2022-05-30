import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Router from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { handleScoreChange } from '../store/features/scoreSlice/scoreSlice';
import { addNumberOfQuestions } from '../store/features/settingSlice/SettingSlice';

const Score = () => {
    const { score } = useSelector((store: RootState) => store.score)
    const dispatch = useDispatch()

    const handleBackToSettings = () => {
        dispatch(handleScoreChange(0));
        dispatch(addNumberOfQuestions(50));
        Router.push("/setting")
    }
    return (
        <Box mt={30}>
            <Typography variant="h3" fontWeight="bold" mb={3}>
                Final Score {score}
            </Typography>
            <Button onClick={handleBackToSettings} variant="outlined">
                back to settings!
            </Button>
        </Box>
    )
}

export default Score