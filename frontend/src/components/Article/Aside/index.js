
/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/**
* Local import
*/
// import Announcements from 'frontend/src/containers/Announcements/Announcements';

/**
 * Code
 */
const Aside = ({ article }) => (
  <aside>
    <h2>------ Ces articles peuvent aussi vous intéresser ------</h2>
    <div className="carousel" >
      <div className="unArticleCarousel" >
        <img src="https://media.koreus.com/201701/allez-faire-loutre.jpg" alt="Legend 1" className="imageCarouselArticle" />
        <h3 className="legendImageCarousel">1</h3>
      </div>
      <div className="unArticleCarousel" >
        <img src="http://blogmoon.b.l.pic.centerblog.net/78c3200a.jpg" alt="Legend 2" className="imageCarouselArticle" />
        <h3 className="legendImageCarousel">2</h3>
      </div>
      <div className="unArticleCarousel" >
        <img src="https://i.pinimg.com/736x/ea/26/83/ea2683862269b0db04f8b8e0a1845cbd--scottish-fold-funny-pics.jpg" alt="Legend 3" className="imageCarouselArticle" />
        <h3 className="legendImageCarousel">3</h3>
      </div>
      <div className="unArticleCarousel" >
        <img src="https://i.pinimg.com/736x/ea/26/83/ea2683862269b0db04f8b8e0a1845cbd--scottish-fold-funny-pics.jpg" alt="Legend 4" className="imageCarouselArticle" />
        <h3 className="legendImageCarousel">4</h3>
      </div>
    </div>
  </aside>
);

Aside.propTypes = {
  article: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  // description: PropTypes.string.isRequired,
};


/**
 * Export
 */
export default Aside;
