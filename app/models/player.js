import DS from 'ember-data';
const { attr, Model } = DS;

export default class Player extends Model {
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('string') position;
  @attr('number') heightFeet;
}
