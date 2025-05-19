import { DataTypes, Model, Sequelize } from 'sequelize';
import { IStore } from '../interfaces/IStore';

type StoreCreationAttributes = Omit<IStore, 'id'>;

class Store extends Model<IStore, StoreCreationAttributes> implements IStore {
    public id!: number;
    public tradingName!: string;
    public ownerName!: string;
    public document!: string;
    public coverageArea!: GeoJSON.MultiPolygon;
    public address!: GeoJSON.Point;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    static initialize(sequelize: Sequelize) {
        Store.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                tradingName: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                ownerName: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                document: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                coverageArea: {
                    type: DataTypes.GEOMETRY('MULTIPOLYGON', 4326),
                    allowNull: false,
                },
                address: {
                    type: DataTypes.GEOMETRY('POINT', 4326),
                    allowNull: false,
                },
            },
            {
                sequelize,
                tableName: 'stores',
                timestamps: true,
                indexes: [
                    { fields: ['coverageArea'], using: 'GIST', name: 'stores_coverage_area_gist' },
                    { fields: ['address'], using: 'GIST', name: 'stores_address_gist' },
                ],
            },
        );
    }
}

export default Store;
