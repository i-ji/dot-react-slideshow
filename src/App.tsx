import Slideshow from "./components/slideshow";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Slideshow />
    </Provider>
  );
}

export default App;
