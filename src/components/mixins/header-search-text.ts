import { Component, Vue, Watch } from 'vue-property-decorator'
import { ISearchResult } from '@/models/index'

// You can declare a mixin as the same style as components.
@Component
export class HeaderSearchText extends Vue {
    searchText = '';

    foundItems: ISearchResult[] = [];

    /**
     * Mock Data
     */
    potentialFoundItems: ISearchResult[] = [
      {
        id: 1,
        desc: 'Стартер',
        number: '45888701',
        manufacturer: 'CITROEN',
        alreadyInBucket: 0
      },
      {
        id: 2,
        desc: 'Генератор',
        number: '95493099',
        manufacturer: 'CITROEN',
        alreadyInBucket: 2
      },
      {
        id: 3,
        desc: 'Бендикс',
        number: 'WA54-9309',
        manufacturer: 'WAI',
        alreadyInBucket: 0
      },
      {
        id: 4,
        desc: 'Бендикс',
        number: 'WA54-9309-1',
        manufacturer: 'WAI',
        alreadyInBucket: 0
      }
    ];

    closeSearchResult () {
      this.foundItems = []
    }

    clearSearchInput () {
      this.searchText = ''
      this.foundItems = []
    }

    @Watch('searchText')
    onChildChanged (val: string, oldVal: string) {
      if (val.length >= 3) {
        this.foundItems = this.potentialFoundItems
      } else if (val.length <= 3 && oldVal.length >= 3) {
        this.foundItems = []
      }
    }
}
