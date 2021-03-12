import { client, q } from '@config/db'

const editEntry = (entryId, newData) =>
    client
        .query(
            q.Update(q.Ref(q.Collection('Entry'), entryId), {
                data: newData
            })
        )
        .then(ret => console.log(ret))
        .catch(err => console.warn(err))

export default editEntry
