import { Component } from 'react';
import {connect} from 'dva';
import { Button } from 'antd-mobile';
import Footer from "../components/footer"
import './saaa.css';
@connect(({user}) => {
  return {data: user}
})
export default class Test extends Component {
  // state ={

  // }
  // componentDidMount(){
  //   const {dispatch} =this.props;
    
  //   dispatch({
  //     type: "user/fetch"
  //   })

  // }
  handleClick =()=>{

  }
  render(){
    // const change = () => {

    // }
    // const {data} =this.props;
    console.log(this.props);
    // console.log(data);
    return (
      <div>
      <div className="aaa">11111111</div>
      <Button type="primary">primary</Button>
      <button onClick={() => this.handleClick()} />
      <Footer/>
      </div>
    )
  }
}