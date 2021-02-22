import { client, q } from '@config/db';

const transform = (response) => {
  return {
    id: response.ref.value.id,
    ...response.data,
  };
};

const getAllCalendar = client
  .query(q.Paginate(q.Match(q.Ref('indexes/all_calendar'))))
  .then((response) => {
    const calendarRef = response.data;
    return client
      .query(
        calendarRef.map((ref) => {
          return q.Get(ref);
        }),
      )
      .then((data) =>
        Array.isArray(data) ? data.map(transform) : transform(data),
      );
  })
  .catch((error) => console.warn('error', error.message));

export default getAllCalendar;
