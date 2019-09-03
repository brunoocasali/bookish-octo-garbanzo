import DS from 'ember-data';
import { decamelize } from '@ember/string';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    team: { embedded: 'always' }
  },

  modelNameFromPayloadKey() {
    return 'player';
  },

    keyForAttribute(key) {
    return decamelize(key);
  }
});
