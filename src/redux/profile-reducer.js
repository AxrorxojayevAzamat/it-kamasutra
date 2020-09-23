import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_MAIN_PHOTO = "SAVE_MAIN_PHOTO";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "What's up guys?", likesCount: 14},
        {id: 4, message: "It's going well", likesCount: 13},
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: action.newPost,
                likesCount: Math.floor(Math.random() * 101)
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case SET_STATUS:
            return {...state, status: action.status}

        case SAVE_MAIN_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photo}}

        default:
            return state;
    }
}
export default profileReducer;

export const addPostActionCreator = (newPost) => ({type: ADD_POST, newPost});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const setStatus = status => ({type: SET_STATUS, status});
export const savePhotoSuccess = photo => ({type: SAVE_MAIN_PHOTO, photo});

export const getProfile = userId => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)

    dispatch(setStatus(response.data))

}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    } else if (response.data.resultCode === 1) {
        dispatch(setStatus(response.data.messages))
    }
}

export const updateMainPhoto = (photo) => async (dispatch) => {
    let response = await profileAPI.updatePhoto(photo)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    let userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId))
    } else {
        dispatch(stopSubmit("profile-edit", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}
