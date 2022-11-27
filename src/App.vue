<template>
  <SVGSprite />
  <div class="wrapper">
    <VueHeader />
    <main>
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
                                  <span
                                    class="size"
                                    v-if="size.flag !== false"
                                    >{{ size.value }}</span
                                  >
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
    </main>
    <VueFooter />
  </div>
</template>

<script>
import SVGSprite from "./components/SVGSprite.vue";
import VueHeader from "./components/VueHeader.vue";
import VueFooter from "./components/footer/VueFooter.vue";
import { initAccordions } from "./js/init-accordion";
import { initTabs } from "./js/init-tabs";
export default {
  data() {
    return {
      checkedNames: [],
      checkedColor: null,
      brandsList: [
        {
          id: "id-brand-1",
          name: "Volvo",
        },
        {
          id: "id-brand-2",
          name: "JCB",
        },
        {
          id: "id-brand-3",
          name: "Kocurek",
        },
        {
          id: "id-brand-4",
          name: "Hyundai",
        },
        {
          id: "id-brand-5",
          name: "Hitachi",
        },
        {
          id: "id-brand-6",
          name: "McCloskey",
        },
      ],
      cards: [
        {
          id: "id-card-1",
          title: "Техника",
          name: "Экскаватор-погрузчик Volvo BL71B",
          brand: "Volvo",
          num: "35 000",
          currency: " ₽ ",
          time: "/ смена",
        },
        {
          id: "id-card-2",
          title: "Техника",
          name: "Экскаватор Volvo BL71B-2",
          brand: "Volvo",
          num: "30 000",
          currency: " ₽ ",
          time: "/ смена",
          colors: [
            {
              id: "id-color-1",
              value: "yellow",
              sizes: [
                {
                  value: "x",
                  flag: true,
                },
                {
                  value: "xl",
                  flag: true,
                },
                {
                  value: "xxl",
                  flag: true,
                },
              ],
            },
            {
              id: "id-color-2",
              value: "red",
              sizes: [
                {
                  value: "x",
                  flag: false,
                },
                {
                  value: "xl",
                  flag: true,
                },
                {
                  value: "xxl",
                  flag: false,
                },
              ],
            },
            {
              id: "id-color-3",
              value: "orange",
              sizes: [
                {
                  value: "x",
                  flag: false,
                },
                {
                  value: "xl",
                  flag: false,
                },
                {
                  value: "xxl",
                  flag: false,
                },
              ],
            },
          ],
        },
        {
          id: "id-card-3",
          title: "Техника",
          name: "Экскаватор-погрузчик JCB 4CX",
          brand: "JCB",
          num: "38 000",
          currency: " ₽ ",
          time: "/ смена",
        },
        {
          id: "id-card-4",
          title: "Техника",
          name: "Экскаватор-погрузчик JCB 4CX-2",
          brand: "JCB",
          num: "48 000",
          currency: " ₽ ",
          time: "/ смена",
          colors: [
            {
              id: "id-color-4",
              value: "yellow",
              sizes: [
                {
                  value: "x",
                  flag: true,
                },
                {
                  value: "xl",
                  flag: true,
                },
                {
                  value: "xxl",
                  flag: false,
                },
              ],
            },
            {
              id: "id-color-5",
              value: "red",
              sizes: [
                {
                  value: "x",
                  flag: true,
                },
                {
                  value: "xl",
                  flag: true,
                },
                {
                  value: "xxl",
                  flag: false,
                },
              ],
            },
            {
              id: "id-color-6",
              value: "orange",
              sizes: [
                {
                  value: "x",
                  flag: true,
                },
                {
                  value: "xl",
                  flag: true,
                },
                {
                  value: "xxl",
                  flag: false,
                },
              ],
            },
          ],
        },
        {
          id: "id-card-5",
          title: "Техника",
          name: "Экскаватор-разрушитель KOCUREK KURH-45-34",
          brand: "Kocurek",
          num: "138 000",
          currency: " ₽ ",
          time: "/ смена",
        },
        {
          id: "id-card-6",
          title: "Техника",
          name: "Экскаватор-разрушитель KOCUREK KURH-45-34-2",
          brand: "Kocurek",
          num: "148 000",
          currency: " ₽ ",
          time: "/ смена",
        },
        {
          id: "id-card-7",
          title: "Техника",
          name: "Гусеничный экскаватор HITACHI ZX330LC-5G",
          brand: "Hitachi",
          num: "58 000",
          currency: " ₽ ",
          time: "/ смена",
          colors: [
            {
              id: "id-color-7",
              value: "yellow",
              sizes: [
                {
                  value: "x",
                  flag: true,
                },
                {
                  value: "xl",
                  flag: false,
                },
                {
                  value: "xxl",
                  flag: false,
                },
              ],
            },
            {
              id: "id-color-8",
              value: "red",
              sizes: [
                {
                  value: "x",
                  flag: true,
                },
                {
                  value: "xl",
                  flag: true,
                },
                {
                  value: "xxl",
                  flag: true,
                },
              ],
            },
            {
              id: "id-color-9",
              value: "orange",
              sizes: [
                {
                  value: "x",
                  flag: true,
                },
                {
                  value: "xl",
                  flag: true,
                },
                {
                  value: "xxl",
                  flag: false,
                },
              ],
            },
          ],
        },
        {
          id: "id-card-8",
          title: "Техника",
          name: "Гусеничный экскаватор HITACHI ZX330LC-5G-2",
          brand: "Hitachi",
          num: "68 000",
          currency: " ₽ ",
          time: "/ смена",
        },
        {
          id: "id-card-9",
          title: "Техника",
          name: "Гусеничный экскаватор Hyundai R330LC-9S",
          brand: "Hyundai",
          num: "45 000",
          currency: " ₽ ",
          time: "/ смена",
        },
        {
          id: "id-card-10",
          title: "Техника",
          name: "Гусеничный экскаватор Hyundai R330LC-9S-2",
          brand: "Hyundai",
          num: "55 000",
          currency: " ₽ ",
          time: "/ смена",
        },
        {
          id: "id-card-11",
          title: "Техника",
          name: "Дробильная установка McCloskey J45",
          brand: "McCloskey",
          num: "145 000",
          currency: " ₽ ",
          time: "/ смена",
        },
        {
          id: "id-card-12",
          title: "Техника",
          name: "Первичный грохот McCloskey R155",
          brand: "McCloskey",
          num: "155 000",
          currency: " ₽ ",
          time: "/ смена",
        },
      ],
    };
  },
  components: {
    SVGSprite,
    VueHeader,
    VueFooter,
  },
  methods: {},
  mounted() {
    initAccordions();
    initTabs();
  },
  computed: {
    filterData() {
      let data = [];
      // если есть выбранные чекбоксы
      if (this.checkedNames.length) {
        data = this.cards.filter(
          (card) => this.checkedNames.indexOf(card.brand.toString()) != -1
        );
      } else {
        // иначе отдаем все данные из массива
        data = this.cards;
      }
      return data;
    },
  },
};
</script>

<style lang="scss">
@import "./sass/vendor/normalize";
// @import "./sass/vendor/swiper";

@import "./sass/variables";
@import "./sass/mixins";
@import "./sass/functions";
@import "./sass/global/fonts";
@import "./sass/global/reboot";
@import "./sass/global/utils";
@import "./sass/global/container";
// Blocks
// ---------------------------------

@import "./sass/blocks/modal";
@import "./sass/blocks/btn";
@import "./sass/blocks/custom-input";
@import "./sass/blocks/custom-toggle";
@import "./sass/blocks/custom-select";
@import "./sass/blocks/link";
@import "./sass/blocks/title";
@import "./sass/blocks/text";
@import "./sass/blocks/data-accordion";
@import "./sass/blocks/btn-to-top";
@import "./sass/blocks/data-tabs";
@import "./sass/blocks/tabs";
@import "./sass/blocks/breadcrumbs";
@import "./sass/blocks/header";
@import "./sass/blocks/main-nav";
@import "./sass/blocks/burger";
// @import "./sass/blocks/hero";
// @import "./sass/blocks/hero-section";
// @import "./sass/blocks/directions";
// @import "./sass/blocks/techpark";
// @import "./sass/blocks/about-company";
// @import "./sass/blocks/history";
// @import "./sass/blocks/numbers";
// @import "./sass/blocks/principles";
// @import "./sass/blocks/team";
// @import "./sass/blocks/career";
// @import "./sass/blocks/blog";
// @import "./sass/blocks/contact-us";
// @import "./sass/blocks/partners";
// @import "./sass/blocks/tech";
// @import "./sass/blocks/services";
// @import "./sass/blocks/technic";
// @import "./sass/blocks/projects";
// @import "./sass/blocks/our-science";
// @import "./sass/blocks/projects-page";
// @import "./sass/blocks/catalog";
// @import "./sass/blocks/project-hero";
// @import "./sass/blocks/technologies";
// @import "./sass/blocks/project-technic";
// @import "./sass/blocks/video";
// @import "./sass/blocks/gallery";
// @import "./sass/blocks/similar-projects";
// @import "./sass/blocks/our-history";
// @import "./sass/blocks/our-vision";
// @import "./sass/blocks/achievements";
// @import "./sass/blocks/recycling";
// @import "./sass/blocks/technic-and-methods";
// @import "./sass/blocks/reviews";
// @import "./sass/blocks/cooperation";
// @import "./sass/blocks/we-need";
// @import "./sass/blocks/work-with-us";
// @import "./sass/blocks/vacancies";
// @import "./sass/blocks/vacancy";
// @import "./sass/blocks/vehicle-park";
// @import "./sass/blocks/promo";
// @import "./sass/blocks/blog-page";
// @import "./sass/blocks/blog-article";
// @import "./sass/blocks/rent-hero";
// @import "./sass/blocks/rent-hero-desc";
// @import "./sass/blocks/rent-technic";
// @import "./sass/blocks/rent-selections";
// @import "./sass/blocks/rent-about-us";
@import "./sass/blocks/catalog";
@import "./sass/blocks/catalog-filter";
@import "./sass/blocks/catalog-items";
@import "./sass/blocks/card";
@import "./sass/blocks/card-description";
// @import "./sass/blocks/rent-card-characteristics";
// @import "./sass/blocks/card-similar";
// @import "./sass/blocks/vehicle-card";
// @import "./sass/blocks/sale-goods-types";
// @import "./sass/blocks/goods";
// @import "./sass/blocks/delivery-calc";
// @import "./sass/blocks/sale-selections";
// @import "./sass/blocks/ecology";
// @import "./sass/blocks/sale-about-us";
// @import "./sass/blocks/road-build-hero";
// @import "./sass/blocks/map";
// @import "./sass/blocks/docs";
// @import "./sass/blocks/contacts";
// @import "./sass/blocks/directions-sup";
// @import "./sass/blocks/topical";
@import "./sass/blocks/footer";

// ---------------------------------
.cards-list-enter-active,
.cards-list-leave-active {
  transition: all 0.4s ease;
}
.cards-list-enter-from,
.cards-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.cards-list-move {
  transition: transform 0.4s ease;
}
</style>
