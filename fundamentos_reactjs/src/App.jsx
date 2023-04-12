import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { SideBar } from "./components/SideBar";
import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post/>
          <Post/>
          <Post/>
        </main>
      </div>
    </div>
  );
}

export default App;
