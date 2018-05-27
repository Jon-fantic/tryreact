import React, { Component } from 'react'
import { Router, Route, Switch ,Link} from 'dva/router';
// import { connect } from 'dva';
import "./footer.less"
export default class Footer extends Component{
  // constructor(){

  // }
  state ={
    list:[{name:"首页",path:"/"},{name:"精选",path:"/chioceness"},{name:"搜索",path:"/search"},{name:"分类",path:"/classify"},{name:"个人",path:"/user"}]
  }
  gotolink=(path)=>{
    
  }
  render(){
    return (
      <div id="footer">
        {
          this.state.list.map(el=>{
            return <div key={el.name} onClick={this.gotolink.bind(this,el.path)} activeclassname="active">{el.name}</div>
          })
        }
      </div>
    )
  }
}

