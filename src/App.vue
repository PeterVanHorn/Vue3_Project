<!-- Peter Van Horn
Clientside Programming 
Task 2
12/11/2023 -->

<!-- unless otherwise noted the files in this package are mostly boiler-plate. 
I created the .vue files and populated them with code that I learned from two tutorials on youtube.
The tutorials are "Vue 3 Crash Course" by John Komarnicki, and the "Vue JS 3 Tutorial for Beginners" series by Net Ninja.
I also used design elements from the John Papa course on pluralsight, they are found in the design folder under src.
I used code and design elements from the parts assignment from earlier in the semester. This code is mostly in the IrrCustomers.vue and Customer-detail.vue files.
I did not use the functionality.js in the shared directory. Credit to Paul Morgan for that code.
The index.js file in the router directory is modified from the original boiler-plate
The .png file in the assets directory was generated using my local install of Stable Diffusion. 
I followed Komarnicki's formatting convention by leading the .vue files with the script section, followed by template and with style at the bottom.
Essentially none of the styling is my own. I am not good at that kind of thing.
There are tons of unneccessary files in this project. I was trying many many different methods to modify my db.json file and nothing worked. 
I will keep trying after this class is over-->

<script setup>
import { RouterView } from 'vue-router'
import VanHornHeader from './components/VanHornHeader.vue';
</script>

<template>
  <VanHornHeader/>
  <RouterView/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap');
* {
  font-family: "Rubik", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
