import { store } from "./store"

export const getRedux = ()=>{
    const dispatch = store.dispatch;
    const getState = store.getState();

    return {dispatch, getState};
}