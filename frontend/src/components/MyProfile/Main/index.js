/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaEllipsisH from 'react-icons/lib/fa/ellipsis-h';
import Select from 'react-select';

/**
* Local import
*/


import MyProfileBasicsInformation from 'frontend/src/components/MyProfile/MyProfileBasicsInformation';
import MyProfileSettings from 'frontend/src/components/MyProfile/MyProfileSettings';

/**
 * Code
 */
class Main extends React.Component {
  state = {
    settingsForMyProfilemIsClicked: false,
    selectedOption: '',
  }

  handleSelectedOptionToSend = (selectedOption) => {
    this.setState({ selectedOption });
    this.props.actions.changeOption(selectedOption.id);
  }

  deleteFriend = (evt) => {
    evt.preventDefault();
    this.props.actions.deleteFriend();
  }

  render() {
    const { selectedOption } = this.state;
    const { myFriend } = this.props.userInformation[0];
    const { user } = this.props.userInformation;
    let allOptions = [];
    myFriend.map((option) => {
      allOptions = [...allOptions, { value: option.username, label: option.username, id: option.id }];
      return true;
    });
    return (
      <div id="MyProfileContainer">
        <section id="MyProfilePresentation">
          <img id="MyProfilePhoto" src="https://media.koreus.com/201701/allez-faire-loutre.jpg" alt="Toto" />
          <div id="MyProfileDescription">A word about you</div>
        </section>
        <a
          id="settingsForMyProfileTrigger"
          onClick={() => this.setState({ settingsForMyProfilemIsClicked: !this.state.settingsForMyProfilemIsClicked })}
        > <FaEllipsisH /> <FaPencil />
        </a>

        {this.state.settingsForMyProfilemIsClicked &&
        <MyProfileSettings />
        }

        <MyProfileBasicsInformation />

        <section id="AddOrDeleteFriendFromMyProfile">
          <form id="AddFriendFromMyProfile" className="FriendsFromMyProfile">
            {/* Ici mettre le nom du joueur à ajouter dans value puis avec le onChange envoyer le nom du joueur dans le reducer : FriendReducer */}
            {/* <input value={} onChange={} /> */}
            Test
          </form>

          <form
            id="DeleteFriendFromMyProfile"
            className="FriendsFromMyProfile"
            onSubmit={this.deleteFriend}
          >
            <Select
              className="selectFriendToDelete"
              placeholder="Supprimer un ami"
              name="sidebar-input"
              value={selectedOption}
              onChange={this.handleSelectedOptionToSend}
              options={allOptions}
            />
            <button>Supprimer</button>
          </form>
        </section>
      </div>
    );
  }
}
Main.propTypes = {
  userInformation: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};
/**
 * Export
 */
export default Main;
