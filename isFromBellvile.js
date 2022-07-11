function isFromBellvile(registration){
    if (registration.startsWith("CY")){
      return true;
    }
    else {
      return false;
    }
  }
  module.exports= isFromBellvile