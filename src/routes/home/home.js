import { Component } from 'react';
// import { Button } from 'antd-mobile';
import './home.css';
import { connect } from 'dva';
@connect(({ homepage,user }) => {
  return { data:{...homepage,...user} }
})
export default class Home extends Component {
  // state ={

  // }
  // componentDidMount(){
  //   const {dispatch} =this.props;

  //   dispatch({
  //     type: "user/fetch"
  //   })

  // }
  handleClick = () => {

  }
  render() {
    // const change = () => {

    // }
    const {data} =this.props;
    console.log(this.props,123);
    console.log(data,123);
    // console.log(data);
    return (
      <div id="home">
        12313123
      </div>
    )
  }
}