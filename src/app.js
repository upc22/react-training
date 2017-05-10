import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import 'whatwg-fetch'; // enable window.fetch or fetch

import { About } from './components/About';
import Contact from './components/Contact'
import { Like } from './components/Like';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import { BrandList } from './components/BrandList';
import { Redux } from './components/Redux';


import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import productReducer from './product/Reducer';


import ProductList from './product/components/ProductList';
import ProductEdit from './product/components/ProductEdit';
import ProductView from './product/components/Container/ProductViewContainer';
import { cartReducer} from './cart';



// const Test = ({title}) => {
//   <h1>{title}</h1>
// } 

let rootReducer = combineReducers({
  productState: productReducer,
  cartState: cartReducer
})

let store = createStore(rootReducer);

import {cartRoutes} from './cart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      totalLikes: 100
    }
  }
  toggle() {
    this.setState({
      show: !this.state.show,
      totalLikes: this.state.totalLikes
    })

  }
  update(e) {
    console.log(this.state.totalLikes, e);
    this.state.totalLikes += e
  }
  render() {
    return (
      <div>
        <h1>hello React</h1>
        <hello>MOTO G</hello>
        <Layout />
        {this.props.children}

        {/*<About/>
          <Contact/>*/}
        {/*{this.state.show && <Like tLikes={this.state.totalLikes} update={this.update.bind(this)}/>}
          <button onClick={()=> this.toggle()}>Show/Hide</button>*/}
      </div>
    );
  }
}

// render(<App/>, document.getElementById('app'));
render(<Provider store={store}>
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/about' component={About}></Route>
      <Route path='/contact' component={Contact}></Route>
      <Route path='/brand' component={BrandList}></Route>
      <Route path='/redux' component={Redux}></Route>
      <Route path='/products' component={ProductList}></Route>
      <Route path='/products/edit/:id' component={ProductEdit}></Route>
      <Route path='/products/view/:id' component={ProductView}></Route>
      {cartRoutes}      
            

      <Route path='*' component={Home}></Route>

    </Route>
  </Router>
</Provider>,
  document.getElementById('app'));
