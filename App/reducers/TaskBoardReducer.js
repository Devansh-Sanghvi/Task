import {
  ON_CHANGE_ITEM,
  ON_ADD_ITEM,
  SET_DROP_ZONES,
  ON_DROP,
  SET_VIEW_STYLE,
  SET_DATA
} from '../actions/types'
import storage from '../storage'

const data =[{name:'Jerry',items:[{key:1,value:'a'},{key:2,value:'sad'}],overflow:'hidden',zIndex:0},
             {name:'Tom',items:[{key:1,value:'a'},{key:2,value:'bad'}],overflow:'hidden',zIndex:0},
             {name:'Dev',items:[{key:1,value:'a'},{key:2,value:'as'}],overflow:'hidden',zIndex:0},
             {name:'Nirav',items:[{key:1,value:'aa'},{key:2,value:'ass'}],overflow:'hidden',zIndex:0}]

const INITIAL_STATE = {
  data:!storage.getCachedDetail(1)?data:storage.getCachedDetail(1),
  dropZones:{}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {


    case ON_CHANGE_ITEM:
      return { ...state,
        data: action.payload.slice(0)
      }
      break;

    case ON_ADD_ITEM:
      return { ...state,
        data: action.payload.slice(0)
      }
      break;

    case ON_DROP:
      return { ...state,
        data: action.payload.slice(0)
      }
      break;

      case SET_VIEW_STYLE:
        return { ...state,
          data: action.payload.slice(0)
        }
        break;


    case SET_DROP_ZONES:
      return { ...state,
        dropZones: action.payload
      }
      break;

    default:
      return INITIAL_STATE;
      break;

  }


}
