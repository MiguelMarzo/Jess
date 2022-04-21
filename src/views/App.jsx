import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.scss';
import { MainMenu } from '../components/MainMenu/MainMenu';
import { styled } from '../theme/themedStyledComponents';
import { Home } from './Home/Home';
import { VideoGallery } from './VideoGallery/VideoGallery';
import { PhotoGallery } from './PhotoGallery/PhotoGallery';

export const App = () => (
  <Router>
    <MainMenu />

    <MainContent>
      <Switch>
        <Route path="/video">
          <VideoGallery />
        </Route>
        <Route path="/photo">
          <PhotoGallery />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </MainContent>
  </Router>
);

const MainContent = styled.div`
  padding: 10px;
`;
