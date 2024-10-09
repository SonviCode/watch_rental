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
    const subState = localStorage.getItem("subscription");
    const purchaseSelectedWatchState = localStorage.getItem(
      "purchaseSelectedWatch"
    );

    return {
      subscription: subState ? JSON.parse(subState) : { value: {} },
      purchaseSelectedWatch: purchaseSelectedWatchState
        ? JSON.parse(purchaseSelectedWatchState)
        : { value: {} },
    };
  } catch (e) {
    return undefined;
  }
};
