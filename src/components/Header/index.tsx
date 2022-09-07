import { IHeader } from "./interface";
import "./styles.css";

const Header = ({ imageSrc }: IHeader) => {
  return (
    <>
      <div className="nasa-header">
        <img className="nasa-header__logo" src={imageSrc} alt="Nasa" />
      </div>
    </>
  );
};

export default Header;
