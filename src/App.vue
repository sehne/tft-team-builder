<template>
  <div id="app">
    <div class="header">
      <div class="app-name">TFT Team Builder</div>

      <div class="tabs">
        <button
          class="tablinks"
          @click="switchTab('list')"
          v-bind:class="{active : currentTab == 'list' }"
        >List</button>
        <button
          class="tablinks"
          @click="switchTab('table')"
          v-bind:class="{active : currentTab == 'table' }"
        >Table</button>
      </div>

      <select v-model="currentSet" class="set-select">
        <option value="set1">Set 1</option>
        <option value="set2">Set 2</option>
        <option value="set3">Set 3</option>
      </select>
    </div>

    <div class="content">
      <h1>Team - {{getTeamSize()}}</h1>
      <div class="team">
        <div
          v-for="champ in getSelected()"
          v-bind:key="champ.name"
          class="champion"
          v-bind:class="[getChampionColor(champ)]"
          v-on:click="toggle(champ)"
        >
          <div class="image-wrapper" :title="champ.name">
            <img :src="champ.image" v-bind:class="{'img-with-border': currentSet === 'set2'}" />
          </div>
        </div>
      </div>

      <div id="list" v-if="currentTab == 'list'">
        <div class="row">
          <div class="column">
            <h1>Origins</h1>

            <div v-for="trait in getOrigins()" v-bind:key="trait.name">
              <h3>
                <span v-bind:class="[ getColor(trait.name) ]">
                  <span class="capitalize">{{trait.name}}</span>
                  {{getTraitCount(trait.name)}} /
                </span>
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
                >{{getTrait(trait.name).gold}}&nbsp;</span>

                <span v-bind:class="[getOneOffColor(trait.name) + '-border']">
                  <arrow-up-bold-icon />
                </span>
              </h3>
              <div
                v-for="champ in getTraitChampions(trait.name)"
                v-bind:key="champ.name"
                class="champion"
                v-bind:class="[getChampionColor(champ)]"
                v-on:click="toggle(champ)"
              >
                <div class="image-wrapper" :title="champ.name">
                  <img :src="champ.image" v-bind:class="{'img-with-border': currentSet === 'set2'}" />
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <h1>Classes</h1>
            <div v-for="trait in getClasses()" v-bind:key="trait.name">
              <h3>
                <span v-bind:class="[ getColor(trait.name) ]">
                  <span class="capitalize">{{trait.name}}</span>
                  {{getTraitCount(trait.name)}} /
                </span>
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
                >{{getTrait(trait.name).gold}}&nbsp;</span>

                <span v-bind:class="[getOneOffColor(trait.name) + '-border']">
                  <arrow-up-bold-icon />
                </span>
              </h3>
              <div
                v-for="champ in getTraitChampions(trait.name)"
                v-bind:key="champ.name"
                class="champion"
                v-bind:class="[getChampionColor(champ)]"
                v-on:click="toggle(champ)"
              >
                <div class="image-wrapper" :title="champ.name">
                  <img :src="champ.image" v-bind:class="{'img-with-border': currentSet === 'set2'}" />
                </div>
              </div>
            </div>
          </div>

          <div class="column">
            <h1>Cost</h1>
            <div v-for="cost in [1,2,3,4,5,7]" v-bind:key="cost">
              <h3 v-if="getChampionsByCostLength(cost)">{{cost}} Gold</h3>
              <div
                v-for="champ in getChampionsByCost(cost)"
                v-bind:key="champ.name"
                class="champion"
                v-bind:class="[getChampionColor(champ)]"
                v-on:click="toggle(champ)"
              >
                <div class="image-wrapper" :title="champ.name">
                  <img :src="champ.image" v-bind:class="{'img-with-border': currentSet === 'set2'}" />
                </div>
              </div>
            </div>
            <h3>Trait Items</h3>
            <div
              v-for="champ in getChampionsByCost('item')"
              v-bind:key="champ.name"
              class="champion"
              v-bind:class="[getChampionColor(champ)]"
              v-on:click="toggle(champ)"
            >
              <div class="image-wrapper" :title="champ.name">
                <img :src="champ.image" v-bind:class="{'img-with-border': currentSet === 'set2'}" />
              </div>
            </div>

            <div class="team-comps" v-if="getCompsLength()">
              <h1>Popular Team Comps</h1>
              <div v-for="(comp, index) in getComps()" v-bind:key="index" class="team-comp">
                <div
                  v-for="champ in getChampionsFromComp(comp)"
                  v-bind:key="champ.name"
                  class="champion"
                  v-bind:class="[getChampionColor(champ)]"
                  v-on:click="toggle(champ)"
                >
                  <div class="image-wrapper" :title="champ.name">
                    <img
                      :src="champ.image"
                      v-bind:class="{'img-with-border': currentSet === 'set2'}"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="table" v-if="currentTab == 'table'">
        <table>
          <tr v-for="origin in [0, ...getOrigins(), 'item']" v-bind:key="origin.name">
            <th
              v-for="trait in [0, ...getClasses(), 'item']"
              v-bind:key="trait.name"
              v-bind:class="{[ getOneOffColor(origin.name) + '-outline' ]: (trait == 0), [ getOneOffColor(trait.name) + '-outline' ]: (origin == 0)}"
            >
              <div v-if="origin == 0 && trait != 0 && trait != 'item'" class="cell-title">
                <span v-bind:class="[ getColor(trait.name) ]">
                  <span class="capitalize">{{trait.name}}</span>
                  <br />
                  {{getTraitCount(trait.name)}} /
                </span>
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
                >{{getTrait(trait.name).gold}}&nbsp;</span>
              </div>
              <div v-if="trait == 0 && origin != 0 && origin != 'item'" class="cell-title">
                <span v-bind:class="[ getColor(origin.name) ]">
                  <span class="capitalize">{{origin.name}}</span>
                  <br />
                  {{getTraitCount(origin.name)}} /
                </span>
                <span
                  v-bind:class="{[ getColor(origin.name) ]: isBronze(origin.name)}"
                  v-if="getTrait(origin.name).bronze"
                >{{getTrait(origin.name).bronze}} -&nbsp;</span>
                <span
                  v-bind:class="{[ getColor(origin.name) ]: isSilver(origin.name)}"
                  v-if="getTrait(origin.name).silver"
                >{{getTrait(origin.name).silver}} -&nbsp;</span>
                <span
                  v-bind:class="{[ getColor(origin.name) ]: isGold(origin.name)}"
                  v-if="getTrait(origin.name).gold"
                >{{getTrait(origin.name).gold}}&nbsp;</span>
              </div>
              <div v-if="(origin == 0 && trait == 'item') || (trait == 0 && origin == 'item')">Items</div>
              <div v-if="origin != 0 && trait != 0">
                <div
                  v-for="champ in getMultipleTraitChampions([origin.name, trait.name])"
                  v-bind:key="champ.name"
                  class="champion"
                  v-bind:class="[getChampionColor(champ)]"
                  v-on:click="toggle(champ)"
                >
                  <div class="image-wrapper" :title="champ.name">
                    <img
                      :src="champ.image"
                      v-bind:class="{'img-with-border': currentSet === 'set2'}"
                    />
                  </div>
                </div>
              </div>

              <div v-if="origin == 'item' && trait != 0 && trait != 'item'">
                <div
                  v-for="champ in getTraitItems(trait.name)"
                  v-bind:key="champ.name"
                  class="champion"
                  v-bind:class="[getChampionColor(champ)]"
                  v-on:click="toggle(champ)"
                >
                  <div class="image-wrapper" :title="champ.name">
                    <img
                      :src="champ.image"
                      v-bind:class="{'img-with-border': currentSet === 'set2'}"
                    />
                  </div>
                </div>
              </div>

              <div v-if="trait == 'item' && origin != 0 && origin != 'item'">
                <div
                  v-for="champ in getTraitItems(origin.name)"
                  v-bind:key="champ.name"
                  class="champion"
                  v-bind:class="[getChampionColor(champ)]"
                  v-on:click="toggle(champ)"
                >
                  <div class="image-wrapper" :title="champ.name">
                    <img
                      :src="champ.image"
                      v-bind:class="{'img-with-border': currentSet === 'set2'}"
                    />
                  </div>
                </div>
              </div>
            </th>
          </tr>
        </table>
      </div>

      <div class="last-update">Last Update: 2020-03-05</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
body {
  margin: 0;
  color: #ffffffbb;
  background-color: #081e31;
  font-family: Helvetica;
}

.content {
  padding: 5px 10px;
  margin: auto;
  max-width: 1600px;
}

.header {
  overflow: hidden;
  background-color: #041020;
  margin-bottom: 5px;
  display: flex;
  padding-left: 10px;
  height: 50px;
  justify-content: space-between;
}

.app-name {
  height: 50px;
  line-height: 50px;
  padding: 0 10px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  @media (max-width: 700px) {
    display: none;
  }
}

/* Style tabs */
.tablinks {
  width: 200px;
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
  color: rgba(255, 255, 255, 0.5);
  border-bottom: 2px solid transparent;

  @media (max-width: 700px) {
    width: initial;
  }
}

/* Change background color of buttons on hover */
.tabs button:hover {
  background-color: rgba(223, 223, 223, 0.2);
}

/* Create an active/current tablink class */
.tablinks.active {
  color: rgba(255, 255, 255, 0.8);
  border-bottom: 2px solid rgba(255, 255, 255, 0.8);
}

// Select Style
.set-select {
  background-color: transparent;
  color: rgba(255, 255, 255, 0.8);
  border: none;
  height: 50px;
  cursor: pointer;
  font-size: 16px;
  padding-left: 5px;
  margin-right: 10px;
  option {
    color: black;
  }
}
.set-select:hover {
  background-color: rgba(223, 223, 223, 0.2);
}
.set-select:focus {
  outline: none;
}

// Champions

.champion {
  padding: 2px;
  margin: 2px;
  display: inline-flex;
  border-radius: 50%;
  filter: brightness(0.5);
}

.image-wrapper {
  width: 32px;
  height: 32px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

img {
  height: 32px;
  width: 32px;
  min-width: 32px;
}

.img-with-border {
  height: 36px;
  width: 36px;
  min-width: 36px;
}

//OLD
// .selected { // selected & 1 active trait
//   background-color: #c0c0c0;
//   filter: brightness(1);
// }
// .important { // selected & 2+ active traits
//   background-color: #ffd700 !important;
//   filter: brightness(1);
// }
// .unimportant { // selected & 0 active traits
//   background-color: #804a00 !important;
//   filter: brightness(1);
// }
// .option { // unselected & 1 active trait
//   background-color: #c0c0c044 !important;
// }
// .recommended { // unselected & 2+ active traits
//   background-color: #ffd700 !important;
// }

.selected {
  // selected & 1 active trait
  background-color: #c0c0c0;
  filter: brightness(1);
}
.important {
  // selected & 2+ active traits
  background-color: #c0c0c0 !important;
  filter: brightness(1);
}
.unimportant {
  // selected & 0 active traits
  background-color: #c0c0c0 !important;
  filter: brightness(1);
}
.option {
  // unselected & 1 active trait
  background-color: transparent;
}
.recommended {
  // unselected & 2+ active traits
  background-color: #ffd700 !important;
}

h1,
h3 {
  margin: 0px;
}

h1 {
  font-size: 18px;
  margin: 3px 0;
}

h3 {
  font-weight: 100;
  font-size: 16px;
}

.capitalize {
  text-transform: capitalize;
}

a:link,
a:visited {
  color: inherit;
  background-color: transparent;
  text-decoration: none;
}

a:hover,
a:active {
  color: inherit;
  background-color: transparent;
  text-decoration: underline;
}

.team {
  min-height: 42px;
}

.row {
  display: flex;
  @media (max-width: 600px) {
    display: block;
  }
}

.column {
  flex: 33%;
}

.team-comps {
  margin-top: 30px;
  .team-comp {
    padding: 4px 0;
  }
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

.bronze-outline {
  outline: 2px solid #804a00;
}
.silver-outline {
  outline: 2px solid #c0c0c0;
}
.gold-outline {
  outline: 2px solid #ffd700;
}

.bronze-border {
  color: #804a00;
  border: 2px solid #904a00;
  border-radius: 50%;
}
.silver-border {
  color: #c0c0c0;
  border: 2px solid #c0c0c0;
  border-radius: 50%;
}
.gold-border {
  color: #ffd700;
  border: 2px solid #ffd700;
  border-radius: 50%;
}
.-border {
  visibility: hidden;
}

.oneOff {
  color: green;
  font-weight: bold;
}

.oneUp {
  color: green;
  font-weight: bold;
}

.arrow-up-bold-icon,
.arrow-down-bold-icon {
  font-size: 16px;
}

.last-update {
  margin-top: 20px;
  font-size: 12px;
}

// Table style
table {
  margin-top: 5px;
}

th {
  font-weight: initial;
  outline: 1px solid rgba(255, 255, 255, 0.5);
}

.cell-title {
  padding: 0 5px;
}
</style>
