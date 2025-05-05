const fs = require('fs');
const path = require('path');
const {processChange} = require("../src/parser");

jest.mock('fs');
jest.mock('path');

describe('processChange', () => {
    it('check if the path provided is well treated', () => {

        const resolveSpy = jest.spyOn(path, 'resolve').mockReturnValueOnce('../test_data/patient_data_1.json');

        processChange('../test_data/patient_data_1.csv');

        expect(resolveSpy).toBeCalledWith('../test_data/patient_data_1.json');

        resolveSpy.mockRestore();
    });
});