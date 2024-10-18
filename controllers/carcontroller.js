let cars = [];


export const getAllCars = (request, response) => {
    response.status(200).json(cars);
};

export const getCarById = (request, response) => {
    const { id } = request.params;
    const car = cars.filter((cars) => car.id === id);

    if (car) {
        response.status(404).json({
            message: 'Car not found',
        });
    }


    response.status(200).json(car);
};