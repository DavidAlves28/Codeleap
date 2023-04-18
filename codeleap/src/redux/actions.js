import axios from 'axios';
import  * as types from './actionType'

const getCarrers = (users)=>({
    type: types.GET_CAREERS,
    payload:users
})
const userDelete =()=>({
    type: types.DELETE_CAREER
})
const createUser =()=>({
    type: types.POST_CAREERS

})
const editUser =()=>({
    type: types.PUT_CAREERS

})


export const loadUsers = ()=>{
    return async function (dispatch) {
        try {
            const response = await axios.get(
              "https://dev.codeleap.co.uk/careers/?limit=10&offset=0"
            );
            // console.log('resp', response);
            dispatch(getCarrers(response.data.results));
          } catch (error) {
            console.log(error);
          }
    }
}

export const deleteCareer = (id)=>{
    return async function (dispatch) {
        try {
            const response = await axios.delete(
              `https://dev.codeleap.co.uk/careers/${id}/`
            );
           console.log('userDelete',response);
            dispatch(userDelete());
            dispatch(loadUsers())
          } catch (error) {
            console.log(error);
          }
    }
}

export const createCareers = (user)=>{
    return async function (dispatch) {
        try {
            const response = await axios.post(
              `https://dev.codeleap.co.uk/careers/`, user
            );
                console.log('createCareers',response);
            dispatch(createUser());
            dispatch(loadUsers())
          } catch (error) {
            console.log(error);
          }
    }
}

export const EditCareer = (id,user)=>{
    return async function (dispatch) {
        try {
            const response = await axios.put(
              `https://dev.codeleap.co.uk/careers/${id}/`,user
            );
           console.log('editUser',response);
            dispatch(editUser());            
          } catch (error) {
            console.log(error);
          }
    }
}
