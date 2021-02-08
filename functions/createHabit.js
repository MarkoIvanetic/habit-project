const query = require('./utils/query');

const CREATE_HABIT = `
  mutation($title: String!, $note: String!, $metric: String!, $points: Int!){
    createHabit(data: {title: $title, note: $note, metric: $metric, points: $points}){
      _id
      title
      metric
      points
      note
    }
  }
`;

exports.handler = async (event) => {
  const { title, note, metric, points } = JSON.parse(event.body);
  const { data, errors } = await query(CREATE_HABIT, {
    title,
    note,
    metric,
    points,
  });

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ habit: data.createHabit }),
  };
};
