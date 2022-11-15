const query = require("./utils/query");

const DELETE_OUVRAGE = `
  mutation($id: ID!) {
    deleteOuvrage(id: $id){
      _id
    }
  }
`;

exports.handler = async event => {
  const { id } = JSON.parse(event.body);
  const { data, errors } = await query(
        DELETE_OUVRAGE, { id });

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ deletedOuvrage: data.deleteOuvrage
   })
  };
};
