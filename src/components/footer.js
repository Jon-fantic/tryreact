import React, { Component } from 'react'
import { routerRedux} from 'dva/router';
import { connect } from 'dva';
import "./footer.less"
@connect(({ user }) => {
  return { data: user }
})
export default class Footer extends Component{

  state ={
    list:[{name:"首页",path:"/"},{name:"精选",path:"/chioceness?id=1"},{name:"搜索",path:"/search"},{name:"分类",path:"/classify"},{name:"个人",path:"/user?id=123"}]
  }
  gotolink=(path)=>{
    const {dispatch} =this.props;
    dispatch(routerRedux.push(path));
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

