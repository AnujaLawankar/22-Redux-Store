import { createContext, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ children }) => {
  // You don't need to define the store state and dispatch here
  // Instead, you can access them directly from the Redux store using useSelector and useDispatch hooks
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return <Provider value={[state, dispatch]}>{children}</Provider>;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
