import React from 'react';
import DocumentTitle from 'react-document-title';

import $ from 'jquery';
import _ from 'lodash';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render () {
    return (
      <DocumentTitle title="Innovative Design">
        <div>
          <div className="page__wrapper lesson">
            <h1 className="section__title">Lesson Eight</h1>
            <div className="button__wrapper">
              <a href="https://drive.google.com/open?id=1NVTj7dltPT5jq3Up9jSw0lJxOf0x9tyT">
                <button className="download__button">
                  download files
                </button>
              </a>
            </div>
            <div className="lesson__section">
              <div className="lesson__section--description left">
                <img src="../../img/decal/lesson8.png"/>
              </div>
              <div className="lesson__section--description right">
                <div className="lesson__section--subtitle">tutorial</div>
                <div className="lesson__section--info">
                  Learn how to apply special effects on text & images using blending modes, layer styles, and filter effects!
                </div>
              </div>
            </div>
            <div className="lesson__section">
              <div className="lesson__section--description left">
                <img src="../../img/decal/hw8.png"/>
              </div>
              <div className="lesson__section--description right">
                <div className="lesson__section--subtitle">homework</div>
                <div className="lesson__section--info">
                  Using your new knowledge of blending modes, clipping & layer masks, make a sci-fi movie poster! Put a subject or two onto a cool background, apply some textures, and give your movie a name.
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
