import { stationPhotos } from './station-photos';

export function getStationPhotos(stations) {
  return stations.map((station) => {
    const foundName = stationPhotos.find((photo) => photo.name === station.full_name);
    return {
      ...station,
      imgUrl: foundName.imgUrl
    };
  });
}
