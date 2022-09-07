import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { useNasa } from "../../network/hooks/useNasa";
import { imageSrcLogoNasa } from "../../utils/constants";
import "./styles.css";

const NasaCuriosity = () => {
  const { curiosityResponse, error, initialSearch } = useNasa();
  const [loading, setLoading] = useState<boolean>(true);
  const [camare, setCamera] = useState<string>("");

  useEffect(() => {
    initialSearch({ camera: camare });
  }, [camare]);

  useEffect(() => {
    if (error) {
      alert("ocurrió un error");
    }
  }, [error]);

  useEffect(() => {
    if (curiosityResponse?.photos && curiosityResponse?.photos?.length > 0) {
      setLoading(false);
    }
  }, [curiosityResponse]);

  return (
    <>
      <Header imageSrc={imageSrcLogoNasa} />
      <div className="filter">
        <h4>filtrar por cámara: </h4>
        <select
          onChange={(e) => setCamera(e.target.value)}
          className="filter__select"
          name="select"
          defaultValue="default"
        >
          <option value="default" selected>
            Seleccione...
          </option>
          <option value="FHAZ">FHAZ</option>
          <option value="RHAZ">RHAZ</option>
          <option value="MAST">MAST</option>
          <option value="MAHLI">MAHLI</option>
          <option value="CHEMCAM">CHEMCAM</option>
          <option value="MARDI">MARDI</option>
          <option value="NAVCAM">NAVCAM</option>
        </select>
      </div>
      {loading && <div>Cargando...</div>}
      {!loading && curiosityResponse?.photos && (
        <Card curiosityResponse={curiosityResponse} />
      )}
    </>
  );
};

export default NasaCuriosity;
