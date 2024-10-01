import path from 'path';
import { fileURLToPath } from 'url';
import { Sequelize } from 'sequelize';

// Get the directory name from the file URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.resolve(__dirname, 'mvc_demo.sqlite'),
});

export default sequelize;
