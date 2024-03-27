<!-- Peter Van Horn
Clientside Programming 
Task 2
12/11/2023 -->

<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <nav class="container">
            <div class="branding">
                <img src="../assets/Irr_Logo.png">
                <h1>Irrigation Management</h1>
            </div>
            <ul class="nav-routes">
                <RouterLink to="/">Home</RouterLink>
                <!-- <RouterLink to="/about">About</RouterLink> -->
                <RouterLink to="/customers">Customers</RouterLink>
                <RouterLink to="/create">Create New</RouterLink>
                <RouterLink to="/task">Tasks</RouterLink>
            </ul>
        </nav>
    </header>

</template>

<style lang="scss" scoped>
header {
  background-color: hsl(124, 34%, 51%);
  nav {
    display: flex;
    align-items: center;
    padding: 25px 16px;

    .branding {
      display: flex;
      align-items: center;
      gap: 8px;
      img {
        max-width: 50px;
      }

      h1 {
        font-size: 24px;
      }
    }

    .nav-routes {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 12px;
      list-style: none;

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
}
</style>