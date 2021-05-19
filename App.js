var sequelize = require('sequelize')

const connection = new sequelize('Student', 'root', 'Varshini1998@', {
    host: 'localhost',
    dialect: 'mysql'
});
const Article = connection.define('article', {
    title: sequelize.STRING,
    body: sequelize.TEXT,
    dept: sequelize.TEXT,
    approved: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    }
})
connection
    .sync({
        force: true
    })
    .then(function () {
        Article.bulkCreate([
            {
                index: '1',
                title: 'Article 1',
                body: 'varshini',
                dept: 'IT'
            },
            {
                index: '2',
                title: 'Article 2',
                body: 'surya',
                dept: 'MECH'
            },
            {
                index: '3',
                title: 'Article 3',
                body: 'guru',
                dept: "CSE"
            },
            {
                index: '4',
                title: 'Article 4',
                body: 'vaishu',
                dept: 'IT'
            },
            {
                index: '5',
                title: 'Article 5',
                body: 'kabii',
                dept: 'EEE'
            },
            {
                index: '6',
                title: 'Article 6',
                body: 'shrii',
                dept: 'AERO'
            }
        ], {
            validate: true,
            ignoreDuplicate: true
        }).then(function () {

        })
    })
