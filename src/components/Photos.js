import React from 'react';
import concert from '../images/photos/thumbnail_concert.jpg'
import bassist from '../images/photos/thumbnail_bassist.jpg'
import guitarist from '../images/photos/thumbnail_guitarist.jpg'
import crowd from '../images/photos/thumbnail_crowd.jpg'

const Photos = () => {
    return (
        <div id="content">
    <h1>Photos of the band</h1>
    <ul id="imagegallery">
      <li>
        <a href="images/photos/concert.jpg" title="The crowd goes wild">
          <img src={concert} alt="the band in concert" />
        </a>
      </li>
      <li>
        <a href="images/photos/bassist.jpg" title="An atmospheric moment">
          <img src={bassist} alt="the bassist" />
        </a>
      </li>
      <li>
        <a href="images/photos/guitarist.jpg" title="Rocking out">
          <img src={guitarist} alt="the guitarist" />
        </a>
      </li>
      <li>
        <a href="images/photos/crowd.jpg" title="Encore! Encore!">
          <img src={crowd} alt="the audience" />
        </a>
      </li>
    </ul>
  </div>
    )
}

export default Photos;