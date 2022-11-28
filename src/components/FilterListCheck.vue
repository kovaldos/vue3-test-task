<template>
  <ul class="catalog__filter-list">
    <li class="catalog__filter-list-item" v-for="item in list" :key="item.id">
      <div class="custom-toggle">
        <label>
          <input
            type="checkbox"
            :id="item.id"
            :name="item.name"
            :value="item.name"
            v-model="item.model"
          /><span class="custom-toggle__icon"></span
          ><span class="custom-toggle__label">{{ item.name }} </span>
        </label>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      item: {
        id: "",
        name: "",
        value: "",
        model: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
