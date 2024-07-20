function analyzeCarMileage(cars) {
  let highestMileage = 0;
  let lowestMileage = cars[0].mileage;
  //   const output = {
  //     averageMileage: 0,
  //     highestMileageCar: {},
  //     lowestMileageCar: {},
  //     totalMileage: 0,
  //   };

  const totalMileage = cars.reduce((total, num) => {
    return total + num.mileage;
  }, 0);

  const averageMileage = totalMileage / cars.length;

  // finding highest mileage number
  //   for (let i = 0; i < cars.length; i++) {
  //     if (cars[i].mileage > highestMileage) {
  //       highestMileage = cars[i].mileage;
  //     }
  //   }

  // finding lowest mileage number
  //   for (let i = 0; i < cars.length; i++) {
  //     if (cars[i].mileage < lowestMileage) {
  //       lowestMileage = cars[i].mileage;
  //     }
  //   }

  //   const highestMileageCar = cars.find((car) => car.mileage === highestMileage);
  //   const lowestMileageCar = cars.find((car) => car.mileage === lowestMileage);

  //   output["averageMileage"] = averageMileage;
  //   output["highestMileageCar"] = highestMileageCar;
  //   output["lowestMileageCar"] = lowestMileageCar;
  //   output["totalMileage"] = totalMileage;

  //   return output;

  const highestMileageCar = cars.reduce(
    (highest, car) => (car.mileage > highest.mileage ? car : highest),
    cars[0]
  );

  const lowestMileageCar = cars.reduce(
    (lowest, car) => (car.mileage > lowest.mileage ? lowest : car),
    cars[0]
  );

  return {
    averageMileage: averageMileage,
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
}

module.exports = analyzeCarMileage;
