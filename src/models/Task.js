import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Task = sequelize.define('tasks', {
    id: {
        //defaultValue: Sequelize.literal('uuid_generate_v4()'),
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    done: {
        type: Sequelize.BOOLEAN
    },
    projectid: {
        type: Sequelize.INTEGER
    },
}, {
    timestamps: false
});

export default Task;