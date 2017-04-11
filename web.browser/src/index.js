import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import MainLayout from './layouts/MainLayout';
import Categories from './containers/Categories';
import CreatePost from './containers/CreatePost';
import Login from './containers/Login';
import NotFound from './containers/NotFound';
import PostList from './containers/PostList';
import Welcome from './containers/Welcome';

import {HeaderBar} from './components/HeaderBar';
import {Week} from './components/Week';
import {PostToolbar} from './components/PostToolBar';
import {Post} from './components/Post';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/mui-theme';
import './styles/index.css';

// Needed for onTouchTap (Material UI)
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <MainLayout>
      <HeaderBar />
      <App>
        <Categories />
          <Week />
        <CreatePost />
        <Welcome />
        <Login />
        <PostList />
          <PostToolbar />
          <Post />
          <NotFound />
      </App>
    </MainLayout>
  </MuiThemeProvider>,
  document.getElementById('root')
);
