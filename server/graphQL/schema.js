var graphql = require('graphql'),
    data = require('../static/data.json')

var bookDataType = new graphql.GraphQLObjectType({
  name: 'bookData',
  fields: {
    x: { type: graphql.GraphQLFloat },
    y: { type: graphql.GraphQLFloat },
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

var authorType = new graphql.GraphQLObjectType({
  name: 'Author',
  fields: {
    name: { type: graphql.GraphQLString },
    url: { type: graphql.GraphQLString }
  }
});

var seriesType = new graphql.GraphQLObjectType({
  name: 'Series',
  fields: {
    title:        { type: graphql.GraphQLString },
    authors:      { type: new graphql.GraphQLList(authorType) },
    keywords:     { type: graphql.GraphQLString },
    slug:         { type: graphql.GraphQLString },
    rating:       { type: graphql.GraphQLInt},
    numRatings:   { type: graphql.GraphQLInt},
    seriesUrl:   { type: graphql.GraphQLString },
    imageUrl:     { type: graphql.GraphQLString },
    graph:         { type: graphDataType }
  }
});

var seriesListType = new graphql.GraphQLList(seriesType);

var schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
      seriesList: {
        type: seriesListType,
        args: {},
        resolve: function (_, args) {
          return data;
        }
      },
      series: {
        type: seriesType,
        // `args` describes the arguments that the `series` query accepts
        args: {
          slug: { type: graphql.GraphQLString }
        },
        // The resolve function describes how to "resolve" or fulfill
        // the incoming query.
        resolve: function (_, args) {
          return data.find( element => {
              return element.slug === args.slug;
          });
        }
      }
    }
  })
});

module.exports = schema;
