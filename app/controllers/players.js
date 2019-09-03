import Controller from '@ember/controller';

export default class PlayersController extends Controller {
  queryParams = [
    'page', 'perPage'
  ]

  page = 1;
  perPage = 10;
}
