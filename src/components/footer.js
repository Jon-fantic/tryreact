import React, { Component } from 'react'
// import { connect } from 'dva';
import "./footer.less"
export default class Footer extends Component{
  // constructor(){

  // }
  render(){
    let list=["首页","精选","搜索","我的"]
    return (
      <div id="footer">
        {
          list.map(el=>{
            return <div key={el}>{el}</div>
          })
        }
      </div>
    )
  }
}

