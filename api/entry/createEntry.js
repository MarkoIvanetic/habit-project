import { client, q } from '@config/db'

const transform = response => {
    return {
        id: response.ref.value.id,
        ...response.data
    }
}

const createEntry = data => {
    return (
        client
            .query(
                q.Create(q.Collection('Entry'), {
                    data
                })
            )
            .then(ret => transform(ret))
            // eslint-disable-next-line
            .catch(err => console.warn(err))
    )
}
export { createEntry }
