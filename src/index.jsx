import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'react-mapbox-gl';

import '../assets/stylesheets/application.scss';

mapboxgl.accessToken = 'pk.eyJ1IjoibWVkZW5hZ2FuIiwiYSI6ImNrNzZiOW92ZzBpbGMzZnIxZzUwNWdvcGsifQ.Q9bWDOQM5SXM5HOC2c-98Q';

const Hello = ({ name }) => {
  return (
    <div>
      Hello,
      {name}
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}
