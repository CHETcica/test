import reduxType from '../config/reduxType';
import api from '../api';


// export const fetchRandomPhoto = () => async (dispatch) => {
//   let users = localStorage.getItem("users")
//   if(!users){
//     const res = await api.get('/user/showuser', {
//     });
//     localStorage.setItem("users", JSON.stringify(res.data))
//     users = localStorage.getItem("users")
//   }
//   // console.log(users);
//   dispatch({ type: reduxType.FETCH_SEARCH_USER, payload: JSON.parse(users) })
// };

export const fetchRandomPhoto = () => async (dispatch) => {
  const res = await api.get('/user/showuser');
  console.log(res.data);
dispatch({ type: reduxType.FETCH_SEARCH_USER, payload: res.data })
};