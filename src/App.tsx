import './App.css';
import React, { FormEvent, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import axios from 'axios';
import RepositoriesList from './RepositoriesList';
import { IGitHubUser } from './components/interfaces/IGitHubUser';
import FollowersList from './FollowersList';
import Auth from './components/Auth/Auth';
import Profile from './components/Profile/index';
import { Grid } from '@mui/material';

function App() {
  const [userSearch, setUserSearch] = useState<string>('');
  const [foundUser, setFoundUser] = useState<IGitHubUser>();

  const performSearchRequest = async () => {
    try {
      const response = await axios.get<IGitHubUser>(`https://api.github.com/users/${userSearch}`);
      setFoundUser(response.data);
      console.log(response)
    } catch (error) {
      console.log(error);

    }
  };

  const searchForUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    performSearchRequest();
  }
  return (
    <Grid container spacing={2} >

      <Router>
        <Grid item xs={5}>
          <Route exact path="/about" component={Profile} />
          <Route exact path="/" component={Auth} />

        </Grid>

        <Grid item xs={6}>
          <div className="App">
            <Switch>
              <Route  path="/about">
          
            <nav>
              <ul>
                <li>
                  <Link to="/about">Users account</Link>
                </li>
                <li>
                  {!foundUser && <span>Repositories</span>}
                  {foundUser && <Link to="/repos">Repositories</Link>}
                </li>
                <li>
                  {!foundUser && <span>Followers</span>}
                  {foundUser && <Link to="/followers">Followers</Link>}
                </li>
              </ul>
            </nav>
            
              
                <h2>Search for a user</h2>
                <form className="search-user" onSubmit={searchForUser}>
                  <input value={userSearch} onChange={event => setUserSearch(event.target.value)} placeholder="Enter a username..." />
                  <button>Search</button>
                </form>

                {foundUser && <div>
                  <h3>{foundUser.login}</h3>
                  <div className="user-details">
                    <div>
                      <p><strong>Name: </strong>{foundUser.name}</p>
                      <p><strong>Company: </strong>{foundUser.company}</p>
                      <p><strong>Location: </strong>{foundUser.location}</p>
                      <p><strong>Followers: </strong>{foundUser.followers}</p>
                    </div>
                    <img src={foundUser.avatar_url} alt={foundUser.name} />
                  </div>
                </div>
                }
              </Route>
              <Route exact path="/repos">
                <h2>Repositories</h2>
                {foundUser
                  ? <RepositoriesList repositoriesUrl={foundUser.repos_url}></RepositoriesList>
                  : <Redirect to="/about"></Redirect>
                }
              </Route>
              <Route path="/followers">
                <h2>Followers</h2>
                {foundUser
                  ? <FollowersList followersUrl={foundUser.followers_url}></FollowersList>
                  : <Redirect to="/about"></Redirect>
                }
              </Route>
            </Switch>
          </div>
        </Grid>
      </Router>
    </Grid>
  );
}

export default App;