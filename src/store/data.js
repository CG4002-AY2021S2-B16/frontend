// TYPES
const types = {
    ADD_DATA_ONE: "ADD_DATA_ONE",
    ADD_DATA_TWO: "ADD_DATA_TWO",
    ADD_DATA_THREE: "ADD_DATA_THREE",
    ADD_DATA: "ADD_DATA",
    // SET_DATA_SUCCESS: "SET_DATA_SUCCESS",
    // SET_DATA_FAILURE: "SET_DATA_FAILURE"
    // UPDATE_LATEST_MOVE: "UPDATE_LATEST_MOVE",
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
