const query = require('./utils/query');

const DELETE_HABIT = `
  mutation($id: ID!) {
    deleteHabit(id: $id){
      _id
    }
  }
`;

exports.handler = async (event) => {
  const { id } = JSON.parse(event.body);
  const { data, errors } = await query(DELETE_HABIT, { id });

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ deletedMessage: data.deleteHabit }),
  };
};
