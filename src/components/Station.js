import { stationContainer, imgContainer, img, nameContainer } from '../helpers/station-styles';

export function Station({ station }) {
  return (
    <div style={stationContainer}>
      <div style={imgContainer}>
        <img src={station.imgUrl} alt="station location" style={img} />
      </div>
      <div style={nameContainer}>
        <h2>{station.full_name}</h2>
        <p>
          {station.station_code} | {station.province_state_code}
        </p>
      </div>
    </div>
  );
}
