// TYPES
const types = {
    ADD_DATA_ONE: "ADD_DATA_ONE",
    ADD_DATA_TWO: "ADD_DATA_TWO",
    ADD_DATA_THREE: "ADD_DATA_THREE",
    ADD_DATA: "ADD_DATA",
    UPDATE_DANCER_ONE_NAME: "UPDATE_DANCER_ONE_NAME",
    UPDATE_DANCER_TWO_NAME: "UPDATE_DANCER_TWO_NAME",
    UPDATE_DANCER_THREE_NAME: "UPDATE_DANCER_THREE_NAME",
    // SET_DATA_SUCCESS: "SET_DATA_SUCCESS",
    // SET_DATA_FAILURE: "SET_DATA_FAILURE"
    // UPDATE_LATEST_MOVE: "UPDATE_LATEST_MOVE",
    START_SYNC: "START_SYNC",
    END_SYNC: "END_SYNC",
    TOGGLE_SYNC: "TOGGLE_SYNC"
};

// ACTIONS
const initAddDataOne = (data) => {
    // console.log("ACTIONS initAddDataOne", log);
    return { 
        type: types.ADD_DATA_ONE,
        payload: data
    };
};

const initAddDataTwo = (data) => {
    // console.log("ACTIONS initAddDataTwo");
    return { 
        type: types.ADD_DATA_TWO,
        payload: data
    };
};

const initAddDataThree = (data) => {
    // console.log("ACTIONS initAddDataThree");
    return { 
        type: types.ADD_DATA_THREE,
        payload: data
    };
};

const initAddData = (data) => {
    return { 
        type: types.ADD_DATA,
        payload: data
    };
};

const initUpdateDancerOneName = (name) => {
    return { 
        type: types.UPDATE_DANCER_ONE_NAME,
        payload: name
    };
};

const initUpdateDancerTwoName = (name) => {
    return { 
        type: types.UPDATE_DANCER_TWO_NAME,
        payload: name
    };
};

const initUpdateDancerThreeName = (name) => {
    return { 
        type: types.UPDATE_DANCER_THREE_NAME,
        payload: name
    };
};

const initToggleSync = () => {
    return { 
        type: types.TOGGLE_SYNC,
    };
};

const initEndSync = () => {
    return { 
        type: types.END_SYNC,
    };
};

// const initUpdateLatestMove = (move) => {
//     // console.log("ACTIONS initAddDataThree");
//     return { 
//         type: types.UPDATE_LATEST_MOVE,
//         payload: move
//     };
// };

// const addDataSuccess = repos => {
//     return {
//         type: types.ADD_DATA_SUCCESS,
//         repos
//     };
// };

// const addDataFailure = message => {
//     return {
//         type: types.ADD_DATA_FAILURE,
//         message
//     };
// };

// REDUCER
const dataReducer = (
    state = {
        session: {},
        metadata: {},
        data: [],
        dancerOne: [],
        dancerTwo: [],
        dancerThree:[],
        // latestMove: '',
    } , 
    action) => {
        switch (action.type) {
            case types.ADD_DATA_ONE: {
                return { 
                    ...state,
                    dancerOne: [...state.dancerOne, action.payload]
                };
            }
            case types.ADD_DATA_TWO: {
                return { 
                    ...state,
                    dancerTwo: [...state.dancerTwo, action.payload]
                };
            }
            case types.ADD_DATA_THREE: {
                return { 
                    ...state, 
                    dancerThree: [...state.dancerThree, action.payload]
                };
            }
            case types.ADD_DATA: {
                return { 
                    ...state, 
                    data: [...state.data, action.payload]
                };
            }
            case types.UPDATE_DANCER_ONE_NAME: {
                return { 
                    ...state, 
                    metadata: {
                        ...state.metadata, 
                        dancerNames: {
                            ...state.metadata.dancerNames, 
                            1: action.payload
                        }
                    }
                };
            }
            case types.UPDATE_DANCER_TWO_NAME: {
                return { 
                    ...state, 
                    metadata: {
                        ...state.metadata, 
                        dancerNames: {
                            ...state.metadata.dancerNames, 
                            2: action.payload
                        }
                    }
                };
            }
            case types.UPDATE_DANCER_THREE_NAME: {
                return { 
                    ...state, 
                    metadata: {
                        ...state.metadata, 
                        dancerNames: {
                            ...state.metadata.dancerNames, 
                            3: action.payload
                        }
                    }
                };
            }
            case types.TOGGLE_SYNC: {
                return { 
                    ...state, 
                    session: {
                        ...state.session,
                        sync: !state.session.sync,
                    }
                };
            }
            case types.END_SYNC: {
                return { 
                    ...state, 
                    session: {
                        ...state.session,
                        sync: false,
                    }
                };
            }
            // case types.UPDATE_LATEST_MOVE: {
            //     return { 
            //         ...state, 
            //         latestMove: action.payload
            //     };
            // }
            // case types.ADD_DATA_SUCCESS: {
            //     return {
            //         // loading: false,
            //         data: action.repos,
            //         error: ""
            //     };
            // }
            // case types.ADD_DATA_FAILURE: {
            //     return {
            //         // loading: false,
            //         data: [],
            //         error: action.message
            //     };
            // }
            default:
                return state;
        }
};

export const addDataOne = (data) => {
    return function (dispatch) {
        dispatch(initAddDataOne(data));
        // axios
        //     .get("https://api.github.com/users")
        //     .then(res => dispatch(fetchSuccess(res.data)))
        //     .catch(error => dispatch(fetchFailure(error.message)));
    };
};

export const addDataTwo = (data) => {
    return function (dispatch) {
        dispatch(initAddDataTwo(data));
        // axios
        //     .get("https://api.github.com/users")
        //     .then(res => dispatch(fetchSuccess(res.data)))
        //     .catch(error => dispatch(fetchFailure(error.message)));
    };
};

export const addDataThree = (data) => {
    return function (dispatch) {
        dispatch(initAddDataThree(data));
        // axios
        //     .get("https://api.github.com/users")
        //     .then(res => dispatch(fetchSuccess(res.data)))
        //     .catch(error => dispatch(fetchFailure(error.message)));
    };
};

export const addData = (data) => {
    return function (dispatch) {
        dispatch(initAddData(data));
        // axios
        //     .get("https://api.github.com/users")
        //     .then(res => dispatch(fetchSuccess(res.data)))
        //     .catch(error => dispatch(fetchFailure(error.message)));
    };
};

export const updateDancerOneName = (name) => {
    return function (dispatch) {
        dispatch(initUpdateDancerOneName(name));
        // axios
        //     .get("https://api.github.com/users")
        //     .then(res => dispatch(fetchSuccess(res.data)))
        //     .catch(error => dispatch(fetchFailure(error.message)));
    };
};

export const updateDancerTwoName = (name) => {
    return function (dispatch) {
        dispatch(initUpdateDancerTwoName(name));
        // axios
        //     .get("https://api.github.com/users")
        //     .then(res => dispatch(fetchSuccess(res.data)))
        //     .catch(error => dispatch(fetchFailure(error.message)));
    };
};

export const updateDancerThreeName = (name) => {
    return function (dispatch) {
        dispatch(initUpdateDancerThreeName(name));
        // axios
        //     .get("https://api.github.com/users")
        //     .then(res => dispatch(fetchSuccess(res.data)))
        //     .catch(error => dispatch(fetchFailure(error.message)));
    };
};

export const toggleSync = () => {
    return function (dispatch) {
        dispatch(initToggleSync());

    };
};

export const endSync = () => {
    return function (dispatch) {
        dispatch(initEndSync());

    };
};

// export const updateLatestMove = (move) => {
//     return function (dispatch) {
//         dispatch(initUpdateLatestMove(move));
//         // axios
//         //     .get("https://api.github.com/users")
//         //     .then(res => dispatch(fetchSuccess(res.data)))
//         //     .catch(error => dispatch(fetchFailure(error.message)));
//     };
// };

export default dataReducer;
