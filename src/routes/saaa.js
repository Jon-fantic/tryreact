import { Component } from 'react';
import {connect} from 'dva';
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
      <div>11111111</div>
      <button onClick={() => this.handleClick()} />
      </div>
    )
  }
}