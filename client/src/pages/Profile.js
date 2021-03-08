import React, { useContext, useEffect, useState } from 'react';
import { fetchUser } from '../api/User';
import Content from '../components/Profile/Content';
import Header from '../components/Profile/Header';
import ProfileContainer from '../components/Profile/styles/ProfileContainer';
import UserTabs from '../components/Profile/UserTabs';
import { UserContext } from '../hooks/UserContext';

const Profile = () => {
  const [user, setUser] = useContext(UserContext);
  const [userProfile, setUserProfile] = useState({});

  const loadProfile = async () => {
    return await fetchUser(user, setUser);
  };

  useEffect(() => {
    const data = loadProfile();
    data.then((res) => {
      console.log({ res });
      if (res.status === 200) {
        setUserProfile({ ...userProfile, data });
      }
    });
  }, [setUserProfile]);

  return (
    userProfile && (
      <ProfileContainer>
        <div>
          <Header user={userProfile.user} />
          <Content user={userProfile.user} />
        </div>
        <UserTabs
          publicationsUser={userProfile.publicationsUser}
          publicationsHistoryUser={userProfile.publicationsHistoryUser}
          publicationsFavoritesUser={userProfile.publicationsFavoritesUser}
        />
      </ProfileContainer>
    )
  );
};

export default Profile;
