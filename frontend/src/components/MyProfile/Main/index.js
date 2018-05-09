/**
 * Npm import
 */
import React from 'react';
// import PropTypes from 'prop-types';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaEllipsisH from 'react-icons/lib/fa/ellipsis-h';

/**
* Local import
*/


import MyProfileBasicsInformation from 'frontend/src/components/MyProfile/MyProfileBasicsInformation';
import MyProfileSettings from 'frontend/src/components/MyProfile/MyProfileSettings';
// import DeleteGameForm from 'frontend/src/containers/MyGames/DeleteGameForm';
// import OneOfMyGames from 'frontend/src/components/MyGames/OneOfMyGames';
// eslint-disable-next-line
// import GameList from 'frontend/src/containers/GameList/GameList';

/**
 * Code
 */
class Main extends React.Component {
  state = {
    settingsForMyProfilemIsClicked: false,
  }

  render() {
    // const { friends } = this.props;
    return (

      <div id="MyProfileContainer">

        <section id="MyProfilePresentation">
          <img id="MyProfilePhoto" src="https://media.koreus.com/201701/allez-faire-loutre.jpg" alt="Toto" />
          <div id="MyProfileDescription">A word about you</div>
        </section>
        <a
          id="settingsForMyProfileTrigger"
          onClick={() =>
            this.setState({ settingsForMyProfilemIsClicked: !this.state.settingsForMyProfilemIsClicked })}
        > <FaEllipsisH /> <FaPencil />
        </a>

        {this.state.settingsForMyProfilemIsClicked &&
        <MyProfileSettings />
        }

        <MyProfileBasicsInformation />

        <section id="AddOrDeleteFriendFromMyProfile">
          <form id="AddFriendFromMyProfile" className="FriendsFromMyProfile">
            add
          </form>

          <form id="DeleteFriendFromMyProfile" className="FriendsFromMyProfile">
            delete
          </form>
        </section>
      </div>
    );
  }
}
// Main.propTypes = {
//   friends: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
//   // actions: PropTypes.object.isRequired,
// };
/**
 * Export
 */
export default Main;
