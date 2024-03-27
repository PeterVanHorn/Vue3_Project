<!-- Peter Van Horn
Clientside Programming 
Task 2
12/11/2023 -->

<script>
// bringing in the information from the db file again here, same as in IrrCustomers
import { data } from '../shared/functionality';

export default {
    name: 'CustomerDetail',
    props: ['id'],
    data() {
      return{
        customer: null
      }
    },
    mounted() {
      fetch('http://localhost:8888/customers/' + this.id)
      .then(res => res.json())
      .then(data => this.customer = data)
      .catch(err => console.log(err.message))
    },
    methods: {
      async saveCustomer() {
        await data.updateCustomer(this.customer);
        this.$router.push({ name: 'customers' });
      },
      async newCustomer(){
        await data.addCustomer(this.customer);
        this.$router.push({name: 'home'})
      }
    },
}

</script>

<template>
      <!-- list out the details of a given customer, the commented out lines are part of my effort to modify the customers, will come back to it -->
      <div v-if="customer">
      <div class="section content-title-group">
        <h2 class="title">Edit Customer</h2>
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">{{ customer.name }}</p>
          </header>
          <div class="card-content">
            <div class="content">
              <div class="field">
                <label class="label" for="status">status</label>
                <input class="input" name="status" v-model="customer.status" />
              </div>
              <div class="field">
                <label class="label" for="type">type</label>
                <label class="input" name="type" readonly> {{ customer.type }} </label>
              </div>
              <div class="field">
                <label class="label" for="address">address</label>
                <label class="input" name="address" readonly> {{ customer.address }} </label>
              </div>
              <div class="field">
                <label class="label" for="description">description</label>
                <input class="input" name="description" v-model="customer.description" />
              </div>
            </div>
          </div>
          <footer class="card-footer">
            <button class="link card-footer-item">
              <RouterLink to="/customers">Cancel</RouterLink>
            </button>
            <button class="link card-footer-item" @click="saveCustomer(customer)">
              <i class="fas fa-save"></i>
              <span>Save</span>
            </button>
          </footer>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading Customer Details</p>
    </div>
</template>

<style lang="scss" scoped>
@import '@/design/index.scss';
</style>../shared/functionality.js