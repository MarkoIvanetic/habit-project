import { client, q } from '@config/db'

const transform = response => {
    return {
        id: response.ref.value.id,
        ...response.data
    }
}

const createWeeklyEntry = data => {
    return client
        .query(
            q.Create(q.Collection('WeeklyEntry'), {
                data
            })
        )
        .then(ret => transform(ret))
        .catch(err => console.warn(err))
}

const createWeeklyEntries = data => {
    return client
        .query(
            q.Map(
                data,
                q.Lambda(
                    entry,
                    q.Create(q.Collection('WeeklyEntry'), {
                        data: entry
                    })
                )
            )
        )
        .then(ret => transform(ret))
        .catch(err => console.warn(err))
}

export { createWeeklyEntry, createWeeklyEntries }
