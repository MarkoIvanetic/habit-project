import { client, q } from "../config/db"

const createHabit = data =>
  client
    .query(
      q.Create(q.Collection("habit"), {
        data,
      })
    )
    .then(ret => ret)
    .catch(err => console.warn(err))

export default createHabit
