const query = require("./utils/query");

const CREATE_OUVRAGE = `
  mutation($title: String!, $nom: String!, $prenom: String!, $trad: String!, $editions: String!, $annee: String!, $pages: String!, $categorie: String!){
    createOuvrage(data: {title: $title, nom: $nom, prenom: $prenom, trad: $trad, editions: $editions, annee: $annee, pages: $pages, categorie: $categorie}){
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
  const { title, nom, prenom, trad, editions, annee, pages, categorie } = JSON.parse(event.body);
  const { data, errors } = await query(
          CREATE_OUVRAGE, {
title, nom, prenom, trad, editions, annee, pages, categorie });

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ ouvrage: data.createOuvrage })
  };
};
