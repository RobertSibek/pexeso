import React from "react";
import { createStore, createHooks, Provider } from "react-global-hook";

const initialState = {
  counter: 0,
};

const actions = ({ setState, getState }) => ({
  increase() {
    const { count } = getState();
    setState({ count: count + 1 });
  },
  decrease() {
    const { count } = getState();

    if (count <= 0) return;

    setState({ count: count - 1 });
  },
});

/**
 * The initializer run when Provider render
 */
const initializer = (state) => ({
  ...state,
  counter: new Date().getDay(),
});

const store = createStore(initialState, actions, initializer);
const useGlobal = createHooks(store);

const OtherComp = () => {
  const [state, actions] = useGlobal(["counter"]); // Will update based on changes to counter

  return <p>Count:{state.counter}</p>;
};

const Container = () => {
  const actions = store.actions; // will not update

  return (
    <div>
      <button type="button" onClick={actions.decrease}>
        Decrease
      </button>
      <button type="button" onClick={actions.increase}>
        Increase
      </button>
      <OtherComp />
    </div>
  );
};

const Store = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);

export default Store;
