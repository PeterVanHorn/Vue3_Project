import axios from 'axios';

import { API } from './config';

// this is code I got from Paul Morgan and the vue lab in an effort to modify my db.json file. 
// I did eventually get the customer edtiting and adding functionality to work
// updating is handled by a method here, adding is handled by a method in the home view

const getCustomers = async function(){
    const response = await axios.get('http://localhost:8888/customers');
    return response.data;
}

const updateCustomer = async function(customer) {
    try {
      const response = await axios.put(`${API}/customers/${customer.id}`, customer);
      const updatedCustomer = parseItem(response, 200);
      return updatedCustomer;
    } catch (error) {
      console.error(error);
      return null;
    }
  };


// const addCustomer = async function (customer){
//     try {
//         const response = await axios.post('${API}/customers/${customer.id}', customer);
//         return response.data;
//     }
//     catch (error) {
//         console.error('Could not add Customer', error);
//         throw error;
//     }
// }

export const parseItem = (response, code) => {
    if (response.status !== code) throw Error(response.message);
    let item = response.data;
    if (typeof item !== 'object') {
      item = undefined;
    }
    return item;
  };

export const data = {
    getCustomers, 
    updateCustomer, 
    // addCustomer
};