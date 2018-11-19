import Realm, {
  ObjectSchema
} from 'realm'
import _ from 'lodash';


class Item {
  static get() {
    return realm.objects(Item.schema.name)
  }
  static schema = {
    name: 'Item',
    properties: {
      key: 'int',
      value: 'string',
    }
  }
}

class Person {
  static get() {
    return realm.objects(Person.schema.name)
  }
  static schema = {
    name: 'Person',
    properties: {
      name: 'string',
      overflow: 'string',
      zIndex: 'int',
      items: {
        type: 'list',
        objectType: 'Item'
      },
    }
  }
}



class PersonDetailsList {
  static get() {

    return realm.objects(PersonDetailsList.schema.name)
  }
  static schema = {
    name: 'PersonDetailsList',
    primaryKey: 'id',
    properties: {
      id: {
        type: 'int'
      },

      personDetailLists: {
        type: 'list',
        objectType: 'Person'
      },
    }
  }
}


export const getCachedDetails = () => {

  var CachedDetailsArr = Array();

  try {
    cachedDetail = realm.objects(PersonDetailsList.schema.name)[0].personDetailLists;
    let len = cachedDetail.length;
    for (let i = 0; i < len; i++) {
      data = cachedDetail[i]
      CachedDetailsArr.push(data);
    }
  } catch (e) {


  }
  return CachedDetailsArr;
}


export const getCachedDetail = (id) => {

  if (Object.keys(realm.objects(PersonDetailsList.schema.name)).length != 0) {
    const details = realm.objectForPrimaryKey(PersonDetailsList, id).personDetailLists
    if (details) {
      let temp = Object.assign({}, details)
      data = Object.keys(temp).map((key) => temp[key])
      finalData = data.map((person) => {
        persons = Object.assign({}, person)
        newItemsObj = Object.assign({}, person.items)
        items = Object.keys(newItemsObj).map((key) => newItemsObj[key])
        finalItems = items.map((item) => Object.assign({}, item))
        persons.items = finalItems.slice(0)
        return persons
      })
      return finalData;
    }
  }
  return undefined;
}

export const updateDetails = (id, data) => {
  realm.write(() => {
    realm.create(PersonDetailsList.schema.name, {
      id: id,
      personDetailLists: data
    }, true);
  });

}


export const createDetails = (id, data) => {

  try {
    realm.write(() => {
      realm.create(PersonDetailsList.schema.name, {
        id: id,
        personDetailLists: data
      })
    })

  } catch (e) {
   console.error(e);
  }

}




export default realm = new Realm({schema: [PersonDetailsList,Person,Item]})
