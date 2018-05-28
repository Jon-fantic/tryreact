import { Component } from 'react';
import { connect } from 'dva';
@connect(({ user }) => {
  return { data: user }
})
export default class User extends Component {
  render(){
    console.log(this.props)
    return (
      <div id="user">
        个人
      </div>
    )
  }

}