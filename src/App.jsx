import { useState } from "react";

import "./App.css";
import CackeView from "./app/feauture/cacke/cakeview/CackeView";
import IcecreamView from "./app/feauture/Icecream/icecreamview/IcecreamView";
import UseList from "./app/feauture/user/uselist/UseList";

function App() {
  return (
    <>
      <CackeView />
      <IcecreamView />
      <UseList />
    </>
  );
}

export default App;
