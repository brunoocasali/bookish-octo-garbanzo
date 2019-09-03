import DS from 'ember-data';
const { attr, belongsTo, Model } = DS;

export default class PlayerModel extends Model {
  @attr('string') firstName;
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('string') position;
  @attr('number') heightFeet;
  @attr('number') heightInches;
  @attr('number') weightPounds;
  @belongsTo({async: false}) team;
}
