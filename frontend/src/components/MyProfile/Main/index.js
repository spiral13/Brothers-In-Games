/**
 * Npm import
 */
import React from 'react';
// import PropTypes from 'prop-types';
import FaCog from 'react-icons/lib/fa/cog';

/**
* Local import
*/

// eslint-disable-next-line
// import AddOneGameForm from 'frontend/src/containers/MyGames/AddOneGameForm';
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
          <div id="MyProfilePhoto">Photo du profil</div>
          <div id="MyProfileDescription">A word about you</div>
        </section>
        <a
          id="settingsForMyProfileTrigger"
          onClick={() =>
            this.setState({ DeleteFormIsClicked: !this.state.DeleteFormIsClicked })}
        > <FaCog />
        </a>

        {this.state.settingsForMyProfilemIsClicked &&
          <section id="settingsForMyProfile">
            profileSettings
          </section>
        }

        <section id="MyProfileBasicsInformation">
          <div id="firstName" className="BasicsInformation">Prénom</div>
          <div id="familyName" className="BasicsInformation">Nom</div>
          <div id="nickName" className="BasicsInformation">Surnom de ton avatar</div>
          <div id="age" className="BasicsInformation">âge</div>
        </section>

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
