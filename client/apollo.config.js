module.exports = {
    client: {
        name: "Song Builder Client",
        service: "localhost",
        url: "http://localhost:4000/graphql",
        addTypename: true,
        excludes: ['**/__tests__/**/*']
    }
}