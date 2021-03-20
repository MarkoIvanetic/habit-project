import { getAllHabits } from '@api'
import { useQuery } from 'react-query'

const fetchHabits = async () => {
    const res = await getAllHabits()
    return res
}

const useGetHabits = (staleTime = 10000) => {
    return useQuery('habits', fetchHabits, { staleTime })
}

export default useGetHabits
