import { Value } from "node_modules/react-date-picker/dist/esm/shared/types";
import { Status } from "./statusType";
import { Subscription } from "./subscriptionTypes";
import { User } from "./userType";
import { Watch } from "./watchTypes";

export type Rental = {
  id: string;
  rentalNumber: string;
  numberWatchesRemaining: number;
  user: User;
  status: Status;
  subscription: Subscription;
  watch: Watch[];
  dateStart: Date;
  dateEnd: Date;
  createdAt: Date;
  updatedAt: Date;
};

export type FetchCreateRentalData = {
  user_id: string;
  subscription: Subscription;
  date_start: Value;
  watch_id: string;
};
