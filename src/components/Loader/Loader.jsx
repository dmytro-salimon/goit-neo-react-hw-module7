import { SyncLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <SyncLoader color={"white"} />
    </div>
  );
};

export default Loader;
