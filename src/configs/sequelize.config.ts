
import path from 'path';
import  {Sequelize} from 'sequelize'

const storagePath= path.resolve(__dirname, 'data', 'pets.db');

export const sequelizeConnection = new Sequelize({
  dialect: 'sqlite',
 storage:'./src/data/db.sqlite'
});


