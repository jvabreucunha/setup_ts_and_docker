// migrations/20250517-create-stores.ts
import { QueryInterface, DataTypes } from 'sequelize';

export async function up(queryInterface: QueryInterface) {
    // Ativa o PostGIS
    await queryInterface.sequelize.query(`CREATE EXTENSION IF NOT EXISTS postgis;`);

    // Criação da tabela Stores
    await queryInterface.createTable('stores', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        tradingName: { type: DataTypes.STRING, allowNull: false },
        ownerName: { type: DataTypes.STRING, allowNull: false },
        document: { type: DataTypes.STRING, allowNull: false, unique: true },
        coverageArea: { type: DataTypes.GEOMETRY('MULTIPOLYGON', 4326), allowNull: false },
        address: { type: DataTypes.GEOMETRY('POINT', 4326), allowNull: false },
        createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: queryInterface.sequelize.literal('NOW()') },
        updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: queryInterface.sequelize.literal('NOW()') },
    });

    // Índices GIST para buscas espaciais
    await queryInterface.addIndex('stores', {
        fields: ['coverageArea'],
        using: 'GIST',
        name: 'stores_coverage_area_gist',
    });
    await queryInterface.addIndex('stores', {
        fields: ['address'],
        using: 'GIST',
        name: 'stores_address_gist',
    });
}

export async function down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('stores');
}
