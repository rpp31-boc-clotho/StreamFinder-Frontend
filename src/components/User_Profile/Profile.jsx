import React, { useState, useEffect } from 'react';
import Subscriptions from './Subscriptions.jsx';
import Update from './Update.jsx';
import Activity from './Activity.jsx';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const profile = (props) => {

  const [ watchHistory, setWatchHistory ] = useState({});

  let navigate = useNavigate();
  const isAuthenticated = useAuth0();

  useEffect(() => {
    if (!isAuthenticated.isLoading && !isAuthenticated.isAuthenticated) {
      navigate('/')
    }
  })

  useEffect(() => {

    const fetchUserData = (email) => {
      axios({
        method: 'get',
        url: 'https://api.youpostalservice.com/homepage/user',
        params: {
          username: props.email
        }
      })
      .then((response) => {
        console.log(response);
        setWatchHistory(response.data.watchHistory)
      })
      .catch((e) => {
        console.log('Error Adding to Recently Watched:', e)
      })
    }

    if (props.email) {
      fetchUserData(props.email)
    }
  }, [props.email])


  // States
  const [ modal, setModal ] = useState(false);

  // Functions
  const hideModal = () => {
    setModal(false);
  }

  //Render
  return (
    <div data-testid="profile-test" className="profileLayer">
      <div className="profile">
        <div className="profileUserInfo">
          <img className="profileAvatar" src={props.avatar}></img>
          <h1 className="profileUsername">{props.username}</h1>
        </div>
        <div className="profileDivider"></div>
        <div className="profileBody">
          <div className="profileSubscriptions">
            <h2>Your Subscriptions</h2>
            <div className="profileSubscriptionsList">
              <Subscriptions providersList={props.providersList} />
              <div className="profileEditSubsButton">
                <button className="editSubs" onClick={() => setModal(true)}>Edit Subscriptions</button>
              </div>
            </div>
          </div>
          <div className="profileActivity">
            <h2>Recently Watched Movies</h2>
            { watchHistory.movies && watchHistory.movies.length > 0 ? watchHistory.movies.slice(0, 5).map(({title, imgUrl, id}) =>
              <Activity title={title} key={id} image={imgUrl} id={id} type="movie"/> )
              : <div> No Movies Watched </div>
            }
            <h2>Recently Watched Shows</h2>
            { watchHistory.shows && watchHistory.shows.length > 0 ? watchHistory.shows.slice(0,5).map(({title, imgUrl, id}) =>
              <Activity title={title} key={id} image={imgUrl} id={id} type="tv"/> )
              : <div> No Shows Watched </div>
            }
          </div>
        </div>
        <div className="profileFooter">
          <div>
            <Update show={modal} hide={hideModal} providersList={props.providersList} updateSubs={props.updateSubscriptions}/>
          </div>
        </div>
      </div>
    </div>
  )

}

export default profile;