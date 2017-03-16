import { CLOSE_MODAL } from './types'

export const closeModal = ({ prop, value }) => {
    return {
        type: CLOSE_MODAL,
        payload: { prop, value }
    }
}