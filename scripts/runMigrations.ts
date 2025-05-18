import { sequelize } from '../src/config/database';
import { up } from '../migrations/20250517-create-stores'; // importa a migration manualmente

(async () => {
    try {
        const queryInterface = sequelize.getQueryInterface();
        await up(queryInterface);
        console.log('Migration executada com sucesso!');
        await sequelize.close();
    } catch (error) {
        console.error('Erro ao executar migration:', error);
    }
})();
