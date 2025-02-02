import { Audio } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = ({ isLoading }) => {
  return (
    <div className={css.wrapper}>
      {isLoading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      )}
    </div>
  );
};
export default Loader;
