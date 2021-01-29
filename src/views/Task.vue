<template>
  <div class="card" v-if="task.id">
    <h2>{{ task.title }}</h2>
    <p>
      <strong>Статус</strong>:
      <AppStatus :type="task.status" :key="task.status" />
    </p>
    <p>
      <strong>Дэдлайн</strong>: {{ new Date(task.date).toLocaleDateString() }}
    </p>
    <p><strong>Описание</strong>: {{ task.desc }}</p>
    <div>
      <button class="btn" @click="changeStatus('pending')">
        Взять в работу
      </button>
      <button class="btn primary" @click="changeStatus('done')">
        Завершить
      </button>
      <button class="btn danger" @click="changeStatus('cancelled')">
        Отменить
      </button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ id }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from "../components/AppStatus";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { reactive } from "vue";

export default {
  components: { AppStatus },
  setup() {
    const store = useStore();
    const route = useRoute();

    const task = reactive({
      ...store.state.tasks.find(task => task.id === route.params.taskId)
    });

    function changeStatus(status) {
      task.status = status;
      store.commit("changeStatus", { id: task.id, status });
    }

    return {
      task,
      changeStatus,
      id: route.params.taskId
    };
  }
};
</script>

<style scoped></style>
