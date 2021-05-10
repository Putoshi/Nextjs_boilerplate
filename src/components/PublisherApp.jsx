import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import 'tailwindcss/tailwind.css'
import VideoPublisher from './VideoPublisher'

// Action
const action = { type: 'ACTION_INCREMENT'};

// Reducer
const reducer = (currentState = 0, action) => {
  switch(action.type) {
    case 'ACTION_INCREMENT':
      return currentState + 1;
    default:
      return currentState;
  };
};

// storeにreducerを登録
const store = createStore(reducer);


// // クリック時にstateの更新を行う
// document.addEventListener('click', () => store.dispatch(action));

export default class PublisherApp extends Component {

  constructor(props) {
    super(props);

    // storeが更新(dispatch実行時)されたら実行される
    store.subscribe(this.render);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1 className="text-xl font-semibold text-black">{store.getState()}</h1>
          <VideoPublisher />
          {/*<img src={"/images/test.jpg"} />*/}
        </div>
      </Provider>
    );
  }
}
