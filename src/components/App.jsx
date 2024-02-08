// src/App.jsx

import './css/App.css';
import { Profile } from './Profile.jsx';
import userData from '../userData.json';

export const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
};
