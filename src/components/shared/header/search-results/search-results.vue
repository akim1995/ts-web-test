<template>
  <transition name="opacity">
    <div class="search-results">
      <div class="search-results__header">
        <div class="search-results__header-item">Описание</div>
        <div class="search-results__header-item">Номер</div>
        <div class="search-results__header-item">Производитель</div>
      </div>
      <div class="search-results__body">
        <a
          class="search-results__body-row"
          v-for="(item, $index) in foundItems.slice(0, 5)"
          :key='$index'
          :href='"/search-matches/" + item.id'
          :to="{name: 'search-matches', id: item.id}"
        >
          <div class='search-results__body-row-item'>
            {{ item.desc }}
          </div>
          <div class='search-results__body-row-item'>
            {{ item.number }}
          </div>
          <div class='search-results__body-row-item'>
            {{ item.manufacturer }}
          </div>
          <div
            class='search-results__body-row-item-optional'
            v-if="item.alreadyInBucket"
          >
            <div class="already-in-bucket">
              <div class="shopping-bucket-icon"></div>
              <div class="items-in-bucket">{{ item.alreadyInBucket }} шт.</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { clickOutside } from '@/directives/v-click-outside/index'
import { ISearchResult } from '@/models/index'

@Component({
  directives: {
    clickOutside
  }
})
export default class SearchResults extends Vue {
  @Prop({ default: () => [] }) readonly foundItems!: ISearchResult[];
}
</script>

<style lang="scss">
@import "./search-results.scss";
</style>
