export type Subscription =
  | {
      id: string;
      title: string;
      switchText: string;
      description: string;
      price: number;
      watchMaxPrice: number;
      createdAt: Date;
      updatedAt: Date;
    }
  | Record<string, never>;

export interface SubscriptionState {
  value: Subscription | Record<string, never>;
}