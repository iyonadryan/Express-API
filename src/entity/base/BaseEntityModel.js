const IdColumn = {
    id: {
        primary: true,
        type: "uuid",
        generated: "uuid",
    }
};

const BaseEntityColumns = {
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

    // Audit fields
    createdBy: {
        type: "uuid",
        nullable: true,
    },
    updatedBy: {
        type: "uuid",
        nullable: true,
    },
};

module.exports = {
    IdColumn,
    BaseEntityColumns
};