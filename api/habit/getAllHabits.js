import { client, q } from '@config/db'

const transform = response => {
    return {
        id: response.ref.value.id,
        ...response.data
    }
}

const getAllHabits2 = client
    .query(q.Paginate(q.Match(q.Ref('indexes/allHabits'))))
    .then(response => {
        const habitsRefs = response.data
        const getAllProductDataQuery = habitsRefs.map(ref => {
            return q.Get(ref)
        })
        return client
            .query(getAllProductDataQuery)
            .then(data => (Array.isArray(data) ? data.map(transform) : transform(data)))
    })
    // eslint-disable-next-line
    .catch(error => console.warn('error', error.message))

const getAllHabits = () =>
    client
        .query(q.Paginate(q.Match(q.Ref('indexes/allHabits'))))
        .then(response => {
            const habitsRefs = response.data
            const getAllProductDataQuery = habitsRefs.map(ref => {
                return q.Get(ref)
            })
            return client
                .query(getAllProductDataQuery)
                .then(data => (Array.isArray(data) ? data.map(transform) : transform(data)))
        })
        // eslint-disable-next-line
        .catch(error => console.warn('error', error.message))

export default getAllHabits
