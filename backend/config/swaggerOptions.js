const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Todo API',
            version: '1.0.0',
            description: 'API documentation for the Todo application',
        },
        servers: [
            {
                url: 'http://localhost:5000', // APIサーバーのURL
            },
        ],
    },
    apis: ['./routes/*.js'], // ドキュメントを生成する対象ファイル
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;
