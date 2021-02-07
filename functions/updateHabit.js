const query = require('./utils/query');

const UPDATE_HABIT = `
  mutation($id: ID!,$title: String!, $note: String!, $metric: String!, $points: Int!){
    updateHabit(id: $id, data: {title: $title, note: $note, metric: $metric, points: $points}){
      _id
      title
      metric
      points
      note
    }
  }
`;

exports.handler = async (event) => {
  const { id, title, note, metric, points } = JSON.parse(event.body);
  const { data, errors } = await query(UPDATE_HABIT, { id, title, note, metric, points });

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ updatedMessage: data.updateHabit }),
  };
};
