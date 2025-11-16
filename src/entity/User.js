const { EntitySchema, BaseEntity } = require("typeorm");
const { IdColumn, BaseEntityColumns } = require("./base/BaseEntityModel");

class User extends BaseEntity {}

module.exports = {
    User,
    UserSchema: new EntitySchema({
        name: "User",
        tableName: "users",
        target: User,
        columns: {
            ...IdColumn,
            email: {
                type: "varchar",
                unique: true,
                length: 100,
            },
            password: {
                type: "varchar",
                length: 255,
            },
            username: {
                type: "varchar",
                unique: true,
                length: 30,
            },
            firstname: {
                type: "varchar",
                length: 30,
            },
            lastname: {
                type: "varchar",
                length: 30,
            },
            ...BaseEntityColumns,
        }
    })
};