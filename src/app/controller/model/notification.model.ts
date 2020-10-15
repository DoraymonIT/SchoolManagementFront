import { NotificationPermission } from "./notification-permission.model";

export class Notification {
  private id: number;

  private contenu: string;

  private dateCreation: Date;
  private typeNotification: string;
  private statu: boolean;
  private sender: string;
  private recever: string;

  private notificationPermissions: Array<NotificationPermission>;
}
