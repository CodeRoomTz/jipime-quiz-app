import Axios from 'axios'
import { useEffect, useState } from 'react'

interface useAxiosProps {
    url: string
}

Axios.defaults.baseURL = 'https://opentdb.com/'

const useAxios = ({ url }: useAxiosProps) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = () => {
            Axios.get(url)
                .then(res => setResponse(res.data))
                .catch(error => setError(error.message))
                .finally(() => setLoading(false))
        }
        fetchData()
    }, [url])
    return { response, error, loading }
}

export default useAxios