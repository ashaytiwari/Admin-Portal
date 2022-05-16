import React from 'react';

import NotificationItem from './NotificationItem/NotificationItem';

import { newNotificationList, oldNotificationList } from 'assets/data/notificationData';

import styles from './NotificationPopup.module.scss';

function NotificationPopup() {

  function renderPopupHeader() {

    return (
      <div className={styles.popupHeader}>
        <h5>Notifications</h5>
        <span>You have 2 unread messages</span>
      </div>
    );

  }

  function renderDashedBorder() {

    return <div className={styles.dashedBorder}></div>;

  }

  function renderNotificationItem(notification) {

    const notificationItemProperties = {
      notification
    };

    return <NotificationItem {...notificationItemProperties} />;
  }

  function renderNewNotificationSection() {
    return (
      <div className={styles.notificationsSection}>
        <label className={styles.notificationCategoryLabel}>NEW</label>

        <div className={styles.notificationsList}>
          {
            newNotificationList.map((notification) => (
              renderNotificationItem(notification)
            ))
          }
        </div>

      </div>
    );
  }

  function renderOldNotificationSection() {
    return (
      <div className={styles.notificationsSection}>
        <label className={styles.notificationCategoryLabel}>BEFORE THAT</label>

        <div className={styles.notificationsList}>
          {
            oldNotificationList.map((notification) => (
              renderNotificationItem(notification)
            ))
          }
        </div>

      </div>
    );
  }

  return (
    <div className={styles.notificationPopupContainer}>

      {renderPopupHeader()}

      {renderDashedBorder()}

      <div className={`hide-scrollbar ${styles.notificationPopupBody}`}>

        {renderNewNotificationSection()}

        {renderDashedBorder()}

        {renderOldNotificationSection()}

      </div>

    </div>
  );
}

export default NotificationPopup;