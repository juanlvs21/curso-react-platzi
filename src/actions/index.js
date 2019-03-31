import {OPEN_MODAL, CLOSE_MODAL, SEARCH_ENTITIES, IS_LOADING } from '../actions-type/index';

export function openModal(mediaId) {
    return {
        type: OPEN_MODAL,
        payload: {
            mediaId
        }
    }
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    }
}


export function searchEntities(query) {
    return {
        type: SEARCH_ENTITIES,
        payload: {
          query
        }
    }
}

export function isLoading(value) {
    return {
        type: IS_LOADING,
        payload: {
            value
        }
    }
}

export function searchAsyncEntities(query) {
    return (dispatch) => {
        // Aqui irian las peticiones asincronas a una api, dispatch se devuelve en el callback de la peticion

        dispatch(isLoading(true));

        setTimeout(() => {
            dispatch(isLoading(false));
            dispatch(searchEntities(query)) 
        }, 5000);
    }
}
