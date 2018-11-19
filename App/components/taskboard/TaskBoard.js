
import React,{Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView
} from 'react-native';
import {connect} from 'react-redux';
import {onAddItem,setdropZones} from '../../actions'
import _ from 'lodash';
import styles from './TaskBoardStyle'
import ListItem from './ListItem'
import storage from '../../storage'
class TaskBoard extends Component {


 constructor(props) {
  super(props);
  this.coordinates = {}
  setTimeout(this.setDropZoneValues.bind(this));
  if(!storage.getCachedDetail(1)){
    storage.createDetails(1,this.props.data)
  }

 }



 renderItem(flatListOrder, {item,index}) {
 return(<ListItem data ={this.props.data} dropZones = {this.props.dropZones} flatListOrder ={flatListOrder} item = {item} index={index} />)
 }


 setDropZoneValues() {
  this.refs.view1.measure((a, b, width, height, px, py) => {
  this.coordinates['0'] = {
      x1: px,
      x2: px + width,
      y1: py,
      y2: py + height
    }
  });
  this.refs.view2.measure((a, b, width, height, px, py) => {
  this.coordinates['1'] = {
      x1: px,
      x2: px + width,
      y1: py,
      y2: py + height
    }
  });
  this.refs.view3.measure((a, b, width, height, px, py) => {
  this.coordinates['2'] = {
      x1: px,
      x2: px + width,
      y1: py,
      y2: py + height
    }
  });
  this.refs.view4.measure((a, b, width, height, px, py) => {
  this.coordinates['3'] = {
      x1: px,
      x2: px + width,
      y1: py,
      y2: py + height
    }
  });
  this.props.setdropZones(this.coordinates)
 }



 renderHeader(flatListOrder){
  const {
    headerViewStyle,
    headerTextStyle
  } = styles

  return(<View style={headerViewStyle}>
          <Text style={headerTextStyle}>
            {this.props.data[flatListOrder].name}
          </Text>
         </View>)
 }



 renderFooter(flatListOrder) {
  return (<TouchableOpacity onPress={()=>{this.props.onAddItem(this.props.data,flatListOrder)}} >
           <Text>
             + add item
           </Text>
          </TouchableOpacity>)
  }



renderSeparator() {
  const {footerStyle} = styles
  return(<View style={footerStyle}/>)
}



 render() {
    const {
      containerStyle,
      viewStyle,
      flatlistContainerStyle,
      flatlistStyle
    } = styles

return (
<View style={containerStyle}>
  <View style={[viewStyle,{zIndex:this.props.data[0].zIndex ? 1 : this.props.data[1].zIndex ? 1 : 0}]}>
    <View ref="view1" style={[flatlistContainerStyle,{zIndex:this.props.data[0].zIndex}]}>
      <FlatList key={this.props.data[0]}
                data={this.props.data[0].items}
                style={[flatlistStyle,{overflow:this.props.data[0].overflow}]}
                bounces={ false}
                canCancelContentTouches={ false}
                ListHeaderComponent={this.renderHeader(0)}
                stickyHeaderIndices={[0]}
                ItemSeparatorComponent={this.renderSeparator}
                ListFooterComponent={ this.renderFooter(0)}
                renderItem={this.renderItem.bind(this,0)}/>
    </View>
    <View ref="view2" style={[flatlistContainerStyle,{zIndex:this.props.data[1].zIndex}]}>
      <FlatList key={ this.props.data[1]}
                data={this.props.data[1].items}
                style={[flatlistStyle,{overflow:this.props.data[1].overflow}]}
                bounces={ false}
                canCancelContentTouches={ false}
                ListHeaderComponent={this.renderHeader(1)}
                stickyHeaderIndices={[0]}
                ItemSeparatorComponent={this.renderSeparator}
                ListFooterComponent={ this.renderFooter(1)}
                renderItem={this.renderItem.bind(this,1)}/>
    </View>
  </View>
  <View style={[viewStyle,{zIndex:this.props.data[2].zIndex ? 1 : this.props.data[3].zIndex ? 1 : 0}]}>
    <View ref="view3" onLayout={this.setDropZoneValues.bind(this,2)} style={[flatlistContainerStyle,{zIndex:this.props.data[2].zIndex}]}>
      <FlatList key={ this.props.data[2]}
                data={this.props.data[2].items}
                style={[flatlistStyle,{overflow:this.props.data[2].overflow}]}
                bounces={ false}
                canCancelContentTouches={ false}
                ListHeaderComponent={this.renderHeader(2)}
                stickyHeaderIndices={[0]}
                ListFooterComponent={this.renderFooter(2)}
                ItemSeparatorComponent={this.renderSeparator}
                renderItem={this.renderItem.bind(this,2)}/>
   </View>
    <View ref="view4" removeClippedSubviews={false} style={[flatlistContainerStyle,{zIndex:this.props.data[3].zIndex}]}>
      <FlatList key={ this.props.data[3]}
                data={this.props.data[3].items}
                style={[flatlistStyle,{overflow:this.props.data[3].overflow}]}
                canCancelContentTouches={false}
                bounces={ false}
                ListHeaderComponent={this.renderHeader(3)}
                stickyHeaderIndices={[0]}
                ListFooterComponent={this.renderFooter(3)}
                ItemSeparatorComponent={this.renderSeparator}
                renderItem={this.renderItem.bind(this,3)}/>
    </View>
  </View>
</View>)

  }

}

const mapStateToProps = ({taskBoard}) => {
  const {data,dropZones}=taskBoard;
  return {data,dropZones};
};





export default connect(mapStateToProps,{onAddItem,setdropZones}) (TaskBoard);
