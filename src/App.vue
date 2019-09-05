<template>
  <div id="app">
    <h1>Team {{getTeamSize()}}</h1>
    <div class="team">
      <div
        v-for="champ in getSelected()"
        v-bind:key="champ.name"
        class="champion"
        v-bind:class="{ selected: champ.selected, important: isImportant(champ) }"
        v-on:click="toggle(champ)"
      >
        <img :src="champ.image" />
      </div>
    </div>

    <div class="row">
      <div class="column">
        <h1>Origins</h1>

        <div v-for="trait in getOrigins()" v-bind:key="trait.name">
          <h3>
            <span
              v-bind:class="[ getColor(trait.name) ]"
            >{{trait.name}} {{getTraitCount(trait.name)}}</span> /
            <span
              v-bind:class="{[ getColor(trait.name) ]: isBronze(trait.name)}"
              v-if="getTrait(trait.name).bronze"
            >{{getTrait(trait.name).bronze}} -&nbsp;</span>
            <span
              v-bind:class="{[ getColor(trait.name) ]: isSilver(trait.name)}"
              v-if="getTrait(trait.name).silver"
            >{{getTrait(trait.name).silver}} -&nbsp;</span>
            <span
              v-bind:class="{[ getColor(trait.name) ]: isGold(trait.name)}"
              v-if="getTrait(trait.name).gold"
            >{{getTrait(trait.name).gold}}</span>
          </h3>
          <div
            v-for="champ in getTraitChampions(trait.name)"
            v-bind:key="champ.name"
            class="champion"
            v-bind:class="{ selected: champ.selected, important: isImportant(champ) }"
            v-on:click="toggle(champ)"
          >
            <img :src="champ.image" />
          </div>
        </div>
      </div>
      <div class="column">
        <h1>Classes</h1>
        <div v-for="trait in getClasses()" v-bind:key="trait.name">
          <h3>
            <span
              v-bind:class="[ getColor(trait.name) ]"
            >{{trait.name}} {{getTraitCount(trait.name)}}</span> /
            <span
              v-bind:class="{[ getColor(trait.name) ]: isBronze(trait.name)}"
              v-if="getTrait(trait.name).bronze"
            >{{getTrait(trait.name).bronze}} -&nbsp;</span>
            <span
              v-bind:class="{[ getColor(trait.name) ]: isSilver(trait.name)}"
              v-if="getTrait(trait.name).silver"
            >{{getTrait(trait.name).silver}} -&nbsp;</span>
            <span
              v-bind:class="{[ getColor(trait.name) ]: isGold(trait.name)}"
              v-if="getTrait(trait.name).gold"
            >{{getTrait(trait.name).gold}}</span>
          </h3>
          <div
            v-for="champ in getTraitChampions(trait.name)"
            v-bind:key="champ.name"
            class="champion"
            v-bind:class="{ selected: champ.selected, important: isImportant(champ) }"
            v-on:click="toggle(champ)"
          >
            <img :src="champ.image" />
          </div>
        </div>
      </div>

      <div class="column">
        <h1>Cost</h1>
        <div v-for="cost in [1,2,3,4,5]" v-bind:key="cost">
          <h3>{{cost}} Gold</h3>
          <div
            v-for="champ in getChampionsByCost(cost)"
            v-bind:key="champ.name"
            class="champion"
            v-bind:class="{ selected: champ.selected, important: isImportant(champ) }"
            v-on:click="toggle(champ)"
          >
            <img :src="champ.image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
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
          name: "khazix",
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
          name: "reksai",
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
          name: "aurelionsol",
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
          name: "chogath",
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
          name: "missfortune",
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
        }
      ],
      traits: [
        { name: "demon", type: "origin", bronze: 2, silver: 4, gold: 6 },
        { name: "dragon", type: "origin", bronze: null, silver: null, gold: 2 },
        { name: "exile", type: "origin", bronze: null, silver: null, gold: 1 },
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
        { name: "robot", type: "origin", bronze: null, silver: null, gold: 1 },
        { name: "void", type: "origin", bronze: null, silver: null, gold: 3 },
        { name: "wild", type: "origin", bronze: 2, silver: null, gold: 4 },
        { name: "yordle", type: "origin", bronze: 3, silver: null, gold: 6 },

        { name: "assassin", type: "class", bronze: 3, silver: null, gold: 6 },
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
      ]
    };
  },
  methods: {
    toggle(champ) {
      champ.selected = !champ.selected;
    },
    getSelected() {
      return this.champions.filter(champ => champ.selected);
    },
    getOrigins() {
      return this.traits.filter(trait => trait.type == "origin");
    },
    getClasses() {
      return this.traits.filter(trait => trait.type == "class");
    },
    getTrait(traitName) {
      return this.traits.find(trait => trait.name == traitName);
    },
    getTraitChampions(traitName) {
      return this.champions.filter(champ => champ.traits.includes(traitName));
    },
    getTraitCount(traitName) {
      return this.champions.filter(
        champ => champ.traits.includes(traitName) && champ.selected
      ).length;
    },
    isOneOff(traitName) {
      let trait = this.getTrait(traitName);
      let traitCount = this.getTraitCount(traitName);
      return (
        trait.bronze - 1 == traitCount ||
        trait.silver - 1 == traitCount ||
        trait.gold - 1 == traitCount
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
      return this.champions.filter(champ => champ.cost == cost);
    },
    isImportant(champ) {
      if (!champ.selected) return false;
      let counter = 0;
      for (let trait of champ.traits) {
        if (this.isExacly(trait)) counter++;
      }
      return counter > 1;
    },
    getTeamSize() {
      return this.champions.filter(champ => champ.selected).length;
    }
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  color: #ffffff88;
  background-color: #081e31;
  font-family: Helvetica;
}
#app {
  padding: 5px 20px;
}
.champion {
  padding: 2px;
  margin: 2px 2px;
  border-radius: 50px;
  display: inline-flex;
  filter: brightness(0.5);
}
.selected {
  background-color: white;
  filter: brightness(1);
}
.important {
  background-color: gold !important;
  filter: brightness(1);
}

h1,
h3 {
  margin: 0px;
}

h1 {
  font-size: 16px;
  margin: 0 0 3px;
}

h3 {
  font-weight: 100;
  font-size: 14px;
}

.team {
  min-height: 42px;
}

img {
  height: 32px;
  width: 32px;
  border-radius: 50%;
}

.row {
  display: flex;
}

.column {
  flex: 50%;
}

.bronze {
  color: #804a00;
  font-weight: bold;
}
.silver {
  color: #c0c0c0;
  font-weight: bold;
}
.gold {
  color: #ffd700;
  font-weight: bold;
}

.almost {
  color: orange;
  font-weight: bold;
}
</style>
