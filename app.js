function fahrenheittocelsius(fahrenheit) 
{
  var fahrenheittemperature = fahrenheit;
  var fahrenheittocelsius = (fahrenheittemperature - 32) * 5 / 9;
  var description = fahrenheittemperature+'\xB0F is ' + fahrenheittocelsius + '\xB0C.';
    console.log(description);
} 
fahrenheittocelsius(45);