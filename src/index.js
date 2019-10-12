/*
 * @Author: Siwen
 * @Date: 2019-10-10 14:00:20
 * @LastEditors: Siwen
 * @LastEditTime: 2019-10-12 11:30:12
 * @Description: 
 */
import React from 'react'
import ReactDOM from 'react-dom'
import 'lib-flexible'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
