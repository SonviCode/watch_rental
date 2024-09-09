export const localStorageSetItem =
  (store: any) => (next: any) => (action: any) => {
    const result = next(action);
    const setElement = (element: string) => {
      if (action.type?.startsWith(element)) {
        const state = store.getState()[element];
        localStorage.setItem(element, JSON.stringify(state));
      }
    };

    setElement(action.type.split("/")[0]);
    return result;
  };

export const localStorageGetItem = () => {
  try {
    const subscriptionState = localStorage.getItem("subscription");

    return {
      subscription: subscriptionState
        ? JSON.parse(subscriptionState)
        : { value: {} },
    };
  } catch (e) {
    return undefined;
  }
};
