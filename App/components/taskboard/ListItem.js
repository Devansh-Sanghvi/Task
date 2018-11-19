
import React,{PureComponent} from 'react';
import {
  View,
  Text,
  Animated,
  TextInput,
  PanResponder
} from 'react-native';
import {connect} from 'react-redux';
import {onChangeItem,onDrop,setViewStyle} from '../../actions'
import _ from 'lodash';
import styles from './TaskBoardStyle'




class ListItem extends PureComponent {


 constructor(props) {
      super(props);
      this.pan = new Animated.ValueXY()
      this.panResponder = PanResponder.create({ //Step 2
          onStartShouldSetPanResponder: () => {
            this.props.setViewStyle(this.props.data, this.props.flatListOrder, 1, 'visible');
            return true
          },
          onPanResponderMove: Animated.event([null, {
            dx: this.pan.x,
            dy: this.pan.y
          }]),

          onPanResponderRelease: Animated.event([null, {
            dx: this.pan.x,
            dy: this.pan.y
          }], {
              listener: (event, gestureState) => {
              this.props.setViewStyle(this.props.data, this.props.flatListOrder, 0, 'hidden');
              dropZoneId = this.getDropZoneId(event, gestureState)
              if (dropZoneId != undefined) {
                this.props.onDrop(this.props.data, this.props.flatListOrder, this.props.flatListOrder.index, this.props.item, dropZoneId)
              } else {

                Animated.spring(
                  this.pan,
                  {
                    toValue: {
                      x: 0,
                      y: 0
                    }
                  }
                ).start();
              }
            }
          })
        })
      }



 getDropZoneId(event, gesture) {

  if (event.nativeEvent.pageX > this.props.dropZones[0].x1 && event.nativeEvent.pageX < this.props.dropZones[0].x2 && event.nativeEvent.pageY > this.props.dropZones[0].y1 && event.nativeEvent.pageY < this.props.dropZones[0].y2) {
    return 0
  } else if (event.nativeEvent.pageX > this.props.dropZones[1].x1 && event.nativeEvent.pageX < this.props.dropZones[1].x2 && event.nativeEvent.pageY > this.props.dropZones[1].y1 && event.nativeEvent.pageY < this.props.dropZones[1].y2) {

    return 1
  } else if (event.nativeEvent.pageX > this.props.dropZones[2].x1 && event.nativeEvent.pageX < this.props.dropZones[2].x2 && event.nativeEvent.pageY > this.props.dropZones[2].y1 && event.nativeEvent.pageY < this.props.dropZones[2].y2) {

    return 2
  } else if (event.nativeEvent.pageX > this.props.dropZones[3].x1 && event.nativeEvent.pageX < this.props.dropZones[3].x2 && event.nativeEvent.pageY > this.props.dropZones[3].y1 && event.nativeEvent.pageY < this.props.dropZones[3].y2) {
    return 3
  }
 }



 render() {
   const {listItemTextStyle,listItemViewStyle} = styles

    return (
      <Animated.View  key = {this.props.item.key}   {...this.panResponder.panHandlers}  style={[this.pan.getLayout(),listItemViewStyle]} >
        <TextInput   value={this.props.item.value}
                     onChangeText={(text) => this.props.onChangeItem(this.props.data,this.props.flatListOrder,this.props.index,text)}
                     multiline={true}
                     style={listItemTextStyle}
                     defaultValue={this.props.item.value}/ >
      </Animated.View >
    );
  }
}




export default connect(null,{onDrop,onChangeItem,setViewStyle})(ListItem);
