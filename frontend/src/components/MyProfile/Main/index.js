/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaEllipsisH from 'react-icons/lib/fa/ellipsis-h';
import Select from 'react-select';
import MdCancel from 'react-icons/lib/md/cancel';
import FaGroup from 'react-icons/lib/fa/group';
import FaUser from 'react-icons/lib/fa/user';
import FaUserSecret from 'react-icons/lib/fa/user-secret';
import FaWrench from 'react-icons/lib/fa/wrench';


/**
* Local import
*/


import MyProfileBasicsInformation from 'frontend/src/components/MyProfile/MyProfileBasicsInformation';
import MyAccountInformation from 'frontend/src/components/MyProfile/MyAccountInformation';
import MyProfileSettings from 'frontend/src/containers/MyProfile/MyProfileSettings';
import MyAccountSettings from 'frontend/src/containers/MyProfile/MyAccountSettings';

/**
 * Code
 */
class Main extends React.Component {
  state = {
    settingsForMyProfileIsClicked: false,
    settingsForMyAccountIsClicked: false,
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

  addFriend = (evt) => {
    evt.preventDefault();
    this.props.actions.submitAddFriend();
  }

  changeAddFriend = ({ target }) => {
    this.props.actions.changeAddOneFriend(target.value);
  }

  render() {
    const { selectedOption } = this.state;
    const { myFriend } = this.props.userInformation[0];
    const user = this.props.profileInformation;
    let allOptions = [];
    myFriend.map((option) => {
      allOptions = [...allOptions, { value: option.username, label: option.username, id: option.id }];
      return true;
    });
    return (
      <div id="MyProfileContainer">
        <section id="MyProfilePresentation">
          <img id="MyProfilePhoto" src={user.image} alt={user.firstname} />
          <div id="MyProfileDescription">{user.username}</div>
        </section>


        {this.state.settingsForMyAccountIsClicked &&
          <div id="settingsForMyAccount">
            <MdCancel
              onClick={() => this.setState({ settingsForMyAccountIsClicked: !this.state.settingsForMyAccountIsClicked })}
              id="crossCancelSettingsForm"
            />
            <div id="changeYourInformation">Modifiez vos informations de compte</div>
            <MyAccountSettings
              user={user}
            />
          </div>
        }

        {this.state.settingsForMyProfileIsClicked &&
        <div id="triggeredSettingsForm">
          <MdCancel
            onClick={() => this.setState({ settingsForMyProfileIsClicked: !this.state.settingsForMyProfileIsClicked })}
            id="crossCancelDeleteForm"
          />
          <div id="changeYourInformation">Modifiez vos informations de profil</div>
          <MyProfileSettings
            user={user}
          />
        </div>}


        <FaUser className="MyProfileSectionIcon" />
        <a
          id="settingsForMyProfileTrigger"
          onClick={() => this.setState({ settingsForMyProfileIsClicked: !this.state.settingsForMyProfileIsClicked })}
        >
          <FaEllipsisH />
          <FaPencil />
        </a>
        <MyProfileBasicsInformation
          user={user}
        />

        <FaGroup className="MyProfileSectionIcon" />
        <section id="AddOrDeleteFriendFromMyProfile">
          <form
            id="AddFriendFromMyProfile"
            className="FriendsFromMyProfile"
            onSubmit={this.addFriend}
          >
            {/* Ici mettre le nom du joueur à ajouter dans value puis avec le onChange envoyer le nom du joueur dans le reducer : FriendReducer */}
            <input
              value={this.props.addOneFriend}
              onChange={this.changeAddFriend}
              placeholder="Ajouter un ami"
              className="addFriendInput"
            />
            <button>Ajouter un ami</button>
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

        <div id="settingsForMyAccountTrigger" >
          <h1 id="labelMyAccountTrigger">Modifiez vos informations de compte</h1>
          <a
            onClick={() => this.setState({ settingsForMyAccountIsClicked: !this.state.settingsForMyAccountIsClicked })}
            id="FaWrenchMyAccountTrigger"
          >
            <FaWrench />
          </a>

          <FaUserSecret className="MyAccountSectionIcon" />
          <MyAccountInformation
            user={user}
            account={user}
          />
        </div>
      </div>
    );
  }
}
Main.propTypes = {
  userInformation: PropTypes.array.isRequired,
  profileInformation: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  addOneFriend: PropTypes.string.isRequired,
};
/**
 * Export
 */
export default Main;
