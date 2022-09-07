import { IPhotos } from "../../network/hooks/interface";
import { ICard } from "./interface";
import "./styles.css";

const Card = ({ curiosityResponse }: ICard) => {
  return (
    <ul className="cards">
      {curiosityResponse.photos?.map((item: IPhotos) => (
        <li key={item.id} className="cards__item">
          <div className="card">
            <div>
              <img src={item.img_src} alt="hola" />
            </div>
            <div className="card__content">
              <div className="card__title">{`ID: ${item.id}`}</div>
              <p className="card__text">
                {`Imagen tómada con la cámara ${item.camera?.name} - ${item.camera?.full_name} el día ${item.earth_date}`}
              </p>
              <button className="btn btn--block card__btn">Ver detalle</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Card;
