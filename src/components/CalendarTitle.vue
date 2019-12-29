<template>
  <div id="calendar-title">
    <h1>Developer Agenda</h1>
    <p>La agenda oficial de actividades impresionantes del programador</p>
  </div>
</template>

<script>
export default {
  name: 'CalendarTitle',
}
</script>

<style lang="scss" scoped>
#calendar-title {
  color: white;
  text-align: center;
  margin: 20px 0 50px;

  h1 {
    font-size: 28px;
    font-weight: bold;
    text-shadow: 0 0 3px gray;
  }
}
</style>