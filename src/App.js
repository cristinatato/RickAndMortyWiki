import React from 'react';
import './App.scss';
import { fetchData } from './services/get-data';
import Header from './components/Header';
import Home from './components/Home';
import CharacterDetail from './components/CharacterDetail';
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      query: '',
      specie: ''
    }
    this.getQuery = this.getQuery.bind(this);
    this.handleChecked=this.handleChecked.bind(this);
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    fetchData()
      .then(data => {
        this.setState({
          data: data.results
        })
      })
  }

  getQuery(event) {
    const value = event.currentTarget.value;
    this.setState({
      query: value
    })
  }

  handleChecked (event) {
    const value = event.currentTarget.value;
    if (value === 'all') {
      return (
        this.setState({
        specie: ''
      }));
      
    } else {
      return(this.setState({
        specie: value
      }));
      
    }
  }
  render() {
    return (
      <div className="app">
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/" render={() => {
              return (
                <Home
                  getQuery={this.getQuery}
                  data={this.state.data}
                  query={this.state.query}
                  specie={this.state.specie}
                  handleChecked={this.handleChecked} />
                );
              }} />
            <Route path="/character/:id" render={(routerProps) => {
              return (
                <CharacterDetail
                  data={this.state.data}
                  routerProps={routerProps} />
                );
            }} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
