const query = require("./utils/query");

const UPDATE_OUVRAGE = `
    mutation($id: ID!, $title: String!, $nom: String!, $prenom: String!, $trad: String!, $editions: String!, $annee: String!, $pages: String!, $categorie: String!){
        updateOuvrage(id: $id, data: {title: $title, nom: $nom, prenom: $prenom, trad: $trad, editions: $editions, annee: $annee, pages: $pages, categorie: $categorie}){
            _id
            title
            nom
            prenom
            trad
            editions
            annee
            pages
            categorie
        }
    }
`;

exports.handler = async event => {
  const { id, title, nom, prenom, trad, editions, annee, pages, categorie } = JSON.parse(event.body);
  const { data, errors } = await query(
       UPDATE_OUVRAGE, { id, title, nom, prenom, trad, editions, annee, pages, categorie });

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ updatedOuvrage:
data.updateOuvrage })
  };
};
