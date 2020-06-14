import App from "next/app";
import darkThemeReducer from "../store/darkThemeReducer";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";

import "../assets/css/style.css";
import "../assets/css/style_1.css";

const rootReducer = combineReducers({
  theme: darkThemeReducer,
});

const store = createStore(rootReducer);

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

const wrapper = createWrapper(() => store);

export default wrapper.withRedux(MyApp);
