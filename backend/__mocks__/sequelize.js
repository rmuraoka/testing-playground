const { Sequelize, DataTypes } = require('sequelize');

// モックしたSequelizeクラス
class MockSequelize {
    constructor() {
        this.authenticate = jest.fn().mockResolvedValue(true);
    }

    define(modelName, attributes) {
        return {
            modelName,
            attributes,
            // モックされたメソッドを必要に応じて追加
            create: jest.fn(),
            findAll: jest.fn(),
            findByPk: jest.fn(),
            update: jest.fn(),
            destroy: jest.fn(),
        };
    }

    static mockReset() {
        // モックをリセットする場合に使用する関数
    }
}

// モックしたDataTypes
const mockDataTypes = {
    STRING: jest.fn(),
    // 必要な他のDataTypesも追加
};

// モジュールとしてエクスポート
module.exports = {
    Sequelize: MockSequelize,
    DataTypes: mockDataTypes,
};
