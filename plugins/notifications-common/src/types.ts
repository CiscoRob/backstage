/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as muiIcons from '@material-ui/icons';

/** @public */
export type NotificationType = 'read' | 'unread' | 'saved';

/** @public */
export type NotificationIcon = keyof typeof muiIcons;

/** @public */
export type Notification = {
  id: string;
  userRef: string;
  title: string;
  description: string;
  link: string;
  icon?: NotificationIcon;
  image?: string;
  created: Date;
  read?: Date;
  saved: boolean;
};

/** @public */
export type NotificationStatus = {
  unread: number;
  read: number;
};

/** @public */
export type NotificationIds = {
  ids: string[];
};
