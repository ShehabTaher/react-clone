
// export const fetchDataStart = () => ({
//     type: 'FETCH_DATA_START',
// });

// export const fetchDataSuccess = (data) => ({
//     type: 'FETCH_DATA_SUCCESS',
//     payload: data,
// });

// export const fetchDataFailure = (error) => ({
//     type: 'FETCH_DATA_FAILURE',
//     payload: error,
// });

// export const fetchData = () => {
//     return (dispatch) => {
//         dispatch(fetchDataStart());
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then((response) => response.json())
//             .then((data) => dispatch(fetchDataSuccess(data)))
//             .catch((error) => dispatch(fetchDataFailure(error)));
//     };
// };
