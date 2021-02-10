import faker from 'faker'
import { Collection } from 'mongodb'
import { CardTasks, ColumnTasks } from '../../types'
import { MongoHelper } from '../dbMethods'


(async () => {
    const generateCards = (amount: number): CardTasks[] => {
        const fakeCards = [];
        for (let i = 0; i < amount; i++) {
            fakeCards.push({
                cardIcon: faker.image.imageUrl(),
                email: faker.internet.email(),
                id: faker.random.number(),
                user: faker.name.firstName(),
                title: faker.random.words(2)
            })
        }

        return fakeCards
    }

    const columnWithFakeTasks: ColumnTasks[] = [[
        [{
            cards: generateCards(8),
            droppableId: 0,
            title: 'To Do'
        }],
        [{
            cards: generateCards(6),
            droppableId: 1,
            title: 'Doing',
        }],
        [{
            cards: generateCards(10),
            droppableId: 2,
            title: 'Done',
        }],
    ]]


    const tasksCollection: Collection = await MongoHelper.getCollection('tasks')

    if (tasksCollection) {
        columnWithFakeTasks[0].forEach(async column => {
            const result = await tasksCollection.insertMany(column)
            console.log(result.ops[0])
        })
    }

})()



