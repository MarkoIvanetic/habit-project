import { client, q } from "../config/db"

const deleteHabit = noteId =>
  client
    .query(q.Delete(q.Ref(q.Collection("habit"), noteId)))
    .then(res => res)
    .catch(err => console.warn(err.message))

export default deleteHabit
