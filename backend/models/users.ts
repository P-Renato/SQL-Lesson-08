import { Model } from 'sequelize';
import { DataTypes } from 'sequelize';
import sequelize from '../utils/db';

class User extends Model {
    declare fullname: string;
    declare username: string;
    declare password: string
};

User.init( {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    fullname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3,50]
        }
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4,50]
        }
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5,2]
        }
    }
}, 
{
    sequelize: sequelize,
    tableName: "users",
    timestamps: false,
}
);

export default User;