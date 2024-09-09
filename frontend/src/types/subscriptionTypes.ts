export type Subscription =
  | {
      id: number;
      title: string;
      switchText: string;
      description: string;
      price: number;
      watchMaxPrice: number;
    }
  | Record<string, never>;

export interface SubscriptionState {
  value: Subscription | Record<string, never>;
}
