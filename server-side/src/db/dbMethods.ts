import { Collection, MongoClient } from 'mongodb'
import { env } from '../env'


type DbParams = {
    url: string
    user: string,
    pwd: string
}

export const MongoHelper = {
    client: null as unknown as MongoClient | null,
    propsConnection: null as unknown as DbParams,

    async connect(paramsDB: DbParams): Promise<void> {
        this.propsConnection = paramsDB
        this.client = await MongoClient.connect(paramsDB.url, {
            auth: {
                user: paramsDB.user,
                password: paramsDB.pwd
            },
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    },

    async disconnect(): Promise<void> {
        await this.client?.close()
        this.client = null
    },

    async getCollection(name: string): Promise<Collection | void> {
        if (!this.client?.isConnected()) {
            await this.connect(env.dbConnection)
        }

        if (this.client) {
            return this.client.db().collection(name)
        }
    },


}