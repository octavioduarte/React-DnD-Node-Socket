import { Collection, Cursor } from "mongodb";
import { MongoHelper } from "../db";
import { ColumnTasks } from "../types";

export class ServiceTasks {
    async getTasks() {
        const tasksCollection: Collection = await MongoHelper.getCollection('tasks')
        const result = tasksCollection.find().toArray()
        return result
    }

    async updateTasks(tasks: ColumnTasks) {
        const tasksCollection: Collection = await MongoHelper.getCollection('tasks')
        tasks.forEach(async (columnWithTasks) => {
            const { cards, droppableId } = columnWithTasks[0]
            await tasksCollection.findOneAndUpdate({ droppableId }, { $set: { cards } })
        })
    }
}