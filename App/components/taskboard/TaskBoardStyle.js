import {
  StyleSheet,
  Dimensions
} from 'react-native';

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

var styles = StyleSheet.create({

  containerStyle: {
    justifyContent: 'space-around',
    flex: 1,
    backgroundColor: '#C9BF9C',
    padding: 10,
    flexWrap: 'wrap',

  },
  viewStyle: {
    flex: 0.45,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  flatlistContainerStyle: {
    flex: 0.45,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10
  },

  flatlistStyle: {
    flex: 1
  },
  headerViewStyle: {
    height: 30,
    backgroundColor: 'white'
  },

  headerTextStyle: {
    height: '100%',
    fontWeight: 'bold'
  },
  footerStyle: {
    height: 10
  },
  listItemViewStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    padding: 7
  },
  listItemTextStyle: {
    padding: 5,
    backgroundColor: '#C9BF9C',
    borderRadius: 5
  }
});
export default styles;
