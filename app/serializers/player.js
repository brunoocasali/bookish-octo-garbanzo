import DS from 'ember-data';
import { decamelize } from '@ember/string';

export default class PlayerSerializer extends DS.RESTSerializer {
  modelNameFromPayloadKey() {
    return 'player';
  }

  keyForAttribute(key) {
    return decamelize(key);
  }
}
