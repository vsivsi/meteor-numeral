numeral = this.numeral;

if (Meteor.isClient) {
  var numeralWithFormat = function (number, format) {
    return (format) ? numeral(number).format(format) : numeral(number);
  };
  Template.registerHelper('numeral', numeralWithFormat);
}