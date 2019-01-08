export default function manageBand(
  state = {
    bands: []
  },
  action
) {
  switch (action.type) {
    case "ADD_BAND":
      return { ...state, bands: [...state.bands, action.band] };
      break;
    case "DELETE_BAND":
      return { bands: state.bands.filter(band => band.id !== action.bandId) };
      break;

    default:
      return state;
  }
}
