<!-- Peter Van Horn
Clientside Programming 
Task 2
12/11/2023 -->


<script>
// This code is heavily modified from a tutorial https://www.section.io/engineering-education/building-vuejs-app-with-json-server-and-axios/
import axios from 'axios';

export default {
  // creating the model for the db.json object to be added
    name: 'App',
    data() {
      return{
        customers: [],
        customerName: "",
        customerStatus: "",
        customerType: "",
        customerAddress: "",
        customerDescription: "",
        customerId: ""
      }
    },
    // method to add customer to the db.json file using axio.post. assigns inputs to the values passed
    methods: {
      async addCustomer() {
      const res = await axios.post(`http://localhost:8888/customers`, {
        name: this.customerName,
        status: this.customerStatus,
        type: this.customerType,
        address: this.customerAddress,
        description: this.customerDescription
      });
      this.customers = [...this.customers, res.data];
      this.customerName = "";
    },
  }
}
</script>

<template>
  <!-- this is the home page. it contains the card below which allows users to create new customers
  objects to add to the db.json. this code is directly from the parts lab from earlier in the class
  fields start empty and then when the create button is clicked it creates an object from the inputs 
  and passes it to the db.json -->
  <div class="content-container">
      <div class="columns">
        <div class="column is-8">
          <div class="section content-title-group">
            <h2 class="title">Home</h2>
          </div>
        </div>
      </div>
    </div>  
  <div class="section content-title-group">
        <h2 class="title">Add Customer</h2>
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">New Customer</p>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="field">
                <label class="label" for="name">name</label>
                <input class="input" name="name" v-model="customerName" />
              </div>
              <div class="field">
                <label class="label" for="status">status</label>
                <input class="input" name="status" v-model="customerStatus" />
              </div>
              <div class="field">
                <label class="label" for="type">type</label>
                <input class="input" name="type" v-model="customerType" />
              </div>
              <div class="field">
                <label class="label" for="address">address</label>
                <input class="input" name="address" v-model="customerAddress" />
              </div>
              <div class="field">
                <label class="label" for="description">description</label>
                <input class="input" name="description" v-model="customerDescription" />
              </div>
            </div>
          </div>
          <footer class="card-footer">
            <!-- <button class="link card-footer-item">
              <RouterLink to="/customers">Cancel</RouterLink>
            </button> -->
            <button class="link card-footer-item" @click="addCustomer()">
              <i class="fas fa-save"></i>
              <span>Create</span>
            </button>
          </footer>
        </div>
      </div>
</template>

<style lang="scss" scoped>
@import '@/design/index.scss';
</style>
