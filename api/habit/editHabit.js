import { client, q } from '@config/db'

const editHabit = (habitId, newData) =>
    client
        .query(
            q.Update(q.Ref(q.Collection('Habit'), habitId), {
                data: newData
            })
        )
        // eslint-disable-next-line
        .then(ret => console.log(ret))
        // eslint-disable-next-line
        .catch(err => console.warn(err))

export default editHabit
