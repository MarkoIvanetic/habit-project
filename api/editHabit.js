import { client, q } from "../config/db"

const editHabit = (habitId, newData) =>
  client
    .query(
      q.Update(q.Ref(q.Collection("habit"), habitId), {
        data: newData,
      })
    )
    .then(ret => console.log(ret))
    .catch(err => console.warn(err))

export default editHabit
