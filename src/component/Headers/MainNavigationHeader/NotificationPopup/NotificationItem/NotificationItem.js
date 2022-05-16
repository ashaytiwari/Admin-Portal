import React from 'react';

import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';

import styles from './NotificationItem.module.scss';

function NotificationItem(props) {

  const { notification } = props;

  return (
    <div className={styles.notificationContainer}>

      <div className={styles.iconWrapper}>
        <notification.Icon />
      </div>

      <div className={styles.notificationContent}>

        <label className={styles.notificationText}>
          <span>{notification.title}</span> {' '}
          {notification.description}
        </label>

        <label className={styles.timeline}>
          <QueryBuilderOutlinedIcon className={styles.timelineIcon} />
          {' '} {notification.timeline}
        </label>
      </div>

    </div>
  );
}

export default NotificationItem;