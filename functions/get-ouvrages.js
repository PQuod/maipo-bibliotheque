// get-testimonials.js

const query = require("./utils/query");

const GET_OUVRAGES = `
    query {
        allOuvrages {
          data {
             _id
             title
             nom
             prenom
             editions
             trad
             annee
             pages
             categorie
          }
        }
     }
`;

 exports.handler = async () => {
    const { data, errors } = await query(GET_OUVRAGES);

    if (errors) {
       return {
         statusCode: 500,
         body: JSON.stringify(errors)
       };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ ouvrages: data.allOuvrages.data })
    };
  };
