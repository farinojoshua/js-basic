function calculateParkingFee(vehicleType, duration) {
  if (duration < 1) {
    duration = 1;
  }

  let firstHour = 0;
  let nextHour = 0;
  let extraCharge = 0;
  let oneDay = 24;

  if (vehicleType === "car") {
    firstHour = 5000;
    nextHour = 3000;
    extraCharge = 50000;
  } else if (vehicleType === "bike") {
    firstHour = 2000;
    nextHour = 1000;
    extraCharge = 20000;
  } else {
    return "Jenis kendaraan tidak valid.";
  }

  let total = firstHour;

  if (duration > 1) {
    total += (duration - 1) * nextHour;
  }

  if (duration > oneDay) {
    total += extraCharge;
  }

  console.log(total);
}

calculateParkingFee("car", 2);
