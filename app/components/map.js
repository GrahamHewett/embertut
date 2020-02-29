import Component from '@glimmer/component';
import ENV from "official-tutorial/config/environment";
import { action } from '@ember/object'

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

export default class MapComponent extends Component {

  @action
  logToken() {
    console.log('this', this.token); //eslint-disable-line
  }
  @action
  logProps() {
    console.log('co-ords', `latitude: ${this.args.lat} longitude: ${this.args.lng}` ); //eslint-disable-line
  }

  get src() {
    let { lng, lat, width, height, zoom } = this.args;
    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions  = `${width}x${height}`;
    let accessToken = `access_token=${this.token}`;
    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }

  get token() {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }

}