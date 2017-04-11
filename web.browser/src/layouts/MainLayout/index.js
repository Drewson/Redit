import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css'

const MainLayout = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      {children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.object,
};

export default MainLayout;
