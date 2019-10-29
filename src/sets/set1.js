let set = {
    champions: [
        {
            name: "camille",
            selected: false,
            cost: 1,
            traits: ["hextech", "blademaster"],
            image: require("../assets/set1/Camille.png")
        },
        {
            name: "darius",
            selected: false,
            cost: 1,
            traits: ["imperial", "knight"],
            image: require("../assets/set1/Darius.png")
        },
        {
            name: "elise",
            selected: false,
            cost: 1,
            traits: ["demon", "shapeshifter"],
            image: require("../assets/set1/Elise.png")
        },
        {
            name: "fiora",
            selected: false,
            cost: 1,
            traits: ["noble", "blademaster"],
            image: require("../assets/set1/Fiora.png")
        },
        {
            name: "garen",
            selected: false,
            cost: 1,
            traits: ["noble", "knight"],
            image: require("../assets/set1/Garen.png")
        },
        {
            name: "graves",
            selected: false,
            cost: 1,
            traits: ["pirate", "gunslinger"],
            image: require("../assets/set1/Graves.png")
        },
        {
            name: "kassadin",
            selected: false,
            cost: 1,
            traits: ["void", "sorcerer"],
            image: require("../assets/set1/Kassadin.png")
        },
        {
            name: "khaZix",
            selected: false,
            cost: 1,
            traits: ["void", "assassin"],
            image: require("../assets/set1/KhaZix.png")
        },
        {
            name: "mordekaiser",
            selected: false,
            cost: 1,
            traits: ["phantom", "knight"],
            image: require("../assets/set1/Mordekaiser.png")
        },
        {
            name: "nidalee",
            selected: false,
            cost: 1,
            traits: ["wild", "shapeshifter"],
            image: require("../assets/set1/Nidalee.png")
        },
        {
            name: "tristana",
            selected: false,
            cost: 1,
            traits: ["yordle", "gunslinger"],
            image: require("../assets/set1/Tristana.png")
        },
        {
            name: "vayne",
            selected: false,
            cost: 1,
            traits: ["noble", "ranger"],
            image: require("../assets/set1/Vayne.png")
        },
        {
            name: "warwick",
            selected: false,
            cost: 1,
            traits: ["wild", "brawler"],
            image: require("../assets/set1/Warwick.png")
        },
        {
            name: "ahri",
            selected: false,
            cost: 2,
            traits: ["wild", "sorcerer"],
            image: require("../assets/set1/Ahri.png")
        },
        {
            name: "blitzcrank",
            selected: false,
            cost: 2,
            traits: ["robot", "brawler"],
            image: require("../assets/set1/Blitzcrank.png")
        },
        {
            name: "braum",
            selected: false,
            cost: 2,
            traits: ["glacial", "guardian"],
            image: require("../assets/set1/Braum.png")
        },
        {
            name: "jayce",
            selected: false,
            cost: 2,
            traits: ["hextech", "shapeshifter"],
            image: require("../assets/set1/Jayce.png")
        },
        {
            name: "lissandra",
            selected: false,
            cost: 2,
            traits: ["glacial", "elementalist"],
            image: require("../assets/set1/Lissandra.png")
        },
        {
            name: "lucian",
            selected: false,
            cost: 2,
            traits: ["noble", "gunslinger"],
            image: require("../assets/set1/Lucian.png")
        },
        {
            name: "lulu",
            selected: false,
            cost: 2,
            traits: ["yordle", "sorcerer"],
            image: require("../assets/set1/Lulu.png")
        },
        {
            name: "pyke",
            selected: false,
            cost: 2,
            traits: ["pirate", "assassin"],
            image: require("../assets/set1/Pyke.png")
        },
        {
            name: "rekSai",
            selected: false,
            cost: 2,
            traits: ["void", "brawler"],
            image: require("../assets/set1/RekSai.png")
        },
        {
            name: "shen",
            selected: false,
            cost: 2,
            traits: ["ninja", "blademaster"],
            image: require("../assets/set1/Shen.png")
        },
        {
            name: "twistedFate",
            selected: false,
            cost: 2,
            traits: ["pirate", "sorcerer"],
            image: require("../assets/set1/TwistedFate.png")
        },
        {
            name: "varus",
            selected: false,
            cost: 2,
            traits: ["demon", "ranger"],
            image: require("../assets/set1/Varus.png")
        },
        {
            name: "zed",
            selected: false,
            cost: 2,
            traits: ["ninja", "assassin"],
            image: require("../assets/set1/Zed.png")
        },
        {
            name: "aatrox",
            selected: false,
            cost: 3,
            traits: ["demon", "blademaster"],
            image: require("../assets/set1/Aatrox.png")
        },
        {
            name: "ashe",
            selected: false,
            cost: 3,
            traits: ["glacial", "ranger"],
            image: require("../assets/set1/Ashe.png")
        },
        {
            name: "evelynn",
            selected: false,
            cost: 3,
            traits: ["demon", "assassin"],
            image: require("../assets/set1/Evelynn.png")
        },
        {
            name: "gangplank",
            selected: false,
            cost: 3,
            traits: ["pirate", "blademaster", "gunslinger"],
            image: require("../assets/set1/Gangplank.png")
        },
        {
            name: "katarina",
            selected: false,
            cost: 3,
            traits: ["imperial", "assassin"],
            image: require("../assets/set1/Katarina.png")
        },
        {
            name: "kennen",
            selected: false,
            cost: 3,
            traits: ["ninja", "yordle", "elementalist"],
            image: require("../assets/set1/Kennen.png")
        },
        {
            name: "morgana",
            selected: false,
            cost: 3,
            traits: ["demon", "sorcerer"],
            image: require("../assets/set1/Morgana.png")
        },
        {
            name: "poppy",
            selected: false,
            cost: 3,
            traits: ["yordle", "knight"],
            image: require("../assets/set1/Poppy.png")
        },
        {
            name: "rengar",
            selected: false,
            cost: 3,
            traits: ["wild", "assassin"],
            image: require("../assets/set1/Rengar.png")
        },
        {
            name: "shyvana",
            selected: false,
            cost: 3,
            traits: ["dragon", "shapeshifter"],
            image: require("../assets/set1/Shyvana.png")
        },
        {
            name: "veigar",
            selected: false,
            cost: 3,
            traits: ["yordle", "sorcerer"],
            image: require("../assets/set1/Veigar.png")
        },
        {
            name: "vi",
            selected: false,
            cost: 3,
            traits: ["hextech", "brawler"],
            image: require("../assets/set1/Vi.png")
        },
        {
            name: "volibear",
            selected: false,
            cost: 3,
            traits: ["glacial", "brawler"],
            image: require("../assets/set1/Volibear.png")
        },
        {
            name: "akali",
            selected: false,
            cost: 4,
            traits: ["ninja", "assassin"],
            image: require("../assets/set1/Akali.png")
        },
        {
            name: "aurelionSol",
            selected: false,
            cost: 4,
            traits: ["dragon", "sorcerer"],
            image: require("../assets/set1/AurelionSol.png")
        },
        {
            name: "brand",
            selected: false,
            cost: 4,
            traits: ["demon", "elementalist"],
            image: require("../assets/set1/Brand.png")
        },
        {
            name: "choGath",
            selected: false,
            cost: 4,
            traits: ["void", "brawler"],
            image: require("../assets/set1/ChoGath.png")
        },
        {
            name: "draven",
            selected: false,
            cost: 4,
            traits: ["imperial", "blademaster"],
            image: require("../assets/set1/Draven.png")
        },
        {
            name: "gnar",
            selected: false,
            cost: 4,
            traits: ["wild", "yordle", "shapeshifter"],
            image: require("../assets/set1/Gnar.png")
        },
        {
            name: "jinx",
            selected: false,
            cost: 4,
            traits: ["hextech", "gunslinger"],
            image: require("../assets/set1/Jinx.png")
        },
        {
            name: "kindred",
            selected: false,
            cost: 4,
            traits: ["phantom", "ranger"],
            image: require("../assets/set1/Kindred.png")
        },
        {
            name: "leona",
            selected: false,
            cost: 4,
            traits: ["noble", "guardian"],
            image: require("../assets/set1/Leona.png")
        },
        {
            name: "sejuani",
            selected: false,
            cost: 4,
            traits: ["glacial", "knight"],
            image: require("../assets/set1/Sejuani.png")
        },
        {
            name: "anivia",
            selected: false,
            cost: 5,
            traits: ["glacial", "elementalist"],
            image: require("../assets/set1/Anivia.png")
        },
        {
            name: "kaiSa",
            selected: false,
            cost: 5,
            traits: ["void", "assassin", "ranger"],
            image: require("../assets/set1/KaiSa.png")
        },
        {
            name: "karthus",
            selected: false,
            cost: 5,
            traits: ["phantom", "sorcerer"],
            image: require("../assets/set1/Karthus.png")
        },
        {
            name: "kayle",
            selected: false,
            cost: 5,
            traits: ["noble", "knight"],
            image: require("../assets/set1/Kayle.png")
        },
        {
            name: "missFortune",
            selected: false,
            cost: 5,
            traits: ["pirate", "gunslinger"],
            image: require("../assets/set1/MissFortune.png")
        },
        {
            name: "pantheon",
            selected: false,
            cost: 5,
            traits: ["dragon", "guardian"],
            image: require("../assets/set1/Pantheon.png")
        },
        {
            name: "swain",
            selected: false,
            cost: 5,
            traits: ["imperial", "demon", "shapeshifter"],
            image: require("../assets/set1/Swain.png")
        },
        {
            name: "yasuo",
            selected: false,
            cost: 5,
            traits: ["exile", "blademaster"],
            image: require("../assets/set1/Yasuo.png")
        },
        {
            name: "bladeOfTheRuinedKing",
            selected: false,
            cost: "item",
            traits: ["blademaster"],
            image: require("../assets/set1/BladeOfTheRuinedKing.png")
        },
        {
            name: "bladeOfTheRuinedKing2",
            selected: false,
            cost: "item",
            traits: ["blademaster"],
            image: require("../assets/set1/BladeOfTheRuinedKing.png")
        },
        {
            name: "bladeOfTheRuinedKing3",
            selected: false,
            cost: "item",
            traits: ["blademaster"],
            image: require("../assets/set1/BladeOfTheRuinedKing.png")
        },
        {
            name: "darkin",
            selected: false,
            cost: "item",
            traits: ["demon"],
            image: require("../assets/set1/Darkin.png")
        },
        {
            name: "darkin2",
            selected: false,
            cost: "item",
            traits: ["demon"],
            image: require("../assets/set1/Darkin.png")
        },
        {
            name: "darkin3",
            selected: false,
            cost: "item",
            traits: ["demon"],
            image: require("../assets/set1/Darkin.png")
        },
        {
            name: "frozenMallet",
            selected: false,
            cost: "item",
            traits: ["glacial"],
            image: require("../assets/set1/FrozenMallet.png")
        },
        {
            name: "frozenMallet2",
            selected: false,
            cost: "item",
            traits: ["glacial"],
            image: require("../assets/set1/FrozenMallet.png")
        },
        {
            name: "frozenMallet3",
            selected: false,
            cost: "item",
            traits: ["glacial"],
            image: require("../assets/set1/FrozenMallet.png")
        },
        {
            name: "knightsVow",
            selected: false,
            cost: "item",
            traits: ["knight"],
            image: require("../assets/set1/KnightsVow.png")
        },
        {
            name: "knightsVow2",
            selected: false,
            cost: "item",
            traits: ["knight"],
            image: require("../assets/set1/KnightsVow.png")
        },
        {
            name: "knightsVow3",
            selected: false,
            cost: "item",
            traits: ["knight"],
            image: require("../assets/set1/KnightsVow.png")
        },
        {
            name: "yomousGhostblade",
            selected: false,
            cost: "item",
            traits: ["assassin"],
            image: require("../assets/set1/YomousGhostblade.png")
        },
        {
            name: "yomousGhostblade2",
            selected: false,
            cost: "item",
            traits: ["assassin"],
            image: require("../assets/set1/YomousGhostblade.png")
        },
        {
            name: "yomousGhostblade3",
            selected: false,
            cost: "item",
            traits: ["assassin"],
            image: require("../assets/set1/YomousGhostblade.png")
        },
        {
            name: "yuumi",
            selected: false,
            cost: "item",
            traits: ["sorcerer"],
            image: require("../assets/set1/Yuumi.png")
        },
        {
            name: "yuumi2",
            selected: false,
            cost: "item",
            traits: ["sorcerer"],
            image: require("../assets/set1/Yuumi.png")
        },
        {
            name: "yuumi3",
            selected: false,
            cost: "item",
            traits: ["sorcerer"],
            image: require("../assets/set1/Yuumi.png")
        },
        {
            name: "mittens",
            selected: false,
            cost: "item",
            traits: ["yordle"],
            image: require("../assets/set1/Mittens.png")
        },
        {
            name: "mittens2",
            selected: false,
            cost: "item",
            traits: ["yordle"],
            image: require("../assets/set1/Mittens.png")
        },
        {
            name: "mittens3",
            selected: false,
            cost: "item",
            traits: ["yordle"],
            image: require("../assets/set1/Mittens.png")
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
            "khaZix",
            "blitzcrank",
            "rekSai",
            "vi",
            "akali",
            "choGath",
            "jinx",
            "kaiSa"
        ],
        [
            "warwick",
            "blitzcrank",
            "lucian",
            "rekSai",
            "vi",
            "volibear",
            "choGath",
            "jinx"
        ],
        [
            "morderkaiser",
            "poppy",
            "aurelionSol",
            "kindred",
            "leona",
            "sejuani",
            "kayle",
            "pantheon",
        ],
        [
            "darius",
            "mordekaiser",
            "katarina",
            "poppy",
            "draven",
            "sejuani",
            "kayle",
            "swain",
            "darkin"
        ]
    ]
}


module.exports = {
    set
}