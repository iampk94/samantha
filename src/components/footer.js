import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default function Footer(props) {
    return (
      <footer>
          <ul className='socialLinks'></ul>
        <div className="developInfo"></div>
      </footer>
    );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;