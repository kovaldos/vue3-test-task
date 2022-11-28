<template>
  <section class="section catalog catalog--rent">
    <div class="container catalog__container">
      <div class="catalog__heading">
        <h1 class="title title--h2 catalog__title">Каталог</h1>
      </div>
      <div class="catalog__wrapper">
        <div class="catalog__wrapper-cols">
          <div class="catalog__wrapper-col catalog__wrapper-col--01">
            <div class="catalog__filter catalog__filter--rent">
              <div class="catalog__filter">
                <ul class="catalog__filter-list">
                  <li
                    class="catalog__filter-list-item"
                    v-for="brand in brandsList"
                    :key="brand.id"
                  >
                    <div class="custom-toggle">
                      <label>
                        <input
                          type="checkbox"
                          :id="brand.id"
                          :name="brand.name"
                          :value="brand.name"
                          v-model="checkedNames"
                        /><span class="custom-toggle__icon"></span
                        ><span class="custom-toggle__label"
                          >{{ brand.name }}
                        </span>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="catalog__wrapper-col catalog__wrapper-col--02">
            <div class="catalog__items catalog__items--rent">
              <div class="catalog__cards catalog__cards--grid">
                <transition-group name="cards-list">
                  <div
                    class="catalog__card"
                    v-for="card in filterData"
                    :key="card.id"
                  >
                    <div class="catalog__card-col catalog__card-col--01">
                      <h2 class="title catalog__card-title">
                        {{ card.title }}
                      </h2>
                      <div class="catalog__card-pic">
                        <img
                          src="https://via.placeholder.com/260x160"
                          alt="rent technic image"
                        />
                      </div>
                    </div>
                    <div class="catalog__card-col catalog__card-col--02">
                      <h3
                        class="title catalog__card-model"
                        :data-brand="card.brand"
                      >
                        {{ card.name }}
                      </h3>
                    </div>
                    <div class="catalog__card-col catalog__card-col--03">
                      <div class="catalog__card-price">
                        <span class="catalog__card-price-num">
                          {{ card.num }}
                        </span>
                        <span class="catalog__card-price-currency">
                          {{ card.currency }}
                        </span>
                        <span class="catalog__card-price-time">
                          {{ card.time }}
                        </span>
                      </div>
                    </div>
                    <div class="catalog__card-colors" v-if="card.colors">
                      <ul class="catalog__card-list">
                        <li
                          class="catalog__card-list-item"
                          v-for="color in card.colors"
                          :key="color"
                        >
                          <div class="custom-toggle custom-toggle--radio">
                            <label>
                              <input
                                type="radio"
                                name="color"
                                :value="color.value"
                                v-model="checkedColor"
                              /><span
                                class="custom-toggle__icon"
                                style="display: none"
                              ></span
                              ><span
                                class="custom-toggle__label color"
                                :class="'color--' + color.value"
                                :style="'background-color:' + color.value"
                              ></span>
                            </label>
                          </div>
                          <ul
                            class="catalog__card-list sizes-list"
                            v-if="checkedColor === color.value"
                          >
                            <li
                              class="catalog__card-list-item sizes-list__item"
                              v-for="size in color.sizes"
                              :key="size.id"
                            >
                              <span class="size" v-if="size.flag !== false">{{
                                size.value
                              }}</span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </transition-group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    brandsList: {
      type: Array,
      required: true,
    },
    filterData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      checkedNames: [],
      checkedColor: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>
