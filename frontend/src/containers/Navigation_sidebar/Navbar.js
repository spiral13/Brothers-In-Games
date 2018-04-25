/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
* Local import
*/
import Navbar from 'frontend/src/components/Navigation_sidebar/Navbar';
/**
 * Code
 */

const mapStateToProps = (state, ownProp) => ({});

const mapDispatchToProps = dispatch => ({
  // changeClick: () => {
  //   console.log('test');
  // },
});

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

/**
 * Export
 */
export default NavbarContainer;
