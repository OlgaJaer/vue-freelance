<template>
  <span class="badge" :class="statusClass">{{ statusName }}</span>
</template>
<script>
export default {
  props: ["type"],
  setup(props) {
    // console.log(props);
    return {
      statusName: {
        active: "Активная",
        done: "Завершенная",
        pending: "Выполняется",
        cancelled: "Отмененная"
      }[props.type],
      statusClass: {
        active: "primary",
        done: "primary",
        pending: "warning",
        cancelled: "danger"
      }[props.type]
    };
  }
};
</script>
