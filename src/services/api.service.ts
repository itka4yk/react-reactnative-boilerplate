import axios from 'axios';

export default class Api {
  static getSampleEmployees = () => axios.get('http://dummy.restapiexample.com/api/v1/employees')
                                         .then(({ data }) => data);
}
