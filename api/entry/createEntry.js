import { client, q } from '@config/db'

const transform = response => {
    return {
        id: response.ref.value.id,
        ...response.data
    }
}

const createEntry = data => {
    return client
        .query(
            q.Create(q.Collection('Entry'), {
                data
            })
        )
        .then(ret => transform(ret))
        .catch(err => console.warn(err))
}

const createEntries = data => {
    return client
        .query(
            q.Map(
                data,
                q.Lambda(
                    entry,
                    q.Create(q.Collection('Entry'), {
                        data: entry
                    })
                )
            )
        )
        .then(ret => transform(ret))
        .catch(err => console.warn(err))
}

export { createEntry, createEntries }
