import Route from '@ember/routing/route';

export default class PlayersRoute extends Route {
  model() {
    return this.store.findAll('player');
  }
}
