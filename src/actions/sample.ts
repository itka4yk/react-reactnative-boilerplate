import { createActionFactory } from "../helpers/actionFactory";

const factory = createActionFactory('SAMPLE');

export const getSampleEmployees = factory.create('GET_SAMPLE_EMPLOYEES');
export const getSampleEmployeesAsync = factory.createAsync('GET_SAMPLE_EMPLOYEES_ASYNC');
