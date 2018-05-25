import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Button } from 'antd-mobile';
function IndexPage(props) {
  console.log(props)
  let handleClick =()=>{
    props.dispatch({type:"user/fetch"})
  }
  // console.log(user)
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <Button></Button>
      <ul className={styles.list}>
        <li onClick={handleClick}>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
  
}

IndexPage.propTypes = {
  
};

export default connect(({user})=> {return {user}})(IndexPage);
