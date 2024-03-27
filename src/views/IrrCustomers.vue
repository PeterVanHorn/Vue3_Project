<!-- Peter Van Horn
Clientside Programming 
Task 2
12/11/2023 -->


<script>
// set up access to the db.json file with this section
  export default {
    data() {
      return {
        customers: []
      }
    },
    mounted(){
      fetch('http://localhost:8888/customers')
      .then(res => res.json())
      .then(data => this.customers = data)
      .catch(err => console.log(err.message))
    }
  }
</script>

<template>
  <!-- mostly code from our first vue assignment -->
  <!-- list the customers with the v-for loop and then display some of their attributes -->
    <div class="content-container">
      <div class="columns">
        <div class="column is-8">
          <div class="section content-title-group">
            <h2 class="title">Customers</h2>
            <ul>
              <li v-for="customer in customers" :key="customer.id">
                <div class="card">
                  <div class="card-content">
                    <div class="content">
                      <div class="description">
                        {{ customer.name }}
                      </div>
                      <div class="description">{{ customer.status }}</div>
                    </div>
                  </div>
                  <!-- at the footer is a button to switch to the customer-detail view. -->
                  <footer class="card-footer">
                    <router-link :to="{ name :'Customer-detail', params: { id: customer.id }}">Select</router-link>
                      <i class="fas fa-check"></i>
                  </footer>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/design/index.scss';
</style>