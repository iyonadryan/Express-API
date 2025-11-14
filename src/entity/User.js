const { EntitySchema, BaseEntity } = require("typeorm");

class User extends BaseEntity {}

module.exports = {
    User,
    UserSchema: new EntitySchema({
        name: "User",
        tableName: "users",
        target: User,
        columns: {
            id: {
                primary: true,
                type: "uuid",
                generated: "uuid", // <- generate UUID otomatis
            },
            name: {
                type: "varchar",
                length: 100,
            },
            email: {
                type: "varchar",
                unique: true,
            },

            // AUTO FIELDS dari TypeORM
            createdAt: {
                type: "timestamp",
                createDate: true,
            },
            updatedAt: {
                type: "timestamp",
                updateDate: true,
            },
            deletedAt: {
                type: "timestamp",
                deleteDate: true,
                nullable: true,
            },
        }
    })
};