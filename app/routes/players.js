import Route from '@ember/routing/route';
import PagedRemoteArray from 'ember-cli-pagination/remote/paged-remote-array';

export default class PlayersRoute extends Route {
  model({ page, perPage }) {
    return PagedRemoteArray.create({
      modelName: 'player', store: this.store,
      page, perPage
    });
  }
}
