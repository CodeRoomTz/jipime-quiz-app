import Axios, { AxiosError, AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'

interface useAxiosProps {
    url: string
}

Axios.defaults.baseURL = 'https://opentdb.com/'

const useAxios = ({ url }: useAxiosProps) => {
    const [response, setResponse] = useState<AxiosResponse>()
    const [error, setError] = useState<AxiosError>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = () => {
            Axios.get(url)
                .then(res => setResponse(res))
                .catch(error => setError(error))
                .finally(() => setLoading(false))
        }
        fetchData()
    }, [url])
    return { response, error, loading }
}

export default useAxios