const users = [
    {  id: 1, name: 'Gabriel', email: 'gabrielbrune@rocketseat.com'},
    {  id: 2, name: 'Luis Brune', email: 'luis@rocketseat.com'},
    {  id: 3, name: 'Jonathan', email: 'jonathan@rocketseat.com'},
    {  id: 4, name: 'Leoncio Silva', email: 'leoncio@rocketseat.com'},
];

module.exports = {
    Query: {
        users: () => users,
        user: (_, { id }) => users[id]
    },

    Mutation: {
        createUser: (_, ) => users.filter(elm => elm.id == id)
    }
};