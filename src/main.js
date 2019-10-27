import Vue from 'vue'
import App from './App.vue'
import 'vue-material-design-icons/styles.css';
import ArrowUpBoldIcon from 'vue-material-design-icons/ArrowUpBold.vue';
import ArrowDownBoldIcon from 'vue-material-design-icons/ArrowDownBold.vue';
import set1 from './sets/set1';
import set2 from './sets/set2';

Vue.config.productionTip = false

require('./sets/set1');
require('./sets/set2');

Vue.mixin({
  data() {
    return {
      currentTab: "list",
      currentSet: "set1",
      set1: set1.set,
      set2: set2.set
    };
  },
  methods: {
    switchTab(tab) {
      this.currentTab = tab;
    },
    toggle(champ) {
      champ.selected = !champ.selected;
    },
    getSelected() {
      return this[this.currentSet].champions.filter(champ => champ.selected);
    },
    getOrigins() {
      return this[this.currentSet].traits.filter(trait => trait.type == "origin");
    },
    getClasses() {
      return this[this.currentSet].traits.filter(trait => trait.type == "class");
    },
    getTrait(traitName) {
      return this[this.currentSet].traits.find(trait => trait.name == traitName);
    },
    getTraitChampions(traitName) {
      return this[this.currentSet].champions.filter(champ => champ.traits.includes(traitName));
    },
    getMultipleTraitChampions(traitNames) {
      return this[this.currentSet].champions.filter(champ =>
        traitNames.every(trait => champ.traits.includes(trait))
      );
    },
    getTraitCount(traitName) {
      return this[this.currentSet].champions.filter(
        champ => champ.traits.includes(traitName) && champ.selected
      ).length;
    },
    isOneOff(traitName) {
      let trait = this.getTrait(traitName);
      let traitCount = this.getTraitCount(traitName);
      if (traitCount == 0) return false;
      return (
        trait.bronze - 1 == traitCount ||
        trait.silver - 1 == traitCount ||
        trait.gold - 1 == traitCount
      );
    },
    isOneUp(traitName) {
      let trait = this.getTrait(traitName);
      let traitCount = this.getTraitCount(traitName);
      if (traitCount == 0) return false;
      return (
        (trait.bronze && trait.bronze + 1 == traitCount) ||
        (trait.silver && trait.silver + 1 == traitCount) ||
        (trait.gold && trait.gold + 1 == traitCount)
      );
    },
    isExacly(traitName) {
      let trait = this.getTrait(traitName);
      let traitCount = this.getTraitCount(traitName);
      if (traitCount == 0) return false;
      return (
        trait.bronze == traitCount ||
        trait.silver == traitCount ||
        trait.gold == traitCount
      );
    },
    getColor(traitName) {
      if (this.isGold(traitName)) return "gold";
      if (this.isSilver(traitName)) return "silver";
      if (this.isBronze(traitName)) return "bronze";
      return "";
    },
    isGold(traitName) {
      return this.getTraitCount(traitName) >= this.getTrait(traitName).gold;
    },
    isSilver(traitName) {
      return (
        this.getTrait(traitName).silver &&
        this.getTraitCount(traitName) >= this.getTrait(traitName).silver
      );
    },
    isBronze(traitName) {
      return (
        this.getTrait(traitName).bronze &&
        ((traitName != "ninja" &&
          this.getTraitCount(traitName) >= this.getTrait(traitName).bronze) ||
          (traitName == "ninja" &&
            this.getTraitCount(traitName) == this.getTrait(traitName).bronze))
      );
    },
    getChampionsByCost(cost) {
      return this[this.currentSet].champions.filter(champ => champ.cost == cost);
    },
    isImportant(champ) {
      if (!champ.selected) return false;
      let counter = 0;
      for (let trait of champ.traits) {
        if (this.isExacly(trait)) counter++;
      }
      return counter > 1;
    },
    getChampionColor(champ) {
      if (!champ.selected) {
        let counter = 0;
        for (let trait of champ.traits) {
          if (this.isOneOff(trait)) counter++;
        }
        if (counter == 1) return "option";
        if (counter > 1) return "recommended";
        return "";
      } else {
        let counter = 0;
        for (let trait of champ.traits) {
          if (this.isExacly(trait)) counter++;
        }
        if (counter == 0) return "unimportant";
        if (counter > 1) return "important";
        return "selected";
      }
    },
    getTeamSize() {
      return this[this.currentSet].champions.filter(
        champ => champ.selected && champ.cost != "item"
      ).length;
    },
    getChampionsFromComp(comp) {
      return this[this.currentSet].champions.filter(champ => comp.includes(champ.name));
    },
    getComps() {
      return this[this.currentSet].comps;
    }
  }
})

Vue.component('arrow-up-bold-icon', ArrowUpBoldIcon);
Vue.component('arrow-down-bold-icon', ArrowDownBoldIcon);

new Vue({
  render: h => h(App),
}).$mount('#app')
