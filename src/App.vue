<template>
  <div class="flex">
    <div>#1</div>
    <div>#1</div>
    <div>#1</div>
    <div>#1</div>
    <div>#1</div>
    <div>#1</div>
    <div>#1</div>
    <div>#1</div>
    <div>#1</div>
    <div>#1</div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
.flex {
  display: grid;

  & > div {
    width: 100px;
    height: 100px;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
