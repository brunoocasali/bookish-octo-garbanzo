import DS from 'ember-data';
import ENV from '../../config/environment';

export default class ApplicationAdapter extends DS.RESTAdapter {
  host = ENV.HOST;
  namespace = 'api/v1';
}
