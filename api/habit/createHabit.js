import { client, q } from '@config/db'

const transform = response => {
    return {
        id: response.ref.value.id,
        ...response.data
    }
}

const createHabit = data =>
    client
        .query(
            q.Create(q.Collection('Habit'), {
                data
            })
        )
        .then(ret => transform(ret))
        .catch(err => console.warn(err))

export default createHabit
