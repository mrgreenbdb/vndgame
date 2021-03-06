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
            <h1 className="section__title">Lesson One</h1>
            <div className="button__wrapper">
              <a href="https://drive.google.com/drive/u/0/folders/1ibc4JZv9RB9ClS2n_1in09RFIwfKOQE6">
                <button className="download__button">
                  download files
                </button>
              </a>
            </div>
            <div className="lesson__section">
              <div className="lesson__section--description left">
                <img src="../../img/decal/gdp/lesson1.png"/>
              </div>
              <div className="lesson__section--description right">
                <div className="lesson__section--subtitle">tutorial</div>
                <div className="lesson__section--info">
                  Make a vector avatar for you or a partner
                </div>
              </div>
            </div>
            <div className="lesson__section">
              <div className="lesson__section--description left">

              </div>
              <div className="lesson__section--description right">
                <div className="lesson__section--subtitle">homework</div>
                <div className="lesson__section--info">
                  Illustrate three Messenger-style stickers
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
