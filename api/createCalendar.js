import { client, q } from '../config/db';

const transform = (response) => {
  return {
    id: response.ref.value.id,
    ...response.data,
  };
};

const createCalendarEntry = (data) =>
  client
    .query(
      q.Create(q.Collection('calendar'), {
        data,
      }),
    )
    .then((ret) => transform(ret))
    .catch((err) => console.warn(err));

export default createCalendarEntry;
