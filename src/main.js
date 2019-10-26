import Vue from 'vue'
import App from './App.vue'
import 'vue-material-design-icons/styles.css';
import ArrowUpBoldIcon from 'vue-material-design-icons/ArrowUpBold.vue';
import ArrowDownBoldIcon from 'vue-material-design-icons/ArrowDownBold.vue';

Vue.config.productionTip = false

Vue.mixin({
  data() {
    return {
      currentTab: "list",
      currentSet: "set1",
      set1: {
        champions: [
          {
            name: "camille",
            selected: false,
            cost: 1,
            traits: ["hextech", "blademaster"],
            image: require("./assets/Camille.png")
          },
          {
            name: "darius",
            selected: false,
            cost: 1,
            traits: ["imperial", "knight"],
            image: require("./assets/Darius.png")
          },
          {
            name: "elise",
            selected: false,
            cost: 1,
            traits: ["demon", "shapeshifter"],
            image: require("./assets/Elise.png")
          },
          {
            name: "fiora",
            selected: false,
            cost: 1,
            traits: ["noble", "blademaster"],
            image: require("./assets/Fiora.png")
          },
          {
            name: "garen",
            selected: false,
            cost: 1,
            traits: ["noble", "knight"],
            image: require("./assets/Garen.png")
          },
          {
            name: "graves",
            selected: false,
            cost: 1,
            traits: ["pirate", "gunslinger"],
            image: require("./assets/Graves.png")
          },
          {
            name: "kassadin",
            selected: false,
            cost: 1,
            traits: ["void", "sorcerer"],
            image: require("./assets/Kassadin.png")
          },
          {
            name: "khaZix",
            selected: false,
            cost: 1,
            traits: ["void", "assassin"],
            image: require("./assets/KhaZix.png")
          },
          {
            name: "mordekaiser",
            selected: false,
            cost: 1,
            traits: ["phantom", "knight"],
            image: require("./assets/Mordekaiser.png")
          },
          {
            name: "nidalee",
            selected: false,
            cost: 1,
            traits: ["wild", "shapeshifter"],
            image: require("./assets/Nidalee.png")
          },
          {
            name: "tristana",
            selected: false,
            cost: 1,
            traits: ["yordle", "gunslinger"],
            image: require("./assets/Tristana.png")
          },
          {
            name: "vayne",
            selected: false,
            cost: 1,
            traits: ["noble", "ranger"],
            image: require("./assets/Vayne.png")
          },
          {
            name: "warwick",
            selected: false,
            cost: 1,
            traits: ["wild", "brawler"],
            image: require("./assets/Warwick.png")
          },
          {
            name: "ahri",
            selected: false,
            cost: 2,
            traits: ["wild", "sorcerer"],
            image: require("./assets/Ahri.png")
          },
          {
            name: "blitzcrank",
            selected: false,
            cost: 2,
            traits: ["robot", "brawler"],
            image: require("./assets/Blitzcrank.png")
          },
          {
            name: "braum",
            selected: false,
            cost: 2,
            traits: ["glacial", "guardian"],
            image: require("./assets/Braum.png")
          },
          {
            name: "jayce",
            selected: false,
            cost: 2,
            traits: ["hextech", "shapeshifter"],
            image: require("./assets/Jayce.png")
          },
          {
            name: "lissandra",
            selected: false,
            cost: 2,
            traits: ["glacial", "elementalist"],
            image: require("./assets/Lissandra.png")
          },
          {
            name: "lucian",
            selected: false,
            cost: 2,
            traits: ["noble", "gunslinger"],
            image: require("./assets/Lucian.png")
          },
          {
            name: "lulu",
            selected: false,
            cost: 2,
            traits: ["yordle", "sorcerer"],
            image: require("./assets/Lulu.png")
          },
          {
            name: "pyke",
            selected: false,
            cost: 2,
            traits: ["pirate", "assassin"],
            image: require("./assets/Pyke.png")
          },
          {
            name: "rekSai",
            selected: false,
            cost: 2,
            traits: ["void", "brawler"],
            image: require("./assets/RekSai.png")
          },
          {
            name: "shen",
            selected: false,
            cost: 2,
            traits: ["ninja", "blademaster"],
            image: require("./assets/Shen.png")
          },
          {
            name: "twistedFate",
            selected: false,
            cost: 2,
            traits: ["pirate", "sorcerer"],
            image: require("./assets/TwistedFate.png")
          },
          {
            name: "varus",
            selected: false,
            cost: 2,
            traits: ["demon", "ranger"],
            image: require("./assets/Varus.png")
          },
          {
            name: "zed",
            selected: false,
            cost: 2,
            traits: ["ninja", "assassin"],
            image: require("./assets/Zed.png")
          },
          {
            name: "aatrox",
            selected: false,
            cost: 3,
            traits: ["demon", "blademaster"],
            image: require("./assets/Aatrox.png")
          },
          {
            name: "ashe",
            selected: false,
            cost: 3,
            traits: ["glacial", "ranger"],
            image: require("./assets/Ashe.png")
          },
          {
            name: "evelynn",
            selected: false,
            cost: 3,
            traits: ["demon", "assassin"],
            image: require("./assets/Evelynn.png")
          },
          {
            name: "gangplank",
            selected: false,
            cost: 3,
            traits: ["pirate", "blademaster", "gunslinger"],
            image: require("./assets/Gangplank.png")
          },
          {
            name: "katarina",
            selected: false,
            cost: 3,
            traits: ["imperial", "assassin"],
            image: require("./assets/Katarina.png")
          },
          {
            name: "kennen",
            selected: false,
            cost: 3,
            traits: ["ninja", "yordle", "elementalist"],
            image: require("./assets/Kennen.png")
          },
          {
            name: "morgana",
            selected: false,
            cost: 3,
            traits: ["demon", "sorcerer"],
            image: require("./assets/Morgana.png")
          },
          {
            name: "poppy",
            selected: false,
            cost: 3,
            traits: ["yordle", "knight"],
            image: require("./assets/Poppy.png")
          },
          {
            name: "rengar",
            selected: false,
            cost: 3,
            traits: ["wild", "assassin"],
            image: require("./assets/Rengar.png")
          },
          {
            name: "shyvana",
            selected: false,
            cost: 3,
            traits: ["dragon", "shapeshifter"],
            image: require("./assets/Shyvana.png")
          },
          {
            name: "veigar",
            selected: false,
            cost: 3,
            traits: ["yordle", "sorcerer"],
            image: require("./assets/Veigar.png")
          },
          {
            name: "vi",
            selected: false,
            cost: 3,
            traits: ["hextech", "brawler"],
            image: require("./assets/Vi.png")
          },
          {
            name: "volibear",
            selected: false,
            cost: 3,
            traits: ["glacial", "brawler"],
            image: require("./assets/Volibear.png")
          },
          {
            name: "akali",
            selected: false,
            cost: 4,
            traits: ["ninja", "assassin"],
            image: require("./assets/Akali.png")
          },
          {
            name: "aurelionSol",
            selected: false,
            cost: 4,
            traits: ["dragon", "sorcerer"],
            image: require("./assets/AurelionSol.png")
          },
          {
            name: "brand",
            selected: false,
            cost: 4,
            traits: ["demon", "elementalist"],
            image: require("./assets/Brand.png")
          },
          {
            name: "choGath",
            selected: false,
            cost: 4,
            traits: ["void", "brawler"],
            image: require("./assets/ChoGath.png")
          },
          {
            name: "draven",
            selected: false,
            cost: 4,
            traits: ["imperial", "blademaster"],
            image: require("./assets/Draven.png")
          },
          {
            name: "gnar",
            selected: false,
            cost: 4,
            traits: ["wild", "yordle", "shapeshifter"],
            image: require("./assets/Gnar.png")
          },
          {
            name: "jinx",
            selected: false,
            cost: 4,
            traits: ["hextech", "gunslinger"],
            image: require("./assets/Jinx.png")
          },
          {
            name: "kindred",
            selected: false,
            cost: 4,
            traits: ["phantom", "ranger"],
            image: require("./assets/Kindred.png")
          },
          {
            name: "leona",
            selected: false,
            cost: 4,
            traits: ["noble", "guardian"],
            image: require("./assets/Leona.png")
          },
          {
            name: "sejuani",
            selected: false,
            cost: 4,
            traits: ["glacial", "knight"],
            image: require("./assets/Sejuani.png")
          },
          {
            name: "anivia",
            selected: false,
            cost: 5,
            traits: ["glacial", "elementalist"],
            image: require("./assets/Anivia.png")
          },
          {
            name: "kaiSa",
            selected: false,
            cost: 5,
            traits: ["void", "assassin", "ranger"],
            image: require("./assets/KaiSa.png")
          },
          {
            name: "karthus",
            selected: false,
            cost: 5,
            traits: ["phantom", "sorcerer"],
            image: require("./assets/Karthus.png")
          },
          {
            name: "kayle",
            selected: false,
            cost: 5,
            traits: ["noble", "knight"],
            image: require("./assets/Kayle.png")
          },
          {
            name: "missFortune",
            selected: false,
            cost: 5,
            traits: ["pirate", "gunslinger"],
            image: require("./assets/MissFortune.png")
          },
          {
            name: "pantheon",
            selected: false,
            cost: 5,
            traits: ["dragon", "guardian"],
            image: require("./assets/Pantheon.png")
          },
          {
            name: "swain",
            selected: false,
            cost: 5,
            traits: ["imperial", "demon", "shapeshifter"],
            image: require("./assets/Swain.png")
          },
          {
            name: "yasuo",
            selected: false,
            cost: 5,
            traits: ["exile", "blademaster"],
            image: require("./assets/Yasuo.png")
          },
          {
            name: "bladeOfTheRuinedKing",
            selected: false,
            cost: "item",
            traits: ["blademaster"],
            image: require("./assets/BladeOfTheRuinedKing.png")
          },
          {
            name: "bladeOfTheRuinedKing2",
            selected: false,
            cost: "item",
            traits: ["blademaster"],
            image: require("./assets/BladeOfTheRuinedKing.png")
          },
          {
            name: "bladeOfTheRuinedKing3",
            selected: false,
            cost: "item",
            traits: ["blademaster"],
            image: require("./assets/BladeOfTheRuinedKing.png")
          },
          {
            name: "darkin",
            selected: false,
            cost: "item",
            traits: ["demon"],
            image: require("./assets/Darkin.png")
          },
          {
            name: "darkin2",
            selected: false,
            cost: "item",
            traits: ["demon"],
            image: require("./assets/Darkin.png")
          },
          {
            name: "darkin3",
            selected: false,
            cost: "item",
            traits: ["demon"],
            image: require("./assets/Darkin.png")
          },
          {
            name: "frozenMallet",
            selected: false,
            cost: "item",
            traits: ["glacial"],
            image: require("./assets/FrozenMallet.png")
          },
          {
            name: "frozenMallet2",
            selected: false,
            cost: "item",
            traits: ["glacial"],
            image: require("./assets/FrozenMallet.png")
          },
          {
            name: "frozenMallet3",
            selected: false,
            cost: "item",
            traits: ["glacial"],
            image: require("./assets/FrozenMallet.png")
          },
          {
            name: "knightsVow",
            selected: false,
            cost: "item",
            traits: ["knight"],
            image: require("./assets/KnightsVow.png")
          },
          {
            name: "knightsVow2",
            selected: false,
            cost: "item",
            traits: ["knight"],
            image: require("./assets/KnightsVow.png")
          },
          {
            name: "knightsVow3",
            selected: false,
            cost: "item",
            traits: ["knight"],
            image: require("./assets/KnightsVow.png")
          },
          {
            name: "yomousGhostblade",
            selected: false,
            cost: "item",
            traits: ["assassin"],
            image: require("./assets/YomousGhostblade.png")
          },
          {
            name: "yomousGhostblade2",
            selected: false,
            cost: "item",
            traits: ["assassin"],
            image: require("./assets/YomousGhostblade.png")
          },
          {
            name: "yomousGhostblade3",
            selected: false,
            cost: "item",
            traits: ["assassin"],
            image: require("./assets/YomousGhostblade.png")
          },
          {
            name: "yuumi",
            selected: false,
            cost: "item",
            traits: ["sorcerer"],
            image: require("./assets/Yuumi.png")
          },
          {
            name: "yuumi2",
            selected: false,
            cost: "item",
            traits: ["sorcerer"],
            image: require("./assets/Yuumi.png")
          },
          {
            name: "yuumi3",
            selected: false,
            cost: "item",
            traits: ["sorcerer"],
            image: require("./assets/Yuumi.png")
          },
          {
            name: "mittens",
            selected: false,
            cost: "item",
            traits: ["yordle"],
            image: require("./assets/Mittens.png")
          },
          {
            name: "mittens2",
            selected: false,
            cost: "item",
            traits: ["yordle"],
            image: require("./assets/Mittens.png")
          },
          {
            name: "mittens3",
            selected: false,
            cost: "item",
            traits: ["yordle"],
            image: require("./assets/Mittens.png")
          }
        ],
        traits: [
          { name: "demon", type: "origin", bronze: 2, silver: 4, gold: 6 },
          { name: "dragon", type: "origin", bronze: null, silver: null, gold: 2 },
          { name: "glacial", type: "origin", bronze: 2, silver: 4, gold: 6 },
          { name: "hextech", type: "origin", bronze: 2, silver: null, gold: 4 },
          { name: "imperial", type: "origin", bronze: 2, silver: null, gold: 4 },
          { name: "noble", type: "origin", bronze: 3, silver: null, gold: 6 },
          { name: "ninja", type: "origin", bronze: 1, silver: null, gold: 4 },
          { name: "pirate", type: "origin", bronze: null, silver: null, gold: 3 },
          {
            name: "phantom",
            type: "origin",
            bronze: null,
            silver: null,
            gold: 2
          },
          { name: "void", type: "origin", bronze: 2, silver: null, gold: 4 },
          { name: "wild", type: "origin", bronze: 2, silver: null, gold: 4 },
          { name: "yordle", type: "origin", bronze: 3, silver: 6, gold: 9 },
          { name: "exile", type: "origin", bronze: null, silver: null, gold: 1 },
          { name: "robot", type: "origin", bronze: null, silver: null, gold: 1 },

          { name: "assassin", type: "class", bronze: 3, silver: 6, gold: 9 },
          { name: "blademaster", type: "class", bronze: 3, silver: 6, gold: 9 },
          { name: "brawler", type: "class", bronze: 2, silver: 4, gold: 6 },
          {
            name: "elementalist",
            type: "class",
            bronze: null,
            silver: null,
            gold: 3
          },
          {
            name: "guardian",
            type: "class",
            bronze: null,
            silver: null,
            gold: 2
          },
          { name: "gunslinger", type: "class", bronze: 2, silver: 4, gold: 6 },
          { name: "knight", type: "class", bronze: 2, silver: 4, gold: 6 },
          { name: "ranger", type: "class", bronze: 2, silver: null, gold: 4 },
          {
            name: "shapeshifter",
            type: "class",
            bronze: 3,
            silver: null,
            gold: 6
          },
          { name: "sorcerer", type: "class", bronze: 3, silver: null, gold: 6 }
        ],
        comps: [
          [
            "darius",
            "mordekaiser",
            "poppy",
            "katarina",
            "draven",
            "sejuani",
            "swain",
            "darkin"
          ],
          [
            "ahri",
            "lulu",
            "poppy",
            "shyvana",
            "gnar",
            "aurelionSol",
            "sejuani",
            "swain",
            "darkin"
          ],
          ["nidalee", "gnar", "rengar", "warwick", "jayce", "akali", "pyke", "vi"]
        ]
      }
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
    }
  }
})

Vue.component('arrow-up-bold-icon', ArrowUpBoldIcon);
Vue.component('arrow-down-bold-icon', ArrowDownBoldIcon);

new Vue({
  render: h => h(App),
}).$mount('#app')
