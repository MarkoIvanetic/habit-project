import { client, q } from "../config/db"

const deleteHabit = id =>
  client
    .query(q.Delete(q.Ref(q.Collection("habit"), id)))
    .then(res => res)
    .catch(err => console.warn(err.message))

export default deleteHabit
