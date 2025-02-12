// "produceDrivingRange()" - Calculates whether a given trip is
// within range. For example, "produceDrivingRange(10)" returns a
// function that will take two strings as arguments and returns a
// message stating whether the trip is in range. If foo =
// produceDrivingRange(10), then foo('12th', '15th') would return
// "within range by 7" and foo('12th', '30th') would return "8
// blocks out of range". We recommend referencing the
// test/indexTest.js for more details.
function produceDrivingRange(blockRange) {
  return function(street1, street2) {
    var distance = Math.abs(parseInt(street1) - parseInt(street2));
    if (distance < blockRange) {
      // Returns "NaN", if variable operation not in parentheses
      return 'within range by ' + (blockRange - distance);
    } else if (distance > blockRange) {
      return distance - blockRange + ' blocks out of range';
    }
  };
}
// "produceTipCalculator()" - Returns a function that then
// calculates a tip. For example, produceTipCalculator(.10)
// returns a function that calculates ten percent tip on a fare.
// produceTipCalculator(.20) returns a function that calculates
// twenty percent tip on a fare.
function produceTipCalculator(percent) {
  return function(fare) {
    return fare * percent;
  };
}
// "createDriver" is a function that returns a Driver class. The
// class has reference to a driverId that is incremented each time
// a new driver is created. The rest of the code base does not
// have access to "driverId".
function createDriver() {
  let driverId = 0;

  return class Driver {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  };
}
