
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'bookDB'
export const bookService = {
    query,
    getById,
    save,
    remove,
}

window.bs = bookService


async function query() {
    let books = utilService.loadFromStorage(STORAGE_KEY)
    if (!books || !books.length) utilService.saveToStorage(STORAGE_KEY, booksData)
    books = await storageService.query(STORAGE_KEY)
    return books
}


async function getById(bookId) {
    return storageService.get(STORAGE_KEY, bookId)
}

async function remove(bookId) {
    console.log('from service:', bookId);
    await storageService.remove(STORAGE_KEY, bookId)
}

async function save(book) {
    var savedBook
    if (book.id) {
        savedBook = await storageService.put(STORAGE_KEY, book)
    } else {
        savedBook = await storageService.post(STORAGE_KEY, book)
    }
    return savedBook
}

// function getEmptyGroup() {
//     return {
//             title: '',
//             "description: "Written in 1936 when Amado was twenty-four years old, Sea of Death tells the dockside tales of Bahia. Sailors and their wives, steeped in the rich mythology surrounding the goddess Iemanj?, are at the heart of this novel, a lyrical and tragic portrayal of the workers� daily struggle for survival. Sea of Death narrates the story of Guma and L?via, lovers whose triumphs and tribulations mirror the dark imperatives of the world around them.",
//             "rating": "4.2",
//             "author": "Jorge Amado",
//             "price": "16.35"
// }
// }

const booksData = [
    {
        "id": utilService.makeId(),
        "title": "Sea of Death",
        "description": "Written in 1936 when Amado was twenty-four years old, Sea of Death tells the dockside tales of Bahia. Sailors and their wives, steeped in the rich mythology surrounding the goddess Iemanj?, are at the heart of this novel, a lyrical and tragic portrayal of the workers� daily struggle for survival. Sea of Death narrates the story of Guma and L?via, lovers whose triumphs and tribulations mirror the dark imperatives of the world around them.",
        "rating": "4.2",
        "isWishlisted": true,
        "author": "Jorge Amado",
        "price": "16.35"
    },
    {
        "id": utilService.makeId(),
        "title": "The Day Lasts More than a Hundred Years",
        "description": "Set in the vast windswept Central Asian steppes and the infinite reaches of galactic space, this powerful novel offers a vivid view of the culture and values of the Soviet Union�s Central Asian peoples.",
        "rating": "4.5",
        "isWishlisted": true,
        "author": "Chingiz Aitmatov",
        "price": "24"
    },
    {
        "id": utilService.makeId(),
        "title": "The Element of Surprise: Navy SEALS in Vietnam",
        "description": "t used to be said that the night belonged to Charlie. But that wasn't true where SEALs patrolled. For six months in 1970, fourteen men in Juliett Platoon of the Navy's SEAL Team One--incuding the author--carried out over a hundred missions in the Mekong Delta without a single platoon fatality. Their primary mission: kidnap enemy soldiers--alive--for interrogation.",
        "rating": "4.3",
        "isWishlisted": false,
        "author": "Darryl Young",
        "price": "7.99"
    },
    {
        "id": utilService.makeId(),
        "title": "The Hobbit",
        "description": "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon. Bilbo reluctantly joins their quest, unaware that on his journey to the Lonely Mountain he will encounter both a magic ring and a frightening creature known as Gollum.",
        "rating": "4.7",
        "isWishlisted": false,
        "author": "J.R.R. Tolkien",
        "price": "10.63"
    },
    {
        "id": utilService.makeId(),
        "title": "Only a Whisper",
        "description": "Called in the night to transcribe the bedridden confession of a dying man, federal agent Rae Phillips lost her heart to a voice in the darkness, a hero whose face she never saw�",
        "rating": "2.1",
        "isWishlisted": false,
        "author": "Gayle Wilson",
        "price": "2.78"
    },
    {
        "id": utilService.makeId(),
        "title": "Autobiography of a Yogi",
        "description": "Autobiography of a Yogi is at once a beautifully written account of an exceptional life and a profound introduction to the ancient science of Yoga and its time-honored tradition of meditation",
        "rating": "4.6",
        "isWishlisted": true,
        "author": "Paramahansa Yogananda",
        "price": "18"
    },
    {
        "id": utilService.makeId(),
        "title": "Out There",
        "description": "Out There is a celebration of books that have a made a difference in our lives.",
        "rating": "3.2",
        "isWishlisted": true,
        "author": "Sarah Stark",
        "price": "10.14"
    },
    {
        "id": utilService.makeId(),
        "title": "Crafting with Cat Hair: Cute Handicrafts to Make with Your Cat",
        "description": "Got fur balls?",
        "rating": "3.6",
        "isWishlisted": false,
        "author": "Kaori Tsutaya",
        "price": "9.97"
    },
    {
        "id": utilService.makeId(),
        "title": "The Yiddish Policemen's Union Kindle Edition",
        "description": "Set in the Jewish homeland of � Alaska, this is a brilliantly original novel from Michael Chabon, author of THE ADVENTURES OF KAVALIER & CLAY and WONDER BOYS.",
        "rating": "3.7",
        "isWishlisted": false,
        "author": "Michael Chabon",
        "price": "21.33"
    },
    {
        "id": utilService.makeId(),
        "title": "One More Day",
        "description": "Carrie Morgan's son disappears. Rumors start to circulate through Carrie's small town. Her husband and friends start to think she's crazy. As the investigation heats up, Carrie must decide what to share, and why.",
        "rating": "3.1",
        "isWishlisted": true,
        "author": "Kelly Simmons",
        "price": "25.82"
    },
    {
        "id": utilService.makeId(),
        "title": "The Laundry Room",
        "description": "The Laundry Room dramatizes a fascinating moment in the history of the founding of Israel as a self-ruling nation.",
        "rating": "4",
        "isWishlisted": true,
        "author": "Lynda Lippman-Lockhart",
        "price": "17.5"
    }
]
