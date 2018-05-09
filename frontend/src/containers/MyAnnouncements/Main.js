/*
 * Import NPM
 */
import { connect } from 'react-redux';

/*
 * Import Local
 */
import Main from 'frontend/src/components/MyAnnouncements/Main';

/*
 * Code
 */
// State => composant
const mapStateToProps = state => ({
  loadings: state.LoadingReducer.loadings,
  datas: state.AnnouncementsReducer.myAnnouncements,
});


const mapDispatchToProps = () => ({});


// Container
const MainContainers = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

/*
 * Export
 */
export default MainContainers;
