function isWeekDay(weekday){
    if (weekday.startsWith("S")){
      return false;
    }
    else {
      return true;
    }
  }
  module.exports= isWeekDay