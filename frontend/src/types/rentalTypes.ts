import { Status } from "./statusType";
import { Subscription } from "./subscriptionTypes";
import { User } from "./userType";
import { Watch } from "./watchTypes";

export type Rental = {
  id: string;
  rentalNumber: string;
  user: User;
  status: Status;
  subscription: Subscription;
  watch: Watch[];
  dateStart: Date;
  dateEnd: Date;
  createdAt: Date;
  updatedAt: Date;
};
