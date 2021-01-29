<template>
  <form class="card" @submit.prevent="createTask">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="task.title" />
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="task.date" />
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="task.desc"></textarea>
    </div>

    <button class="btn primary" :disabled="!isValid">Создать</button>
  </form>
</template>

<script>
import { useRouter } from "vue-router";
import { reactive, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const { commit } = useStore();
    const router = useRouter();
    const task = reactive({
      title: "",
      date: "",
      desc: ""
    });

    const isValid = computed(() => task.title && task.date && task.desc);

    function createTask() {
      commit("addActiveTask", {
        ...task,
        id: Date.now().toString(),
        status: new Date(task.date) > new Date() ? "active" : "cancelled"
      });
      router.push("/");
    }

    return {
      task,
      isValid,
      createTask
    };
  }
};
</script>
