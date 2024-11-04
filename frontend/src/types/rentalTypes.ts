import { Subscription } from "./subscriptionTypes";
import { User } from "./userType";
import { Watch } from "./watchTypes";

export type Rental = {
  id: string;
  user: User;
  subscription: Subscription;
  watch: Watch[];
  dateStart: Date;
  dateEnd: Date;
  createdAt: Date;
  updatedAt: Date;
};
