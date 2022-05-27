import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

interface LayoutProps {
    children: JSX.Element
}
const Layout = ({ children }: LayoutProps) => {
    return (
        <Container maxWidth="sm">
            <Box textAlign="center" mt={5}>
                <Typography variant='h2' fontWeight="bold">Quiz App</Typography>
                {children}
            </Box>
        </Container>
    )
}

export default Layout