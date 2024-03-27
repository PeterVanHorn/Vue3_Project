<!-- Peter Van Horn
Clientside Programming 
Task 2
12/11/2023 -->

<script setup>
// import iconify and set up defineProps and defineEmits. Both from Komarnicki's tutorial
import { Icon } from "@iconify/vue"
const props = defineProps({
    task: {
        type: Object,
        required: true,
    },
    index: {
      type: Number,
      required: true,
    },
});
defineEmits(["toggle-complete", "delete-task"]);
</script>

<template>
<!-- displays the list of tasks with toggles to mark them complete and delete them -->
<li>
    <input type="checkbox" :checked="task.iscompleted" @input="$emit('toggle-complete', index)" />
    <div class="task">
        <span>
            {{ task.task }}
        </span>
    </div>
    <div class="task-actions">
        <Icon icon="ph:trash" color="#f95e5e" width="22" @click="$emit('delete-task', task.id)" />
    </div>
</li>
</template>

<style lang="scss" scoped>
// styling is all from Komarnicki's app tutorial on youtube
li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 10px;
  background-color: #f1f1f1;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);

  &:hover {
    .task-actions {
      opacity: 1;
    }
  }

  input[type="checkbox"] {
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

    &:checked {
      background-color: #41b080;
    }
  }

  .task {
    flex: 1;

    input[type="text"] {
      width: 100%;
      padding: 2px 6px;
      border: 2px solid #41b080;
    }
  }

  .task-actions {
    display: flex;
    gap: 6px;
    opacity: 0;
    transition: 150ms ease-in-out;
    .icon {
      cursor: pointer;
    }
  }
}

</style>