import { client, q } from '@config/db'

const transform = response => {
    return {
        id: response.ref.value.id,
        ...response.data
    }
}

const getAllEntries = () =>
    client
        .query(q.Paginate(q.Match(q.Ref('indexes/allEntries'))))
        .then(response => {
            const entriesRef = response.data
            return client
                .query(
                    entriesRef.map(ref => {
                        return q.Get(ref)
                    })
                )
                .then(data => (Array.isArray(data) ? data.map(transform) : transform(data)))
        })
        // eslint-disable-next-line
        .catch(error => console.warn('error', error.message))

export { getAllEntries }
