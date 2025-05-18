import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

class Partner extends Model {
    public id!: number;
    public saldo!: number;
    public limite!: number;
}

Partner.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    saldo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    limite: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
}, {
    sequelize,
    modelName: 'Partner',
    tableName: 'Partner',
    timestamps: false,
});

export default Partner
