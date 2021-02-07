import faker from 'faker'
import { DraggableType, DroppableType } from '../types'


const generateCards = (amount: number): DraggableType[] => {
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

export const Droppable: DroppableType[] = [
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
]



