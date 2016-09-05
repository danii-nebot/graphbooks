var graphql = require('graphql'),
    data = require('../static/data.json');

var linkedNameType = new graphql.GraphQLObjectType({
  name: 'LinkedName',
  fields: {
    name: { type: graphql.GraphQLString },
    url:  { type: graphql.GraphQLString }
  }
});

var bookDataType = new graphql.GraphQLObjectType({
  name: 'bookData',
  fields: {
    x:    { type: graphql.GraphQLFloat },
    y:    { type: graphql.GraphQLFloat },
    data: { type: new graphql.GraphQLObjectType({
      name: 'bookPointsData',
      fields: {
        title:    { type: graphql.GraphQLString },
        numVotes: { type: graphql.GraphQLInt },
        imageUrl: { type: graphql.GraphQLString }
      }
    })
  }}
});

var graphDataType = new graphql.GraphQLObjectType({
  name: 'graphData',
  fields: {
    xAxisMin:         { type: graphql.GraphQLFloat },
    xAxisMax:         { type: graphql.GraphQLFloat },
    yAxisMin:         { type: graphql.GraphQLFloat },
    yAxisMax:         { type: graphql.GraphQLFloat },
    regressionData:   { type: new graphql.GraphQLList(new graphql.GraphQLList(graphql.GraphQLFloat)) },
    data:             { type: new graphql.GraphQLList(bookDataType) }
  }
});

var itemType = new graphql.GraphQLObjectType({
  name: 'Items',
  fields: {
    name:        { type: linkedNameType },
    authors:      { type: new graphql.GraphQLList(linkedNameType) },
    keywords:     { type: graphql.GraphQLString },
    slug:         { type: graphql.GraphQLString },
    rating:       { type: graphql.GraphQLFloat },
    numRatings:   { type: graphql.GraphQLInt },
    imageUrl:     { type: graphql.GraphQLString },
    graph:        { type: graphDataType }
  }
});

var itemsListType = new graphql.GraphQLList(itemType);

var schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      list: {
        type: itemsListType,
        args: {},
        resolve: function (_, args) {
          return data;
        }
      },
      graphData: {
        type: itemType,
        args: {
          slug: { type: graphql.GraphQLString }
        },
        resolve: function (_, args) {
          return data.find( item => {
              return item.slug === args.slug;
          });
        }
      }
    }
  })
});

module.exports = schema;
