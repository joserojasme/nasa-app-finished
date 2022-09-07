import { useState } from "react";
import useFetch, { CachePolicies } from "use-http";
import { ICuriosityPhotosResponse, INasaCuriosityParams } from "./interface";

export const useNasa = () => {
  const { REACT_APP_API_BASE_URL, REACT_APP_API_KEY } = process.env;
  const [curiosityResponse, setCuriosityResponse] =
    useState<ICuriosityPhotosResponse>();
  const { get, response, error } = useFetch(REACT_APP_API_BASE_URL, {
    cachePolicy: CachePolicies.NO_CACHE,
  });

  const getCuriosityPhotos = async ({
    sol = 1000,
    page = 1,
    camera,
  }: INasaCuriosityParams) => {
    setCuriosityResponse({});

    const res = await get(
      `/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&page=${page}${
        camera && camera?.length > 0 ? `&camera=${camera}` : ""
      }&api_key=${REACT_APP_API_KEY}`
    );
    if (response.ok) {
      setCuriosityResponse(res);
    }
  };

  return {
    error,
    initialSearch: getCuriosityPhotos,
    curiosityResponse,
  };
};
