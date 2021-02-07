import faker from 'faker'
import { DraggableType, DroppableType } from '../types'


const generateCards = (amount: number): DraggableType[] => {
    const fakeCards = [];
    for (let i = 0; i < amount; i++) {
        fakeCards.push({
            cardIcon: faker.image.imageUrl(),
            email: faker.internet.email(),
            user: faker.name.firstName(),
            title: faker.random.words(2)
        })
    }

    return fakeCards
}

export const Droppable: DroppableType[] = [
    {
        title: 'To do',
        cards: generateCards(8)
    },
    {
        title: 'Doing',
        cards: generateCards(6)
    },
    {
        title: 'Done',
        cards: generateCards(3)
    },
]



