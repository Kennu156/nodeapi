import { request, response } from "express";

let cars = [];


export const getAllCars = (request, response) => {
    response.status(200).json(cars);
};

export const getCarById = (request, response) => {
    const { id } = request.params;
    const car = cars.filter((cars) => car.id === id);

    if (!car.length) {
        response.status(404).json({
            message: 'Car not found',
        });
    }


    response.status(200).json(car);
};


export const createCar = (request, response) => {
    const { model, series, year } = request.body;

    const id = car.length > 0 ? car.length + 1 : 1;

    cars.push({
        id,
        model,
        series,
        year,
    });

    response.status(201).josn(car)

}