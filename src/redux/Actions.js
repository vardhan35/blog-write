import * as actionTypes from "./ActionTypes";

export const addTitle = (title) => {
  return {
    type: actionTypes.ADD_TITLE,
    payload: title,
  };
};
export const addParagraph = (paragraph) => {
  return {
    type: actionTypes.ADD_PARAGRAPH,
    payload: paragraph,
  };
};
export const addSubTitle = (subTitle) => {
  return {
    type: actionTypes.ADD_SUBTITLE,
    payload: subTitle,
  };
};
export const addImage = (image) => {
  return {
    type: actionTypes.ADD_IMAGE,
    payload: image,
  };
};
export const addCode = (code) => {
  return {
    type: actionTypes.ADD_CODE,
    payload: code,
  };
};
