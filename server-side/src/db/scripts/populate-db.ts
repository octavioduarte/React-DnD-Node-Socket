import faker from 'faker'
import { Collection } from 'mongodb'
import { cardsData } from './titleCards'
import { CardTasks, ColumnTasks } from '../../types'
import { MongoHelper } from '../dbMethods'


(async () => {
    const generateCards = (startCountFrom: number): CardTasks[] => {
        const fakeCards = []
        for (let i = startCountFrom - 7; i < startCountFrom; i++) {
            const card = cardsData[i];
            fakeCards.push({
                cardIcon: card.cardIcon,
                email: `${card.user.toLowerCase}@server.com`,
                id: i,
                user: card.user,
                title: card.title
            })
        }

        return fakeCards
    }

    const columnWithFakeTasks: ColumnTasks[] = [[
        [{
            cards: generateCards(7),
            droppableId: 0,
            title: 'To Do'
        }],
        [{
            cards: generateCards(15),
            droppableId: 1,
            title: 'Doing',
        }],
        [{
            cards: generateCards(24),
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



