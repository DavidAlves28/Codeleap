import axios from "axios";
import * as types from "./actionType";

const getCarrers = (users) => ({
  type: types.GET_CAREERS,
  payload: users,
});
const userDelete = () => ({
  type: types.DELETE_CAREER,
});
const createUser = () => ({
  type: types.POST_CAREERS,
});
const editUser = () => ({
  type: types.PUT_CAREERS,
});

// get all posts
export const loadUsers = () => {
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
  };
};
 // delete post
export const deleteCareer = (id) => {
  return async function (dispatch) {
    try {
      await axios.delete(`https://dev.codeleap.co.uk/careers/${id}/`);

      dispatch(userDelete());
      dispatch(loadUsers());
    } catch (error) {
      console.log(error);
    }
  };
};


// create post
export const createCareers = (user) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `https://dev.codeleap.co.uk/careers/`,
        user
      );
      console.log("createCareers", response);
      dispatch(createUser());
      dispatch(loadUsers());
    } catch (error) {
      console.log(error);
    }
  };
};

// update post
export const EditCareer = (id, user) => {
  return async function (dispatch) {
    try {
      await axios.put(`https://dev.codeleap.co.uk/careers/${id}/`, user);

      dispatch(editUser());
      dispatch(loadUsers());
    } catch (error) {
      console.log(error);
    }
  };
};
