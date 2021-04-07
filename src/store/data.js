import axios from 'axios';

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

// TYPES
const types = {
    ADD_DATA_ONE: "ADD_DATA_ONE",
    ADD_DATA_TWO: "ADD_DATA_TWO",
    ADD_DATA_THREE: "ADD_DATA_THREE",
    ADD_DATA: "ADD_DATA",
    ADD_SENSOR_DATA_ONE: "ADD_SENSOR_DATA_ONE",
    ADD_SENSOR_DATA_TWO: "ADD_SENSOR_DATA_TWO",
    ADD_SENSOR_DATA_THREE: "ADD_SENSOR_DATA_THREE",
    ADD_EMG_DATA: "ADD_EMG_DATA",
    UPDATE_DANCER_ONE_NAME: "UPDATE_DANCER_ONE_NAME",
    UPDATE_DANCER_TWO_NAME: "UPDATE_DANCER_TWO_NAME",
    UPDATE_DANCER_THREE_NAME: "UPDATE_DANCER_THREE_NAME",
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
    SAVE_POINT: "SAVE_POINT",
    SAVE_POINT_SUCCESS: "SAVE_POINT_SUCCESS",
    SAVE_POINT_FAILURE: "SAVE_POINT_FAILURE",
    MARK_POS_PREDICTION: "MARK_POS_PREDICTION",
    MARK_POS_PREDICTION_SUCCESS: "MARK_POS_PREDICTION_SUCCESS",
    MARK_POS_PREDICTION_FAILURE: "MARK_POS_PREDICTION_FAILURE",
    MARK_MOVE_PREDICTION: "MARK_MOVE_PREDICTION",
    MARK_MOVE_PREDICTION_SUCCESS: "MARK_MOVE_PREDICTION_SUCCESS",
    MARK_MOVE_PREDICTION_FAILURE: "MARK_MOVE_PREDICTION_FAILURE",
    GET_PAST_SESSIONS: "GET_PAST_SESSIONS",
    GET_PAST_SESSIONS_SUCCESS: "GET_PAST_SESSIONS_SUCCESS",
    GET_PAST_SESSIONS_FAILURE: "GET_PAST_SESSIONS_FAILURE",
    GET_PAST_SESSION: "GET_PAST_SESSION",
    GET_PAST_SESSION_SUCCESS: "GET_PAST_SESSION_SUCCESS",
    GET_PAST_SESSION_FAILURE: "GET_PAST_SESSION_FAILURE",
    TOGGLE_DATA_VIEW: "TOGGLE_DATA_VIEW",

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
    // console.log("Adding prediction to store: ", data);
    return { 
        type: types.ADD_DATA,
        payload: data
    };
};

const initAddSensorDataOne = (sensorData) => {
    // console.log("initAddSensorDataOne");
    return { 
        type: types.ADD_SENSOR_DATA_ONE,
        payload: sensorData,
    };
};

const initAddSensorDataTwo = (sensorData) => {
    // console.log("initAddSensorDataTwo");
    return { 
        type: types.ADD_SENSOR_DATA_TWO,
        payload: sensorData,
    };
};

const initAddSensorDataThree = (sensorData) => {
    // console.log("initAddSensorDataThree");
    return { 
        type: types.ADD_SENSOR_DATA_THREE,
        payload: sensorData,
    };
};

const initAddEMGData = (data) => {
    // console.log("initAddEMGData");
    return { 
        type: types.ADD_EMG_DATA,
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

const initSavePoint = () => {
    return { 
        type: types.SAVE_POINT,
    };
};

const savePointSuccess = (averageLag) => {
    return { 
        type: types.SAVE_POINT_SUCCESS,
    };
};

const savePointFailure = () => {
    return { 
        type: types.SAVE_POINT_FAILURE,
    };
};

const initMarkPosPrediction = () => {
    return { 
        type: types.MARK_POS_PREDICTION,
    };
};

const markPosPredictionSuccess = (averageLag) => {
    return { 
        type: types.MARK_POS_PREDICTION_SUCCESS,
    };
};

const markPosPredictionFailure = () => {
    return { 
        type: types.MARK_POS_PREDICTION_FAILURE,
    };
};

const initMarkMovePrediction = () => {
    return { 
        type: types.MARK_MOVE_PREDICTION,
    };
};

const markMovePredictionSuccess = (averageLag) => {
    return { 
        type: types.MARK_MOVE_PREDICTION_SUCCESS,
    };
};

const markMovePredictionFailure = () => {
    return { 
        type: types.MARK_MOVE_PREDICTION_FAILURE,
    };
};

const initGetPastSessions = () => {
    return { 
        type: types.GET_PAST_SESSIONS,
    };
};

const getPastSessionsSuccess = (response) => {
    return { 
        type: types.GET_PAST_SESSIONS_SUCCESS,
        payload: response,
    };
};

const getPastSessionsFailure = () => {
    return { 
        type: types.GET_PAST_SESSIONS_FAILURE,
    };
};
const initGetPastSession = () => {
    return { 
        type: types.GET_PAST_SESSION,
    };
};

const getPastSessionSuccess = (response) => {
    return { 
        type: types.GET_PAST_SESSION_SUCCESS,
        payload: response,
    };
};

const getPastSessionFailure = () => {
    return { 
        type: types.GET_PAST_SESSION_FAILURE,
    };
};
const initToggleDataView = () => {
    return { 
        type: types.TOGGLE_DATA_VIEW,
    };
};

// REDUCER
const dataReducer = (
    state = {
        session: {
            viewPredictionData: false,
        },
        metadata: {},
        data: [],
        sensorData: {
            1: [],
            2: [],
            3: []
        },
        EMGData: [],
        // dancerOne: [],
        // dancerTwo: [],
        // dancerThree:[],
        history: [],
        specificHistory: [],
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
            case types.ADD_SENSOR_DATA_ONE: {
                return { 
                    ...state, 
                    sensorData: {
                        ...state.sensorData, 
                        1: [
                            ...state.sensorData[1],
                            action.payload,
                        ]
                    }
                };
            }
            case types.ADD_SENSOR_DATA_TWO: {
                return { 
                    ...state, 
                    sensorData: {
                        ...state.sensorData, 
                        2: [
                            ...state.sensorData[2],
                            action.payload,
                        ]
                    }
                };
            }
            case types.ADD_SENSOR_DATA_THREE: {
                return { 
                    ...state, 
                    sensorData: {
                        ...state.sensorData, 
                        3: [
                            ...state.sensorData[3],
                            action.payload,
                        ]
                    }
                };
            }
            case types.ADD_EMG_DATA: {
                return { 
                    ...state, 
                    EMGData: [...state.EMGData, action.payload]
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
                return { 
                    ...state, 
                    metadata: {
                        ...state.metadata,
                        startTime: Date.now(),
                    }
                };
            }
            case types.ADD_END_TIME: {
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
            case types.MARK_POS_PREDICTION: {
                return state;
            }
            case types.MARK_POS_PREDICTION_SUCCESS: {
                return state;
            }
            case types.MARK_POS_PREDICTION_FAILURE: {
                return state;
            }
            case types.MARK_MOVE_PREDICTION: {
                return state;
            }
            case types.MARK_MOVE_PREDICTION_SUCCESS: {
                return state;
            }
            case types.MARK_MOVE_PREDICTION_FAILURE: {
                return state;
            }
            case types.GET_PAST_SESSIONS: {
                return state;
            }
            case types.GET_PAST_SESSIONS_SUCCESS: {
                return {
                    ...state,
                    history: action.payload,
                };
            }
            case types.GET_PAST_SESSIONS_FAILURE: {
                return state;
            }
            case types.GET_PAST_SESSION: {
                return state;
            }
            case types.GET_PAST_SESSION_SUCCESS: {
                return {
                    ...state,
                    specificHistory: action.payload,
                };
            }
            case types.GET_PAST_SESSION_FAILURE: {
                return state;
            }
            case types.TOGGLE_DATA_VIEW: {
                // console.log("TOGGLE_DATA_VIEW - dataView: ", state.session.dataView)
                return { 
                    ...state, 
                    session: {
                        ...state.session,
                        dataView: !state.session.dataView
                    }
                };
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

export const addSensorData = (data) => {
    const sensorData = data.slice(0,7);
    // console.log("addSensorData: ", sensorData);
    return function (dispatch) {
        if (data[7] === "1") {
            dispatch(initAddSensorDataOne(sensorData));
        }
        if (data[7] === "2") {
            dispatch(initAddSensorDataTwo(sensorData));
        }
        if (data[7] === "3") {
            dispatch(initAddSensorDataThree(sensorData));
        }

    }
};

export const addEMGData = (data) => {
    return function (dispatch) {
        dispatch(initAddEMGData(data));
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

export const saveDancerNames = (metadata, sessionId) => {
    return function (dispatch) {
        dispatch(getNewSessionId);
        dispatch(initSaveDancerNames());

        axios
            .post(
                "http://localhost:3001/savedancernames",
                null,
                { params: {
                    "dancer1": metadata.dancerNames && metadata.dancerNames[1] ? metadata.dancerNames[1] : "Dancer 1",
                    "dancer2": metadata.dancerNames && metadata.dancerNames[2] ? metadata.dancerNames[2] : "Dancer 2",
                    "dancer3": metadata.dancerNames && metadata.dancerNames[3] ? metadata.dancerNames[3] : "Dancer 3",
                    "id": sessionId
                }}
            )
            .then(res => dispatch(saveDancerNamesSuccess(res.data['response'])))
            .catch(error => dispatch(saveDancerNamesFailure(error.message)));
    };
};

export const savePoint = (data, sessionId) => {
    return function (dispatch) {
        dispatch(initSavePoint());
        axios
            .post(
                "http://localhost:3001/savepoint",
                null,
                { params: {
                    "data": data,
                    "id": sessionId
                }}
            )
            .then(res => dispatch(savePointSuccess(res.data['response'])))
            .catch(error => dispatch(savePointFailure(error.message)));
    };
};

export const markPosPrediction = (data, sessionId, accuratePos) => {
    return function (dispatch) {
        dispatch(initMarkPosPrediction());
        axios
            .post(
                "http://localhost:3001/markposprediction",
                null,
                { params: {
                    "timestamp": data[0],
                    "id": sessionId,
                    "accuratePos": accuratePos,
                }}
            )
            .then(res => dispatch(markPosPredictionSuccess(res.data['response'])))
            .catch(error => dispatch(markPosPredictionFailure(error.message)));
    };
};

export const markMovePrediction = (data, sessionId, accurateMov) => {
    return function (dispatch) {
        dispatch(initMarkMovePrediction());
        axios
            .post(
                "http://localhost:3001/markmoveprediction",
                null,
                { params: {
                    "timestamp": data[0],
                    "id": sessionId,
                    "accurateMov": accurateMov,
                }}
            )
            .then(res => dispatch(markMovePredictionSuccess(res.data['response'])))
            .catch(error => dispatch(markMovePredictionFailure(error.message)));
    };
};

export const getPastSessions = () => {
    return function (dispatch) {
        dispatch(initGetPastSessions());
        axios
            .get("http://localhost:3001/pastsessions")
            .then(res => dispatch(getPastSessionsSuccess(res.data['response'])))
            .catch(error => dispatch(getPastSessionsFailure(error.message)));
    };
};

export const getPastSession = (sessionId) => {
    return function (dispatch) {
        dispatch(initGetPastSession());
        axios
        .get(
            "http://localhost:3001/pastsession",
            { params: {
                "id": sessionId,
            }}
        )
            .then(res => dispatch(getPastSessionSuccess(res.data['response'])))
            .catch(error => dispatch(getPastSessionFailure(error.message)));
    };
};

export const toggleDataView = () => {
    return function (dispatch) {
        dispatch(initToggleDataView());

    };
};

export default dataReducer;
