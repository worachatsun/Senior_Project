import { CLOSE_MODAL, MODAL_CONTENT } from './types'

export const closeModal = ({ prop, value }) => {
    return {
        type: CLOSE_MODAL,
        payload: { prop, value }
    }
}

export const modalContent = content => {
    return {
        type: MODAL_CONTENT,
        payload: content
    }
}