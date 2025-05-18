import { sequelize } from '../src/config/database';
import { down } from '../migrations/20250517-create-stores';

(async () => {
    try {
        const queryInterface = sequelize.getQueryInterface();
        await down(queryInterface);
        console.log('Migration revertida com sucesso!');
        await sequelize.close();
    } catch (error) {
        console.error('Erro ao reverter migration:', error);
    }
})();
