import { Component } from 'react';
import { connect } from 'dva';
// import { Button } from 'antd-mobile';
import Footer from "../../components/footer"
import './home.css';
@connect(({ user }) => {
  return { data: user }
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
    // const {data} =this.props;
    console.log(this.props);
    // console.log(data);
    return (
      <div id="home">
        12313123
      </div>
    )
  }
}