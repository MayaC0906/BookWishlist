import { httpService } from './http.service.js'

const BASE_URL = 'review/'


export const reviewService = {
    query,
    save,
    getReviewFilter
}

function query(filterBy) {
    return httpService.get(BASE_URL, filterBy)
}

function save(review) {
    return httpService.post(BASE_URL, review)
}

function getReviewFilter() {
    return ({byUserId:'', aboutToy:''})
}