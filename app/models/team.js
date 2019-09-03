import DS from 'ember-data';
const { attr, Model } = DS;

export default class TeamModel extends Model {
  @attr('string') abbreviation;
  @attr('string') city;
  @attr('string') conference;
  @attr('string') position;
  @attr('string') division;
  @attr('string') fullName;
  @attr('string') name;
}
