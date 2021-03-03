import axios from 'axios';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

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
    // START_SYNC: "START_SYNC",
    // END_SYNC: "END_SYNC",
    TOGGLE_SYNC: "TOGGLE_SYNC",
    ADD_START_TIME: "ADD_START_TIME",
    ADD_END_TIME: "ADD_END_TIME",
    GET_NEW_SESSION_ID: "GET_NEW_SESSION_ID",
    GET_NEW_SESSION_ID_SUCCESS: "GET_NEW_SESSION_ID_SUCCESS",
    GET_NEW_SESSION_ID_FAILURE: "GET_NEW_SESSION_ID_FAILURE",
    GET_AVERAGE_ACCURACY: "GET_AVERAGE_ACCURACY",
    GET_AVERAGE_ACCURACY_SUCCESS: "GET_AVERAGE_ACCURACY_SUCCESS",
    GET_AVERAGE_ACCURACY_FAILURE: "GET_AVERAGE_ACCURACY_FAILURE",
    GET_AVERAGE_LAG: "GET_AVERAGE_LAG",
    GET_AVERAGE_LAG_SUCCESS: "GET_AVERAGE_LAG_SUCCESS",
    GET_AVERAGE_LAG_FAILURE: "GET_AVERAGE_LAG_FAILURE",
    SAVE_DANCER_NAMES: "SAVE_DANCER_NAMES",
    SAVE_DANCER_NAMES_SUCCESS: "SAVE_DANCER_NAMES_SUCCESS",
    SAVE_DANCER_NAMES_FAILURE: "SAVE_DANCER_NAMES_FAILURE",
};

// ACTIONS
const initAddDataOne = (data) => {
    return { 
        type: types.ADD_DATA_ONE,
        payload: data
    };
};

const initAddDataTwo = (data) => {
    return { 
        type: types.ADD_DATA_TWO,
        payload: data
    };
};

const initAddDataThree = (data) => {
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

const initAddStartTime = () => {
    return { 
        type: types.ADD_START_TIME,
    };
};

const initAddEndTime = () => {
    return { 
        type: types.ADD_END_TIME,
    };
};

const initGetNewSessionId = () => {
    return { 
        type: types.GET_NEW_SESSION_ID,
    };
};

const getNewSessionIdSuccess = (id) => {
    return { 
        type: types.GET_NEW_SESSION_ID_SUCCESS,
        payload: id,
    };
};

const getNewSessionIdFailure = () => {
    return { 
        type: types.GET_NEW_SESSION_ID_FAILURE,
    };
};

const initGetAverageAccuracy = () => {
    return { 
        type: types.GET_NEW_SESSION_ID,
    };
};

const getAverageAccuracySuccess = (averageAccuracy) => {
    return { 
        type: types.GET_AVERAGE_ACCURACY_SUCCESS,
        payload: averageAccuracy,
    };
};

const getAverageAccuracyFailure = () => {
    return { 
        type: types.GET_AVERAGE_ACCURACY_FAILURE,
    };
};

const initGetAverageLag = () => {
    return { 
        type: types.GET_AVERAGE_LAG,
    };
};

const getAverageLagSuccess = (averageLag) => {
    return { 
        type: types.GET_AVERAGE_LAG_SUCCESS,
        payload: averageLag,
    };
};

const getAverageLagFailure = () => {
    return { 
        type: types.GET_AVERAGE_LAG_FAILURE,
    };
};

const initSaveDancerNames = () => {
    return { 
        type: types.SAVE_DANCER_NAMES,
    };
};

const saveDancerNamesSuccess = (averageLag) => {
    return { 
        type: types.SAVE_DANCER_NAMES_SUCCESS,
    };
};

const saveDancerNamesFailure = () => {
    return { 
        type: types.SAVE_DANCER_NAMES_FAILURE,
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
            case types.ADD_START_TIME: {
                // console.log("Start: ", Date.now())
                return { 
                    ...state, 
                    metadata: {
                        ...state.metadata,
                        startTime: Date.now(),
                    }
                };
            }
            case types.ADD_END_TIME: {
                // console.log("End: ", Date.now())
                return { 
                    ...state, 
                    metadata: {
                        ...state.metadata,
                        endTime: Date.now(),
                    }
                };
            }
            case types.GET_NEW_SESSION_ID: {
                return state;
            }
            case types.GET_NEW_SESSION_ID_SUCCESS: {
                return { 
                    ...state, 
                    metadata: {
                        ...state.metadata,
                        sessionId: action.payload,
                    }
                };
            }
            case types.GET_NEW_SESSION_ID_FAILURE: {
                return state;
            }
            case types.GET_AVERAGE_ACCURACY: {
                return state;
            }
            case types.GET_AVERAGE_ACCURACY_SUCCESS: {
                console.log("overallAverageAccuracy: ", action.payload)
                return { 
                    ...state, 
                    metadata: {
                        ...state.metadata,
                        overallAverageAccuracy: action.payload,
                    }
                };
            }
            case types.GET_AVERAGE_ACCURACY_FAILURE: {
                return state;
            }
            case types.GET_AVERAGE_LAG: {
                return state;
            }
            case types.GET_AVERAGE_LAG_SUCCESS: {
                console.log("overallAverageLag: ", action.payload)
                return { 
                    ...state, 
                    metadata: {
                        ...state.metadata,
                        overallAverageLag: action.payload,
                    }
                };
            }
            case types.GET_AVERAGE_LAG_FAILURE: {
                return state;
            }
            case types.SAVE_DANCER_NAMES: {
                return state;
            }
            case types.SAVE_DANCER_NAMES_SUCCESS: {
                return state;
            }
            case types.SAVE_DANCER_NAMES_FAILURE: {
                return state;
            }
            default:
                return state;
        }
};

export const addDataOne = (data) => {
    return function (dispatch) {
        dispatch(initAddDataOne(data));
    };
};

export const addDataTwo = (data) => {
    return function (dispatch) {
        dispatch(initAddDataTwo(data));
    };
};

export const addDataThree = (data) => {
    return function (dispatch) {
        dispatch(initAddDataThree(data));
    };
};

export const addData = (data) => {
    return function (dispatch) {
        dispatch(initAddData(data));
    };
};

export const updateDancerOneName = (name) => {
    return function (dispatch) {
        dispatch(initUpdateDancerOneName(name));
    };
};

export const updateDancerTwoName = (name) => {
    return function (dispatch) {
        dispatch(initUpdateDancerTwoName(name));
    };
};

export const updateDancerThreeName = (name) => {
    return function (dispatch) {
        dispatch(initUpdateDancerThreeName(name));
    };
};

export const toggleSync = () => {
    return function (dispatch) {
        dispatch(initToggleSync());

    };
};

export const addStartTime = () => {
    return function (dispatch) {
        dispatch(initAddStartTime());

    };
};

export const addEndTime = () => {
    return function (dispatch) {
        dispatch(initAddEndTime());

    };
};

export const getNewSessionId = () => {
    return function (dispatch) {
        dispatch(initGetNewSessionId());
        axios
            .get("http://localhost:3001/newsession")
            .then(res => dispatch(getNewSessionIdSuccess(res.data['response'])))
            .catch(error => dispatch(getNewSessionIdFailure(error.message)));
    };
};

export const getOverallAverageAccuracy = () => {
    return function (dispatch) {
        dispatch(initGetAverageAccuracy());
        axios
            .get("http://localhost:3001/overallaverageaccuracy")
            .then(res => dispatch(getAverageAccuracySuccess(res.data['response'])))
            .catch(error => dispatch(getAverageAccuracyFailure(error.message)));
    };
};

export const getOverallAverageLag = () => {
    return function (dispatch) {
        dispatch(initGetAverageLag());
        axios
            .get("http://localhost:3001/overallaveragelag")
            .then(res => dispatch(getAverageLagSuccess(res.data['response'])))
            .catch(error => dispatch(getAverageLagFailure(error.message)));
    };
};

export const saveDancerNames = (metadata) => {
    return function (dispatch) {
        dispatch(getNewSessionId);
        dispatch(initSaveDancerNames());
        axios
            .post(
                "http://localhost:3001/savedancernames",
                {
                    "dancer1": metadata.dancerNames[1],
                    "dancer2": metadata.dancerNames[2],
                    "dancer3": metadata.dancerNames[3],
                    "id": metadata.sessionId
                }
            )
            .then(res => dispatch(saveDancerNamesSuccess(res.data['response'])))
            .catch(error => dispatch(saveDancerNamesFailure(error.message)));
    };
};

export default dataReducer;
