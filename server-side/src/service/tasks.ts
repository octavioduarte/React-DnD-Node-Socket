import { Collection, Cursor } from "mongodb";
import { MongoHelper } from "../db";

export class ServiceTasks {
    async getTasks() {
        const tasksCollection: Collection | void = await MongoHelper.getCollection('tasks')
        const result =  tasksCollection.find().toArray()
        return result
    }
}