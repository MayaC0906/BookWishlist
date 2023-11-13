// import { toyService } from "../../services/toy.service.js"
// import { ADD_TOY, ADD_TOY_MSG, REMOVE_TOY, SET_FILTER_BY, SET_TOYS, UPDATE_TOY } from "../reducers/toy.reducer.js"
// import { store } from '../store.js'

// export async function loadToys() {
//     const { filterBy } = store.getState().toyModule
//     try {
//         const toys = await toyService.query(filterBy)
//         console.log(toys);
//         store.dispatch({ type: SET_TOYS, toys })
//         return toys

//     }
//     catch (err) {
//         console.log('toy action -> Cannot load toys', err)
//         throw err
//     }
// }

// export async function removeToy(toyId) {
//     try {
//         await toyService.remove(toyId)
//         store.dispatch({ type: REMOVE_TOY, toyId })

//     } catch (err) {
//         console.log('toy action -> Cannot remove toy', err)
//         throw err
//     }
// }

// export async function addToy(toyToAdd) {
//     try {
//         const savedToy = await toyService.save(toyToAdd)
//         store.dispatch({ type: ADD_TOY, toy: savedToy })
//     } catch (err) {
//         console.log('Cannot add toy', err)
//         throw err
//     }
// }

// export async function updateToy(toyToUpdate) {
//     try {
//         const savedToy = await toyService.save(toyToUpdate)
//         store.dispatch({ type: UPDATE_TOY, toy: savedToy })
//     } catch(err) {
//         console.log('Cannot update toy', err)
//         throw err
//     }
// }

// export function setFilter(newFilter) {
//     store.dispatch({ type: SET_FILTER_BY, filterBy: newFilter })
// }

// export async function addToyMsg(msg, toyId) {
//     await toyService.addToyMsg(msg, toyId)
//     store.dispatch({ type: ADD_TOY_MSG, toyId, msg})
// }

