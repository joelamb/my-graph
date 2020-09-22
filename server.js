var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    name: String
  }
`);

var root = {
   name: () => {
    return 'Joe';
  },
};

var app = express();
app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(process.env.PORT || 3000);
console.log(`Listening on ${app.get('port')}`);

