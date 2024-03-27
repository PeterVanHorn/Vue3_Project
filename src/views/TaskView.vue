<!-- Peter Van Horn
Clientside Programming 
Task 2
12/11/2023 -->

<script setup>
// This code is modified from the Komarnicki tutorial
import { ref } from "vue";
import { uid } from "uid";
import TaskCreator from '@/components/TaskCreator.vue';
import TaskItem from '@/components/TaskItem.vue';
const taskList = ref([]);

//method to get the list of tasks from local storage
const fetchTaskList = () => {
  const savedTaskList = JSON.parse(localStorage.getItem("taskList"))
  if(savedTaskList){
    taskList.value = savedTaskList;
  }
};
fetchTaskList();

// method to convert the list of tags into a string and store in local storage
const setTaskListLocalStorage = () => {
  localStorage.setItem("taskList", JSON.stringify(taskList.value))
};

// method to create a new task
const createTask= (task) => {
    taskList.value.push({
        id: uid(),
        task,
        isCompleted: null,
        isEditing: null,
    });
    setTaskListLocalStorage()
};

// method to delete a task
const deleteTask = (taskId) => {
taskList.value = taskList.value.filter((task) => task.id !== taskId)
setTaskListLocalStorage()
};

// method to toggle the iscompleted attribute of tasks
const toggleTaskComplete = (taskPos) => {
  taskList.value[taskPos].isCompleted = !taskList.value[taskPos].isCompleted
  setTaskListLocalStorage()
};
</script>

<template>
  <!-- This is just a header and the field to create tasks from the Komarnicki tutorial -->
  <div class="content-container">
      <div class="columns">
        <div class="column is-8">
          <div class="section content-title-group">
            <h2 class="title">Tasks</h2>
          </div>
        </div>
      </div>
    </div>
  <main>
    <h1>Create Task</h1>
    <TaskCreator @create-task="createTask"/>
    <ul class="task-list">
      <TaskItem 
      v-for="(task, index) in taskList"
      :task="task" 
      :index="index" 
      @toggle-complete="toggleTaskComplete"
      @delete-task="deleteTask"/>
    </ul>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;
}

@import '@/design/index.scss';
</style>