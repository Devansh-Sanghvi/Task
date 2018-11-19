import {
  ON_ADD_ITEM,
  ON_CHANGE_ITEM,
  SET_DROP_ZONES,
  ON_DROP,
  SET_VIEW_STYLE,
  SET_DATA
} from './types';
import _ from 'lodash';
import storage from '../storage'


export const onChangeItem = (data, boardIndex, itemIndex, value) => {
  data[boardIndex].items[itemIndex].value = value
 storage.updateDetails(1,data);
  return (dispatch) => {
    dispatch({
      type: ON_CHANGE_ITEM,
      payload: data
    });
  }
};

export const setViewStyle = (data, flatListOrder, zIndex, overflow) => {
  data[flatListOrder].overflow = overflow
  data[flatListOrder].zIndex = zIndex


  return (dispatch) => {
    dispatch({
      type: SET_VIEW_STYLE,
      payload: data
    });
  }
};



export const onAddItem = (data, boardIndex) => {
  if (data[boardIndex].items[0]) {
    data[boardIndex].items.push({
      value: '',
      key: data[boardIndex].items[data[boardIndex].items.length - 1].key + 1,
    })
  } else {
    data[boardIndex].items.push({
      value: '',
      key:1,
    })
  }
  storage.updateDetails(1,data);
  return (dispatch) => {
    dispatch({
      type: ON_ADD_ITEM,
      payload: data
    });
  }
};

export const onDrop = (data, flatListOrder, index, item, dropZoneId) => {

  dat = data[flatListOrder].items.filter(function(i) {
    return i != item
  });

  data[flatListOrder].items = dat.slice(0)
  if (data[dropZoneId].items[0]) {
    item.key = data[dropZoneId].items[data[dropZoneId].items.length - 1].key + 1
  } else {
    item.key = 1
  }
  data[dropZoneId].items.push(item)
  storage.updateDetails(1,data.slice(0));
  return (dispatch) => {
    dispatch({
      type: ON_DROP,
      payload: data
    });
  }
};

export const setdropZones = (dropZones) => {


  return (dispatch) => {
    dispatch({
      type: SET_DROP_ZONES,
      payload: dropZones
    });
  }
};
