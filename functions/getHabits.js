const query = require('./utils/query');

const GET_HABITS = `
  query HabitQuery {
      allHabits {
        data {
          _id
          title
          points
          note
          metric
        }
      }
  }
 `;

exports.handler = async () => {
  const { data, errors } = await query(GET_HABITS);

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ habits: data.allHabits.data }),
  };
};
