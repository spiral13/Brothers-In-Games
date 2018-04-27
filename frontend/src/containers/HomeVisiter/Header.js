/**
 * Npm import
 */
import { connect } from 'react-redux';
/**
* Local import
*/
import Header from 'frontend/src/components/HomeVisiter/Header';
/**
 * Code
 */

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({
  // changeClick: () => {
  //   console.log('test');
  // },
});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

/**
 * Export
 */
export default HeaderContainer;
