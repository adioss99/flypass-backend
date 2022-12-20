'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const timestamp = new Date()
    await queryInterface.bulkInsert('Airports',[
      {
        "iata": "ICY",
        "name": "Icy Bay Airport",
        "city": "Icy Bay",
        "country": "US"
      },
      {
        "iata": "HGZ",
        "name": "Hog River Airport",
        "city": "Hogatza",
        "country": "US"
      },
      {
        "iata": "BYW",
        "name": "Blakely Island Airport",
        "city": "Blakely Island",
        "country": "US"
      },
      {
        "iata": "BDF",
        "name": "Rinkenberger Restricted Landing Area",
        "city": "Bradford",
        "country": "US"
      },
      {
        "iata": "BCS",
        "name": "Southern Seaplane Airport",
        "city": "Belle Chasse",
        "country": "US"
      },
      {
        "iata": "BWL",
        "name": "Earl Henry Airport",
        "city": "Blackwell",
        "country": "US"
      },
      {
        "iata": "DUF",
        "name": "Pine Island Airport",
        "city": "Corolla",
        "country": "US"
      },
      {
        "iata": "FOB",
        "name": "Fort Bragg Airport",
        "city": "Fort Bragg",
        "country": "US"
      },
      {
        "iata": "ALX",
        "name": "Thomas C Russell Field",
        "city": "Alexander City",
        "country": "US"
      },
      {
        "iata": "AFT",
        "name": "Afutara Aerodrome",
        "city": "Bila",
        "country": "SB"
      },
      {
        "iata": "RNA",
        "name": "Ulawa Airport",
        "city": "Arona",
        "country": "SB"
      },
      {
        "iata": "ATD",
        "name": "Uru Harbour Airport",
        "city": "Atoifi",
        "country": "SB"
      },
      {
        "iata": "VEV",
        "name": "Barakoma Airport",
        "city": "Barakoma",
        "country": "SB"
      },
      {
        "iata": "BPF",
        "name": "Batuna Aerodrome",
        "city": "Batuna Mission Station",
        "country": "SB"
      },
      {
        "iata": "GEF",
        "name": "Geva Airport",
        "city": "Liangia",
        "country": "SB"
      },
      {
        "iata": "AKS",
        "name": "Auki Airport",
        "city": "Auki",
        "country": "SB"
      },
      {
        "iata": "BNY",
        "name": "Bellona/Anua Airport",
        "city": "Anua",
        "country": "SB"
      },
      {
        "iata": "CHY",
        "name": "Choiseul Bay Airport",
        "city": "",
        "country": "SB"
      },
      {
        "iata": "BAS",
        "name": "Ballalae Airport",
        "city": "Ballalae",
        "country": "SB"
      },
      {
        "iata": "FRE",
        "name": "Fera/Maringe Airport",
        "city": "Fera Island",
        "country": "SB"
      },
      {
        "iata": "HIR",
        "name": "Honiara International Airport",
        "city": "Honiara",
        "country": "SB"
      },
      {
        "iata": "MBU",
        "name": "Babanakira Airport",
        "city": "Mbambanakira",
        "country": "SB"
      },
      {
        "iata": "AVU",
        "name": "Avu Avu Airport",
        "city": "",
        "country": "SB"
      },
      {
        "iata": "IRA",
        "name": "Ngorangora Airport",
        "city": "Kirakira",
        "country": "SB"
      },
      {
        "iata": "SCZ",
        "name": "Santa Cruz/Graciosa Bay/Luova Airport",
        "city": "Santa Cruz/Graciosa Bay/Luova",
        "country": "SB"
      },
      {
        "iata": "MUA",
        "name": "Munda Airport",
        "city": "",
        "country": "SB"
      },
      {
        "iata": "GZO",
        "name": "Nusatupe Airport",
        "city": "Gizo",
        "country": "SB"
      },
      {
        "iata": "MNY",
        "name": "Mono Airport",
        "city": "Stirling Island",
        "country": "SB"
      },
      {
        "iata": "PRS",
        "name": "Parasi Airport",
        "city": "Parasi",
        "country": "SB"
      },
      {
        "iata": "RNL",
        "name": "Rennell/Tingoa Airport",
        "city": "Rennell Island",
        "country": "SB"
      },
      {
        "iata": "EGM",
        "name": "Sege Airport",
        "city": "Sege",
        "country": "SB"
      },
      {
        "iata": "NNB",
        "name": "Santa Ana Airport",
        "city": "Santa Ana Island",
        "country": "SB"
      },
      {
        "iata": "RUS",
        "name": "Marau Airport",
        "city": "Marau",
        "country": "SB"
      },
      {
        "iata": "VAO",
        "name": "Suavanao Airport",
        "city": "Suavanao",
        "country": "SB"
      },
      {
        "iata": "XYA",
        "name": "Yandina Airport",
        "city": "Yandina",
        "country": "SB"
      },
      {
        "iata": "KGE",
        "name": "Kagau Island Airport",
        "city": "Kagau Island",
        "country": "SB"
      },
      {
        "iata": "KWS",
        "name": "Kwailabesi Airport",
        "city": "Kwailabesi",
        "country": "SB"
      },
      {
        "iata": "GTA",
        "name": "Gatokae Airport",
        "city": "Gatokae",
        "country": "SB"
      },
      {
        "iata": "RIN",
        "name": "Ringi Cove Airport",
        "city": "Ringi Cove",
        "country": "SB"
      },
      {
        "iata": "RBV",
        "name": "Ramata Airport",
        "city": "Ramata",
        "country": "SB"
      },
      {
        "iata": "CEX",
        "name": "Chena Hot Springs Airport",
        "city": "Chena Hot Springs",
        "country": "US"
      },
      {
        "iata": "HED",
        "name": "Herendeen Bay Airport",
        "city": "Herendeen Bay",
        "country": "US"
      },
      {
        "iata": "TWE",
        "name": "Taylor Airport",
        "city": "Taylor",
        "country": "US"
      },
      {
        "iata": "CDL",
        "name": "Candle 2 Airport",
        "city": "Candle",
        "country": "US"
      },
      {
        "iata": "BSZ",
        "name": "Bartletts Airport",
        "city": "Egegik",
        "country": "US"
      },
      {
        "iata": "BSW",
        "name": "Boswell Bay Airport",
        "city": "Boswell Bay",
        "country": "US"
      },
      {
        "iata": "INU",
        "name": "Nauru International Airport",
        "city": "Yaren District",
        "country": "NR"
      },
      {
        "iata": "ATP",
        "name": "Aitape Airport",
        "city": "Aitape",
        "country": "PG"
      },
      {
        "iata": "AMU",
        "name": "Amanab Airport",
        "city": "Amanab",
        "country": "PG"
      },
      {
        "iata": "ADC",
        "name": "Andakombe Airport",
        "city": "Andekombe",
        "country": "PG"
      },
      {
        "iata": "AIE",
        "name": "Aiome Airport",
        "city": "Aiome",
        "country": "PG"
      },
      {
        "iata": "KPM",
        "name": "Kompiam Airport",
        "city": "",
        "country": "PG"
      },
      {
        "iata": "AUJ",
        "name": "Ambunti Airport",
        "city": "Ambunti",
        "country": "PG"
      },
      {
        "iata": "AWB",
        "name": "Awaba Airport",
        "city": "Awaba",
        "country": "PG"
      },
      {
        "iata": "AYU",
        "name": "Aiyura Airport",
        "city": "Aiyura Valley",
        "country": "PG"
      },
      {
        "iata": "VMU",
        "name": "Baimuru Airport",
        "city": "Baimuru",
        "country": "PG"
      },
      {
        "iata": "BDZ",
        "name": "Baindoung Airport",
        "city": "",
        "country": "PG"
      },
      {
        "iata": "BUA",
        "name": "Buka Airport",
        "city": "Buka Island",
        "country": "PG"
      },
      {
        "iata": "OPU",
        "name": "Balimo Airport",
        "city": "Balimo",
        "country": "PG"
      },
      {
        "iata": "BUL",
        "name": "Bulolo Airport",
        "city": "Bulolo",
        "country": "PG"
      },
      {
        "iata": "CMU",
        "name": "Chimbu Airport",
        "city": "Kundiawa",
        "country": "PG"
      },
      {
        "iata": "DER",
        "name": "Derim Airport",
        "city": "Derim",
        "country": "PG"
      },
      {
        "iata": "DAU",
        "name": "Daru Airport",
        "city": "Daru",
        "country": "PG"
      },
      {
        "iata": "XYR",
        "name": "Edwaki Airport",
        "city": "Yellow River Mission",
        "country": "PG"
      },
      {
        "iata": "FNE",
        "name": "Fane Airport",
        "city": "Fane Mission",
        "country": "PG"
      },
      {
        "iata": "FIN",
        "name": "Finschhafen Airport",
        "city": "Buki",
        "country": "PG"
      },
      {
        "iata": "FAQ",
        "name": "Frieda River Airport",
        "city": "Frieda River",
        "country": "PG"
      },
      {
        "iata": "GKA",
        "name": "Goroka Airport",
        "city": "Goronka",
        "country": "PG"
      },
      {
        "iata": "GRL",
        "name": "Garasa Airport",
        "city": "Au",
        "country": "PG"
      },
      {
        "iata": "GAR",
        "name": "Garaina Airport",
        "city": "Garaina",
        "country": "PG"
      },
      {
        "iata": "GUR",
        "name": "Gurney Airport",
        "city": "Gurney",
        "country": "PG"
      },
      {
        "iata": "GAP",
        "name": "Gusap Airport",
        "city": "Gusap",
        "country": "PG"
      },
      {
        "iata": "PNP",
        "name": "Girua Airport",
        "city": "Popondetta",
        "country": "PG"
      },
      {
        "iata": "GMI",
        "name": "Gasmata Island Airport",
        "city": "Gasmata Island",
        "country": "PG"
      },
      {
        "iata": "GVI",
        "name": "Green River Airport",
        "city": "Green River",
        "country": "PG"
      },
      {
        "iata": "HKN",
        "name": "Kimbe Airport",
        "city": "Hoskins",
        "country": "PG"
      },
      {
        "iata": "KIE",
        "name": "Aropa Airport",
        "city": "Kieta",
        "country": "PG"
      },
      {
        "iata": "LSA",
        "name": "Losuia Airport",
        "city": "Losuia",
        "country": "PG"
      },
      {
        "iata": "KBM",
        "name": "Kabwum",
        "city": "",
        "country": "PG"
      },
      {
        "iata": "KDR",
        "name": "Kandrian Airport",
        "city": "Kandrian",
        "country": "PG"
      },
      {
        "iata": "UNG",
        "name": "Kiunga Airport",
        "city": "Kiunga",
        "country": "PG"
      },
      {
        "iata": "KRI",
        "name": "Kikori Airport",
        "city": "Kikori",
        "country": "PG"
      },
      {
        "iata": "KMA",
        "name": "Kerema Airport",
        "city": "Kerema",
        "country": "PG"
      },
      {
        "iata": "KKD",
        "name": "Kokoda Airport",
        "city": "Kokoda",
        "country": "PG"
      },
      {
        "iata": "KZF",
        "name": "Kaintiba Airport",
        "city": "Kaintiba",
        "country": "PG"
      },
      {
        "iata": "KUQ",
        "name": "Kuri Airport",
        "city": "Kuri",
        "country": "PG"
      },
      {
        "iata": "KVG",
        "name": "Kavieng Airport",
        "city": "Kavieng",
        "country": "PG"
      },
      {
        "iata": "KWO",
        "name": "Kawito Airport",
        "city": "Kawito",
        "country": "PG"
      },
      {
        "iata": "LNV",
        "name": "Londolovit Airport",
        "city": "Londolovit",
        "country": "PG"
      },
      {
        "iata": "LMY",
        "name": "Lake Murray Airport",
        "city": "Lake Murray",
        "country": "PG"
      },
      {
        "iata": "LMI",
        "name": "Lumi Airport",
        "city": "Lumi",
        "country": "PG"
      },
      {
        "iata": "MYX",
        "name": "Menyamya Airport",
        "city": "Menyamya",
        "country": "PG"
      },
      {
        "iata": "MAG",
        "name": "Madang Airport",
        "city": "Madang",
        "country": "PG"
      },
      {
        "iata": "HGU",
        "name": "Mount Hagen Kagamuga Airport",
        "city": "Mount Hagen",
        "country": "PG"
      },
      {
        "iata": "MXK",
        "name": "Mindik Airport",
        "city": "Mindik",
        "country": "PG"
      },
      {
        "iata": "GUV",
        "name": "Mougulu Airport",
        "city": "Mougulu",
        "country": "PG"
      },
      {
        "iata": "MDU",
        "name": "Mendi Airport",
        "city": "",
        "country": "PG"
      },
      {
        "iata": "MAS",
        "name": "Momote Airport",
        "city": "",
        "country": "PG"
      },
      {
        "iata": "MXH",
        "name": "Moro Airport",
        "city": "Moro",
        "country": "PG"
      },
      {
        "iata": "MIS",
        "name": "Misima Island Airport",
        "city": "Misima Island",
        "country": "PG"
      },
      {
        "iata": "GBF",
        "name": "Negarbo(Negabo) Airport",
        "city": "Negarbo",
        "country": "PG"
      },
      {
        "iata": "MFO",
        "name": "Manguna Airport",
        "city": "Manguna",
        "country": "PG"
      },
      {
        "iata": "UKU",
        "name": "Nuku Airport",
        "city": "Nuku",
        "country": "PG"
      },
      {
        "iata": "LAE",
        "name": "Lae Nadzab Airport",
        "city": "Nadzab",
        "country": "PG"
      },
      {
        "iata": "OGE",
        "name": "Ogeranang Airport",
        "city": "",
        "country": "PG"
      },
      {
        "iata": "OSE",
        "name": "Omora Airport",
        "city": "Omora",
        "country": "PG"
      },
      {
        "iata": "PDI",
        "name": "Pindiu Airport",
        "city": "Pindiu",
        "country": "PG"
      },
      {
        "iata": "POM",
        "name": "Port Moresby Jacksons International Airport",
        "city": "Port Moresby",
        "country": "PG"
      },
      {
        "iata": "KRJ",
        "name": "Karawari Airstrip",
        "city": "",
        "country": "PG"
      },
      {
        "iata": "RMN",
        "name": "Rumginae Airport",
        "city": "",
        "country": "PG"
      },
      {
        "iata": "KMR",
        "name": "Karimui Airport",
        "city": "Karimui",
        "country": "PG"
      },
      {
        "iata": "SBE",
        "name": "Suabi Airport",
        "city": "",
        "country": "PG"
      },
      {
        "iata": "NIS",
        "name": "Simberi Airport",
        "city": "Simberi Island",
        "country": "PG"
      },
      {
        "iata": "SIL",
        "name": "Sila Airport",
        "city": "Sila Mission",
        "country": "PG"
      },
      {
        "iata": "SIM",
        "name": "Simbai Airport",
        "city": "Simbai",
        "country": "PG"
      },
      {
        "iata": "SKC",
        "name": "Suki Airport",
        "city": "Suki",
        "country": "PG"
      },
      {
        "iata": "TIZ",
        "name": "Tari Airport",
        "city": "Tari",
        "country": "PG"
      },
      {
        "iata": "TBG",
        "name": "Tabubil Airport",
        "city": "Tabubil",
        "country": "PG"
      },
      {
        "iata": "TFM",
        "name": "Telefomin Airport",
        "city": "Telefomin",
        "country": "PG"
      },
      {
        "iata": "TPI",
        "name": "Tapini Airport",
        "city": "Tapini",
        "country": "PG"
      },
      {
        "iata": "TAJ",
        "name": "Tadji Airport",
        "city": "Aitape",
        "country": "PG"
      },
      {
        "iata": "RAB",
        "name": "Tokua Airport",
        "city": "Tokua",
        "country": "PG"
      },
      {
        "iata": "TKW",
        "name": "Tekin Airport",
        "city": "Tekin",
        "country": "PG"
      },
      {
        "iata": "TFI",
        "name": "Tufi Airport",
        "city": "Tufi",
        "country": "PG"
      },
      {
        "iata": "VAI",
        "name": "Vanimo Airport",
        "city": "",
        "country": "PG"
      },
      {
        "iata": "WAO",
        "name": "Wabo Airport",
        "city": "Wabo",
        "country": "PG"
      },
      {
        "iata": "WBM",
        "name": "Wapenamanda Airport",
        "city": "",
        "country": "PG"
      },
      {
        "iata": "AGL",
        "name": "Wanigela Airport",
        "city": "",
        "country": "PG"
      },
      {
        "iata": "WWK",
        "name": "Wewak International Airport",
        "city": "Wewak",
        "country": "PG"
      },
      {
        "iata": "WOA",
        "name": "Wonenara Airport",
        "city": "Wonenara",
        "country": "PG"
      },
      {
        "iata": "WSU",
        "name": "Wasu Airport",
        "city": "Wasu",
        "country": "PG"
      },
      {
        "iata": "WTP",
        "name": "Woitape Airport",
        "city": "Fatima Mission",
        "country": "PG"
      },
      {
        "iata": "WUG",
        "name": "Wau Airport",
        "city": "Wau",
        "country": "PG"
      },
      {
        "iata": "JEG",
        "name": "Aasiaat Airport",
        "city": "Aasiaat",
        "country": "GL"
      },
      {
        "iata": "UAK",
        "name": "Narsarsuaq Airport",
        "city": "Narsarsuaq",
        "country": "GL"
      },
      {
        "iata": "CNP",
        "name": "Neerlerit Inaat Airport",
        "city": "Neerlerit Inaat",
        "country": "GL"
      },
      {
        "iata": "GOH",
        "name": "Godthaab / Nuuk Airport",
        "city": "Nuuk",
        "country": "GL"
      },
      {
        "iata": "JAV",
        "name": "Ilulissat Airport",
        "city": "Ilulissat",
        "country": "GL"
      },
      {
        "iata": "KUS",
        "name": "Kulusuk Airport",
        "city": "Kulusuk",
        "country": "GL"
      },
      {
        "iata": "JSU",
        "name": "Maniitsoq Airport",
        "city": "Maniitsoq",
        "country": "GL"
      },
      {
        "iata": "JFR",
        "name": "Paamiut Airport",
        "city": "Paamiut",
        "country": "GL"
      },
      {
        "iata": "NAQ",
        "name": "Qaanaaq Airport",
        "city": "Qaanaaq",
        "country": "GL"
      },
      {
        "iata": "SFJ",
        "name": "Kangerlussuaq Airport",
        "city": "Kangerlussuaq",
        "country": "GL"
      },
      {
        "iata": "JHS",
        "name": "Sisimiut Airport",
        "city": "Sisimiut",
        "country": "GL"
      },
      {
        "iata": "THU",
        "name": "Thule Air Base",
        "city": "Thule",
        "country": "GL"
      },
      {
        "iata": "JUV",
        "name": "Upernavik Airport",
        "city": "Upernavik",
        "country": "GL"
      },
      {
        "iata": "JQA",
        "name": "Qaarsut Airport",
        "city": "Uummannaq",
        "country": "GL"
      },
      {
        "iata": "AEY",
        "name": "Akureyri Airport",
        "city": "Akureyri",
        "country": "IS"
      },
      {
        "iata": "BIU",
        "name": "Bildudalur Airport",
        "city": "Bildudalur",
        "country": "IS"
      },
      {
        "iata": "BGJ",
        "name": "Borgarfjordur eystri Airport",
        "city": "Borgarfjordur eystri",
        "country": "IS"
      },
      {
        "iata": "BJD",
        "name": "Bakkafjordur Airport",
        "city": "Bakkafjordur",
        "country": "IS"
      },
      {
        "iata": "BLO",
        "name": "Hjaltabakki Airport",
        "city": "Blonduos",
        "country": "IS"
      },
      {
        "iata": "BQD",
        "name": "Budardalur Airport",
        "city": "Budardalur",
        "country": "IS"
      },
      {
        "iata": "BXV",
        "name": "Breiddalsvik Airport",
        "city": "Breiddalsvik",
        "country": "IS"
      },
      {
        "iata": "DJU",
        "name": "Djupivogur Airport",
        "city": "Djupivogur",
        "country": "IS"
      },
      {
        "iata": "EGS",
        "name": "Egilsstadir Airport",
        "city": "Egilsstadir",
        "country": "IS"
      },
      {
        "iata": "FAS",
        "name": "Faskrudsfjordur Airport",
        "city": "Faskrudsfjordur",
        "country": "IS"
      },
      {
        "iata": "FAG",
        "name": "Fagurholsmyri Airport",
        "city": "Fagurholsmyri",
        "country": "IS"
      },
      {
        "iata": "GUU",
        "name": "Grundarfjordur Airport",
        "city": "Grundarfjordur",
        "country": "IS"
      },
      {
        "iata": "GJR",
        "name": "Gjogur Airport",
        "city": "Gjogur",
        "country": "IS"
      },
      {
        "iata": "GRY",
        "name": "Grimsey Airport",
        "city": "Grimsey",
        "country": "IS"
      },
      {
        "iata": "HVK",
        "name": "Holmavik Airport",
        "city": "Holmavik",
        "country": "IS"
      },
      {
        "iata": "HFN",
        "name": "Hornafjordur Airport",
        "city": "Hornafjordur",
        "country": "IS"
      },
      {
        "iata": "FLI",
        "name": "Holt Airport",
        "city": "Flateyri",
        "country": "IS"
      },
      {
        "iata": "HZK",
        "name": "Husavik Airport",
        "city": "Husavik",
        "country": "IS"
      },
      {
        "iata": "HVM",
        "name": "Krokstadarmelar Airport",
        "city": "Hvammstangi",
        "country": "IS"
      },
      {
        "iata": "HLO",
        "name": "Ingjaldssandur Airport",
        "city": "Onundarfjordur",
        "country": "IS"
      },
      {
        "iata": "IFJ",
        "name": "Isafjordur Airport",
        "city": "Isafjordur",
        "country": "IS"
      },
      {
        "iata": "KEF",
        "name": "Keflavik International Airport",
        "city": "Reykjavik",
        "country": "IS"
      },
      {
        "iata": "OPA",
        "name": "Kopasker Airport",
        "city": "Kopasker",
        "country": "IS"
      },
      {
        "iata": "SAK",
        "name": "Saudarkrokur Airport",
        "city": "Saudarkrokur",
        "country": "IS"
      },
      {
        "iata": "NOR",
        "name": "Nordfjordur Airport",
        "city": "Nordfjordur",
        "country": "IS"
      },
      {
        "iata": "OFJ",
        "name": "Olafsfjordur Airport",
        "city": "Olafsfjordur",
        "country": "IS"
      },
      {
        "iata": "PFJ",
        "name": "Patreksfjordur Airport",
        "city": "Patreksfjordur",
        "country": "IS"
      },
      {
        "iata": "RHA",
        "name": "Reykholar Airport",
        "city": "Reykholar",
        "country": "IS"
      },
      {
        "iata": "OLI",
        "name": "Rif Airport",
        "city": "Rif",
        "country": "IS"
      },
      {
        "iata": "RFN",
        "name": "Raufarhofn Airport",
        "city": "Raufarhofn",
        "country": "IS"
      },
      {
        "iata": "RKV",
        "name": "Reykjavik Airport",
        "city": "Reykjavik",
        "country": "IS"
      },
      {
        "iata": "MVA",
        "name": "Reykjahlid Airport",
        "city": "Myvatn",
        "country": "IS"
      },
      {
        "iata": "SIJ",
        "name": "Siglufjordur Airport",
        "city": "Siglufjordur",
        "country": "IS"
      },
      {
        "iata": "SYK",
        "name": "Stykkisholmur Airport",
        "city": "Stykkisholmur",
        "country": "IS"
      },
      {
        "iata": "TEY",
        "name": "Tingeyri Airport",
        "city": "Tingeyri",
        "country": "IS"
      },
      {
        "iata": "THO",
        "name": "Thorshofn Airport",
        "city": "Thorshofn",
        "country": "IS"
      },
      {
        "iata": "VEY",
        "name": "Vestmannaeyjar Airport",
        "city": "Vestmannaeyjar",
        "country": "IS"
      },
      {
        "iata": "VPN",
        "name": "Vopnafjordur Airport",
        "city": "Vopnafjordur",
        "country": "IS"
      },
      {
        "iata": "PRN",
        "name": "Pristina International Airport",
        "city": "Prishtina",
        "country": "KS"
      },
      {
        "iata": "YZZ",
        "name": "Trail Airport",
        "city": "Trail",
        "country": "CA"
      },
      {
        "iata": "YAA",
        "name": "Anahim Lake Airport",
        "city": "Anahim Lake",
        "country": "CA"
      },
      {
        "iata": "DGF",
        "name": "Douglas Lake Airport",
        "city": "Douglas Lake",
        "country": "CA"
      },
      {
        "iata": "JHL",
        "name": "Fort MacKay/Albian Aerodrome",
        "city": "Albian Village",
        "country": "CA"
      },
      {
        "iata": "DUQ",
        "name": "Duncan Airport",
        "city": "Duncan",
        "country": "CA"
      },
      {
        "iata": "YWM",
        "name": "Williams Harbour Airport",
        "city": "Williams Harbour",
        "country": "CA"
      },
      {
        "iata": "YFX",
        "name": "St. Lewis (Fox Harbour) Airport",
        "city": "St. Lewis",
        "country": "CA"
      },
      {
        "iata": "YHA",
        "name": "Port Hope Simpson Airport",
        "city": "Port Hope Simpson",
        "country": "CA"
      },
      {
        "iata": "YRG",
        "name": "Rigolet Airport",
        "city": "Rigolet",
        "country": "CA"
      },
      {
        "iata": "DVK",
        "name": "Diavik Airport",
        "city": "Diavik",
        "country": "CA"
      },
      {
        "iata": "YCK",
        "name": "Colville Lake Airport",
        "city": "Colville Lake",
        "country": "CA"
      },
      {
        "iata": "YLE",
        "name": "Whati Airport",
        "city": "Whati",
        "country": "CA"
      },
      {
        "iata": "NML",
        "name": "Fort McMurray / Mildred Lake Airport",
        "city": "Fort McMurray",
        "country": "CA"
      },
      {
        "iata": "ZSP",
        "name": "St. Paul Airport",
        "city": "St. Paul",
        "country": "CA"
      },
      {
        "iata": "DAS",
        "name": "Great Bear Lake Airport",
        "city": "Great Bear Lake",
        "country": "CA"
      },
      {
        "iata": "YFI",
        "name": "Fort Mackay / Firebag",
        "city": "Suncor Energy Site",
        "country": "CA"
      },
      {
        "iata": "SUR",
        "name": "Summer Beaver Airport",
        "city": "Summer Beaver",
        "country": "CA"
      },
      {
        "iata": "YAX",
        "name": "Wapekeka Airport",
        "city": "Angling Lake",
        "country": "CA"
      },
      {
        "iata": "WNN",
        "name": "Wunnumin Lake Airport",
        "city": "Wunnumin Lake",
        "country": "CA"
      },
      {
        "iata": "YNO",
        "name": "North Spirit Lake Airport",
        "city": "North Spirit Lake",
        "country": "CA"
      },
      {
        "iata": "XBE",
        "name": "Bearskin Lake Airport",
        "city": "Bearskin Lake",
        "country": "CA"
      },
      {
        "iata": "KIF",
        "name": "Kingfisher Lake Airport",
        "city": "Kingfisher Lake",
        "country": "CA"
      },
      {
        "iata": "YOG",
        "name": "Ogoki Post Airport",
        "city": "Ogoki Post",
        "country": "CA"
      },
      {
        "iata": "YEB",
        "name": "Bar River Airport",
        "city": "Bar River",
        "country": "CA"
      },
      {
        "iata": "YHP",
        "name": "Poplar Hill Airport",
        "city": "Poplar Hill",
        "country": "CA"
      },
      {
        "iata": "YNX",
        "name": "Snap Lake Airport",
        "city": "Snap Lake",
        "country": "CA"
      },
      {
        "iata": "YKU",
        "name": "Chisasibi Airport",
        "city": "Chisasibi",
        "country": "CA"
      },
      {
        "iata": "ZTB",
        "name": "Tete-a-la-Baleine Airport",
        "city": "Tete-a-la-Baleine",
        "country": "CA"
      },
      {
        "iata": "YAU",
        "name": "Donaldson Airport",
        "city": "Kattiniq",
        "country": "CA"
      },
      {
        "iata": "ZLT",
        "name": "La Tabatiere Airport",
        "city": "La Tabatiere",
        "country": "CA"
      },
      {
        "iata": "YAC",
        "name": "Cat Lake Airport",
        "city": "Cat Lake",
        "country": "CA"
      },
      {
        "iata": "YAR",
        "name": "La Grande-3 Airport",
        "city": "La Grande-3",
        "country": "CA"
      },
      {
        "iata": "YAG",
        "name": "Fort Frances Municipal Airport",
        "city": "Fort Frances",
        "country": "CA"
      },
      {
        "iata": "YAH",
        "name": "La Grande-4 Airport",
        "city": "La Grande-4",
        "country": "CA"
      },
      {
        "iata": "YAL",
        "name": "Alert Bay Airport",
        "city": "Alert Bay",
        "country": "CA"
      },
      {
        "iata": "YAM",
        "name": "Sault Ste Marie Airport",
        "city": "Sault Ste Marie",
        "country": "CA"
      },
      {
        "iata": "XKS",
        "name": "Kasabonika Airport",
        "city": "Kasabonika",
        "country": "CA"
      },
      {
        "iata": "YKG",
        "name": "Kangirsuk Airport",
        "city": "Kangirsuk",
        "country": "CA"
      },
      {
        "iata": "YAT",
        "name": "Attawapiskat Airport",
        "city": "Attawapiskat",
        "country": "CA"
      },
      {
        "iata": "YAW",
        "name": "Shearwater Airport",
        "city": "Halifax",
        "country": "CA"
      },
      {
        "iata": "YAY",
        "name": "St. Anthony Airport",
        "city": "St. Anthony",
        "country": "CA"
      },
      {
        "iata": "YAZ",
        "name": "Tofino / Long Beach Airport",
        "city": "Tofino",
        "country": "CA"
      },
      {
        "iata": "YBA",
        "name": "Banff Airport",
        "city": "Banff",
        "country": "CA"
      },
      {
        "iata": "YBB",
        "name": "Kugaaruk Airport",
        "city": "Kugaaruk",
        "country": "CA"
      },
      {
        "iata": "YBC",
        "name": "Baie Comeau Airport",
        "city": "Baie-Comeau",
        "country": "CA"
      },
      {
        "iata": "QBC",
        "name": "Bella Coola Airport",
        "city": "Bella Coola",
        "country": "CA"
      },
      {
        "iata": "YBE",
        "name": "Uranium City Airport",
        "city": "Uranium City",
        "country": "CA"
      },
      {
        "iata": "YBY",
        "name": "Bonnyville Airport",
        "city": "Bonnyville",
        "country": "CA"
      },
      {
        "iata": "YBG",
        "name": "CFB Bagotville",
        "city": "Bagotville",
        "country": "CA"
      },
      {
        "iata": "YBK",
        "name": "Baker Lake Airport",
        "city": "Baker Lake",
        "country": "CA"
      },
      {
        "iata": "YBL",
        "name": "Campbell River Airport",
        "city": "Campbell River",
        "country": "CA"
      },
      {
        "iata": "XTL",
        "name": "Tadoule Lake Airport",
        "city": "Tadoule Lake",
        "country": "CA"
      },
      {
        "iata": "YBR",
        "name": "Brandon Municipal Airport",
        "city": "Brandon",
        "country": "CA"
      },
      {
        "iata": "YBT",
        "name": "Brochet Airport",
        "city": "Brochet",
        "country": "CA"
      },
      {
        "iata": "YBV",
        "name": "Berens River Airport",
        "city": "Berens River",
        "country": "CA"
      },
      {
        "iata": "YBX",
        "name": "Lourdes de Blanc Sablon Airport",
        "city": "Lourdes-De-Blanc-Sablon",
        "country": "CA"
      },
      {
        "iata": "YRF",
        "name": "Cartwright Airport",
        "city": "Cartwright",
        "country": "CA"
      },
      {
        "iata": "YCB",
        "name": "Cambridge Bay Airport",
        "city": "Cambridge Bay",
        "country": "CA"
      },
      {
        "iata": "YCC",
        "name": "Cornwall Regional Airport",
        "city": "Cornwall",
        "country": "CA"
      },
      {
        "iata": "YCD",
        "name": "Nanaimo Airport",
        "city": "Nanaimo",
        "country": "CA"
      },
      {
        "iata": "YCE",
        "name": "James T. Field Memorial Aerodrome",
        "city": "Centralia",
        "country": "CA"
      },
      {
        "iata": "YCG",
        "name": "Castlegar/West Kootenay Regional Airport",
        "city": "Castlegar",
        "country": "CA"
      },
      {
        "iata": "YCH",
        "name": "Miramichi Airport",
        "city": "Miramichi",
        "country": "CA"
      },
      {
        "iata": "XCM",
        "name": "Chatham Kent Airport",
        "city": "Chatham-Kent",
        "country": "CA"
      },
      {
        "iata": "YCL",
        "name": "Charlo Airport",
        "city": "Charlo",
        "country": "CA"
      },
      {
        "iata": "YCN",
        "name": "Cochrane Airport",
        "city": "Cochrane",
        "country": "CA"
      },
      {
        "iata": "YCO",
        "name": "Kugluktuk Airport",
        "city": "Kugluktuk",
        "country": "CA"
      },
      {
        "iata": "YCQ",
        "name": "Chetwynd Airport",
        "city": "Chetwynd",
        "country": "CA"
      },
      {
        "iata": "YCR",
        "name": "Cross Lake (Charlie Sinclair Memorial) Airport",
        "city": "Cross Lake",
        "country": "CA"
      },
      {
        "iata": "YCS",
        "name": "Chesterfield Inlet Airport",
        "city": "Chesterfield Inlet",
        "country": "CA"
      },
      {
        "iata": "YCY",
        "name": "Clyde River Airport",
        "city": "Clyde River",
        "country": "CA"
      },
      {
        "iata": "YCZ",
        "name": "Fairmont Hot Springs Airport",
        "city": "Fairmont Hot Springs",
        "country": "CA"
      },
      {
        "iata": "YDA",
        "name": "Dawson City Airport",
        "city": "Dawson City",
        "country": "CA"
      },
      {
        "iata": "YDB",
        "name": "Burwash Airport",
        "city": "Burwash",
        "country": "CA"
      },
      {
        "iata": "YDF",
        "name": "Deer Lake Airport",
        "city": "Deer Lake",
        "country": "CA"
      },
      {
        "iata": "YDM",
        "name": "Ross River Airport",
        "city": "Ross River",
        "country": "CA"
      },
      {
        "iata": "YDN",
        "name": "Dauphin Barker Airport",
        "city": "Dauphin",
        "country": "CA"
      },
      {
        "iata": "YDO",
        "name": "Dolbeau St Felicien Airport",
        "city": "Dolbeau-St-Felicien",
        "country": "CA"
      },
      {
        "iata": "YDP",
        "name": "Nain Airport",
        "city": "Nain",
        "country": "CA"
      },
      {
        "iata": "YDQ",
        "name": "Dawson Creek Airport",
        "city": "Dawson Creek",
        "country": "CA"
      },
      {
        "iata": "YEG",
        "name": "Edmonton International Airport",
        "city": "Edmonton",
        "country": "CA"
      },
      {
        "iata": "YEK",
        "name": "Arviat Airport",
        "city": "Arviat",
        "country": "CA"
      },
      {
        "iata": "YEL",
        "name": "Elliot Lake Municipal Airport",
        "city": "Elliot Lake",
        "country": "CA"
      },
      {
        "iata": "YEM",
        "name": "Manitoulin East Municipal Airport",
        "city": "Manitowaning",
        "country": "CA"
      },
      {
        "iata": "YEN",
        "name": "Estevan Airport",
        "city": "Estevan",
        "country": "CA"
      },
      {
        "iata": "YER",
        "name": "Fort Severn Airport",
        "city": "Fort Severn",
        "country": "CA"
      },
      {
        "iata": "YET",
        "name": "Edson Airport",
        "city": "Edson",
        "country": "CA"
      },
      {
        "iata": "YEU",
        "name": "Eureka Airport",
        "city": "Eureka",
        "country": "CA"
      },
      {
        "iata": "YEV",
        "name": "Inuvik Mike Zubko Airport",
        "city": "Inuvik",
        "country": "CA"
      },
      {
        "iata": "YEY",
        "name": "Amos Magny Airport",
        "city": "Amos",
        "country": "CA"
      },
      {
        "iata": "YFA",
        "name": "Fort Albany Airport",
        "city": "Fort Albany",
        "country": "CA"
      },
      {
        "iata": "YFB",
        "name": "Iqaluit Airport",
        "city": "Iqaluit",
        "country": "CA"
      },
      {
        "iata": "YFC",
        "name": "Fredericton Airport",
        "city": "Fredericton",
        "country": "CA"
      },
      {
        "iata": "YFE",
        "name": "Forestville Airport",
        "city": "Forestville",
        "country": "CA"
      },
      {
        "iata": "YFH",
        "name": "Fort Hope Airport",
        "city": "Fort Hope",
        "country": "CA"
      },
      {
        "iata": "YTM",
        "name": "La Macaza / Mont-Tremblant International Inc Airport",
        "city": "Riviere Rouge",
        "country": "CA"
      },
      {
        "iata": "YFO",
        "name": "Flin Flon Airport",
        "city": "Flin Flon",
        "country": "CA"
      },
      {
        "iata": "YFR",
        "name": "Fort Resolution Airport",
        "city": "Fort Resolution",
        "country": "CA"
      },
      {
        "iata": "YFS",
        "name": "Fort Simpson Airport",
        "city": "Fort Simpson",
        "country": "CA"
      },
      {
        "iata": "YMN",
        "name": "Makkovik Airport",
        "city": "Makkovik",
        "country": "CA"
      },
      {
        "iata": "YGB",
        "name": "Texada Gillies Bay Airport",
        "city": "Texada",
        "country": "CA"
      },
      {
        "iata": "YGD",
        "name": "Goderich Airport",
        "city": "Goderich",
        "country": "CA"
      },
      {
        "iata": "YGH",
        "name": "Fort Good Hope Airport",
        "city": "Fort Good Hope",
        "country": "CA"
      },
      {
        "iata": "YGK",
        "name": "Kingston Norman Rogers Airport",
        "city": "Kingston",
        "country": "CA"
      },
      {
        "iata": "YGL",
        "name": "La Grande Riviere Airport",
        "city": "La Grande Riviere",
        "country": "CA"
      },
      {
        "iata": "YGM",
        "name": "Gimli Industrial Park Airport",
        "city": "Gimli",
        "country": "CA"
      },
      {
        "iata": "YGO",
        "name": "Gods Lake Narrows Airport",
        "city": "Gods Lake Narrows",
        "country": "CA"
      },
      {
        "iata": "YGP",
        "name": "Gaspe (Michel-Pouliot) Airport",
        "city": "Gaspe",
        "country": "CA"
      },
      {
        "iata": "YGQ",
        "name": "Geraldton Greenstone Regional Airport",
        "city": "Geraldton",
        "country": "CA"
      },
      {
        "iata": "YGR",
        "name": "Iles-de-la-Madeleine Airport",
        "city": "Iles-de-la-Madeleine",
        "country": "CA"
      },
      {
        "iata": "YGT",
        "name": "Igloolik Airport",
        "city": "Igloolik",
        "country": "CA"
      },
      {
        "iata": "YGV",
        "name": "Havre St Pierre Airport",
        "city": "Havre St-Pierre",
        "country": "CA"
      },
      {
        "iata": "YGW",
        "name": "Kuujjuarapik Airport",
        "city": "Kuujjuarapik",
        "country": "CA"
      },
      {
        "iata": "YGX",
        "name": "Gillam Airport",
        "city": "Gillam",
        "country": "CA"
      },
      {
        "iata": "YGZ",
        "name": "Grise Fiord Airport",
        "city": "Grise Fiord",
        "country": "CA"
      },
      {
        "iata": "YQC",
        "name": "Quaqtaq Airport",
        "city": "Quaqtaq",
        "country": "CA"
      },
      {
        "iata": "YHD",
        "name": "Dryden Regional Airport",
        "city": "Dryden",
        "country": "CA"
      },
      {
        "iata": "YHE",
        "name": "Hope Airport",
        "city": "Hope",
        "country": "CA"
      },
      {
        "iata": "YHF",
        "name": "Hearst Rene Fontaine Municipal Airport",
        "city": "Hearst",
        "country": "CA"
      },
      {
        "iata": "YNS",
        "name": "Nemiscau Airport",
        "city": "Nemiscau",
        "country": "CA"
      },
      {
        "iata": "YHI",
        "name": "Ulukhaktok Holman Airport",
        "city": "Ulukhaktok",
        "country": "CA"
      },
      {
        "iata": "YHK",
        "name": "Gjoa Haven Airport",
        "city": "Gjoa Haven",
        "country": "CA"
      },
      {
        "iata": "YHM",
        "name": "John C. Munro Hamilton International Airport",
        "city": "Hamilton",
        "country": "CA"
      },
      {
        "iata": "YHN",
        "name": "Hornepayne Municipal Airport",
        "city": "Hornepayne",
        "country": "CA"
      },
      {
        "iata": "YHO",
        "name": "Hopedale Airport",
        "city": "Hopedale",
        "country": "CA"
      },
      {
        "iata": "YHR",
        "name": "Chevery Airport",
        "city": "Chevery",
        "country": "CA"
      },
      {
        "iata": "YHT",
        "name": "Haines Junction Airport",
        "city": "Haines Junction",
        "country": "CA"
      },
      {
        "iata": "YHU",
        "name": "Montreal / Saint-Hubert Airport",
        "city": "Montreal",
        "country": "CA"
      },
      {
        "iata": "YHY",
        "name": "Hay River / Merlyn Carter Airport",
        "city": "Hay River",
        "country": "CA"
      },
      {
        "iata": "YHZ",
        "name": "Halifax / Stanfield International Airport",
        "city": "Halifax",
        "country": "CA"
      },
      {
        "iata": "YIB",
        "name": "Atikokan Municipal Airport",
        "city": "Atikokan",
        "country": "CA"
      },
      {
        "iata": "YDG",
        "name": "Digby / Annapolis Regional Airport",
        "city": "Digby",
        "country": "CA"
      },
      {
        "iata": "YIF",
        "name": "St Augustin Airport",
        "city": "St-Augustin",
        "country": "CA"
      },
      {
        "iata": "YIK",
        "name": "Ivujivik Airport",
        "city": "Ivujivik",
        "country": "CA"
      },
      {
        "iata": "YIO",
        "name": "Pond Inlet Airport",
        "city": "Pond Inlet",
        "country": "CA"
      },
      {
        "iata": "YIV",
        "name": "Island Lake Airport",
        "city": "Island Lake",
        "country": "CA"
      },
      {
        "iata": "YJF",
        "name": "Fort Liard Airport",
        "city": "Fort Liard",
        "country": "CA"
      },
      {
        "iata": "YJN",
        "name": "St Jean Airport",
        "city": "St Jean",
        "country": "CA"
      },
      {
        "iata": "YJT",
        "name": "Stephenville Airport",
        "city": "Stephenville",
        "country": "CA"
      },
      {
        "iata": "YKA",
        "name": "Kamloops Airport",
        "city": "Kamloops",
        "country": "CA"
      },
      {
        "iata": "LAK",
        "name": "Aklavik Airport",
        "city": "Aklavik",
        "country": "CA"
      },
      {
        "iata": "YKF",
        "name": "Waterloo Airport",
        "city": "Kitchener",
        "country": "CA"
      },
      {
        "iata": "YKJ",
        "name": "Key Lake Airport",
        "city": "Key Lake",
        "country": "CA"
      },
      {
        "iata": "YKL",
        "name": "Schefferville Airport",
        "city": "Schefferville",
        "country": "CA"
      },
      {
        "iata": "AKV",
        "name": "Akulivik Airport",
        "city": "Akulivik",
        "country": "CA"
      },
      {
        "iata": "YKQ",
        "name": "Waskaganish Airport",
        "city": "Waskaganish",
        "country": "CA"
      },
      {
        "iata": "YKX",
        "name": "Kirkland Lake Airport",
        "city": "Kirkland Lake",
        "country": "CA"
      },
      {
        "iata": "YKY",
        "name": "Kindersley Airport",
        "city": "Kindersley",
        "country": "CA"
      },
      {
        "iata": "YKZ",
        "name": "Buttonville Municipal Airport",
        "city": "Toronto",
        "country": "CA"
      },
      {
        "iata": "YPJ",
        "name": "Aupaluk Airport",
        "city": "Aupaluk",
        "country": "CA"
      },
      {
        "iata": "YLC",
        "name": "Kimmirut Airport",
        "city": "Kimmirut",
        "country": "CA"
      },
      {
        "iata": "YLD",
        "name": "Chapleau Airport",
        "city": "Chapleau",
        "country": "CA"
      },
      {
        "iata": "YLH",
        "name": "Lansdowne House Airport",
        "city": "Lansdowne House",
        "country": "CA"
      },
      {
        "iata": "YLJ",
        "name": "Meadow Lake Airport",
        "city": "Meadow Lake",
        "country": "CA"
      },
      {
        "iata": "YSG",
        "name": "Lutselk'e Airport",
        "city": "Lutselk'e",
        "country": "CA"
      },
      {
        "iata": "YLL",
        "name": "Lloydminster Airport",
        "city": "Lloydminster",
        "country": "CA"
      },
      {
        "iata": "YLR",
        "name": "Leaf Rapids Airport",
        "city": "Leaf Rapids",
        "country": "CA"
      },
      {
        "iata": "YLK",
        "name": "Barrie-Orillia (Lake Simcoe Regional Airport)",
        "city": "Barrie-Orillia",
        "country": "CA"
      },
      {
        "iata": "YLT",
        "name": "Alert Airport",
        "city": "Alert",
        "country": "CA"
      },
      {
        "iata": "XGR",
        "name": "Kangiqsualujjuaq (Georges River) Airport",
        "city": "Kangiqsualujjuaq",
        "country": "CA"
      },
      {
        "iata": "YLW",
        "name": "Kelowna Airport",
        "city": "Kelowna",
        "country": "CA"
      },
      {
        "iata": "YMA",
        "name": "Mayo Airport",
        "city": "Mayo",
        "country": "CA"
      },
      {
        "iata": "YME",
        "name": "Matane Airport",
        "city": "Matane",
        "country": "CA"
      },
      {
        "iata": "YMG",
        "name": "Manitouwadge Airport",
        "city": "Manitouwadge",
        "country": "CA"
      },
      {
        "iata": "YMH",
        "name": "Mary's Harbour Airport",
        "city": "Mary's Harbour",
        "country": "CA"
      },
      {
        "iata": "YMJ",
        "name": "Moose Jaw Air Vice Marshal C. M. McEwen Airport",
        "city": "Moose Jaw",
        "country": "CA"
      },
      {
        "iata": "YML",
        "name": "Charlevoix Airport",
        "city": "Charlevoix",
        "country": "CA"
      },
      {
        "iata": "YMM",
        "name": "Fort McMurray Airport",
        "city": "Fort McMurray",
        "country": "CA"
      },
      {
        "iata": "YMO",
        "name": "Moosonee Airport",
        "city": "Moosonee",
        "country": "CA"
      },
      {
        "iata": "YMT",
        "name": "Chapais Airport",
        "city": "Chibougamau",
        "country": "CA"
      },
      {
        "iata": "YUD",
        "name": "Umiujaq Airport",
        "city": "Umiujaq",
        "country": "CA"
      },
      {
        "iata": "YMX",
        "name": "Montreal International (Mirabel) Airport",
        "city": "Montreal",
        "country": "CA"
      },
      {
        "iata": "YNA",
        "name": "Natashquan Airport",
        "city": "Natashquan",
        "country": "CA"
      },
      {
        "iata": "YNC",
        "name": "Wemindji Airport",
        "city": "Wemindji",
        "country": "CA"
      },
      {
        "iata": "YND",
        "name": "Ottawa / Gatineau Airport",
        "city": "Gatineau",
        "country": "CA"
      },
      {
        "iata": "YNE",
        "name": "Norway House Airport",
        "city": "Norway House",
        "country": "CA"
      },
      {
        "iata": "YNL",
        "name": "Points North Landing Airport",
        "city": "Points North Landing",
        "country": "CA"
      },
      {
        "iata": "YNM",
        "name": "Matagami Airport",
        "city": "Matagami",
        "country": "CA"
      },
      {
        "iata": "YNN",
        "name": "Nejanilini Lake Airport",
        "city": "Nejanilini Lake",
        "country": "CA"
      },
      {
        "iata": "HZP",
        "name": "Fort Mackay / Horizon Airport",
        "city": "Fort Mackay",
        "country": "CA"
      },
      {
        "iata": "YOA",
        "name": "Ekati Airport",
        "city": "Ekati",
        "country": "CA"
      },
      {
        "iata": "YOC",
        "name": "Old Crow Airport",
        "city": "Old Crow",
        "country": "CA"
      },
      {
        "iata": "YOD",
        "name": "CFB Cold Lake",
        "city": "Cold Lake",
        "country": "CA"
      },
      {
        "iata": "YOH",
        "name": "Oxford House Airport",
        "city": "Oxford House",
        "country": "CA"
      },
      {
        "iata": "YOJ",
        "name": "High Level Airport",
        "city": "High Level",
        "country": "CA"
      },
      {
        "iata": "YOO",
        "name": "Oshawa Airport",
        "city": "Oshawa",
        "country": "CA"
      },
      {
        "iata": "YOP",
        "name": "Rainbow Lake Airport",
        "city": "Rainbow Lake",
        "country": "CA"
      },
      {
        "iata": "YOS",
        "name": "Owen Sound / Billy Bishop Regional Airport",
        "city": "Owen Sound",
        "country": "CA"
      },
      {
        "iata": "YOW",
        "name": "Ottawa Macdonald-Cartier International Airport",
        "city": "Ottawa",
        "country": "CA"
      },
      {
        "iata": "YPA",
        "name": "Prince Albert Glass Field",
        "city": "Prince Albert",
        "country": "CA"
      },
      {
        "iata": "YPC",
        "name": "Paulatuk (Nora Aliqatchialuk Ruben) Airport",
        "city": "Paulatuk",
        "country": "CA"
      },
      {
        "iata": "YPS",
        "name": "Port Hawkesbury Airport",
        "city": "Port Hawkesbury",
        "country": "CA"
      },
      {
        "iata": "YPE",
        "name": "Peace River Airport",
        "city": "Peace River",
        "country": "CA"
      },
      {
        "iata": "YPG",
        "name": "Southport Airport",
        "city": "Portage",
        "country": "CA"
      },
      {
        "iata": "YPH",
        "name": "Inukjuak Airport",
        "city": "Inukjuak",
        "country": "CA"
      },
      {
        "iata": "YPL",
        "name": "Pickle Lake Airport",
        "city": "Pickle Lake",
        "country": "CA"
      },
      {
        "iata": "YPM",
        "name": "Pikangikum Airport",
        "city": "Pikangikum",
        "country": "CA"
      },
      {
        "iata": "YPN",
        "name": "Port Menier Airport",
        "city": "Port-Menier",
        "country": "CA"
      },
      {
        "iata": "YPO",
        "name": "Peawanuck Airport",
        "city": "Peawanuck",
        "country": "CA"
      },
      {
        "iata": "YPQ",
        "name": "Peterborough Airport",
        "city": "Peterborough",
        "country": "CA"
      },
      {
        "iata": "YPR",
        "name": "Prince Rupert Airport",
        "city": "Prince Rupert",
        "country": "CA"
      },
      {
        "iata": "YPW",
        "name": "Powell River Airport",
        "city": "Powell River",
        "country": "CA"
      },
      {
        "iata": "YPX",
        "name": "Puvirnituq Airport",
        "city": "Puvirnituq",
        "country": "CA"
      },
      {
        "iata": "YPY",
        "name": "Fort Chipewyan Airport",
        "city": "Fort Chipewyan",
        "country": "CA"
      },
      {
        "iata": "YQA",
        "name": "Muskoka Airport",
        "city": "Muskoka",
        "country": "CA"
      },
      {
        "iata": "YQB",
        "name": "Quebec Jean Lesage International Airport",
        "city": "Quebec",
        "country": "CA"
      },
      {
        "iata": "YQD",
        "name": "The Pas Airport",
        "city": "The Pas",
        "country": "CA"
      },
      {
        "iata": "YQF",
        "name": "Red Deer Regional Airport",
        "city": "Red Deer",
        "country": "CA"
      },
      {
        "iata": "YQG",
        "name": "Windsor Airport",
        "city": "Windsor",
        "country": "CA"
      },
      {
        "iata": "YQH",
        "name": "Watson Lake Airport",
        "city": "Watson Lake",
        "country": "CA"
      },
      {
        "iata": "YQI",
        "name": "Yarmouth Airport",
        "city": "Yarmouth",
        "country": "CA"
      },
      {
        "iata": "YQK",
        "name": "Kenora Airport",
        "city": "Kenora",
        "country": "CA"
      },
      {
        "iata": "YQL",
        "name": "Lethbridge County Airport",
        "city": "Lethbridge",
        "country": "CA"
      },
      {
        "iata": "YQM",
        "name": "Greater Moncton International Airport",
        "city": "Moncton",
        "country": "CA"
      },
      {
        "iata": "YQN",
        "name": "Nakina Airport",
        "city": "Nakina",
        "country": "CA"
      },
      {
        "iata": "YQQ",
        "name": "Comox Airport",
        "city": "Comox",
        "country": "CA"
      },
      {
        "iata": "YQR",
        "name": "Regina International Airport",
        "city": "Regina",
        "country": "CA"
      },
      {
        "iata": "YQS",
        "name": "St Thomas Municipal Airport",
        "city": "St Thomas",
        "country": "CA"
      },
      {
        "iata": "YQT",
        "name": "Thunder Bay Airport",
        "city": "Thunder Bay",
        "country": "CA"
      },
      {
        "iata": "YQU",
        "name": "Grande Prairie Airport",
        "city": "Grande Prairie",
        "country": "CA"
      },
      {
        "iata": "YQV",
        "name": "Yorkton Municipal Airport",
        "city": "Yorkton",
        "country": "CA"
      },
      {
        "iata": "YQW",
        "name": "North Battleford Airport",
        "city": "North Battleford",
        "country": "CA"
      },
      {
        "iata": "YQX",
        "name": "Gander International Airport",
        "city": "Gander",
        "country": "CA"
      },
      {
        "iata": "YQY",
        "name": "Sydney / J.A. Douglas McCurdy Airport",
        "city": "Sydney",
        "country": "CA"
      },
      {
        "iata": "YQZ",
        "name": "Quesnel Airport",
        "city": "Quesnel",
        "country": "CA"
      },
      {
        "iata": "YRA",
        "name": "Rae Lakes Airport",
        "city": "Gameti",
        "country": "CA"
      },
      {
        "iata": "YRB",
        "name": "Resolute Bay Airport",
        "city": "Resolute Bay",
        "country": "CA"
      },
      {
        "iata": "YRI",
        "name": "Riviere-du-Loup Airport",
        "city": "Riviere-du-Loup",
        "country": "CA"
      },
      {
        "iata": "YRJ",
        "name": "Roberval Airport",
        "city": "Roberval",
        "country": "CA"
      },
      {
        "iata": "YRL",
        "name": "Red Lake Airport",
        "city": "Red Lake",
        "country": "CA"
      },
      {
        "iata": "YRO",
        "name": "Ottawa / Rockcliffe Airport",
        "city": "Ottawa",
        "country": "CA"
      },
      {
        "iata": "YRP",
        "name": "Ottawa / Carp Airport",
        "city": "Carp",
        "country": "CA"
      },
      {
        "iata": "YRQ",
        "name": "Trois-Rivieres Airport",
        "city": "Trois-Rivieres",
        "country": "CA"
      },
      {
        "iata": "YRS",
        "name": "Red Sucker Lake Airport",
        "city": "Red Sucker Lake",
        "country": "CA"
      },
      {
        "iata": "YRT",
        "name": "Rankin Inlet Airport",
        "city": "Rankin Inlet",
        "country": "CA"
      },
      {
        "iata": "YRV",
        "name": "Revelstoke Airport",
        "city": "Revelstoke",
        "country": "CA"
      },
      {
        "iata": "YSB",
        "name": "Sudbury Airport",
        "city": "Sudbury",
        "country": "CA"
      },
      {
        "iata": "YSC",
        "name": "Sherbrooke Airport",
        "city": "Sherbrooke",
        "country": "CA"
      },
      {
        "iata": "YSF",
        "name": "Stony Rapids Airport",
        "city": "Stony Rapids",
        "country": "CA"
      },
      {
        "iata": "YSH",
        "name": "Smiths Falls-Montague (Russ Beach) Airport",
        "city": "Smiths Falls",
        "country": "CA"
      },
      {
        "iata": "YSJ",
        "name": "Saint John Airport",
        "city": "Saint John",
        "country": "CA"
      },
      {
        "iata": "YSK",
        "name": "Sanikiluaq Airport",
        "city": "Sanikiluaq",
        "country": "CA"
      },
      {
        "iata": "YSL",
        "name": "St Leonard Airport",
        "city": "St Leonard",
        "country": "CA"
      },
      {
        "iata": "YSM",
        "name": "Fort Smith Airport",
        "city": "Fort Smith",
        "country": "CA"
      },
      {
        "iata": "YCM",
        "name": "Niagara District Airport",
        "city": "St Catharines",
        "country": "CA"
      },
      {
        "iata": "YSP",
        "name": "Marathon Airport",
        "city": "Marathon",
        "country": "CA"
      },
      {
        "iata": "YST",
        "name": "St. Theresa Point Airport",
        "city": "St. Theresa Point",
        "country": "CA"
      },
      {
        "iata": "YSU",
        "name": "Summerside Airport",
        "city": "Summerside",
        "country": "CA"
      },
      {
        "iata": "YSY",
        "name": "Sachs Harbour (David Nasogaluak Jr. Saaryuaq) Airport",
        "city": "Sachs Harbour",
        "country": "CA"
      },
      {
        "iata": "YTA",
        "name": "Pembroke Airport",
        "city": "Pembroke",
        "country": "CA"
      },
      {
        "iata": "YTE",
        "name": "Cape Dorset Airport",
        "city": "Cape Dorset",
        "country": "CA"
      },
      {
        "iata": "YTF",
        "name": "Alma Airport",
        "city": "Alma",
        "country": "CA"
      },
      {
        "iata": "YTH",
        "name": "Thompson Airport",
        "city": "Thompson",
        "country": "CA"
      },
      {
        "iata": "YTL",
        "name": "Big Trout Lake Airport",
        "city": "Big Trout Lake",
        "country": "CA"
      },
      {
        "iata": "YTQ",
        "name": "Tasiujaq Airport",
        "city": "Tasiujaq",
        "country": "CA"
      },
      {
        "iata": "YTR",
        "name": "CFB Trenton",
        "city": "Trenton",
        "country": "CA"
      },
      {
        "iata": "YTS",
        "name": "Timmins/Victor M. Power",
        "city": "Timmins",
        "country": "CA"
      },
      {
        "iata": "YTZ",
        "name": "Billy Bishop Toronto City Centre Airport",
        "city": "Toronto",
        "country": "CA"
      },
      {
        "iata": "YUB",
        "name": "Tuktoyaktuk Airport",
        "city": "Tuktoyaktuk",
        "country": "CA"
      },
      {
        "iata": "YUL",
        "name": "Montreal / Pierre Elliott Trudeau International Airport",
        "city": "Montreal",
        "country": "CA"
      },
      {
        "iata": "YUT",
        "name": "Repulse Bay Airport",
        "city": "Repulse Bay",
        "country": "CA"
      },
      {
        "iata": "YUX",
        "name": "Hall Beach Airport",
        "city": "Hall Beach",
        "country": "CA"
      },
      {
        "iata": "YUY",
        "name": "Rouyn Noranda Airport",
        "city": "Rouyn-Noranda",
        "country": "CA"
      },
      {
        "iata": "YVB",
        "name": "Bonaventure Airport",
        "city": "Bonaventure",
        "country": "CA"
      },
      {
        "iata": "YVC",
        "name": "La Ronge Airport",
        "city": "La Ronge",
        "country": "CA"
      },
      {
        "iata": "YVE",
        "name": "Vernon Airport",
        "city": "Vernon",
        "country": "CA"
      },
      {
        "iata": "YVM",
        "name": "Qikiqtarjuaq Airport",
        "city": "Qikiqtarjuaq",
        "country": "CA"
      },
      {
        "iata": "YVO",
        "name": "Val-d'Or Airport",
        "city": "Val-d'Or",
        "country": "CA"
      },
      {
        "iata": "YVP",
        "name": "Kuujjuaq Airport",
        "city": "Kuujjuaq",
        "country": "CA"
      },
      {
        "iata": "YVQ",
        "name": "Norman Wells Airport",
        "city": "Norman Wells",
        "country": "CA"
      },
      {
        "iata": "YVR",
        "name": "Vancouver International Airport",
        "city": "Vancouver",
        "country": "CA"
      },
      {
        "iata": "YVT",
        "name": "Buffalo Narrows Airport",
        "city": "Buffalo Narrows",
        "country": "CA"
      },
      {
        "iata": "YVV",
        "name": "Wiarton Airport",
        "city": "Wiarton",
        "country": "CA"
      },
      {
        "iata": "YVZ",
        "name": "Deer Lake Airport",
        "city": "Deer Lake",
        "country": "CA"
      },
      {
        "iata": "YWA",
        "name": "Petawawa Airport",
        "city": "Petawawa",
        "country": "CA"
      },
      {
        "iata": "YWG",
        "name": "Winnipeg / James Armstrong Richardson International Airport",
        "city": "Winnipeg",
        "country": "CA"
      },
      {
        "iata": "YWJ",
        "name": "Deline Airport",
        "city": "Deline",
        "country": "CA"
      },
      {
        "iata": "YWK",
        "name": "Wabush Airport",
        "city": "Wabush",
        "country": "CA"
      },
      {
        "iata": "YWL",
        "name": "Williams Lake Airport",
        "city": "Williams Lake",
        "country": "CA"
      },
      {
        "iata": "YWP",
        "name": "Webequie Airport",
        "city": "Webequie",
        "country": "CA"
      },
      {
        "iata": "YWY",
        "name": "Wrigley Airport",
        "city": "Wrigley",
        "country": "CA"
      },
      {
        "iata": "YXC",
        "name": "Cranbrook Airport",
        "city": "Cranbrook",
        "country": "CA"
      },
      {
        "iata": "YXD",
        "name": "Edmonton City Centre (Blatchford Field) Airport",
        "city": "Edmonton",
        "country": "CA"
      },
      {
        "iata": "YXE",
        "name": "Saskatoon John G. Diefenbaker International Airport",
        "city": "Saskatoon",
        "country": "CA"
      },
      {
        "iata": "YXH",
        "name": "Medicine Hat Airport",
        "city": "Medicine Hat",
        "country": "CA"
      },
      {
        "iata": "YXJ",
        "name": "Fort St John Airport",
        "city": "Fort St.John",
        "country": "CA"
      },
      {
        "iata": "YXK",
        "name": "Rimouski Airport",
        "city": "Rimouski",
        "country": "CA"
      },
      {
        "iata": "YXL",
        "name": "Sioux Lookout Airport",
        "city": "Sioux Lookout",
        "country": "CA"
      },
      {
        "iata": "YXN",
        "name": "Whale Cove Airport",
        "city": "Whale Cove",
        "country": "CA"
      },
      {
        "iata": "YXP",
        "name": "Pangnirtung Airport",
        "city": "Pangnirtung",
        "country": "CA"
      },
      {
        "iata": "YXQ",
        "name": "Beaver Creek Airport",
        "city": "Beaver Creek",
        "country": "CA"
      },
      {
        "iata": "YXR",
        "name": "Earlton (Timiskaming Regional) Airport",
        "city": "Earlton",
        "country": "CA"
      },
      {
        "iata": "YXS",
        "name": "Prince George Airport",
        "city": "Prince George",
        "country": "CA"
      },
      {
        "iata": "YXT",
        "name": "Terrace Airport",
        "city": "Terrace",
        "country": "CA"
      },
      {
        "iata": "YXU",
        "name": "London Airport",
        "city": "London",
        "country": "CA"
      },
      {
        "iata": "YXX",
        "name": "Abbotsford Airport",
        "city": "Abbotsford",
        "country": "CA"
      },
      {
        "iata": "YXY",
        "name": "Whitehorse / Erik Nielsen International Airport",
        "city": "Whitehorse",
        "country": "CA"
      },
      {
        "iata": "YXZ",
        "name": "Wawa Airport",
        "city": "Wawa",
        "country": "CA"
      },
      {
        "iata": "YYB",
        "name": "North Bay Airport",
        "city": "North Bay",
        "country": "CA"
      },
      {
        "iata": "YYC",
        "name": "Calgary International Airport",
        "city": "Calgary",
        "country": "CA"
      },
      {
        "iata": "YYD",
        "name": "Smithers Airport",
        "city": "Smithers",
        "country": "CA"
      },
      {
        "iata": "YYE",
        "name": "Fort Nelson Airport",
        "city": "Fort Nelson",
        "country": "CA"
      },
      {
        "iata": "YYF",
        "name": "Penticton Airport",
        "city": "Penticton",
        "country": "CA"
      },
      {
        "iata": "YYG",
        "name": "Charlottetown Airport",
        "city": "Charlottetown",
        "country": "CA"
      },
      {
        "iata": "YYH",
        "name": "Taloyoak Airport",
        "city": "Taloyoak",
        "country": "CA"
      },
      {
        "iata": "YYJ",
        "name": "Victoria International Airport",
        "city": "Victoria",
        "country": "CA"
      },
      {
        "iata": "YYL",
        "name": "Lynn Lake Airport",
        "city": "Lynn Lake",
        "country": "CA"
      },
      {
        "iata": "YYN",
        "name": "Swift Current Airport",
        "city": "Swift Current",
        "country": "CA"
      },
      {
        "iata": "YYQ",
        "name": "Churchill Airport",
        "city": "Churchill",
        "country": "CA"
      },
      {
        "iata": "YYR",
        "name": "Goose Bay Airport",
        "city": "Goose Bay",
        "country": "CA"
      },
      {
        "iata": "YYT",
        "name": "St. John's International Airport",
        "city": "St. John's",
        "country": "CA"
      },
      {
        "iata": "YYU",
        "name": "Kapuskasing Airport",
        "city": "Kapuskasing",
        "country": "CA"
      },
      {
        "iata": "YYW",
        "name": "Armstrong Airport",
        "city": "Armstrong",
        "country": "CA"
      },
      {
        "iata": "YYY",
        "name": "Mont Joli Airport",
        "city": "Mont-Joli",
        "country": "CA"
      },
      {
        "iata": "YYZ",
        "name": "Lester B. Pearson International Airport",
        "city": "Toronto",
        "country": "CA"
      },
      {
        "iata": "YZD",
        "name": "Downsview Airport",
        "city": "Toronto",
        "country": "CA"
      },
      {
        "iata": "YZE",
        "name": "Gore Bay Manitoulin Airport",
        "city": "Gore Bay",
        "country": "CA"
      },
      {
        "iata": "YZF",
        "name": "Yellowknife Airport",
        "city": "Yellowknife",
        "country": "CA"
      },
      {
        "iata": "YZG",
        "name": "Salluit Airport",
        "city": "Salluit",
        "country": "CA"
      },
      {
        "iata": "YZH",
        "name": "Slave Lake Airport",
        "city": "Slave Lake",
        "country": "CA"
      },
      {
        "iata": "YZP",
        "name": "Sandspit Airport",
        "city": "Sandspit",
        "country": "CA"
      },
      {
        "iata": "YZR",
        "name": "Chris Hadfield Airport",
        "city": "Sarnia",
        "country": "CA"
      },
      {
        "iata": "YZS",
        "name": "Coral Harbour Airport",
        "city": "Coral Harbour",
        "country": "CA"
      },
      {
        "iata": "YZT",
        "name": "Port Hardy Airport",
        "city": "Port Hardy",
        "country": "CA"
      },
      {
        "iata": "YZU",
        "name": "Whitecourt Airport",
        "city": "Whitecourt",
        "country": "CA"
      },
      {
        "iata": "YZV",
        "name": "Sept-Iles Airport",
        "city": "Sept-Iles",
        "country": "CA"
      },
      {
        "iata": "YZW",
        "name": "Teslin Airport",
        "city": "Teslin",
        "country": "CA"
      },
      {
        "iata": "YZX",
        "name": "CFB Greenwood",
        "city": "Greenwood",
        "country": "CA"
      },
      {
        "iata": "YZY",
        "name": "Mackenzie Airport",
        "city": "Mackenzie",
        "country": "CA"
      },
      {
        "iata": "ZAC",
        "name": "York Landing Airport",
        "city": "York Landing",
        "country": "CA"
      },
      {
        "iata": "YSN",
        "name": "Salmon Arm Airport",
        "city": "Salmon Arm",
        "country": "CA"
      },
      {
        "iata": "YDT",
        "name": "Burlington Executive",
        "city": "Burlington",
        "country": "CA"
      },
      {
        "iata": "ZBD",
        "name": "Vancouver / Boundary Bay Airport",
        "city": "Boundary Bay",
        "country": "CA"
      },
      {
        "iata": "ILF",
        "name": "Ilford Airport",
        "city": "Ilford",
        "country": "CA"
      },
      {
        "iata": "ZBF",
        "name": "Bathurst Airport",
        "city": "Bathurst",
        "country": "CA"
      },
      {
        "iata": "ZBM",
        "name": "Bromont (Roland Desourdy) Airport",
        "city": "Bromont",
        "country": "CA"
      },
      {
        "iata": "ZEE",
        "name": "Kelsey Airport",
        "city": "Kelsey",
        "country": "CA"
      },
      {
        "iata": "ZEM",
        "name": "Eastmain River Airport",
        "city": "Eastmain River",
        "country": "CA"
      },
      {
        "iata": "ZFA",
        "name": "Faro Airport",
        "city": "Faro",
        "country": "CA"
      },
      {
        "iata": "ZFD",
        "name": "Fond-Du-Lac Airport",
        "city": "Fond-Du-Lac",
        "country": "CA"
      },
      {
        "iata": "ZFG",
        "name": "Pukatawagan Airport",
        "city": "Pukatawagan",
        "country": "CA"
      },
      {
        "iata": "ZFM",
        "name": "Fort Mcpherson Airport",
        "city": "Fort Mcpherson",
        "country": "CA"
      },
      {
        "iata": "ZFN",
        "name": "Tulita Airport",
        "city": "Tulita",
        "country": "CA"
      },
      {
        "iata": "ZGF",
        "name": "Grand Forks Airport",
        "city": "Grand Forks",
        "country": "CA"
      },
      {
        "iata": "ZGI",
        "name": "Gods River Airport",
        "city": "Gods River",
        "country": "CA"
      },
      {
        "iata": "ZGR",
        "name": "Little Grand Rapids Airport",
        "city": "Little Grand Rapids",
        "country": "CA"
      },
      {
        "iata": "ZJG",
        "name": "Jenpeg Airport",
        "city": "Jenpeg",
        "country": "CA"
      },
      {
        "iata": "ZJN",
        "name": "Swan River Airport",
        "city": "Swan River",
        "country": "CA"
      },
      {
        "iata": "ZKE",
        "name": "Kashechewan Airport",
        "city": "Kashechewan",
        "country": "CA"
      },
      {
        "iata": "YTD",
        "name": "Thicket Portage Airport",
        "city": "Thicket Portage",
        "country": "CA"
      },
      {
        "iata": "MSA",
        "name": "Muskrat Dam Airport",
        "city": "Muskrat Dam",
        "country": "CA"
      },
      {
        "iata": "ZMH",
        "name": "South Cariboo Region / 108 Mile Airport",
        "city": "108 Mile",
        "country": "CA"
      },
      {
        "iata": "PIW",
        "name": "Pikwitonei Airport",
        "city": "Pikwitonei",
        "country": "CA"
      },
      {
        "iata": "ZMT",
        "name": "Masset Airport",
        "city": "Masset",
        "country": "CA"
      },
      {
        "iata": "ZNG",
        "name": "Poplar River Airport",
        "city": "Poplar River",
        "country": "CA"
      },
      {
        "iata": "ZPB",
        "name": "Sachigo Lake Airport",
        "city": "Sachigo Lake",
        "country": "CA"
      },
      {
        "iata": "ZPO",
        "name": "Pinehouse Lake Airport",
        "city": "Pinehouse Lake",
        "country": "CA"
      },
      {
        "iata": "ZRJ",
        "name": "Round Lake (Weagamow Lake) Airport",
        "city": "Round Lake",
        "country": "CA"
      },
      {
        "iata": "ZSJ",
        "name": "Sandy Lake Airport",
        "city": "Sandy Lake",
        "country": "CA"
      },
      {
        "iata": "ZSN",
        "name": "South Indian Lake Airport",
        "city": "South Indian Lake",
        "country": "CA"
      },
      {
        "iata": "ZST",
        "name": "Stewart Airport",
        "city": "Stewart",
        "country": "CA"
      },
      {
        "iata": "ZTM",
        "name": "Shamattawa Airport",
        "city": "Shamattawa",
        "country": "CA"
      },
      {
        "iata": "ZUC",
        "name": "Ignace Municipal Airport",
        "city": "Ignace",
        "country": "CA"
      },
      {
        "iata": "ZUM",
        "name": "Churchill Falls Airport",
        "city": "Churchill Falls",
        "country": "CA"
      },
      {
        "iata": "ZWH",
        "name": "Lac Brochet Airport",
        "city": "Lac Brochet",
        "country": "CA"
      },
      {
        "iata": "ZWL",
        "name": "Wollaston Lake Airport",
        "city": "Wollaston Lake",
        "country": "CA"
      },
      {
        "iata": "QLD",
        "name": "Blida Airport",
        "city": "",
        "country": "DZ"
      },
      {
        "iata": "BUJ",
        "name": "Bou Saada Airport",
        "city": "",
        "country": "DZ"
      },
      {
        "iata": "BJA",
        "name": "Soummam Airport",
        "city": "Bejaia",
        "country": "DZ"
      },
      {
        "iata": "ALG",
        "name": "Houari Boumediene Airport",
        "city": "Algiers",
        "country": "DZ"
      },
      {
        "iata": "DJG",
        "name": "Djanet Inedbirene Airport",
        "city": "Djanet",
        "country": "DZ"
      },
      {
        "iata": "QFD",
        "name": "Boufarik Airport",
        "city": "",
        "country": "DZ"
      },
      {
        "iata": "VVZ",
        "name": "Illizi Takhamalt Airport",
        "city": "Illizi",
        "country": "DZ"
      },
      {
        "iata": "QSF",
        "name": "Ain Arnat Airport",
        "city": "Setif",
        "country": "DZ"
      },
      {
        "iata": "TMR",
        "name": "Aguenar – Hadj Bey Akhamok Airport",
        "city": "Tamanrasset",
        "country": "DZ"
      },
      {
        "iata": "GJL",
        "name": "Jijel Ferhat Abbas Airport",
        "city": "Jijel",
        "country": "DZ"
      },
      {
        "iata": "MZW",
        "name": "Mecheria Airport",
        "city": "Mecheria",
        "country": "DZ"
      },
      {
        "iata": "QZN",
        "name": "Relizane Airport",
        "city": "",
        "country": "DZ"
      },
      {
        "iata": "AAE",
        "name": "Annaba Airport",
        "city": "Annabah",
        "country": "DZ"
      },
      {
        "iata": "CZL",
        "name": "Mohamed Boudiaf International Airport",
        "city": "Constantine",
        "country": "DZ"
      },
      {
        "iata": "TEE",
        "name": "Cheikh Larbi Tebessi Airport",
        "city": "Tebessi",
        "country": "DZ"
      },
      {
        "iata": "BLJ",
        "name": "Batna Airport",
        "city": "Batna",
        "country": "DZ"
      },
      {
        "iata": "HRM",
        "name": "Hassi R'Mel Airport",
        "city": "",
        "country": "DZ"
      },
      {
        "iata": "QDJ",
        "name": "Tsletsi Airport",
        "city": "",
        "country": "DZ"
      },
      {
        "iata": "TID",
        "name": "Bou Chekif Airport",
        "city": "Tiaret",
        "country": "DZ"
      },
      {
        "iata": "TIN",
        "name": "Tindouf Airport",
        "city": "Tindouf",
        "country": "DZ"
      },
      {
        "iata": "QAS",
        "name": "Ech Cheliff Airport",
        "city": "",
        "country": "DZ"
      },
      {
        "iata": "TAF",
        "name": "Tafaraoui Airport",
        "city": "",
        "country": "DZ"
      },
      {
        "iata": "TLM",
        "name": "Zenata – Messali El Hadj Airport",
        "city": "Tlemcen",
        "country": "DZ"
      },
      {
        "iata": "ORN",
        "name": "Es Senia Airport",
        "city": "Oran",
        "country": "DZ"
      },
      {
        "iata": "CBH",
        "name": "Bechar Boudghene Ben Ali Lotfi Airport",
        "city": "Bechar",
        "country": "DZ"
      },
      {
        "iata": "BFW",
        "name": "Sidi Bel Abbes Airport",
        "city": "",
        "country": "DZ"
      },
      {
        "iata": "MUW",
        "name": "Ghriss Airport",
        "city": "",
        "country": "DZ"
      },
      {
        "iata": "EBH",
        "name": "El Bayadh Airport",
        "city": "El Bayadh",
        "country": "DZ"
      },
      {
        "iata": "INF",
        "name": "In Guezzam Airport",
        "city": "In Guezzam",
        "country": "DZ"
      },
      {
        "iata": "BMW",
        "name": "Bordj Badji Mokhtar Airport",
        "city": "Bordj Badji Mokhtar",
        "country": "DZ"
      },
      {
        "iata": "AZR",
        "name": "Touat Cheikh Sidi Mohamed Belkebir Airport",
        "city": "",
        "country": "DZ"
      },
      {
        "iata": "BSK",
        "name": "Biskra Airport",
        "city": "Biskra",
        "country": "DZ"
      },
      {
        "iata": "ELG",
        "name": "El Golea Airport",
        "city": "",
        "country": "DZ"
      },
      {
        "iata": "GHA",
        "name": "Noumerat - Moufdi Zakaria Airport",
        "city": "Ghardaia",
        "country": "DZ"
      },
      {
        "iata": "HME",
        "name": "Oued Irara Airport",
        "city": "Hassi Messaoud",
        "country": "DZ"
      },
      {
        "iata": "INZ",
        "name": "In Salah Airport",
        "city": "In Salah",
        "country": "DZ"
      },
      {
        "iata": "TGR",
        "name": "Touggourt Sidi Madhi Airport",
        "city": "Touggourt",
        "country": "DZ"
      },
      {
        "iata": "LOO",
        "name": "Laghouat Airport",
        "city": "Laghouat",
        "country": "DZ"
      },
      {
        "iata": "ELU",
        "name": "Guemar Airport",
        "city": "Guemar",
        "country": "DZ"
      },
      {
        "iata": "TMX",
        "name": "Timimoun Airport",
        "city": "Timimoun",
        "country": "DZ"
      },
      {
        "iata": "OGX",
        "name": "Ain el Beida Airport",
        "city": "Ouargla",
        "country": "DZ"
      },
      {
        "iata": "IAM",
        "name": "In Amenas Airport",
        "city": "Amenas",
        "country": "DZ"
      },
      {
        "iata": "COO",
        "name": "Cadjehoun Airport",
        "city": "Cotonou",
        "country": "BJ"
      },
      {
        "iata": "DJA",
        "name": "Djougou Airport",
        "city": "Djougou",
        "country": "BJ"
      },
      {
        "iata": "KDC",
        "name": "Kandi Airport",
        "city": "Kandi",
        "country": "BJ"
      },
      {
        "iata": "NAE",
        "name": "Natitingou Airport",
        "city": "Natitingou",
        "country": "BJ"
      },
      {
        "iata": "PKO",
        "name": "Parakou Airport",
        "city": "Parakou",
        "country": "BJ"
      },
      {
        "iata": "SVF",
        "name": "Save Airport",
        "city": "Save",
        "country": "BJ"
      },
      {
        "iata": "XKY",
        "name": "Kaya Airport",
        "city": "Kaya",
        "country": "BF"
      },
      {
        "iata": "OUG",
        "name": "Ouahigouya Airport",
        "city": "Ouahigouya",
        "country": "BF"
      },
      {
        "iata": "XDJ",
        "name": "Djibo Airport",
        "city": "Djibo",
        "country": "BF"
      },
      {
        "iata": "XLU",
        "name": "Leo Airport",
        "city": "Leo",
        "country": "BF"
      },
      {
        "iata": "PUP",
        "name": "Po Airport",
        "city": "Po",
        "country": "BF"
      },
      {
        "iata": "XBO",
        "name": "Boulsa Airport",
        "city": "Boulsa",
        "country": "BF"
      },
      {
        "iata": "XBG",
        "name": "Bogande Airport",
        "city": "Bogande",
        "country": "BF"
      },
      {
        "iata": "DIP",
        "name": "Diapaga Airport",
        "city": "Diapaga",
        "country": "BF"
      },
      {
        "iata": "DOR",
        "name": "Dori Airport",
        "city": "Dori",
        "country": "BF"
      },
      {
        "iata": "FNG",
        "name": "Fada N'gourma Airport",
        "city": "Fada N'gourma",
        "country": "BF"
      },
      {
        "iata": "XGG",
        "name": "Gorom-Gorom Airport",
        "city": "Gorom-Gorom",
        "country": "BF"
      },
      {
        "iata": "XKA",
        "name": "Kantchari Airport",
        "city": "Kantchari",
        "country": "BF"
      },
      {
        "iata": "TMQ",
        "name": "Tambao Airport",
        "city": "Tambao",
        "country": "BF"
      },
      {
        "iata": "XPA",
        "name": "Pama Airport",
        "city": "Pama",
        "country": "BF"
      },
      {
        "iata": "ARL",
        "name": "Arly Airport",
        "city": "Arly",
        "country": "BF"
      },
      {
        "iata": "XSE",
        "name": "Sebba Airport",
        "city": "Sebba",
        "country": "BF"
      },
      {
        "iata": "TEG",
        "name": "Tenkodogo Airport",
        "city": "Tenkodogo",
        "country": "BF"
      },
      {
        "iata": "XZA",
        "name": "Zabre Airport",
        "city": "Zabre",
        "country": "BF"
      },
      {
        "iata": "OUA",
        "name": "Ouagadougou Airport",
        "city": "Ouagadougou",
        "country": "BF"
      },
      {
        "iata": "BNR",
        "name": "Banfora Airport",
        "city": "Banfora",
        "country": "BF"
      },
      {
        "iata": "DGU",
        "name": "Dedougou Airport",
        "city": "Dedougou",
        "country": "BF"
      },
      {
        "iata": "XGA",
        "name": "Gaoua Airport",
        "city": "Gaoua",
        "country": "BF"
      },
      {
        "iata": "XNU",
        "name": "Nouna Airport",
        "city": "Nouna",
        "country": "BF"
      },
      {
        "iata": "BOY",
        "name": "Bobo Dioulasso Airport",
        "city": "Bobo Dioulasso",
        "country": "BF"
      },
      {
        "iata": "TUQ",
        "name": "Tougan Airport",
        "city": "Tougan",
        "country": "BF"
      },
      {
        "iata": "XDE",
        "name": "Diebougou Airport",
        "city": "Diebougou",
        "country": "BF"
      },
      {
        "iata": "XAR",
        "name": "Aribinda Airport",
        "city": "Aribinda",
        "country": "BF"
      },
      {
        "iata": "ACC",
        "name": "Kotoka International Airport",
        "city": "Accra",
        "country": "GH"
      },
      {
        "iata": "TML",
        "name": "Tamale Airport",
        "city": "Tamale",
        "country": "GH"
      },
      {
        "iata": "KMS",
        "name": "Kumasi Airport",
        "city": "Kumasi",
        "country": "GH"
      },
      {
        "iata": "NYI",
        "name": "Sunyani Airport",
        "city": "Sunyani",
        "country": "GH"
      },
      {
        "iata": "TKD",
        "name": "Takoradi Airport",
        "city": "Sekondi-Takoradi",
        "country": "GH"
      },
      {
        "iata": "ABJ",
        "name": "Port Bouet Airport",
        "city": "Abidjan",
        "country": "CI"
      },
      {
        "iata": "OGO",
        "name": "Abengourou Airport",
        "city": "Abengourou",
        "country": "CI"
      },
      {
        "iata": "BXI",
        "name": "Boundiali Airport",
        "city": "Boundiali",
        "country": "CI"
      },
      {
        "iata": "BYK",
        "name": "Bouake Airport",
        "city": "",
        "country": "CI"
      },
      {
        "iata": "BQO",
        "name": "Bouna Airport",
        "city": "Bouna",
        "country": "CI"
      },
      {
        "iata": "BDK",
        "name": "Soko Airport",
        "city": "Bondoukou",
        "country": "CI"
      },
      {
        "iata": "DIM",
        "name": "Dimbokro Airport",
        "city": "Dimbokro",
        "country": "CI"
      },
      {
        "iata": "DJO",
        "name": "Daloa Airport",
        "city": "",
        "country": "CI"
      },
      {
        "iata": "FEK",
        "name": "Ferkessedougou Airport",
        "city": "Ferkessedougou",
        "country": "CI"
      },
      {
        "iata": "GGN",
        "name": "Gagnoa Airport",
        "city": "Gagnoa",
        "country": "CI"
      },
      {
        "iata": "GGO",
        "name": "Guiglo Airport",
        "city": "Guiglo",
        "country": "CI"
      },
      {
        "iata": "BBV",
        "name": "Nero-Mer Airport",
        "city": "Grand-Bereby",
        "country": "CI"
      },
      {
        "iata": "HGO",
        "name": "Korhogo Airport",
        "city": "",
        "country": "CI"
      },
      {
        "iata": "MJC",
        "name": "Man Airport",
        "city": "",
        "country": "CI"
      },
      {
        "iata": "KEO",
        "name": "Odienne Airport",
        "city": "Odienne",
        "country": "CI"
      },
      {
        "iata": "OFI",
        "name": "Ouango Fitini Airport",
        "city": "Ouango Fitini",
        "country": "CI"
      },
      {
        "iata": "SEO",
        "name": "Seguela Airport",
        "city": "Seguela",
        "country": "CI"
      },
      {
        "iata": "SPY",
        "name": "San Pedro Airport",
        "city": "",
        "country": "CI"
      },
      {
        "iata": "ZSS",
        "name": "Sassandra Airport",
        "city": "Sassandra",
        "country": "CI"
      },
      {
        "iata": "TXU",
        "name": "Tabou Airport",
        "city": "Tabou",
        "country": "CI"
      },
      {
        "iata": "ASK",
        "name": "Yamoussoukro Airport",
        "city": "Yamoussoukro",
        "country": "CI"
      },
      {
        "iata": "ABV",
        "name": "Nnamdi Azikiwe International Airport",
        "city": "Abuja",
        "country": "NG"
      },
      {
        "iata": "AKR",
        "name": "Akure Airport",
        "city": "Akure",
        "country": "NG"
      },
      {
        "iata": "ABB",
        "name": "Asaba International Airport",
        "city": "Asaba",
        "country": "NG"
      },
      {
        "iata": "BNI",
        "name": "Benin Airport",
        "city": "Benin",
        "country": "NG"
      },
      {
        "iata": "CBQ",
        "name": "Margaret Ekpo International Airport",
        "city": "Calabar",
        "country": "NG"
      },
      {
        "iata": "ENU",
        "name": "Akanu Ibiam International Airport",
        "city": "Enegu",
        "country": "NG"
      },
      {
        "iata": "GMO",
        "name": "Gombe Lawanti International Airport",
        "city": "Gombe",
        "country": "NG"
      },
      {
        "iata": "QUS",
        "name": "Gusau Airport",
        "city": "Gusau",
        "country": "NG"
      },
      {
        "iata": "IBA",
        "name": "Ibadan Airport",
        "city": "Ibadan",
        "country": "NG"
      },
      {
        "iata": "ILR",
        "name": "Ilorin International Airport",
        "city": "Ilorin",
        "country": "NG"
      },
      {
        "iata": "QOW",
        "name": "Sam Mbakwe International Airport",
        "city": "Owerri",
        "country": "NG"
      },
      {
        "iata": "JOS",
        "name": "Yakubu Gowon Airport",
        "city": "Jos",
        "country": "NG"
      },
      {
        "iata": "KAD",
        "name": "Kaduna Airport",
        "city": "Kaduna",
        "country": "NG"
      },
      {
        "iata": "KAN",
        "name": "Mallam Aminu International Airport",
        "city": "Kano",
        "country": "NG"
      },
      {
        "iata": "MIU",
        "name": "Maiduguri International Airport",
        "city": "Maiduguri",
        "country": "NG"
      },
      {
        "iata": "MDI",
        "name": "Makurdi Airport",
        "city": "Makurdi",
        "country": "NG"
      },
      {
        "iata": "LOS",
        "name": "Murtala Muhammed International Airport",
        "city": "Lagos",
        "country": "NG"
      },
      {
        "iata": "MXJ",
        "name": "Minna Airport",
        "city": "Minna",
        "country": "NG"
      },
      {
        "iata": "PHC",
        "name": "Port Harcourt International Airport",
        "city": "Port Harcourt",
        "country": "NG"
      },
      {
        "iata": "SKO",
        "name": "Sadiq Abubakar III International Airport",
        "city": "Sokoto",
        "country": "NG"
      },
      {
        "iata": "NBE",
        "name": "Enfidha Zine El Abidine Ben Ali International Airport",
        "city": "Enfidha",
        "country": "TN"
      },
      {
        "iata": "YOL",
        "name": "Yola Airport",
        "city": "Yola",
        "country": "NG"
      },
      {
        "iata": "ZAR",
        "name": "Zaria Airport",
        "city": "Zaria",
        "country": "NG"
      },
      {
        "iata": "MFQ",
        "name": "Maradi Airport",
        "city": "Maradi",
        "country": "NE"
      },
      {
        "iata": "NIM",
        "name": "Diori Hamani International Airport",
        "city": "Niamey",
        "country": "NE"
      },
      {
        "iata": "THZ",
        "name": "Tahoua Airport",
        "city": "Tahoua",
        "country": "NE"
      },
      {
        "iata": "AJY",
        "name": "Mano Dayak International Airport",
        "city": "Agadez",
        "country": "NE"
      },
      {
        "iata": "ZND",
        "name": "Zinder Airport",
        "city": "Zinder",
        "country": "NE"
      },
      {
        "iata": "TBJ",
        "name": "Tabarka 7 Novembre Airport",
        "city": "Tabarka",
        "country": "TN"
      },
      {
        "iata": "MIR",
        "name": "Monastir Habib Bourguiba International Airport",
        "city": "Monastir",
        "country": "TN"
      },
      {
        "iata": "TUN",
        "name": "Tunis Carthage International Airport",
        "city": "Tunis",
        "country": "TN"
      },
      {
        "iata": "OIZ",
        "name": "Sidi Ahmed Air Base",
        "city": "Sidi Ahmed",
        "country": "TN"
      },
      {
        "iata": "GAF",
        "name": "Gafsa Ksar International Airport",
        "city": "Gafsa",
        "country": "TN"
      },
      {
        "iata": "GAE",
        "name": "Gabes Matmata International Airport",
        "city": "Gabes",
        "country": "TN"
      },
      {
        "iata": "DJE",
        "name": "Djerba Zarzis International Airport",
        "city": "Djerba",
        "country": "TN"
      },
      {
        "iata": "EBM",
        "name": "El Borma Airport",
        "city": "El Borma",
        "country": "TN"
      },
      {
        "iata": "SFA",
        "name": "Sfax Thyna International Airport",
        "city": "Sfax",
        "country": "TN"
      },
      {
        "iata": "TOE",
        "name": "Tozeur Nefta International Airport",
        "city": "Tozeur",
        "country": "TN"
      },
      {
        "iata": "LRL",
        "name": "Niamtougou International Airport",
        "city": "Niamtougou",
        "country": "TG"
      },
      {
        "iata": "LFW",
        "name": "Lome-Tokoin Airport",
        "city": "Lome",
        "country": "TG"
      },
      {
        "iata": "ANR",
        "name": "Antwerp International Airport (Deurne)",
        "city": "Antwerp",
        "country": "BE"
      },
      {
        "iata": "BRU",
        "name": "Brussels Airport",
        "city": "Brussels",
        "country": "BE"
      },
      {
        "iata": "CRL",
        "name": "Brussels South Charleroi Airport",
        "city": "Brussels",
        "country": "BE"
      },
      {
        "iata": "KJK",
        "name": "Wevelgem Airport",
        "city": "Wevelgem",
        "country": "BE"
      },
      {
        "iata": "LGG",
        "name": "Liege Airport",
        "city": "Liege",
        "country": "BE"
      },
      {
        "iata": "QNM",
        "name": "Suarlee Airport",
        "city": "Namur",
        "country": "BE"
      },
      {
        "iata": "OST",
        "name": "Ostend-Bruges International Airport",
        "city": "Ostend",
        "country": "BE"
      },
      {
        "iata": "QHA",
        "name": "Hasselt Airport",
        "city": "Hasselt",
        "country": "BE"
      },
      {
        "iata": "OBL",
        "name": "Oostmalle Air Base",
        "city": "Zoersel",
        "country": "BE"
      },
      {
        "iata": "AOC",
        "name": "Altenburg-Nobitz Airport",
        "city": "Altenburg",
        "country": "DE"
      },
      {
        "iata": "HDF",
        "name": "Heringsdorf Airport",
        "city": "Heringsdorf",
        "country": "DE"
      },
      {
        "iata": "REB",
        "name": "Rechlin-Larz Airport",
        "city": "Larz",
        "country": "DE"
      },
      {
        "iata": "BER",
        "name": "Berlin Brandenburg Airport",
        "city": "Berlin",
        "country": "DE"
      },
      {
        "iata": "CSO",
        "name": "Cochstedt Airport",
        "city": "Magdeburg",
        "country": "DE"
      },
      {
        "iata": "BBH",
        "name": "Barth Airport",
        "city": "",
        "country": "DE"
      },
      {
        "iata": "ZMG",
        "name": "Magdeburg Airport",
        "city": "Magdeburg",
        "country": "DE"
      },
      {
        "iata": "CBU",
        "name": "Cottbus-Drewitz Airport",
        "city": "Cottbus",
        "country": "DE"
      },
      {
        "iata": "GTI",
        "name": "Rugen Airport",
        "city": "Rugen",
        "country": "DE"
      },
      {
        "iata": "PEF",
        "name": "Peenemunde Airport",
        "city": "Peenemunde",
        "country": "DE"
      },
      {
        "iata": "DRS",
        "name": "Dresden Airport",
        "city": "Dresden",
        "country": "DE"
      },
      {
        "iata": "ERF",
        "name": "Erfurt Airport",
        "city": "Erfurt",
        "country": "DE"
      },
      {
        "iata": "FRA",
        "name": "Frankfurt am Main International Airport",
        "city": "Frankfurt-am-Main",
        "country": "DE"
      },
      {
        "iata": "FMO",
        "name": "Munster Osnabruck Airport",
        "city": "Munster",
        "country": "DE"
      },
      {
        "iata": "HAM",
        "name": "Hamburg Airport",
        "city": "Hamburg",
        "country": "DE"
      },
      {
        "iata": "THF",
        "name": "Berlin Tempelhof Airport",
        "city": "Berlin",
        "country": "DE"
      },
      {
        "iata": "CGN",
        "name": "Cologne Bonn Airport",
        "city": "Cologne",
        "country": "DE"
      },
      {
        "iata": "DUS",
        "name": "Dusseldorf International Airport",
        "city": "Dusseldorf",
        "country": "DE"
      },
      {
        "iata": "MUC",
        "name": "Munich International Airport",
        "city": "Munich",
        "country": "DE"
      },
      {
        "iata": "NUE",
        "name": "Nuremberg Airport",
        "city": "Nuremberg",
        "country": "DE"
      },
      {
        "iata": "LEJ",
        "name": "Leipzig Halle Airport",
        "city": "Leipzig",
        "country": "DE"
      },
      {
        "iata": "SCN",
        "name": "Saarbrucken Airport",
        "city": "Saarbrucken",
        "country": "DE"
      },
      {
        "iata": "STR",
        "name": "Stuttgart Airport",
        "city": "Stuttgart",
        "country": "DE"
      },
      {
        "iata": "TXL",
        "name": "Berlin-Tegel International Airport",
        "city": "Berlin",
        "country": "DE"
      },
      {
        "iata": "HAJ",
        "name": "Hannover Airport",
        "city": "Hannover",
        "country": "DE"
      },
      {
        "iata": "BRE",
        "name": "Bremen Airport",
        "city": "Bremen",
        "country": "DE"
      },
      {
        "iata": "QEF",
        "name": "Frankfurt-Egelsbach Airport",
        "city": "Egelsbach",
        "country": "DE"
      },
      {
        "iata": "HHN",
        "name": "Frankfurt-Hahn Airport",
        "city": "Hahn",
        "country": "DE"
      },
      {
        "iata": "MHG",
        "name": "Mannheim-City Airport",
        "city": "Mannheim",
        "country": "DE"
      },
      {
        "iata": "QMZ",
        "name": "Mainz-Finthen Airport",
        "city": "Mainz",
        "country": "DE"
      },
      {
        "iata": "SGE",
        "name": "Siegerland Airport",
        "city": "",
        "country": "DE"
      },
      {
        "iata": "XFW",
        "name": "Hamburg-Finkenwerder Airport",
        "city": "Hamburg",
        "country": "DE"
      },
      {
        "iata": "KEL",
        "name": "Kiel-Holtenau Airport",
        "city": "Kiel",
        "country": "DE"
      },
      {
        "iata": "LBC",
        "name": "Lubeck Blankensee Airport",
        "city": "Lubeck",
        "country": "DE"
      },
      {
        "iata": "EUM",
        "name": "Neumunster Airport",
        "city": "Neumunster",
        "country": "DE"
      },
      {
        "iata": "FMM",
        "name": "Memmingen Allgau Airport",
        "city": "Memmingen",
        "country": "DE"
      },
      {
        "iata": "AAH",
        "name": "Aachen-Merzbruck Airport",
        "city": "Aachen",
        "country": "DE"
      },
      {
        "iata": "BNJ",
        "name": "Bonn-Hangelar Airport",
        "city": "Bonn",
        "country": "DE"
      },
      {
        "iata": "ESS",
        "name": "Essen Mulheim Airport",
        "city": "",
        "country": "DE"
      },
      {
        "iata": "BFE",
        "name": "Bielefeld Airport",
        "city": "Bielefeld",
        "country": "DE"
      },
      {
        "iata": "ZOJ",
        "name": "Marl-Loemuhle Airport",
        "city": "Marl",
        "country": "DE"
      },
      {
        "iata": "MGL",
        "name": "Monchengladbach Airport",
        "city": "Monchengladbach",
        "country": "DE"
      },
      {
        "iata": "PAD",
        "name": "Paderborn Lippstadt Airport",
        "city": "Paderborn",
        "country": "DE"
      },
      {
        "iata": "NRN",
        "name": "Niederrhein Airport",
        "city": "Weeze",
        "country": "DE"
      },
      {
        "iata": "DTM",
        "name": "Dortmund Airport",
        "city": "Dortmund",
        "country": "DE"
      },
      {
        "iata": "AGB",
        "name": "Augsburg Airport",
        "city": "Augsburg",
        "country": "DE"
      },
      {
        "iata": "OBF",
        "name": "Oberpfaffenhofen Airport",
        "city": "",
        "country": "DE"
      },
      {
        "iata": "RBM",
        "name": "Straubing Airport",
        "city": "Straubing",
        "country": "DE"
      },
      {
        "iata": "FDH",
        "name": "Friedrichshafen Airport",
        "city": "Friedrichshafen",
        "country": "DE"
      },
      {
        "iata": "FRF",
        "name": "Oschersleben Airport",
        "city": "Oschersleben",
        "country": "DE"
      },
      {
        "iata": "SZW",
        "name": "Schwerin Parchim Airport",
        "city": "",
        "country": "DE"
      },
      {
        "iata": "BYU",
        "name": "Bayreuth Airport",
        "city": "Bayreuth",
        "country": "DE"
      },
      {
        "iata": "QOB",
        "name": "Ansbach-Petersdorf Airport",
        "city": "Ansbach",
        "country": "DE"
      },
      {
        "iata": "HOQ",
        "name": "Hof-Plauen Airport",
        "city": "Hof",
        "country": "DE"
      },
      {
        "iata": "BBJ",
        "name": "Bitburg Airport",
        "city": "Bitburg",
        "country": "DE"
      },
      {
        "iata": "ZQW",
        "name": "Zweibrucken Airport",
        "city": "Zweibrucken",
        "country": "DE"
      },
      {
        "iata": "FKB",
        "name": "Karlsruhe Baden-Baden Airport",
        "city": "Baden-Baden",
        "country": "DE"
      },
      {
        "iata": "ZQL",
        "name": "Donaueschingen-Villingen Airport",
        "city": "Donaueschingen",
        "country": "DE"
      },
      {
        "iata": "LHA",
        "name": "Lahr Airport",
        "city": "",
        "country": "DE"
      },
      {
        "iata": "BWE",
        "name": "Braunschweig Wolfsburg Airport",
        "city": "",
        "country": "DE"
      },
      {
        "iata": "KSF",
        "name": "Kassel-Calden Airport",
        "city": "Kassel",
        "country": "DE"
      },
      {
        "iata": "BRV",
        "name": "Bremerhaven Airport",
        "city": "Bremerhaven",
        "country": "DE"
      },
      {
        "iata": "XLW",
        "name": "Lemwerder Airport",
        "city": "Lemwerder",
        "country": "DE"
      },
      {
        "iata": "EME",
        "name": "Emden Airport",
        "city": "Emden",
        "country": "DE"
      },
      {
        "iata": "AGE",
        "name": "Wangerooge Airport",
        "city": "Wangerooge",
        "country": "DE"
      },
      {
        "iata": "WVN",
        "name": "Wilhelmshaven-Mariensiel Airport",
        "city": "Wilhelmshaven",
        "country": "DE"
      },
      {
        "iata": "JUI",
        "name": "Juist Airport",
        "city": "Juist",
        "country": "DE"
      },
      {
        "iata": "LGO",
        "name": "Langeoog Airport",
        "city": "Langeoog",
        "country": "DE"
      },
      {
        "iata": "ZOW",
        "name": "Nordhorn-Lingen Airport",
        "city": "Klausheide",
        "country": "DE"
      },
      {
        "iata": "BMK",
        "name": "Borkum Airport",
        "city": "Borkum",
        "country": "DE"
      },
      {
        "iata": "NOD",
        "name": "Norden-Norddeich Airport",
        "city": "Norddeich",
        "country": "DE"
      },
      {
        "iata": "VAC",
        "name": "Varrelbusch Airport",
        "city": "Cloppenburg",
        "country": "DE"
      },
      {
        "iata": "NRD",
        "name": "Norderney Airport",
        "city": "Norderney",
        "country": "DE"
      },
      {
        "iata": "BMR",
        "name": "Baltrum Airport",
        "city": "Baltrum",
        "country": "DE"
      },
      {
        "iata": "HEI",
        "name": "Heide-Busum Airport",
        "city": "Busum",
        "country": "DE"
      },
      {
        "iata": "FLF",
        "name": "Flensburg-Schaferhaus Airport",
        "city": "Flensburg",
        "country": "DE"
      },
      {
        "iata": "HGL",
        "name": "Helgoland-Dune Airport",
        "city": "Helgoland",
        "country": "DE"
      },
      {
        "iata": "PSH",
        "name": "St. Peter-Ording Airport",
        "city": "Sankt Peter-Ording",
        "country": "DE"
      },
      {
        "iata": "GWT",
        "name": "Westerland Sylt Airport",
        "city": "Westerland",
        "country": "DE"
      },
      {
        "iata": "OHR",
        "name": "Wyk auf Fohr Airport",
        "city": "Wyk auf Fohr",
        "country": "DE"
      },
      {
        "iata": "KDL",
        "name": "Kardla Airport",
        "city": "Kardla",
        "country": "EE"
      },
      {
        "iata": "URE",
        "name": "Kuressaare Airport",
        "city": "Kuressaare",
        "country": "EE"
      },
      {
        "iata": "EPU",
        "name": "Parnu Airport",
        "city": "Parnu",
        "country": "EE"
      },
      {
        "iata": "TLL",
        "name": "Tallinn Airport",
        "city": "Tallinn",
        "country": "EE"
      },
      {
        "iata": "TAY",
        "name": "Tartu Airport",
        "city": "Tartu",
        "country": "EE"
      },
      {
        "iata": "ENF",
        "name": "Enontekio Airport",
        "city": "Enontekio",
        "country": "FI"
      },
      {
        "iata": "QVE",
        "name": "Forssa Airport",
        "city": "Forssa",
        "country": "FI"
      },
      {
        "iata": "KEV",
        "name": "Halli Airport",
        "city": "Halli / Kuorevesi",
        "country": "FI"
      },
      {
        "iata": "HEM",
        "name": "Helsinki Malmi Airport",
        "city": "Helsinki",
        "country": "FI"
      },
      {
        "iata": "HEL",
        "name": "Helsinki Vantaa Airport",
        "city": "Helsinki",
        "country": "FI"
      },
      {
        "iata": "HYV",
        "name": "Hyvinkaa Airport",
        "city": "",
        "country": "FI"
      },
      {
        "iata": "KTQ",
        "name": "Kitee Airport",
        "city": "",
        "country": "FI"
      },
      {
        "iata": "IVL",
        "name": "Ivalo Airport",
        "city": "Ivalo",
        "country": "FI"
      },
      {
        "iata": "JOE",
        "name": "Joensuu Airport",
        "city": "Joensuu / Liperi",
        "country": "FI"
      },
      {
        "iata": "JYV",
        "name": "Jyvaskyla Airport",
        "city": "Jyvaskylan Maalaiskunta",
        "country": "FI"
      },
      {
        "iata": "KAU",
        "name": "Kauhava Airport",
        "city": "Kauhava",
        "country": "FI"
      },
      {
        "iata": "KEM",
        "name": "Kemi-Tornio Airport",
        "city": "Kemi / Tornio",
        "country": "FI"
      },
      {
        "iata": "KAJ",
        "name": "Kajaani Airport",
        "city": "Kajaani",
        "country": "FI"
      },
      {
        "iata": "KHJ",
        "name": "Kauhajoki Airport",
        "city": "",
        "country": "FI"
      },
      {
        "iata": "KOK",
        "name": "Kruunupyy Airport",
        "city": "Kokkola / Kruunupyy",
        "country": "FI"
      },
      {
        "iata": "KAO",
        "name": "Kuusamo Airport",
        "city": "Kuusamo",
        "country": "FI"
      },
      {
        "iata": "KTT",
        "name": "Kittila Airport",
        "city": "Kittila",
        "country": "FI"
      },
      {
        "iata": "KUO",
        "name": "Kuopio Airport",
        "city": "Kuopio / Siilinjarvi",
        "country": "FI"
      },
      {
        "iata": "QLF",
        "name": "Lahti Vesivehmaa Airport",
        "city": "",
        "country": "FI"
      },
      {
        "iata": "LPP",
        "name": "Lappeenranta Airport",
        "city": "Lappeenranta",
        "country": "FI"
      },
      {
        "iata": "MHQ",
        "name": "Mariehamn Airport",
        "city": "",
        "country": "FI"
      },
      {
        "iata": "MIK",
        "name": "Mikkeli Airport",
        "city": "Mikkeli",
        "country": "FI"
      },
      {
        "iata": "OUL",
        "name": "Oulu Airport",
        "city": "Oulu / Oulunsalo",
        "country": "FI"
      },
      {
        "iata": "POR",
        "name": "Pori Airport",
        "city": "Pori",
        "country": "FI"
      },
      {
        "iata": "RVN",
        "name": "Rovaniemi Airport",
        "city": "Rovaniemi",
        "country": "FI"
      },
      {
        "iata": "SVL",
        "name": "Savonlinna Airport",
        "city": "Savonlinna",
        "country": "FI"
      },
      {
        "iata": "SJY",
        "name": "Seinajoki Airport",
        "city": "Seinajoki / Ilmajoki",
        "country": "FI"
      },
      {
        "iata": "SOT",
        "name": "Sodankyla Airport",
        "city": "Sodankyla",
        "country": "FI"
      },
      {
        "iata": "TMP",
        "name": "Tampere-Pirkkala Airport",
        "city": "Tampere / Pirkkala",
        "country": "FI"
      },
      {
        "iata": "TKU",
        "name": "Turku Airport",
        "city": "Turku",
        "country": "FI"
      },
      {
        "iata": "UTI",
        "name": "Utti Air Base",
        "city": "Utti / Valkeala",
        "country": "FI"
      },
      {
        "iata": "VAA",
        "name": "Vaasa Airport",
        "city": "Vaasa",
        "country": "FI"
      },
      {
        "iata": "VRK",
        "name": "Varkaus Airport",
        "city": "Varkaus / Joroinen",
        "country": "FI"
      },
      {
        "iata": "YLI",
        "name": "Ylivieska Airport",
        "city": "",
        "country": "FI"
      },
      {
        "iata": "BFS",
        "name": "Belfast International Airport",
        "city": "Belfast",
        "country": "GB"
      },
      {
        "iata": "ENK",
        "name": "St Angelo Airport",
        "city": "Enniskillen",
        "country": "GB"
      },
      {
        "iata": "BHD",
        "name": "George Best Belfast City Airport",
        "city": "Belfast",
        "country": "GB"
      },
      {
        "iata": "LDY",
        "name": "City of Derry Airport",
        "city": "Derry",
        "country": "GB"
      },
      {
        "iata": "BHX",
        "name": "Birmingham International Airport",
        "city": "Birmingham",
        "country": "GB"
      },
      {
        "iata": "CVT",
        "name": "Coventry Airport",
        "city": "Coventry",
        "country": "GB"
      },
      {
        "iata": "GLO",
        "name": "Gloucestershire Airport",
        "city": "Staverton",
        "country": "GB"
      },
      {
        "iata": "ORM",
        "name": "Sywell Aerodrome",
        "city": "Northampton",
        "country": "GB"
      },
      {
        "iata": "NQT",
        "name": "Nottingham Airport",
        "city": "Nottingham",
        "country": "GB"
      },
      {
        "iata": "MAN",
        "name": "Manchester Airport",
        "city": "Manchester",
        "country": "GB"
      },
      {
        "iata": "DSA",
        "name": "Robin Hood Doncaster Sheffield Airport",
        "city": "Doncaster",
        "country": "GB"
      },
      {
        "iata": "UPV",
        "name": "Upavon Aerodrome",
        "city": "Upavon",
        "country": "GB"
      },
      {
        "iata": "LYE",
        "name": "RAF Lyneham",
        "city": "Lyneham",
        "country": "GB"
      },
      {
        "iata": "DGX",
        "name": "MOD St. Athan",
        "city": "St. Athan",
        "country": "GB"
      },
      {
        "iata": "YEO",
        "name": "RNAS Yeovilton",
        "city": "Yeovil",
        "country": "GB"
      },
      {
        "iata": "CAL",
        "name": "Campbeltown Airport",
        "city": "Campbeltown",
        "country": "GB"
      },
      {
        "iata": "EOI",
        "name": "Eday Airport",
        "city": "Eday",
        "country": "GB"
      },
      {
        "iata": "FIE",
        "name": "Fair Isle Airport",
        "city": "Fair Isle",
        "country": "GB"
      },
      {
        "iata": "WHS",
        "name": "Whalsay Airport",
        "city": "Whalsay",
        "country": "GB"
      },
      {
        "iata": "COL",
        "name": "Coll Airport",
        "city": "Coll Island",
        "country": "GB"
      },
      {
        "iata": "NRL",
        "name": "North Ronaldsay Airport",
        "city": "North Ronaldsay",
        "country": "GB"
      },
      {
        "iata": "OBN",
        "name": "Oban Airport",
        "city": "North Connel",
        "country": "GB"
      },
      {
        "iata": "PPW",
        "name": "Papa Westray Airport",
        "city": "Papa Westray",
        "country": "GB"
      },
      {
        "iata": "SOY",
        "name": "Stronsay Airport",
        "city": "Stronsay",
        "country": "GB"
      },
      {
        "iata": "NDY",
        "name": "Sanday Airport",
        "city": "Sanday",
        "country": "GB"
      },
      {
        "iata": "LWK",
        "name": "Lerwick / Tingwall Airport",
        "city": "Lerwick",
        "country": "GB"
      },
      {
        "iata": "WRY",
        "name": "Westray Airport",
        "city": "Westray",
        "country": "GB"
      },
      {
        "iata": "CSA",
        "name": "Colonsay Airstrip",
        "city": "Colonsay",
        "country": "GB"
      },
      {
        "iata": "HAW",
        "name": "Haverfordwest Airport",
        "city": "Haverfordwest",
        "country": "GB"
      },
      {
        "iata": "CWL",
        "name": "Cardiff International Airport",
        "city": "Cardiff",
        "country": "GB"
      },
      {
        "iata": "SWS",
        "name": "Swansea Airport",
        "city": "Swansea",
        "country": "GB"
      },
      {
        "iata": "BRS",
        "name": "Bristol International Airport",
        "city": "Bristol",
        "country": "GB"
      },
      {
        "iata": "LPL",
        "name": "Liverpool John Lennon Airport",
        "city": "Liverpool",
        "country": "GB"
      },
      {
        "iata": "LTN",
        "name": "London Luton Airport",
        "city": "London",
        "country": "GB"
      },
      {
        "iata": "LEQ",
        "name": "Land's End Airport",
        "city": "Land's End",
        "country": "GB"
      },
      {
        "iata": "PLH",
        "name": "Plymouth City Airport",
        "city": "Plymouth",
        "country": "GB"
      },
      {
        "iata": "ISC",
        "name": "St. Mary's Airport",
        "city": "St. Mary's",
        "country": "GB"
      },
      {
        "iata": "BOH",
        "name": "Bournemouth Airport",
        "city": "Bournemouth",
        "country": "GB"
      },
      {
        "iata": "SOU",
        "name": "Southampton Airport",
        "city": "Southampton",
        "country": "GB"
      },
      {
        "iata": "BBP",
        "name": "Bembridge Airport",
        "city": "Bembridge",
        "country": "GB"
      },
      {
        "iata": "QLA",
        "name": "Lasham Airport",
        "city": "Lasham",
        "country": "GB"
      },
      {
        "iata": "NQY",
        "name": "Newquay Cornwall Airport",
        "city": "Newquay",
        "country": "GB"
      },
      {
        "iata": "QUG",
        "name": "Chichester/Goodwood Airport",
        "city": "Chichester",
        "country": "GB"
      },
      {
        "iata": "ACI",
        "name": "Alderney Airport",
        "city": "Saint Anne",
        "country": "GG"
      },
      {
        "iata": "GCI",
        "name": "Guernsey Airport",
        "city": "Saint Peter Port",
        "country": "GG"
      },
      {
        "iata": "JER",
        "name": "Jersey Airport",
        "city": "Saint Helier",
        "country": "JE"
      },
      {
        "iata": "ESH",
        "name": "Shoreham Airport",
        "city": "Brighton",
        "country": "GB"
      },
      {
        "iata": "BQH",
        "name": "London Biggin Hill Airport",
        "city": "London",
        "country": "GB"
      },
      {
        "iata": "LGW",
        "name": "London Gatwick Airport",
        "city": "London",
        "country": "GB"
      },
      {
        "iata": "KRH",
        "name": "Redhill Aerodrome",
        "city": "Redhill",
        "country": "GB"
      },
      {
        "iata": "LCY",
        "name": "London City Airport",
        "city": "London",
        "country": "GB"
      },
      {
        "iata": "FAB",
        "name": "Farnborough Airport",
        "city": "Farnborough",
        "country": "GB"
      },
      {
        "iata": "BBS",
        "name": "Blackbushe Airport",
        "city": "Yateley",
        "country": "GB"
      },
      {
        "iata": "LHR",
        "name": "London Heathrow Airport",
        "city": "London",
        "country": "GB"
      },
      {
        "iata": "SEN",
        "name": "Southend Airport",
        "city": "Southend",
        "country": "GB"
      },
      {
        "iata": "LYX",
        "name": "Lydd Airport",
        "city": "Lydd",
        "country": "GB"
      },
      {
        "iata": "MSE",
        "name": "Kent International Airport",
        "city": "Manston",
        "country": "GB"
      },
      {
        "iata": "CAX",
        "name": "Carlisle Airport",
        "city": "Carlisle",
        "country": "GB"
      },
      {
        "iata": "BLK",
        "name": "Blackpool International Airport",
        "city": "Blackpool",
        "country": "GB"
      },
      {
        "iata": "HUY",
        "name": "Humberside Airport",
        "city": "Grimsby",
        "country": "GB"
      },
      {
        "iata": "BWF",
        "name": "Barrow Walney Island Airport",
        "city": "Barrow-in-Furness",
        "country": "GB"
      },
      {
        "iata": "LBA",
        "name": "Leeds Bradford Airport",
        "city": "Leeds",
        "country": "GB"
      },
      {
        "iata": "CEG",
        "name": "Hawarden Airport",
        "city": "Hawarden",
        "country": "GB"
      },
      {
        "iata": "IOM",
        "name": "Isle of Man Airport",
        "city": "Castletown",
        "country": "IM"
      },
      {
        "iata": "NCL",
        "name": "Newcastle Airport",
        "city": "Newcastle",
        "country": "GB"
      },
      {
        "iata": "MME",
        "name": "Durham Tees Valley Airport",
        "city": "Durham",
        "country": "GB"
      },
      {
        "iata": "EMA",
        "name": "East Midlands Airport",
        "city": "Nottingham",
        "country": "GB"
      },
      {
        "iata": "HLY",
        "name": "Anglesey Airport",
        "city": "Angelsey",
        "country": "GB"
      },
      {
        "iata": "KOI",
        "name": "Kirkwall Airport",
        "city": "Orkney Islands",
        "country": "GB"
      },
      {
        "iata": "LSI",
        "name": "Sumburgh Airport",
        "city": "Lerwick",
        "country": "GB"
      },
      {
        "iata": "WIC",
        "name": "Wick Airport",
        "city": "Wick",
        "country": "GB"
      },
      {
        "iata": "ABZ",
        "name": "Aberdeen Dyce Airport",
        "city": "Aberdeen",
        "country": "GB"
      },
      {
        "iata": "INV",
        "name": "Inverness Airport",
        "city": "Inverness",
        "country": "GB"
      },
      {
        "iata": "GLA",
        "name": "Glasgow International Airport",
        "city": "Glasgow",
        "country": "GB"
      },
      {
        "iata": "EDI",
        "name": "Edinburgh Airport",
        "city": "Edinburgh",
        "country": "GB"
      },
      {
        "iata": "ILY",
        "name": "Islay Airport",
        "city": "Port Ellen",
        "country": "GB"
      },
      {
        "iata": "PIK",
        "name": "Glasgow Prestwick Airport",
        "city": "Glasgow",
        "country": "GB"
      },
      {
        "iata": "BEB",
        "name": "Benbecula Airport",
        "city": "Balivanich",
        "country": "GB"
      },
      {
        "iata": "SCS",
        "name": "Scatsta Airport",
        "city": "Shetland Islands",
        "country": "GB"
      },
      {
        "iata": "DND",
        "name": "Dundee Airport",
        "city": "Dundee",
        "country": "GB"
      },
      {
        "iata": "SYY",
        "name": "Stornoway Airport",
        "city": "Stornoway",
        "country": "GB"
      },
      {
        "iata": "BRR",
        "name": "Barra Airport",
        "city": "Eoligarry",
        "country": "GB"
      },
      {
        "iata": "PSL",
        "name": "Perth/Scone Airport",
        "city": "Perth",
        "country": "GB"
      },
      {
        "iata": "TRE",
        "name": "Tiree Airport",
        "city": "Balemartine",
        "country": "GB"
      },
      {
        "iata": "UNT",
        "name": "Unst Airport",
        "city": "Shetland Islands",
        "country": "GB"
      },
      {
        "iata": "BOL",
        "name": "Ballykelly Airport",
        "city": "Ballykelly",
        "country": "GB"
      },
      {
        "iata": "FSS",
        "name": "RAF Kinloss",
        "city": "Kinloss",
        "country": "GB"
      },
      {
        "iata": "ADX",
        "name": "RAF Leuchars",
        "city": "St. Andrews",
        "country": "GB"
      },
      {
        "iata": "LMO",
        "name": "RAF Lossiemouth",
        "city": "Lossiemouth",
        "country": "GB"
      },
      {
        "iata": "CBG",
        "name": "Cambridge Airport",
        "city": "Cambridge",
        "country": "GB"
      },
      {
        "iata": "NWI",
        "name": "Norwich International Airport",
        "city": "Norwich",
        "country": "GB"
      },
      {
        "iata": "STN",
        "name": "London Stansted Airport",
        "city": "London",
        "country": "GB"
      },
      {
        "iata": "QFO",
        "name": "Duxford Airport",
        "city": "Duxford",
        "country": "GB"
      },
      {
        "iata": "HYC",
        "name": "Wycombe Air Park",
        "city": "High Wycombe",
        "country": "GB"
      },
      {
        "iata": "EXT",
        "name": "Exeter International Airport",
        "city": "Exeter",
        "country": "GB"
      },
      {
        "iata": "FZO",
        "name": "Bristol Filton Airport",
        "city": "Bristol",
        "country": "GB"
      },
      {
        "iata": "OXF",
        "name": "Oxford (Kidlington) Airport",
        "city": "Kidlington",
        "country": "GB"
      },
      {
        "iata": "RCS",
        "name": "Rochester Airport",
        "city": "Rochester",
        "country": "GB"
      },
      {
        "iata": "BEX",
        "name": "RAF Benson",
        "city": "Benson",
        "country": "GB"
      },
      {
        "iata": "LKZ",
        "name": "RAF Lakenheath",
        "city": "Lakenheath",
        "country": "GB"
      },
      {
        "iata": "MHZ",
        "name": "RAF Mildenhall",
        "city": "Mildenhall",
        "country": "GB"
      },
      {
        "iata": "QUY",
        "name": "RAF Wyton",
        "city": "St. Ives",
        "country": "GB"
      },
      {
        "iata": "FFD",
        "name": "RAF Fairford",
        "city": "Fairford",
        "country": "GB"
      },
      {
        "iata": "BZZ",
        "name": "RAF Brize Norton",
        "city": "Brize Norton",
        "country": "GB"
      },
      {
        "iata": "ODH",
        "name": "RAF Odiham",
        "city": "Odiham",
        "country": "GB"
      },
      {
        "iata": "WXF",
        "name": "Wethersfield Airport",
        "city": "Wethersfield",
        "country": "GB"
      },
      {
        "iata": "NHT",
        "name": "RAF Northolt",
        "city": "London",
        "country": "GB"
      },
      {
        "iata": "QCY",
        "name": "RAF Coningsby",
        "city": "Coningsby",
        "country": "GB"
      },
      {
        "iata": "BEQ",
        "name": "RAF Honington",
        "city": "Thetford",
        "country": "GB"
      },
      {
        "iata": "OKH",
        "name": "RAF Cottesmore",
        "city": "Cottesmore",
        "country": "GB"
      },
      {
        "iata": "SQZ",
        "name": "RAF Scampton",
        "city": "Scampton",
        "country": "GB"
      },
      {
        "iata": "HRT",
        "name": "RAF Linton-On-Ouse",
        "city": "Linton-On-Ouse",
        "country": "GB"
      },
      {
        "iata": "WTN",
        "name": "RAF Waddington",
        "city": "Waddington",
        "country": "GB"
      },
      {
        "iata": "MRH",
        "name": "RAF Marham",
        "city": "Marham",
        "country": "GB"
      },
      {
        "iata": "MPN",
        "name": "Mount Pleasant Airport",
        "city": "Mount Pleasant",
        "country": "FK"
      },
      {
        "iata": "AMS",
        "name": "Amsterdam Airport Schiphol",
        "city": "Amsterdam",
        "country": "NL"
      },
      {
        "iata": "MST",
        "name": "Maastricht Aachen Airport",
        "city": "Maastricht",
        "country": "NL"
      },
      {
        "iata": "QAR",
        "name": "Deelen Air Base",
        "city": "Arnhem",
        "country": "NL"
      },
      {
        "iata": "EIN",
        "name": "Eindhoven Airport",
        "city": "Eindhoven",
        "country": "NL"
      },
      {
        "iata": "GRQ",
        "name": "Eelde Airport",
        "city": "Groningen",
        "country": "NL"
      },
      {
        "iata": "GLZ",
        "name": "Gilze Rijen Air Base",
        "city": "Breda",
        "country": "NL"
      },
      {
        "iata": "DHR",
        "name": "De Kooy Airport",
        "city": "Den Helder",
        "country": "NL"
      },
      {
        "iata": "LEY",
        "name": "Lelystad Airport",
        "city": "Lelystad",
        "country": "NL"
      },
      {
        "iata": "LWR",
        "name": "Leeuwarden Air Base",
        "city": "Leeuwarden",
        "country": "NL"
      },
      {
        "iata": "---",
        "name": "Oostwold Airport",
        "city": "",
        "country": "NL"
      },
      {
        "iata": "RTM",
        "name": "Rotterdam Airport",
        "city": "Rotterdam",
        "country": "NL"
      },
      {
        "iata": "ENS",
        "name": "Twenthe Airport",
        "city": "Enschede",
        "country": "NL"
      },
      {
        "iata": "UDE",
        "name": "Volkel Air Base",
        "city": "Uden",
        "country": "NL"
      },
      {
        "iata": "WOE",
        "name": "Woensdrecht Air Base",
        "city": "Bergen Op Zoom",
        "country": "NL"
      },
      {
        "iata": "BYT",
        "name": "Bantry Aerodrome",
        "city": "Bantry",
        "country": "IE"
      },
      {
        "iata": "BLY",
        "name": "Belmullet Aerodrome",
        "city": "Belmullet",
        "country": "IE"
      },
      {
        "iata": "NNR",
        "name": "Connemara Regional Airport",
        "city": "Inverin",
        "country": "IE"
      },
      {
        "iata": "CLB",
        "name": "Castlebar Airport",
        "city": "Castlebar",
        "country": "IE"
      },
      {
        "iata": "WEX",
        "name": "Castlebridge Airport",
        "city": "Wexford",
        "country": "IE"
      },
      {
        "iata": "ORK",
        "name": "Cork Airport",
        "city": "Cork",
        "country": "IE"
      },
      {
        "iata": "GWY",
        "name": "Galway Airport",
        "city": "Galway",
        "country": "IE"
      },
      {
        "iata": "CFN",
        "name": "Donegal Airport",
        "city": "Donegal",
        "country": "IE"
      },
      {
        "iata": "DUB",
        "name": "Dublin Airport",
        "city": "Dublin",
        "country": "IE"
      },
      {
        "iata": "IOR",
        "name": "Inishmore Aerodrome",
        "city": "Inis Mor",
        "country": "IE"
      },
      {
        "iata": "INQ",
        "name": "Inisheer Aerodrome",
        "city": "Inis Oirr",
        "country": "IE"
      },
      {
        "iata": "KKY",
        "name": "Kilkenny Airport",
        "city": "Kilkenny",
        "country": "IE"
      },
      {
        "iata": "NOC",
        "name": "Ireland West Knock Airport",
        "city": "Charleston",
        "country": "IE"
      },
      {
        "iata": "KIR",
        "name": "Kerry Airport",
        "city": "Killarney",
        "country": "IE"
      },
      {
        "iata": "LTR",
        "name": "Letterkenny Airport",
        "city": "Letterkenny",
        "country": "IE"
      },
      {
        "iata": "IIA",
        "name": "Inishmaan Aerodrome",
        "city": "Inis Meain",
        "country": "IE"
      },
      {
        "iata": "SNN",
        "name": "Shannon Airport",
        "city": "Shannon",
        "country": "IE"
      },
      {
        "iata": "SXL",
        "name": "Sligo Airport",
        "city": "Sligo",
        "country": "IE"
      },
      {
        "iata": "WAT",
        "name": "Waterford Airport",
        "city": "Waterford",
        "country": "IE"
      },
      {
        "iata": "0",
        "name": "Vejro",
        "city": "",
        "country": "DK"
      },
      {
        "iata": "AAR",
        "name": "Aarhus Airport",
        "city": "Aarhus",
        "country": "DK"
      },
      {
        "iata": "BLL",
        "name": "Billund Airport",
        "city": "Billund",
        "country": "DK"
      },
      {
        "iata": "CPH",
        "name": "Copenhagen Kastrup Airport",
        "city": "Copenhagen",
        "country": "DK"
      },
      {
        "iata": "EBJ",
        "name": "Esbjerg Airport",
        "city": "Esbjerg",
        "country": "DK"
      },
      {
        "iata": "KRP",
        "name": "Karup Airport",
        "city": "Karup",
        "country": "DK"
      },
      {
        "iata": "BYR",
        "name": "Laeso Airport",
        "city": "Laeso",
        "country": "DK"
      },
      {
        "iata": "MRW",
        "name": "Lolland Falster Maribo Airport",
        "city": "Lolland Falster / Maribo",
        "country": "DK"
      },
      {
        "iata": "ODE",
        "name": "Odense Airport",
        "city": "Odense",
        "country": "DK"
      },
      {
        "iata": "RKE",
        "name": "Copenhagen Roskilde Airport",
        "city": "Copenhagen",
        "country": "DK"
      },
      {
        "iata": "RNN",
        "name": "Bornholm Airport",
        "city": "Ronne",
        "country": "DK"
      },
      {
        "iata": "SGD",
        "name": "Sonderborg Airport",
        "city": "Sonderborg",
        "country": "DK"
      },
      {
        "iata": "CNL",
        "name": "Sindal Airport",
        "city": "Sindal",
        "country": "DK"
      },
      {
        "iata": "SKS",
        "name": "Vojens Skrydstrup Airport",
        "city": "Vojens",
        "country": "DK"
      },
      {
        "iata": "SQW",
        "name": "Skive Airport",
        "city": "Skive",
        "country": "DK"
      },
      {
        "iata": "TED",
        "name": "Thisted Airport",
        "city": "Thisted",
        "country": "DK"
      },
      {
        "iata": "FAE",
        "name": "Vagar Airport",
        "city": "Vagar",
        "country": "FO"
      },
      {
        "iata": "STA",
        "name": "Stauning Airport",
        "city": "Skjern / Ringkobing",
        "country": "DK"
      },
      {
        "iata": "AAL",
        "name": "Aalborg Airport",
        "city": "Aalborg",
        "country": "DK"
      },
      {
        "iata": "LUX",
        "name": "Luxembourg-Findel International Airport",
        "city": "Luxembourg",
        "country": "LU"
      },
      {
        "iata": "AES",
        "name": "Alesund Airport",
        "city": "Alesund",
        "country": "NO"
      },
      {
        "iata": "ANX",
        "name": "Andoya Airport",
        "city": "Andenes",
        "country": "NO"
      },
      {
        "iata": "ALF",
        "name": "Alta Airport",
        "city": "Alta",
        "country": "NO"
      },
      {
        "iata": "FDE",
        "name": "Bringeland Airport",
        "city": "Forde",
        "country": "NO"
      },
      {
        "iata": "BNN",
        "name": "Bronnoysund Airport",
        "city": "Bronnoy",
        "country": "NO"
      },
      {
        "iata": "BOO",
        "name": "Bodo Airport",
        "city": "Bodo",
        "country": "NO"
      },
      {
        "iata": "BGO",
        "name": "Bergen Airport Flesland",
        "city": "Bergen",
        "country": "NO"
      },
      {
        "iata": "BJF",
        "name": "Batsfjord Airport",
        "city": "Batsfjord",
        "country": "NO"
      },
      {
        "iata": "BVG",
        "name": "Berlevag Airport",
        "city": "Berlevag",
        "country": "NO"
      },
      {
        "iata": "KRS",
        "name": "Kristiansand Airport",
        "city": "Kjevik",
        "country": "NO"
      },
      {
        "iata": "DLD",
        "name": "Geilo Airport Dagali",
        "city": "Dagali",
        "country": "NO"
      },
      {
        "iata": "BDU",
        "name": "Bardufoss Airport",
        "city": "Malselv",
        "country": "NO"
      },
      {
        "iata": "EVE",
        "name": "Harstad/Narvik Airport Evenes",
        "city": "Evenes",
        "country": "NO"
      },
      {
        "iata": "VDB",
        "name": "Leirin Airport",
        "city": "",
        "country": "NO"
      },
      {
        "iata": "FRO",
        "name": "Floro Airport",
        "city": "Floro",
        "country": "NO"
      },
      {
        "iata": "OSL",
        "name": "Oslo Gardermoen Airport",
        "city": "Oslo",
        "country": "NO"
      },
      {
        "iata": "HMR",
        "name": "Stafsberg Airport",
        "city": "Hamar",
        "country": "NO"
      },
      {
        "iata": "HAU",
        "name": "Haugesund Airport",
        "city": "Karmoy",
        "country": "NO"
      },
      {
        "iata": "HFT",
        "name": "Hammerfest Airport",
        "city": "Hammerfest",
        "country": "NO"
      },
      {
        "iata": "HAA",
        "name": "Hasvik Airport",
        "city": "Hasvik",
        "country": "NO"
      },
      {
        "iata": "HVG",
        "name": "Valan Airport",
        "city": "Honningsvag",
        "country": "NO"
      },
      {
        "iata": "QKX",
        "name": "Kautokeino Air Base",
        "city": "",
        "country": "NO"
      },
      {
        "iata": "KSU",
        "name": "Kristiansund Airport Kvernberget",
        "city": "Kvernberget",
        "country": "NO"
      },
      {
        "iata": "GLL",
        "name": "Gol Airport",
        "city": "Klanten",
        "country": "NO"
      },
      {
        "iata": "KKN",
        "name": "Kirkenes Airport Hoybuktmoen",
        "city": "Kirkenes",
        "country": "NO"
      },
      {
        "iata": "FAN",
        "name": "Lista Airport",
        "city": "Farsund",
        "country": "NO"
      },
      {
        "iata": "LKN",
        "name": "Leknes Airport",
        "city": "Leknes",
        "country": "NO"
      },
      {
        "iata": "MEH",
        "name": "Mehamn Airport",
        "city": "Mehamn",
        "country": "NO"
      },
      {
        "iata": "MOL",
        "name": "Molde Airport",
        "city": "Aro",
        "country": "NO"
      },
      {
        "iata": "MJF",
        "name": "Mosjoen Airport Kjaerstad",
        "city": "",
        "country": "NO"
      },
      {
        "iata": "LKL",
        "name": "Banak Airport",
        "city": "Lakselv",
        "country": "NO"
      },
      {
        "iata": "NVK",
        "name": "Narvik Framnes Airport",
        "city": "Narvik",
        "country": "NO"
      },
      {
        "iata": "OSY",
        "name": "Namsos Hoknesora Airport",
        "city": "Namsos",
        "country": "NO"
      },
      {
        "iata": "NTB",
        "name": "Notodden Airport",
        "city": "",
        "country": "NO"
      },
      {
        "iata": "OLA",
        "name": "Orland Airport",
        "city": "Orland",
        "country": "NO"
      },
      {
        "iata": "HOV",
        "name": "Orsta-Volda Airport Hovden",
        "city": "Orsta",
        "country": "NO"
      },
      {
        "iata": "MQN",
        "name": "Mo i Rana Airport Rossvoll",
        "city": "Mo i Rana",
        "country": "NO"
      },
      {
        "iata": "RVK",
        "name": "Rorvik Airport Ryum",
        "city": "Rorvik",
        "country": "NO"
      },
      {
        "iata": "RRS",
        "name": "Roros Airport",
        "city": "Roros",
        "country": "NO"
      },
      {
        "iata": "RET",
        "name": "Rost Airport",
        "city": "",
        "country": "NO"
      },
      {
        "iata": "RYG",
        "name": "Moss Airport Rygge",
        "city": "Rygge",
        "country": "NO"
      },
      {
        "iata": "LYR",
        "name": "Svalbard Airport Longyear",
        "city": "Longyearbyen",
        "country": "NO"
      },
      {
        "iata": "SDN",
        "name": "Sandane Airport Anda",
        "city": "Sandane",
        "country": "NO"
      },
      {
        "iata": "SOG",
        "name": "Sogndal Airport",
        "city": "Sogndal",
        "country": "NO"
      },
      {
        "iata": "SVJ",
        "name": "Svolvaer Helle Airport",
        "city": "Svolvaer",
        "country": "NO"
      },
      {
        "iata": "SKN",
        "name": "Stokmarknes Skagen Airport",
        "city": "Hadsel",
        "country": "NO"
      },
      {
        "iata": "SKE",
        "name": "Skien Airport",
        "city": "Geiteryggen",
        "country": "NO"
      },
      {
        "iata": "SRP",
        "name": "Stord Airport",
        "city": "Leirvik",
        "country": "NO"
      },
      {
        "iata": "SOJ",
        "name": "Sorkjosen Airport",
        "city": "Sorkjosen",
        "country": "NO"
      },
      {
        "iata": "VAW",
        "name": "Vardo Airport Svartnes",
        "city": "Vardo",
        "country": "NO"
      },
      {
        "iata": "SSJ",
        "name": "Sandnessjoen Airport Stokka",
        "city": "Alstahaug",
        "country": "NO"
      },
      {
        "iata": "TOS",
        "name": "Tromso Airport",
        "city": "Tromso",
        "country": "NO"
      },
      {
        "iata": "TRF",
        "name": "Sandefjord Airport Torp",
        "city": "Torp",
        "country": "NO"
      },
      {
        "iata": "TRD",
        "name": "Trondheim Airport Vaernes",
        "city": "Trondheim",
        "country": "NO"
      },
      {
        "iata": "VDS",
        "name": "Vadso Airport",
        "city": "Vadso",
        "country": "NO"
      },
      {
        "iata": "SVG",
        "name": "Stavanger Airport Sola",
        "city": "Stavanger",
        "country": "NO"
      },
      {
        "iata": "QYY",
        "name": "Bialystok-Krywlany Airport",
        "city": "Bialystok",
        "country": "PL"
      },
      {
        "iata": "BXP",
        "name": "Biala Podlaska Airport",
        "city": "Biala Podlaska",
        "country": "PL"
      },
      {
        "iata": "BZG",
        "name": "Bydgoszcz Ignacy Jan Paderewski Airport",
        "city": "Bydgoszcz",
        "country": "PL"
      },
      {
        "iata": "CZW",
        "name": "Czestochowa-Rudniki",
        "city": "Czestochowa",
        "country": "PL"
      },
      {
        "iata": "GDN",
        "name": "Gdansk Lech Walesa Airport",
        "city": "Gdansk",
        "country": "PL"
      },
      {
        "iata": "QLC",
        "name": "Gliwice Glider Airport",
        "city": "",
        "country": "PL"
      },
      {
        "iata": "KRK",
        "name": "John Paul II International Airport Krakow-Balice Airport",
        "city": "Krakow",
        "country": "PL"
      },
      {
        "iata": "OSZ",
        "name": "Koszalin Zegrze Airport",
        "city": "",
        "country": "PL"
      },
      {
        "iata": "KTW",
        "name": "Katowice International Airport",
        "city": "Katowice",
        "country": "PL"
      },
      {
        "iata": "QEO",
        "name": "Bielsko-Bialo Kaniow Airfield",
        "city": "Czechowice-Dziedzice",
        "country": "PL"
      },
      {
        "iata": "LUZ",
        "name": "Lublin Airport",
        "city": "Lublin",
        "country": "PL"
      },
      {
        "iata": "LCJ",
        "name": "Lodz Wladyslaw Reymont Airport",
        "city": "Lodz",
        "country": "PL"
      },
      {
        "iata": "QLU",
        "name": "Lublin Radwiec Airport",
        "city": "",
        "country": "PL"
      },
      {
        "iata": "WMI",
        "name": "Warsaw Modlin Airport",
        "city": "Warsaw",
        "country": "PL"
      },
      {
        "iata": "QWS",
        "name": "Nowy Targ Airport",
        "city": "Nowy Targ",
        "country": "PL"
      },
      {
        "iata": "QYD",
        "name": "Oksywie Military Air Base",
        "city": "Gdynia",
        "country": "PL"
      },
      {
        "iata": "QPM",
        "name": "Opole-Polska Nowa Wies Airport",
        "city": "Opole",
        "country": "PL"
      },
      {
        "iata": "POZ",
        "name": "Poznan-Lawica Airport",
        "city": "Poznan",
        "country": "PL"
      },
      {
        "iata": "CZW",
        "name": "Czestochowa-Rudniki Airport",
        "city": "Czestochowa",
        "country": "PL"
      },
      {
        "iata": "RZE",
        "name": "Rzeszow-Jasionka Airport",
        "city": "Rzeszow",
        "country": "PL"
      },
      {
        "iata": "SZZ",
        "name": "Szczecin-Goleniow Solidarnosc Airport",
        "city": "Goleniow",
        "country": "PL"
      },
      {
        "iata": "ZWK",
        "name": "Suwalki Airport",
        "city": "Suwalki",
        "country": "PL"
      },
      {
        "iata": "SZY",
        "name": "Olsztyn-Mazury Airport",
        "city": "Szymany",
        "country": "PL"
      },
      {
        "iata": "WAW",
        "name": "Warsaw Chopin Airport",
        "city": "Warsaw",
        "country": "PL"
      },
      {
        "iata": "WRO",
        "name": "Copernicus Wroclaw Airport",
        "city": "Wroclaw",
        "country": "PL"
      },
      {
        "iata": "IEG",
        "name": "Zielona Gora-Babimost Airport",
        "city": "Babimost",
        "country": "PL"
      },
      {
        "iata": "RNB",
        "name": "Ronneby Airport",
        "city": "",
        "country": "SE"
      },
      {
        "iata": "XWP",
        "name": "Hassleholm Bokeberg Airport",
        "city": "Hassleholm",
        "country": "SE"
      },
      {
        "iata": "GOT",
        "name": "Gothenburg-Landvetter Airport",
        "city": "Gothenburg",
        "country": "SE"
      },
      {
        "iata": "JKG",
        "name": "Jonkoping Airport",
        "city": "Jonkoping",
        "country": "SE"
      },
      {
        "iata": "LDK",
        "name": "Lidkoping-Hovby Airport",
        "city": "Lidkoping",
        "country": "SE"
      },
      {
        "iata": "GSE",
        "name": "Gothenburg City Airport",
        "city": "Gothenburg",
        "country": "SE"
      },
      {
        "iata": "KVB",
        "name": "Skovde Airport",
        "city": "Skovde",
        "country": "SE"
      },
      {
        "iata": "THN",
        "name": "Trollhattan-Vanersborg Airport",
        "city": "Trollhattan",
        "country": "SE"
      },
      {
        "iata": "KSK",
        "name": "Karlskoga Airport",
        "city": "",
        "country": "SE"
      },
      {
        "iata": "MXX",
        "name": "Mora Airport",
        "city": "",
        "country": "SE"
      },
      {
        "iata": "NYO",
        "name": "Stockholm Skavsta Airport",
        "city": "Stockholm / Nykoping",
        "country": "SE"
      },
      {
        "iata": "KID",
        "name": "Kristianstad Airport",
        "city": "Kristianstad",
        "country": "SE"
      },
      {
        "iata": "OSK",
        "name": "Oskarshamn Airport",
        "city": "",
        "country": "SE"
      },
      {
        "iata": "KLR",
        "name": "Kalmar Airport",
        "city": "",
        "country": "SE"
      },
      {
        "iata": "MMX",
        "name": "Malmo Sturup Airport",
        "city": "Malmo",
        "country": "SE"
      },
      {
        "iata": "HAD",
        "name": "Halmstad Airport",
        "city": "Halmstad",
        "country": "SE"
      },
      {
        "iata": "VXO",
        "name": "Vaxjo Kronoberg Airport",
        "city": "Vaxjo",
        "country": "SE"
      },
      {
        "iata": "EVG",
        "name": "Sveg Airport",
        "city": "",
        "country": "SE"
      },
      {
        "iata": "GEV",
        "name": "Gallivare Airport",
        "city": "Gallivare",
        "country": "SE"
      },
      {
        "iata": "KRF",
        "name": "Kramfors Solleftea Airport",
        "city": "Kramfors / Solleftea",
        "country": "SE"
      },
      {
        "iata": "LYC",
        "name": "Lycksele Airport",
        "city": "",
        "country": "SE"
      },
      {
        "iata": "SDL",
        "name": "Sundsvall-Harnosand Airport",
        "city": "Sundsvall/ Harnosand",
        "country": "SE"
      },
      {
        "iata": "OER",
        "name": "Ornskoldsvik Airport",
        "city": "Ornskoldsvik",
        "country": "SE"
      },
      {
        "iata": "KRN",
        "name": "Kiruna Airport",
        "city": "",
        "country": "SE"
      },
      {
        "iata": "SFT",
        "name": "Skelleftea Airport",
        "city": "Skelleftea",
        "country": "SE"
      },
      {
        "iata": "UME",
        "name": "Umea Airport",
        "city": "Umea",
        "country": "SE"
      },
      {
        "iata": "VHM",
        "name": "Vilhelmina Airport",
        "city": "",
        "country": "SE"
      },
      {
        "iata": "AJR",
        "name": "Arvidsjaur Airport",
        "city": "Arvidsjaur",
        "country": "SE"
      },
      {
        "iata": "SOO",
        "name": "Soderhamn Airport",
        "city": "Soderhamn",
        "country": "SE"
      },
      {
        "iata": "OSD",
        "name": "Ostersund Airport",
        "city": "Ostersund",
        "country": "SE"
      },
      {
        "iata": "ORB",
        "name": "Orebro Airport",
        "city": "Orebro",
        "country": "SE"
      },
      {
        "iata": "HFS",
        "name": "Hagfors Airport",
        "city": "",
        "country": "SE"
      },
      {
        "iata": "KSD",
        "name": "Karlstad Airport",
        "city": "Karlstad",
        "country": "SE"
      },
      {
        "iata": "VST",
        "name": "Stockholm Vasteras Airport",
        "city": "Stockholm / Vasteras",
        "country": "SE"
      },
      {
        "iata": "LLA",
        "name": "Lulea Airport",
        "city": "Lulea",
        "country": "SE"
      },
      {
        "iata": "ARN",
        "name": "Stockholm-Arlanda Airport",
        "city": "Stockholm",
        "country": "SE"
      },
      {
        "iata": "BMA",
        "name": "Stockholm-Bromma Airport",
        "city": "Stockholm",
        "country": "SE"
      },
      {
        "iata": "BLE",
        "name": "Borlange Airport",
        "city": "",
        "country": "SE"
      },
      {
        "iata": "HLF",
        "name": "Hultsfred Airport",
        "city": "",
        "country": "SE"
      },
      {
        "iata": "GVX",
        "name": "Gavle Sandviken Airport",
        "city": "Gavle / Sandviken",
        "country": "SE"
      },
      {
        "iata": "LPI",
        "name": "Linkoping SAAB Airport",
        "city": "Linkoping",
        "country": "SE"
      },
      {
        "iata": "NRK",
        "name": "Norrkoping Airport",
        "city": "Norrkoping",
        "country": "SE"
      },
      {
        "iata": "TYF",
        "name": "Torsby Airport",
        "city": "",
        "country": "SE"
      },
      {
        "iata": "EKT",
        "name": "Eskilstuna Airport",
        "city": "Eskilstuna",
        "country": "SE"
      },
      {
        "iata": "VBY",
        "name": "Visby Airport",
        "city": "Visby",
        "country": "SE"
      },
      {
        "iata": "VVK",
        "name": "Vastervik Airport",
        "city": "Vastervik",
        "country": "SE"
      },
      {
        "iata": "AGH",
        "name": "Angelholm-Helsingborg Airport",
        "city": "Angelholm",
        "country": "SE"
      },
      {
        "iata": "SQO",
        "name": "Storuman Airport",
        "city": "",
        "country": "SE"
      },
      {
        "iata": "IDB",
        "name": "Idre Airport",
        "city": "Idre",
        "country": "SE"
      },
      {
        "iata": "PJA",
        "name": "Pajala Airport",
        "city": "",
        "country": "SE"
      },
      {
        "iata": "HMV",
        "name": "Hemavan Airport",
        "city": "",
        "country": "SE"
      },
      {
        "iata": "SPM",
        "name": "Spangdahlem Air Base",
        "city": "Trier",
        "country": "DE"
      },
      {
        "iata": "RMS",
        "name": "Ramstein Air Base",
        "city": "Ramstein",
        "country": "DE"
      },
      {
        "iata": "ZCD",
        "name": "Bamberg-Breitenau Airport",
        "city": "Bamberg",
        "country": "DE"
      },
      {
        "iata": "ZCN",
        "name": "Celle Airport",
        "city": "",
        "country": "DE"
      },
      {
        "iata": "ZPQ",
        "name": "Rheine Bentlage Airport",
        "city": "",
        "country": "DE"
      },
      {
        "iata": "FRZ",
        "name": "Fritzlar Airport",
        "city": "Fritzlar",
        "country": "DE"
      },
      {
        "iata": "ZNF",
        "name": "Hanau Army Air Field",
        "city": "",
        "country": "DE"
      },
      {
        "iata": "NDZ",
        "name": "Nordholz Airport",
        "city": "",
        "country": "DE"
      },
      {
        "iata": "GKE",
        "name": "Geilenkirchen Airport",
        "city": "",
        "country": "DE"
      },
      {
        "iata": "RLG",
        "name": "Rostock-Laage Airport",
        "city": "Rostock",
        "country": "DE"
      },
      {
        "iata": "QOE",
        "name": "Norvenich Airport",
        "city": "",
        "country": "DE"
      },
      {
        "iata": "WBG",
        "name": "Schleswig Airport",
        "city": "",
        "country": "DE"
      },
      {
        "iata": "FNB",
        "name": "Neubrandenburg Airport",
        "city": "",
        "country": "DE"
      },
      {
        "iata": "WIE",
        "name": "Wiesbaden Army Airfield",
        "city": "Wiesbaden",
        "country": "DE"
      },
      {
        "iata": "FEL",
        "name": "Furstenfeldbruck Airport",
        "city": "Furstenfeldbruck",
        "country": "DE"
      },
      {
        "iata": "IGS",
        "name": "Ingolstadt Manching Airport",
        "city": "Manching",
        "country": "DE"
      },
      {
        "iata": "GUT",
        "name": "Gutersloh Airport",
        "city": "Gutersloh",
        "country": "DE"
      },
      {
        "iata": "BGN",
        "name": "Brugge Air Base",
        "city": "",
        "country": "DE"
      },
      {
        "iata": "DGP",
        "name": "Daugavpils Intrenational Airport",
        "city": "Daugavpils",
        "country": "LV"
      },
      {
        "iata": "LPX",
        "name": "Liepaja International Airport",
        "city": "Liepaja",
        "country": "LV"
      },
      {
        "iata": "RIX",
        "name": "Riga International Airport",
        "city": "Riga",
        "country": "LV"
      },
      {
        "iata": "VNT",
        "name": "Ventspils International Airport",
        "city": "Ventspils",
        "country": "LV"
      },
      {
        "iata": "KUN",
        "name": "Kaunas International Airport",
        "city": "Kaunas",
        "country": "LT"
      },
      {
        "iata": "KLJ",
        "name": "Klaipeda Airport",
        "city": "Klaipeda",
        "country": "LT"
      },
      {
        "iata": "PLQ",
        "name": "Palanga International Airport",
        "city": "Palanga",
        "country": "LT"
      },
      {
        "iata": "PNV",
        "name": "Panevezys Air Base",
        "city": "Panevezys",
        "country": "LT"
      },
      {
        "iata": "SQQ",
        "name": "Siauliai International Airport",
        "city": "Siauliai",
        "country": "LT"
      },
      {
        "iata": "HLJ",
        "name": "Barysiai Airport",
        "city": "Barysiai",
        "country": "LT"
      },
      {
        "iata": "VNO",
        "name": "Vilnius International Airport",
        "city": "Vilnius",
        "country": "LT"
      },
      {
        "iata": "ALJ",
        "name": "Alexander Bay Airport",
        "city": "Alexander Bay",
        "country": "ZA"
      },
      {
        "iata": "AGZ",
        "name": "Aggeneys Airport",
        "city": "Aggeneys",
        "country": "ZA"
      },
      {
        "iata": "ADY",
        "name": "Alldays Airport",
        "city": "Alldays",
        "country": "ZA"
      },
      {
        "iata": "BIY",
        "name": "Bisho Airport",
        "city": "Bisho",
        "country": "ZA"
      },
      {
        "iata": "BFN",
        "name": "J B M Hertzog International Airport",
        "city": "Bloemfontain",
        "country": "ZA"
      },
      {
        "iata": "UTE",
        "name": "Bultfontein Airport",
        "city": "Bultfontein",
        "country": "ZA"
      },
      {
        "iata": "CDO",
        "name": "Cradock Airport",
        "city": "Cradock",
        "country": "ZA"
      },
      {
        "iata": "CPT",
        "name": "Cape Town International Airport",
        "city": "Cape Town",
        "country": "ZA"
      },
      {
        "iata": "DUK",
        "name": "Mubatuba Airport",
        "city": "Mubatuba",
        "country": "ZA"
      },
      {
        "iata": "PZL",
        "name": "Zulu Inyala Airport",
        "city": "Phinda",
        "country": "ZA"
      },
      {
        "iata": "ELS",
        "name": "Ben Schoeman Airport",
        "city": "East London",
        "country": "ZA"
      },
      {
        "iata": "EMG",
        "name": "Empangeni Airport",
        "city": "Empangeni",
        "country": "ZA"
      },
      {
        "iata": "ELL",
        "name": "Ellisras Matimba Airport",
        "city": "Ellisras",
        "country": "ZA"
      },
      {
        "iata": "FCB",
        "name": "Ficksburg Sentraoes Airport",
        "city": "Ficksburg",
        "country": "ZA"
      },
      {
        "iata": "GCJ",
        "name": "Grand Central Airport",
        "city": "Midrand",
        "country": "ZA"
      },
      {
        "iata": "GRJ",
        "name": "George Airport",
        "city": "George",
        "country": "ZA"
      },
      {
        "iata": "GIY",
        "name": "Giyani Airport",
        "city": "Giyani",
        "country": "ZA"
      },
      {
        "iata": "QRA",
        "name": "Rand Airport",
        "city": "Johannesburg",
        "country": "ZA"
      },
      {
        "iata": "HLW",
        "name": "Hluhluwe Airport",
        "city": "Hluhluwe",
        "country": "ZA"
      },
      {
        "iata": "HRS",
        "name": "Harrismith Airport",
        "city": "Harrismith",
        "country": "ZA"
      },
      {
        "iata": "HDS",
        "name": "Hoedspruit Air Force Base Airport",
        "city": "Hoedspruit",
        "country": "ZA"
      },
      {
        "iata": "KXE",
        "name": "P C Pelser Airport",
        "city": "Klerksdorp",
        "country": "ZA"
      },
      {
        "iata": "KIM",
        "name": "Kimberley Airport",
        "city": "Kimberley",
        "country": "ZA"
      },
      {
        "iata": "MQP",
        "name": "Kruger Mpumalanga International Airport",
        "city": "Mpumalanga",
        "country": "ZA"
      },
      {
        "iata": "KOF",
        "name": "Komatipoort Airport",
        "city": "Komatipoort",
        "country": "ZA"
      },
      {
        "iata": "KMH",
        "name": "Johan Pienaar Airport",
        "city": "Kuruman",
        "country": "ZA"
      },
      {
        "iata": "KLZ",
        "name": "Kleinsee Airport",
        "city": "Kleinsee",
        "country": "ZA"
      },
      {
        "iata": "HLA",
        "name": "Lanseria Airport",
        "city": "Johannesburg",
        "country": "ZA"
      },
      {
        "iata": "LMR",
        "name": "Lime Acres Finsch Mine Airport",
        "city": "Lime Acres",
        "country": "ZA"
      },
      {
        "iata": "LDZ",
        "name": "Londolozi Airport",
        "city": "Londolozi",
        "country": "ZA"
      },
      {
        "iata": "DUR",
        "name": "King Shaka International Airport",
        "city": "Durban",
        "country": "ZA"
      },
      {
        "iata": "LUJ",
        "name": "Lusikisiki Airport",
        "city": "Lusikisiki",
        "country": "ZA"
      },
      {
        "iata": "LCD",
        "name": "Louis Trichardt Airport",
        "city": "Louis Trichardt",
        "country": "ZA"
      },
      {
        "iata": "SDB",
        "name": "Langebaanweg Airport",
        "city": "Langebaanweg",
        "country": "ZA"
      },
      {
        "iata": "LAY",
        "name": "Ladysmith Airport",
        "city": "Ladysmith",
        "country": "ZA"
      },
      {
        "iata": "AAM",
        "name": "Malamala Airport",
        "city": "Malamala",
        "country": "ZA"
      },
      {
        "iata": "MGH",
        "name": "Margate Airport",
        "city": "Margate",
        "country": "ZA"
      },
      {
        "iata": "MEZ",
        "name": "Musina(Messina) Airport",
        "city": "Musina",
        "country": "ZA"
      },
      {
        "iata": "MBD",
        "name": "Mmabatho International Airport",
        "city": "Mafeking",
        "country": "ZA"
      },
      {
        "iata": "LLE",
        "name": "Riverside Airport",
        "city": "Malelane",
        "country": "ZA"
      },
      {
        "iata": "MZY",
        "name": "Mossel Bay Airport",
        "city": "Mossel Bay",
        "country": "ZA"
      },
      {
        "iata": "MZQ",
        "name": "Mkuze Airport",
        "city": "Mkuze",
        "country": "ZA"
      },
      {
        "iata": "NCS",
        "name": "Newcastle Airport",
        "city": "Newcastle",
        "country": "ZA"
      },
      {
        "iata": "NGL",
        "name": "Ngala Airport",
        "city": "Ngala",
        "country": "ZA"
      },
      {
        "iata": "NLP",
        "name": "Nelspruit Airport",
        "city": "Nelspruit",
        "country": "ZA"
      },
      {
        "iata": "OVG",
        "name": "Overberg Airport",
        "city": "Overberg",
        "country": "ZA"
      },
      {
        "iata": "OUH",
        "name": "Oudtshoorn Airport",
        "city": "Oudtshoorn",
        "country": "ZA"
      },
      {
        "iata": "JNB",
        "name": "O. R. Tambo International Airport",
        "city": "Johannesburg",
        "country": "ZA"
      },
      {
        "iata": "AFD",
        "name": "Port Alfred Airport",
        "city": "Port Alfred",
        "country": "ZA"
      },
      {
        "iata": "PLZ",
        "name": "Port Elizabeth Airport",
        "city": "Port Elizabeth",
        "country": "ZA"
      },
      {
        "iata": "PBZ",
        "name": "Plettenberg Bay Airport",
        "city": "Plettenberg Bay",
        "country": "ZA"
      },
      {
        "iata": "PHW",
        "name": "Hendrik Van Eck Airport",
        "city": "Phalaborwa",
        "country": "ZA"
      },
      {
        "iata": "JOH",
        "name": "Port St Johns Airport",
        "city": "Port St Johns",
        "country": "ZA"
      },
      {
        "iata": "PRK",
        "name": "Prieska Airport",
        "city": "Prieska",
        "country": "ZA"
      },
      {
        "iata": "PZB",
        "name": "Pietermaritzburg Airport",
        "city": "Pietermaritzburg",
        "country": "ZA"
      },
      {
        "iata": "NTY",
        "name": "Pilanesberg International Airport",
        "city": "Pilanesberg",
        "country": "ZA"
      },
      {
        "iata": "PTG",
        "name": "Polokwane International Airport",
        "city": "Potgietersrus",
        "country": "ZA"
      },
      {
        "iata": "PCF",
        "name": "Potchefstroom Airport",
        "city": "Potchefstroom",
        "country": "ZA"
      },
      {
        "iata": "UTW",
        "name": "Queenstown Airport",
        "city": "Queenstown",
        "country": "ZA"
      },
      {
        "iata": "RCB",
        "name": "Richards Bay Airport",
        "city": "Richards Bay",
        "country": "ZA"
      },
      {
        "iata": "RVO",
        "name": "Reivilo Airport",
        "city": "Reivilo",
        "country": "ZA"
      },
      {
        "iata": "ROD",
        "name": "Robertson Airport",
        "city": "Robertson",
        "country": "ZA"
      },
      {
        "iata": "SBU",
        "name": "Springbok Airport",
        "city": "Springbok",
        "country": "ZA"
      },
      {
        "iata": "ZEC",
        "name": "Secunda Airport",
        "city": "Secunda",
        "country": "ZA"
      },
      {
        "iata": "GSS",
        "name": "Sabi Sabi Airport",
        "city": "Belfast",
        "country": "ZA"
      },
      {
        "iata": "SIS",
        "name": "Sishen Airport",
        "city": "Sishen",
        "country": "ZA"
      },
      {
        "iata": "SZK",
        "name": "Skukuza Airport",
        "city": "Skukuza",
        "country": "ZA"
      },
      {
        "iata": "TDT",
        "name": "Tanda Tula Airport",
        "city": "Welverdiend",
        "country": "ZA"
      },
      {
        "iata": "THY",
        "name": "Thohoyandou Airport",
        "city": "Thohoyandou",
        "country": "ZA"
      },
      {
        "iata": "TCU",
        "name": "Thaba Nchu Tar Airport",
        "city": "Homeward",
        "country": "ZA"
      },
      {
        "iata": "LTA",
        "name": "Tzaneen Airport",
        "city": "Tzaneen",
        "country": "ZA"
      },
      {
        "iata": "ULD",
        "name": "Prince Mangosuthu Buthelezi Airport",
        "city": "Ulundi",
        "country": "ZA"
      },
      {
        "iata": "UTN",
        "name": "Pierre Van Ryneveld Airport",
        "city": "Upington",
        "country": "ZA"
      },
      {
        "iata": "ULX",
        "name": "Ulusaba Airport",
        "city": "Ulusaba",
        "country": "ZA"
      },
      {
        "iata": "UTT",
        "name": "K. D. Matanzima Airport",
        "city": "Mthatha",
        "country": "ZA"
      },
      {
        "iata": "VRU",
        "name": "Vryburg Airport",
        "city": "Vyrburg",
        "country": "ZA"
      },
      {
        "iata": "VIR",
        "name": "Virginia Airport",
        "city": "Durban",
        "country": "ZA"
      },
      {
        "iata": "VRE",
        "name": "Vredendal Airport",
        "city": "Vredendal",
        "country": "ZA"
      },
      {
        "iata": "VYD",
        "name": "Vryheid Airport",
        "city": "Vryheid",
        "country": "ZA"
      },
      {
        "iata": "PRY",
        "name": "Wonderboom Airport",
        "city": "Pretoria",
        "country": "ZA"
      },
      {
        "iata": "WKF",
        "name": "Waterkloof Air Force Base",
        "city": "Pretoria",
        "country": "ZA"
      },
      {
        "iata": "WEL",
        "name": "Welkom Airport",
        "city": "Welkom",
        "country": "ZA"
      },
      {
        "iata": "FRW",
        "name": "Francistown Airport",
        "city": "Francistown",
        "country": "BW"
      },
      {
        "iata": "GNZ",
        "name": "Ghanzi Airport",
        "city": "Ghanzi",
        "country": "BW"
      },
      {
        "iata": "JWA",
        "name": "Jwaneng Airport",
        "city": "",
        "country": "BW"
      },
      {
        "iata": "BBK",
        "name": "Kasane Airport",
        "city": "Kasane",
        "country": "BW"
      },
      {
        "iata": "KHW",
        "name": "Khwai River Lodge Airport",
        "city": "Khwai River Lodge",
        "country": "BW"
      },
      {
        "iata": "MUB",
        "name": "Maun Airport",
        "city": "Maun",
        "country": "BW"
      },
      {
        "iata": "ORP",
        "name": "Orapa Airport",
        "city": "",
        "country": "BW"
      },
      {
        "iata": "QPH",
        "name": "Palapye Airport",
        "city": "Palapye",
        "country": "BW"
      },
      {
        "iata": "GBE",
        "name": "Sir Seretse Khama International Airport",
        "city": "Gaborone",
        "country": "BW"
      },
      {
        "iata": "SXN",
        "name": "Sua Pan Airport",
        "city": "",
        "country": "BW"
      },
      {
        "iata": "PKW",
        "name": "Selebi Phikwe Airport",
        "city": "",
        "country": "BW"
      },
      {
        "iata": "SWX",
        "name": "Shakawe Airport",
        "city": "Shakawe",
        "country": "BW"
      },
      {
        "iata": "TLD",
        "name": "Limpopo Valley Airport",
        "city": "Tuli Lodge",
        "country": "BW"
      },
      {
        "iata": "TBY",
        "name": "Tshabong Airport",
        "city": "Tshabong",
        "country": "BW"
      },
      {
        "iata": "BZV",
        "name": "Maya-Maya Airport",
        "city": "Brazzaville",
        "country": "CG"
      },
      {
        "iata": "DJM",
        "name": "Djambala Airport",
        "city": "Djambala",
        "country": "CG"
      },
      {
        "iata": "KNJ",
        "name": "Kindamba Airport",
        "city": "Kindamba",
        "country": "CG"
      },
      {
        "iata": "LCO",
        "name": "Lague Airport",
        "city": "Lague",
        "country": "CG"
      },
      {
        "iata": "MUY",
        "name": "Mouyondzi Airport",
        "city": "Mouyondzi",
        "country": "CG"
      },
      {
        "iata": "SIB",
        "name": "Sibiti Airport",
        "city": "Sibiti",
        "country": "CG"
      },
      {
        "iata": "NKY",
        "name": "Yokangassi Airport",
        "city": "Nkayi",
        "country": "CG"
      },
      {
        "iata": "ANJ",
        "name": "Zanaga Airport",
        "city": "Zanaga",
        "country": "CG"
      },
      {
        "iata": "MSX",
        "name": "Mossendjo Airport",
        "city": "Mossendjo",
        "country": "CG"
      },
      {
        "iata": "BOE",
        "name": "Boundji Airport",
        "city": "Boundji",
        "country": "CG"
      },
      {
        "iata": "EWO",
        "name": "Ewo Airport",
        "city": "Ewo",
        "country": "CG"
      },
      {
        "iata": "GMM",
        "name": "Gamboma Airport",
        "city": "Gamboma",
        "country": "CG"
      },
      {
        "iata": "ION",
        "name": "Impfondo Airport",
        "city": "Impfondo",
        "country": "CG"
      },
      {
        "iata": "KEE",
        "name": "Kelle Airport",
        "city": "Kelle",
        "country": "CG"
      },
      {
        "iata": "MKJ",
        "name": "Makoua Airport",
        "city": "Makoua",
        "country": "CG"
      },
      {
        "iata": "FTX",
        "name": "Owando Airport",
        "city": "Owando",
        "country": "CG"
      },
      {
        "iata": "SOE",
        "name": "Souanke Airport",
        "city": "Souanke",
        "country": "CG"
      },
      {
        "iata": "BTB",
        "name": "Betou Airport",
        "city": "Betou",
        "country": "CG"
      },
      {
        "iata": "OUE",
        "name": "Ouesso Airport",
        "city": "",
        "country": "CG"
      },
      {
        "iata": "KMK",
        "name": "Makabana Airport",
        "city": "Makabana",
        "country": "CG"
      },
      {
        "iata": "DIS",
        "name": "Ngot Nzoungou Airport",
        "city": "Dolisie",
        "country": "CG"
      },
      {
        "iata": "PNR",
        "name": "Pointe Noire Airport",
        "city": "Pointe Noire",
        "country": "CG"
      },
      {
        "iata": "MTS",
        "name": "Matsapha Airport",
        "city": "Manzini",
        "country": "SZ"
      },
      {
        "iata": "CRF",
        "name": "Carnot Airport",
        "city": "Carnot",
        "country": "CF"
      },
      {
        "iata": "BGF",
        "name": "Bangui M'Poko International Airport",
        "city": "Bangui",
        "country": "CF"
      },
      {
        "iata": "BGU",
        "name": "Bangassou Airport",
        "city": "Bangassou",
        "country": "CF"
      },
      {
        "iata": "IRO",
        "name": "Birao Airport",
        "city": "Birao",
        "country": "CF"
      },
      {
        "iata": "BEM",
        "name": "Bossembele Airport",
        "city": "Bossembele",
        "country": "CF"
      },
      {
        "iata": "BBY",
        "name": "Bambari Airport",
        "city": "Bambari",
        "country": "CF"
      },
      {
        "iata": "NDL",
        "name": "N'Dele Airport",
        "city": "N'Dele",
        "country": "CF"
      },
      {
        "iata": "BOP",
        "name": "Bouar Airport",
        "city": "Bouar",
        "country": "CF"
      },
      {
        "iata": "BIV",
        "name": "Bria Airport",
        "city": "Bria",
        "country": "CF"
      },
      {
        "iata": "BSN",
        "name": "Bossangoa Airport",
        "city": "Bossangoa",
        "country": "CF"
      },
      {
        "iata": "BBT",
        "name": "Berberati Airport",
        "city": "Berberati",
        "country": "CF"
      },
      {
        "iata": "ODA",
        "name": "Ouadda Airport",
        "city": "Ouadda",
        "country": "CF"
      },
      {
        "iata": "AIG",
        "name": "Yalinga Airport",
        "city": "Yalinga",
        "country": "CF"
      },
      {
        "iata": "IMO",
        "name": "Zemio Airport",
        "city": "Zemio",
        "country": "CF"
      },
      {
        "iata": "MKI",
        "name": "M'Boki Airport",
        "city": "Mboki",
        "country": "CF"
      },
      {
        "iata": "BTG",
        "name": "Batangafo Airport",
        "city": "Batangafo",
        "country": "CF"
      },
      {
        "iata": "GDI",
        "name": "Gordil Airport",
        "city": "Melle",
        "country": "CF"
      },
      {
        "iata": "BMF",
        "name": "Bakouma Airport",
        "city": "Bakouma",
        "country": "CF"
      },
      {
        "iata": "ODJ",
        "name": "Ouanda Djalle Airport",
        "city": "Ouanda Djalle",
        "country": "CF"
      },
      {
        "iata": "RFA",
        "name": "Rafai Airport",
        "city": "Rafai",
        "country": "CF"
      },
      {
        "iata": "BCF",
        "name": "Bouca Airport",
        "city": "Bouca",
        "country": "CF"
      },
      {
        "iata": "BOZ",
        "name": "Bozoum Airport",
        "city": "Bozoum",
        "country": "CF"
      },
      {
        "iata": "BSG",
        "name": "Bata Airport",
        "city": "",
        "country": "GQ"
      },
      {
        "iata": "SSG",
        "name": "Malabo Airport",
        "city": "Malabo",
        "country": "GQ"
      },
      {
        "iata": "ASI",
        "name": "RAF Ascension Island",
        "city": "Ascension Island",
        "country": "SH"
      },
      {
        "iata": "MRU",
        "name": "Sir Seewoosagur Ramgoolam International Airport",
        "city": "Port Louis",
        "country": "MU"
      },
      {
        "iata": "RRG",
        "name": "Sir Charles Gaetan Duval Airport",
        "city": "Port Mathurin",
        "country": "MU"
      },
      {
        "iata": "NKW",
        "name": "Diego Garcia Naval Support Facility",
        "city": "Diego Garcia",
        "country": "IO"
      },
      {
        "iata": "NKS",
        "name": "Nkongsamba Airport",
        "city": "Nkongsamba",
        "country": "CM"
      },
      {
        "iata": "KBI",
        "name": "Kribi Airport",
        "city": "Kribi",
        "country": "CM"
      },
      {
        "iata": "TKC",
        "name": "Tiko Airport",
        "city": "Tiko",
        "country": "CM"
      },
      {
        "iata": "DLA",
        "name": "Douala International Airport",
        "city": "Douala",
        "country": "CM"
      },
      {
        "iata": "MMF",
        "name": "Mamfe Airport",
        "city": "Mamfe",
        "country": "CM"
      },
      {
        "iata": "BLC",
        "name": "Bali Airport",
        "city": "Bali",
        "country": "CM"
      },
      {
        "iata": "KLE",
        "name": "Kaele Airport",
        "city": "Kaele",
        "country": "CM"
      },
      {
        "iata": "OUR",
        "name": "Batouri Airport",
        "city": "Batouri",
        "country": "CM"
      },
      {
        "iata": "GXX",
        "name": "Yagoua Airport",
        "city": "Yagoua",
        "country": "CM"
      },
      {
        "iata": "MVR",
        "name": "Salak Airport",
        "city": "Maroua",
        "country": "CM"
      },
      {
        "iata": "FOM",
        "name": "Foumban Nkounja Airport",
        "city": "Foumban",
        "country": "CM"
      },
      {
        "iata": "NGE",
        "name": "N'Gaoundere Airport",
        "city": "N'Gaoundere",
        "country": "CM"
      },
      {
        "iata": "BTA",
        "name": "Bertoua Airport",
        "city": "Bertoua",
        "country": "CM"
      },
      {
        "iata": "GOU",
        "name": "Garoua International Airport",
        "city": "Garoua",
        "country": "CM"
      },
      {
        "iata": "DSC",
        "name": "Dschang Airport",
        "city": "Dschang",
        "country": "CM"
      },
      {
        "iata": "BFX",
        "name": "Bafoussam Airport",
        "city": "Bafoussam",
        "country": "CM"
      },
      {
        "iata": "BPC",
        "name": "Bamenda Airport",
        "city": "Bamenda",
        "country": "CM"
      },
      {
        "iata": "EBW",
        "name": "Ebolowa Airport",
        "city": "Ebolowa",
        "country": "CM"
      },
      {
        "iata": "YAO",
        "name": "Yaounde Airport",
        "city": "Yaounde",
        "country": "CM"
      },
      {
        "iata": "NSI",
        "name": "Yaounde Nsimalen International Airport",
        "city": "Yaounde",
        "country": "CM"
      },
      {
        "iata": "MMQ",
        "name": "Mbala Airport",
        "city": "Mbala",
        "country": "ZM"
      },
      {
        "iata": "CIP",
        "name": "Chipata Airport",
        "city": "Chipata",
        "country": "ZM"
      },
      {
        "iata": "JEK",
        "name": "Jeki Airstrip",
        "city": "Lower Zambezi National Park",
        "country": "ZM"
      },
      {
        "iata": "ZKP",
        "name": "Kasompe Airport",
        "city": "Kasompe",
        "country": "ZM"
      },
      {
        "iata": "LUN",
        "name": "Kenneth Kaunda International Airport",
        "city": "Lusaka",
        "country": "ZM"
      },
      {
        "iata": "KLB",
        "name": "Kalabo Airport",
        "city": "Kalabo",
        "country": "ZM"
      },
      {
        "iata": "KMZ",
        "name": "Kaoma Airport",
        "city": "Kaoma",
        "country": "ZM"
      },
      {
        "iata": "KAA",
        "name": "Kasama Airport",
        "city": "Kasama",
        "country": "ZM"
      },
      {
        "iata": "ZKB",
        "name": "Kasaba Bay Airport",
        "city": "Kasaba Bay",
        "country": "ZM"
      },
      {
        "iata": "LVI",
        "name": "Livingstone Airport",
        "city": "Livingstone",
        "country": "ZM"
      },
      {
        "iata": "LXU",
        "name": "Lukulu Airport",
        "city": "Lukulu",
        "country": "ZM"
      },
      {
        "iata": "MNS",
        "name": "Mansa Airport",
        "city": "Mansa",
        "country": "ZM"
      },
      {
        "iata": "MFU",
        "name": "Mfuwe Airport",
        "city": "Mfuwe",
        "country": "ZM"
      },
      {
        "iata": "MNR",
        "name": "Mongu Airport",
        "city": "Mongu",
        "country": "ZM"
      },
      {
        "iata": "ZGM",
        "name": "Ngoma Airport",
        "city": "Ngoma",
        "country": "ZM"
      },
      {
        "iata": "NLA",
        "name": "Ndola Airport",
        "city": "Ndola",
        "country": "ZM"
      },
      {
        "iata": "SXG",
        "name": "Senanga Airport",
        "city": "Senanga",
        "country": "ZM"
      },
      {
        "iata": "KIW",
        "name": "Southdowns Airport",
        "city": "Kitwe",
        "country": "ZM"
      },
      {
        "iata": "SJQ",
        "name": "Sesheke Airport",
        "city": "Sesheke",
        "country": "ZM"
      },
      {
        "iata": "SLI",
        "name": "Solwesi Airport",
        "city": "Solwesi",
        "country": "ZM"
      },
      {
        "iata": "BBZ",
        "name": "Zambezi Airport",
        "city": "Zambezi",
        "country": "ZM"
      },
      {
        "iata": "HAH",
        "name": "Prince Said Ibrahim International Airport",
        "city": "Moroni",
        "country": "KM"
      },
      {
        "iata": "NWA",
        "name": "Moheli Bandar Es Eslam Airport",
        "city": "",
        "country": "KM"
      },
      {
        "iata": "YVA",
        "name": "Iconi Airport",
        "city": "Moroni",
        "country": "KM"
      },
      {
        "iata": "AJN",
        "name": "Ouani Airport",
        "city": "Ouani",
        "country": "KM"
      },
      {
        "iata": "DZA",
        "name": "Dzaoudzi Pamandzi International Airport",
        "city": "Dzaoudzi",
        "country": "YT"
      },
      {
        "iata": "RUN",
        "name": "Roland Garros Airport",
        "city": "St Denis",
        "country": "RE"
      },
      {
        "iata": "ZSE",
        "name": "Pierrefonds Airport",
        "city": "St Pierre",
        "country": "RE"
      },
      {
        "iata": "WML",
        "name": "Malaimbandy Airport",
        "city": "Malaimbandy",
        "country": "MG"
      },
      {
        "iata": "ATJ",
        "name": "Antsirabe Airport",
        "city": "Antsirabe",
        "country": "MG"
      },
      {
        "iata": "WAQ",
        "name": "Antsalova Airport",
        "city": "Antsalova",
        "country": "MG"
      },
      {
        "iata": "VVB",
        "name": "Mahanoro Airport",
        "city": "Mahanoro",
        "country": "MG"
      },
      {
        "iata": "TNR",
        "name": "Ivato Airport",
        "city": "Antananarivo",
        "country": "MG"
      },
      {
        "iata": "JVA",
        "name": "Ankavandra Airport",
        "city": "Ankavandra",
        "country": "MG"
      },
      {
        "iata": "BMD",
        "name": "Belo sur Tsiribihina Airport",
        "city": "Belo sur Tsiribihina",
        "country": "MG"
      },
      {
        "iata": "ZVA",
        "name": "Miandrivazo Airport",
        "city": "",
        "country": "MG"
      },
      {
        "iata": "MXT",
        "name": "Maintirano Airport",
        "city": "Maintirano",
        "country": "MG"
      },
      {
        "iata": "ILK",
        "name": "Atsinanana Airport",
        "city": "Ilaka",
        "country": "MG"
      },
      {
        "iata": "TVA",
        "name": "Morafenobe Airport",
        "city": "Morafenobe",
        "country": "MG"
      },
      {
        "iata": "SMS",
        "name": "Sainte Marie Airport",
        "city": "",
        "country": "MG"
      },
      {
        "iata": "TMM",
        "name": "Toamasina Airport",
        "city": "",
        "country": "MG"
      },
      {
        "iata": "WTA",
        "name": "Tambohorano Airport",
        "city": "Tambohorano",
        "country": "MG"
      },
      {
        "iata": "MOQ",
        "name": "Morondava Airport",
        "city": "",
        "country": "MG"
      },
      {
        "iata": "WTS",
        "name": "Tsiroanomandidy Airport",
        "city": "Tsiroanomandidy",
        "country": "MG"
      },
      {
        "iata": "VAT",
        "name": "Vatomandry Airport",
        "city": "Vatomandry",
        "country": "MG"
      },
      {
        "iata": "WAM",
        "name": "Ambatondrazaka Airport",
        "city": "Ambatondrazaka",
        "country": "MG"
      },
      {
        "iata": "DIE",
        "name": "Arrachart Airport",
        "city": "",
        "country": "MG"
      },
      {
        "iata": "WMR",
        "name": "Mananara Nord Airport",
        "city": "Mananara Nord",
        "country": "MG"
      },
      {
        "iata": "ZWA",
        "name": "Andapa Airport",
        "city": "",
        "country": "MG"
      },
      {
        "iata": "AMB",
        "name": "Ambilobe Airport",
        "city": "",
        "country": "MG"
      },
      {
        "iata": "WBD",
        "name": "Avaratra Airport",
        "city": "Befandriana",
        "country": "MG"
      },
      {
        "iata": "WPB",
        "name": "Port Berge Airport",
        "city": "Port Berge",
        "country": "MG"
      },
      {
        "iata": "ANM",
        "name": "Antsirabato Airport",
        "city": "",
        "country": "MG"
      },
      {
        "iata": "IVA",
        "name": "Ambanja Airport",
        "city": "Ambanja",
        "country": "MG"
      },
      {
        "iata": "HVA",
        "name": "Analalava Airport",
        "city": "",
        "country": "MG"
      },
      {
        "iata": "MJN",
        "name": "Amborovy Airport",
        "city": "",
        "country": "MG"
      },
      {
        "iata": "NOS",
        "name": "Fascene Airport",
        "city": "Nosy Be",
        "country": "MG"
      },
      {
        "iata": "DWB",
        "name": "Soalala Airport",
        "city": "Soalala",
        "country": "MG"
      },
      {
        "iata": "WMP",
        "name": "Mampikony Airport",
        "city": "Mampikony",
        "country": "MG"
      },
      {
        "iata": "BPY",
        "name": "Besalampy Airport",
        "city": "",
        "country": "MG"
      },
      {
        "iata": "WMN",
        "name": "Maroantsetra Airport",
        "city": "",
        "country": "MG"
      },
      {
        "iata": "SVB",
        "name": "Sambava Airport",
        "city": "",
        "country": "MG"
      },
      {
        "iata": "TTS",
        "name": "Tsaratanana Airport",
        "city": "Tsaratanana",
        "country": "MG"
      },
      {
        "iata": "VOH",
        "name": "Vohimarina Airport",
        "city": "",
        "country": "MG"
      },
      {
        "iata": "WAI",
        "name": "Ambalabe Airport",
        "city": "Antsohihy",
        "country": "MG"
      },
      {
        "iata": "WMA",
        "name": "Mandritsara Airport",
        "city": "Mandritsara",
        "country": "MG"
      },
      {
        "iata": "WBO",
        "name": "Antsoa Airport",
        "city": "Beroroha",
        "country": "MG"
      },
      {
        "iata": "WMD",
        "name": "Mandabe Airport",
        "city": "Mandabe",
        "country": "MG"
      },
      {
        "iata": "FTU",
        "name": "Tolanaro Airport",
        "city": "Tolanaro",
        "country": "MG"
      },
      {
        "iata": "WFI",
        "name": "Fianarantsoa Airport",
        "city": "",
        "country": "MG"
      },
      {
        "iata": "RVA",
        "name": "Farafangana Airport",
        "city": "",
        "country": "MG"
      },
      {
        "iata": "IHO",
        "name": "Ihosy Airport",
        "city": "Ihosy",
        "country": "MG"
      },
      {
        "iata": "MJA",
        "name": "Manja Airport",
        "city": "Manja",
        "country": "MG"
      },
      {
        "iata": "WVK",
        "name": "Manakara Airport",
        "city": "",
        "country": "MG"
      },
      {
        "iata": "OVA",
        "name": "Bekily Airport",
        "city": "Bekily",
        "country": "MG"
      },
      {
        "iata": "MNJ",
        "name": "Mananjary Airport",
        "city": "",
        "country": "MG"
      },
      {
        "iata": "TDV",
        "name": "Samangoky Airport",
        "city": "Tanandava",
        "country": "MG"
      },
      {
        "iata": "MXM",
        "name": "Morombe Airport",
        "city": "",
        "country": "MG"
      },
      {
        "iata": "TLE",
        "name": "Toliara Airport",
        "city": "",
        "country": "MG"
      },
      {
        "iata": "VND",
        "name": "Vangaindrano Airport",
        "city": "Vangaindrano",
        "country": "MG"
      },
      {
        "iata": "BKU",
        "name": "Betioky Airport",
        "city": "Betioky",
        "country": "MG"
      },
      {
        "iata": "AMP",
        "name": "Ampanihy Airport",
        "city": "Ampanihy",
        "country": "MG"
      },
      {
        "iata": "WAK",
        "name": "Ankazoabo Airport",
        "city": "Ankazoabo",
        "country": "MG"
      },
      {
        "iata": "AZZ",
        "name": "Ambriz Airport",
        "city": "Ambriz",
        "country": "AO"
      },
      {
        "iata": "SSY",
        "name": "Mbanza Congo Airport",
        "city": "Mbanza Congo",
        "country": "AO"
      },
      {
        "iata": "BUG",
        "name": "Benguela Airport",
        "city": "Benguela",
        "country": "AO"
      },
      {
        "iata": "CAB",
        "name": "Cabinda Airport",
        "city": "Cabinda",
        "country": "AO"
      },
      {
        "iata": "CFF",
        "name": "Cafunfo Airport",
        "city": "Cafunfo",
        "country": "AO"
      },
      {
        "iata": "PGI",
        "name": "Chitato Airport",
        "city": "Chitato",
        "country": "AO"
      },
      {
        "iata": "CBT",
        "name": "Catumbela Airport",
        "city": "Catumbela",
        "country": "AO"
      },
      {
        "iata": "CTI",
        "name": "Cuito Cuanavale Airport",
        "city": "Cuito Cuanavale",
        "country": "AO"
      },
      {
        "iata": "CXM",
        "name": "Camaxilo Airport",
        "city": "Camaxilo",
        "country": "AO"
      },
      {
        "iata": "CAV",
        "name": "Cazombo Airport",
        "city": "Cazombo",
        "country": "AO"
      },
      {
        "iata": "DUE",
        "name": "Dundo Airport",
        "city": "Chitato",
        "country": "AO"
      },
      {
        "iata": "VPE",
        "name": "Ngjiva Pereira Airport",
        "city": "Ngiva",
        "country": "AO"
      },
      {
        "iata": "NOV",
        "name": "Nova Lisboa Airport",
        "city": "Huambo",
        "country": "AO"
      },
      {
        "iata": "SVP",
        "name": "Kuito Airport",
        "city": "Kuito",
        "country": "AO"
      },
      {
        "iata": "LAD",
        "name": "Quatro De Fevereiro Airport",
        "city": "Luanda",
        "country": "AO"
      },
      {
        "iata": "MEG",
        "name": "Malanje Airport",
        "city": "Malanje",
        "country": "AO"
      },
      {
        "iata": "SPP",
        "name": "Menongue Airport",
        "city": "Menongue",
        "country": "AO"
      },
      {
        "iata": "MSZ",
        "name": "Namibe Airport",
        "city": "Namibe",
        "country": "AO"
      },
      {
        "iata": "GXG",
        "name": "Negage Airport",
        "city": "Negage",
        "country": "AO"
      },
      {
        "iata": "PBN",
        "name": "Porto Amboim Airport",
        "city": "Port Amboim",
        "country": "AO"
      },
      {
        "iata": "VHC",
        "name": "Saurimo Airport",
        "city": "Saurimo",
        "country": "AO"
      },
      {
        "iata": "SZA",
        "name": "Soyo Airport",
        "city": "Soyo",
        "country": "AO"
      },
      {
        "iata": "NDD",
        "name": "Sumbe Airport",
        "city": "Sumbe",
        "country": "AO"
      },
      {
        "iata": "UAL",
        "name": "Luau Airport",
        "city": "Luau",
        "country": "AO"
      },
      {
        "iata": "SDD",
        "name": "Lubango Airport",
        "city": "Lubango",
        "country": "AO"
      },
      {
        "iata": "LUO",
        "name": "Luena Airport",
        "city": "Luena",
        "country": "AO"
      },
      {
        "iata": "UGO",
        "name": "Uige Airport",
        "city": "Uige",
        "country": "AO"
      },
      {
        "iata": "CEO",
        "name": "Waco Kungo Airport",
        "city": "Waco Kungo",
        "country": "AO"
      },
      {
        "iata": "XGN",
        "name": "Xangongo Airport",
        "city": "Xangongo",
        "country": "AO"
      },
      {
        "iata": "ARZ",
        "name": "N'zeto Airport",
        "city": "N'zeto",
        "country": "AO"
      },
      {
        "iata": "BGB",
        "name": "Booue Airport",
        "city": "Booue",
        "country": "GA"
      },
      {
        "iata": "KDN",
        "name": "Ndende Airport",
        "city": "Ndende",
        "country": "GA"
      },
      {
        "iata": "FOU",
        "name": "Fougamou Airport",
        "city": "Fougamou",
        "country": "GA"
      },
      {
        "iata": "MBC",
        "name": "M'Bigou Airport",
        "city": "M'Bigou",
        "country": "GA"
      },
      {
        "iata": "MGX",
        "name": "Moabi Airport",
        "city": "Moabi",
        "country": "GA"
      },
      {
        "iata": "KDJ",
        "name": "Ville Airport",
        "city": "N'Djole",
        "country": "GA"
      },
      {
        "iata": "KOU",
        "name": "Koulamoutou Airport",
        "city": "Koulamoutou",
        "country": "GA"
      },
      {
        "iata": "MJL",
        "name": "Mouilla Ville Airport",
        "city": "Mouila",
        "country": "GA"
      },
      {
        "iata": "OYE",
        "name": "Oyem Airport",
        "city": "Oyem",
        "country": "GA"
      },
      {
        "iata": "OKN",
        "name": "Okondja Airport",
        "city": "Okondja",
        "country": "GA"
      },
      {
        "iata": "LBQ",
        "name": "Lambarene Airport",
        "city": "Lambarene",
        "country": "GA"
      },
      {
        "iata": "MVX",
        "name": "Minvoul Airport",
        "city": "Minvoul",
        "country": "GA"
      },
      {
        "iata": "BMM",
        "name": "Bitam Airport",
        "city": "Bitam",
        "country": "GA"
      },
      {
        "iata": "MFF",
        "name": "Moanda Airport",
        "city": "Moanda",
        "country": "GA"
      },
      {
        "iata": "MKB",
        "name": "Mekambo Airport",
        "city": "Mekambo",
        "country": "GA"
      },
      {
        "iata": "POG",
        "name": "Port Gentil Airport",
        "city": "Port Gentil",
        "country": "GA"
      },
      {
        "iata": "OMB",
        "name": "Omboue Hopital Airport",
        "city": "Omboue",
        "country": "GA"
      },
      {
        "iata": "MKU",
        "name": "Makokou Airport",
        "city": "Makokou",
        "country": "GA"
      },
      {
        "iata": "LBV",
        "name": "Leon M Ba Airport",
        "city": "Libreville",
        "country": "GA"
      },
      {
        "iata": "MZC",
        "name": "Mitzic Airport",
        "city": "Mitzic",
        "country": "GA"
      },
      {
        "iata": "MVB",
        "name": "M'Vengue El Hadj Omar Bongo Ondimba International Airport",
        "city": "Franceville",
        "country": "GA"
      },
      {
        "iata": "LTL",
        "name": "Lastourville Airport",
        "city": "Lastourville",
        "country": "GA"
      },
      {
        "iata": "ZKM",
        "name": "Sette Cama Airport",
        "city": "Sette Cama",
        "country": "GA"
      },
      {
        "iata": "TCH",
        "name": "Tchibanga Airport",
        "city": "Tchibanga",
        "country": "GA"
      },
      {
        "iata": "MYB",
        "name": "Mayumba Airport",
        "city": "Mayumba",
        "country": "GA"
      },
      {
        "iata": "PCP",
        "name": "Principe Airport",
        "city": "",
        "country": "ST"
      },
      {
        "iata": "TMS",
        "name": "Sao Tome International Airport",
        "city": "Sao Tome",
        "country": "ST"
      },
      {
        "iata": "ANO",
        "name": "Angoche Airport",
        "city": "Angoche",
        "country": "MZ"
      },
      {
        "iata": "BEW",
        "name": "Beira Airport",
        "city": "Beira",
        "country": "MZ"
      },
      {
        "iata": "FXO",
        "name": "Cuamba Airport",
        "city": "Cuamba",
        "country": "MZ"
      },
      {
        "iata": "VPY",
        "name": "Chimoio Airport",
        "city": "Chimoio",
        "country": "MZ"
      },
      {
        "iata": "IHC",
        "name": "Inhaca Airport",
        "city": "Inhaca",
        "country": "MZ"
      },
      {
        "iata": "INH",
        "name": "Inhambane Airport",
        "city": "Inhambabe",
        "country": "MZ"
      },
      {
        "iata": "VXC",
        "name": "Lichinga Airport",
        "city": "Lichinga",
        "country": "MZ"
      },
      {
        "iata": "LFB",
        "name": "Lumbo Airport",
        "city": "Lumbo",
        "country": "MZ"
      },
      {
        "iata": "MPM",
        "name": "Maputo Airport",
        "city": "Maputo",
        "country": "MZ"
      },
      {
        "iata": "MUD",
        "name": "Mueda Airport",
        "city": "Mueda",
        "country": "MZ"
      },
      {
        "iata": "MZB",
        "name": "Mocimboa da Praia Airport",
        "city": "Mocimboa da Praia",
        "country": "MZ"
      },
      {
        "iata": "MNC",
        "name": "Nacala Airport",
        "city": "Nacala",
        "country": "MZ"
      },
      {
        "iata": "APL",
        "name": "Nampula Airport",
        "city": "Nampula",
        "country": "MZ"
      },
      {
        "iata": "POL",
        "name": "Pemba Airport",
        "city": "Pemba / Porto Amelia",
        "country": "MZ"
      },
      {
        "iata": "UEL",
        "name": "Quelimane Airport",
        "city": "Quelimane",
        "country": "MZ"
      },
      {
        "iata": "TET",
        "name": "Chingozi Airport",
        "city": "Tete",
        "country": "MZ"
      },
      {
        "iata": "VNX",
        "name": "Vilankulo Airport",
        "city": "Vilanculo",
        "country": "MZ"
      },
      {
        "iata": "VJB",
        "name": "Xai-Xai Airport",
        "city": "Xai-Xai",
        "country": "MZ"
      },
      {
        "iata": "DES",
        "name": "Desroches Airport",
        "city": "Desroches Island",
        "country": "SC"
      },
      {
        "iata": "SEZ",
        "name": "Seychelles International Airport",
        "city": "Mahe Island",
        "country": "SC"
      },
      {
        "iata": "PRI",
        "name": "Praslin Airport",
        "city": "Praslin Island",
        "country": "SC"
      },
      {
        "iata": "BDI",
        "name": "Bird Island Airport",
        "city": "Bird Island",
        "country": "SC"
      },
      {
        "iata": "DEI",
        "name": "Denis Island Airport",
        "city": "Denis Island",
        "country": "SC"
      },
      {
        "iata": "FRK",
        "name": "Fregate Island Airport",
        "city": "Fregate Island",
        "country": "SC"
      },
      {
        "iata": "SRH",
        "name": "Sarh Airport",
        "city": "Sarh",
        "country": "TD"
      },
      {
        "iata": "OGR",
        "name": "Bongor Airport",
        "city": "Bongor",
        "country": "TD"
      },
      {
        "iata": "AEH",
        "name": "Abeche Airport",
        "city": "",
        "country": "TD"
      },
      {
        "iata": "MQQ",
        "name": "Moundou Airport",
        "city": "",
        "country": "TD"
      },
      {
        "iata": "LTC",
        "name": "Lai Airport",
        "city": "Lai",
        "country": "TD"
      },
      {
        "iata": "ATV",
        "name": "Ati Airport",
        "city": "Ati",
        "country": "TD"
      },
      {
        "iata": "NDJ",
        "name": "N'Djamena International Airport",
        "city": "N'Djamena",
        "country": "TD"
      },
      {
        "iata": "BKR",
        "name": "Bokoro Airport",
        "city": "Bokoro",
        "country": "TD"
      },
      {
        "iata": "OTC",
        "name": "Bol Airport",
        "city": "Bol",
        "country": "TD"
      },
      {
        "iata": "MVO",
        "name": "Mongo Airport",
        "city": "Mongo",
        "country": "TD"
      },
      {
        "iata": "AMC",
        "name": "Am Timan Airport",
        "city": "Am Timan",
        "country": "TD"
      },
      {
        "iata": "PLF",
        "name": "Pala Airport",
        "city": "Pala",
        "country": "TD"
      },
      {
        "iata": "OUT",
        "name": "Bousso Airport",
        "city": "Bousso",
        "country": "TD"
      },
      {
        "iata": "AMO",
        "name": "Mao Airport",
        "city": "Mao",
        "country": "TD"
      },
      {
        "iata": "FYT",
        "name": "Faya Largeau Airport",
        "city": "",
        "country": "TD"
      },
      {
        "iata": "BUQ",
        "name": "Joshua Mqabuko Nkomo International Airport",
        "city": "Bulawayo",
        "country": "ZW"
      },
      {
        "iata": "CHJ",
        "name": "Chipinge Airport",
        "city": "Chipinge",
        "country": "ZW"
      },
      {
        "iata": "BFO",
        "name": "Buffalo Range Airport",
        "city": "Chiredzi",
        "country": "ZW"
      },
      {
        "iata": "VFA",
        "name": "Victoria Falls International Airport",
        "city": "Victoria Falls",
        "country": "ZW"
      },
      {
        "iata": "HRE",
        "name": "Harare International Airport",
        "city": "Harare",
        "country": "ZW"
      },
      {
        "iata": "KAB",
        "name": "Kariba International Airport",
        "city": "Kariba",
        "country": "ZW"
      },
      {
        "iata": "UTA",
        "name": "Mutare Airport",
        "city": "",
        "country": "ZW"
      },
      {
        "iata": "MVZ",
        "name": "Masvingo International Airport",
        "city": "Masvingo",
        "country": "ZW"
      },
      {
        "iata": "GWE",
        "name": "Thornhill Air Base",
        "city": "Gweru",
        "country": "ZW"
      },
      {
        "iata": "HWN",
        "name": "Hwange National Park Airport",
        "city": "Hwange",
        "country": "ZW"
      },
      {
        "iata": "WKI",
        "name": "Hwange Airport",
        "city": "Hwange",
        "country": "ZW"
      },
      {
        "iata": "CEH",
        "name": "Chelinda Malawi Airport",
        "city": "",
        "country": "MW"
      },
      {
        "iata": "BLZ",
        "name": "Chileka International Airport",
        "city": "Blantyre",
        "country": "MW"
      },
      {
        "iata": "CMK",
        "name": "Club Makokola Airport",
        "city": "Club Makokola",
        "country": "MW"
      },
      {
        "iata": "DWA",
        "name": "Dwangwa Airport",
        "city": "Dwangwa",
        "country": "MW"
      },
      {
        "iata": "KGJ",
        "name": "Karonga Airport",
        "city": "Karonga",
        "country": "MW"
      },
      {
        "iata": "KBQ",
        "name": "Kasungu Airport",
        "city": "Kasungu",
        "country": "MW"
      },
      {
        "iata": "LLW",
        "name": "Lilongwe International Airport",
        "city": "Lilongwe",
        "country": "MW"
      },
      {
        "iata": "LIX",
        "name": "Likoma Island Airport",
        "city": "Likoma Island",
        "country": "MW"
      },
      {
        "iata": "MAI",
        "name": "Mangochi Airport",
        "city": "Mangochi",
        "country": "MW"
      },
      {
        "iata": "MYZ",
        "name": "Monkey Bay Airport",
        "city": "Monkey Bay",
        "country": "MW"
      },
      {
        "iata": "LMB",
        "name": "Salima Airport",
        "city": "Salima",
        "country": "MW"
      },
      {
        "iata": "ZZU",
        "name": "Mzuzu Airport",
        "city": "Mzuzu",
        "country": "MW"
      },
      {
        "iata": "LEF",
        "name": "Lebakeng Airport",
        "city": "Lebakeng",
        "country": "LS"
      },
      {
        "iata": "LRB",
        "name": "Leribe Airport",
        "city": "Leribe",
        "country": "LS"
      },
      {
        "iata": "LES",
        "name": "Lesobeng Airport",
        "city": "Lesobeng",
        "country": "LS"
      },
      {
        "iata": "MFC",
        "name": "Mafeteng Airport",
        "city": "Mafeteng",
        "country": "LS"
      },
      {
        "iata": "MKH",
        "name": "Mokhotlong Airport",
        "city": "Mokhotlong",
        "country": "LS"
      },
      {
        "iata": "MSU",
        "name": "Moshoeshoe I International Airport",
        "city": "Maseru",
        "country": "LS"
      },
      {
        "iata": "NKU",
        "name": "Nkaus Airport",
        "city": "Nkaus",
        "country": "LS"
      },
      {
        "iata": "PEL",
        "name": "Pelaneng Airport",
        "city": "Pelaneng",
        "country": "LS"
      },
      {
        "iata": "UTG",
        "name": "Quthing Airport",
        "city": "Quthing",
        "country": "LS"
      },
      {
        "iata": "UNE",
        "name": "Qacha's Nek Airport",
        "city": "Qacha's Nek",
        "country": "LS"
      },
      {
        "iata": "SHK",
        "name": "Sehonghong Airport",
        "city": "Sehonghong",
        "country": "LS"
      },
      {
        "iata": "SKQ",
        "name": "Sekakes Airport",
        "city": "Sekakes",
        "country": "LS"
      },
      {
        "iata": "SOK",
        "name": "Semonkong Airport",
        "city": "Semonkong",
        "country": "LS"
      },
      {
        "iata": "SHZ",
        "name": "Seshutes Airport",
        "city": "Seshutes",
        "country": "LS"
      },
      {
        "iata": "THB",
        "name": "Thaba-Tseka Airport",
        "city": "Thaba-Tseka",
        "country": "LS"
      },
      {
        "iata": "TKO",
        "name": "Tlokoeng Airport",
        "city": "Tlokoeng",
        "country": "LS"
      },
      {
        "iata": "ADI",
        "name": "Arandis Airport",
        "city": "Arandis",
        "country": "NA"
      },
      {
        "iata": "GOG",
        "name": "Gobabis Airport",
        "city": "Gobabis",
        "country": "NA"
      },
      {
        "iata": "GFY",
        "name": "Grootfontein Airport",
        "city": "Grootfontein",
        "country": "NA"
      },
      {
        "iata": "MPA",
        "name": "Katima Mulilo Airport",
        "city": "Mpacha",
        "country": "NA"
      },
      {
        "iata": "KMP",
        "name": "Keetmanshoop Airport",
        "city": "Keetmanshoop",
        "country": "NA"
      },
      {
        "iata": "LUD",
        "name": "Luderitz Airport",
        "city": "Luderitz",
        "country": "NA"
      },
      {
        "iata": "OKU",
        "name": "Mokuti Lodge Airport",
        "city": "Mokuti Lodge",
        "country": "NA"
      },
      {
        "iata": "NNI",
        "name": "Namutoni Airport",
        "city": "Namutoni",
        "country": "NA"
      },
      {
        "iata": "OND",
        "name": "Ondangwa Airport",
        "city": "Ondangwa",
        "country": "NA"
      },
      {
        "iata": "OMG",
        "name": "Omega Airport",
        "city": "Omega",
        "country": "NA"
      },
      {
        "iata": "OMD",
        "name": "Oranjemund Airport",
        "city": "Oranjemund",
        "country": "NA"
      },
      {
        "iata": "OKF",
        "name": "Okaukuejo Airport",
        "city": "Okaukuejo",
        "country": "NA"
      },
      {
        "iata": "NDU",
        "name": "Rundu Airport",
        "city": "Rundu",
        "country": "NA"
      },
      {
        "iata": "SWP",
        "name": "Swakopmund Airport",
        "city": "Swakopmund",
        "country": "NA"
      },
      {
        "iata": "TSB",
        "name": "Tsumeb Airport",
        "city": "Tsumeb",
        "country": "NA"
      },
      {
        "iata": "WVB",
        "name": "Walvis Bay Airport",
        "city": "Walvis Bay",
        "country": "NA"
      },
      {
        "iata": "ERS",
        "name": "Eros Airport",
        "city": "Windhoek",
        "country": "NA"
      },
      {
        "iata": "WDH",
        "name": "Hosea Kutako International Airport",
        "city": "Windhoek",
        "country": "NA"
      },
      {
        "iata": "FIH",
        "name": "Ndjili International Airport",
        "city": "Kinshasa",
        "country": "CD"
      },
      {
        "iata": "NLO",
        "name": "Ndolo Airport",
        "city": "",
        "country": "CD"
      },
      {
        "iata": "MNB",
        "name": "Muanda Airport",
        "city": "",
        "country": "CD"
      },
      {
        "iata": "BOA",
        "name": "Boma Airport",
        "city": "Boma",
        "country": "CD"
      },
      {
        "iata": "LZI",
        "name": "Luozi Airport",
        "city": "Luozi",
        "country": "CD"
      },
      {
        "iata": "MAT",
        "name": "Tshimpi Airport",
        "city": "Matadi",
        "country": "CD"
      },
      {
        "iata": "NKL",
        "name": "Nkolo Fuma Airport",
        "city": "Nkolo Fuma",
        "country": "CD"
      },
      {
        "iata": "INO",
        "name": "Inongo Airport",
        "city": "Inongo",
        "country": "CD"
      },
      {
        "iata": "NIO",
        "name": "Nioki Airport",
        "city": "Nioki",
        "country": "CD"
      },
      {
        "iata": "FDU",
        "name": "Bandundu Airport",
        "city": "",
        "country": "CD"
      },
      {
        "iata": "KRZ",
        "name": "Basango Mboliasa Airport",
        "city": "Kiri",
        "country": "CD"
      },
      {
        "iata": "KKW",
        "name": "Kikwit Airport",
        "city": "",
        "country": "CD"
      },
      {
        "iata": "IDF",
        "name": "Idiofa Airport",
        "city": "Idiofa",
        "country": "CD"
      },
      {
        "iata": "LUS",
        "name": "Lusanga Airport",
        "city": "Lusanga",
        "country": "CD"
      },
      {
        "iata": "MSM",
        "name": "Masi Manimba Airport",
        "city": "Masi Manimba",
        "country": "CD"
      },
      {
        "iata": "MDK",
        "name": "Mbandaka Airport",
        "city": "Mbandaka",
        "country": "CD"
      },
      {
        "iata": "BSU",
        "name": "Basankusu Airport",
        "city": "Basankusu",
        "country": "CD"
      },
      {
        "iata": "LIE",
        "name": "Libenge Airport",
        "city": "Libenge",
        "country": "CD"
      },
      {
        "iata": "BDT",
        "name": "Gbadolite Airport",
        "city": "",
        "country": "CD"
      },
      {
        "iata": "GMA",
        "name": "Gemena Airport",
        "city": "Gemena",
        "country": "CD"
      },
      {
        "iata": "KLI",
        "name": "Kotakoli Airport",
        "city": "",
        "country": "CD"
      },
      {
        "iata": "BMB",
        "name": "Bumbar Airport",
        "city": "Bumbar",
        "country": "CD"
      },
      {
        "iata": "LIQ",
        "name": "Lisala Airport",
        "city": "",
        "country": "CD"
      },
      {
        "iata": "BNB",
        "name": "Boende Airport",
        "city": "Boende",
        "country": "CD"
      },
      {
        "iata": "IKL",
        "name": "Ikela Airport",
        "city": "Ikela",
        "country": "CD"
      },
      {
        "iata": "FKI",
        "name": "Bangoka International Airport",
        "city": "Kisangani",
        "country": "CD"
      },
      {
        "iata": "YAN",
        "name": "Yangambi Airport",
        "city": "Yangambi",
        "country": "CD"
      },
      {
        "iata": "IRP",
        "name": "Matari Airport",
        "city": "",
        "country": "CD"
      },
      {
        "iata": "BUX",
        "name": "Bunia Airport",
        "city": "",
        "country": "CD"
      },
      {
        "iata": "BZU",
        "name": "Buta Zega Airport",
        "city": "",
        "country": "CD"
      },
      {
        "iata": "BKY",
        "name": "Bukavu Kavumu Airport",
        "city": "",
        "country": "CD"
      },
      {
        "iata": "RUE",
        "name": "Rughenda Airfield",
        "city": "Butembo",
        "country": "CD"
      },
      {
        "iata": "GOM",
        "name": "Goma International Airport",
        "city": "Goma",
        "country": "CD"
      },
      {
        "iata": "BNC",
        "name": "Beni Airport",
        "city": "Beni",
        "country": "CD"
      },
      {
        "iata": "KND",
        "name": "Kindu Airport",
        "city": "Kindu",
        "country": "CD"
      },
      {
        "iata": "KLY",
        "name": "Kinkungwa Airport",
        "city": "Kalima",
        "country": "CD"
      },
      {
        "iata": "PUN",
        "name": "Punia Airport",
        "city": "Punia",
        "country": "CD"
      },
      {
        "iata": "FBM",
        "name": "Lubumbashi International Airport",
        "city": "Lubumbashi",
        "country": "CD"
      },
      {
        "iata": "PWO",
        "name": "Pweto Airport",
        "city": "Pweto",
        "country": "CD"
      },
      {
        "iata": "KEC",
        "name": "Kasenga Airport",
        "city": "Kasenga",
        "country": "CD"
      },
      {
        "iata": "KWZ",
        "name": "Kolwezi Airport",
        "city": "",
        "country": "CD"
      },
      {
        "iata": "MNO",
        "name": "Manono Airport",
        "city": "Manono",
        "country": "CD"
      },
      {
        "iata": "BDV",
        "name": "Moba Airport",
        "city": "Moba",
        "country": "CD"
      },
      {
        "iata": "FMI",
        "name": "Kalemie Airport",
        "city": "",
        "country": "CD"
      },
      {
        "iata": "KBO",
        "name": "Kabalo Airport",
        "city": "Kabalo",
        "country": "CD"
      },
      {
        "iata": "KOO",
        "name": "Kongolo Airport",
        "city": "Kongolo",
        "country": "CD"
      },
      {
        "iata": "KMN",
        "name": "Kamina Base Airport",
        "city": "",
        "country": "CD"
      },
      {
        "iata": "KAP",
        "name": "Kapanga Airport",
        "city": "Kapanga",
        "country": "CD"
      },
      {
        "iata": "KNM",
        "name": "Kaniama Airport",
        "city": "Kaniama",
        "country": "CD"
      },
      {
        "iata": "KGA",
        "name": "Kananga Airport",
        "city": "Kananga",
        "country": "CD"
      },
      {
        "iata": "LZA",
        "name": "Luiza Airport",
        "city": "Luiza",
        "country": "CD"
      },
      {
        "iata": "TSH",
        "name": "Tshikapa Airport",
        "city": "Tshikapa",
        "country": "CD"
      },
      {
        "iata": "LJA",
        "name": "Lodja Airport",
        "city": "Lodja",
        "country": "CD"
      },
      {
        "iata": "LBO",
        "name": "Lusambo Airport",
        "city": "Lusambo",
        "country": "CD"
      },
      {
        "iata": "MEW",
        "name": "Mweka Airport",
        "city": "Mweka",
        "country": "CD"
      },
      {
        "iata": "BAN",
        "name": "Basongo Airport",
        "city": "Basongo",
        "country": "CD"
      },
      {
        "iata": "PFR",
        "name": "Ilebo Airport",
        "city": "Ilebo",
        "country": "CD"
      },
      {
        "iata": "MJM",
        "name": "Mbuji Mayi Airport",
        "city": "Mbuji Mayi",
        "country": "CD"
      },
      {
        "iata": "GDJ",
        "name": "Gandajika Airport",
        "city": "Gandajika",
        "country": "CD"
      },
      {
        "iata": "KBN",
        "name": "Tunta Airport",
        "city": "Kabinda",
        "country": "CD"
      },
      {
        "iata": "BKO",
        "name": "Senou Airport",
        "city": "Senou",
        "country": "ML"
      },
      {
        "iata": "GUD",
        "name": "Goundam Airport",
        "city": "Goundam",
        "country": "ML"
      },
      {
        "iata": "GAQ",
        "name": "Gao Airport",
        "city": "",
        "country": "ML"
      },
      {
        "iata": "KNZ",
        "name": "Kenieba Airport",
        "city": "Kenieba",
        "country": "ML"
      },
      {
        "iata": "KTX",
        "name": "Koutiala Airport",
        "city": "Koutiala",
        "country": "ML"
      },
      {
        "iata": "KYS",
        "name": "Kayes Dag Dag Airport",
        "city": "",
        "country": "ML"
      },
      {
        "iata": "MZI",
        "name": "Ambodedjo Airport",
        "city": "",
        "country": "ML"
      },
      {
        "iata": "NRM",
        "name": "Nara Airport",
        "city": "Nara",
        "country": "ML"
      },
      {
        "iata": "NIX",
        "name": "Nioro du Sahel Airport",
        "city": "Nioro du Sahel",
        "country": "ML"
      },
      {
        "iata": "KSS",
        "name": "Sikasso Airport",
        "city": "Sikasso",
        "country": "ML"
      },
      {
        "iata": "TOM",
        "name": "Timbuktu Airport",
        "city": "Timbuktu",
        "country": "ML"
      },
      {
        "iata": "EYL",
        "name": "Yelimane Airport",
        "city": "Yelimane",
        "country": "ML"
      },
      {
        "iata": "BJL",
        "name": "Banjul International Airport",
        "city": "Banjul",
        "country": "GM"
      },
      {
        "iata": "FUE",
        "name": "Fuerteventura Airport",
        "city": "Fuerteventura Island",
        "country": "ES"
      },
      {
        "iata": "GMZ",
        "name": "La Gomera Airport",
        "city": "Alajero",
        "country": "ES"
      },
      {
        "iata": "VDE",
        "name": "Hierro Airport",
        "city": "El Hierro Island",
        "country": "ES"
      },
      {
        "iata": "SPC",
        "name": "La Palma Airport",
        "city": "Sta Cruz de la Palma",
        "country": "ES"
      },
      {
        "iata": "LPA",
        "name": "Gran Canaria Airport",
        "city": "Gran Canaria Island",
        "country": "ES"
      },
      {
        "iata": "ACE",
        "name": "Lanzarote Airport",
        "city": "Lanzarote Island",
        "country": "ES"
      },
      {
        "iata": "TFS",
        "name": "Tenerife South Airport",
        "city": "Tenerife Island",
        "country": "ES"
      },
      {
        "iata": "TFN",
        "name": "Tenerife Norte Airport",
        "city": "Tenerife Island",
        "country": "ES"
      },
      {
        "iata": "MLN",
        "name": "Melilla Airport",
        "city": "Melilla Island",
        "country": "ES"
      },
      {
        "iata": "BTE",
        "name": "Sherbro International Airport",
        "city": "Bonthe",
        "country": "SL"
      },
      {
        "iata": "KBS",
        "name": "Bo Airport",
        "city": "Bo",
        "country": "SL"
      },
      {
        "iata": "GBK",
        "name": "Gbangbatok Airport",
        "city": "Gbangbatok",
        "country": "SL"
      },
      {
        "iata": "HGS",
        "name": "Hastings Airport",
        "city": "Freetown",
        "country": "SL"
      },
      {
        "iata": "KBA",
        "name": "Kabala Airport",
        "city": "Kabala",
        "country": "SL"
      },
      {
        "iata": "KEN",
        "name": "Kenema Airport",
        "city": "Kenema",
        "country": "SL"
      },
      {
        "iata": "FNA",
        "name": "Lungi International Airport",
        "city": "Freetown",
        "country": "SL"
      },
      {
        "iata": "WYE",
        "name": "Yengema Airport",
        "city": "Yengema",
        "country": "SL"
      },
      {
        "iata": "BQE",
        "name": "Bubaque Airport",
        "city": "Bubaque",
        "country": "GW"
      },
      {
        "iata": "OXB",
        "name": "Osvaldo Vieira International Airport",
        "city": "Bissau",
        "country": "GW"
      },
      {
        "iata": "UCN",
        "name": "Buchanan Airport",
        "city": "Buchanan",
        "country": "LR"
      },
      {
        "iata": "CPA",
        "name": "Cape Palmas Airport",
        "city": "Harper",
        "country": "LR"
      },
      {
        "iata": "SNI",
        "name": "Greenville Sinoe Airport",
        "city": "Greenville",
        "country": "LR"
      },
      {
        "iata": "MLW",
        "name": "Spriggs Payne Airport",
        "city": "Monrovia",
        "country": "LR"
      },
      {
        "iata": "NIA",
        "name": "Nimba Airport",
        "city": "Nimba",
        "country": "LR"
      },
      {
        "iata": "ROB",
        "name": "Roberts International Airport",
        "city": "Monrovia",
        "country": "LR"
      },
      {
        "iata": "SAZ",
        "name": "Sasstown Airport",
        "city": "Sasstown",
        "country": "LR"
      },
      {
        "iata": "THC",
        "name": "Tchien Airport",
        "city": "Tchien",
        "country": "LR"
      },
      {
        "iata": "VOI",
        "name": "Voinjama Airport",
        "city": "Voinjama",
        "country": "LR"
      },
      {
        "iata": "AGA",
        "name": "Al Massira Airport",
        "city": "Agadir",
        "country": "MA"
      },
      {
        "iata": "TTA",
        "name": "Tan Tan Airport",
        "city": "Tan Tan",
        "country": "MA"
      },
      {
        "iata": "OZG",
        "name": "Zagora Airport",
        "city": "Zagora",
        "country": "MA"
      },
      {
        "iata": "UAR",
        "name": "Bouarfa Airport",
        "city": "Bouarfa",
        "country": "MA"
      },
      {
        "iata": "FEZ",
        "name": "Saiss Airport",
        "city": "Fes",
        "country": "MA"
      },
      {
        "iata": "ERH",
        "name": "Moulay Ali Cherif Airport",
        "city": "Errachidia",
        "country": "MA"
      },
      {
        "iata": "MEK",
        "name": "Bassatine Airport",
        "city": "Meknes",
        "country": "MA"
      },
      {
        "iata": "OUD",
        "name": "Angads Airport",
        "city": "Oujda",
        "country": "MA"
      },
      {
        "iata": "SMW",
        "name": "Smara Airport",
        "city": "Smara",
        "country": "EH"
      },
      {
        "iata": "GMD",
        "name": "Ben Slimane Airport",
        "city": "Ben Slimane",
        "country": "MA"
      },
      {
        "iata": "CAS",
        "name": "Anfa Airport",
        "city": "Casablanca",
        "country": "MA"
      },
      {
        "iata": "RBA",
        "name": "Rabat-Sale Airport",
        "city": "Rabat",
        "country": "MA"
      },
      {
        "iata": "SII",
        "name": "Sidi Ifni Xx Airport",
        "city": "Sidi Ifni",
        "country": "MA"
      },
      {
        "iata": "VIL",
        "name": "Dakhla Airport",
        "city": "Dakhla",
        "country": "EH"
      },
      {
        "iata": "ESU",
        "name": "Mogador Airport",
        "city": "Essaouira",
        "country": "MA"
      },
      {
        "iata": "EUN",
        "name": "Hassan I Airport",
        "city": "El Aaiun",
        "country": "EH"
      },
      {
        "iata": "CMN",
        "name": "Mohammed V International Airport",
        "city": "Casablanca",
        "country": "MA"
      },
      {
        "iata": "SFI",
        "name": "Safi Airport",
        "city": "Safi",
        "country": "MA"
      },
      {
        "iata": "NDR",
        "name": "Nador International Airport",
        "city": "Nador",
        "country": "MA"
      },
      {
        "iata": "RAK",
        "name": "Menara Airport",
        "city": "Marrakech",
        "country": "MA"
      },
      {
        "iata": "NNA",
        "name": "Kenitra Airport",
        "city": "",
        "country": "MA"
      },
      {
        "iata": "OZZ",
        "name": "Ouarzazate Airport",
        "city": "Ouarzazate",
        "country": "MA"
      },
      {
        "iata": "AHU",
        "name": "Cherif Al Idrissi Airport",
        "city": "Al Hoceima",
        "country": "MA"
      },
      {
        "iata": "TTU",
        "name": "Saniat Rmel Airport",
        "city": "",
        "country": "MA"
      },
      {
        "iata": "TNG",
        "name": "Ibn Batouta Airport",
        "city": "Tangier",
        "country": "MA"
      },
      {
        "iata": "DSS",
        "name": "Blaise Diagne International Airport",
        "city": "Diass",
        "country": "SN"
      },
      {
        "iata": "KDA",
        "name": "Kolda North Airport",
        "city": "Kolda",
        "country": "SN"
      },
      {
        "iata": "ZIG",
        "name": "Ziguinchor Airport",
        "city": "Ziguinchor",
        "country": "SN"
      },
      {
        "iata": "CSK",
        "name": "Cap Skirring Airport",
        "city": "Cap Skirring",
        "country": "SN"
      },
      {
        "iata": "KLC",
        "name": "Kaolack Airport",
        "city": "Kaolack",
        "country": "SN"
      },
      {
        "iata": "DKR",
        "name": "Leopold Sedar Senghor International Airport",
        "city": "Dakar",
        "country": "SN"
      },
      {
        "iata": "MAX",
        "name": "Ouro Sogui Airport",
        "city": "Matam",
        "country": "SN"
      },
      {
        "iata": "POD",
        "name": "Podor Airport",
        "city": "Podor",
        "country": "SN"
      },
      {
        "iata": "RDT",
        "name": "Richard Toll Airport",
        "city": "Richard Toll",
        "country": "SN"
      },
      {
        "iata": "XLS",
        "name": "Saint Louis Airport",
        "city": "Saint Louis",
        "country": "SN"
      },
      {
        "iata": "BXE",
        "name": "Bakel Airport",
        "city": "Bakel",
        "country": "SN"
      },
      {
        "iata": "KGG",
        "name": "Kedougou Airport",
        "city": "Kedougou",
        "country": "SN"
      },
      {
        "iata": "SMY",
        "name": "Simenti Airport",
        "city": "Simenti",
        "country": "SN"
      },
      {
        "iata": "TUD",
        "name": "Tambacounda Airport",
        "city": "Tambacounda",
        "country": "SN"
      },
      {
        "iata": "AEO",
        "name": "Aioun el Atrouss Airport",
        "city": "Aioun El Atrouss",
        "country": "MR"
      },
      {
        "iata": "OTL",
        "name": "Boutilimit Airport",
        "city": "Boutilimit",
        "country": "MR"
      },
      {
        "iata": "THI",
        "name": "Tichitt Airport",
        "city": "Tichitt",
        "country": "MR"
      },
      {
        "iata": "TIY",
        "name": "Tidjikja Airport",
        "city": "Tidjikja",
        "country": "MR"
      },
      {
        "iata": "BGH",
        "name": "Abbaye Airport",
        "city": "Boghe",
        "country": "MR"
      },
      {
        "iata": "KFA",
        "name": "Kiffa Airport",
        "city": "Kiffa",
        "country": "MR"
      },
      {
        "iata": "TMD",
        "name": "Timbedra Airport",
        "city": "Timbedra",
        "country": "MR"
      },
      {
        "iata": "EMN",
        "name": "Nema Airport",
        "city": "Nema",
        "country": "MR"
      },
      {
        "iata": "AJJ",
        "name": "Akjoujt Airport",
        "city": "Akjoujt",
        "country": "MR"
      },
      {
        "iata": "KED",
        "name": "Kaedi Airport",
        "city": "Kaedi",
        "country": "MR"
      },
      {
        "iata": "MOM",
        "name": "Letfotar Airport",
        "city": "Moudjeria",
        "country": "MR"
      },
      {
        "iata": "NKC",
        "name": "Nouakchott International Airport",
        "city": "Nouakchott",
        "country": "MR"
      },
      {
        "iata": "SEY",
        "name": "Selibaby Airport",
        "city": "Selibaby",
        "country": "MR"
      },
      {
        "iata": "THT",
        "name": "Tamchakett Airport",
        "city": "Tamchakett",
        "country": "MR"
      },
      {
        "iata": "ATR",
        "name": "Atar International Airport",
        "city": "Atar",
        "country": "MR"
      },
      {
        "iata": "FGD",
        "name": "Fderik Airport",
        "city": "Fderik",
        "country": "MR"
      },
      {
        "iata": "NDB",
        "name": "Nouadhibou International Airport",
        "city": "Nouadhibou",
        "country": "MR"
      },
      {
        "iata": "OUZ",
        "name": "Tazadit Airport",
        "city": "Zouerate",
        "country": "MR"
      },
      {
        "iata": "CKY",
        "name": "Conakry Airport",
        "city": "Conakry",
        "country": "GN"
      },
      {
        "iata": "FIG",
        "name": "Fria Airport",
        "city": "",
        "country": "GN"
      },
      {
        "iata": "FAA",
        "name": "Faranah Airport",
        "city": "",
        "country": "GN"
      },
      {
        "iata": "KSI",
        "name": "Kissidougou Airport",
        "city": "Kissidougou",
        "country": "GN"
      },
      {
        "iata": "LEK",
        "name": "Labe Airport",
        "city": "",
        "country": "GN"
      },
      {
        "iata": "MCA",
        "name": "Macenta Airport",
        "city": "Macenta",
        "country": "GN"
      },
      {
        "iata": "NZE",
        "name": "Nzerekore Airport",
        "city": "Nzerekore",
        "country": "GN"
      },
      {
        "iata": "BKJ",
        "name": "Boke Airport",
        "city": "Boke",
        "country": "GN"
      },
      {
        "iata": "SBI",
        "name": "Sambailo Airport",
        "city": "Koundara",
        "country": "GN"
      },
      {
        "iata": "GII",
        "name": "Siguiri Airport",
        "city": "Siguiri",
        "country": "GN"
      },
      {
        "iata": "KNN",
        "name": "Kankan Airport",
        "city": "Kankan",
        "country": "GN"
      },
      {
        "iata": "SID",
        "name": "Amilcar Cabral International Airport",
        "city": "Espargos",
        "country": "CV"
      },
      {
        "iata": "NTO",
        "name": "Agostinho Neto Airport",
        "city": "Ponta do Sol",
        "country": "CV"
      },
      {
        "iata": "BVC",
        "name": "Rabil Airport",
        "city": "Rabil",
        "country": "CV"
      },
      {
        "iata": "BVR",
        "name": "Esperadinha Airport",
        "city": "Brava Island",
        "country": "CV"
      },
      {
        "iata": "MMO",
        "name": "Maio Airport",
        "city": "Vila do Maio",
        "country": "CV"
      },
      {
        "iata": "MTI",
        "name": "Mosteiros Airport",
        "city": "Vila do Mosteiros",
        "country": "CV"
      },
      {
        "iata": "RAI",
        "name": "Praia International Airport",
        "city": "Praia",
        "country": "CV"
      },
      {
        "iata": "SFL",
        "name": "Sao Filipe Airport",
        "city": "Sao Filipe",
        "country": "CV"
      },
      {
        "iata": "SNE",
        "name": "Preguica Airport",
        "city": "Preguica",
        "country": "CV"
      },
      {
        "iata": "VXE",
        "name": "Sao Pedro Airport",
        "city": "Sao Pedro",
        "country": "CV"
      },
      {
        "iata": "ADD",
        "name": "Bole International Airport",
        "city": "Addis Ababa",
        "country": "ET"
      },
      {
        "iata": "AMH",
        "name": "Arba Minch Airport",
        "city": "",
        "country": "ET"
      },
      {
        "iata": "AXU",
        "name": "Axum Airport",
        "city": "",
        "country": "ET"
      },
      {
        "iata": "BCO",
        "name": "Baco Airport",
        "city": "Baco",
        "country": "ET"
      },
      {
        "iata": "BJR",
        "name": "Bahir Dar Airport",
        "city": "Bahir Dar",
        "country": "ET"
      },
      {
        "iata": "BEI",
        "name": "Beica Airport",
        "city": "Beica",
        "country": "ET"
      },
      {
        "iata": "DSE",
        "name": "Combolcha Airport",
        "city": "Dessie",
        "country": "ET"
      },
      {
        "iata": "DEM",
        "name": "Dembidollo Airport",
        "city": "Dembidollo",
        "country": "ET"
      },
      {
        "iata": "DBM",
        "name": "Debra Marcos Airport",
        "city": "Debra Marcos",
        "country": "ET"
      },
      {
        "iata": "DIR",
        "name": "Aba Tenna Dejazmach Yilma International Airport",
        "city": "Dire Dawa",
        "country": "ET"
      },
      {
        "iata": "DBT",
        "name": "Debre Tabor Airport",
        "city": "Debre Tabor",
        "country": "ET"
      },
      {
        "iata": "FNH",
        "name": "Fincha Airport",
        "city": "Fincha",
        "country": "ET"
      },
      {
        "iata": "GOB",
        "name": "Robe Airport",
        "city": "Goba",
        "country": "ET"
      },
      {
        "iata": "GNN",
        "name": "Ghinnir Airport",
        "city": "Ghinnir",
        "country": "ET"
      },
      {
        "iata": "GMB",
        "name": "Gambella Airport",
        "city": "Gambela",
        "country": "ET"
      },
      {
        "iata": "GDQ",
        "name": "Gonder Airport",
        "city": "Gondar",
        "country": "ET"
      },
      {
        "iata": "GDE",
        "name": "Gode Airport",
        "city": "Gode",
        "country": "ET"
      },
      {
        "iata": "GOR",
        "name": "Gore Airport",
        "city": "Gore",
        "country": "ET"
      },
      {
        "iata": "QHR",
        "name": "Harar Meda Airport",
        "city": "Debre Zeyit",
        "country": "ET"
      },
      {
        "iata": "HUE",
        "name": "Humera Airport",
        "city": "Humera",
        "country": "ET"
      },
      {
        "iata": "JIM",
        "name": "Jimma Airport",
        "city": "Jimma",
        "country": "ET"
      },
      {
        "iata": "ABK",
        "name": "Kabri Dehar Airport",
        "city": "Kabri Dehar",
        "country": "ET"
      },
      {
        "iata": "LFO",
        "name": "Kelafo East Airport",
        "city": "Kelafo",
        "country": "ET"
      },
      {
        "iata": "AWA",
        "name": "Awassa Airport",
        "city": "Awassa",
        "country": "ET"
      },
      {
        "iata": "LLI",
        "name": "Lalibella Airport",
        "city": "Lalibela",
        "country": "ET"
      },
      {
        "iata": "MQX",
        "name": "Mekele Airport",
        "city": "",
        "country": "ET"
      },
      {
        "iata": "NDM",
        "name": "Mendi Airport",
        "city": "Mendi",
        "country": "ET"
      },
      {
        "iata": "MTF",
        "name": "Mizan Teferi Airport",
        "city": "Mizan Teferi",
        "country": "ET"
      },
      {
        "iata": "NEJ",
        "name": "Nejjo Airport",
        "city": "Nejjo",
        "country": "ET"
      },
      {
        "iata": "NEK",
        "name": "Nekemte Airport",
        "city": "Nekemte",
        "country": "ET"
      },
      {
        "iata": "SXU",
        "name": "Soddu Airport",
        "city": "Soddu",
        "country": "ET"
      },
      {
        "iata": "ASO",
        "name": "Asosa Airport",
        "city": "Asosa",
        "country": "ET"
      },
      {
        "iata": "TIE",
        "name": "Tippi Airport",
        "city": "Tippi",
        "country": "ET"
      },
      {
        "iata": "WAC",
        "name": "Waca Airport",
        "city": "Waca",
        "country": "ET"
      },
      {
        "iata": "BJM",
        "name": "Bujumbura International Airport",
        "city": "Bujumbura",
        "country": "BI"
      },
      {
        "iata": "GID",
        "name": "Gitega Airport",
        "city": "Gitega",
        "country": "BI"
      },
      {
        "iata": "KRE",
        "name": "Kirundo Airport",
        "city": "Kirundo",
        "country": "BI"
      },
      {
        "iata": "ALU",
        "name": "Alula Airport",
        "city": "Alula",
        "country": "SO"
      },
      {
        "iata": "BIB",
        "name": "Baidoa Airport",
        "city": "Baidoa",
        "country": "SO"
      },
      {
        "iata": "CXN",
        "name": "Candala Airport",
        "city": "Candala",
        "country": "SO"
      },
      {
        "iata": "BSY",
        "name": "Bardera Airport",
        "city": "",
        "country": "SO"
      },
      {
        "iata": "HCM",
        "name": "Eil Airport",
        "city": "Eil",
        "country": "SO"
      },
      {
        "iata": "BSA",
        "name": "Bosaso Airport",
        "city": "Bosaso",
        "country": "SO"
      },
      {
        "iata": "GSR",
        "name": "Gardo Airport",
        "city": "Gardo",
        "country": "SO"
      },
      {
        "iata": "HGA",
        "name": "Egal International Airport",
        "city": "Hargeisa",
        "country": "SO"
      },
      {
        "iata": "BBO",
        "name": "Berbera Airport",
        "city": "Berbera",
        "country": "SO"
      },
      {
        "iata": "KMU",
        "name": "Kisimayu Airport",
        "city": "",
        "country": "SO"
      },
      {
        "iata": "MGQ",
        "name": "Aden Adde International Airport",
        "city": "Mogadishu",
        "country": "SO"
      },
      {
        "iata": "CMO",
        "name": "Obbia Airport",
        "city": "Obbia",
        "country": "SO"
      },
      {
        "iata": "GLK",
        "name": "Galcaio Airport",
        "city": "Galcaio",
        "country": "SO"
      },
      {
        "iata": "CMS",
        "name": "Scusciuban Airport",
        "city": "Scusciuban",
        "country": "SO"
      },
      {
        "iata": "ERA",
        "name": "Erigavo Airport",
        "city": "Erigavo",
        "country": "SO"
      },
      {
        "iata": "BUO",
        "name": "Burao Airport",
        "city": "Burao",
        "country": "SO"
      },
      {
        "iata": "JIB",
        "name": "Djibouti-Ambouli Airport",
        "city": "Djibouti City",
        "country": "DJ"
      },
      {
        "iata": "AII",
        "name": "Ali-Sabieh Airport",
        "city": "Ali-Sabieh",
        "country": "DJ"
      },
      {
        "iata": "MHI",
        "name": "Moucha Airport",
        "city": "Moucha Island",
        "country": "DJ"
      },
      {
        "iata": "OBC",
        "name": "Obock Airport",
        "city": "Obock",
        "country": "DJ"
      },
      {
        "iata": "TDJ",
        "name": "Tadjoura Airport",
        "city": "Tadjoura",
        "country": "DJ"
      },
      {
        "iata": "SEW",
        "name": "Siwa Oasis North Airport",
        "city": "Siwa",
        "country": "EG"
      },
      {
        "iata": "DBB",
        "name": "El Alamein International Airport",
        "city": "El Alamein",
        "country": "EG"
      },
      {
        "iata": "AAC",
        "name": "El Arish International Airport",
        "city": "El Arish",
        "country": "EG"
      },
      {
        "iata": "ATZ",
        "name": "Assiut International Airport",
        "city": "Assiut",
        "country": "EG"
      },
      {
        "iata": "ALY",
        "name": "El Nouzha Airport",
        "city": "Alexandria",
        "country": "EG"
      },
      {
        "iata": "HBE",
        "name": "Borg El Arab International Airport",
        "city": "Alexandria",
        "country": "EG"
      },
      {
        "iata": "ABS",
        "name": "Abu Simbel Airport",
        "city": "Abu Simbel",
        "country": "EG"
      },
      {
        "iata": "CAI",
        "name": "Cairo International Airport",
        "city": "Cairo",
        "country": "EG"
      },
      {
        "iata": "CWE",
        "name": "Cairo West Airport",
        "city": "El Cairo",
        "country": "EG"
      },
      {
        "iata": "DAK",
        "name": "Dakhla Airport",
        "city": "",
        "country": "EG"
      },
      {
        "iata": "HRG",
        "name": "Hurghada International Airport",
        "city": "Hurghada",
        "country": "EG"
      },
      {
        "iata": "EGH",
        "name": "El Gora Airport",
        "city": "",
        "country": "EG"
      },
      {
        "iata": "UVL",
        "name": "El Kharga Airport",
        "city": "",
        "country": "EG"
      },
      {
        "iata": "LXR",
        "name": "Luxor International Airport",
        "city": "Luxor",
        "country": "EG"
      },
      {
        "iata": "RMF",
        "name": "Marsa Alam International Airport",
        "city": "Marsa Alam",
        "country": "EG"
      },
      {
        "iata": "HMB",
        "name": "Sohag International Airport",
        "city": "Sohag",
        "country": "EG"
      },
      {
        "iata": "MUH",
        "name": "Mersa Matruh Airport",
        "city": "Mersa Matruh",
        "country": "EG"
      },
      {
        "iata": "GSQ",
        "name": "Shark El Oweinat International Airport",
        "city": "",
        "country": "EG"
      },
      {
        "iata": "PSD",
        "name": "Port Said Airport",
        "city": "Port Said",
        "country": "EG"
      },
      {
        "iata": "SKV",
        "name": "St Catherine International Airport",
        "city": "",
        "country": "EG"
      },
      {
        "iata": "SSH",
        "name": "Sharm El Sheikh International Airport",
        "city": "Sharm el-Sheikh",
        "country": "EG"
      },
      {
        "iata": "ASW",
        "name": "Aswan International Airport",
        "city": "Aswan",
        "country": "EG"
      },
      {
        "iata": "SPX",
        "name": "Sphinx International Airport",
        "city": "Giza",
        "country": "EG"
      },
      {
        "iata": "TCP",
        "name": "Taba International Airport",
        "city": "Taba",
        "country": "EG"
      },
      {
        "iata": "ELT",
        "name": "El Tor Airport",
        "city": "",
        "country": "EG"
      },
      {
        "iata": "ASM",
        "name": "Asmara International Airport",
        "city": "Asmara",
        "country": "ER"
      },
      {
        "iata": "MSW",
        "name": "Massawa International Airport",
        "city": "Massawa",
        "country": "ER"
      },
      {
        "iata": "ASA",
        "name": "Assab International Airport",
        "city": "Asab",
        "country": "ER"
      },
      {
        "iata": "TES",
        "name": "Tessenei Airport",
        "city": "Tessenei",
        "country": "ER"
      },
      {
        "iata": "ASV",
        "name": "Amboseli Airport",
        "city": "Amboseli National Park",
        "country": "KE"
      },
      {
        "iata": "EDL",
        "name": "Eldoret International Airport",
        "city": "Eldoret",
        "country": "KE"
      },
      {
        "iata": "EYS",
        "name": "Eliye Springs Airport",
        "city": "Eliye Springs",
        "country": "KE"
      },
      {
        "iata": "KLK",
        "name": "Kalokol Airport",
        "city": "Kalokol",
        "country": "KE"
      },
      {
        "iata": "GAS",
        "name": "Garissa Airport",
        "city": "Garissa",
        "country": "KE"
      },
      {
        "iata": "HOA",
        "name": "Hola Airport",
        "city": "Hola",
        "country": "KE"
      },
      {
        "iata": "NBO",
        "name": "Jomo Kenyatta International Airport",
        "city": "Nairobi",
        "country": "KE"
      },
      {
        "iata": "GGM",
        "name": "Kakamega Airport",
        "city": "Kakamega",
        "country": "KE"
      },
      {
        "iata": "KIS",
        "name": "Kisumu Airport",
        "city": "Kisumu",
        "country": "KE"
      },
      {
        "iata": "ILU",
        "name": "Kilaguni Airport",
        "city": "Kilaguni",
        "country": "KE"
      },
      {
        "iata": "KEY",
        "name": "Kericho Airport",
        "city": "Kericho",
        "country": "KE"
      },
      {
        "iata": "KTL",
        "name": "Kitale Airport",
        "city": "Kitale",
        "country": "KE"
      },
      {
        "iata": "LKG",
        "name": "Lokichoggio Airport",
        "city": "Lokichoggio",
        "country": "KE"
      },
      {
        "iata": "LOK",
        "name": "Lodwar Airport",
        "city": "Lodwar",
        "country": "KE"
      },
      {
        "iata": "LAU",
        "name": "Manda Airstrip",
        "city": "Lamu",
        "country": "KE"
      },
      {
        "iata": "LOY",
        "name": "Loyengalani Airport",
        "city": "Loyengalani",
        "country": "KE"
      },
      {
        "iata": "NDE",
        "name": "Mandera Airport",
        "city": "Mandera",
        "country": "KE"
      },
      {
        "iata": "RBT",
        "name": "Segel Airport",
        "city": "Marsabit",
        "country": "KE"
      },
      {
        "iata": "JJM",
        "name": "Mulika Lodge Airport",
        "city": "Meru-Kinna",
        "country": "KE"
      },
      {
        "iata": "MYD",
        "name": "Malindi Airport",
        "city": "Malindi",
        "country": "KE"
      },
      {
        "iata": "MBA",
        "name": "Mombasa Moi International Airport",
        "city": "Mombasa",
        "country": "KE"
      },
      {
        "iata": "MRE",
        "name": "Mara Serena Lodge Airstrip",
        "city": "Masai Mara",
        "country": "KE"
      },
      {
        "iata": "OYL",
        "name": "Moyale Airport",
        "city": "Moyale (Lower)",
        "country": "KE"
      },
      {
        "iata": "NYE",
        "name": "Nyeri Airport",
        "city": "Nyeri",
        "country": "KE"
      },
      {
        "iata": "NUU",
        "name": "Nakuru Airport",
        "city": "Nakuru",
        "country": "KE"
      },
      {
        "iata": "WIL",
        "name": "Nairobi Wilson Airport",
        "city": "Nairobi",
        "country": "KE"
      },
      {
        "iata": "NYK",
        "name": "Nanyuki Airport",
        "city": "Nanyuki",
        "country": "KE"
      },
      {
        "iata": "UAS",
        "name": "Samburu South Airport",
        "city": "Samburu South",
        "country": "KE"
      },
      {
        "iata": "UKA",
        "name": "Ukunda Airstrip",
        "city": "Ukunda",
        "country": "KE"
      },
      {
        "iata": "WJR",
        "name": "Wajir Airport",
        "city": "Wajir",
        "country": "KE"
      },
      {
        "iata": "SRX",
        "name": "Gardabya Airport",
        "city": "Sirt",
        "country": "LY"
      },
      {
        "iata": "TOB",
        "name": "Gamal Abdel Nasser Airport",
        "city": "Tobruk",
        "country": "LY"
      },
      {
        "iata": "GHT",
        "name": "Ghat Airport",
        "city": "Ghat",
        "country": "LY"
      },
      {
        "iata": "AKF",
        "name": "Kufra Airport",
        "city": "Kufra",
        "country": "LY"
      },
      {
        "iata": "BEN",
        "name": "Benina International Airport",
        "city": "Benghazi",
        "country": "LY"
      },
      {
        "iata": "MJI",
        "name": "Mitiga Airport",
        "city": "Tripoli",
        "country": "LY"
      },
      {
        "iata": "LAQ",
        "name": "La Abraq Airport",
        "city": "Al Bayda'",
        "country": "LY"
      },
      {
        "iata": "SEB",
        "name": "Sabha Airport",
        "city": "Sabha",
        "country": "LY"
      },
      {
        "iata": "TIP",
        "name": "Tripoli International Airport",
        "city": "Tripoli",
        "country": "LY"
      },
      {
        "iata": "LMQ",
        "name": "Marsa Brega Airport",
        "city": "",
        "country": "LY"
      },
      {
        "iata": "HUQ",
        "name": "Hon Airport",
        "city": "",
        "country": "LY"
      },
      {
        "iata": "LTD",
        "name": "Ghadames East Airport",
        "city": "Ghadames",
        "country": "LY"
      },
      {
        "iata": "WAX",
        "name": "Zwara Airport",
        "city": "Zuwara",
        "country": "LY"
      },
      {
        "iata": "GYI",
        "name": "Gisenyi Airport",
        "city": "Gisenyi",
        "country": "RW"
      },
      {
        "iata": "BTQ",
        "name": "Butare Airport",
        "city": "Butare",
        "country": "RW"
      },
      {
        "iata": "KGL",
        "name": "Kigali International Airport",
        "city": "Kigali",
        "country": "RW"
      },
      {
        "iata": "RHG",
        "name": "Ruhengeri Airport",
        "city": "Ruhengeri",
        "country": "RW"
      },
      {
        "iata": "KME",
        "name": "Kamembe Airport",
        "city": "Kamembe",
        "country": "RW"
      },
      {
        "iata": "ATB",
        "name": "Atbara Airport",
        "city": "Atbara",
        "country": "SD"
      },
      {
        "iata": "EDB",
        "name": "El Debba Airport",
        "city": "El Debba",
        "country": "SD"
      },
      {
        "iata": "DOG",
        "name": "Dongola Airport",
        "city": "Dongola",
        "country": "SD"
      },
      {
        "iata": "RSS",
        "name": "Damazin Airport",
        "city": "Ad Damazin",
        "country": "SD"
      },
      {
        "iata": "ELF",
        "name": "El Fasher Airport",
        "city": "El Fasher",
        "country": "SD"
      },
      {
        "iata": "GSU",
        "name": "Azaza Airport",
        "city": "Gedaref",
        "country": "SD"
      },
      {
        "iata": "DNX",
        "name": "Galegu Airport",
        "city": "Dinder",
        "country": "SD"
      },
      {
        "iata": "EGN",
        "name": "Geneina Airport",
        "city": "Geneina",
        "country": "SD"
      },
      {
        "iata": "HEG",
        "name": "Heglig Airport",
        "city": "Heglig Oilfield",
        "country": "SD"
      },
      {
        "iata": "KSL",
        "name": "Kassala Airport",
        "city": "Kassala",
        "country": "SD"
      },
      {
        "iata": "GBU",
        "name": "Khashm El Girba Airport",
        "city": "Khashm El Girba",
        "country": "SD"
      },
      {
        "iata": "KST",
        "name": "Kosti Airport",
        "city": "Kosti",
        "country": "SD"
      },
      {
        "iata": "KDX",
        "name": "Kadugli Airport",
        "city": "Kadugli",
        "country": "SD"
      },
      {
        "iata": "RBX",
        "name": "Rumbek Airport",
        "city": "Rumbek",
        "country": "SS"
      },
      {
        "iata": "MWE",
        "name": "Merowe Airport",
        "city": "Merowe",
        "country": "SD"
      },
      {
        "iata": "NUD",
        "name": "En Nahud Airport",
        "city": "En Nahud",
        "country": "SD"
      },
      {
        "iata": "UYL",
        "name": "Nyala Airport",
        "city": "Nyala",
        "country": "SD"
      },
      {
        "iata": "NHF",
        "name": "New Halfa Airport",
        "city": "New Halfa",
        "country": "SD"
      },
      {
        "iata": "EBD",
        "name": "El Obeid Airport",
        "city": "Al-Ubayyid",
        "country": "SD"
      },
      {
        "iata": "PZU",
        "name": "Port Sudan New International Airport",
        "city": "Port Sudan",
        "country": "SD"
      },
      {
        "iata": "JUB",
        "name": "Juba Airport",
        "city": "Juba",
        "country": "SS"
      },
      {
        "iata": "MAK",
        "name": "Malakal Airport",
        "city": "Malakal",
        "country": "SS"
      },
      {
        "iata": "KRT",
        "name": "Khartoum International Airport",
        "city": "Khartoum",
        "country": "SD"
      },
      {
        "iata": "WHF",
        "name": "Wadi Halfa Airport",
        "city": "Wadi Halfa",
        "country": "SD"
      },
      {
        "iata": "WUU",
        "name": "Wau Airport",
        "city": "Wau",
        "country": "SS"
      },
      {
        "iata": "ARK",
        "name": "Arusha Airport",
        "city": "Arusha",
        "country": "TZ"
      },
      {
        "iata": "BKZ",
        "name": "Bukoba Airport",
        "city": "Bukoba",
        "country": "TZ"
      },
      {
        "iata": "DAR",
        "name": "Mwalimu Julius K. Nyerere International Airport",
        "city": "Dar es Salaam",
        "country": "TZ"
      },
      {
        "iata": "DOD",
        "name": "Dodoma Airport",
        "city": "Dodoma",
        "country": "TZ"
      },
      {
        "iata": "IRI",
        "name": "Iringa Airport",
        "city": "Nduli",
        "country": "TZ"
      },
      {
        "iata": "TKQ",
        "name": "Kigoma Airport",
        "city": "Kigoma",
        "country": "TZ"
      },
      {
        "iata": "KIY",
        "name": "Kilwa Masoko Airport",
        "city": "Kilwa Masoko",
        "country": "TZ"
      },
      {
        "iata": "JRO",
        "name": "Kilimanjaro International Airport",
        "city": "Arusha",
        "country": "TZ"
      },
      {
        "iata": "LDI",
        "name": "Kikwetu Airport",
        "city": "Lindi",
        "country": "TZ"
      },
      {
        "iata": "LKY",
        "name": "Lake Manyara Airport",
        "city": "Lake Manyara National Park",
        "country": "TZ"
      },
      {
        "iata": "MFA",
        "name": "Mafia Island Airport",
        "city": "Mafia Island",
        "country": "TZ"
      },
      {
        "iata": "MBI",
        "name": "Mbeya Airport",
        "city": "Mbeya",
        "country": "TZ"
      },
      {
        "iata": "MWN",
        "name": "Mwadui Airport",
        "city": "Mwadui",
        "country": "TZ"
      },
      {
        "iata": "XMI",
        "name": "Masasi Airport",
        "city": "Masasi",
        "country": "TZ"
      },
      {
        "iata": "QSI",
        "name": "Moshi Airport",
        "city": "Moshi",
        "country": "TZ"
      },
      {
        "iata": "MYW",
        "name": "Mtwara Airport",
        "city": "Mtwara",
        "country": "TZ"
      },
      {
        "iata": "MUZ",
        "name": "Musoma Airport",
        "city": "Musoma",
        "country": "TZ"
      },
      {
        "iata": "MWZ",
        "name": "Mwanza Airport",
        "city": "Mwanza",
        "country": "TZ"
      },
      {
        "iata": "NCH",
        "name": "Nachingwea Airport",
        "city": "Nachingwea",
        "country": "TZ"
      },
      {
        "iata": "JOM",
        "name": "Njombe Airport",
        "city": "Njombe",
        "country": "TZ"
      },
      {
        "iata": "PMA",
        "name": "Pemba Airport",
        "city": "Chake",
        "country": "TZ"
      },
      {
        "iata": "SEU",
        "name": "Seronera Airport",
        "city": "Seronera",
        "country": "TZ"
      },
      {
        "iata": "SGX",
        "name": "Songea Airport",
        "city": "Songea",
        "country": "TZ"
      },
      {
        "iata": "SUT",
        "name": "Sumbawanga Airport",
        "city": "Sumbawanga",
        "country": "TZ"
      },
      {
        "iata": "SHY",
        "name": "Shinyanga Airport",
        "city": "Shinyanga",
        "country": "TZ"
      },
      {
        "iata": "TBO",
        "name": "Tabora Airport",
        "city": "Tabora",
        "country": "TZ"
      },
      {
        "iata": "TGT",
        "name": "Tanga Airport",
        "city": "Tanga",
        "country": "TZ"
      },
      {
        "iata": "ZNZ",
        "name": "Zanzibar Airport",
        "city": "Kiembi Samaki",
        "country": "TZ"
      },
      {
        "iata": "RUA",
        "name": "Arua Airport",
        "city": "Arua",
        "country": "UG"
      },
      {
        "iata": "EBB",
        "name": "Entebbe International Airport",
        "city": "Kampala",
        "country": "UG"
      },
      {
        "iata": "ULU",
        "name": "Gulu Airport",
        "city": "Gulu",
        "country": "UG"
      },
      {
        "iata": "JIN",
        "name": "Jinja Airport",
        "city": "Jinja",
        "country": "UG"
      },
      {
        "iata": "KBG",
        "name": "Kabalega Falls Airport",
        "city": "Kabalega Falls",
        "country": "UG"
      },
      {
        "iata": "KSE",
        "name": "Kasese Airport",
        "city": "Kasese",
        "country": "UG"
      },
      {
        "iata": "MBQ",
        "name": "Mbarara Airport",
        "city": "Mbarara",
        "country": "UG"
      },
      {
        "iata": "KCU",
        "name": "Masindi Airport",
        "city": "Masindi",
        "country": "UG"
      },
      {
        "iata": "PAF",
        "name": "Pakuba Airport",
        "city": "",
        "country": "UG"
      },
      {
        "iata": "SRT",
        "name": "Soroti Airport",
        "city": "Soroti",
        "country": "UG"
      },
      {
        "iata": "TRY",
        "name": "Tororo Airport",
        "city": "Tororo",
        "country": "UG"
      },
      {
        "iata": "AMK",
        "name": "Animas Air Park",
        "city": "Durango",
        "country": "US"
      },
      {
        "iata": "BDX",
        "name": "Broadus Airport",
        "city": "Broadus",
        "country": "US"
      },
      {
        "iata": "FID",
        "name": "Elizabeth Field",
        "city": "Fishers Island",
        "country": "US"
      },
      {
        "iata": "GCW",
        "name": "Grand Canyon West Airport",
        "city": "Peach Springs",
        "country": "US"
      },
      {
        "iata": "RKC",
        "name": "Montague-Yreka Rohrer Field",
        "city": "Montague",
        "country": "US"
      },
      {
        "iata": "GNF",
        "name": "Gansner Field",
        "city": "Quincy",
        "country": "US"
      },
      {
        "iata": "GTP",
        "name": "Grants Pass Airport",
        "city": "Grants Pass",
        "country": "US"
      },
      {
        "iata": "GCD",
        "name": "Grand Coulee Dam Airport",
        "city": "Electric City",
        "country": "US"
      },
      {
        "iata": "FPY",
        "name": "Perry Foley Airport",
        "city": "Perry",
        "country": "US"
      },
      {
        "iata": "FMU",
        "name": "Florence Municipal Airport",
        "city": "Florence",
        "country": "US"
      },
      {
        "iata": "ATE",
        "name": "Antlers Municipal Airport",
        "city": "Antlers",
        "country": "US"
      },
      {
        "iata": "AAF",
        "name": "Apalachicola Regional Airport",
        "city": "Apalachicola",
        "country": "US"
      },
      {
        "iata": "ABE",
        "name": "Lehigh Valley International Airport",
        "city": "Allentown",
        "country": "US"
      },
      {
        "iata": "ABI",
        "name": "Abilene Regional Airport",
        "city": "Abilene",
        "country": "US"
      },
      {
        "iata": "ABQ",
        "name": "Albuquerque International Sunport Airport",
        "city": "Albuquerque",
        "country": "US"
      },
      {
        "iata": "ABR",
        "name": "Aberdeen Regional Airport",
        "city": "Aberdeen",
        "country": "US"
      },
      {
        "iata": "ABY",
        "name": "Southwest Georgia Regional Airport",
        "city": "Albany",
        "country": "US"
      },
      {
        "iata": "ACB",
        "name": "Antrim County Airport",
        "city": "Bellaire",
        "country": "US"
      },
      {
        "iata": "ACK",
        "name": "Nantucket Memorial Airport",
        "city": "Nantucket",
        "country": "US"
      },
      {
        "iata": "ACT",
        "name": "Waco Regional Airport",
        "city": "Waco",
        "country": "US"
      },
      {
        "iata": "ACV",
        "name": "Arcata Airport",
        "city": "Arcata/Eureka",
        "country": "US"
      },
      {
        "iata": "ACY",
        "name": "Atlantic City International Airport",
        "city": "Atlantic City",
        "country": "US"
      },
      {
        "iata": "ADG",
        "name": "Lenawee County Airport",
        "city": "Adrian",
        "country": "US"
      },
      {
        "iata": "ADT",
        "name": "Ada Municipal Airport",
        "city": "Ada",
        "country": "US"
      },
      {
        "iata": "ADM",
        "name": "Ardmore Municipal Airport",
        "city": "Ardmore",
        "country": "US"
      },
      {
        "iata": "ADS",
        "name": "Addison Airport",
        "city": "Dallas",
        "country": "US"
      },
      {
        "iata": "ADW",
        "name": "Andrews Air Force Base",
        "city": "Camp Springs",
        "country": "US"
      },
      {
        "iata": "AEL",
        "name": "Albert Lea Municipal Airport",
        "city": "Albert Lea",
        "country": "US"
      },
      {
        "iata": "AEX",
        "name": "Alexandria International Airport",
        "city": "Alexandria",
        "country": "US"
      },
      {
        "iata": "AFF",
        "name": "USAF Academy Airfield",
        "city": "Colorado Springs",
        "country": "US"
      },
      {
        "iata": "WSG",
        "name": "Washington County Airport",
        "city": "Washington",
        "country": "US"
      },
      {
        "iata": "AFN",
        "name": "Jaffrey Airport Silver Ranch Airport",
        "city": "Jaffrey",
        "country": "US"
      },
      {
        "iata": "AFO",
        "name": "Afton Municipal Airport",
        "city": "Afton",
        "country": "US"
      },
      {
        "iata": "AFW",
        "name": "Fort Worth Alliance Airport",
        "city": "Fort Worth",
        "country": "US"
      },
      {
        "iata": "AGC",
        "name": "Allegheny County Airport",
        "city": "Pittsburgh",
        "country": "US"
      },
      {
        "iata": "AGO",
        "name": "Magnolia Municipal Airport",
        "city": "Magnolia",
        "country": "US"
      },
      {
        "iata": "AGS",
        "name": "Augusta Regional At Bush Field",
        "city": "Augusta",
        "country": "US"
      },
      {
        "iata": "AHC",
        "name": "Amedee Army Air Field",
        "city": "Herlong",
        "country": "US"
      },
      {
        "iata": "AHH",
        "name": "Amery Municipal Airport",
        "city": "Amery",
        "country": "US"
      },
      {
        "iata": "AHN",
        "name": "Athens Ben Epps Airport",
        "city": "Athens",
        "country": "US"
      },
      {
        "iata": "AIA",
        "name": "Alliance Municipal Airport",
        "city": "Alliance",
        "country": "US"
      },
      {
        "iata": "AID",
        "name": "Anderson Municipal Darlington Field",
        "city": "Anderson",
        "country": "US"
      },
      {
        "iata": "AIK",
        "name": "Aiken Municipal Airport",
        "city": "Aiken",
        "country": "US"
      },
      {
        "iata": "AIO",
        "name": "Atlantic Municipal Airport",
        "city": "Atlantic",
        "country": "US"
      },
      {
        "iata": "AIV",
        "name": "George Downer Airport",
        "city": "Aliceville",
        "country": "US"
      },
      {
        "iata": "AIZ",
        "name": "Lee C Fine Memorial Airport",
        "city": "Kaiser Lake Ozark",
        "country": "US"
      },
      {
        "iata": "AKO",
        "name": "Colorado Plains Regional Airport",
        "city": "Akron",
        "country": "US"
      },
      {
        "iata": "AKC",
        "name": "Akron Fulton International Airport",
        "city": "Akron",
        "country": "US"
      },
      {
        "iata": "ALB",
        "name": "Albany International Airport",
        "city": "Albany",
        "country": "US"
      },
      {
        "iata": "ALI",
        "name": "Alice International Airport",
        "city": "Alice",
        "country": "US"
      },
      {
        "iata": "ALM",
        "name": "Alamogordo White Sands Regional Airport",
        "city": "Alamogordo",
        "country": "US"
      },
      {
        "iata": "ALN",
        "name": "St Louis Regional Airport",
        "city": "Alton/St Louis",
        "country": "US"
      },
      {
        "iata": "ALO",
        "name": "Waterloo Regional Airport",
        "city": "Waterloo",
        "country": "US"
      },
      {
        "iata": "ALS",
        "name": "San Luis Valley Regional Bergman Field",
        "city": "Alamosa",
        "country": "US"
      },
      {
        "iata": "ALW",
        "name": "Walla Walla Regional Airport",
        "city": "Walla Walla",
        "country": "US"
      },
      {
        "iata": "AMA",
        "name": "Rick Husband Amarillo International Airport",
        "city": "Amarillo",
        "country": "US"
      },
      {
        "iata": "AMN",
        "name": "RPD Airport",
        "city": "Alma",
        "country": "US"
      },
      {
        "iata": "AMW",
        "name": "Ames Municipal Airport",
        "city": "Ames",
        "country": "US"
      },
      {
        "iata": "ANB",
        "name": "Anniston Metropolitan Airport",
        "city": "Anniston",
        "country": "US"
      },
      {
        "iata": "AND",
        "name": "Anderson Regional Airport",
        "city": "Anderson",
        "country": "US"
      },
      {
        "iata": "ANP",
        "name": "Lee Airport",
        "city": "Annapolis",
        "country": "US"
      },
      {
        "iata": "ANQ",
        "name": "Tri State Steuben County Airport",
        "city": "Angola",
        "country": "US"
      },
      {
        "iata": "ANW",
        "name": "Ainsworth Municipal Airport",
        "city": "Ainsworth",
        "country": "US"
      },
      {
        "iata": "ANY",
        "name": "Anthony Municipal Airport",
        "city": "Anthony",
        "country": "US"
      },
      {
        "iata": "AOH",
        "name": "Lima Allen County Airport",
        "city": "Lima",
        "country": "US"
      },
      {
        "iata": "AOO",
        "name": "Altoona Blair County Airport",
        "city": "Altoona",
        "country": "US"
      },
      {
        "iata": "APA",
        "name": "Centennial Airport",
        "city": "Denver",
        "country": "US"
      },
      {
        "iata": "APC",
        "name": "Napa County Airport",
        "city": "Napa",
        "country": "US"
      },
      {
        "iata": "APF",
        "name": "Naples Municipal Airport",
        "city": "Naples",
        "country": "US"
      },
      {
        "iata": "APG",
        "name": "Phillips Army Air Field",
        "city": "Aberdeen Proving Grounds(Aberdeen)",
        "country": "US"
      },
      {
        "iata": "APH",
        "name": "A P Hill Aaf (Fort A P Hill) Airport",
        "city": "Fort A. P. Hill",
        "country": "US"
      },
      {
        "iata": "APN",
        "name": "Alpena County Regional Airport",
        "city": "Alpena",
        "country": "US"
      },
      {
        "iata": "APT",
        "name": "Marion County Brown Field",
        "city": "Jasper",
        "country": "US"
      },
      {
        "iata": "APV",
        "name": "Apple Valley Airport",
        "city": "Apple Valley",
        "country": "US"
      },
      {
        "iata": "ARA",
        "name": "Acadiana Regional Airport",
        "city": "New Iberia",
        "country": "US"
      },
      {
        "iata": "ARB",
        "name": "Ann Arbor Municipal Airport",
        "city": "Ann Arbor",
        "country": "US"
      },
      {
        "iata": "ARG",
        "name": "Walnut Ridge Regional Airport",
        "city": "Walnut Ridge",
        "country": "US"
      },
      {
        "iata": "AUZ",
        "name": "Aurora Municipal Airport",
        "city": "Chicago/Aurora",
        "country": "US"
      },
      {
        "iata": "ART",
        "name": "Watertown International Airport",
        "city": "Watertown",
        "country": "US"
      },
      {
        "iata": "ARV",
        "name": "Lakeland-Noble F. Lee Memorial field",
        "city": "Minocqua-Woodruff",
        "country": "US"
      },
      {
        "iata": "BFT",
        "name": "Beaufort County Airport",
        "city": "Beaufort",
        "country": "US"
      },
      {
        "iata": "ASE",
        "name": "Aspen-Pitkin Co/Sardy Field",
        "city": "Aspen",
        "country": "US"
      },
      {
        "iata": "ASH",
        "name": "Boire Field",
        "city": "Nashua",
        "country": "US"
      },
      {
        "iata": "ASL",
        "name": "Harrison County Airport",
        "city": "Marshall",
        "country": "US"
      },
      {
        "iata": "ASN",
        "name": "Talladega Municipal Airport",
        "city": "Talladega",
        "country": "US"
      },
      {
        "iata": "AST",
        "name": "Astoria Regional Airport",
        "city": "Astoria",
        "country": "US"
      },
      {
        "iata": "ASX",
        "name": "John F Kennedy Memorial Airport",
        "city": "Ashland",
        "country": "US"
      },
      {
        "iata": "ASY",
        "name": "Ashley Municipal Airport",
        "city": "Ashley",
        "country": "US"
      },
      {
        "iata": "ATL",
        "name": "Hartsfield Jackson Atlanta International Airport",
        "city": "Atlanta",
        "country": "US"
      },
      {
        "iata": "ATS",
        "name": "Artesia Municipal Airport",
        "city": "Artesia",
        "country": "US"
      },
      {
        "iata": "ATW",
        "name": "Appleton International Airport",
        "city": "Appleton",
        "country": "US"
      },
      {
        "iata": "ATY",
        "name": "Watertown Regional Airport",
        "city": "Watertown",
        "country": "US"
      },
      {
        "iata": "AUG",
        "name": "Augusta State Airport",
        "city": "Augusta",
        "country": "US"
      },
      {
        "iata": "AUM",
        "name": "Austin Municipal Airport",
        "city": "Austin",
        "country": "US"
      },
      {
        "iata": "AUN",
        "name": "Auburn Municipal Airport",
        "city": "Auburn",
        "country": "US"
      },
      {
        "iata": "AUO",
        "name": "Auburn Opelika Robert G. Pitts Airport",
        "city": "Auburn",
        "country": "US"
      },
      {
        "iata": "AUS",
        "name": "Austin Bergstrom International Airport",
        "city": "Austin",
        "country": "US"
      },
      {
        "iata": "AUW",
        "name": "Wausau Downtown Airport",
        "city": "Wausau",
        "country": "US"
      },
      {
        "iata": "AVL",
        "name": "Asheville Regional Airport",
        "city": "Asheville",
        "country": "US"
      },
      {
        "iata": "AVO",
        "name": "Avon Park Executive Airport",
        "city": "Avon Park",
        "country": "US"
      },
      {
        "iata": "AVP",
        "name": "Wilkes Barre Scranton International Airport",
        "city": "Wilkes-Barre/Scranton",
        "country": "US"
      },
      {
        "iata": "AVW",
        "name": "Marana Regional Airport",
        "city": "Tucson",
        "country": "US"
      },
      {
        "iata": "AWM",
        "name": "West Memphis Municipal Airport",
        "city": "West Memphis",
        "country": "US"
      },
      {
        "iata": "AXG",
        "name": "Algona Municipal Airport",
        "city": "Algona",
        "country": "US"
      },
      {
        "iata": "AXN",
        "name": "Chandler Field",
        "city": "Alexandria",
        "country": "US"
      },
      {
        "iata": "AXS",
        "name": "Altus Quartz Mountain Regional Airport",
        "city": "Altus",
        "country": "US"
      },
      {
        "iata": "AXV",
        "name": "Neil Armstrong Airport",
        "city": "Wapakoneta",
        "country": "US"
      },
      {
        "iata": "AXX",
        "name": "Angel Fire Airport",
        "city": "Angel Fire",
        "country": "US"
      },
      {
        "iata": "AYS",
        "name": "Waycross Ware County Airport",
        "city": "Waycross",
        "country": "US"
      },
      {
        "iata": "AZO",
        "name": "Kalamazoo Battle Creek International Airport",
        "city": "Kalamazoo",
        "country": "US"
      },
      {
        "iata": "BAB",
        "name": "Beale Air Force Base",
        "city": "Marysville",
        "country": "US"
      },
      {
        "iata": "BAD",
        "name": "Barksdale Air Force Base",
        "city": "Bossier City",
        "country": "US"
      },
      {
        "iata": "BAF",
        "name": "Barnes Municipal Airport",
        "city": "Westfield/Springfield",
        "country": "US"
      },
      {
        "iata": "BBB",
        "name": "Benson Municipal Airport",
        "city": "Benson",
        "country": "US"
      },
      {
        "iata": "BBD",
        "name": "Curtis Field",
        "city": "Brady",
        "country": "US"
      },
      {
        "iata": "BKG",
        "name": "Branson Airport",
        "city": "Branson",
        "country": "US"
      },
      {
        "iata": "BTN",
        "name": "Marlboro County Jetport H.E. Avent Field",
        "city": "Bennettsville",
        "country": "US"
      },
      {
        "iata": "BBW",
        "name": "Broken Bow Municipal Airport",
        "city": "Broken Bow",
        "country": "US"
      },
      {
        "iata": "BCB",
        "name": "Virginia Tech Montgomery Executive Airport",
        "city": "Blacksburg",
        "country": "US"
      },
      {
        "iata": "BCE",
        "name": "Bryce Canyon Airport",
        "city": "Bryce Canyon",
        "country": "US"
      },
      {
        "iata": "BCT",
        "name": "Boca Raton Airport",
        "city": "Boca Raton",
        "country": "US"
      },
      {
        "iata": "BDE",
        "name": "Baudette International Airport",
        "city": "Baudette",
        "country": "US"
      },
      {
        "iata": "BDL",
        "name": "Bradley International Airport",
        "city": "Hartford",
        "country": "US"
      },
      {
        "iata": "BDR",
        "name": "Igor I Sikorsky Memorial Airport",
        "city": "Bridgeport",
        "country": "US"
      },
      {
        "iata": "BEC",
        "name": "Beech Factory Airport",
        "city": "Wichita",
        "country": "US"
      },
      {
        "iata": "BED",
        "name": "Laurence G Hanscom Field",
        "city": "Bedford",
        "country": "US"
      },
      {
        "iata": "BEH",
        "name": "Southwest Michigan Regional Airport",
        "city": "Benton Harbor",
        "country": "US"
      },
      {
        "iata": "BFD",
        "name": "Bradford Regional Airport",
        "city": "Bradford",
        "country": "US"
      },
      {
        "iata": "BFF",
        "name": "Western Neb. Rgnl/William B. Heilig Airport",
        "city": "Scottsbluff",
        "country": "US"
      },
      {
        "iata": "BFI",
        "name": "Boeing Field King County International Airport",
        "city": "Seattle",
        "country": "US"
      },
      {
        "iata": "BFL",
        "name": "Meadows Field",
        "city": "Bakersfield",
        "country": "US"
      },
      {
        "iata": "BFM",
        "name": "Mobile Downtown Airport",
        "city": "Mobile",
        "country": "US"
      },
      {
        "iata": "BFR",
        "name": "Virgil I Grissom Municipal Airport",
        "city": "Bedford",
        "country": "US"
      },
      {
        "iata": "BGD",
        "name": "Hutchinson County Airport",
        "city": "Borger",
        "country": "US"
      },
      {
        "iata": "BGE",
        "name": "Decatur County Industrial Air Park",
        "city": "Bainbridge",
        "country": "US"
      },
      {
        "iata": "BGM",
        "name": "Greater Binghamton/Edwin A Link field",
        "city": "Binghamton",
        "country": "US"
      },
      {
        "iata": "BGR",
        "name": "Bangor International Airport",
        "city": "Bangor",
        "country": "US"
      },
      {
        "iata": "BHB",
        "name": "Hancock County-Bar Harbor Airport",
        "city": "Bar Harbor",
        "country": "US"
      },
      {
        "iata": "BHM",
        "name": "Birmingham-Shuttlesworth International Airport",
        "city": "Birmingham",
        "country": "US"
      },
      {
        "iata": "BID",
        "name": "Block Island State Airport",
        "city": "Block Island",
        "country": "US"
      },
      {
        "iata": "BIE",
        "name": "Beatrice Municipal Airport",
        "city": "Beatrice",
        "country": "US"
      },
      {
        "iata": "BIF",
        "name": "Biggs Army Air Field (Fort Bliss)",
        "city": "Fort Bliss/El Paso",
        "country": "US"
      },
      {
        "iata": "BIH",
        "name": "Eastern Sierra Regional Airport",
        "city": "Bishop",
        "country": "US"
      },
      {
        "iata": "BIL",
        "name": "Billings Logan International Airport",
        "city": "Billings",
        "country": "US"
      },
      {
        "iata": "BIS",
        "name": "Bismarck Municipal Airport",
        "city": "Bismarck",
        "country": "US"
      },
      {
        "iata": "BIX",
        "name": "Keesler Air Force Base",
        "city": "Biloxi",
        "country": "US"
      },
      {
        "iata": "BJC",
        "name": "Rocky Mountain Metropolitan Airport",
        "city": "Denver",
        "country": "US"
      },
      {
        "iata": "BJI",
        "name": "Bemidji Regional Airport",
        "city": "Bemidji",
        "country": "US"
      },
      {
        "iata": "BKD",
        "name": "Stephens County Airport",
        "city": "Breckenridge",
        "country": "US"
      },
      {
        "iata": "BKE",
        "name": "Baker City Municipal Airport",
        "city": "Baker City",
        "country": "US"
      },
      {
        "iata": "BFK",
        "name": "Buckley Air Force Base",
        "city": "Aurora",
        "country": "US"
      },
      {
        "iata": "BKL",
        "name": "Burke Lakefront Airport",
        "city": "Cleveland",
        "country": "US"
      },
      {
        "iata": "BKT",
        "name": "Allen C Perkinson Blackstone Army Air Field",
        "city": "Blackstone",
        "country": "US"
      },
      {
        "iata": "BKW",
        "name": "Raleigh County Memorial Airport",
        "city": "Beckley",
        "country": "US"
      },
      {
        "iata": "BKX",
        "name": "Brookings Regional Airport",
        "city": "Brookings",
        "country": "US"
      },
      {
        "iata": "BLF",
        "name": "Mercer County Airport",
        "city": "Bluefield",
        "country": "US"
      },
      {
        "iata": "BLH",
        "name": "Blythe Airport",
        "city": "Blythe",
        "country": "US"
      },
      {
        "iata": "BLI",
        "name": "Bellingham International Airport",
        "city": "Bellingham",
        "country": "US"
      },
      {
        "iata": "BLU",
        "name": "Blue Canyon Nyack Airport",
        "city": "Emigrant Gap",
        "country": "US"
      },
      {
        "iata": "BLV",
        "name": "Scott AFB/Midamerica Airport",
        "city": "Belleville",
        "country": "US"
      },
      {
        "iata": "BMC",
        "name": "Brigham City Airport",
        "city": "Brigham City",
        "country": "US"
      },
      {
        "iata": "BMG",
        "name": "Monroe County Airport",
        "city": "Bloomington",
        "country": "US"
      },
      {
        "iata": "BMI",
        "name": "Central Illinois Regional Airport at Bloomington-Normal",
        "city": "Bloomington-Normal",
        "country": "US"
      },
      {
        "iata": "BML",
        "name": "Berlin Regional Airport",
        "city": "Berlin",
        "country": "US"
      },
      {
        "iata": "BMT",
        "name": "Beaumont Municipal Airport",
        "city": "Beaumont",
        "country": "US"
      },
      {
        "iata": "BNA",
        "name": "Nashville International Airport",
        "city": "Nashville",
        "country": "US"
      },
      {
        "iata": "BNG",
        "name": "Banning Municipal Airport",
        "city": "Banning",
        "country": "US"
      },
      {
        "iata": "BNL",
        "name": "Barnwell Regional Airport",
        "city": "Barnwell",
        "country": "US"
      },
      {
        "iata": "BNO",
        "name": "Burns Municipal Airport",
        "city": "Burns",
        "country": "US"
      },
      {
        "iata": "BNW",
        "name": "Boone Municipal Airport",
        "city": "Boone",
        "country": "US"
      },
      {
        "iata": "BOI",
        "name": "Boise Air Terminal/Gowen field",
        "city": "Boise",
        "country": "US"
      },
      {
        "iata": "BOS",
        "name": "General Edward Lawrence Logan International Airport",
        "city": "Boston",
        "country": "US"
      },
      {
        "iata": "BOW",
        "name": "Bartow Municipal Airport",
        "city": "Bartow",
        "country": "US"
      },
      {
        "iata": "BGS",
        "name": "Big Spring Mc Mahon-Wrinkle Airport",
        "city": "Big Spring",
        "country": "US"
      },
      {
        "iata": "BPI",
        "name": "Miley Memorial Field",
        "city": "Big Piney",
        "country": "US"
      },
      {
        "iata": "WMH",
        "name": "Ozark Regional Airport",
        "city": "Mountain Home",
        "country": "US"
      },
      {
        "iata": "BWM",
        "name": "Bowman Municipal Airport",
        "city": "Bowman",
        "country": "US"
      },
      {
        "iata": "BPT",
        "name": "Southeast Texas Regional Airport",
        "city": "Beaumont/Port Arthur",
        "country": "US"
      },
      {
        "iata": "BQK",
        "name": "Brunswick Golden Isles Airport",
        "city": "Brunswick",
        "country": "US"
      },
      {
        "iata": "BRD",
        "name": "Brainerd Lakes Regional Airport",
        "city": "Brainerd",
        "country": "US"
      },
      {
        "iata": "BRL",
        "name": "Southeast Iowa Regional Airport",
        "city": "Burlington",
        "country": "US"
      },
      {
        "iata": "BRO",
        "name": "Brownsville South Padre Island International Airport",
        "city": "Brownsville",
        "country": "US"
      },
      {
        "iata": "BRY",
        "name": "Samuels Field",
        "city": "Bardstown",
        "country": "US"
      },
      {
        "iata": "BTF",
        "name": "Skypark Airport",
        "city": "Bountiful",
        "country": "US"
      },
      {
        "iata": "BTL",
        "name": "W K Kellogg Airport",
        "city": "Battle Creek",
        "country": "US"
      },
      {
        "iata": "BTM",
        "name": "Bert Mooney Airport",
        "city": "Butte",
        "country": "US"
      },
      {
        "iata": "BTR",
        "name": "Baton Rouge Metropolitan Ryan Field",
        "city": "Baton Rouge",
        "country": "US"
      },
      {
        "iata": "BTV",
        "name": "Burlington International Airport",
        "city": "Burlington",
        "country": "US"
      },
      {
        "iata": "BTY",
        "name": "Beatty Airport",
        "city": "Beatty",
        "country": "US"
      },
      {
        "iata": "BUB",
        "name": "Cram Field",
        "city": "Burwell",
        "country": "US"
      },
      {
        "iata": "BUF",
        "name": "Buffalo Niagara International Airport",
        "city": "Buffalo",
        "country": "US"
      },
      {
        "iata": "BUM",
        "name": "Butler Memorial Airport",
        "city": "Butler",
        "country": "US"
      },
      {
        "iata": "BUR",
        "name": "Bob Hope Airport",
        "city": "Burbank",
        "country": "US"
      },
      {
        "iata": "BFP",
        "name": "Beaver County Airport",
        "city": "Beaver Falls",
        "country": "US"
      },
      {
        "iata": "BVO",
        "name": "Bartlesville Municipal Airport",
        "city": "Bartlesville",
        "country": "US"
      },
      {
        "iata": "BLD",
        "name": "Boulder City Municipal Airport",
        "city": "Boulder City",
        "country": "US"
      },
      {
        "iata": "BVX",
        "name": "Batesville Regional Airport",
        "city": "Batesville",
        "country": "US"
      },
      {
        "iata": "BVY",
        "name": "Beverly Municipal Airport",
        "city": "Beverly",
        "country": "US"
      },
      {
        "iata": "BWC",
        "name": "Brawley Municipal Airport",
        "city": "Brawley",
        "country": "US"
      },
      {
        "iata": "BWD",
        "name": "Brownwood Regional Airport",
        "city": "Brownwood",
        "country": "US"
      },
      {
        "iata": "BWG",
        "name": "Bowling Green Warren County Regional Airport",
        "city": "Bowling Green",
        "country": "US"
      },
      {
        "iata": "BWI",
        "name": "Baltimore/Washington International Thurgood Marshal Airport",
        "city": "Baltimore",
        "country": "US"
      },
      {
        "iata": "WAH",
        "name": "Harry Stern Airport",
        "city": "Wahpeton",
        "country": "US"
      },
      {
        "iata": "BXA",
        "name": "George R Carr Memorial Air Field",
        "city": "Bogalusa",
        "country": "US"
      },
      {
        "iata": "BXK",
        "name": "Buckeye Municipal Airport",
        "city": "Buckeye",
        "country": "US"
      },
      {
        "iata": "NHZ",
        "name": "Brunswick Executive Airport",
        "city": "Brunswick",
        "country": "US"
      },
      {
        "iata": "BYS",
        "name": "Bicycle Lake Army Air Field",
        "city": "Fort Irwin/Barstow",
        "country": "US"
      },
      {
        "iata": "BBC",
        "name": "Bay City Municipal Airport",
        "city": "Bay City",
        "country": "US"
      },
      {
        "iata": "BZN",
        "name": "Gallatin Field",
        "city": "Bozeman",
        "country": "US"
      },
      {
        "iata": "CAD",
        "name": "Wexford County Airport",
        "city": "Cadillac",
        "country": "US"
      },
      {
        "iata": "CAE",
        "name": "Columbia Metropolitan Airport",
        "city": "Columbia",
        "country": "US"
      },
      {
        "iata": "CAK",
        "name": "Akron Canton Regional Airport",
        "city": "Akron",
        "country": "US"
      },
      {
        "iata": "CAO",
        "name": "Clayton Municipal Airpark",
        "city": "Clayton",
        "country": "US"
      },
      {
        "iata": "CBE",
        "name": "Greater Cumberland Regional Airport",
        "city": "Cumberland",
        "country": "US"
      },
      {
        "iata": "CBF",
        "name": "Council Bluffs Municipal Airport",
        "city": "Council Bluffs",
        "country": "US"
      },
      {
        "iata": "CBK",
        "name": "Shalz Field",
        "city": "Colby",
        "country": "US"
      },
      {
        "iata": "CBM",
        "name": "Columbus Air Force Base",
        "city": "Columbus",
        "country": "US"
      },
      {
        "iata": "CCB",
        "name": "Cable Airport",
        "city": "Upland",
        "country": "US"
      },
      {
        "iata": "CCR",
        "name": "Buchanan Field",
        "city": "Concord",
        "country": "US"
      },
      {
        "iata": "CCY",
        "name": "Northeast Iowa Regional Airport",
        "city": "Charles City",
        "country": "US"
      },
      {
        "iata": "LLX",
        "name": "Caledonia County Airport",
        "city": "Lyndonville",
        "country": "US"
      },
      {
        "iata": "CDC",
        "name": "Cedar City Regional Airport",
        "city": "Cedar City",
        "country": "US"
      },
      {
        "iata": "CDH",
        "name": "Harrell Field",
        "city": "Camden",
        "country": "US"
      },
      {
        "iata": "CDK",
        "name": "George T Lewis Airport",
        "city": "Cedar Key",
        "country": "US"
      },
      {
        "iata": "CDN",
        "name": "Woodward Field",
        "city": "Camden",
        "country": "US"
      },
      {
        "iata": "CDR",
        "name": "Chadron Municipal Airport",
        "city": "Chadron",
        "country": "US"
      },
      {
        "iata": "CDS",
        "name": "Childress Municipal Airport",
        "city": "Childress",
        "country": "US"
      },
      {
        "iata": "CDW",
        "name": "Essex County Airport",
        "city": "Caldwell",
        "country": "US"
      },
      {
        "iata": "CEC",
        "name": "Jack Mc Namara Field Airport",
        "city": "Crescent City",
        "country": "US"
      },
      {
        "iata": "CEF",
        "name": "Westover ARB/Metropolitan Airport",
        "city": "Springfield/Chicopee",
        "country": "US"
      },
      {
        "iata": "CEZ",
        "name": "Cortez Municipal Airport",
        "city": "Cortez",
        "country": "US"
      },
      {
        "iata": "CGI",
        "name": "Cape Girardeau Regional Airport",
        "city": "Cape Girardeau",
        "country": "US"
      },
      {
        "iata": "CHA",
        "name": "Lovell Field",
        "city": "Chattanooga",
        "country": "US"
      },
      {
        "iata": "CHO",
        "name": "Charlottesville Albemarle Airport",
        "city": "Charlottesville",
        "country": "US"
      },
      {
        "iata": "CHS",
        "name": "Charleston Air Force Base-International Airport",
        "city": "Charleston",
        "country": "US"
      },
      {
        "iata": "CID",
        "name": "The Eastern Iowa Airport",
        "city": "Cedar Rapids",
        "country": "US"
      },
      {
        "iata": "CIU",
        "name": "Chippewa County International Airport",
        "city": "Sault Ste Marie",
        "country": "US"
      },
      {
        "iata": "CKB",
        "name": "North Central West Virginia Airport",
        "city": "Clarksburg",
        "country": "US"
      },
      {
        "iata": "CLE",
        "name": "Cleveland Hopkins International Airport",
        "city": "Cleveland",
        "country": "US"
      },
      {
        "iata": "CLL",
        "name": "Easterwood Field",
        "city": "College Station",
        "country": "US"
      },
      {
        "iata": "CLM",
        "name": "William R Fairchild International Airport",
        "city": "Port Angeles",
        "country": "US"
      },
      {
        "iata": "CLT",
        "name": "Charlotte Douglas International Airport",
        "city": "Charlotte",
        "country": "US"
      },
      {
        "iata": "CMH",
        "name": "Port Columbus International Airport",
        "city": "Columbus",
        "country": "US"
      },
      {
        "iata": "CMI",
        "name": "University of Illinois Willard Airport",
        "city": "Champaign/Urbana",
        "country": "US"
      },
      {
        "iata": "CMX",
        "name": "Houghton County Memorial Airport",
        "city": "Hancock",
        "country": "US"
      },
      {
        "iata": "CNM",
        "name": "Cavern City Air Terminal",
        "city": "Carlsbad",
        "country": "US"
      },
      {
        "iata": "COD",
        "name": "Yellowstone Regional Airport",
        "city": "Cody",
        "country": "US"
      },
      {
        "iata": "COS",
        "name": "City of Colorado Springs Municipal Airport",
        "city": "Colorado Springs",
        "country": "US"
      },
      {
        "iata": "COU",
        "name": "Columbia Regional Airport",
        "city": "Columbia",
        "country": "US"
      },
      {
        "iata": "CPR",
        "name": "Casper-Natrona County International Airport",
        "city": "Casper",
        "country": "US"
      },
      {
        "iata": "CRO",
        "name": "Corcoran Airport",
        "city": "Corcoran",
        "country": "US"
      },
      {
        "iata": "CRP",
        "name": "Corpus Christi International Airport",
        "city": "Corpus Christi",
        "country": "US"
      },
      {
        "iata": "CRW",
        "name": "Yeager Airport",
        "city": "Charleston",
        "country": "US"
      },
      {
        "iata": "CSG",
        "name": "Columbus Metropolitan Airport",
        "city": "Columbus",
        "country": "US"
      },
      {
        "iata": "CVG",
        "name": "Cincinnati Northern Kentucky International Airport",
        "city": "Hebron",
        "country": "US"
      },
      {
        "iata": "CVN",
        "name": "Clovis Municipal Airport",
        "city": "Clovis",
        "country": "US"
      },
      {
        "iata": "CWA",
        "name": "Central Wisconsin Airport",
        "city": "Mosinee",
        "country": "US"
      },
      {
        "iata": "KIP",
        "name": "Kickapoo Downtown Airport",
        "city": "Wichita Falls",
        "country": "US"
      },
      {
        "iata": "CWF",
        "name": "Chennault International Airport",
        "city": "Lake Charles",
        "country": "US"
      },
      {
        "iata": "CYS",
        "name": "Cheyenne Regional Jerry Olson Field",
        "city": "Cheyenne",
        "country": "US"
      },
      {
        "iata": "DAA",
        "name": "Davison Army Air Field",
        "city": "Fort Belvoir",
        "country": "US"
      },
      {
        "iata": "DAB",
        "name": "Daytona Beach International Airport",
        "city": "Daytona Beach",
        "country": "US"
      },
      {
        "iata": "DAG",
        "name": "Barstow Daggett Airport",
        "city": "Daggett",
        "country": "US"
      },
      {
        "iata": "DAL",
        "name": "Dallas Love Field",
        "city": "Dallas",
        "country": "US"
      },
      {
        "iata": "DAN",
        "name": "Danville Regional Airport",
        "city": "Danville",
        "country": "US"
      },
      {
        "iata": "DAY",
        "name": "James M Cox Dayton International Airport",
        "city": "Dayton",
        "country": "US"
      },
      {
        "iata": "DBN",
        "name": "W H 'Bud' Barron Airport",
        "city": "Dublin",
        "country": "US"
      },
      {
        "iata": "DBQ",
        "name": "Dubuque Regional Airport",
        "city": "Dubuque",
        "country": "US"
      },
      {
        "iata": "DCA",
        "name": "Ronald Reagan Washington National Airport",
        "city": "Washington",
        "country": "US"
      },
      {
        "iata": "DCU",
        "name": "Pryor Field Regional Airport",
        "city": "Decatur",
        "country": "US"
      },
      {
        "iata": "DDC",
        "name": "Dodge City Regional Airport",
        "city": "Dodge City",
        "country": "US"
      },
      {
        "iata": "DEC",
        "name": "Decatur Airport",
        "city": "Decatur",
        "country": "US"
      },
      {
        "iata": "DEH",
        "name": "Decorah Municipal Airport",
        "city": "Decorah",
        "country": "US"
      },
      {
        "iata": "DEN",
        "name": "Denver International Airport",
        "city": "Denver",
        "country": "US"
      },
      {
        "iata": "DET",
        "name": "Coleman A. Young Municipal Airport",
        "city": "Detroit",
        "country": "US"
      },
      {
        "iata": "DFI",
        "name": "Defiance Memorial Airport",
        "city": "Defiance",
        "country": "US"
      },
      {
        "iata": "DFW",
        "name": "Dallas Fort Worth International Airport",
        "city": "Dallas-Fort Worth",
        "country": "US"
      },
      {
        "iata": "DGL",
        "name": "Douglas Municipal Airport",
        "city": "Douglas",
        "country": "US"
      },
      {
        "iata": "DGW",
        "name": "Converse County Airport",
        "city": "Douglas",
        "country": "US"
      },
      {
        "iata": "DHN",
        "name": "Dothan Regional Airport",
        "city": "Dothan",
        "country": "US"
      },
      {
        "iata": "DHT",
        "name": "Dalhart Municipal Airport",
        "city": "Dalhart",
        "country": "US"
      },
      {
        "iata": "DIK",
        "name": "Dickinson Theodore Roosevelt Regional Airport",
        "city": "Dickinson",
        "country": "US"
      },
      {
        "iata": "DLH",
        "name": "Duluth International Airport",
        "city": "Duluth",
        "country": "US"
      },
      {
        "iata": "DNL",
        "name": "Daniel Field",
        "city": "Augusta",
        "country": "US"
      },
      {
        "iata": "DPA",
        "name": "Dupage Airport",
        "city": "Chicago/West Chicago",
        "country": "US"
      },
      {
        "iata": "DPG",
        "name": "Michael AAF (Dugway Proving Ground) Airport",
        "city": "Dugway Proving Ground",
        "country": "US"
      },
      {
        "iata": "DRO",
        "name": "Durango La Plata County Airport",
        "city": "Durango",
        "country": "US"
      },
      {
        "iata": "DRT",
        "name": "Del Rio International Airport",
        "city": "Del Rio",
        "country": "US"
      },
      {
        "iata": "DSM",
        "name": "Des Moines International Airport",
        "city": "Des Moines",
        "country": "US"
      },
      {
        "iata": "DSV",
        "name": "Dansville Municipal Airport",
        "city": "Dansville",
        "country": "US"
      },
      {
        "iata": "DTA",
        "name": "Delta Municipal Airport",
        "city": "Delta",
        "country": "US"
      },
      {
        "iata": "DTL",
        "name": "Detroit Lakes Airport - Wething Field",
        "city": "Detroit Lakes",
        "country": "US"
      },
      {
        "iata": "DTN",
        "name": "Shreveport Downtown Airport",
        "city": "Shreveport",
        "country": "US"
      },
      {
        "iata": "DSI",
        "name": "Destin Fort Walton Beach Airport",
        "city": "Destin",
        "country": "US"
      },
      {
        "iata": "DTW",
        "name": "Detroit Metropolitan Wayne County Airport",
        "city": "Detroit",
        "country": "US"
      },
      {
        "iata": "DUA",
        "name": "Eaker Field",
        "city": "Durant",
        "country": "US"
      },
      {
        "iata": "DUC",
        "name": "Halliburton Field",
        "city": "Duncan",
        "country": "US"
      },
      {
        "iata": "DUG",
        "name": "Bisbee Douglas International Airport",
        "city": "Douglas Bisbee",
        "country": "US"
      },
      {
        "iata": "DUJ",
        "name": "DuBois Regional Airport",
        "city": "Dubois",
        "country": "US"
      },
      {
        "iata": "DVL",
        "name": "Devils Lake Regional Airport",
        "city": "Devils Lake",
        "country": "US"
      },
      {
        "iata": "DVN",
        "name": "Davenport Municipal Airport",
        "city": "Davenport",
        "country": "US"
      },
      {
        "iata": "DVT",
        "name": "Phoenix Deer Valley Airport",
        "city": "Phoenix",
        "country": "US"
      },
      {
        "iata": "DWH",
        "name": "David Wayne Hooks Memorial Airport",
        "city": "Houston",
        "country": "US"
      },
      {
        "iata": "DXR",
        "name": "Danbury Municipal Airport",
        "city": "Danbury",
        "country": "US"
      },
      {
        "iata": "DYL",
        "name": "Doylestown Airport",
        "city": "Doylestown",
        "country": "US"
      },
      {
        "iata": "DYS",
        "name": "Dyess Air Force Base",
        "city": "Abilene",
        "country": "US"
      },
      {
        "iata": "CCG",
        "name": "Crane County Airport",
        "city": "Crane",
        "country": "US"
      },
      {
        "iata": "BGQ",
        "name": "Reagan County Airport",
        "city": "Big Lake",
        "country": "US"
      },
      {
        "iata": "BGT",
        "name": "Bagdad Airport",
        "city": "Bagdad",
        "country": "US"
      },
      {
        "iata": "EAR",
        "name": "Kearney Regional Airport",
        "city": "Kearney",
        "country": "US"
      },
      {
        "iata": "EAT",
        "name": "Pangborn Memorial Airport",
        "city": "Wenatchee",
        "country": "US"
      },
      {
        "iata": "EAU",
        "name": "Chippewa Valley Regional Airport",
        "city": "Eau Claire",
        "country": "US"
      },
      {
        "iata": "EBS",
        "name": "Webster City Municipal Airport",
        "city": "Webster City",
        "country": "US"
      },
      {
        "iata": "ECG",
        "name": "Elizabeth City Regional Airport & Coast Guard Air Station",
        "city": "Elizabeth City",
        "country": "US"
      },
      {
        "iata": "ECP",
        "name": "Northwest Florida Beaches International Airport",
        "city": "Panama City Beach",
        "country": "US"
      },
      {
        "iata": "EDC",
        "name": "Austin Executive Airport",
        "city": "Austin",
        "country": "US"
      },
      {
        "iata": "EEN",
        "name": "Dillant Hopkins Airport",
        "city": "Keene",
        "country": "US"
      },
      {
        "iata": "EFK",
        "name": "Newport State Airport",
        "city": "Newport",
        "country": "US"
      },
      {
        "iata": "EGE",
        "name": "Eagle County Regional Airport",
        "city": "Eagle",
        "country": "US"
      },
      {
        "iata": "EKO",
        "name": "Elko Regional Airport",
        "city": "Elko",
        "country": "US"
      },
      {
        "iata": "ELD",
        "name": "South Arkansas Regional At Goodwin Field",
        "city": "El Dorado",
        "country": "US"
      },
      {
        "iata": "ELM",
        "name": "Elmira Corning Regional Airport",
        "city": "Elmira/Corning",
        "country": "US"
      },
      {
        "iata": "ELP",
        "name": "El Paso International Airport",
        "city": "El Paso",
        "country": "US"
      },
      {
        "iata": "END",
        "name": "Vance Air Force Base",
        "city": "Enid",
        "country": "US"
      },
      {
        "iata": "ENV",
        "name": "Wendover Airport",
        "city": "Wendover",
        "country": "US"
      },
      {
        "iata": "ERI",
        "name": "Erie International Tom Ridge Field",
        "city": "Erie",
        "country": "US"
      },
      {
        "iata": "EUG",
        "name": "Mahlon Sweet Field",
        "city": "Eugene",
        "country": "US"
      },
      {
        "iata": "EVV",
        "name": "Evansville Regional Airport",
        "city": "Evansville",
        "country": "US"
      },
      {
        "iata": "EVW",
        "name": "Evanston-Uinta County Airport-Burns Field",
        "city": "Evanston",
        "country": "US"
      },
      {
        "iata": "EWB",
        "name": "New Bedford Regional Airport",
        "city": "New Bedford",
        "country": "US"
      },
      {
        "iata": "EWK",
        "name": "Newton City-County Airport",
        "city": "Newton",
        "country": "US"
      },
      {
        "iata": "EWN",
        "name": "Coastal Carolina Regional Airport",
        "city": "New Bern",
        "country": "US"
      },
      {
        "iata": "EWR",
        "name": "Newark Liberty International Airport",
        "city": "Newark",
        "country": "US"
      },
      {
        "iata": "EYW",
        "name": "Key West International Airport",
        "city": "Key West",
        "country": "US"
      },
      {
        "iata": "FAR",
        "name": "Hector International Airport",
        "city": "Fargo",
        "country": "US"
      },
      {
        "iata": "FAT",
        "name": "Fresno Yosemite International Airport",
        "city": "Fresno",
        "country": "US"
      },
      {
        "iata": "FAY",
        "name": "Fayetteville Regional Grannis Field",
        "city": "Fayetteville",
        "country": "US"
      },
      {
        "iata": "FBG",
        "name": "Simmons Army Air Field",
        "city": "Fort Bragg",
        "country": "US"
      },
      {
        "iata": "FCS",
        "name": "Butts AAF (Fort Carson) Air Field",
        "city": "Fort Carson",
        "country": "US"
      },
      {
        "iata": "FHB",
        "name": "Fernandina Beach Municipal Airport",
        "city": "Fernandina Beach",
        "country": "US"
      },
      {
        "iata": "FRD",
        "name": "Friday Harbor Airport",
        "city": "Friday Harbor",
        "country": "US"
      },
      {
        "iata": "FHU",
        "name": "Sierra Vista Municipal Libby Army Air Field",
        "city": "Fort Huachuca Sierra Vista",
        "country": "US"
      },
      {
        "iata": "FLG",
        "name": "Flagstaff Pulliam Airport",
        "city": "Flagstaff",
        "country": "US"
      },
      {
        "iata": "FLL",
        "name": "Fort Lauderdale Hollywood International Airport",
        "city": "Fort Lauderdale",
        "country": "US"
      },
      {
        "iata": "FLO",
        "name": "Florence Regional Airport",
        "city": "Florence",
        "country": "US"
      },
      {
        "iata": "FNT",
        "name": "Bishop International Airport",
        "city": "Flint",
        "country": "US"
      },
      {
        "iata": "FOD",
        "name": "Fort Dodge Regional Airport",
        "city": "Fort Dodge",
        "country": "US"
      },
      {
        "iata": "FOE",
        "name": "Forbes Field",
        "city": "Topeka",
        "country": "US"
      },
      {
        "iata": "FIL",
        "name": "Fillmore Municipal Airport",
        "city": "Fillmore",
        "country": "US"
      },
      {
        "iata": "FPR",
        "name": "St Lucie County International Airport",
        "city": "Fort Pierce",
        "country": "US"
      },
      {
        "iata": "FRH",
        "name": "French Lick Municipal Airport",
        "city": "French Lick",
        "country": "US"
      },
      {
        "iata": "FRI",
        "name": "Marshall Army Air Field",
        "city": "Fort Riley(Junction City)",
        "country": "US"
      },
      {
        "iata": "FRM",
        "name": "Fairmont Municipal Airport",
        "city": "Fairmont",
        "country": "US"
      },
      {
        "iata": "FSD",
        "name": "Joe Foss Field Airport",
        "city": "Sioux Falls",
        "country": "US"
      },
      {
        "iata": "FSI",
        "name": "Henry Post Army Air Field (Fort Sill)",
        "city": "Fort Sill",
        "country": "US"
      },
      {
        "iata": "FSM",
        "name": "Fort Smith Regional Airport",
        "city": "Fort Smith",
        "country": "US"
      },
      {
        "iata": "FMS",
        "name": "Fort Madison Municipal Airport",
        "city": "Fort Madison",
        "country": "US"
      },
      {
        "iata": "FTW",
        "name": "Fort Worth Meacham International Airport",
        "city": "Fort Worth",
        "country": "US"
      },
      {
        "iata": "FUL",
        "name": "Fullerton Municipal Airport",
        "city": "Fullerton",
        "country": "US"
      },
      {
        "iata": "FWA",
        "name": "Fort Wayne International Airport",
        "city": "Fort Wayne",
        "country": "US"
      },
      {
        "iata": "FYV",
        "name": "Drake Field",
        "city": "Fayetteville",
        "country": "US"
      },
      {
        "iata": "GAB",
        "name": "Gabbs Airport",
        "city": "Gabbs",
        "country": "US"
      },
      {
        "iata": "GAG",
        "name": "Gage Airport",
        "city": "Gage",
        "country": "US"
      },
      {
        "iata": "GBD",
        "name": "Great Bend Municipal Airport",
        "city": "Great Bend",
        "country": "US"
      },
      {
        "iata": "GCC",
        "name": "Gillette Campbell County Airport",
        "city": "Gillette",
        "country": "US"
      },
      {
        "iata": "GCK",
        "name": "Garden City Regional Airport",
        "city": "Garden City",
        "country": "US"
      },
      {
        "iata": "GCN",
        "name": "Grand Canyon National Park Airport",
        "city": "Grand Canyon",
        "country": "US"
      },
      {
        "iata": "GDV",
        "name": "Dawson Community Airport",
        "city": "Glendive",
        "country": "US"
      },
      {
        "iata": "GDY",
        "name": "Grundy Municipal Airport",
        "city": "Grundy",
        "country": "US"
      },
      {
        "iata": "GEG",
        "name": "Spokane International Airport",
        "city": "Spokane",
        "country": "US"
      },
      {
        "iata": "GFK",
        "name": "Grand Forks International Airport",
        "city": "Grand Forks",
        "country": "US"
      },
      {
        "iata": "GGG",
        "name": "East Texas Regional Airport",
        "city": "Longview",
        "country": "US"
      },
      {
        "iata": "GGW",
        "name": "Wokal Field Glasgow International Airport",
        "city": "Glasgow",
        "country": "US"
      },
      {
        "iata": "IDH",
        "name": "Idaho County Airport",
        "city": "Grangeville",
        "country": "US"
      },
      {
        "iata": "GJT",
        "name": "Grand Junction Regional Airport",
        "city": "Grand Junction",
        "country": "US"
      },
      {
        "iata": "GLH",
        "name": "Mid Delta Regional Airport",
        "city": "Greenville",
        "country": "US"
      },
      {
        "iata": "GLS",
        "name": "Scholes International At Galveston Airport",
        "city": "Galveston",
        "country": "US"
      },
      {
        "iata": "GNV",
        "name": "Gainesville Regional Airport",
        "city": "Gainesville",
        "country": "US"
      },
      {
        "iata": "GON",
        "name": "Groton New London Airport",
        "city": "Groton (New London)",
        "country": "US"
      },
      {
        "iata": "FCA",
        "name": "Glacier Park International Airport",
        "city": "Kalispell",
        "country": "US"
      },
      {
        "iata": "GPT",
        "name": "Gulfport Biloxi International Airport",
        "city": "Gulfport",
        "country": "US"
      },
      {
        "iata": "GRB",
        "name": "Austin Straubel International Airport",
        "city": "Green Bay",
        "country": "US"
      },
      {
        "iata": "GRI",
        "name": "Central Nebraska Regional Airport",
        "city": "Grand Island",
        "country": "US"
      },
      {
        "iata": "GRK",
        "name": "Robert Gray  Army Air Field Airport",
        "city": "Fort Hood/Killeen",
        "country": "US"
      },
      {
        "iata": "GRR",
        "name": "Gerald R. Ford International Airport",
        "city": "Grand Rapids",
        "country": "US"
      },
      {
        "iata": "GSO",
        "name": "Piedmont Triad International Airport",
        "city": "Greensboro",
        "country": "US"
      },
      {
        "iata": "GSP",
        "name": "Greenville Spartanburg International Airport",
        "city": "Greenville",
        "country": "US"
      },
      {
        "iata": "GTF",
        "name": "Great Falls International Airport",
        "city": "Great Falls",
        "country": "US"
      },
      {
        "iata": "GTR",
        "name": "Golden Triangle Regional Airport",
        "city": "Columbus/W Point/Starkville",
        "country": "US"
      },
      {
        "iata": "GUC",
        "name": "Gunnison Crested Butte Regional Airport",
        "city": "Gunnison",
        "country": "US"
      },
      {
        "iata": "GUP",
        "name": "Gallup Municipal Airport",
        "city": "Gallup",
        "country": "US"
      },
      {
        "iata": "GVT",
        "name": "Majors Airport",
        "city": "Greenville",
        "country": "US"
      },
      {
        "iata": "GYY",
        "name": "Gary Chicago International Airport",
        "city": "Gary",
        "country": "US"
      },
      {
        "iata": "HDN",
        "name": "Yampa Valley Airport",
        "city": "Hayden",
        "country": "US"
      },
      {
        "iata": "HGR",
        "name": "Hagerstown Regional Richard A Henson Field",
        "city": "Hagerstown",
        "country": "US"
      },
      {
        "iata": "HIB",
        "name": "Chisholm Hibbing Airport",
        "city": "Hibbing",
        "country": "US"
      },
      {
        "iata": "HIO",
        "name": "Portland Hillsboro Airport",
        "city": "Portland",
        "country": "US"
      },
      {
        "iata": "HKY",
        "name": "Hickory Regional Airport",
        "city": "Hickory",
        "country": "US"
      },
      {
        "iata": "HLN",
        "name": "Helena Regional Airport",
        "city": "Helena",
        "country": "US"
      },
      {
        "iata": "HON",
        "name": "Huron Regional Airport",
        "city": "Huron",
        "country": "US"
      },
      {
        "iata": "HOT",
        "name": "Memorial Field",
        "city": "Hot Springs",
        "country": "US"
      },
      {
        "iata": "HOU",
        "name": "William P Hobby Airport",
        "city": "Houston",
        "country": "US"
      },
      {
        "iata": "HPN",
        "name": "Westchester County Airport",
        "city": "White Plains",
        "country": "US"
      },
      {
        "iata": "HRL",
        "name": "Valley International Airport",
        "city": "Harlingen",
        "country": "US"
      },
      {
        "iata": "HRO",
        "name": "Boone County Airport",
        "city": "Harrison",
        "country": "US"
      },
      {
        "iata": "HNC",
        "name": "Billy Mitchell Airport",
        "city": "Hatteras",
        "country": "US"
      },
      {
        "iata": "HSV",
        "name": "Huntsville International Carl T Jones Field",
        "city": "Huntsville",
        "country": "US"
      },
      {
        "iata": "HTS",
        "name": "Tri-State/Milton J. Ferguson Field",
        "city": "Huntington",
        "country": "US"
      },
      {
        "iata": "HUF",
        "name": "Terre Haute International Hulman Field",
        "city": "Terre Haute",
        "country": "US"
      },
      {
        "iata": "HVN",
        "name": "Tweed New Haven Airport",
        "city": "New Haven",
        "country": "US"
      },
      {
        "iata": "HVR",
        "name": "Havre City County Airport",
        "city": "Havre",
        "country": "US"
      },
      {
        "iata": "HHH",
        "name": "Hilton Head Airport",
        "city": "Hilton Head Island",
        "country": "US"
      },
      {
        "iata": "HYA",
        "name": "Barnstable Municipal Boardman Polando Field",
        "city": "Hyannis",
        "country": "US"
      },
      {
        "iata": "HYS",
        "name": "Hays Regional Airport",
        "city": "Hays",
        "country": "US"
      },
      {
        "iata": "IAB",
        "name": "Mc Connell Air Force Base",
        "city": "Wichita",
        "country": "US"
      },
      {
        "iata": "IAD",
        "name": "Washington Dulles International Airport",
        "city": "Dulles",
        "country": "US"
      },
      {
        "iata": "IAG",
        "name": "Niagara Falls International Airport",
        "city": "Niagara Falls",
        "country": "US"
      },
      {
        "iata": "IAH",
        "name": "George Bush Intercontinental Houston Airport",
        "city": "Houston",
        "country": "US"
      },
      {
        "iata": "ICT",
        "name": "Wichita Mid Continent Airport",
        "city": "Wichita",
        "country": "US"
      },
      {
        "iata": "IDA",
        "name": "Idaho Falls Regional Airport",
        "city": "Idaho Falls",
        "country": "US"
      },
      {
        "iata": "XPR",
        "name": "Pine Ridge Airport",
        "city": "Pine Ridge",
        "country": "US"
      },
      {
        "iata": "IFP",
        "name": "Laughlin Bullhead International Airport",
        "city": "Bullhead City",
        "country": "US"
      },
      {
        "iata": "IGM",
        "name": "Kingman Airport",
        "city": "Kingman",
        "country": "US"
      },
      {
        "iata": "ILG",
        "name": "New Castle Airport",
        "city": "Wilmington",
        "country": "US"
      },
      {
        "iata": "ILM",
        "name": "Wilmington International Airport",
        "city": "Wilmington",
        "country": "US"
      },
      {
        "iata": "IMT",
        "name": "Ford Airport",
        "city": "Iron Mountain Kingsford",
        "country": "US"
      },
      {
        "iata": "IND",
        "name": "Indianapolis International Airport",
        "city": "Indianapolis",
        "country": "US"
      },
      {
        "iata": "INL",
        "name": "Falls International Airport",
        "city": "International Falls",
        "country": "US"
      },
      {
        "iata": "INT",
        "name": "Smith Reynolds Airport",
        "city": "Winston Salem",
        "country": "US"
      },
      {
        "iata": "IPL",
        "name": "Imperial County Airport",
        "city": "Imperial",
        "country": "US"
      },
      {
        "iata": "IPT",
        "name": "Williamsport Regional Airport",
        "city": "Williamsport",
        "country": "US"
      },
      {
        "iata": "IRK",
        "name": "Kirksville Regional Airport",
        "city": "Kirksville",
        "country": "US"
      },
      {
        "iata": "ISN",
        "name": "Sloulin Field International Airport",
        "city": "Williston",
        "country": "US"
      },
      {
        "iata": "ISP",
        "name": "Long Island Mac Arthur Airport",
        "city": "Islip",
        "country": "US"
      },
      {
        "iata": "ITH",
        "name": "Ithaca Tompkins Regional Airport",
        "city": "Ithaca",
        "country": "US"
      },
      {
        "iata": "AZA",
        "name": "Phoenix-Mesa-Gateway Airport",
        "city": "Phoenix",
        "country": "US"
      },
      {
        "iata": "IYK",
        "name": "Inyokern Airport",
        "city": "Inyokern",
        "country": "US"
      },
      {
        "iata": "JAC",
        "name": "Jackson Hole Airport",
        "city": "Jackson",
        "country": "US"
      },
      {
        "iata": "JAN",
        "name": "Jackson Evers International Airport",
        "city": "Jackson",
        "country": "US"
      },
      {
        "iata": "JAX",
        "name": "Jacksonville International Airport",
        "city": "Jacksonville",
        "country": "US"
      },
      {
        "iata": "JBR",
        "name": "Jonesboro Municipal Airport",
        "city": "Jonesboro",
        "country": "US"
      },
      {
        "iata": "JFK",
        "name": "John F Kennedy International Airport",
        "city": "New York",
        "country": "US"
      },
      {
        "iata": "JLN",
        "name": "Joplin Regional Airport",
        "city": "Joplin",
        "country": "US"
      },
      {
        "iata": "JMS",
        "name": "Jamestown Regional Airport",
        "city": "Jamestown",
        "country": "US"
      },
      {
        "iata": "USA",
        "name": "Concord Regional Airport",
        "city": "Concord",
        "country": "US"
      },
      {
        "iata": "JST",
        "name": "John Murtha Johnstown Cambria County Airport",
        "city": "Johnstown",
        "country": "US"
      },
      {
        "iata": "BXS",
        "name": "Borrego Valley Airport",
        "city": "Borrego Springs",
        "country": "US"
      },
      {
        "iata": "LAF",
        "name": "Purdue University Airport",
        "city": "Lafayette",
        "country": "US"
      },
      {
        "iata": "LAN",
        "name": "Capital City Airport",
        "city": "Lansing",
        "country": "US"
      },
      {
        "iata": "LAR",
        "name": "Laramie Regional Airport",
        "city": "Laramie",
        "country": "US"
      },
      {
        "iata": "LAS",
        "name": "Harry Reid International Airport",
        "city": "Las Vegas",
        "country": "US"
      },
      {
        "iata": "LAW",
        "name": "Lawton Fort Sill Regional Airport",
        "city": "Lawton",
        "country": "US"
      },
      {
        "iata": "LAX",
        "name": "Los Angeles International Airport",
        "city": "Los Angeles",
        "country": "US"
      },
      {
        "iata": "LBB",
        "name": "Lubbock Preston Smith International Airport",
        "city": "Lubbock",
        "country": "US"
      },
      {
        "iata": "LBE",
        "name": "Arnold Palmer Regional Airport",
        "city": "Latrobe",
        "country": "US"
      },
      {
        "iata": "LBF",
        "name": "North Platte Regional Airport Lee Bird Field",
        "city": "North Platte",
        "country": "US"
      },
      {
        "iata": "LBL",
        "name": "Liberal Mid-America Regional Airport",
        "city": "Liberal",
        "country": "US"
      },
      {
        "iata": "LCH",
        "name": "Lake Charles Regional Airport",
        "city": "Lake Charles",
        "country": "US"
      },
      {
        "iata": "LEB",
        "name": "Lebanon Municipal Airport",
        "city": "Lebanon",
        "country": "US"
      },
      {
        "iata": "LEX",
        "name": "Blue Grass Airport",
        "city": "Lexington",
        "country": "US"
      },
      {
        "iata": "LFT",
        "name": "Lafayette Regional Airport",
        "city": "Lafayette",
        "country": "US"
      },
      {
        "iata": "LGA",
        "name": "La Guardia Airport",
        "city": "New York",
        "country": "US"
      },
      {
        "iata": "LGB",
        "name": "Long Beach /Daugherty Field/ Airport",
        "city": "Long Beach",
        "country": "US"
      },
      {
        "iata": "LIT",
        "name": "Adams Field",
        "city": "Little Rock",
        "country": "US"
      },
      {
        "iata": "LMT",
        "name": "Klamath Falls Airport",
        "city": "Klamath Falls",
        "country": "US"
      },
      {
        "iata": "LNK",
        "name": "Lincoln Airport",
        "city": "Lincoln",
        "country": "US"
      },
      {
        "iata": "LNS",
        "name": "Lancaster Airport",
        "city": "Lancaster",
        "country": "US"
      },
      {
        "iata": "BBX",
        "name": "Wings Field",
        "city": "Philadelphia",
        "country": "US"
      },
      {
        "iata": "LRD",
        "name": "Laredo International Airport",
        "city": "Laredo",
        "country": "US"
      },
      {
        "iata": "LRU",
        "name": "Las Cruces International Airport",
        "city": "Las Cruces",
        "country": "US"
      },
      {
        "iata": "LSE",
        "name": "La Crosse Municipal Airport",
        "city": "La Crosse",
        "country": "US"
      },
      {
        "iata": "LUK",
        "name": "Cincinnati Municipal Airport Lunken Field",
        "city": "Cincinnati",
        "country": "US"
      },
      {
        "iata": "LWB",
        "name": "Greenbrier Valley Airport",
        "city": "Lewisburg",
        "country": "US"
      },
      {
        "iata": "LWS",
        "name": "Lewiston Nez Perce County Airport",
        "city": "Lewiston",
        "country": "US"
      },
      {
        "iata": "LWT",
        "name": "Lewistown Municipal Airport",
        "city": "Lewistown",
        "country": "US"
      },
      {
        "iata": "LYH",
        "name": "Lynchburg Regional Preston Glenn Field",
        "city": "Lynchburg",
        "country": "US"
      },
      {
        "iata": "MAF",
        "name": "Midland International Airport",
        "city": "Midland",
        "country": "US"
      },
      {
        "iata": "MBS",
        "name": "MBS International Airport",
        "city": "Saginaw",
        "country": "US"
      },
      {
        "iata": "MCE",
        "name": "Merced Regional Macready Field",
        "city": "Merced",
        "country": "US"
      },
      {
        "iata": "MCI",
        "name": "Kansas City International Airport",
        "city": "Kansas City",
        "country": "US"
      },
      {
        "iata": "MCN",
        "name": "Middle Georgia Regional Airport",
        "city": "Macon",
        "country": "US"
      },
      {
        "iata": "MCO",
        "name": "Orlando International Airport",
        "city": "Orlando",
        "country": "US"
      },
      {
        "iata": "MCW",
        "name": "Mason City Municipal Airport",
        "city": "Mason City",
        "country": "US"
      },
      {
        "iata": "MDD",
        "name": "Midland Airpark",
        "city": "Midland",
        "country": "US"
      },
      {
        "iata": "MDH",
        "name": "Southern Illinois Airport",
        "city": "Carbondale/Murphysboro",
        "country": "US"
      },
      {
        "iata": "MDT",
        "name": "Harrisburg International Airport",
        "city": "Harrisburg",
        "country": "US"
      },
      {
        "iata": "MDW",
        "name": "Chicago Midway International Airport",
        "city": "Chicago",
        "country": "US"
      },
      {
        "iata": "MEI",
        "name": "Key Field",
        "city": "Meridian",
        "country": "US"
      },
      {
        "iata": "MEM",
        "name": "Memphis International Airport",
        "city": "Memphis",
        "country": "US"
      },
      {
        "iata": "MFE",
        "name": "Mc Allen Miller International Airport",
        "city": "Mc Allen",
        "country": "US"
      },
      {
        "iata": "MFR",
        "name": "Rogue Valley International Medford Airport",
        "city": "Medford",
        "country": "US"
      },
      {
        "iata": "MGM",
        "name": "Montgomery Regional (Dannelly Field) Airport",
        "city": "Montgomery",
        "country": "US"
      },
      {
        "iata": "MGW",
        "name": "Morgantown Municipal Walter L. Bill Hart Field",
        "city": "Morgantown",
        "country": "US"
      },
      {
        "iata": "MHK",
        "name": "Manhattan Regional Airport",
        "city": "Manhattan",
        "country": "US"
      },
      {
        "iata": "MHT",
        "name": "Manchester Airport",
        "city": "Manchester",
        "country": "US"
      },
      {
        "iata": "MHV",
        "name": "Mojave Airport",
        "city": "Mojave",
        "country": "US"
      },
      {
        "iata": "MIA",
        "name": "Miami International Airport",
        "city": "Miami",
        "country": "US"
      },
      {
        "iata": "MIE",
        "name": "Delaware County Johnson Field",
        "city": "Muncie",
        "country": "US"
      },
      {
        "iata": "MKC",
        "name": "Charles B. Wheeler Downtown Airport",
        "city": "Kansas City",
        "country": "US"
      },
      {
        "iata": "MKE",
        "name": "General Mitchell International Airport",
        "city": "Milwaukee",
        "country": "US"
      },
      {
        "iata": "MKG",
        "name": "Muskegon County Airport",
        "city": "Muskegon",
        "country": "US"
      },
      {
        "iata": "MKL",
        "name": "Mc Kellar Sipes Regional Airport",
        "city": "Jackson",
        "country": "US"
      },
      {
        "iata": "MLB",
        "name": "Melbourne International Airport",
        "city": "Melbourne",
        "country": "US"
      },
      {
        "iata": "MLI",
        "name": "Quad City International Airport",
        "city": "Moline",
        "country": "US"
      },
      {
        "iata": "MLS",
        "name": "Frank Wiley Field",
        "city": "Miles City",
        "country": "US"
      },
      {
        "iata": "MLU",
        "name": "Monroe Regional Airport",
        "city": "Monroe",
        "country": "US"
      },
      {
        "iata": "MMH",
        "name": "Mammoth Yosemite Airport",
        "city": "Mammoth Lakes",
        "country": "US"
      },
      {
        "iata": "MMU",
        "name": "Morristown Municipal Airport",
        "city": "Morristown",
        "country": "US"
      },
      {
        "iata": "MOB",
        "name": "Mobile Regional Airport",
        "city": "Mobile",
        "country": "US"
      },
      {
        "iata": "MOD",
        "name": "Modesto City Co-Harry Sham Field",
        "city": "Modesto",
        "country": "US"
      },
      {
        "iata": "MOT",
        "name": "Minot International Airport",
        "city": "Minot",
        "country": "US"
      },
      {
        "iata": "RMY",
        "name": "Mariposa Yosemite Airport",
        "city": "Mariposa",
        "country": "US"
      },
      {
        "iata": "MPV",
        "name": "Edward F Knapp State Airport",
        "city": "Barre/Montpelier",
        "country": "US"
      },
      {
        "iata": "MRY",
        "name": "Monterey Peninsula Airport",
        "city": "Monterey",
        "country": "US"
      },
      {
        "iata": "MSL",
        "name": "Northwest Alabama Regional Airport",
        "city": "Muscle Shoals",
        "country": "US"
      },
      {
        "iata": "MSN",
        "name": "Dane County Regional Truax Field",
        "city": "Madison",
        "country": "US"
      },
      {
        "iata": "MSO",
        "name": "Missoula International Airport",
        "city": "Missoula",
        "country": "US"
      },
      {
        "iata": "MSP",
        "name": "Minneapolis-St Paul International/Wold-Chamberlain Airport",
        "city": "Minneapolis",
        "country": "US"
      },
      {
        "iata": "MSS",
        "name": "Massena International Richards Field",
        "city": "Massena",
        "country": "US"
      },
      {
        "iata": "MSY",
        "name": "Louis Armstrong New Orleans International Airport",
        "city": "New Orleans",
        "country": "US"
      },
      {
        "iata": "MTJ",
        "name": "Montrose Regional Airport",
        "city": "Montrose",
        "country": "US"
      },
      {
        "iata": "MVL",
        "name": "Morrisville Stowe State Airport",
        "city": "Morrisville",
        "country": "US"
      },
      {
        "iata": "MVY",
        "name": "Martha's Vineyard Airport",
        "city": "Martha's Vineyard",
        "country": "US"
      },
      {
        "iata": "MYR",
        "name": "Myrtle Beach International Airport",
        "city": "Myrtle Beach",
        "country": "US"
      },
      {
        "iata": "DGN",
        "name": "Dahlgren Naval Surface Warfare Center Airport",
        "city": "Dahlgren",
        "country": "US"
      },
      {
        "iata": "NEL",
        "name": "Lakehurst NAES /Maxfield Field",
        "city": "Lakehurst",
        "country": "US"
      },
      {
        "iata": "NJK",
        "name": "El Centro Naf Airport",
        "city": "El Centro",
        "country": "US"
      },
      {
        "iata": "YUM",
        "name": "Yuma MCAS/Yuma International Airport",
        "city": "Yuma",
        "country": "US"
      },
      {
        "iata": "NVN",
        "name": "Nervino Airport",
        "city": "Beckwourth",
        "country": "US"
      },
      {
        "iata": "ODC",
        "name": "Oakdale Airport",
        "city": "Oakdale",
        "country": "US"
      },
      {
        "iata": "EYR",
        "name": "Yerington Municipal Airport",
        "city": "Yerington",
        "country": "US"
      },
      {
        "iata": "OAJ",
        "name": "Albert J Ellis Airport",
        "city": "Jacksonville",
        "country": "US"
      },
      {
        "iata": "OAK",
        "name": "Metropolitan Oakland International Airport",
        "city": "Oakland",
        "country": "US"
      },
      {
        "iata": "OAR",
        "name": "Marina Municipal Airport",
        "city": "Marina",
        "country": "US"
      },
      {
        "iata": "OGS",
        "name": "Ogdensburg International Airport",
        "city": "Ogdensburg",
        "country": "US"
      },
      {
        "iata": "OKC",
        "name": "Will Rogers World Airport",
        "city": "Oklahoma City",
        "country": "US"
      },
      {
        "iata": "OLD",
        "name": "Dewitt FieldOld Town Municipal Airport",
        "city": "Old Town",
        "country": "US"
      },
      {
        "iata": "OLM",
        "name": "Olympia Regional Airport",
        "city": "Olympia",
        "country": "US"
      },
      {
        "iata": "OMA",
        "name": "Eppley Airfield",
        "city": "Omaha",
        "country": "US"
      },
      {
        "iata": "ONT",
        "name": "Ontario International Airport",
        "city": "Ontario",
        "country": "US"
      },
      {
        "iata": "ORD",
        "name": "Chicago O'Hare International Airport",
        "city": "Chicago",
        "country": "US"
      },
      {
        "iata": "ORF",
        "name": "Norfolk International Airport",
        "city": "Norfolk",
        "country": "US"
      },
      {
        "iata": "ORH",
        "name": "Worcester Regional Airport",
        "city": "Worcester",
        "country": "US"
      },
      {
        "iata": "ESD",
        "name": "Orcas Island Airport",
        "city": "Eastsound",
        "country": "US"
      },
      {
        "iata": "OSH",
        "name": "Wittman Regional Airport",
        "city": "Oshkosh",
        "country": "US"
      },
      {
        "iata": "OTH",
        "name": "Southwest Oregon Regional Airport",
        "city": "North Bend",
        "country": "US"
      },
      {
        "iata": "OTM",
        "name": "Ottumwa Regional Airport",
        "city": "Ottumwa",
        "country": "US"
      },
      {
        "iata": "OWB",
        "name": "Owensboro Daviess County Airport",
        "city": "Owensboro",
        "country": "US"
      },
      {
        "iata": "BSQ",
        "name": "Bisbee Municipal Airport",
        "city": "Bisbee",
        "country": "US"
      },
      {
        "iata": "HBK",
        "name": "Holbrook Municipal Airport",
        "city": "Holbrook",
        "country": "US"
      },
      {
        "iata": "CWX",
        "name": "Cochise County Airport",
        "city": "Willcox",
        "country": "US"
      },
      {
        "iata": "PAE",
        "name": "Snohomish County (Paine Field) Airport",
        "city": "Everett",
        "country": "US"
      },
      {
        "iata": "PAH",
        "name": "Barkley Regional Airport",
        "city": "Paducah",
        "country": "US"
      },
      {
        "iata": "PBG",
        "name": "Plattsburgh International Airport",
        "city": "Plattsburgh",
        "country": "US"
      },
      {
        "iata": "PBI",
        "name": "Palm Beach International Airport",
        "city": "West Palm Beach",
        "country": "US"
      },
      {
        "iata": "PDK",
        "name": "DeKalb Peachtree Airport",
        "city": "Atlanta",
        "country": "US"
      },
      {
        "iata": "PDX",
        "name": "Portland International Airport",
        "city": "Portland",
        "country": "US"
      },
      {
        "iata": "PFC",
        "name": "Pacific City State Airport",
        "city": "Pacific City",
        "country": "US"
      },
      {
        "iata": "PFN",
        "name": "Panama City-Bay Co International Airport",
        "city": "Panama City",
        "country": "US"
      },
      {
        "iata": "PGA",
        "name": "Page Municipal Airport",
        "city": "Page",
        "country": "US"
      },
      {
        "iata": "PGV",
        "name": "Pitt Greenville Airport",
        "city": "Greenville",
        "country": "US"
      },
      {
        "iata": "PHF",
        "name": "Newport News Williamsburg International Airport",
        "city": "Newport News",
        "country": "US"
      },
      {
        "iata": "ADR",
        "name": "Robert F Swinnie Airport",
        "city": "Andrews",
        "country": "US"
      },
      {
        "iata": "PHL",
        "name": "Philadelphia International Airport",
        "city": "Philadelphia",
        "country": "US"
      },
      {
        "iata": "PHX",
        "name": "Phoenix Sky Harbor International Airport",
        "city": "Phoenix",
        "country": "US"
      },
      {
        "iata": "PIA",
        "name": "Greater Peoria Regional Airport",
        "city": "Peoria",
        "country": "US"
      },
      {
        "iata": "PIB",
        "name": "Hattiesburg Laurel Regional Airport",
        "city": "Hattiesburg/Laurel",
        "country": "US"
      },
      {
        "iata": "PIE",
        "name": "St Petersburg Clearwater International Airport",
        "city": "St Petersburg-Clearwater",
        "country": "US"
      },
      {
        "iata": "PIH",
        "name": "Pocatello Regional Airport",
        "city": "Pocatello",
        "country": "US"
      },
      {
        "iata": "PIR",
        "name": "Pierre Regional Airport",
        "city": "Pierre",
        "country": "US"
      },
      {
        "iata": "PIT",
        "name": "Pittsburgh International Airport",
        "city": "Pittsburgh",
        "country": "US"
      },
      {
        "iata": "PKB",
        "name": "Mid Ohio Valley Regional Airport",
        "city": "Parkersburg",
        "country": "US"
      },
      {
        "iata": "PLN",
        "name": "Pellston Regional Airport of Emmet County Airport",
        "city": "Pellston",
        "country": "US"
      },
      {
        "iata": "PMD",
        "name": "Palmdale Regional/USAF Plant 42 Airport",
        "city": "Palmdale",
        "country": "US"
      },
      {
        "iata": "PNS",
        "name": "Pensacola Regional Airport",
        "city": "Pensacola",
        "country": "US"
      },
      {
        "iata": "POU",
        "name": "Dutchess County Airport",
        "city": "Poughkeepsie",
        "country": "US"
      },
      {
        "iata": "PQI",
        "name": "Northern Maine Regional Airport at Presque Isle",
        "city": "Presque Isle",
        "country": "US"
      },
      {
        "iata": "PRC",
        "name": "Ernest A. Love Field",
        "city": "Prescott",
        "country": "US"
      },
      {
        "iata": "PSC",
        "name": "Tri Cities Airport",
        "city": "Pasco",
        "country": "US"
      },
      {
        "iata": "PSM",
        "name": "Portsmouth International at Pease Airport",
        "city": "Portsmouth",
        "country": "US"
      },
      {
        "iata": "PSP",
        "name": "Palm Springs International Airport",
        "city": "Palm Springs",
        "country": "US"
      },
      {
        "iata": "PTK",
        "name": "Oakland County International Airport",
        "city": "Pontiac",
        "country": "US"
      },
      {
        "iata": "PUB",
        "name": "Pueblo Memorial Airport",
        "city": "Pueblo",
        "country": "US"
      },
      {
        "iata": "PUW",
        "name": "Pullman Moscow Regional Airport",
        "city": "Pullman/Moscow",
        "country": "US"
      },
      {
        "iata": "PVD",
        "name": "Theodore Francis Green State Airport",
        "city": "Providence",
        "country": "US"
      },
      {
        "iata": "PWM",
        "name": "Portland International Jetport Airport",
        "city": "Portland",
        "country": "US"
      },
      {
        "iata": "PWT",
        "name": "Bremerton National Airport",
        "city": "Bremerton",
        "country": "US"
      },
      {
        "iata": "RAP",
        "name": "Rapid City Regional Airport",
        "city": "Rapid City",
        "country": "US"
      },
      {
        "iata": "RCT",
        "name": "Nartron Field",
        "city": "Reed City",
        "country": "US"
      },
      {
        "iata": "RDD",
        "name": "Redding Municipal Airport",
        "city": "Redding",
        "country": "US"
      },
      {
        "iata": "RDG",
        "name": "Reading Regional Carl A Spaatz Field",
        "city": "Reading",
        "country": "US"
      },
      {
        "iata": "RDM",
        "name": "Roberts Field",
        "city": "Redmond",
        "country": "US"
      },
      {
        "iata": "RDU",
        "name": "Raleigh Durham International Airport",
        "city": "Raleigh/Durham",
        "country": "US"
      },
      {
        "iata": "RFD",
        "name": "Chicago Rockford International Airport",
        "city": "Chicago/Rockford",
        "country": "US"
      },
      {
        "iata": "RHI",
        "name": "Rhinelander Oneida County Airport",
        "city": "Rhinelander",
        "country": "US"
      },
      {
        "iata": "RIC",
        "name": "Richmond International Airport",
        "city": "Richmond",
        "country": "US"
      },
      {
        "iata": "RKD",
        "name": "Knox County Regional Airport",
        "city": "Rockland",
        "country": "US"
      },
      {
        "iata": "RKS",
        "name": "Rock Springs Sweetwater County Airport",
        "city": "Rock Springs",
        "country": "US"
      },
      {
        "iata": "RNO",
        "name": "Reno Tahoe International Airport",
        "city": "Reno",
        "country": "US"
      },
      {
        "iata": "ROA",
        "name": "Roanoke Regional Woodrum Field",
        "city": "Roanoke",
        "country": "US"
      },
      {
        "iata": "ROC",
        "name": "Greater Rochester International Airport",
        "city": "Rochester",
        "country": "US"
      },
      {
        "iata": "ROW",
        "name": "Roswell International Air Center Airport",
        "city": "Roswell",
        "country": "US"
      },
      {
        "iata": "RQO",
        "name": "El Reno Regional Airport",
        "city": "El Reno",
        "country": "US"
      },
      {
        "iata": "RST",
        "name": "Rochester International Airport",
        "city": "Rochester",
        "country": "US"
      },
      {
        "iata": "RSW",
        "name": "Southwest Florida International Airport",
        "city": "Fort Myers",
        "country": "US"
      },
      {
        "iata": "RUT",
        "name": "Rutland - Southern Vermont Regional Airport",
        "city": "Rutland",
        "country": "US"
      },
      {
        "iata": "RWI",
        "name": "Rocky Mount Wilson Regional Airport",
        "city": "Rocky Mount",
        "country": "US"
      },
      {
        "iata": "RXE",
        "name": "Rexburg Madison County Airport",
        "city": "Rexburg",
        "country": "US"
      },
      {
        "iata": "AHM",
        "name": "Ashland Municipal Sumner Parker Field",
        "city": "Ashland",
        "country": "US"
      },
      {
        "iata": "BDY",
        "name": "Bandon State Airport",
        "city": "Bandon",
        "country": "US"
      },
      {
        "iata": "SUO",
        "name": "Sunriver Airport",
        "city": "Sunriver",
        "country": "US"
      },
      {
        "iata": "VSK",
        "name": "Vista Field",
        "city": "Kennewick",
        "country": "US"
      },
      {
        "iata": "SAF",
        "name": "Santa Fe Municipal Airport",
        "city": "Santa Fe",
        "country": "US"
      },
      {
        "iata": "SAN",
        "name": "San Diego International Airport",
        "city": "San Diego",
        "country": "US"
      },
      {
        "iata": "SAS",
        "name": "Salton Sea Airport",
        "city": "Salton City",
        "country": "US"
      },
      {
        "iata": "SAT",
        "name": "San Antonio International Airport",
        "city": "San Antonio",
        "country": "US"
      },
      {
        "iata": "SAV",
        "name": "Savannah Hilton Head International Airport",
        "city": "Savannah",
        "country": "US"
      },
      {
        "iata": "MQT",
        "name": "Sawyer International Airport",
        "city": "Marquette",
        "country": "US"
      },
      {
        "iata": "SBA",
        "name": "Santa Barbara Municipal Airport",
        "city": "Santa Barbara",
        "country": "US"
      },
      {
        "iata": "SBN",
        "name": "South Bend Regional Airport",
        "city": "South Bend",
        "country": "US"
      },
      {
        "iata": "SBP",
        "name": "San Luis County Regional Airport",
        "city": "San Luis Obispo",
        "country": "US"
      },
      {
        "iata": "SBY",
        "name": "Salisbury Ocean City Wicomico Regional Airport",
        "city": "Salisbury",
        "country": "US"
      },
      {
        "iata": "SDF",
        "name": "Louisville International Standiford Field",
        "city": "Louisville",
        "country": "US"
      },
      {
        "iata": "SDY",
        "name": "Sidney Richland Municipal Airport",
        "city": "Sidney",
        "country": "US"
      },
      {
        "iata": "SEA",
        "name": "Seattle Tacoma International Airport",
        "city": "Seattle",
        "country": "US"
      },
      {
        "iata": "SFB",
        "name": "Orlando Sanford International Airport",
        "city": "Orlando",
        "country": "US"
      },
      {
        "iata": "SFO",
        "name": "San Francisco International Airport",
        "city": "San Francisco",
        "country": "US"
      },
      {
        "iata": "SGF",
        "name": "Springfield Branson National Airport",
        "city": "Springfield",
        "country": "US"
      },
      {
        "iata": "UST",
        "name": "St Augustine Airport",
        "city": "St Augustine",
        "country": "US"
      },
      {
        "iata": "SGU",
        "name": "St George Municipal Airport",
        "city": "St George",
        "country": "US"
      },
      {
        "iata": "SHD",
        "name": "Shenandoah Valley Regional Airport",
        "city": "Staunton/Waynesboro/Harrisonburg",
        "country": "US"
      },
      {
        "iata": "SHR",
        "name": "Sheridan County Airport",
        "city": "Sheridan",
        "country": "US"
      },
      {
        "iata": "SHV",
        "name": "Shreveport Regional Airport",
        "city": "Shreveport",
        "country": "US"
      },
      {
        "iata": "SJC",
        "name": "Norman Y. Mineta San Jose International Airport",
        "city": "San Jose",
        "country": "US"
      },
      {
        "iata": "SJT",
        "name": "San Angelo Regional Mathis Field",
        "city": "San Angelo",
        "country": "US"
      },
      {
        "iata": "SLC",
        "name": "Salt Lake City International Airport",
        "city": "Salt Lake City",
        "country": "US"
      },
      {
        "iata": "SLK",
        "name": "Adirondack Regional Airport",
        "city": "Saranac Lake",
        "country": "US"
      },
      {
        "iata": "SLN",
        "name": "Salina Municipal Airport",
        "city": "Salina",
        "country": "US"
      },
      {
        "iata": "SMF",
        "name": "Sacramento International Airport",
        "city": "Sacramento",
        "country": "US"
      },
      {
        "iata": "SMX",
        "name": "Santa Maria Pub/Capt G Allan Hancock Field",
        "city": "Santa Maria",
        "country": "US"
      },
      {
        "iata": "SNA",
        "name": "John Wayne Airport-Orange County Airport",
        "city": "Santa Ana",
        "country": "US"
      },
      {
        "iata": "SOW",
        "name": "Show Low Regional Airport",
        "city": "Show Low",
        "country": "US"
      },
      {
        "iata": "SPI",
        "name": "Abraham Lincoln Capital Airport",
        "city": "Springfield",
        "country": "US"
      },
      {
        "iata": "SPS",
        "name": "Sheppard Air Force Base-Wichita Falls Municipal Airport",
        "city": "Wichita Falls",
        "country": "US"
      },
      {
        "iata": "SRQ",
        "name": "Sarasota Bradenton International Airport",
        "city": "Sarasota/Bradenton",
        "country": "US"
      },
      {
        "iata": "STC",
        "name": "St Cloud Regional Airport",
        "city": "St Cloud",
        "country": "US"
      },
      {
        "iata": "STL",
        "name": "Lambert St Louis International Airport",
        "city": "St Louis",
        "country": "US"
      },
      {
        "iata": "STP",
        "name": "St Paul Downtown Holman Field",
        "city": "St Paul",
        "country": "US"
      },
      {
        "iata": "STS",
        "name": "Charles M. Schulz Sonoma County Airport",
        "city": "Santa Rosa",
        "country": "US"
      },
      {
        "iata": "SUN",
        "name": "Friedman Memorial Airport",
        "city": "Hailey",
        "country": "US"
      },
      {
        "iata": "SUX",
        "name": "Sioux Gateway Col. Bud Day Field",
        "city": "Sioux City",
        "country": "US"
      },
      {
        "iata": "SVC",
        "name": "Grant County Airport",
        "city": "Silver City",
        "country": "US"
      },
      {
        "iata": "SWF",
        "name": "Stewart International Airport",
        "city": "Newburgh",
        "country": "US"
      },
      {
        "iata": "SWO",
        "name": "Stillwater Regional Airport",
        "city": "Stillwater",
        "country": "US"
      },
      {
        "iata": "SYN",
        "name": "Stanton Airfield",
        "city": "Stanton",
        "country": "US"
      },
      {
        "iata": "SYR",
        "name": "Syracuse Hancock International Airport",
        "city": "Syracuse",
        "country": "US"
      },
      {
        "iata": "SZN",
        "name": "Santa Cruz Island Airport",
        "city": "Santa Barbara",
        "country": "US"
      },
      {
        "iata": "SZP",
        "name": "Santa Paula Airport",
        "city": "Santa Paula",
        "country": "US"
      },
      {
        "iata": "TAD",
        "name": "Perry Stokes Airport",
        "city": "Trinidad",
        "country": "US"
      },
      {
        "iata": "TBN",
        "name": "Waynesville-St. Robert Regional Forney field",
        "city": "Fort Leonard Wood",
        "country": "US"
      },
      {
        "iata": "TCL",
        "name": "Tuscaloosa Regional Airport",
        "city": "Tuscaloosa",
        "country": "US"
      },
      {
        "iata": "TEX",
        "name": "Telluride Regional Airport",
        "city": "Telluride",
        "country": "US"
      },
      {
        "iata": "TLH",
        "name": "Tallahassee Regional Airport",
        "city": "Tallahassee",
        "country": "US"
      },
      {
        "iata": "TMB",
        "name": "Miami Executive Airport",
        "city": "Miami",
        "country": "US"
      },
      {
        "iata": "OTK",
        "name": "Tillamook Airport",
        "city": "Tillamook",
        "country": "US"
      },
      {
        "iata": "ASQ",
        "name": "Austin Airport",
        "city": "Austin",
        "country": "US"
      },
      {
        "iata": "TOL",
        "name": "Toledo Express Airport",
        "city": "Toledo",
        "country": "US"
      },
      {
        "iata": "TPA",
        "name": "Tampa International Airport",
        "city": "Tampa",
        "country": "US"
      },
      {
        "iata": "TPL",
        "name": "Draughon Miller Central Texas Regional Airport",
        "city": "Temple",
        "country": "US"
      },
      {
        "iata": "TRI",
        "name": "Tri Cities Regional Tn Va Airport",
        "city": "Bristol/Johnson/Kingsport",
        "country": "US"
      },
      {
        "iata": "TTN",
        "name": "Trenton Mercer Airport",
        "city": "Trenton",
        "country": "US"
      },
      {
        "iata": "TUL",
        "name": "Tulsa International Airport",
        "city": "Tulsa",
        "country": "US"
      },
      {
        "iata": "TUP",
        "name": "Tupelo Regional Airport",
        "city": "Tupelo",
        "country": "US"
      },
      {
        "iata": "TUS",
        "name": "Tucson International Airport",
        "city": "Tucson",
        "country": "US"
      },
      {
        "iata": "TVC",
        "name": "Cherry Capital Airport",
        "city": "Traverse City",
        "country": "US"
      },
      {
        "iata": "TVL",
        "name": "Lake Tahoe Airport",
        "city": "South Lake Tahoe",
        "country": "US"
      },
      {
        "iata": "TWF",
        "name": "Joslin Field Magic Valley Regional Airport",
        "city": "Twin Falls",
        "country": "US"
      },
      {
        "iata": "TXK",
        "name": "Texarkana Regional Webb Field",
        "city": "Texarkana",
        "country": "US"
      },
      {
        "iata": "TYR",
        "name": "Tyler Pounds Regional Airport",
        "city": "Tyler",
        "country": "US"
      },
      {
        "iata": "TYS",
        "name": "McGhee Tyson Airport",
        "city": "Knoxville",
        "country": "US"
      },
      {
        "iata": "BFG",
        "name": "Bullfrog Basin Airport",
        "city": "Glen Canyon Natl Rec Area",
        "country": "US"
      },
      {
        "iata": "RVR",
        "name": "Green River Municipal Airport",
        "city": "Green River",
        "country": "US"
      },
      {
        "iata": "ICS",
        "name": "Cascade Airport",
        "city": "Cascade",
        "country": "US"
      },
      {
        "iata": "UIN",
        "name": "Quincy Regional Baldwin Field",
        "city": "Quincy",
        "country": "US"
      },
      {
        "iata": "ATO",
        "name": "Ohio University Snyder Field",
        "city": "Athens/Albany",
        "country": "US"
      },
      {
        "iata": "SCE",
        "name": "University Park Airport",
        "city": "State College",
        "country": "US"
      },
      {
        "iata": "VAD",
        "name": "Moody Air Force Base",
        "city": "Valdosta",
        "country": "US"
      },
      {
        "iata": "VCT",
        "name": "Victoria Regional Airport",
        "city": "Victoria",
        "country": "US"
      },
      {
        "iata": "VKX",
        "name": "Potomac Airfield",
        "city": "Friendly",
        "country": "US"
      },
      {
        "iata": "VLD",
        "name": "Valdosta Regional Airport",
        "city": "Valdosta",
        "country": "US"
      },
      {
        "iata": "VPS",
        "name": "Eglin Air Force Base",
        "city": "Valparaiso",
        "country": "US"
      },
      {
        "iata": "VRB",
        "name": "Vero Beach Municipal Airport",
        "city": "Vero Beach",
        "country": "US"
      },
      {
        "iata": "VSF",
        "name": "Hartness State (Springfield) Airport",
        "city": "Springfield",
        "country": "US"
      },
      {
        "iata": "WAL",
        "name": "Wallops Flight Facility Airport",
        "city": "Wallops Island",
        "country": "US"
      },
      {
        "iata": "WAY",
        "name": "Greene County Airport",
        "city": "Waynesburg",
        "country": "US"
      },
      {
        "iata": "WRI",
        "name": "Mc Guire Air Force Base",
        "city": "Wrightstown",
        "country": "US"
      },
      {
        "iata": "WRL",
        "name": "Worland Municipal Airport",
        "city": "Worland",
        "country": "US"
      },
      {
        "iata": "XNA",
        "name": "Northwest Arkansas Regional Airport",
        "city": "Fayetteville/Springdale/",
        "country": "US"
      },
      {
        "iata": "YIP",
        "name": "Willow Run Airport",
        "city": "Detroit",
        "country": "US"
      },
      {
        "iata": "YKM",
        "name": "Yakima Air Terminal McAllister Field",
        "city": "Yakima",
        "country": "US"
      },
      {
        "iata": "YNG",
        "name": "Youngstown Warren Regional Airport",
        "city": "Youngstown/Warren",
        "country": "US"
      },
      {
        "iata": "ZPH",
        "name": "Zephyrhills Municipal Airport",
        "city": "Zephyrhills",
        "country": "US"
      },
      {
        "iata": "ZZV",
        "name": "Zanesville Municipal Airport",
        "city": "Zanesville",
        "country": "US"
      },
      {
        "iata": "TIA",
        "name": "Tirana International Airport Mother Teresa",
        "city": "Tirana",
        "country": "AL"
      },
      {
        "iata": "BOJ",
        "name": "Burgas Airport",
        "city": "Burgas",
        "country": "BG"
      },
      {
        "iata": "GOZ",
        "name": "Gorna Oryahovitsa Airport",
        "city": "Gorna Oryahovitsa",
        "country": "BG"
      },
      {
        "iata": "JAM",
        "name": "Bezmer Air Base",
        "city": "Yambol",
        "country": "BG"
      },
      {
        "iata": "PDV",
        "name": "Plovdiv International Airport",
        "city": "Plovdiv",
        "country": "BG"
      },
      {
        "iata": "PVN",
        "name": "Dolna Mitropoliya Air Base",
        "city": "Dolna Mitropoliya",
        "country": "BG"
      },
      {
        "iata": "SOF",
        "name": "Sofia Airport",
        "city": "Sofia",
        "country": "BG"
      },
      {
        "iata": "SLS",
        "name": "Silistra Polkovnik Lambrinovo Airfield",
        "city": "Silistra",
        "country": "BG"
      },
      {
        "iata": "SZR",
        "name": "Stara Zagora Airport",
        "city": "Stara Zagora",
        "country": "BG"
      },
      {
        "iata": "VID",
        "name": "Vidin Smurdan Airfield",
        "city": "Vidin",
        "country": "BG"
      },
      {
        "iata": "VAR",
        "name": "Varna Airport",
        "city": "Varna",
        "country": "BG"
      },
      {
        "iata": "ECN",
        "name": "Ercan International Airport",
        "city": "Nicosia",
        "country": "CY"
      },
      {
        "iata": "LCA",
        "name": "Larnaca International Airport",
        "city": "Larnarca",
        "country": "CY"
      },
      {
        "iata": "PFO",
        "name": "Paphos International Airport",
        "city": "Paphos",
        "country": "CY"
      },
      {
        "iata": "AKT",
        "name": "RAF Akrotiri",
        "city": "",
        "country": "CY"
      },
      {
        "iata": "DBV",
        "name": "Dubrovnik Airport",
        "city": "Dubrovnik",
        "country": "HR"
      },
      {
        "iata": "LSZ",
        "name": "Losinj Island Airport",
        "city": "Losinj",
        "country": "HR"
      },
      {
        "iata": "OSI",
        "name": "Osijek Airport",
        "city": "Osijek",
        "country": "HR"
      },
      {
        "iata": "PUY",
        "name": "Pula Airport",
        "city": "Pula",
        "country": "HR"
      },
      {
        "iata": "RJK",
        "name": "Rijeka Airport",
        "city": "Rijeka",
        "country": "HR"
      },
      {
        "iata": "BWK",
        "name": "Brac Airport",
        "city": "Brac Island",
        "country": "HR"
      },
      {
        "iata": "SPU",
        "name": "Split Airport",
        "city": "Split",
        "country": "HR"
      },
      {
        "iata": "ZAG",
        "name": "Zagreb Airport",
        "city": "Zagreb",
        "country": "HR"
      },
      {
        "iata": "ZAD",
        "name": "Zemunik Airport",
        "city": "Zadar",
        "country": "HR"
      },
      {
        "iata": "ABC",
        "name": "Albacete-Los Llanos Airport",
        "city": "Albacete",
        "country": "ES"
      },
      {
        "iata": "ALC",
        "name": "Alicante International Airport",
        "city": "Alicante",
        "country": "ES"
      },
      {
        "iata": "LEI",
        "name": "Almeria International Airport",
        "city": "Almeria",
        "country": "ES"
      },
      {
        "iata": "OVD",
        "name": "Asturias Airport",
        "city": "Ranon",
        "country": "ES"
      },
      {
        "iata": "ODB",
        "name": "Cordoba Airport",
        "city": "Cordoba",
        "country": "ES"
      },
      {
        "iata": "BIO",
        "name": "Bilbao Airport",
        "city": "Bilbao",
        "country": "ES"
      },
      {
        "iata": "RGS",
        "name": "Burgos Airport",
        "city": "Burgos",
        "country": "ES"
      },
      {
        "iata": "BCN",
        "name": "Barcelona International Airport",
        "city": "Barcelona",
        "country": "ES"
      },
      {
        "iata": "BJZ",
        "name": "Badajoz Airport",
        "city": "Badajoz",
        "country": "ES"
      },
      {
        "iata": "CDT",
        "name": "Castellon De La Plana Airport",
        "city": "Castellon de La Plana",
        "country": "ES"
      },
      {
        "iata": "LCG",
        "name": "A Coruna Airport",
        "city": "Culleredo",
        "country": "ES"
      },
      {
        "iata": "ECV",
        "name": "Cuatro Vientos Airport",
        "city": "Madrid",
        "country": "ES"
      },
      {
        "iata": "ILD",
        "name": "Lleida-Alguaire Airport",
        "city": "Lleida",
        "country": "ES"
      },
      {
        "iata": "GRO",
        "name": "Girona Airport",
        "city": "Girona",
        "country": "ES"
      },
      {
        "iata": "GRX",
        "name": "Federico Garcia Lorca Airport",
        "city": "Granada",
        "country": "ES"
      },
      {
        "iata": "IBZ",
        "name": "Ibiza Airport",
        "city": "Ibiza",
        "country": "ES"
      },
      {
        "iata": "XRY",
        "name": "Jerez Airport",
        "city": "Jerez de la Forntera",
        "country": "ES"
      },
      {
        "iata": "MJV",
        "name": "San Javier Airport",
        "city": "San Javier",
        "country": "ES"
      },
      {
        "iata": "QSA",
        "name": "Sabadell Airport",
        "city": "Sabadell",
        "country": "ES"
      },
      {
        "iata": "LEN",
        "name": "Leon Airport",
        "city": "Leon",
        "country": "ES"
      },
      {
        "iata": "RJL",
        "name": "Logrono-Agoncillo Airport",
        "city": "Logrono",
        "country": "ES"
      },
      {
        "iata": "MAD",
        "name": "Madrid Barajas International Airport",
        "city": "Madrid",
        "country": "ES"
      },
      {
        "iata": "HEV",
        "name": "Mafe - Gibraleon Airport",
        "city": "Gibraleon",
        "country": "ES"
      },
      {
        "iata": "AGP",
        "name": "Malaga Airport",
        "city": "Malaga",
        "country": "ES"
      },
      {
        "iata": "MAH",
        "name": "Menorca Airport",
        "city": "Menorca Island",
        "country": "ES"
      },
      {
        "iata": "RMU",
        "name": "Región de Murcia International Airport",
        "city": "Corvera",
        "country": "ES"
      },
      {
        "iata": "OZP",
        "name": "Moron Air Base",
        "city": "Moron",
        "country": "ES"
      },
      {
        "iata": "PMI",
        "name": "Palma De Mallorca Airport",
        "city": "Palma De Mallorca",
        "country": "ES"
      },
      {
        "iata": "PNA",
        "name": "Pamplona Airport",
        "city": "Pamplona",
        "country": "ES"
      },
      {
        "iata": "REU",
        "name": "Reus Air Base",
        "city": "Reus",
        "country": "ES"
      },
      {
        "iata": "ROZ",
        "name": "Rota Naval Station Airport",
        "city": "Rota",
        "country": "ES"
      },
      {
        "iata": "SLM",
        "name": "Salamanca Airport",
        "city": "Salamanca",
        "country": "ES"
      },
      {
        "iata": "EAS",
        "name": "San Sebastian Airport",
        "city": "Hondarribia",
        "country": "ES"
      },
      {
        "iata": "SCQ",
        "name": "Santiago de Compostela Airport",
        "city": "Santiago de Compostela",
        "country": "ES"
      },
      {
        "iata": "LEU",
        "name": "Aerodrom dels Pirineus-Alt Urgell Airport",
        "city": "Montferrer / Castellbo",
        "country": "ES"
      },
      {
        "iata": "TOJ",
        "name": "Torrejon Airport",
        "city": "Madrid",
        "country": "ES"
      },
      {
        "iata": "VLC",
        "name": "Valencia Airport",
        "city": "Valencia",
        "country": "ES"
      },
      {
        "iata": "VLL",
        "name": "Valladolid Airport",
        "city": "Valladolid",
        "country": "ES"
      },
      {
        "iata": "VIT",
        "name": "Vitoria/Foronda Airport",
        "city": "Alava",
        "country": "ES"
      },
      {
        "iata": "VGO",
        "name": "Vigo Airport",
        "city": "Vigo",
        "country": "ES"
      },
      {
        "iata": "SDR",
        "name": "Santander Airport",
        "city": "Santander",
        "country": "ES"
      },
      {
        "iata": "ZAZ",
        "name": "Zaragoza Air Base",
        "city": "Zaragoza",
        "country": "ES"
      },
      {
        "iata": "SVQ",
        "name": "Sevilla Airport",
        "city": "Sevilla",
        "country": "ES"
      },
      {
        "iata": "DPE",
        "name": "St Aubin Airport",
        "city": "Dieppe",
        "country": "FR"
      },
      {
        "iata": "CQF",
        "name": "Calais-Dunkerque Airport",
        "city": "Marck",
        "country": "FR"
      },
      {
        "iata": "XCP",
        "name": "Compiegne Margny Airport",
        "city": "Compiegne",
        "country": "FR"
      },
      {
        "iata": "XLN",
        "name": "Laon - Chambry Airport",
        "city": "Laon-Chambry",
        "country": "FR"
      },
      {
        "iata": "XSJ",
        "name": "Peronne-Saint-Quentin Airport",
        "city": "Peronne/Saint-Quentin",
        "country": "FR"
      },
      {
        "iata": "XDK",
        "name": "Dunkerque Les Moeres Airport",
        "city": "Les Moeres",
        "country": "FR"
      },
      {
        "iata": "BYF",
        "name": "Albert-Bray Airport",
        "city": "Albert/Bray",
        "country": "FR"
      },
      {
        "iata": "LTQ",
        "name": "Le Touquet-Cote d'Opale Airport",
        "city": "Le Touquet-Paris-Plage",
        "country": "FR"
      },
      {
        "iata": "XVS",
        "name": "Valenciennes-Denain Airport",
        "city": "Valenciennes/Denain",
        "country": "FR"
      },
      {
        "iata": "QAM",
        "name": "Amiens-Glisy Airport",
        "city": "Amiens/Glisy",
        "country": "FR"
      },
      {
        "iata": "AGF",
        "name": "Agen-La Garenne Airport",
        "city": "Agen/La Garenne",
        "country": "FR"
      },
      {
        "iata": "BOD",
        "name": "Bordeaux-Merignac (BA 106) Airport",
        "city": "Bordeaux/Merignac",
        "country": "FR"
      },
      {
        "iata": "EGC",
        "name": "Bergerac-Roumaniere Airport",
        "city": "Bergerac/Roumaniere",
        "country": "FR"
      },
      {
        "iata": "CNG",
        "name": "Cognac-Chateaubernard (BA 709) Air Base",
        "city": "Cognac/Chateaubernard",
        "country": "FR"
      },
      {
        "iata": "LRH",
        "name": "La Rochelle-Ile de Re Airport",
        "city": "La Rochelle/Ile de Re",
        "country": "FR"
      },
      {
        "iata": "PIS",
        "name": "Poitiers-Biard Airport",
        "city": "Poitiers/Biard",
        "country": "FR"
      },
      {
        "iata": "MCU",
        "name": "Montlucon-Gueret Airport",
        "city": "Montlucon/Gueret",
        "country": "FR"
      },
      {
        "iata": "LIG",
        "name": "Limoges Airport",
        "city": "Limoges/Bellegarde",
        "country": "FR"
      },
      {
        "iata": "XMJ",
        "name": "Mont-de-Marsan (BA 118) Air Base",
        "city": "Mont-de-Marsan",
        "country": "FR"
      },
      {
        "iata": "NIT",
        "name": "Niort-Souche Airport",
        "city": "Niort/Souche",
        "country": "FR"
      },
      {
        "iata": "TLS",
        "name": "Toulouse-Blagnac Airport",
        "city": "Toulouse/Blagnac",
        "country": "FR"
      },
      {
        "iata": "PUF",
        "name": "Pau Pyrenees Airport",
        "city": "Pau/Pyrenees (Uzein)",
        "country": "FR"
      },
      {
        "iata": "LDE",
        "name": "Tarbes-Lourdes-Pyrenees Airport",
        "city": "Tarbes/Lourdes/Pyrenees",
        "country": "FR"
      },
      {
        "iata": "ANG",
        "name": "Angouleme-Brie-Champniers Airport",
        "city": "Angouleme/Brie/Champniers",
        "country": "FR"
      },
      {
        "iata": "BVE",
        "name": "Brive-La Roche Airport",
        "city": "Brive-la-Gaillarde",
        "country": "FR"
      },
      {
        "iata": "PGX",
        "name": "Perigueux-Bassillac Airport",
        "city": "Perigueux/Bassillac",
        "country": "FR"
      },
      {
        "iata": "XDA",
        "name": "Dax Seyresse Airport",
        "city": "Perigueux",
        "country": "FR"
      },
      {
        "iata": "BIQ",
        "name": "Biarritz-Anglet-Bayonne Airport",
        "city": "Biarritz/Anglet/Bayonne",
        "country": "FR"
      },
      {
        "iata": "XCX",
        "name": "Chatellerault Airport",
        "city": "Biarritz",
        "country": "FR"
      },
      {
        "iata": "ZAO",
        "name": "Cahors-Lalbenque Airport",
        "city": "Cahors/Lalbenque",
        "country": "FR"
      },
      {
        "iata": "XGT",
        "name": "Gueret St Laurent Airport",
        "city": "Cahors",
        "country": "FR"
      },
      {
        "iata": "XAC",
        "name": "Arcachon-La Teste-de-Buch Airport",
        "city": "Arcachon/La Teste-de-Buch",
        "country": "FR"
      },
      {
        "iata": "LBI",
        "name": "Albi-Le Sequestre Airport",
        "city": "Albi/Le Sequestre",
        "country": "FR"
      },
      {
        "iata": "DCM",
        "name": "Castres-Mazamet Airport",
        "city": "Castres/Mazamet",
        "country": "FR"
      },
      {
        "iata": "RDZ",
        "name": "Rodez-Marcillac Airport",
        "city": "Rodez/Marcillac",
        "country": "FR"
      },
      {
        "iata": "RYN",
        "name": "Royan-Medis Airport",
        "city": "Royan/Medis",
        "country": "FR"
      },
      {
        "iata": "XMW",
        "name": "Montauban Airport",
        "city": "Montauban",
        "country": "FR"
      },
      {
        "iata": "XLR",
        "name": "Libourne-Artigues-de-Lussac Airport",
        "city": "Libourne/Artigues-de-Lussac",
        "country": "FR"
      },
      {
        "iata": "RCO",
        "name": "Rochefort-Saint-Agnant (BA 721) Airport",
        "city": "Rochefort/Saint-Agnant",
        "country": "FR"
      },
      {
        "iata": "XSL",
        "name": "Sarlat Domme Airport",
        "city": "Rochefort",
        "country": "FR"
      },
      {
        "iata": "XTB",
        "name": "Tarbes Laloubere Airport",
        "city": "Rochefort",
        "country": "FR"
      },
      {
        "iata": "IDY",
        "name": "Ile d'Yeu Airport",
        "city": "Ile d'Yeu",
        "country": "FR"
      },
      {
        "iata": "CMR",
        "name": "Colmar-Houssen Airport",
        "city": "Colmar/Houssen",
        "country": "FR"
      },
      {
        "iata": "XBV",
        "name": "Beaune-Challanges Airport",
        "city": "Beaune/Challanges",
        "country": "FR"
      },
      {
        "iata": "DLE",
        "name": "Dole-Tavaux Airport",
        "city": "Dole/Tavaux",
        "country": "FR"
      },
      {
        "iata": "XVN",
        "name": "Verdun-Le Rozelier Airport",
        "city": "Verdun/Le Rozelier",
        "country": "FR"
      },
      {
        "iata": "MVV",
        "name": "Megeve Airport",
        "city": "Verdun",
        "country": "FR"
      },
      {
        "iata": "OBS",
        "name": "Aubenas-Ardeche Meridional Airport",
        "city": "Aubenas/Ardeche Meridional",
        "country": "FR"
      },
      {
        "iata": "LPY",
        "name": "Le Puy-Loudes Airport",
        "city": "Le Puy/Loudes",
        "country": "FR"
      },
      {
        "iata": "AHZ",
        "name": "L'alpe D'huez Airport",
        "city": "Bourg",
        "country": "FR"
      },
      {
        "iata": "ETZ",
        "name": "Metz-Nancy-Lorraine Airport",
        "city": "Metz / Nancy",
        "country": "FR"
      },
      {
        "iata": "ANE",
        "name": "Angers-Loire Airport",
        "city": "Angers/Marce",
        "country": "FR"
      },
      {
        "iata": "XAV",
        "name": "Albertville Airport",
        "city": "Angers",
        "country": "FR"
      },
      {
        "iata": "BIA",
        "name": "Bastia-Poretta Airport",
        "city": "Bastia/Poretta",
        "country": "FR"
      },
      {
        "iata": "CLY",
        "name": "Calvi-Sainte-Catherine Airport",
        "city": "Calvi/Sainte-Catherine",
        "country": "FR"
      },
      {
        "iata": "FSC",
        "name": "Figari Sud-Corse Airport",
        "city": "Figari Sud-Corse",
        "country": "FR"
      },
      {
        "iata": "AJA",
        "name": "Ajaccio-Napoleon Bonaparte Airport",
        "city": "Ajaccio/Napoleon Bonaparte",
        "country": "FR"
      },
      {
        "iata": "PRP",
        "name": "Propriano Airport",
        "city": "Propriano",
        "country": "FR"
      },
      {
        "iata": "SOZ",
        "name": "Solenzara (BA 126) Air Base",
        "city": "Solenzara",
        "country": "FR"
      },
      {
        "iata": "MFX",
        "name": "Meribel Airport",
        "city": "Ajaccio",
        "country": "FR"
      },
      {
        "iata": "AUF",
        "name": "Auxerre-Branches Airport",
        "city": "Auxerre/Branches",
        "country": "FR"
      },
      {
        "iata": "CMF",
        "name": "Chambery-Savoie Airport",
        "city": "Chambery/Aix-les-Bains",
        "country": "FR"
      },
      {
        "iata": "CFE",
        "name": "Clermont-Ferrand Auvergne Airport",
        "city": "Clermont-Ferrand/Auvergne",
        "country": "FR"
      },
      {
        "iata": "BOU",
        "name": "Bourges Airport",
        "city": "Bourges",
        "country": "FR"
      },
      {
        "iata": "QNJ",
        "name": "Annemasse Airport",
        "city": "Annemasse",
        "country": "FR"
      },
      {
        "iata": "CVF",
        "name": "Courchevel Airport",
        "city": "Courcheval",
        "country": "FR"
      },
      {
        "iata": "LYS",
        "name": "Lyon Saint-Exupery Airport",
        "city": "Lyon",
        "country": "FR"
      },
      {
        "iata": "QNX",
        "name": "Macon-Charnay Airport",
        "city": "Macon/Charnay",
        "country": "FR"
      },
      {
        "iata": "SYT",
        "name": "Saint-Yan Airport",
        "city": "Saint-Yan",
        "country": "FR"
      },
      {
        "iata": "RNE",
        "name": "Roanne-Renaison Airport",
        "city": "Roanne/Renaison",
        "country": "FR"
      },
      {
        "iata": "NCY",
        "name": "Annecy-Haute-Savoie-Mont Blanc Airport",
        "city": "Annecy/Meythet",
        "country": "FR"
      },
      {
        "iata": "XMK",
        "name": "Montelimar - Ancone Airport",
        "city": "Annecy",
        "country": "FR"
      },
      {
        "iata": "GNB",
        "name": "Grenoble-Isere Airport",
        "city": "Grenoble/Saint-Geoirs",
        "country": "FR"
      },
      {
        "iata": "VAF",
        "name": "Valence-Chabeuil Airport",
        "city": "Valence/Chabeuil",
        "country": "FR"
      },
      {
        "iata": "VHY",
        "name": "Vichy-Charmeil Airport",
        "city": "Vichy/Charmeil",
        "country": "FR"
      },
      {
        "iata": "AUR",
        "name": "Aurillac Airport",
        "city": "Aurillac",
        "country": "FR"
      },
      {
        "iata": "CHR",
        "name": "Chateauroux-Deols Marcel Dassault Airport",
        "city": "Chateauroux/Deols",
        "country": "FR"
      },
      {
        "iata": "LYN",
        "name": "Lyon-Bron Airport",
        "city": "Lyon/Bron",
        "country": "FR"
      },
      {
        "iata": "CEQ",
        "name": "Cannes-Mandelieu Airport",
        "city": "Cannes/Mandelieu",
        "country": "FR"
      },
      {
        "iata": "EBU",
        "name": "Saint-Etienne-Boutheon Airport",
        "city": "Saint-Etienne/Boutheon",
        "country": "FR"
      },
      {
        "iata": "QIE",
        "name": "Istres Le Tube/Istres Air Base (BA 125) Airport",
        "city": "Istres/Le Tube",
        "country": "FR"
      },
      {
        "iata": "CCF",
        "name": "Carcassonne Airport",
        "city": "Carcassonne/Salvaza",
        "country": "FR"
      },
      {
        "iata": "MRS",
        "name": "Marseille Provence Airport",
        "city": "Marseille",
        "country": "FR"
      },
      {
        "iata": "NCE",
        "name": "Nice-Cote d'Azur Airport",
        "city": "Nice",
        "country": "FR"
      },
      {
        "iata": "XOG",
        "name": "Orange-Caritat (BA 115) Air Base",
        "city": "Orange/Caritat",
        "country": "FR"
      },
      {
        "iata": "PGF",
        "name": "Perpignan-Rivesaltes (Llabanere) Airport",
        "city": "Perpignan/Rivesaltes",
        "country": "FR"
      },
      {
        "iata": "CTT",
        "name": "Le Castellet Airport",
        "city": "Le Castellet",
        "country": "FR"
      },
      {
        "iata": "BAE",
        "name": "Barcelonnette - Saint-Pons Airport",
        "city": "Le Castellet",
        "country": "FR"
      },
      {
        "iata": "XAS",
        "name": "Ales-Deaux Airport",
        "city": "Ales/Deaux",
        "country": "FR"
      },
      {
        "iata": "MPL",
        "name": "Montpellier-Mediterranee Airport",
        "city": "Montpellier/Mediterranee",
        "country": "FR"
      },
      {
        "iata": "BZR",
        "name": "Beziers-Vias Airport",
        "city": "Beziers/Vias",
        "country": "FR"
      },
      {
        "iata": "AVN",
        "name": "Avignon-Caumont Airport",
        "city": "Avignon/Caumont",
        "country": "FR"
      },
      {
        "iata": "GAT",
        "name": "Gap - Tallard Airport",
        "city": "Avignon",
        "country": "FR"
      },
      {
        "iata": "MEN",
        "name": "Mende-Brenoux Airport",
        "city": "Mende/Brenoux",
        "country": "FR"
      },
      {
        "iata": "SCP",
        "name": "Mont-Dauphin - St-Crepin Airport",
        "city": "Mende",
        "country": "FR"
      },
      {
        "iata": "BVA",
        "name": "Paris Beauvais Tille Airport",
        "city": "Beauvais/Tille",
        "country": "FR"
      },
      {
        "iata": "XSU",
        "name": "Saumur-Saint-Florent Airport",
        "city": "Saumur/Saint-Florent",
        "country": "FR"
      },
      {
        "iata": "EVX",
        "name": "Evreux-Fauville (BA 105) Air Base",
        "city": "Evreux/Fauville",
        "country": "FR"
      },
      {
        "iata": "XAN",
        "name": "Alencon Valframbert Airport",
        "city": "Evreux",
        "country": "FR"
      },
      {
        "iata": "LEH",
        "name": "Le Havre Octeville Airport",
        "city": "Le Havre/Octeville",
        "country": "FR"
      },
      {
        "iata": "XAB",
        "name": "Abbeville-Buigny-Saint-Maclou Airport",
        "city": "Abbeville (Buigny/Saint-Maclou)",
        "country": "FR"
      },
      {
        "iata": "ORE",
        "name": "Orleans-Bricy (BA 123) Air Base",
        "city": "Orleans/Bricy",
        "country": "FR"
      },
      {
        "iata": "XCR",
        "name": "Chalons-Vatry Air Base",
        "city": "Chalons/Vatry",
        "country": "FR"
      },
      {
        "iata": "LSO",
        "name": "Les Sables-d'Olonne Talmont Airport",
        "city": "Les Sables-d'Olonne",
        "country": "FR"
      },
      {
        "iata": "URO",
        "name": "Rouen Airport",
        "city": "Rouen/Vallee de Seine",
        "country": "FR"
      },
      {
        "iata": "XBQ",
        "name": "Blois-Le Breuil Airport",
        "city": "Blois/Le Breuil",
        "country": "FR"
      },
      {
        "iata": "QTJ",
        "name": "Chartres Champhol Airport",
        "city": "Blois",
        "country": "FR"
      },
      {
        "iata": "TUF",
        "name": "Tours-Val-de-Loire Airport",
        "city": "Tours/Val de Loire (Loire Valley)",
        "country": "FR"
      },
      {
        "iata": "CET",
        "name": "Cholet Le Pontreau Airport",
        "city": "Cholet/Le Pontreau",
        "country": "FR"
      },
      {
        "iata": "LVA",
        "name": "Laval-Entrammes Airport",
        "city": "Laval/Entrammes",
        "country": "FR"
      },
      {
        "iata": "LBG",
        "name": "Paris-Le Bourget Airport",
        "city": "Paris",
        "country": "FR"
      },
      {
        "iata": "CSF",
        "name": "Creil Air Base",
        "city": "Creil",
        "country": "FR"
      },
      {
        "iata": "CDG",
        "name": "Charles de Gaulle International Airport",
        "city": "Paris",
        "country": "FR"
      },
      {
        "iata": "TNF",
        "name": "Toussus-le-Noble Airport",
        "city": "Toussus-le-Noble",
        "country": "FR"
      },
      {
        "iata": "ORY",
        "name": "Paris-Orly Airport",
        "city": "Paris",
        "country": "FR"
      },
      {
        "iata": "POX",
        "name": "Pontoise - Cormeilles-en-Vexin Airport",
        "city": "Pontoise",
        "country": "FR"
      },
      {
        "iata": "VIY",
        "name": "Villacoublay-Velizy (BA 107) Air Base",
        "city": "Villacoublay/Velizy",
        "country": "FR"
      },
      {
        "iata": "QYR",
        "name": "Troyes-Barberey Airport",
        "city": "Troyes/Barberey",
        "country": "FR"
      },
      {
        "iata": "NVS",
        "name": "Nevers-Fourchambault Airport",
        "city": "Nevers/Fourchambault",
        "country": "FR"
      },
      {
        "iata": "XCB",
        "name": "Cambrai-Epinoy (BA 103) Air Base",
        "city": "Cambrai/Epinoy",
        "country": "FR"
      },
      {
        "iata": "XME",
        "name": "Maubeuge-Elesmes Airport",
        "city": "Maubeuge/Elesmes",
        "country": "FR"
      },
      {
        "iata": "LIL",
        "name": "Lille-Lesquin Airport",
        "city": "Lille/Lesquin",
        "country": "FR"
      },
      {
        "iata": "HZB",
        "name": "Merville-Calonne Airport",
        "city": "Merville/Calonne",
        "country": "FR"
      },
      {
        "iata": "XCZ",
        "name": "Charleville-Mezieres Airport",
        "city": "Charleville-Mezieres",
        "country": "FR"
      },
      {
        "iata": "XVO",
        "name": "Vesoul-Frotey Airport",
        "city": "Vesoul/Frotey",
        "country": "FR"
      },
      {
        "iata": "BES",
        "name": "Brest Bretagne Airport",
        "city": "Brest/Guipavas",
        "country": "FR"
      },
      {
        "iata": "CER",
        "name": "Cherbourg-Maupertus Airport",
        "city": "Cherbourg/Maupertus",
        "country": "FR"
      },
      {
        "iata": "DNR",
        "name": "Dinard-Pleurtuit-Saint-Malo Airport",
        "city": "Dinard/Pleurtuit/Saint-Malo",
        "country": "FR"
      },
      {
        "iata": "LBY",
        "name": "La Baule-Escoublac Airport",
        "city": "La Baule-Escoublac",
        "country": "FR"
      },
      {
        "iata": "GFR",
        "name": "Granville Airport",
        "city": "Granville",
        "country": "FR"
      },
      {
        "iata": "DOL",
        "name": "Deauville-Saint-Gatien Airport",
        "city": "Deauville",
        "country": "FR"
      },
      {
        "iata": "LRT",
        "name": "Lorient South Brittany (Bretagne Sud) Airport",
        "city": "Lorient/Lann/Bihoue",
        "country": "FR"
      },
      {
        "iata": "EDM",
        "name": "La Roche-sur-Yon Airport",
        "city": "La Roche-sur-Yon/Les Ajoncs",
        "country": "FR"
      },
      {
        "iata": "LDV",
        "name": "Landivisiau Air Base",
        "city": "Landivisiau",
        "country": "FR"
      },
      {
        "iata": "CFR",
        "name": "Caen-Carpiquet Airport",
        "city": "Caen/Carpiquet",
        "country": "FR"
      },
      {
        "iata": "LME",
        "name": "Le Mans-Arnage Airport",
        "city": "Le Mans/Arnage",
        "country": "FR"
      },
      {
        "iata": "RNS",
        "name": "Rennes-Saint-Jacques Airport",
        "city": "Rennes/Saint-Jacques",
        "country": "FR"
      },
      {
        "iata": "LAI",
        "name": "Lannion-Cote de Granit Airport",
        "city": "Lannion",
        "country": "FR"
      },
      {
        "iata": "UIP",
        "name": "Quimper-Cornouaille Airport",
        "city": "Quimper/Pluguffan",
        "country": "FR"
      },
      {
        "iata": "NTE",
        "name": "Nantes Atlantique Airport",
        "city": "Nantes",
        "country": "FR"
      },
      {
        "iata": "SBK",
        "name": "Saint-Brieuc-Armor Airport",
        "city": "Saint-Brieuc/Armor",
        "country": "FR"
      },
      {
        "iata": "MXN",
        "name": "Morlaix-Ploujean Airport",
        "city": "Morlaix/Ploujean",
        "country": "FR"
      },
      {
        "iata": "VNE",
        "name": "Vannes-Meucon Airport",
        "city": "Vannes/Meucon",
        "country": "FR"
      },
      {
        "iata": "SNR",
        "name": "Saint-Nazaire-Montoir Airport",
        "city": "Saint-Nazaire/Montoir",
        "country": "FR"
      },
      {
        "iata": "QBQ",
        "name": "Besancon Thise Airport",
        "city": "St Nazaire",
        "country": "FR"
      },
      {
        "iata": "BSL",
        "name": "EuroAirport Basel-Mulhouse-Freiburg Airport",
        "city": "Bale/Mulhouse",
        "country": "FR"
      },
      {
        "iata": "DIJ",
        "name": "Dijon-Bourgogne Airport",
        "city": "Dijon/Longvic",
        "country": "FR"
      },
      {
        "iata": "MZM",
        "name": "Metz-Frescaty (BA 128) Air Base",
        "city": "Metz/Frescaty",
        "country": "FR"
      },
      {
        "iata": "EPL",
        "name": "Epinal-Mirecourt Airport",
        "city": "Epinal/Mirecourt",
        "country": "FR"
      },
      {
        "iata": "XMF",
        "name": "Montbeliard-Courcelles Airport",
        "city": "Montbeliard/Courcelles",
        "country": "FR"
      },
      {
        "iata": "ENC",
        "name": "Nancy-Essey Airport",
        "city": "Nancy/Essey",
        "country": "FR"
      },
      {
        "iata": "BOR",
        "name": "Fontaine Airport",
        "city": "Belfort",
        "country": "FR"
      },
      {
        "iata": "RHE",
        "name": "Reims-Champagne (BA 112) Airport",
        "city": "Reims/Champagne",
        "country": "FR"
      },
      {
        "iata": "SXB",
        "name": "Strasbourg Airport",
        "city": "Strasbourg",
        "country": "FR"
      },
      {
        "iata": "VTL",
        "name": "Vittel Champ De Course Airport",
        "city": "Luxeuil",
        "country": "FR"
      },
      {
        "iata": "TLN",
        "name": "Toulon-Hyeres Airport",
        "city": "Toulon/Hyeres/Le Palyvestre",
        "country": "FR"
      },
      {
        "iata": "FNI",
        "name": "Nimes-Arles-Camargue Airport",
        "city": "Nimes/Garons",
        "country": "FR"
      },
      {
        "iata": "LTT",
        "name": "La Mole Airport",
        "city": "La Mole",
        "country": "FR"
      },
      {
        "iata": "MQC",
        "name": "Miquelon Airport",
        "city": "Miquelon",
        "country": "PM"
      },
      {
        "iata": "FSP",
        "name": "St Pierre Airport",
        "city": "Saint-Pierre",
        "country": "PM"
      },
      {
        "iata": "PYR",
        "name": "Andravida Airport",
        "city": "Andravida",
        "country": "GR"
      },
      {
        "iata": "AGQ",
        "name": "Agrinion Airport",
        "city": "Agrinion",
        "country": "GR"
      },
      {
        "iata": "AXD",
        "name": "Dimokritos Airport",
        "city": "Alexandroupolis",
        "country": "GR"
      },
      {
        "iata": "HEW",
        "name": "Athen Helenikon Airport",
        "city": "Athens",
        "country": "GR"
      },
      {
        "iata": "ATH",
        "name": "Eleftherios Venizelos International Airport",
        "city": "Athens",
        "country": "GR"
      },
      {
        "iata": "VOL",
        "name": "Nea Anchialos Airport",
        "city": "Nea Anchialos",
        "country": "GR"
      },
      {
        "iata": "JKH",
        "name": "Chios Island National Airport",
        "city": "Chios Island",
        "country": "GR"
      },
      {
        "iata": "PKH",
        "name": "Porto Cheli Airport",
        "city": "Porto Cheli",
        "country": "GR"
      },
      {
        "iata": "JIK",
        "name": "Ikaria Airport",
        "city": "Ikaria Island",
        "country": "GR"
      },
      {
        "iata": "IOA",
        "name": "Ioannina Airport",
        "city": "Ioannina",
        "country": "GR"
      },
      {
        "iata": "HER",
        "name": "Heraklion International Nikos Kazantzakis Airport",
        "city": "Heraklion",
        "country": "GR"
      },
      {
        "iata": "KSO",
        "name": "Kastoria National Airport",
        "city": "Kastoria",
        "country": "GR"
      },
      {
        "iata": "KIT",
        "name": "Kithira Airport",
        "city": "Kithira Island",
        "country": "GR"
      },
      {
        "iata": "EFL",
        "name": "Kefallinia Airport",
        "city": "Kefallinia Island",
        "country": "GR"
      },
      {
        "iata": "KZS",
        "name": "Kastelorizo Airport",
        "city": "Kastelorizo Island",
        "country": "GR"
      },
      {
        "iata": "KLX",
        "name": "Kalamata Airport",
        "city": "Kalamata",
        "country": "GR"
      },
      {
        "iata": "KGS",
        "name": "Kos Airport",
        "city": "Kos Island",
        "country": "GR"
      },
      {
        "iata": "AOK",
        "name": "Karpathos Airport",
        "city": "Karpathos Island",
        "country": "GR"
      },
      {
        "iata": "CFU",
        "name": "Ioannis Kapodistrias International Airport",
        "city": "Kerkyra Island",
        "country": "GR"
      },
      {
        "iata": "KSJ",
        "name": "Kasos Airport",
        "city": "Kasos Island",
        "country": "GR"
      },
      {
        "iata": "KVA",
        "name": "Alexander the Great International Airport",
        "city": "Kavala",
        "country": "GR"
      },
      {
        "iata": "KZI",
        "name": "Filippos Airport",
        "city": "Kozani",
        "country": "GR"
      },
      {
        "iata": "LRS",
        "name": "Leros Airport",
        "city": "Leros Island",
        "country": "GR"
      },
      {
        "iata": "LXS",
        "name": "Limnos Airport",
        "city": "Limnos Island",
        "country": "GR"
      },
      {
        "iata": "LRA",
        "name": "Larisa Airport",
        "city": "Larisa",
        "country": "GR"
      },
      {
        "iata": "JMK",
        "name": "Mikonos Airport",
        "city": "Mykonos Island",
        "country": "GR"
      },
      {
        "iata": "MLO",
        "name": "Milos Airport",
        "city": "Milos Island",
        "country": "GR"
      },
      {
        "iata": "MJT",
        "name": "Mytilene International Airport",
        "city": "Mytilene",
        "country": "GR"
      },
      {
        "iata": "JNX",
        "name": "Naxos Airport",
        "city": "Naxos Island",
        "country": "GR"
      },
      {
        "iata": "PAS",
        "name": "Paros Airport",
        "city": "Paros Island",
        "country": "GR"
      },
      {
        "iata": "JTY",
        "name": "Astypalaia Airport",
        "city": "Astypalaia Island",
        "country": "GR"
      },
      {
        "iata": "PVK",
        "name": "Aktion National Airport",
        "city": "Preveza/Lefkada",
        "country": "GR"
      },
      {
        "iata": "RHO",
        "name": "Diagoras Airport",
        "city": "Rodes Island",
        "country": "GR"
      },
      {
        "iata": "GPA",
        "name": "Araxos Airport",
        "city": "Patras",
        "country": "GR"
      },
      {
        "iata": "CHQ",
        "name": "Chania International Airport",
        "city": "Souda",
        "country": "GR"
      },
      {
        "iata": "JSI",
        "name": "Skiathos Island National Airport",
        "city": "Skiathos",
        "country": "GR"
      },
      {
        "iata": "SMI",
        "name": "Samos Airport",
        "city": "Samos Island",
        "country": "GR"
      },
      {
        "iata": "JSY",
        "name": "Syros Airport",
        "city": "Syros Island",
        "country": "GR"
      },
      {
        "iata": "SPJ",
        "name": "Sparti Airport",
        "city": "Sparti",
        "country": "GR"
      },
      {
        "iata": "JTR",
        "name": "Santorini Airport",
        "city": "Santorini Island",
        "country": "GR"
      },
      {
        "iata": "JSH",
        "name": "Sitia Airport",
        "city": "Crete Island",
        "country": "GR"
      },
      {
        "iata": "SKU",
        "name": "Skiros Airport",
        "city": "Skiros Island",
        "country": "GR"
      },
      {
        "iata": "SKG",
        "name": "Thessaloniki Macedonia International Airport",
        "city": "Thessaloniki",
        "country": "GR"
      },
      {
        "iata": "ZTH",
        "name": "Dionysios Solomos Airport",
        "city": "Zakynthos Island",
        "country": "GR"
      },
      {
        "iata": "BUD",
        "name": "Budapest Liszt Ferenc International Airport",
        "city": "Budapest",
        "country": "HU"
      },
      {
        "iata": "DEB",
        "name": "Debrecen International Airport",
        "city": "Debrecen",
        "country": "HU"
      },
      {
        "iata": "MCQ",
        "name": "Miskolc Airport",
        "city": "Miskolc",
        "country": "HU"
      },
      {
        "iata": "PEV",
        "name": "Pecs-Pogany Airport",
        "city": "Pecs-Pogany",
        "country": "HU"
      },
      {
        "iata": "QGY",
        "name": "Gyor-Per International Airport",
        "city": "Gyor",
        "country": "HU"
      },
      {
        "iata": "SOB",
        "name": "Sarmellek International Airport",
        "city": "Sarmellek",
        "country": "HU"
      },
      {
        "iata": "TZR",
        "name": "Taszar Air Base",
        "city": "Taszar",
        "country": "HU"
      },
      {
        "iata": "QZD",
        "name": "Szeged Glider Airport",
        "city": "Szeged",
        "country": "HU"
      },
      {
        "iata": "CRV",
        "name": "Crotone Airport",
        "city": "Crotone",
        "country": "IT"
      },
      {
        "iata": "BRI",
        "name": "Bari / Palese International Airport",
        "city": "Bari",
        "country": "IT"
      },
      {
        "iata": "FOG",
        "name": "Foggia / Gino Lisa Airport",
        "city": "Foggia",
        "country": "IT"
      },
      {
        "iata": "TAR",
        "name": "Taranto / Grottaglie Airport",
        "city": "Grottaglie",
        "country": "IT"
      },
      {
        "iata": "LCC",
        "name": "Lecce Airport",
        "city": "",
        "country": "IT"
      },
      {
        "iata": "PSR",
        "name": "Pescara International Airport",
        "city": "Pescara",
        "country": "IT"
      },
      {
        "iata": "BDS",
        "name": "Brindisi / Casale Airport",
        "city": "Brindisi",
        "country": "IT"
      },
      {
        "iata": "SUF",
        "name": "Lamezia Terme Airport",
        "city": "Lamezia Terme",
        "country": "IT"
      },
      {
        "iata": "CIY",
        "name": "Comiso Airport Vincenzo Magliocco",
        "city": "Comiso",
        "country": "IT"
      },
      {
        "iata": "CTA",
        "name": "Catania / Fontanarossa Airport",
        "city": "Catania",
        "country": "IT"
      },
      {
        "iata": "LMP",
        "name": "Lampedusa Airport",
        "city": "Lampedusa",
        "country": "IT"
      },
      {
        "iata": "PNL",
        "name": "Pantelleria Airport",
        "city": "Pantelleria",
        "country": "IT"
      },
      {
        "iata": "PMO",
        "name": "Palermo / Punta Raisi Airport",
        "city": "Palermo",
        "country": "IT"
      },
      {
        "iata": "REG",
        "name": "Reggio Calabria Airport",
        "city": "Reggio Calabria",
        "country": "IT"
      },
      {
        "iata": "TPS",
        "name": "Trapani / Birgi Airport",
        "city": "Trapani",
        "country": "IT"
      },
      {
        "iata": "NSY",
        "name": "Sigonella Airport",
        "city": "",
        "country": "IT"
      },
      {
        "iata": "BLX",
        "name": "Belluno Airport",
        "city": "Belluno",
        "country": "IT"
      },
      {
        "iata": "CDF",
        "name": "Cortina Airport",
        "city": "Cortina D'Ampezzo",
        "country": "IT"
      },
      {
        "iata": "RAN",
        "name": "Ravenna Airport",
        "city": "Ravenna",
        "country": "IT"
      },
      {
        "iata": "ZIA",
        "name": "Trento / Mattarello Airport",
        "city": "Trento",
        "country": "IT"
      },
      {
        "iata": "AHO",
        "name": "Alghero / Fertilia Airport",
        "city": "Alghero",
        "country": "IT"
      },
      {
        "iata": "DCI",
        "name": "Decimomannu Airport",
        "city": "Decimomannu",
        "country": "IT"
      },
      {
        "iata": "CAG",
        "name": "Cagliari / Elmas Airport",
        "city": "Cagliari",
        "country": "IT"
      },
      {
        "iata": "OLB",
        "name": "Olbia / Costa Smeralda Airport",
        "city": "Olbia",
        "country": "IT"
      },
      {
        "iata": "FNU",
        "name": "Oristano / Fenosu Airport",
        "city": "Oristano",
        "country": "IT"
      },
      {
        "iata": "TTB",
        "name": "Tortoli' / Arbatax Airport",
        "city": "Arbatax",
        "country": "IT"
      },
      {
        "iata": "QVA",
        "name": "Varese / Venegono Airport",
        "city": "Varese",
        "country": "IT"
      },
      {
        "iata": "QMM",
        "name": "Massa Cinquale Airport",
        "city": "Marina Di Massa",
        "country": "IT"
      },
      {
        "iata": "MXP",
        "name": "Malpensa International Airport",
        "city": "Milan",
        "country": "IT"
      },
      {
        "iata": "BGY",
        "name": "Bergamo / Orio Al Serio Airport",
        "city": "Bergamo",
        "country": "IT"
      },
      {
        "iata": "TRN",
        "name": "Torino / Caselle International Airport",
        "city": "Torino",
        "country": "IT"
      },
      {
        "iata": "ALL",
        "name": "Villanova D'Albenga International Airport",
        "city": "Albenga",
        "country": "IT"
      },
      {
        "iata": "GOA",
        "name": "Genova / Sestri Cristoforo Colombo Airport",
        "city": "Genova",
        "country": "IT"
      },
      {
        "iata": "LIN",
        "name": "Linate Airport",
        "city": "Milan",
        "country": "IT"
      },
      {
        "iata": "PMF",
        "name": "Parma Airport",
        "city": "Parma",
        "country": "IT"
      },
      {
        "iata": "QPZ",
        "name": "Piacenza Airport",
        "city": "Piacenza",
        "country": "IT"
      },
      {
        "iata": "AOT",
        "name": "Aosta Airport",
        "city": "Aosta",
        "country": "IT"
      },
      {
        "iata": "CUF",
        "name": "Cuneo / Levaldigi Airport",
        "city": "Cuneo",
        "country": "IT"
      },
      {
        "iata": "AVB",
        "name": "Aviano Air Base",
        "city": "Aviano",
        "country": "IT"
      },
      {
        "iata": "BZO",
        "name": "Bolzano Airport",
        "city": "Bolzano",
        "country": "IT"
      },
      {
        "iata": "UDN",
        "name": "Udine / Campoformido Air Base",
        "city": "Udine",
        "country": "IT"
      },
      {
        "iata": "BLQ",
        "name": "Bologna / Borgo Panigale Airport",
        "city": "Bologna",
        "country": "IT"
      },
      {
        "iata": "TSF",
        "name": "Treviso / Sant'Angelo Airport",
        "city": "Treviso",
        "country": "IT"
      },
      {
        "iata": "FRL",
        "name": "Forli Airport",
        "city": "Forli",
        "country": "IT"
      },
      {
        "iata": "VBS",
        "name": "Brescia / Montichiari Airport",
        "city": "Brescia",
        "country": "IT"
      },
      {
        "iata": "TRS",
        "name": "Trieste / Ronchi Dei Legionari",
        "city": "Trieste",
        "country": "IT"
      },
      {
        "iata": "RMI",
        "name": "Rimini / Miramare - Federico Fellini International Airport",
        "city": "Rimini",
        "country": "IT"
      },
      {
        "iata": "VIC",
        "name": "Vicenza Airport",
        "city": "Vicenza",
        "country": "IT"
      },
      {
        "iata": "QPA",
        "name": "Padova Airport",
        "city": "Padova",
        "country": "IT"
      },
      {
        "iata": "VRN",
        "name": "Verona / Villafranca Airport",
        "city": "Verona",
        "country": "IT"
      },
      {
        "iata": "AOI",
        "name": "Ancona / Falconara Airport",
        "city": "Ancona",
        "country": "IT"
      },
      {
        "iata": "VCE",
        "name": "Venezia / Tessera -  Marco Polo Airport",
        "city": "Venezia",
        "country": "IT"
      },
      {
        "iata": "QZO",
        "name": "Arezzo Airport",
        "city": "Arezzo",
        "country": "IT"
      },
      {
        "iata": "LCV",
        "name": "Lucca / Tassignano Airport",
        "city": "Lucca",
        "country": "IT"
      },
      {
        "iata": "QRT",
        "name": "Rieti Airport",
        "city": "Rieti",
        "country": "IT"
      },
      {
        "iata": "SAY",
        "name": "Siena / Ampugnano Airport",
        "city": "Siena",
        "country": "IT"
      },
      {
        "iata": "CIA",
        "name": "Ciampino Airport",
        "city": "Roma",
        "country": "IT"
      },
      {
        "iata": "FCO",
        "name": "Leonardo Da Vinci (Fiumicino) International Airport",
        "city": "Rome",
        "country": "IT"
      },
      {
        "iata": "QFR",
        "name": "Frosinone Military Airport",
        "city": "Frosinone",
        "country": "IT"
      },
      {
        "iata": "QSR",
        "name": "Salerno / Pontecagnano Airport",
        "city": "Salerno",
        "country": "IT"
      },
      {
        "iata": "EBA",
        "name": "Marina Di Campo Airport",
        "city": "Marina  Di Campo",
        "country": "IT"
      },
      {
        "iata": "QLT",
        "name": "Latina Airport",
        "city": "Latina",
        "country": "IT"
      },
      {
        "iata": "NAP",
        "name": "Napoli / Capodichino International Airport",
        "city": "Napoli",
        "country": "IT"
      },
      {
        "iata": "PSA",
        "name": "Pisa / San Giusto - Galileo Galilei International Airport",
        "city": "Pisa",
        "country": "IT"
      },
      {
        "iata": "FLR",
        "name": "Firenze / Peretola Airport",
        "city": "Firenze",
        "country": "IT"
      },
      {
        "iata": "GRS",
        "name": "Grosseto Airport",
        "city": "Grosetto",
        "country": "IT"
      },
      {
        "iata": "PEG",
        "name": "Perugia / San Egidio Airport",
        "city": "Perugia",
        "country": "IT"
      },
      {
        "iata": "LJU",
        "name": "Ljubljana Joze Pucnik Airport",
        "city": "Ljubljana",
        "country": "SI"
      },
      {
        "iata": "MBX",
        "name": "Maribor Airport",
        "city": "",
        "country": "SI"
      },
      {
        "iata": "POW",
        "name": "Portoroz Airport",
        "city": "Portoroz",
        "country": "SI"
      },
      {
        "iata": "GTW",
        "name": "Holesov Airport",
        "city": "Holesov",
        "country": "CZ"
      },
      {
        "iata": "UHE",
        "name": "Kunovice Airport",
        "city": "Uherske Hradiste",
        "country": "CZ"
      },
      {
        "iata": "KLV",
        "name": "Karlovy Vary International Airport",
        "city": "Karlovy Vary",
        "country": "CZ"
      },
      {
        "iata": "MKA",
        "name": "Marianske Lazne Airport",
        "city": "Marianske Lazne",
        "country": "CZ"
      },
      {
        "iata": "OSR",
        "name": "Ostrava Leos Janacek Airport",
        "city": "Ostrava",
        "country": "CZ"
      },
      {
        "iata": "PED",
        "name": "Pardubice Airport",
        "city": "Pardubice",
        "country": "CZ"
      },
      {
        "iata": "PRV",
        "name": "Prerov Air Base",
        "city": "Prerov",
        "country": "CZ"
      },
      {
        "iata": "PRG",
        "name": "Ruzyne International Airport",
        "city": "Prague",
        "country": "CZ"
      },
      {
        "iata": "BRQ",
        "name": "Brno-Turany Airport",
        "city": "Brno",
        "country": "CZ"
      },
      {
        "iata": "ZBE",
        "name": "Zabreh Ostrava Airport",
        "city": "Zabreh",
        "country": "CZ"
      },
      {
        "iata": "TLV",
        "name": "Ben Gurion International Airport",
        "city": "Tel Aviv",
        "country": "IL"
      },
      {
        "iata": "BEV",
        "name": "Be'er Sheva (Teyman) Airport",
        "city": "Beersheva",
        "country": "IL"
      },
      {
        "iata": "ETH",
        "name": "Eilat Airport",
        "city": "Eilat",
        "country": "IL"
      },
      {
        "iata": "EIY",
        "name": "Ein Yahav Airfield",
        "city": "Sapir",
        "country": "IL"
      },
      {
        "iata": "HFA",
        "name": "Haifa International Airport",
        "city": "Haifa",
        "country": "IL"
      },
      {
        "iata": "RPN",
        "name": "Ben Ya'akov Airport",
        "city": "Rosh Pina",
        "country": "IL"
      },
      {
        "iata": "KSW",
        "name": "Kiryat Shmona Airport",
        "city": "Kiryat Shmona",
        "country": "IL"
      },
      {
        "iata": "MTZ",
        "name": "Bar Yehuda Airfield",
        "city": "Masada",
        "country": "IL"
      },
      {
        "iata": "VTM",
        "name": "Nevatim Air Base",
        "city": "Beersheba",
        "country": "IL"
      },
      {
        "iata": "VDA",
        "name": "Ovda International Airport",
        "city": "Eilat",
        "country": "IL"
      },
      {
        "iata": "MIP",
        "name": "Ramon Air Base",
        "city": "Beersheba",
        "country": "IL"
      },
      {
        "iata": "SDV",
        "name": "Sde Dov Airport",
        "city": "Tel Aviv",
        "country": "IL"
      },
      {
        "iata": "YOT",
        "name": "Yotvata Airfield",
        "city": "Yotvata",
        "country": "IL"
      },
      {
        "iata": "MLA",
        "name": "Luqa Airport",
        "city": "Luqa",
        "country": "MT"
      },
      {
        "iata": "HOH",
        "name": "Hohenems-Dornbirn Airport",
        "city": "Hohenems / Dornbirn",
        "country": "AT"
      },
      {
        "iata": "GRZ",
        "name": "Graz Airport",
        "city": "Graz",
        "country": "AT"
      },
      {
        "iata": "INN",
        "name": "Innsbruck Airport",
        "city": "Innsbruck",
        "country": "AT"
      },
      {
        "iata": "KLU",
        "name": "Klagenfurt Airport",
        "city": "Klagenfurt am Worthersee",
        "country": "AT"
      },
      {
        "iata": "LNZ",
        "name": "Linz Airport",
        "city": "Linz",
        "country": "AT"
      },
      {
        "iata": "SZG",
        "name": "Salzburg Airport",
        "city": "Salzburg",
        "country": "AT"
      },
      {
        "iata": "VIE",
        "name": "Vienna International Airport",
        "city": "Vienna",
        "country": "AT"
      },
      {
        "iata": "SMA",
        "name": "Santa Maria Airport",
        "city": "Vila do Porto",
        "country": "PT"
      },
      {
        "iata": "BGC",
        "name": "Braganca Airport",
        "city": "",
        "country": "PT"
      },
      {
        "iata": "BYJ",
        "name": "Beja International Airport",
        "city": "Beja",
        "country": "PT"
      },
      {
        "iata": "BGZ",
        "name": "Braga Municipal Aerodrome",
        "city": "Braga",
        "country": "PT"
      },
      {
        "iata": "CHV",
        "name": "Chaves Airport",
        "city": "Chaves",
        "country": "PT"
      },
      {
        "iata": "CBP",
        "name": "Coimbra Airport",
        "city": "",
        "country": "PT"
      },
      {
        "iata": "CVU",
        "name": "Corvo Airport",
        "city": "Corvo",
        "country": "PT"
      },
      {
        "iata": "COV",
        "name": "Covilha Airport",
        "city": "",
        "country": "PT"
      },
      {
        "iata": "FLW",
        "name": "Flores Airport",
        "city": "Santa Cruz das Flores",
        "country": "PT"
      },
      {
        "iata": "FAO",
        "name": "Faro Airport",
        "city": "Faro",
        "country": "PT"
      },
      {
        "iata": "GRW",
        "name": "Graciosa Airport",
        "city": "Santa Cruz da Graciosa",
        "country": "PT"
      },
      {
        "iata": "HOR",
        "name": "Horta Airport",
        "city": "Horta",
        "country": "PT"
      },
      {
        "iata": "TER",
        "name": "Lajes Field",
        "city": "Lajes",
        "country": "PT"
      },
      {
        "iata": "FNC",
        "name": "Madeira Airport",
        "city": "Funchal",
        "country": "PT"
      },
      {
        "iata": "PDL",
        "name": "Joao Paulo II Airport",
        "city": "Ponta Delgada",
        "country": "PT"
      },
      {
        "iata": "PIX",
        "name": "Pico Airport",
        "city": "Pico Island",
        "country": "PT"
      },
      {
        "iata": "PRM",
        "name": "Portimao Airport",
        "city": "",
        "country": "PT"
      },
      {
        "iata": "OPO",
        "name": "Francisco de Sa Carneiro Airport",
        "city": "Porto",
        "country": "PT"
      },
      {
        "iata": "PXO",
        "name": "Porto Santo Airport",
        "city": "Vila Baleira",
        "country": "PT"
      },
      {
        "iata": "LIS",
        "name": "Lisbon Portela Airport",
        "city": "Lisbon",
        "country": "PT"
      },
      {
        "iata": "SIE",
        "name": "Sines Airport",
        "city": "",
        "country": "PT"
      },
      {
        "iata": "SJZ",
        "name": "Sao Jorge Airport",
        "city": "Velas",
        "country": "PT"
      },
      {
        "iata": "VRL",
        "name": "Vila Real Airport",
        "city": "",
        "country": "PT"
      },
      {
        "iata": "VSE",
        "name": "Viseu Airport",
        "city": "",
        "country": "PT"
      },
      {
        "iata": "BNX",
        "name": "Banja Luka International Airport",
        "city": "Banja Luka",
        "country": "BA"
      },
      {
        "iata": "OMO",
        "name": "Mostar International Airport",
        "city": "Mostar",
        "country": "BA"
      },
      {
        "iata": "SJJ",
        "name": "Sarajevo International Airport",
        "city": "Sarajevo",
        "country": "BA"
      },
      {
        "iata": "TZL",
        "name": "Tuzla International Airport",
        "city": "Tuzla",
        "country": "BA"
      },
      {
        "iata": "ARW",
        "name": "Arad International Airport",
        "city": "Arad",
        "country": "RO"
      },
      {
        "iata": "BCM",
        "name": "Bacau Airport",
        "city": "Bacau",
        "country": "RO"
      },
      {
        "iata": "BAY",
        "name": "Tautii Magheraus Airport",
        "city": "Baia Mare",
        "country": "RO"
      },
      {
        "iata": "BBU",
        "name": "Baneasa International Airport",
        "city": "Bucharest",
        "country": "RO"
      },
      {
        "iata": "CND",
        "name": "Mihail Kogalniceanu International Airport",
        "city": "Constanta",
        "country": "RO"
      },
      {
        "iata": "CLJ",
        "name": "Cluj-Napoca International Airport",
        "city": "Cluj-Napoca",
        "country": "RO"
      },
      {
        "iata": "CSB",
        "name": "Caransebes Airport",
        "city": "Caransebes",
        "country": "RO"
      },
      {
        "iata": "CRA",
        "name": "Craiova Airport",
        "city": "Craiova",
        "country": "RO"
      },
      {
        "iata": "IAS",
        "name": "Iasi Airport",
        "city": "Iasi",
        "country": "RO"
      },
      {
        "iata": "OMR",
        "name": "Oradea International Airport",
        "city": "Oradea",
        "country": "RO"
      },
      {
        "iata": "OTP",
        "name": "Henri Coanda International Airport",
        "city": "Bucharest",
        "country": "RO"
      },
      {
        "iata": "SBZ",
        "name": "Sibiu International Airport",
        "city": "Sibiu",
        "country": "RO"
      },
      {
        "iata": "SUJ",
        "name": "Satu Mare Airport",
        "city": "Satu Mare",
        "country": "RO"
      },
      {
        "iata": "SCV",
        "name": "Suceava Stefan cel Mare Airport",
        "city": "Suceava",
        "country": "RO"
      },
      {
        "iata": "TCE",
        "name": "Tulcea Airport",
        "city": "Tulcea",
        "country": "RO"
      },
      {
        "iata": "TGM",
        "name": "Transilvania Targu Mures International Airport",
        "city": "Targu Mures",
        "country": "RO"
      },
      {
        "iata": "TSR",
        "name": "Timisoara Traian Vuia Airport",
        "city": "Timisoara",
        "country": "RO"
      },
      {
        "iata": "GVA",
        "name": "Geneva Cointrin International Airport",
        "city": "Geneva",
        "country": "CH"
      },
      {
        "iata": "QLS",
        "name": "Lausanne-la Blecherette Airport",
        "city": "Lausanne",
        "country": "CH"
      },
      {
        "iata": "QNC",
        "name": "Neuchatel Airport",
        "city": "",
        "country": "CH"
      },
      {
        "iata": "SIR",
        "name": "Sion Airport",
        "city": "Sion",
        "country": "CH"
      },
      {
        "iata": "ZIN",
        "name": "Interlaken Air Base",
        "city": "",
        "country": "CH"
      },
      {
        "iata": "LUG",
        "name": "Lugano Airport",
        "city": "Lugano",
        "country": "CH"
      },
      {
        "iata": "BRN",
        "name": "Bern Belp Airport",
        "city": "Bern",
        "country": "CH"
      },
      {
        "iata": "BXO",
        "name": "Buochs Airport",
        "city": "Buochs",
        "country": "CH"
      },
      {
        "iata": "ZHI",
        "name": "Grenchen Airport",
        "city": "",
        "country": "CH"
      },
      {
        "iata": "ZRH",
        "name": "Zurich Airport",
        "city": "Zurich",
        "country": "CH"
      },
      {
        "iata": "ZJI",
        "name": "Locarno Airport",
        "city": "",
        "country": "CH"
      },
      {
        "iata": "MLH",
        "name": "EuroAirport Basel-Mulhouse-Freiburg Airport",
        "city": "Bale/Mulhouse",
        "country": "CH"
      },
      {
        "iata": "ACH",
        "name": "St Gallen Altenrhein Airport",
        "city": "Altenrhein",
        "country": "CH"
      },
      {
        "iata": "SMV",
        "name": "Samedan Airport",
        "city": "",
        "country": "CH"
      },
      {
        "iata": "ESB",
        "name": "Esenboga International Airport",
        "city": "Ankara",
        "country": "TR"
      },
      {
        "iata": "ANK",
        "name": "Etimesgut Air Base",
        "city": "Ankara",
        "country": "TR"
      },
      {
        "iata": "ADA",
        "name": "Adana Airport",
        "city": "Adana",
        "country": "TR"
      },
      {
        "iata": "UAB",
        "name": "Incirlik Air Base",
        "city": "Adana",
        "country": "TR"
      },
      {
        "iata": "AFY",
        "name": "Afyon Airport",
        "city": "Afyonkarahisar",
        "country": "TR"
      },
      {
        "iata": "AYT",
        "name": "Antalya International Airport",
        "city": "Antalya",
        "country": "TR"
      },
      {
        "iata": "GZT",
        "name": "Gaziantep International Airport",
        "city": "Gaziantep",
        "country": "TR"
      },
      {
        "iata": "KFS",
        "name": "Kastamonu Airport",
        "city": "Kastamonu",
        "country": "TR"
      },
      {
        "iata": "KYA",
        "name": "Konya Airport",
        "city": "Konya",
        "country": "TR"
      },
      {
        "iata": "MZH",
        "name": "Amasya Merzifon Airport",
        "city": "Amasya",
        "country": "TR"
      },
      {
        "iata": "SSX",
        "name": "Samsun Samair Airport",
        "city": "Samsun",
        "country": "TR"
      },
      {
        "iata": "VAS",
        "name": "Sivas Airport",
        "city": "Sivas",
        "country": "TR"
      },
      {
        "iata": "ONQ",
        "name": "Zonguldak Airport",
        "city": "Zonguldak",
        "country": "TR"
      },
      {
        "iata": "MLX",
        "name": "Malatya Erhac Airport",
        "city": "Malatya",
        "country": "TR"
      },
      {
        "iata": "ASR",
        "name": "Kayseri Erkilet Airport",
        "city": "Kayseri",
        "country": "TR"
      },
      {
        "iata": "TJK",
        "name": "Tokat Airport",
        "city": "Tokat",
        "country": "TR"
      },
      {
        "iata": "DNZ",
        "name": "Cardak Airport",
        "city": "Denizli",
        "country": "TR"
      },
      {
        "iata": "NAV",
        "name": "Nevsehir Kapadokya International Airport",
        "city": "Nevsehir",
        "country": "TR"
      },
      {
        "iata": "ISL",
        "name": "Ataturk International Airport",
        "city": "Istanbul",
        "country": "TR"
      },
      {
        "iata": "IST",
        "name": "Istanbul Airport",
        "city": "Arnavutkoy",
        "country": "TR"
      },
      {
        "iata": "CII",
        "name": "Cildir Airport",
        "city": "Aydin",
        "country": "TR"
      },
      {
        "iata": "BTZ",
        "name": "Bursa Airport",
        "city": "Bursa",
        "country": "TR"
      },
      {
        "iata": "BZI",
        "name": "Balikesir Merkez Airport",
        "city": "Balikesir",
        "country": "TR"
      },
      {
        "iata": "BDM",
        "name": "Bandirma Airport",
        "city": "Bandirma",
        "country": "TR"
      },
      {
        "iata": "CKZ",
        "name": "Canakkale Airport",
        "city": "Canakkale",
        "country": "TR"
      },
      {
        "iata": "ESK",
        "name": "Eskisehir Air Base",
        "city": "Eskisehir",
        "country": "TR"
      },
      {
        "iata": "ADB",
        "name": "Adnan Menderes International Airport",
        "city": "Izmir",
        "country": "TR"
      },
      {
        "iata": "IGL",
        "name": "Cigli Airport",
        "city": "Izmir",
        "country": "TR"
      },
      {
        "iata": "USQ",
        "name": "Usak Airport",
        "city": "Usak",
        "country": "TR"
      },
      {
        "iata": "KCO",
        "name": "Cengiz Topel Airport",
        "city": "",
        "country": "TR"
      },
      {
        "iata": "YEI",
        "name": "Bursa Yenisehir Airport",
        "city": "Bursa",
        "country": "TR"
      },
      {
        "iata": "DLM",
        "name": "Dalaman International Airport",
        "city": "Dalaman",
        "country": "TR"
      },
      {
        "iata": "TEQ",
        "name": "Tekirdag Corlu Airport",
        "city": "Corlu",
        "country": "TR"
      },
      {
        "iata": "BXN",
        "name": "Imsik Airport",
        "city": "Bodrum",
        "country": "TR"
      },
      {
        "iata": "AOE",
        "name": "Anadolu University Airport",
        "city": "Eskisehir",
        "country": "TR"
      },
      {
        "iata": "KZR",
        "name": "Zafer Airport",
        "city": "Altintas",
        "country": "TR"
      },
      {
        "iata": "EZS",
        "name": "Elazig Airport",
        "city": "Elazig",
        "country": "TR"
      },
      {
        "iata": "OGU",
        "name": "Ordu–Giresun Airport",
        "city": "Ordu",
        "country": "TR"
      },
      {
        "iata": "DIY",
        "name": "Diyarbakir Airport",
        "city": "Diyarbakir",
        "country": "TR"
      },
      {
        "iata": "ERC",
        "name": "Erzincan Airport",
        "city": "Erzincan",
        "country": "TR"
      },
      {
        "iata": "ERZ",
        "name": "Erzurum International Airport",
        "city": "Erzurum",
        "country": "TR"
      },
      {
        "iata": "KSY",
        "name": "Kars Airport",
        "city": "Kars",
        "country": "TR"
      },
      {
        "iata": "TZX",
        "name": "Trabzon International Airport",
        "city": "Trabzon",
        "country": "TR"
      },
      {
        "iata": "SFQ",
        "name": "Sanliurfa Airport",
        "city": "Sanliurfa",
        "country": "TR"
      },
      {
        "iata": "VAN",
        "name": "Van Ferit Melen Airport",
        "city": "Van",
        "country": "TR"
      },
      {
        "iata": "BAL",
        "name": "Batman Airport",
        "city": "Batman",
        "country": "TR"
      },
      {
        "iata": "MSR",
        "name": "Mus Airport",
        "city": "Mus",
        "country": "TR"
      },
      {
        "iata": "SXZ",
        "name": "Siirt Airport",
        "city": "Siirt",
        "country": "TR"
      },
      {
        "iata": "NOP",
        "name": "Sinop Airport",
        "city": "Sinop",
        "country": "TR"
      },
      {
        "iata": "KCM",
        "name": "Kahramanmaras Airport",
        "city": "Kahramanmaras",
        "country": "TR"
      },
      {
        "iata": "AJI",
        "name": "Agri Airport",
        "city": "Agri",
        "country": "TR"
      },
      {
        "iata": "ADF",
        "name": "Adiyaman Airport",
        "city": "Adiyaman",
        "country": "TR"
      },
      {
        "iata": "MQM",
        "name": "Mardin Airport",
        "city": "Mardin",
        "country": "TR"
      },
      {
        "iata": "GNY",
        "name": "Sanliurfa GAP Airport",
        "city": "Sanliurfa",
        "country": "TR"
      },
      {
        "iata": "IGD",
        "name": "Igdir Airport",
        "city": "Igdir",
        "country": "TR"
      },
      {
        "iata": "HTY",
        "name": "Hatay Airport",
        "city": "Hatay",
        "country": "TR"
      },
      {
        "iata": "ISE",
        "name": "Suleyman Demirel International Airport",
        "city": "Isparta",
        "country": "TR"
      },
      {
        "iata": "EDO",
        "name": "Balikesir Korfez Airport",
        "city": "Edremit",
        "country": "TR"
      },
      {
        "iata": "BJV",
        "name": "Milas Bodrum International Airport",
        "city": "Bodrum",
        "country": "TR"
      },
      {
        "iata": "GZP",
        "name": "Gazipasa Airport",
        "city": "Gazipasa",
        "country": "TR"
      },
      {
        "iata": "SZF",
        "name": "Samsun Carsamba Airport",
        "city": "Samsun",
        "country": "TR"
      },
      {
        "iata": "SAW",
        "name": "Sabiha Gokcen International Airport",
        "city": "Istanbul",
        "country": "TR"
      },
      {
        "iata": "GKD",
        "name": "Imroz Airport",
        "city": "Gokceada",
        "country": "TR"
      },
      {
        "iata": "BZY",
        "name": "Balti International Airport",
        "city": "Strymba",
        "country": "MD"
      },
      {
        "iata": "KIV",
        "name": "Chisinau International Airport",
        "city": "Chisinau",
        "country": "MD"
      },
      {
        "iata": "OHD",
        "name": "Ohrid St. Paul the Apostle Airport",
        "city": "Ohrid",
        "country": "MK"
      },
      {
        "iata": "SKP",
        "name": "Skopje Alexander the Great Airport",
        "city": "Skopje",
        "country": "MK"
      },
      {
        "iata": "GIB",
        "name": "Gibraltar Airport",
        "city": "Gibraltar",
        "country": "GI"
      },
      {
        "iata": "BEG",
        "name": "Belgrade Nikola Tesla Airport",
        "city": "Belgrad",
        "country": "RS"
      },
      {
        "iata": "IVG",
        "name": "Berane Airport",
        "city": "Berane",
        "country": "ME"
      },
      {
        "iata": "BJY",
        "name": "Batajnica Air Base",
        "city": "Batajnica",
        "country": "RS"
      },
      {
        "iata": "INI",
        "name": "Nis Airport",
        "city": "Nis",
        "country": "RS"
      },
      {
        "iata": "QND",
        "name": "Cenej Airport",
        "city": "Novi Sad",
        "country": "RS"
      },
      {
        "iata": "TGD",
        "name": "Podgorica Airport",
        "city": "Podgorica",
        "country": "ME"
      },
      {
        "iata": "TIV",
        "name": "Tivat Airport",
        "city": "Tivat",
        "country": "ME"
      },
      {
        "iata": "UZC",
        "name": "Ponikve Airport",
        "city": "Uzice",
        "country": "RS"
      },
      {
        "iata": "QWV",
        "name": "Divci Airport",
        "city": "Valjevo",
        "country": "RS"
      },
      {
        "iata": "ZRE",
        "name": "Zrenjanin Airport",
        "city": "Zrenjanin",
        "country": "RS"
      },
      {
        "iata": "BTS",
        "name": "M. R. Stefanik Airport",
        "city": "Bratislava",
        "country": "SK"
      },
      {
        "iata": "KSC",
        "name": "Kosice Airport",
        "city": "Kosice",
        "country": "SK"
      },
      {
        "iata": "LUE",
        "name": "Lucenec Airport",
        "city": "Lucenec",
        "country": "SK"
      },
      {
        "iata": "PZY",
        "name": "Piestany Airport",
        "city": "Piestany",
        "country": "SK"
      },
      {
        "iata": "POV",
        "name": "Presov Air Base",
        "city": "Presov",
        "country": "SK"
      },
      {
        "iata": "SLD",
        "name": "Sliac Airport",
        "city": "Sliac",
        "country": "SK"
      },
      {
        "iata": "TAT",
        "name": "Poprad-Tatry Airport",
        "city": "Poprad",
        "country": "SK"
      },
      {
        "iata": "ILZ",
        "name": "Zilina Airport",
        "city": "Zilina",
        "country": "SK"
      },
      {
        "iata": "GDT",
        "name": "JAGS McCartney International Airport",
        "city": "Cockburn Town",
        "country": "TC"
      },
      {
        "iata": "MDS",
        "name": "Middle Caicos Airport",
        "city": "Middle Caicos",
        "country": "TC"
      },
      {
        "iata": "NCA",
        "name": "North Caicos Airport",
        "city": "",
        "country": "TC"
      },
      {
        "iata": "PIC",
        "name": "Pine Cay Airport",
        "city": "Pine Cay",
        "country": "TC"
      },
      {
        "iata": "PLS",
        "name": "Providenciales Airport",
        "city": "Providenciales Island",
        "country": "TC"
      },
      {
        "iata": "XSC",
        "name": "South Caicos Airport",
        "city": "",
        "country": "TC"
      },
      {
        "iata": "SLX",
        "name": "Salt Cay Airport",
        "city": "Salt Cay",
        "country": "TC"
      },
      {
        "iata": "BRX",
        "name": "Maria Montez International Airport",
        "city": "Barahona",
        "country": "DO"
      },
      {
        "iata": "CBJ",
        "name": "Cabo Rojo Airport",
        "city": "Cabo Rojo",
        "country": "DO"
      },
      {
        "iata": "AZS",
        "name": "Samana El Catey International Airport",
        "city": "Samana",
        "country": "DO"
      },
      {
        "iata": "COZ",
        "name": "Constanza Dom Re Airport",
        "city": "Costanza",
        "country": "DO"
      },
      {
        "iata": "JBQ",
        "name": "La Isabela International Airport",
        "city": "La Isabela",
        "country": "DO"
      },
      {
        "iata": "LRM",
        "name": "Casa De Campo International Airport",
        "city": "La Romana",
        "country": "DO"
      },
      {
        "iata": "PUJ",
        "name": "Punta Cana International Airport",
        "city": "Punta Cana",
        "country": "DO"
      },
      {
        "iata": "EPS",
        "name": "Samana El Portillo Airport",
        "city": "Samana",
        "country": "DO"
      },
      {
        "iata": "POP",
        "name": "Gregorio Luperon International Airport",
        "city": "Puerto Plata",
        "country": "DO"
      },
      {
        "iata": "SNX",
        "name": "Sabana de Mar Airport",
        "city": "Sabana de Mar",
        "country": "DO"
      },
      {
        "iata": "SDQ",
        "name": "Las Americas International Airport",
        "city": "Santo Domingo",
        "country": "DO"
      },
      {
        "iata": "STI",
        "name": "Cibao International Airport",
        "city": "Santiago",
        "country": "DO"
      },
      {
        "iata": "CBV",
        "name": "Coban Airport",
        "city": "Coban",
        "country": "GT"
      },
      {
        "iata": "CIQ",
        "name": "Chiquimula Airport",
        "city": "Chiquimula",
        "country": "GT"
      },
      {
        "iata": "CMM",
        "name": "Carmelita Airport",
        "city": "Carmelita",
        "country": "GT"
      },
      {
        "iata": "CTF",
        "name": "Coatepeque Airport",
        "city": "Coatepeque",
        "country": "GT"
      },
      {
        "iata": "DON",
        "name": "Dos Lagunas Airport",
        "city": "Dos Lagunas",
        "country": "GT"
      },
      {
        "iata": "GUA",
        "name": "La Aurora Airport",
        "city": "Guatemala City",
        "country": "GT"
      },
      {
        "iata": "HUG",
        "name": "Huehuetenango Airport",
        "city": "Huehuetenango",
        "country": "GT"
      },
      {
        "iata": "MCR",
        "name": "Melchor de Mencos Airport",
        "city": "Melchor de Mencos",
        "country": "GT"
      },
      {
        "iata": "PBR",
        "name": "Puerto Barrios Airport",
        "city": "Puerto Barrios",
        "country": "GT"
      },
      {
        "iata": "PCG",
        "name": "Paso Caballos Airport",
        "city": "Paso Caballos",
        "country": "GT"
      },
      {
        "iata": "PKJ",
        "name": "Playa Grande Airport",
        "city": "Playa Grande",
        "country": "GT"
      },
      {
        "iata": "PON",
        "name": "Poptun Airport",
        "city": "Poptun",
        "country": "GT"
      },
      {
        "iata": "AQB",
        "name": "Santa Cruz del Quiche Airport",
        "city": "Santa Cruz del Quiche",
        "country": "GT"
      },
      {
        "iata": "AAZ",
        "name": "Quezaltenango Airport",
        "city": "Quezaltenango",
        "country": "GT"
      },
      {
        "iata": "RUV",
        "name": "Rubelsanto Airport",
        "city": "Rubelsanto",
        "country": "GT"
      },
      {
        "iata": "LCF",
        "name": "Las Vegas Airport",
        "city": "Rio Dulce",
        "country": "GT"
      },
      {
        "iata": "RER",
        "name": "Retalhuleu Airport",
        "city": "Retalhuleu",
        "country": "GT"
      },
      {
        "iata": "GSJ",
        "name": "San Jose Airport",
        "city": "Puerto San Jose",
        "country": "GT"
      },
      {
        "iata": "FRS",
        "name": "Mundo Maya International Airport",
        "city": "San Benito",
        "country": "GT"
      },
      {
        "iata": "UAX",
        "name": "Uaxactun Airport",
        "city": "Uaxactun",
        "country": "GT"
      },
      {
        "iata": "AHS",
        "name": "Ahuas Airport",
        "city": "Ahuas",
        "country": "HN"
      },
      {
        "iata": "BHG",
        "name": "Brus Laguna Airport",
        "city": "Brus Laguna",
        "country": "HN"
      },
      {
        "iata": "CAA",
        "name": "Catacamas Airport",
        "city": "Catacamas",
        "country": "HN"
      },
      {
        "iata": "CDD",
        "name": "Cauquira Airport",
        "city": "Cauquira",
        "country": "HN"
      },
      {
        "iata": "JUT",
        "name": "Jutigalpa airport",
        "city": "Jutigalpa",
        "country": "HN"
      },
      {
        "iata": "LCE",
        "name": "Goloson International Airport",
        "city": "La Ceiba",
        "country": "HN"
      },
      {
        "iata": "LEZ",
        "name": "La Esperanza Airport",
        "city": "La Esperanza",
        "country": "HN"
      },
      {
        "iata": "SAP",
        "name": "Ramon Villeda Morales International Airport",
        "city": "La Mesa",
        "country": "HN"
      },
      {
        "iata": "GJA",
        "name": "La Laguna Airport",
        "city": "Guanaja",
        "country": "HN"
      },
      {
        "iata": "PEU",
        "name": "Puerto Lempira Airport",
        "city": "Puerto Lempira",
        "country": "HN"
      },
      {
        "iata": "RTB",
        "name": "Juan Manuel Galvez International Airport",
        "city": "Roatan Island",
        "country": "HN"
      },
      {
        "iata": "SDH",
        "name": "Santa Rosa Copan Airport",
        "city": "Santa Rosa de Copan",
        "country": "HN"
      },
      {
        "iata": "RUY",
        "name": "Copan Ruinas Airport",
        "city": "Ruinas de Copan",
        "country": "HN"
      },
      {
        "iata": "XPL",
        "name": "Coronel Enrique Soto Cano Air Base",
        "city": "Comayagua",
        "country": "HN"
      },
      {
        "iata": "TEA",
        "name": "Tela Airport",
        "city": "Tela",
        "country": "HN"
      },
      {
        "iata": "TGU",
        "name": "Toncontin International Airport",
        "city": "Tegucigalpa",
        "country": "HN"
      },
      {
        "iata": "TJI",
        "name": "Trujillo Airport",
        "city": "Trujillo",
        "country": "HN"
      },
      {
        "iata": "SCD",
        "name": "Sulaco Airport",
        "city": "Sulaco",
        "country": "HN"
      },
      {
        "iata": "UII",
        "name": "Utila Airport",
        "city": "Utila Island",
        "country": "HN"
      },
      {
        "iata": "OCJ",
        "name": "Boscobel Aerodrome",
        "city": "Ocho Rios",
        "country": "JM"
      },
      {
        "iata": "KIN",
        "name": "Norman Manley International Airport",
        "city": "Kingston",
        "country": "JM"
      },
      {
        "iata": "MBJ",
        "name": "Sangster International Airport",
        "city": "Montego Bay",
        "country": "JM"
      },
      {
        "iata": "POT",
        "name": "Ken Jones Airport",
        "city": "Ken Jones",
        "country": "JM"
      },
      {
        "iata": "NEG",
        "name": "Negril Airport",
        "city": "Negril",
        "country": "JM"
      },
      {
        "iata": "KTP",
        "name": "Tinson Pen Airport",
        "city": "Tinson Pen",
        "country": "JM"
      },
      {
        "iata": "MIJ",
        "name": "Mili Island Airport",
        "city": "Mili Island",
        "country": "MH"
      },
      {
        "iata": "ACA",
        "name": "General Juan N Alvarez International Airport",
        "city": "Acapulco",
        "country": "MX"
      },
      {
        "iata": "NTR",
        "name": "Del Norte International Airport",
        "city": "",
        "country": "MX"
      },
      {
        "iata": "AGU",
        "name": "Jesus Teran International Airport",
        "city": "Aguascalientes",
        "country": "MX"
      },
      {
        "iata": "HUX",
        "name": "Bahias de Huatulco International Airport",
        "city": "Huatulco",
        "country": "MX"
      },
      {
        "iata": "CNA",
        "name": "Cananea Airport",
        "city": "",
        "country": "MX"
      },
      {
        "iata": "CVJ",
        "name": "General Mariano Matamoros Airport",
        "city": "",
        "country": "MX"
      },
      {
        "iata": "ACN",
        "name": "Ciudad Acuna New International Airport",
        "city": "Ciudad Acuna",
        "country": "MX"
      },
      {
        "iata": "CME",
        "name": "Ciudad del Carmen International Airport",
        "city": "Ciudad del Carmen",
        "country": "MX"
      },
      {
        "iata": "NCG",
        "name": "Nuevo Casas Grandes Airport",
        "city": "",
        "country": "MX"
      },
      {
        "iata": "CUL",
        "name": "Federal de Bachigualato International Airport",
        "city": "Culiacan",
        "country": "MX"
      },
      {
        "iata": "CTM",
        "name": "Chetumal International Airport",
        "city": "Chetumal",
        "country": "MX"
      },
      {
        "iata": "CEN",
        "name": "Ciudad Obregon International Airport",
        "city": "Ciudad Obregon",
        "country": "MX"
      },
      {
        "iata": "CJT",
        "name": "Comitan Airport",
        "city": "",
        "country": "MX"
      },
      {
        "iata": "CPE",
        "name": "Ingeniero Alberto Acuna Ongay International Airport",
        "city": "Campeche",
        "country": "MX"
      },
      {
        "iata": "CJS",
        "name": "Abraham Gonzalez International Airport",
        "city": "Ciudad Juarez",
        "country": "MX"
      },
      {
        "iata": "CZA",
        "name": "Chichen Itza International Airport",
        "city": "",
        "country": "MX"
      },
      {
        "iata": "CUU",
        "name": "General Roberto Fierro Villalobos International Airport",
        "city": "Chihuahua",
        "country": "MX"
      },
      {
        "iata": "CVM",
        "name": "General Pedro Jose Mendez International Airport",
        "city": "Ciudad Victoria",
        "country": "MX"
      },
      {
        "iata": "CYW",
        "name": "Captain Rogelio Castillo National Airport",
        "city": "Celaya",
        "country": "MX"
      },
      {
        "iata": "CZM",
        "name": "Cozumel International Airport",
        "city": "Cozumel",
        "country": "MX"
      },
      {
        "iata": "CUA",
        "name": "Ciudad Constitucion Airport",
        "city": "Ciudad Constitucion",
        "country": "MX"
      },
      {
        "iata": "MMC",
        "name": "Ciudad Mante National Airport",
        "city": "Ciudad Mante",
        "country": "MX"
      },
      {
        "iata": "DGO",
        "name": "General Guadalupe Victoria International Airport",
        "city": "Durango",
        "country": "MX"
      },
      {
        "iata": "TPQ",
        "name": "Amado Nervo National Airport",
        "city": "Tepic",
        "country": "MX"
      },
      {
        "iata": "ESE",
        "name": "Ensenada Airport",
        "city": "",
        "country": "MX"
      },
      {
        "iata": "GDL",
        "name": "Don Miguel Hidalgo Y Costilla International Airport",
        "city": "Guadalajara",
        "country": "MX"
      },
      {
        "iata": "GYM",
        "name": "General Jose Maria Yanez International Airport",
        "city": "Guaymas",
        "country": "MX"
      },
      {
        "iata": "GUB",
        "name": "Guerrero Negro Airport",
        "city": "Guerrero Negro",
        "country": "MX"
      },
      {
        "iata": "TCN",
        "name": "Tehuacan Airport",
        "city": "",
        "country": "MX"
      },
      {
        "iata": "HMO",
        "name": "General Ignacio P. Garcia International Airport",
        "city": "Hermosillo",
        "country": "MX"
      },
      {
        "iata": "CLQ",
        "name": "Lic. Miguel de la Madrid Airport",
        "city": "Colima",
        "country": "MX"
      },
      {
        "iata": "ISJ",
        "name": "Isla Mujeres Airport",
        "city": "",
        "country": "MX"
      },
      {
        "iata": "SLW",
        "name": "Plan De Guadalupe International Airport",
        "city": "Saltillo",
        "country": "MX"
      },
      {
        "iata": "IZT",
        "name": "Ixtepec Airport",
        "city": "",
        "country": "MX"
      },
      {
        "iata": "JAL",
        "name": "El Lencero Airport",
        "city": "Xalapa",
        "country": "MX"
      },
      {
        "iata": "AZP",
        "name": "Atizapan De Zaragoza Airport",
        "city": "",
        "country": "MX"
      },
      {
        "iata": "LZC",
        "name": "Lazaro Cardenas Airport",
        "city": "Lazaro Cardenas",
        "country": "MX"
      },
      {
        "iata": "LMM",
        "name": "Valle del Fuerte International Airport",
        "city": "Los Mochis",
        "country": "MX"
      },
      {
        "iata": "BJX",
        "name": "Del Bajio International Airport",
        "city": "Silao",
        "country": "MX"
      },
      {
        "iata": "LAP",
        "name": "Manuel Marquez de Leon International Airport",
        "city": "La Paz",
        "country": "MX"
      },
      {
        "iata": "LTO",
        "name": "Loreto International Airport",
        "city": "Loreto",
        "country": "MX"
      },
      {
        "iata": "MAM",
        "name": "General Servando Canales International Airport",
        "city": "Matamoros",
        "country": "MX"
      },
      {
        "iata": "MID",
        "name": "Licenciado Manuel Crescencio Rejon Int Airport",
        "city": "Merida",
        "country": "MX"
      },
      {
        "iata": "MUG",
        "name": "Mulege Airport",
        "city": "Mulege",
        "country": "MX"
      },
      {
        "iata": "MXL",
        "name": "General Rodolfo Sanchez Taboada International Airport",
        "city": "Mexicali",
        "country": "MX"
      },
      {
        "iata": "MLM",
        "name": "General Francisco J. Mujica International Airport",
        "city": "Morelia",
        "country": "MX"
      },
      {
        "iata": "MTT",
        "name": "Minatitlan/Coatzacoalcos National Airport",
        "city": "Minatitlan",
        "country": "MX"
      },
      {
        "iata": "LOV",
        "name": "Monclova International Airport",
        "city": "",
        "country": "MX"
      },
      {
        "iata": "MEX",
        "name": "Licenciado Benito Juarez International Airport",
        "city": "Mexico City",
        "country": "MX"
      },
      {
        "iata": "MTY",
        "name": "General Mariano Escobedo International Airport",
        "city": "Monterrey",
        "country": "MX"
      },
      {
        "iata": "MZT",
        "name": "General Rafael Buelna International Airport",
        "city": "Mazatlan",
        "country": "MX"
      },
      {
        "iata": "NOG",
        "name": "Nogales International Airport",
        "city": "",
        "country": "MX"
      },
      {
        "iata": "NLD",
        "name": "Quetzalcoatl International Airport",
        "city": "Nuevo Laredo",
        "country": "MX"
      },
      {
        "iata": "OAX",
        "name": "Xoxocotlan International Airport",
        "city": "Oaxaca",
        "country": "MX"
      },
      {
        "iata": "PAZ",
        "name": "El Tajin National Airport",
        "city": "Poza Rica",
        "country": "MX"
      },
      {
        "iata": "PBC",
        "name": "Hermanos Serdan International Airport",
        "city": "Puebla",
        "country": "MX"
      },
      {
        "iata": "PPE",
        "name": "Puerto Penasco International Airport",
        "city": "Puerto Penasco",
        "country": "MX"
      },
      {
        "iata": "PDS",
        "name": "Piedras Negras International Airport",
        "city": "",
        "country": "MX"
      },
      {
        "iata": "PCO",
        "name": "Punta Colorada Airport",
        "city": "La Ribera",
        "country": "MX"
      },
      {
        "iata": "UPN",
        "name": "Licenciado y General Ignacio Lopez Rayon Airport",
        "city": "",
        "country": "MX"
      },
      {
        "iata": "PQM",
        "name": "Palenque International Airport",
        "city": "",
        "country": "MX"
      },
      {
        "iata": "PVR",
        "name": "Licenciado Gustavo Diaz Ordaz International Airport",
        "city": "Puerto Vallarta",
        "country": "MX"
      },
      {
        "iata": "PXM",
        "name": "Puerto Escondido International Airport",
        "city": "Puerto Escondido",
        "country": "MX"
      },
      {
        "iata": "QRO",
        "name": "Queretaro Intercontinental Airport",
        "city": "Queretaro",
        "country": "MX"
      },
      {
        "iata": "REX",
        "name": "General Lucio Blanco International Airport",
        "city": "Reynosa",
        "country": "MX"
      },
      {
        "iata": "SZT",
        "name": "San Cristobal De Las Casas Airport",
        "city": "",
        "country": "MX"
      },
      {
        "iata": "SJD",
        "name": "Los Cabos International Airport",
        "city": "San Jose del Cabo",
        "country": "MX"
      },
      {
        "iata": "SFH",
        "name": "San Felipe International Airport",
        "city": "",
        "country": "MX"
      },
      {
        "iata": "SLP",
        "name": "Ponciano Arriaga International Airport",
        "city": "San Luis Potosi",
        "country": "MX"
      },
      {
        "iata": "TRC",
        "name": "Francisco Sarabia International Airport",
        "city": "Torreon",
        "country": "MX"
      },
      {
        "iata": "TGZ",
        "name": "Angel Albino Corzo International Airport",
        "city": "Tuxtla Gutierrez",
        "country": "MX"
      },
      {
        "iata": "TIJ",
        "name": "General Abelardo L. Rodriguez International Airport",
        "city": "Tijuana",
        "country": "MX"
      },
      {
        "iata": "TAM",
        "name": "General Francisco Javier Mina International Airport",
        "city": "Tampico",
        "country": "MX"
      },
      {
        "iata": "TSL",
        "name": "Tamuin Airport",
        "city": "",
        "country": "MX"
      },
      {
        "iata": "TLC",
        "name": "Licenciado Adolfo Lopez Mateos International Airport",
        "city": "Toluca",
        "country": "MX"
      },
      {
        "iata": "TAP",
        "name": "Tapachula International Airport",
        "city": "Tapachula",
        "country": "MX"
      },
      {
        "iata": "WIX",
        "name": "Tuxpan Airport",
        "city": "",
        "country": "MX"
      },
      {
        "iata": "CUN",
        "name": "Cancun International Airport",
        "city": "Cancun",
        "country": "MX"
      },
      {
        "iata": "VSA",
        "name": "Carlos Rovirosa Perez International Airport",
        "city": "Villahermosa",
        "country": "MX"
      },
      {
        "iata": "VER",
        "name": "General Heriberto Jara International Airport",
        "city": "Veracruz",
        "country": "MX"
      },
      {
        "iata": "ZCL",
        "name": "General Leobardo C. Ruiz International Airport",
        "city": "Zacatecas",
        "country": "MX"
      },
      {
        "iata": "ZIH",
        "name": "Ixtapa Zihuatanejo International Airport",
        "city": "Ixtapa",
        "country": "MX"
      },
      {
        "iata": "ZMM",
        "name": "Zamora Airport",
        "city": "",
        "country": "MX"
      },
      {
        "iata": "ZLO",
        "name": "Playa De Oro International Airport",
        "city": "Manzanillo",
        "country": "MX"
      },
      {
        "iata": "BEF",
        "name": "Bluefields Airport",
        "city": "Bluefileds",
        "country": "NI"
      },
      {
        "iata": "BZA",
        "name": "San Pedro Airport",
        "city": "Bonanza",
        "country": "NI"
      },
      {
        "iata": "RNI",
        "name": "Corn Island",
        "city": "Corn Island",
        "country": "NI"
      },
      {
        "iata": "MGA",
        "name": "Augusto C. Sandino (Managua) International Airport",
        "city": "Managua",
        "country": "NI"
      },
      {
        "iata": "NVG",
        "name": "Nueva Guinea Airport",
        "city": "Nueva Guinea",
        "country": "NI"
      },
      {
        "iata": "PUZ",
        "name": "Puerto Cabezas Airport",
        "city": "Puerto Cabezas",
        "country": "NI"
      },
      {
        "iata": "RFS",
        "name": "Rosita Airport",
        "city": "La Rosita",
        "country": "NI"
      },
      {
        "iata": "NCR",
        "name": "San Carlos",
        "city": "San Carlos",
        "country": "NI"
      },
      {
        "iata": "SIU",
        "name": "Siuna",
        "city": "Siuna",
        "country": "NI"
      },
      {
        "iata": "WSP",
        "name": "Waspam Airport",
        "city": "Waspam",
        "country": "NI"
      },
      {
        "iata": "BOC",
        "name": "Bocas Del Toro International Airport",
        "city": "Isla Colon",
        "country": "PA"
      },
      {
        "iata": "CTD",
        "name": "Alonso Valderrama Airport",
        "city": "Chitre",
        "country": "PA"
      },
      {
        "iata": "CHX",
        "name": "Cap Manuel Nino International Airport",
        "city": "Changuinola",
        "country": "PA"
      },
      {
        "iata": "DAV",
        "name": "Enrique Malek International Airport",
        "city": "David",
        "country": "PA"
      },
      {
        "iata": "ONX",
        "name": "Enrique Adolfo Jimenez Airport",
        "city": "Colon",
        "country": "PA"
      },
      {
        "iata": "JQE",
        "name": "Jaque Airport",
        "city": "Jaque",
        "country": "PA"
      },
      {
        "iata": "PLP",
        "name": "Captain Ramon Xatruch Airport",
        "city": "La Palma",
        "country": "PA"
      },
      {
        "iata": "PAC",
        "name": "Marcos A. Gelabert International Airport",
        "city": "Albrook",
        "country": "PA"
      },
      {
        "iata": "BLB",
        "name": "Howard/Panama Pacifico International Airport",
        "city": "Panama City",
        "country": "PA"
      },
      {
        "iata": "SYP",
        "name": "Ruben Cantu Airport",
        "city": "Santiago",
        "country": "PA"
      },
      {
        "iata": "PTY",
        "name": "Tocumen International Airport",
        "city": "Tocumen",
        "country": "PA"
      },
      {
        "iata": "NBL",
        "name": "San Blas Airport",
        "city": "Wannukandi",
        "country": "PA"
      },
      {
        "iata": "FON",
        "name": "Arenal Airport",
        "city": "La Fortuna/San Carlos",
        "country": "CR"
      },
      {
        "iata": "TTQ",
        "name": "Aerotortuguero Airport",
        "city": "Roxana",
        "country": "CR"
      },
      {
        "iata": "BAI",
        "name": "Buenos Aires Airport",
        "city": "Punta Arenas",
        "country": "CR"
      },
      {
        "iata": "BCL",
        "name": "Barra del Colorado Airport",
        "city": "Pococi",
        "country": "CR"
      },
      {
        "iata": "CSC",
        "name": "Codela Airport",
        "city": "Guapiles",
        "country": "CR"
      },
      {
        "iata": "OTR",
        "name": "Coto 47 Airport",
        "city": "Corredores",
        "country": "CR"
      },
      {
        "iata": "RIK",
        "name": "Carrillo Airport",
        "city": "Nicoya",
        "country": "CR"
      },
      {
        "iata": "DRK",
        "name": "Drake Bay Airport",
        "city": "Puntarenas",
        "country": "CR"
      },
      {
        "iata": "FMG",
        "name": "Flamingo Airport",
        "city": "Brasilito",
        "country": "CR"
      },
      {
        "iata": "GLF",
        "name": "Golfito Airport",
        "city": "Golfito",
        "country": "CR"
      },
      {
        "iata": "GPL",
        "name": "Guapiles Airport",
        "city": "Pococi",
        "country": "CR"
      },
      {
        "iata": "PBP",
        "name": "Islita Airport",
        "city": "Nandayure",
        "country": "CR"
      },
      {
        "iata": "LIR",
        "name": "Daniel Oduber Quiros International Airport",
        "city": "Liberia",
        "country": "CR"
      },
      {
        "iata": "LSL",
        "name": "Los Chiles Airport",
        "city": "Los Chiles",
        "country": "CR"
      },
      {
        "iata": "LIO",
        "name": "Limon International Airport",
        "city": "Puerto Limon",
        "country": "CR"
      },
      {
        "iata": "NCT",
        "name": "Guanacaste Airport",
        "city": "Nicoya/Guanacate",
        "country": "CR"
      },
      {
        "iata": "NOB",
        "name": "Nosara Airport",
        "city": "Nicoya",
        "country": "CR"
      },
      {
        "iata": "SJO",
        "name": "Juan Santamaria International Airport",
        "city": "San Jose",
        "country": "CR"
      },
      {
        "iata": "PJM",
        "name": "Puerto Jimenez Airport",
        "city": "Puerto Jimenez",
        "country": "CR"
      },
      {
        "iata": "PMZ",
        "name": "Palmar Sur Airport",
        "city": "Palmar Sur",
        "country": "CR"
      },
      {
        "iata": "SYQ",
        "name": "Tobias Bolanos International Airport",
        "city": "San Jose",
        "country": "CR"
      },
      {
        "iata": "XQP",
        "name": "Quepos Managua Airport",
        "city": "Quepos",
        "country": "CR"
      },
      {
        "iata": "RFR",
        "name": "Rio Frio / Progreso Airport",
        "city": "Rio Frio / Progreso",
        "country": "CR"
      },
      {
        "iata": "PLD",
        "name": "Playa Samara Airport",
        "city": "Playa Samara",
        "country": "CR"
      },
      {
        "iata": "TOO",
        "name": "San Vito De Java Airport",
        "city": "Coto Brus",
        "country": "CR"
      },
      {
        "iata": "TNO",
        "name": "Tamarindo De Santa Cruz Airport",
        "city": "Santa Cruz",
        "country": "CR"
      },
      {
        "iata": "TMU",
        "name": "Tambor Airport",
        "city": "Nicoya",
        "country": "CR"
      },
      {
        "iata": "UPL",
        "name": "Upala Airport",
        "city": "Upala",
        "country": "CR"
      },
      {
        "iata": "SAL",
        "name": "El Salvador International Airport",
        "city": "Santa Clara",
        "country": "SV"
      },
      {
        "iata": "CYA",
        "name": "Les Cayes Airport",
        "city": "Les Cayes",
        "country": "HT"
      },
      {
        "iata": "CAP",
        "name": "Cap Haitien International Airport",
        "city": "Cap Haitien",
        "country": "HT"
      },
      {
        "iata": "JAK",
        "name": "Jacmel Airport",
        "city": "Jacmel",
        "country": "HT"
      },
      {
        "iata": "JEE",
        "name": "Jeremie Airport",
        "city": "Jeremie",
        "country": "HT"
      },
      {
        "iata": "PAP",
        "name": "Toussaint Louverture International Airport",
        "city": "Port-au-Prince",
        "country": "HT"
      },
      {
        "iata": "PAX",
        "name": "Port-de-Paix Airport",
        "city": "Port-de-Paix",
        "country": "HT"
      },
      {
        "iata": "BCA",
        "name": "Gustavo Rizo Airport",
        "city": "Baracoa",
        "country": "CU"
      },
      {
        "iata": "BWW",
        "name": "Las Brujas Airport",
        "city": "Cayo Santa Maria",
        "country": "CU"
      },
      {
        "iata": "BYM",
        "name": "Carlos Manuel de Cespedes Airport",
        "city": "Bayamo",
        "country": "CU"
      },
      {
        "iata": "AVI",
        "name": "Maximo Gomez Airport",
        "city": "Ciego de Avila",
        "country": "CU"
      },
      {
        "iata": "CCC",
        "name": "Jardines Del Rey Airport",
        "city": "Cayo Coco",
        "country": "CU"
      },
      {
        "iata": "CFG",
        "name": "Jaime Gonzalez Airport",
        "city": "Cienfuegos",
        "country": "CU"
      },
      {
        "iata": "CYO",
        "name": "Vilo Acuna International Airport",
        "city": "Cayo Largo del Sur",
        "country": "CU"
      },
      {
        "iata": "CMW",
        "name": "Ignacio Agramonte International Airport",
        "city": "Camaguey",
        "country": "CU"
      },
      {
        "iata": "QCO",
        "name": "Colon Airport",
        "city": "Colon",
        "country": "CU"
      },
      {
        "iata": "SCU",
        "name": "Antonio Maceo International Airport",
        "city": "Santiago",
        "country": "CU"
      },
      {
        "iata": "NBW",
        "name": "Leeward Point Field",
        "city": "Guantanamo Bay Naval Station",
        "country": "CU"
      },
      {
        "iata": "GAO",
        "name": "Mariana Grajales Airport",
        "city": "Guantanamo",
        "country": "CU"
      },
      {
        "iata": "HAV",
        "name": "Jose Marti International Airport",
        "city": "Havana",
        "country": "CU"
      },
      {
        "iata": "HOG",
        "name": "Frank Pais International Airport",
        "city": "Holguin",
        "country": "CU"
      },
      {
        "iata": "VRO",
        "name": "Kawama Airport",
        "city": "Matanzas",
        "country": "CU"
      },
      {
        "iata": "LCL",
        "name": "La Coloma Airport",
        "city": "Pinar del Rio",
        "country": "CU"
      },
      {
        "iata": "UMA",
        "name": "Punta de Maisi Airport",
        "city": "Maisi",
        "country": "CU"
      },
      {
        "iata": "MJG",
        "name": "Mayajigua Airport",
        "city": "Mayajigua",
        "country": "CU"
      },
      {
        "iata": "MOA",
        "name": "Orestes Acosta Airport",
        "city": "Moa",
        "country": "CU"
      },
      {
        "iata": "MZO",
        "name": "Sierra Maestra Airport",
        "city": "Manzanillo",
        "country": "CU"
      },
      {
        "iata": "QSN",
        "name": "San Nicolas De Bari Airport",
        "city": "San Nicolas",
        "country": "CU"
      },
      {
        "iata": "ICR",
        "name": "Nicaro Airport",
        "city": "Nicaro",
        "country": "CU"
      },
      {
        "iata": "GER",
        "name": "Rafael Cabrera Airport",
        "city": "Nueva Gerona",
        "country": "CU"
      },
      {
        "iata": "UPB",
        "name": "Playa Baracoa Airport",
        "city": "Havana",
        "country": "CU"
      },
      {
        "iata": "QPD",
        "name": "Pinar Del Rio Airport",
        "city": "Pinar del Rio",
        "country": "CU"
      },
      {
        "iata": "SNU",
        "name": "Abel Santamaria Airport",
        "city": "Santa Clara",
        "country": "CU"
      },
      {
        "iata": "SNJ",
        "name": "San Julian Air Base",
        "city": "Pinar Del Rio",
        "country": "CU"
      },
      {
        "iata": "SZJ",
        "name": "Siguanea Airport",
        "city": "Isla de la Juventud",
        "country": "CU"
      },
      {
        "iata": "USS",
        "name": "Sancti Spiritus Airport",
        "city": "Sancti Spiritus",
        "country": "CU"
      },
      {
        "iata": "TND",
        "name": "Alberto Delgado Airport",
        "city": "Trinidad",
        "country": "CU"
      },
      {
        "iata": "VRA",
        "name": "Juan Gualberto Gomez International Airport",
        "city": "Varadero",
        "country": "CU"
      },
      {
        "iata": "VTU",
        "name": "Hermanos Ameijeiras Airport",
        "city": "Las Tunas",
        "country": "CU"
      },
      {
        "iata": "CYB",
        "name": "Gerrard Smith International Airport",
        "city": "Cayman Brac",
        "country": "KY"
      },
      {
        "iata": "LYB",
        "name": "Edward Bodden Airfield",
        "city": "Little Cayman",
        "country": "KY"
      },
      {
        "iata": "GCM",
        "name": "Owen Roberts International Airport",
        "city": "Georgetown",
        "country": "KY"
      },
      {
        "iata": "MAY",
        "name": "Clarence A. Bain Airport",
        "city": "Mangrove Cay",
        "country": "BS"
      },
      {
        "iata": "ASD",
        "name": "Andros Town Airport",
        "city": "",
        "country": "BS"
      },
      {
        "iata": "COX",
        "name": "Congo Town Airport",
        "city": "Andros",
        "country": "BS"
      },
      {
        "iata": "MHH",
        "name": "Marsh Harbour International Airport",
        "city": "Marsh Harbour",
        "country": "BS"
      },
      {
        "iata": "SAQ",
        "name": "San Andros Airport",
        "city": "Andros Island",
        "country": "BS"
      },
      {
        "iata": "AXP",
        "name": "Spring Point Airport",
        "city": "Spring Point",
        "country": "BS"
      },
      {
        "iata": "TCB",
        "name": "Treasure Cay Airport",
        "city": "Treasure Cay",
        "country": "BS"
      },
      {
        "iata": "WKR",
        "name": "Abaco I Walker C Airport",
        "city": "",
        "country": "BS"
      },
      {
        "iata": "CCZ",
        "name": "Chub Cay Airport",
        "city": "",
        "country": "BS"
      },
      {
        "iata": "GHC",
        "name": "Great Harbour Cay Airport",
        "city": "",
        "country": "BS"
      },
      {
        "iata": "BIM",
        "name": "South Bimini Airport",
        "city": "South Bimini",
        "country": "BS"
      },
      {
        "iata": "ATC",
        "name": "Arthur's Town Airport",
        "city": "Arthur's Town",
        "country": "BS"
      },
      {
        "iata": "CAT",
        "name": "New Bight Airport",
        "city": "Cat Island",
        "country": "BS"
      },
      {
        "iata": "CXY",
        "name": "Cat Cay Airport",
        "city": "Cat Cay",
        "country": "BS"
      },
      {
        "iata": "CRI",
        "name": "Colonel Hill Airport",
        "city": "Colonel Hill",
        "country": "BS"
      },
      {
        "iata": "PWN",
        "name": "Pitts Town Airport",
        "city": "Pitts Town",
        "country": "BS"
      },
      {
        "iata": "GGT",
        "name": "Exuma International Airport",
        "city": "George Town",
        "country": "BS"
      },
      {
        "iata": "ELH",
        "name": "North Eleuthera Airport",
        "city": "North Eleuthera",
        "country": "BS"
      },
      {
        "iata": "GHB",
        "name": "Governor's Harbour Airport",
        "city": "Governor's Harbour",
        "country": "BS"
      },
      {
        "iata": "NMC",
        "name": "Normans Cay Airport",
        "city": "",
        "country": "BS"
      },
      {
        "iata": "RSD",
        "name": "Rock Sound Airport",
        "city": "Rock Sound",
        "country": "BS"
      },
      {
        "iata": "TYM",
        "name": "Staniel Cay Airport",
        "city": "",
        "country": "BS"
      },
      {
        "iata": "FPO",
        "name": "Grand Bahama International Airport",
        "city": "Freeport",
        "country": "BS"
      },
      {
        "iata": "WTD",
        "name": "West End Airport",
        "city": "West End",
        "country": "BS"
      },
      {
        "iata": "IGA",
        "name": "Inagua Airport",
        "city": "Matthew Town",
        "country": "BS"
      },
      {
        "iata": "LGI",
        "name": "Deadman's Cay Airport",
        "city": "Deadman's Cay",
        "country": "BS"
      },
      {
        "iata": "SML",
        "name": "Stella Maris Airport",
        "city": "Stella Maris",
        "country": "BS"
      },
      {
        "iata": "MYG",
        "name": "Mayaguana Airport",
        "city": "Mayaguana",
        "country": "BS"
      },
      {
        "iata": "NAS",
        "name": "Lynden Pindling International Airport",
        "city": "Nassau",
        "country": "BS"
      },
      {
        "iata": "PID",
        "name": "Nassau Paradise Island Airport",
        "city": "Nassau",
        "country": "BS"
      },
      {
        "iata": "DCT",
        "name": "Duncan Town Airport",
        "city": "",
        "country": "BS"
      },
      {
        "iata": "RCY",
        "name": "Rum Cay Airport",
        "city": "",
        "country": "BS"
      },
      {
        "iata": "ZSA",
        "name": "San Salvador Airport",
        "city": "San Salvador",
        "country": "BS"
      },
      {
        "iata": "BZE",
        "name": "Philip S. W. Goldson International Airport",
        "city": "Belize City",
        "country": "BZ"
      },
      {
        "iata": "AIT",
        "name": "Aitutaki Airport",
        "city": "Aitutaki",
        "country": "CK"
      },
      {
        "iata": "AIU",
        "name": "Enua Airport",
        "city": "Atiu Island",
        "country": "CK"
      },
      {
        "iata": "MGS",
        "name": "Mangaia Island Airport",
        "city": "Mangaia Island",
        "country": "CK"
      },
      {
        "iata": "MHX",
        "name": "Manihiki Island Airport",
        "city": "Manihiki Island",
        "country": "CK"
      },
      {
        "iata": "MUK",
        "name": "Mauke Airport",
        "city": "Mauke Island",
        "country": "CK"
      },
      {
        "iata": "MOI",
        "name": "Mitiaro Island Airport",
        "city": "Mitiaro Island",
        "country": "CK"
      },
      {
        "iata": "PYE",
        "name": "Tongareva Airport",
        "city": "Penrhyn Island",
        "country": "CK"
      },
      {
        "iata": "RAR",
        "name": "Rarotonga International Airport",
        "city": "Avarua",
        "country": "CK"
      },
      {
        "iata": "ICI",
        "name": "Cicia Airport",
        "city": "Cicia",
        "country": "FJ"
      },
      {
        "iata": "BFJ",
        "name": "Ba Airport",
        "city": "",
        "country": "FJ"
      },
      {
        "iata": "NAN",
        "name": "Nadi International Airport",
        "city": "Nadi",
        "country": "FJ"
      },
      {
        "iata": "PTF",
        "name": "Malolo Lailai Island Airport",
        "city": "Malolo Lailai Island",
        "country": "FJ"
      },
      {
        "iata": "KDV",
        "name": "Vunisea Airport",
        "city": "Vunisea",
        "country": "FJ"
      },
      {
        "iata": "MNF",
        "name": "Mana Island Airport",
        "city": "Mana Island",
        "country": "FJ"
      },
      {
        "iata": "MFJ",
        "name": "Moala Airport",
        "city": "Moala",
        "country": "FJ"
      },
      {
        "iata": "SUV",
        "name": "Nausori International Airport",
        "city": "Nausori",
        "country": "FJ"
      },
      {
        "iata": "LEV",
        "name": "Levuka Airfield",
        "city": "Bureta",
        "country": "FJ"
      },
      {
        "iata": "NGI",
        "name": "Ngau Airport",
        "city": "Ngau",
        "country": "FJ"
      },
      {
        "iata": "LUC",
        "name": "Laucala Island Airport",
        "city": "Laucala Island",
        "country": "FJ"
      },
      {
        "iata": "LKB",
        "name": "Lakeba Island Airport",
        "city": "Lakeba Island",
        "country": "FJ"
      },
      {
        "iata": "LBS",
        "name": "Labasa Airport",
        "city": "",
        "country": "FJ"
      },
      {
        "iata": "TVU",
        "name": "Matei Airport",
        "city": "Matei",
        "country": "FJ"
      },
      {
        "iata": "KXF",
        "name": "Koro Island Airport",
        "city": "Koro Island",
        "country": "FJ"
      },
      {
        "iata": "RTA",
        "name": "Rotuma Airport",
        "city": "Rotuma",
        "country": "FJ"
      },
      {
        "iata": "SVU",
        "name": "Savusavu Airport",
        "city": "Savusavu",
        "country": "FJ"
      },
      {
        "iata": "VAU",
        "name": "Vatukoula Airport",
        "city": "Vatukoula",
        "country": "FJ"
      },
      {
        "iata": "KAY",
        "name": "Wakaya Island Airport",
        "city": "Wakaya Island",
        "country": "FJ"
      },
      {
        "iata": "ONU",
        "name": "Ono-I-Lau Airport",
        "city": "Ono-I-Lau",
        "country": "FJ"
      },
      {
        "iata": "YAS",
        "name": "Yasawa Island Airport",
        "city": "Yasawa Island",
        "country": "FJ"
      },
      {
        "iata": "EUA",
        "name": "Kaufana Airport",
        "city": "Eua Island",
        "country": "TO"
      },
      {
        "iata": "TBU",
        "name": "Fua'amotu International Airport",
        "city": "Nuku'alofa",
        "country": "TO"
      },
      {
        "iata": "HPA",
        "name": "Lifuka Island Airport",
        "city": "Lifuka",
        "country": "TO"
      },
      {
        "iata": "Niu",
        "name": "Mata'aho Airport",
        "city": "Angaha",
        "country": "TO"
      },
      {
        "iata": "NTT",
        "name": "Kuini Lavenia Airport",
        "city": "Niuatoputapu",
        "country": "TO"
      },
      {
        "iata": "VAV",
        "name": "Vava'u International Airport",
        "city": "Vava'u Island",
        "country": "TO"
      },
      {
        "iata": "VBV",
        "name": "Vanua Balavu Airport",
        "city": "Vanua Balavu",
        "country": "FJ"
      },
      {
        "iata": "VTF",
        "name": "Vatulele Airport",
        "city": "Vatulele",
        "country": "FJ"
      },
      {
        "iata": "ABF",
        "name": "Abaiang Airport",
        "city": "Abaiang",
        "country": "KI"
      },
      {
        "iata": "BEZ",
        "name": "Beru Airport",
        "city": "Beru",
        "country": "KI"
      },
      {
        "iata": "FUN",
        "name": "Funafuti International Airport",
        "city": "Funafuti",
        "country": "TV"
      },
      {
        "iata": "KUC",
        "name": "Kuria Airport",
        "city": "Kuria",
        "country": "KI"
      },
      {
        "iata": "MNK",
        "name": "Maiana Airport",
        "city": "Maiana",
        "country": "KI"
      },
      {
        "iata": "MZK",
        "name": "Marakei Airport",
        "city": "Marakei",
        "country": "KI"
      },
      {
        "iata": "MTK",
        "name": "Makin Island Airport",
        "city": "Makin Island",
        "country": "KI"
      },
      {
        "iata": "NIG",
        "name": "Nikunau Airport",
        "city": "Nikunau",
        "country": "KI"
      },
      {
        "iata": "OOT",
        "name": "Onotoa Airport",
        "city": "Onotoa",
        "country": "KI"
      },
      {
        "iata": "TRW",
        "name": "Bonriki International Airport",
        "city": "Tarawa",
        "country": "KI"
      },
      {
        "iata": "AEA",
        "name": "Abemama Atoll Airport",
        "city": "Abemama Atoll",
        "country": "KI"
      },
      {
        "iata": "TBF",
        "name": "Tabiteuea North Airport",
        "city": "",
        "country": "KI"
      },
      {
        "iata": "TMN",
        "name": "Tamana Island Airport",
        "city": "Tamana Island",
        "country": "KI"
      },
      {
        "iata": "NON",
        "name": "Nonouti Airport",
        "city": "Nonouti",
        "country": "KI"
      },
      {
        "iata": "AIS",
        "name": "Arorae Island Airport",
        "city": "Arorae Island",
        "country": "KI"
      },
      {
        "iata": "TSU",
        "name": "Tabiteuea South Airport",
        "city": "Tabiteuea South",
        "country": "KI"
      },
      {
        "iata": "BBG",
        "name": "Butaritari Atoll Airport",
        "city": "Butaritari Atoll",
        "country": "KI"
      },
      {
        "iata": "AAK",
        "name": "Buariki Airport",
        "city": "Buariki",
        "country": "KI"
      },
      {
        "iata": "IUE",
        "name": "Niue International Airport",
        "city": "Alofi",
        "country": "NU"
      },
      {
        "iata": "FUT",
        "name": "Pointe Vele Airport",
        "city": "Futuna Island",
        "country": "WF"
      },
      {
        "iata": "WLS",
        "name": "Hihifo Airport",
        "city": "Wallis Island",
        "country": "WF"
      },
      {
        "iata": "OFU",
        "name": "Ofu Village Airport",
        "city": "Ofu Village",
        "country": "AS"
      },
      {
        "iata": "AAU",
        "name": "Asau Airport",
        "city": "Asau",
        "country": "WS"
      },
      {
        "iata": "APW",
        "name": "Faleolo International Airport",
        "city": "Apia",
        "country": "WS"
      },
      {
        "iata": "FGI",
        "name": "Fagali'i Airport",
        "city": "Apia",
        "country": "WS"
      },
      {
        "iata": "FTI",
        "name": "Fitiuta Airport",
        "city": "Fitiuta Village",
        "country": "AS"
      },
      {
        "iata": "MXS",
        "name": "Maota Airport",
        "city": "Maota",
        "country": "WS"
      },
      {
        "iata": "PPG",
        "name": "Pago Pago International Airport",
        "city": "Pago Pago",
        "country": "AS"
      },
      {
        "iata": "PPT",
        "name": "Faa'a International Airport",
        "city": "Papeete",
        "country": "PF"
      },
      {
        "iata": "RUR",
        "name": "Rurutu Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "TUB",
        "name": "Tubuai Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "RVV",
        "name": "Raivavae Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "AAA",
        "name": "Anaa Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "FGU",
        "name": "Fangatau Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "TIH",
        "name": "Tikehau Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "APK",
        "name": "Apataki Airport",
        "city": "Apataki",
        "country": "PF"
      },
      {
        "iata": "REA",
        "name": "Reao Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "FAV",
        "name": "Fakarava Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "HHZ",
        "name": "Hikueru Atoll Airport",
        "city": "Hikueru Atoll",
        "country": "PF"
      },
      {
        "iata": "XMH",
        "name": "Manihi Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "GMR",
        "name": "Totegegie Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "KKR",
        "name": "Kaukura Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "MKP",
        "name": "Makemo Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "NAU",
        "name": "Napuka Island Airport",
        "city": "Napuka Island",
        "country": "PF"
      },
      {
        "iata": "TKV",
        "name": "Tatakoto Airport",
        "city": "Tatakoto",
        "country": "PF"
      },
      {
        "iata": "PKP",
        "name": "Puka Puka Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "PUK",
        "name": "Pukarua Airport",
        "city": "Pukarua",
        "country": "PF"
      },
      {
        "iata": "TKP",
        "name": "Takapoto Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "AXR",
        "name": "Arutua Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "MVT",
        "name": "Mataiva Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "NUK",
        "name": "Nukutavake Airport",
        "city": "Nukutavake",
        "country": "PF"
      },
      {
        "iata": "ZTA",
        "name": "Tureia Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "AHE",
        "name": "Ahe Airport",
        "city": "Ahe Atoll",
        "country": "PF"
      },
      {
        "iata": "KHZ",
        "name": "Kauehi Airport",
        "city": "Kauehi",
        "country": "PF"
      },
      {
        "iata": "FAC",
        "name": "Faaite Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "FHZ",
        "name": "Fakahina Airport",
        "city": "Fakahina",
        "country": "PF"
      },
      {
        "iata": "RKA",
        "name": "Aratika Nord Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "RRR",
        "name": "Raroia Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "TKX",
        "name": "Takaroa Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "NHV",
        "name": "Nuku Hiva Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "AUQ",
        "name": "Hiva Oa-Atuona Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "UAP",
        "name": "Ua Pou Airport",
        "city": "Ua Pou",
        "country": "PF"
      },
      {
        "iata": "UAH",
        "name": "Ua Huka Airport",
        "city": "Ua Huka",
        "country": "PF"
      },
      {
        "iata": "BOB",
        "name": "Bora Bora Airport",
        "city": "Motu Mute",
        "country": "PF"
      },
      {
        "iata": "TTI",
        "name": "Tetiaroa Airport",
        "city": "Tetiaroa",
        "country": "PF"
      },
      {
        "iata": "RGI",
        "name": "Rangiroa Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "HUH",
        "name": "Huahine-Fare Airport",
        "city": "Fare",
        "country": "PF"
      },
      {
        "iata": "MOZ",
        "name": "Moorea Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "HOI",
        "name": "Hao Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "MAU",
        "name": "Maupiti Airport",
        "city": "",
        "country": "PF"
      },
      {
        "iata": "RFP",
        "name": "Raiatea Airport",
        "city": "Uturoa",
        "country": "PF"
      },
      {
        "iata": "VHZ",
        "name": "Vahitahi Airport",
        "city": "Vahitahi",
        "country": "PF"
      },
      {
        "iata": "MTV",
        "name": "Mota Lava Airport",
        "city": "Ablow",
        "country": "VU"
      },
      {
        "iata": "SLH",
        "name": "Sola Airport",
        "city": "Sola",
        "country": "VU"
      },
      {
        "iata": "TOH",
        "name": "Torres Airstrip",
        "city": "Loh/Linua",
        "country": "VU"
      },
      {
        "iata": "EAE",
        "name": "Sangafa Airport",
        "city": "Sangafa",
        "country": "VU"
      },
      {
        "iata": "CCV",
        "name": "Craig Cove Airport",
        "city": "Craig Cove",
        "country": "VU"
      },
      {
        "iata": "LOD",
        "name": "Longana Airport",
        "city": "Longana",
        "country": "VU"
      },
      {
        "iata": "SSR",
        "name": "Sara Airport",
        "city": "Pentecost Island",
        "country": "VU"
      },
      {
        "iata": "PBJ",
        "name": "Tavie Airport",
        "city": "Paama Island",
        "country": "VU"
      },
      {
        "iata": "LPM",
        "name": "Lamap Airport",
        "city": "Lamap",
        "country": "VU"
      },
      {
        "iata": "LNB",
        "name": "Lamen Bay Airport",
        "city": "Lamen Bay",
        "country": "VU"
      },
      {
        "iata": "MWF",
        "name": "Naone Airport",
        "city": "Maewo Island",
        "country": "VU"
      },
      {
        "iata": "LNE",
        "name": "Lonorore Airport",
        "city": "Lonorore",
        "country": "VU"
      },
      {
        "iata": "NUS",
        "name": "Norsup Airport",
        "city": "Norsup",
        "country": "VU"
      },
      {
        "iata": "ZGU",
        "name": "Gaua Island Airport",
        "city": "Gaua Island",
        "country": "VU"
      },
      {
        "iata": "RCL",
        "name": "Redcliffe Airport",
        "city": "Redcliffe",
        "country": "VU"
      },
      {
        "iata": "SON",
        "name": "Santo Pekoa International Airport",
        "city": "Luganville",
        "country": "VU"
      },
      {
        "iata": "TGH",
        "name": "Tongoa Island Airport",
        "city": "Tongoa Island",
        "country": "VU"
      },
      {
        "iata": "ULB",
        "name": "Ulei Airport",
        "city": "Ambryn Island",
        "country": "VU"
      },
      {
        "iata": "VLS",
        "name": "Valesdir Airport",
        "city": "Valesdir",
        "country": "VU"
      },
      {
        "iata": "WLH",
        "name": "Walaha Airport",
        "city": "Walaha",
        "country": "VU"
      },
      {
        "iata": "SWJ",
        "name": "Southwest Bay Airport",
        "city": "Malekula Island",
        "country": "VU"
      },
      {
        "iata": "OLJ",
        "name": "North West Santo Airport",
        "city": "Olpoi",
        "country": "VU"
      },
      {
        "iata": "AUY",
        "name": "Anelghowhat Airport",
        "city": "Anelghowhat",
        "country": "VU"
      },
      {
        "iata": "AWD",
        "name": "Aniwa Airport",
        "city": "Aniwa",
        "country": "VU"
      },
      {
        "iata": "DLY",
        "name": "Dillon's Bay Airport",
        "city": "Dillon's Bay",
        "country": "VU"
      },
      {
        "iata": "FTA",
        "name": "Futuna Airport",
        "city": "Futuna Island",
        "country": "VU"
      },
      {
        "iata": "IPA",
        "name": "Ipota Airport",
        "city": "Ipota",
        "country": "VU"
      },
      {
        "iata": "UIQ",
        "name": "Quion Hill Airport",
        "city": "Quion Hill",
        "country": "VU"
      },
      {
        "iata": "VLI",
        "name": "Port Vila Bauerfield Airport",
        "city": "Port Vila",
        "country": "VU"
      },
      {
        "iata": "TAH",
        "name": "Tanna Airport",
        "city": "",
        "country": "VU"
      },
      {
        "iata": "TGJ",
        "name": "Tiga Airport",
        "city": "Tiga",
        "country": "NC"
      },
      {
        "iata": "BMY",
        "name": "Ile Art - Waala Airport",
        "city": "Waala",
        "country": "NC"
      },
      {
        "iata": "KNQ",
        "name": "Kone Airport",
        "city": "Kone",
        "country": "NC"
      },
      {
        "iata": "ILP",
        "name": "Ile des Pins Airport",
        "city": "Ile des Pins",
        "country": "NC"
      },
      {
        "iata": "HLU",
        "name": "Nesson Airport",
        "city": "Houailou",
        "country": "NC"
      },
      {
        "iata": "KOC",
        "name": "Koumac Airport",
        "city": "Koumac",
        "country": "NC"
      },
      {
        "iata": "LIF",
        "name": "Lifou Airport",
        "city": "Lifou",
        "country": "NC"
      },
      {
        "iata": "GEA",
        "name": "Noumea Magenta Airport",
        "city": "Noumea",
        "country": "NC"
      },
      {
        "iata": "IOU",
        "name": "Edmond Cane Airport",
        "city": "Ile Ouen",
        "country": "NC"
      },
      {
        "iata": "PUV",
        "name": "Poum Airport",
        "city": "Poum",
        "country": "NC"
      },
      {
        "iata": "PDC",
        "name": "Mueo Airport",
        "city": "Mueo",
        "country": "NC"
      },
      {
        "iata": "MEE",
        "name": "Mare Airport",
        "city": "Mare",
        "country": "NC"
      },
      {
        "iata": "TOU",
        "name": "Touho Airport",
        "city": "Touho",
        "country": "NC"
      },
      {
        "iata": "UVE",
        "name": "Ouvea Airport",
        "city": "Ouvea",
        "country": "NC"
      },
      {
        "iata": "NOU",
        "name": "La Tontouta International Airport",
        "city": "Noumea",
        "country": "NC"
      },
      {
        "iata": "AKL",
        "name": "Auckland International Airport",
        "city": "Auckland",
        "country": "NZ"
      },
      {
        "iata": "TUO",
        "name": "Taupo Airport",
        "city": "Taupo",
        "country": "NZ"
      },
      {
        "iata": "AMZ",
        "name": "Ardmore Airport",
        "city": "Manurewa",
        "country": "NZ"
      },
      {
        "iata": "ASG",
        "name": "Ashburton Aerodrome",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "CHC",
        "name": "Christchurch International Airport",
        "city": "Christchurch",
        "country": "NZ"
      },
      {
        "iata": "CHT",
        "name": "Chatham Islands-Tuuta Airport",
        "city": "Waitangi",
        "country": "NZ"
      },
      {
        "iata": "CMV",
        "name": "Coromandel Aerodrome",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "DGR",
        "name": "Dargaville Aerodrome",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "DUD",
        "name": "Dunedin Airport",
        "city": "Dunedin",
        "country": "NZ"
      },
      {
        "iata": "WHO",
        "name": "Franz Josef Aerodrome",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "GBZ",
        "name": "Great Barrier Aerodrome",
        "city": "Claris",
        "country": "NZ"
      },
      {
        "iata": "GMN",
        "name": "Greymouth Airport",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "GIS",
        "name": "Gisborne Airport",
        "city": "Gisborne",
        "country": "NZ"
      },
      {
        "iata": "GTN",
        "name": "Glentanner Airport",
        "city": "Glentanner Station",
        "country": "NZ"
      },
      {
        "iata": "HKK",
        "name": "Hokitika Airfield",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "HLZ",
        "name": "Hamilton International Airport",
        "city": "Hamilton",
        "country": "NZ"
      },
      {
        "iata": "WIK",
        "name": "Waiheke Reeve Airport",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "KBZ",
        "name": "Kaikoura Airport",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "KKE",
        "name": "Kerikeri Airport",
        "city": "Kerikeri",
        "country": "NZ"
      },
      {
        "iata": "KKO",
        "name": "Kaikohe Airport",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "KAT",
        "name": "Kaitaia Airport",
        "city": "Kaitaia",
        "country": "NZ"
      },
      {
        "iata": "ALR",
        "name": "Alexandra Airport",
        "city": "Alexandra",
        "country": "NZ"
      },
      {
        "iata": "MTA",
        "name": "Matamata Glider Airport",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "MON",
        "name": "Mount Cook Airport",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "MFN",
        "name": "Milford Sound Airport",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "MZP",
        "name": "Motueka Airport",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "TEU",
        "name": "Manapouri Airport",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "MRO",
        "name": "Hood Airport",
        "city": "Masterton",
        "country": "NZ"
      },
      {
        "iata": "NPL",
        "name": "New Plymouth Airport",
        "city": "New Plymouth",
        "country": "NZ"
      },
      {
        "iata": "NPE",
        "name": "Napier Airport",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "NSN",
        "name": "Nelson Airport",
        "city": "Nelson",
        "country": "NZ"
      },
      {
        "iata": "IVC",
        "name": "Invercargill Airport",
        "city": "Invercargill",
        "country": "NZ"
      },
      {
        "iata": "OHA",
        "name": "RNZAF Base Ohakea",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "OAM",
        "name": "Oamaru Airport",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "PMR",
        "name": "Palmerston North Airport",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "PCN",
        "name": "Picton Aerodrome",
        "city": "Picton",
        "country": "NZ"
      },
      {
        "iata": "PPQ",
        "name": "Paraparaumu Airport",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "ZQN",
        "name": "Queenstown International Airport",
        "city": "Queenstown",
        "country": "NZ"
      },
      {
        "iata": "RAG",
        "name": "Raglan Airfield",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "SZS",
        "name": "Ryans Creek Aerodrome",
        "city": "Oban",
        "country": "NZ"
      },
      {
        "iata": "ROT",
        "name": "Rotorua Regional Airport",
        "city": "Rotorua",
        "country": "NZ"
      },
      {
        "iata": "TRG",
        "name": "Tauranga Airport",
        "city": "Tauranga",
        "country": "NZ"
      },
      {
        "iata": "TMZ",
        "name": "Thames Aerodrome",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "KTF",
        "name": "Takaka Airport",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "TKZ",
        "name": "Tokoroa Airfield",
        "city": "Tokoroa",
        "country": "NZ"
      },
      {
        "iata": "THH",
        "name": "Taharoa Aerodrome",
        "city": "Taharoa",
        "country": "NZ"
      },
      {
        "iata": "TIU",
        "name": "Timaru Airport",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "TWZ",
        "name": "Pukaki Airport",
        "city": "Twitzel",
        "country": "NZ"
      },
      {
        "iata": "BHE",
        "name": "Woodbourne Airport",
        "city": "Blenheim",
        "country": "NZ"
      },
      {
        "iata": "WKA",
        "name": "Wanaka Airport",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "WHK",
        "name": "Whakatane Airport",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "WLG",
        "name": "Wellington International Airport",
        "city": "Wellington",
        "country": "NZ"
      },
      {
        "iata": "WIR",
        "name": "Wairoa Airport",
        "city": "Wairoa",
        "country": "NZ"
      },
      {
        "iata": "WRE",
        "name": "Whangarei Airport",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "WSZ",
        "name": "Westport Airport",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "WTZ",
        "name": "Whitianga Airport",
        "city": "",
        "country": "NZ"
      },
      {
        "iata": "WAG",
        "name": "Wanganui Airport",
        "city": "Wanganui",
        "country": "NZ"
      },
      {
        "iata": "BIN",
        "name": "Bamiyan Airport",
        "city": "Bamiyan",
        "country": "AF"
      },
      {
        "iata": "BST",
        "name": "Bost Airport",
        "city": "Bost",
        "country": "AF"
      },
      {
        "iata": "CCN",
        "name": "Chakcharan Airport",
        "city": "Chakcharan",
        "country": "AF"
      },
      {
        "iata": "DAZ",
        "name": "Darwaz Airport",
        "city": "Darwaz",
        "country": "AF"
      },
      {
        "iata": "FAH",
        "name": "Farah Airport",
        "city": "Farah",
        "country": "AF"
      },
      {
        "iata": "FBD",
        "name": "Faizabad Airport",
        "city": "Faizabad",
        "country": "AF"
      },
      {
        "iata": "KWH",
        "name": "Khwahan Airport",
        "city": "Khwahan",
        "country": "AF"
      },
      {
        "iata": "HEA",
        "name": "Herat Airport",
        "city": "",
        "country": "AF"
      },
      {
        "iata": "OAI",
        "name": "Bagram Air Base",
        "city": "Bagram",
        "country": "AF"
      },
      {
        "iata": "JAA",
        "name": "Jalalabad Airport",
        "city": "",
        "country": "AF"
      },
      {
        "iata": "KBL",
        "name": "Kabul International Airport",
        "city": "Kabul",
        "country": "AF"
      },
      {
        "iata": "KDH",
        "name": "Kandahar Airport",
        "city": "",
        "country": "AF"
      },
      {
        "iata": "KHT",
        "name": "Khost Airport",
        "city": "Khost",
        "country": "AF"
      },
      {
        "iata": "MMZ",
        "name": "Maimana Airport",
        "city": "",
        "country": "AF"
      },
      {
        "iata": "MZR",
        "name": "Mazar I Sharif Airport",
        "city": "",
        "country": "AF"
      },
      {
        "iata": "LQN",
        "name": "Qala-I-Naw Airport",
        "city": "Qala-I-Naw",
        "country": "AF"
      },
      {
        "iata": "OAS",
        "name": "Sharana Airstrip",
        "city": "Sharana",
        "country": "AF"
      },
      {
        "iata": "OAH",
        "name": "Shindand Airport",
        "city": "",
        "country": "AF"
      },
      {
        "iata": "SGA",
        "name": "Sheghnan Airport",
        "city": "Sheghnan",
        "country": "AF"
      },
      {
        "iata": "TII",
        "name": "Tarin Kowt Airport",
        "city": "Tarin Kowt",
        "country": "AF"
      },
      {
        "iata": "UND",
        "name": "Konduz Airport",
        "city": "",
        "country": "AF"
      },
      {
        "iata": "OAZ",
        "name": "Camp Bastion Airport",
        "city": "",
        "country": "AF"
      },
      {
        "iata": "ZAJ",
        "name": "Zaranj Airport",
        "city": "Zaranj",
        "country": "AF"
      },
      {
        "iata": "BAH",
        "name": "Bahrain International Airport",
        "city": "Manama",
        "country": "BH"
      },
      {
        "iata": "AHB",
        "name": "Abha Regional Airport",
        "city": "Abha",
        "country": "SA"
      },
      {
        "iata": "HOF",
        "name": "Al Ahsa Airport",
        "city": "",
        "country": "SA"
      },
      {
        "iata": "ULH",
        "name": "Prince Abdul Majeed bin Abdulaziz International Airport",
        "city": "Al-'Ula",
        "country": "SA"
      },
      {
        "iata": "ABT",
        "name": "Al Baha Airport",
        "city": "",
        "country": "SA"
      },
      {
        "iata": "BHH",
        "name": "Bisha Airport",
        "city": "",
        "country": "SA"
      },
      {
        "iata": "DMM",
        "name": "King Fahd International Airport",
        "city": "Ad Dammam",
        "country": "SA"
      },
      {
        "iata": "DHA",
        "name": "King Abdulaziz Air Base",
        "city": "",
        "country": "SA"
      },
      {
        "iata": "DWD",
        "name": "Dawadmi Domestic Airport",
        "city": "Dawadmi",
        "country": "SA"
      },
      {
        "iata": "GIZ",
        "name": "Jizan Regional Airport",
        "city": "Jizan",
        "country": "SA"
      },
      {
        "iata": "ELQ",
        "name": "Gassim Airport",
        "city": "",
        "country": "SA"
      },
      {
        "iata": "URY",
        "name": "Guriat Domestic Airport",
        "city": "",
        "country": "SA"
      },
      {
        "iata": "HAS",
        "name": "Hail Airport",
        "city": "",
        "country": "SA"
      },
      {
        "iata": "QJB",
        "name": "Jubail Airport",
        "city": "Jubail",
        "country": "SA"
      },
      {
        "iata": "JED",
        "name": "King Abdulaziz International Airport",
        "city": "Jeddah",
        "country": "SA"
      },
      {
        "iata": "HBT",
        "name": "King Khaled Military City Airport",
        "city": "King Khaled Military City",
        "country": "SA"
      },
      {
        "iata": "KMX",
        "name": "King Khaled Air Base",
        "city": "",
        "country": "SA"
      },
      {
        "iata": "MED",
        "name": "Prince Mohammad Bin Abdulaziz Airport",
        "city": "Medina",
        "country": "SA"
      },
      {
        "iata": "EAM",
        "name": "Nejran Airport",
        "city": "",
        "country": "SA"
      },
      {
        "iata": "AQI",
        "name": "Hafr Al Batin Airport",
        "city": "Qaisumah",
        "country": "SA"
      },
      {
        "iata": "AKH",
        "name": "Prince Sultan Air Base",
        "city": "",
        "country": "SA"
      },
      {
        "iata": "RAH",
        "name": "Rafha Domestic Airport",
        "city": "Rafha",
        "country": "SA"
      },
      {
        "iata": "RUH",
        "name": "King Khaled International Airport",
        "city": "Riyadh",
        "country": "SA"
      },
      {
        "iata": "RAE",
        "name": "Arar Domestic Airport",
        "city": "Arar",
        "country": "SA"
      },
      {
        "iata": "XXN",
        "name": "Riyadh Air Base",
        "city": "Riyadh",
        "country": "SA"
      },
      {
        "iata": "SHW",
        "name": "Sharurah Airport",
        "city": "",
        "country": "SA"
      },
      {
        "iata": "AJF",
        "name": "Al-Jawf Domestic Airport",
        "city": "Al-Jawf",
        "country": "SA"
      },
      {
        "iata": "SLF",
        "name": "Sulayel Airport",
        "city": "",
        "country": "SA"
      },
      {
        "iata": "TUU",
        "name": "Tabuk Airport",
        "city": "",
        "country": "SA"
      },
      {
        "iata": "TIF",
        "name": "Taif Airport",
        "city": "",
        "country": "SA"
      },
      {
        "iata": "TUI",
        "name": "Turaif Domestic Airport",
        "city": "",
        "country": "SA"
      },
      {
        "iata": "WAE",
        "name": "Wadi Al Dawasir Airport",
        "city": "",
        "country": "SA"
      },
      {
        "iata": "EJH",
        "name": "Al Wajh Domestic Airport",
        "city": "Al Wajh",
        "country": "SA"
      },
      {
        "iata": "YNB",
        "name": "Yenbo Airport",
        "city": "",
        "country": "SA"
      },
      {
        "iata": "ZUL",
        "name": "Zilfi Airport",
        "city": "Zilfi",
        "country": "SA"
      },
      {
        "iata": "ABD",
        "name": "Abadan Airport",
        "city": "Abadan",
        "country": "IR"
      },
      {
        "iata": "DEF",
        "name": "Dezful Airport",
        "city": "",
        "country": "IR"
      },
      {
        "iata": "OMI",
        "name": "Omidiyeh Airport",
        "city": "Omidiyeh",
        "country": "IR"
      },
      {
        "iata": "MRX",
        "name": "Mahshahr Airport",
        "city": "",
        "country": "IR"
      },
      {
        "iata": "AWZ",
        "name": "Ahwaz Airport",
        "city": "Ahwaz",
        "country": "IR"
      },
      {
        "iata": "AEU",
        "name": "Abumusa Island Airport",
        "city": "",
        "country": "IR"
      },
      {
        "iata": "BUZ",
        "name": "Bushehr Airport",
        "city": "Bushehr",
        "country": "IR"
      },
      {
        "iata": "AOY",
        "name": "Asaloyeh Airport",
        "city": "Asaloyeh",
        "country": "IR"
      },
      {
        "iata": "KNR",
        "name": "Jam Airport",
        "city": "Kangan",
        "country": "IR"
      },
      {
        "iata": "KIH",
        "name": "Kish International Airport",
        "city": "Kish Island",
        "country": "IR"
      },
      {
        "iata": "BDH",
        "name": "Bandar Lengeh Airport",
        "city": "Bandar Lengeh",
        "country": "IR"
      },
      {
        "iata": "YEH",
        "name": "Persian Gulf International Airport",
        "city": "Asalouyeh",
        "country": "IR"
      },
      {
        "iata": "KHK",
        "name": "Khark Island Airport",
        "city": "",
        "country": "IR"
      },
      {
        "iata": "SXI",
        "name": "Sirri Island Airport",
        "city": "",
        "country": "IR"
      },
      {
        "iata": "LVP",
        "name": "Lavan Island Airport",
        "city": "",
        "country": "IR"
      },
      {
        "iata": "KSH",
        "name": "Shahid Ashrafi Esfahani Airport",
        "city": "Kermanshah",
        "country": "IR"
      },
      {
        "iata": "IIL",
        "name": "Ilam Airport",
        "city": "Ilam",
        "country": "IR"
      },
      {
        "iata": "KHD",
        "name": "Khoram Abad Airport",
        "city": "",
        "country": "IR"
      },
      {
        "iata": "SDG",
        "name": "Sanandaj Airport",
        "city": "",
        "country": "IR"
      },
      {
        "iata": "IFH",
        "name": "Hesa Airport",
        "city": "Hesa",
        "country": "IR"
      },
      {
        "iata": "IFN",
        "name": "Esfahan Shahid Beheshti International Airport",
        "city": "Isfahan",
        "country": "IR"
      },
      {
        "iata": "CQD",
        "name": "Shahrekord Airport",
        "city": "Shahrekord",
        "country": "IR"
      },
      {
        "iata": "RAS",
        "name": "Sardar-e-Jangal Airport",
        "city": "Rasht",
        "country": "IR"
      },
      {
        "iata": "HDM",
        "name": "Hamadan Airport",
        "city": "Hamadan",
        "country": "IR"
      },
      {
        "iata": "AJK",
        "name": "Arak Airport",
        "city": "Araak",
        "country": "IR"
      },
      {
        "iata": "IKA",
        "name": "Imam Khomeini International Airport",
        "city": "Tehran",
        "country": "IR"
      },
      {
        "iata": "THR",
        "name": "Mehrabad International Airport",
        "city": "Tehran",
        "country": "IR"
      },
      {
        "iata": "BND",
        "name": "Bandar Abbas International Airport",
        "city": "Bandar Abbas",
        "country": "IR"
      },
      {
        "iata": "KER",
        "name": "Kerman Airport",
        "city": "Kerman",
        "country": "IR"
      },
      {
        "iata": "BXR",
        "name": "Bam Airport",
        "city": "",
        "country": "IR"
      },
      {
        "iata": "HDR",
        "name": "Havadarya Airport",
        "city": "Havadarya",
        "country": "IR"
      },
      {
        "iata": "RJN",
        "name": "Rafsanjan Airport",
        "city": "",
        "country": "IR"
      },
      {
        "iata": "SYJ",
        "name": "Sirjan Airport",
        "city": "",
        "country": "IR"
      },
      {
        "iata": "XBJ",
        "name": "Birjand Airport",
        "city": "Birjand",
        "country": "IR"
      },
      {
        "iata": "CKT",
        "name": "Sarakhs Airport",
        "city": "Sarakhs",
        "country": "IR"
      },
      {
        "iata": "RUD",
        "name": "Shahroud Airport",
        "city": "",
        "country": "IR"
      },
      {
        "iata": "MHD",
        "name": "Mashhad International Airport",
        "city": "Mashhad",
        "country": "IR"
      },
      {
        "iata": "BJB",
        "name": "Bojnord Airport",
        "city": "Bojnord",
        "country": "IR"
      },
      {
        "iata": "AFZ",
        "name": "Sabzevar National Airport",
        "city": "Sabzevar",
        "country": "IR"
      },
      {
        "iata": "TCX",
        "name": "Tabas Airport",
        "city": "Tabas",
        "country": "IR"
      },
      {
        "iata": "BBL",
        "name": "Babolsar Airport",
        "city": "Babolsar",
        "country": "IR"
      },
      {
        "iata": "GBT",
        "name": "Gorgan Airport",
        "city": "Gorgan",
        "country": "IR"
      },
      {
        "iata": "BSM",
        "name": "Bishe Kola Air Base",
        "city": "Amol",
        "country": "IR"
      },
      {
        "iata": "NSH",
        "name": "Noshahr Airport",
        "city": "",
        "country": "IR"
      },
      {
        "iata": "RZR",
        "name": "Ramsar Airport",
        "city": "",
        "country": "IR"
      },
      {
        "iata": "SRY",
        "name": "Dasht-e Naz Airport",
        "city": "Sari",
        "country": "IR"
      },
      {
        "iata": "FAZ",
        "name": "Fasa Airport",
        "city": "Fasa",
        "country": "IR"
      },
      {
        "iata": "LRR",
        "name": "Lar Airport",
        "city": "Lar",
        "country": "IR"
      },
      {
        "iata": "SYZ",
        "name": "Shiraz Shahid Dastghaib International Airport",
        "city": "Shiraz",
        "country": "IR"
      },
      {
        "iata": "KHY",
        "name": "Khoy Airport",
        "city": "Khoy",
        "country": "IR"
      },
      {
        "iata": "ADU",
        "name": "Ardabil Airport",
        "city": "Ardabil",
        "country": "IR"
      },
      {
        "iata": "ACP",
        "name": "Sahand Airport",
        "city": "Maragheh",
        "country": "IR"
      },
      {
        "iata": "PFQ",
        "name": "Parsabade Moghan Airport",
        "city": "Parsabad",
        "country": "IR"
      },
      {
        "iata": "OMH",
        "name": "Urmia Airport",
        "city": "Urmia",
        "country": "IR"
      },
      {
        "iata": "TBZ",
        "name": "Tabriz International Airport",
        "city": "Tabriz",
        "country": "IR"
      },
      {
        "iata": "AZD",
        "name": "Shahid Sadooghi Airport",
        "city": "Yazd",
        "country": "IR"
      },
      {
        "iata": "ACZ",
        "name": "Zabol Airport",
        "city": "",
        "country": "IR"
      },
      {
        "iata": "ZBR",
        "name": "Konarak Airport",
        "city": "Chabahar",
        "country": "IR"
      },
      {
        "iata": "ZAH",
        "name": "Zahedan International Airport",
        "city": "Zahedan",
        "country": "IR"
      },
      {
        "iata": "AMM",
        "name": "Queen Alia International Airport",
        "city": "Amman",
        "country": "JO"
      },
      {
        "iata": "ADJ",
        "name": "Amman-Marka International Airport",
        "city": "Amman",
        "country": "JO"
      },
      {
        "iata": "AQJ",
        "name": "Aqaba King Hussein International Airport",
        "city": "Aqaba",
        "country": "JO"
      },
      {
        "iata": "OMF",
        "name": "King Hussein Air College",
        "city": "Mafraq",
        "country": "JO"
      },
      {
        "iata": "DWN",
        "name": "Downtown Airpark",
        "city": "Oklahoma City",
        "country": "US"
      },
      {
        "iata": "KWI",
        "name": "Kuwait International Airport",
        "city": "Kuwait City",
        "country": "KW"
      },
      {
        "iata": "BEY",
        "name": "Beirut Rafic Hariri International Airport",
        "city": "Beirut",
        "country": "LB"
      },
      {
        "iata": "KYE",
        "name": "Rene Mouawad Air Base",
        "city": "Tripoli",
        "country": "LB"
      },
      {
        "iata": "AUH",
        "name": "Abu Dhabi International Airport",
        "city": "Abu Dhabi",
        "country": "AE"
      },
      {
        "iata": "AZI",
        "name": "Al Bateen Executive Airport",
        "city": "",
        "country": "AE"
      },
      {
        "iata": "AAN",
        "name": "Al Ain International Airport",
        "city": "Al Ain",
        "country": "AE"
      },
      {
        "iata": "DHF",
        "name": "Al Dhafra Air Base",
        "city": "",
        "country": "AE"
      },
      {
        "iata": "DXB",
        "name": "Dubai International Airport",
        "city": "Dubai",
        "country": "AE"
      },
      {
        "iata": "NHD",
        "name": "Al Minhad Air Base",
        "city": "Dubai",
        "country": "AE"
      },
      {
        "iata": "DWC",
        "name": "Al Maktoum International Airport",
        "city": "Jebel Ali",
        "country": "AE"
      },
      {
        "iata": "FJR",
        "name": "Fujairah International Airport",
        "city": "",
        "country": "AE"
      },
      {
        "iata": "RKT",
        "name": "Ras Al Khaimah International Airport",
        "city": "Ras Al Khaimah",
        "country": "AE"
      },
      {
        "iata": "SHJ",
        "name": "Sharjah International Airport",
        "city": "Sharjah",
        "country": "AE"
      },
      {
        "iata": "RMB",
        "name": "Buraimi Airport",
        "city": "Buraimi",
        "country": "OM"
      },
      {
        "iata": "DQM",
        "name": "Duqm International Airport",
        "city": "Duqm",
        "country": "OM"
      },
      {
        "iata": "FAU",
        "name": "Fahud Airport",
        "city": "Fahud",
        "country": "OM"
      },
      {
        "iata": "RNM",
        "name": "Qarn Alam Airport",
        "city": "Ghaba",
        "country": "OM"
      },
      {
        "iata": "KHS",
        "name": "Khasab Air Base",
        "city": "Khasab",
        "country": "OM"
      },
      {
        "iata": "LKW",
        "name": "Lekhwair Airport",
        "city": "",
        "country": "OM"
      },
      {
        "iata": "MSH",
        "name": "Masirah Air Base",
        "city": "Masirah",
        "country": "OM"
      },
      {
        "iata": "MCT",
        "name": "Muscat International Airport",
        "city": "Muscat",
        "country": "OM"
      },
      {
        "iata": "OMM",
        "name": "Marmul Airport",
        "city": "Marmul",
        "country": "OM"
      },
      {
        "iata": "SLL",
        "name": "Salalah Airport",
        "city": "Salalah",
        "country": "OM"
      },
      {
        "iata": "OHS",
        "name": "Sohar Airport",
        "city": "Sohar",
        "country": "OM"
      },
      {
        "iata": "SUH",
        "name": "Sur Airport",
        "city": "Sur",
        "country": "OM"
      },
      {
        "iata": "TTH",
        "name": "Thumrait Air Base",
        "city": "Thumrait",
        "country": "OM"
      },
      {
        "iata": "AAW",
        "name": "Abbottabad Airport",
        "city": "Abbottabad",
        "country": "PK"
      },
      {
        "iata": "BHW",
        "name": "Bhagatanwala Airport",
        "city": "Bhagatanwala",
        "country": "PK"
      },
      {
        "iata": "BNP",
        "name": "Bannu Airport",
        "city": "Bannu",
        "country": "PK"
      },
      {
        "iata": "WGB",
        "name": "Bahawalnagar Airport",
        "city": "Bahawalnagar",
        "country": "PK"
      },
      {
        "iata": "BHV",
        "name": "Bahawalpur Airport",
        "city": "Bahawalpur",
        "country": "PK"
      },
      {
        "iata": "CJL",
        "name": "Chitral Airport",
        "city": "Chitral",
        "country": "PK"
      },
      {
        "iata": "CHB",
        "name": "Chilas Airport",
        "city": "Chilas",
        "country": "PK"
      },
      {
        "iata": "DBA",
        "name": "Dalbandin Airport",
        "city": "Dalbandin",
        "country": "PK"
      },
      {
        "iata": "DDU",
        "name": "Dadu Airport",
        "city": "Dadu",
        "country": "PK"
      },
      {
        "iata": "DEA",
        "name": "Dera Ghazi Khan Airport",
        "city": "Dera Ghazi Khan",
        "country": "PK"
      },
      {
        "iata": "DSK",
        "name": "Dera Ismael Khan Airport",
        "city": "Dera Ismael Khan",
        "country": "PK"
      },
      {
        "iata": "LYP",
        "name": "Faisalabad International Airport",
        "city": "Faisalabad",
        "country": "PK"
      },
      {
        "iata": "GWD",
        "name": "Gwadar International Airport",
        "city": "Gwadar",
        "country": "PK"
      },
      {
        "iata": "GIL",
        "name": "Gilgit Airport",
        "city": "Gilgit",
        "country": "PK"
      },
      {
        "iata": "ISB",
        "name": "Islamabad International Airport",
        "city": "Islamabad",
        "country": "PK"
      },
      {
        "iata": "JAG",
        "name": "Shahbaz Air Base",
        "city": "Jacobabad",
        "country": "PK"
      },
      {
        "iata": "JIW",
        "name": "Jiwani Airport",
        "city": "Jiwani",
        "country": "PK"
      },
      {
        "iata": "KHI",
        "name": "Jinnah International Airport",
        "city": "Karachi",
        "country": "PK"
      },
      {
        "iata": "HDD",
        "name": "Hyderabad Airport",
        "city": "Hyderabad",
        "country": "PK"
      },
      {
        "iata": "KDD",
        "name": "Khuzdar Airport",
        "city": "Khuzdar",
        "country": "PK"
      },
      {
        "iata": "KBH",
        "name": "Kalat Airport",
        "city": "Kalat",
        "country": "PK"
      },
      {
        "iata": "OHT",
        "name": "Kohat Airport",
        "city": "Kohat",
        "country": "PK"
      },
      {
        "iata": "LHE",
        "name": "Alama Iqbal International Airport",
        "city": "Lahore",
        "country": "PK"
      },
      {
        "iata": "LRG",
        "name": "Loralai Airport",
        "city": "Loralai",
        "country": "PK"
      },
      {
        "iata": "XJM",
        "name": "Mangla Airport",
        "city": "Mangla",
        "country": "PK"
      },
      {
        "iata": "MFG",
        "name": "Muzaffarabad Airport",
        "city": "Muzaffarabad",
        "country": "PK"
      },
      {
        "iata": "MWD",
        "name": "Mianwali Air Base",
        "city": "Mianwali",
        "country": "PK"
      },
      {
        "iata": "MJD",
        "name": "Moenjodaro Airport",
        "city": "Moenjodaro",
        "country": "PK"
      },
      {
        "iata": "MPD",
        "name": "Sindhri Tharparkar Airport",
        "city": "Sindhri",
        "country": "PK"
      },
      {
        "iata": "MUX",
        "name": "Multan International Airport",
        "city": "Multan",
        "country": "PK"
      },
      {
        "iata": "WNS",
        "name": "Nawabshah Airport",
        "city": "Nawabash",
        "country": "PK"
      },
      {
        "iata": "NHS",
        "name": "Nushki Airport",
        "city": "Nushki",
        "country": "PK"
      },
      {
        "iata": "ORW",
        "name": "Ormara Airport",
        "city": "Ormara Raik",
        "country": "PK"
      },
      {
        "iata": "PAJ",
        "name": "Parachinar Airport",
        "city": "Parachinar",
        "country": "PK"
      },
      {
        "iata": "PJG",
        "name": "Panjgur Airport",
        "city": "Panjgur",
        "country": "PK"
      },
      {
        "iata": "PSI",
        "name": "Pasni Airport",
        "city": "Pasni",
        "country": "PK"
      },
      {
        "iata": "PEW",
        "name": "Peshawar International Airport",
        "city": "Peshawar",
        "country": "PK"
      },
      {
        "iata": "UET",
        "name": "Quetta International Airport",
        "city": "Quetta",
        "country": "PK"
      },
      {
        "iata": "RYK",
        "name": "Shaikh Zaid Airport",
        "city": "Rahim Yar Khan",
        "country": "PK"
      },
      {
        "iata": "RAZ",
        "name": "Rawalakot Airport",
        "city": "Rawalakot",
        "country": "PK"
      },
      {
        "iata": "SBQ",
        "name": "Sibi Airport",
        "city": "Sibi",
        "country": "PK"
      },
      {
        "iata": "KDU",
        "name": "Skardu Airport",
        "city": "Skardu",
        "country": "PK"
      },
      {
        "iata": "SKZ",
        "name": "Sukkur Airport",
        "city": "Mirpur Khas",
        "country": "PK"
      },
      {
        "iata": "SYW",
        "name": "Sehwan Sharif Airport",
        "city": "Sehwan Sharif",
        "country": "PK"
      },
      {
        "iata": "SGI",
        "name": "Mushaf Air Base",
        "city": "Sargodha",
        "country": "PK"
      },
      {
        "iata": "SDT",
        "name": "Saidu Sharif Airport",
        "city": "Saidu Sharif",
        "country": "PK"
      },
      {
        "iata": "SKT",
        "name": "Sialkot Airport",
        "city": "Sialkot",
        "country": "PK"
      },
      {
        "iata": "SUL",
        "name": "Sui Airport",
        "city": "Sui",
        "country": "PK"
      },
      {
        "iata": "SWN",
        "name": "Sahiwal Airport",
        "city": "Sahiwal",
        "country": "PK"
      },
      {
        "iata": "TLB",
        "name": "Tarbela Dam Airport",
        "city": "Tarbela",
        "country": "PK"
      },
      {
        "iata": "BDN",
        "name": "Talhar Airport",
        "city": "Badin",
        "country": "PK"
      },
      {
        "iata": "TFT",
        "name": "Taftan Airport",
        "city": "Taftan",
        "country": "PK"
      },
      {
        "iata": "TUK",
        "name": "Turbat International Airport",
        "city": "Turbat",
        "country": "PK"
      },
      {
        "iata": "WAF",
        "name": "Wana Airport",
        "city": "Waana",
        "country": "PK"
      },
      {
        "iata": "PZH",
        "name": "Zhob Airport",
        "city": "Fort Sandeman",
        "country": "PK"
      },
      {
        "iata": "IQA",
        "name": "Al Asad Air Base",
        "city": "Hit",
        "country": "IQ"
      },
      {
        "iata": "BMN",
        "name": "Bamarni Airport",
        "city": "Bamarni",
        "country": "IQ"
      },
      {
        "iata": "BGW",
        "name": "Baghdad International Airport",
        "city": "Baghdad",
        "country": "IQ"
      },
      {
        "iata": "OSB",
        "name": "Mosul International Airport",
        "city": "Mosul",
        "country": "IQ"
      },
      {
        "iata": "EBL",
        "name": "Erbil International Airport",
        "city": "Arbil",
        "country": "IQ"
      },
      {
        "iata": "KIK",
        "name": "Kirkuk Air Base",
        "city": "Kirkuk",
        "country": "IQ"
      },
      {
        "iata": "BSR",
        "name": "Basrah International Airport",
        "city": "Basrah",
        "country": "IQ"
      },
      {
        "iata": "NJF",
        "name": "Al Najaf International Airport",
        "city": "Najaf",
        "country": "IQ"
      },
      {
        "iata": "RQW",
        "name": "Qayyarah West Airport",
        "city": "Qayyarah",
        "country": "IQ"
      },
      {
        "iata": "ISU",
        "name": "Sulaymaniyah International Airport",
        "city": "Sulaymaniyah",
        "country": "IQ"
      },
      {
        "iata": "ALP",
        "name": "Aleppo International Airport",
        "city": "Aleppo",
        "country": "SY"
      },
      {
        "iata": "DAM",
        "name": "Damascus International Airport",
        "city": "Damascus",
        "country": "SY"
      },
      {
        "iata": "DEZ",
        "name": "Deir ez-Zor Airport",
        "city": "Deir ez-Zor",
        "country": "SY"
      },
      {
        "iata": "KAC",
        "name": "Kamishly Airport",
        "city": "Kamishly",
        "country": "SY"
      },
      {
        "iata": "LTK",
        "name": "Bassel Al-Assad International Airport",
        "city": "Latakia",
        "country": "SY"
      },
      {
        "iata": "PMS",
        "name": "Palmyra Airport",
        "city": "",
        "country": "SY"
      },
      {
        "iata": "DIA",
        "name": "Doha International Airport",
        "city": "Doha",
        "country": "QA"
      },
      {
        "iata": "IUD",
        "name": "Al Udeid Air Base",
        "city": "Ar Rayyan",
        "country": "QA"
      },
      {
        "iata": "DOH",
        "name": "Hamad International Airport",
        "city": "Doha",
        "country": "QA"
      },
      {
        "iata": "ADE",
        "name": "Aden International Airport",
        "city": "Aden",
        "country": "YE"
      },
      {
        "iata": "AXK",
        "name": "Ataq Airport",
        "city": "",
        "country": "YE"
      },
      {
        "iata": "BHN",
        "name": "Beihan Airport",
        "city": "",
        "country": "YE"
      },
      {
        "iata": "AAY",
        "name": "Al Ghaidah International Airport",
        "city": "",
        "country": "YE"
      },
      {
        "iata": "HOD",
        "name": "Hodeidah International Airport",
        "city": "Hodeida",
        "country": "YE"
      },
      {
        "iata": "MYN",
        "name": "Mareb Airport",
        "city": "Mareb",
        "country": "YE"
      },
      {
        "iata": "IHN",
        "name": "Qishn Airport",
        "city": "Qishn",
        "country": "YE"
      },
      {
        "iata": "RIY",
        "name": "Mukalla International Airport",
        "city": "Riyan",
        "country": "YE"
      },
      {
        "iata": "SYE",
        "name": "Sadah Airport",
        "city": "Sadah",
        "country": "YE"
      },
      {
        "iata": "SAH",
        "name": "Sana'a International Airport",
        "city": "Sana'a",
        "country": "YE"
      },
      {
        "iata": "SCT",
        "name": "Socotra International Airport",
        "city": "Socotra Islands",
        "country": "YE"
      },
      {
        "iata": "GXF",
        "name": "Sayun International Airport",
        "city": "Sayun",
        "country": "YE"
      },
      {
        "iata": "TAI",
        "name": "Ta'izz International Airport",
        "city": "Ta'izz",
        "country": "YE"
      },
      {
        "iata": "AKB",
        "name": "Atka Airport",
        "city": "Atka",
        "country": "US"
      },
      {
        "iata": "PML",
        "name": "Port Moller Airport",
        "city": "Cold Bay",
        "country": "US"
      },
      {
        "iata": "PAQ",
        "name": "Palmer Municipal Airport",
        "city": "Palmer",
        "country": "US"
      },
      {
        "iata": "BTI",
        "name": "Barter Island LRRS Airport",
        "city": "Barter Island Lrrs",
        "country": "US"
      },
      {
        "iata": "BET",
        "name": "Bethel Airport",
        "city": "Bethel",
        "country": "US"
      },
      {
        "iata": "BVU",
        "name": "Beluga Airport",
        "city": "Beluga",
        "country": "US"
      },
      {
        "iata": "BIG",
        "name": "Allen Army Airfield",
        "city": "Delta Junction Ft Greely",
        "country": "US"
      },
      {
        "iata": "BKC",
        "name": "Buckland Airport",
        "city": "Buckland",
        "country": "US"
      },
      {
        "iata": "BMX",
        "name": "Big Mountain Airport",
        "city": "Big Mountain",
        "country": "US"
      },
      {
        "iata": "BRW",
        "name": "Wiley Post Will Rogers Memorial Airport",
        "city": "Barrow",
        "country": "US"
      },
      {
        "iata": "BTT",
        "name": "Bettles Airport",
        "city": "Bettles",
        "country": "US"
      },
      {
        "iata": "CDB",
        "name": "Cold Bay Airport",
        "city": "Cold Bay",
        "country": "US"
      },
      {
        "iata": "CEM",
        "name": "Central Airport",
        "city": "Central",
        "country": "US"
      },
      {
        "iata": "CHU",
        "name": "Chuathbaluk Airport",
        "city": "Chuathbaluk",
        "country": "US"
      },
      {
        "iata": "CIK",
        "name": "Chalkyitsik Airport",
        "city": "Chalkyitsik",
        "country": "US"
      },
      {
        "iata": "SCM",
        "name": "Scammon Bay Airport",
        "city": "Scammon Bay",
        "country": "US"
      },
      {
        "iata": "IRC",
        "name": "Circle City /New/ Airport",
        "city": "Circle",
        "country": "US"
      },
      {
        "iata": "CDV",
        "name": "Merle K (Mudhole) Smith Airport",
        "city": "Cordova",
        "country": "US"
      },
      {
        "iata": "CZF",
        "name": "Cape Romanzof LRRS Airport",
        "city": "Cape Romanzof",
        "country": "US"
      },
      {
        "iata": "DRG",
        "name": "Deering Airport",
        "city": "Deering",
        "country": "US"
      },
      {
        "iata": "RDB",
        "name": "Red Dog Airport",
        "city": "Red Dog",
        "country": "US"
      },
      {
        "iata": "ADK",
        "name": "Adak Airport",
        "city": "Adak Island",
        "country": "US"
      },
      {
        "iata": "DLG",
        "name": "Dillingham Airport",
        "city": "Dillingham",
        "country": "US"
      },
      {
        "iata": "ADQ",
        "name": "Kodiak Airport",
        "city": "Kodiak",
        "country": "US"
      },
      {
        "iata": "DUT",
        "name": "Unalaska Airport",
        "city": "Unalaska",
        "country": "US"
      },
      {
        "iata": "EDF",
        "name": "Elmendorf Air Force Base",
        "city": "Anchorage",
        "country": "US"
      },
      {
        "iata": "EEK",
        "name": "Eek Airport",
        "city": "Eek",
        "country": "US"
      },
      {
        "iata": "EHM",
        "name": "Cape Newenham LRRS Airport",
        "city": "Cape Newenham",
        "country": "US"
      },
      {
        "iata": "EIL",
        "name": "Eielson Air Force Base",
        "city": "Fairbanks",
        "country": "US"
      },
      {
        "iata": "EMK",
        "name": "Emmonak Airport",
        "city": "Emmonak",
        "country": "US"
      },
      {
        "iata": "ENA",
        "name": "Kenai Municipal Airport",
        "city": "Kenai",
        "country": "US"
      },
      {
        "iata": "FAI",
        "name": "Fairbanks International Airport",
        "city": "Fairbanks",
        "country": "US"
      },
      {
        "iata": "FBK",
        "name": "Ladd AAF Airfield",
        "city": "Fairbanks/Ft Wainwright",
        "country": "US"
      },
      {
        "iata": "AFE",
        "name": "Kake Airport",
        "city": "Kake",
        "country": "US"
      },
      {
        "iata": "ABL",
        "name": "Ambler Airport",
        "city": "Ambler",
        "country": "US"
      },
      {
        "iata": "FMC",
        "name": "Five Mile Airport",
        "city": "Five Mile",
        "country": "US"
      },
      {
        "iata": "GAL",
        "name": "Edward G. Pitka Sr Airport",
        "city": "Galena",
        "country": "US"
      },
      {
        "iata": "GKN",
        "name": "Gulkana Airport",
        "city": "Gulkana",
        "country": "US"
      },
      {
        "iata": "GLV",
        "name": "Golovin Airport",
        "city": "Golovin",
        "country": "US"
      },
      {
        "iata": "GAM",
        "name": "Gambell Airport",
        "city": "Gambell",
        "country": "US"
      },
      {
        "iata": "GST",
        "name": "Gustavus Airport",
        "city": "Gustavus",
        "country": "US"
      },
      {
        "iata": "SGY",
        "name": "Skagway Airport",
        "city": "Skagway",
        "country": "US"
      },
      {
        "iata": "GMT",
        "name": "Granite Mountain Air Station",
        "city": "Granite Mountain",
        "country": "US"
      },
      {
        "iata": "HCR",
        "name": "Holy Cross Airport",
        "city": "Holy Cross",
        "country": "US"
      },
      {
        "iata": "HNE",
        "name": "Tahneta Pass Airport",
        "city": "Tahneta Pass Lodge",
        "country": "US"
      },
      {
        "iata": "HNS",
        "name": "Haines Airport",
        "city": "Haines",
        "country": "US"
      },
      {
        "iata": "HOM",
        "name": "Homer Airport",
        "city": "Homer",
        "country": "US"
      },
      {
        "iata": "HPB",
        "name": "Hooper Bay Airport",
        "city": "Hooper Bay",
        "country": "US"
      },
      {
        "iata": "SHX",
        "name": "Shageluk Airport",
        "city": "Shageluk",
        "country": "US"
      },
      {
        "iata": "IGG",
        "name": "Igiugig Airport",
        "city": "Igiugig",
        "country": "US"
      },
      {
        "iata": "EGX",
        "name": "Egegik Airport",
        "city": "Egegik",
        "country": "US"
      },
      {
        "iata": "IAN",
        "name": "Bob Baker Memorial Airport",
        "city": "Kiana",
        "country": "US"
      },
      {
        "iata": "ILI",
        "name": "Iliamna Airport",
        "city": "Iliamna",
        "country": "US"
      },
      {
        "iata": "UTO",
        "name": "Indian Mountain LRRS Airport",
        "city": "Utopia Creek",
        "country": "US"
      },
      {
        "iata": "WAA",
        "name": "Wales Airport",
        "city": "Wales",
        "country": "US"
      },
      {
        "iata": "JNU",
        "name": "Juneau International Airport",
        "city": "Juneau",
        "country": "US"
      },
      {
        "iata": "KFP",
        "name": "False Pass Airport",
        "city": "False Pass",
        "country": "US"
      },
      {
        "iata": "AKK",
        "name": "Akhiok Airport",
        "city": "Akhiok",
        "country": "US"
      },
      {
        "iata": "KKA",
        "name": "Koyuk Alfred Adams Airport",
        "city": "Koyuk",
        "country": "US"
      },
      {
        "iata": "AKN",
        "name": "King Salmon Airport",
        "city": "King Salmon",
        "country": "US"
      },
      {
        "iata": "IKO",
        "name": "Nikolski Air Station",
        "city": "Nikolski",
        "country": "US"
      },
      {
        "iata": "AKP",
        "name": "Anaktuvuk Pass Airport",
        "city": "Anaktuvuk Pass",
        "country": "US"
      },
      {
        "iata": "KTN",
        "name": "Ketchikan International Airport",
        "city": "Ketchikan",
        "country": "US"
      },
      {
        "iata": "UUK",
        "name": "Ugnu-Kuparuk Airport",
        "city": "Kuparuk",
        "country": "US"
      },
      {
        "iata": "KAL",
        "name": "Kaltag Airport",
        "city": "Kaltag",
        "country": "US"
      },
      {
        "iata": "AKW",
        "name": "Klawock Airport",
        "city": "Klawock",
        "country": "US"
      },
      {
        "iata": "KYK",
        "name": "Karluk Airport",
        "city": "Karluk",
        "country": "US"
      },
      {
        "iata": "KLG",
        "name": "Kalskag Airport",
        "city": "Kalskag",
        "country": "US"
      },
      {
        "iata": "PTA",
        "name": "Port Alsworth Airport",
        "city": "Port Alsworth",
        "country": "US"
      },
      {
        "iata": "LNI",
        "name": "Lonely Air Station",
        "city": "Lonely",
        "country": "US"
      },
      {
        "iata": "DQH",
        "name": "Alpine Airstrip",
        "city": "Deadhorse",
        "country": "US"
      },
      {
        "iata": "LUR",
        "name": "Cape Lisburne LRRS Airport",
        "city": "Cape Lisburne",
        "country": "US"
      },
      {
        "iata": "KMO",
        "name": "Manokotak Airport",
        "city": "Manokotak",
        "country": "US"
      },
      {
        "iata": "MCG",
        "name": "McGrath Airport",
        "city": "McGrath",
        "country": "US"
      },
      {
        "iata": "MLY",
        "name": "Manley Hot Springs Airport",
        "city": "Manley Hot Springs",
        "country": "US"
      },
      {
        "iata": "MOU",
        "name": "Mountain Village Airport",
        "city": "Mountain Village",
        "country": "US"
      },
      {
        "iata": "MRI",
        "name": "Merrill Field",
        "city": "Anchorage",
        "country": "US"
      },
      {
        "iata": "MYU",
        "name": "Mekoryuk Airport",
        "city": "Mekoryuk",
        "country": "US"
      },
      {
        "iata": "WNA",
        "name": "Napakiak Airport",
        "city": "Napakiak",
        "country": "US"
      },
      {
        "iata": "ANC",
        "name": "Ted Stevens Anchorage International Airport",
        "city": "Anchorage",
        "country": "US"
      },
      {
        "iata": "ANI",
        "name": "Aniak Airport",
        "city": "Aniak",
        "country": "US"
      },
      {
        "iata": "ENN",
        "name": "Nenana Municipal Airport",
        "city": "Nenana",
        "country": "US"
      },
      {
        "iata": "ANN",
        "name": "Annette Island Airport",
        "city": "Annette",
        "country": "US"
      },
      {
        "iata": "ANV",
        "name": "Anvik Airport",
        "city": "Anvik",
        "country": "US"
      },
      {
        "iata": "KNW",
        "name": "New Stuyahok Airport",
        "city": "New Stuyahok",
        "country": "US"
      },
      {
        "iata": "OBU",
        "name": "Kobuk Airport",
        "city": "Kobuk",
        "country": "US"
      },
      {
        "iata": "PCA",
        "name": "Portage Creek Airport",
        "city": "Portage Creek",
        "country": "US"
      },
      {
        "iata": "HNH",
        "name": "Hoonah Airport",
        "city": "Hoonah",
        "country": "US"
      },
      {
        "iata": "OME",
        "name": "Nome Airport",
        "city": "Nome",
        "country": "US"
      },
      {
        "iata": "OOK",
        "name": "Toksook Bay Airport",
        "city": "Toksook Bay",
        "country": "US"
      },
      {
        "iata": "ORT",
        "name": "Northway Airport",
        "city": "Northway",
        "country": "US"
      },
      {
        "iata": "OTZ",
        "name": "Ralph Wien Memorial Airport",
        "city": "Kotzebue",
        "country": "US"
      },
      {
        "iata": "PBV",
        "name": "St George Airport",
        "city": "St George",
        "country": "US"
      },
      {
        "iata": "KPC",
        "name": "Port Clarence Coast Guard Station",
        "city": "Port Clarence",
        "country": "US"
      },
      {
        "iata": "PSG",
        "name": "Petersburg James A Johnson Airport",
        "city": "Petersburg",
        "country": "US"
      },
      {
        "iata": "PTH",
        "name": "Port Heiden Airport",
        "city": "Port Heiden",
        "country": "US"
      },
      {
        "iata": "PKA",
        "name": "Napaskiak Airport",
        "city": "Napaskiak",
        "country": "US"
      },
      {
        "iata": "PTU",
        "name": "Platinum Airport",
        "city": "Platinum",
        "country": "US"
      },
      {
        "iata": "PIP",
        "name": "Pilot Point Airport",
        "city": "Pilot Point",
        "country": "US"
      },
      {
        "iata": "PHO",
        "name": "Point Hope Airport",
        "city": "Point Hope",
        "country": "US"
      },
      {
        "iata": "NUI",
        "name": "Nuiqsut Airport",
        "city": "Nuiqsut",
        "country": "US"
      },
      {
        "iata": "ARC",
        "name": "Arctic Village Airport",
        "city": "Arctic Village",
        "country": "US"
      },
      {
        "iata": "RBY",
        "name": "Ruby Airport",
        "city": "Ruby",
        "country": "US"
      },
      {
        "iata": "SVA",
        "name": "Savoonga Airport",
        "city": "Savoonga",
        "country": "US"
      },
      {
        "iata": "SCC",
        "name": "Deadhorse Airport",
        "city": "Deadhorse",
        "country": "US"
      },
      {
        "iata": "SDP",
        "name": "Sand Point Airport",
        "city": "Sand Point",
        "country": "US"
      },
      {
        "iata": "SHH",
        "name": "Shishmaref Airport",
        "city": "Shishmaref",
        "country": "US"
      },
      {
        "iata": "SIT",
        "name": "Sitka Rocky Gutierrez Airport",
        "city": "Sitka",
        "country": "US"
      },
      {
        "iata": "SQL",
        "name": "Sleetmute Airport",
        "city": "Sleetmute",
        "country": "US"
      },
      {
        "iata": "KSM",
        "name": "St Mary's Airport",
        "city": "St Mary's",
        "country": "US"
      },
      {
        "iata": "SNP",
        "name": "St Paul Island Airport",
        "city": "St Paul Island",
        "country": "US"
      },
      {
        "iata": "SMU",
        "name": "Sheep Mountain Airport",
        "city": "Sheep Mountain",
        "country": "US"
      },
      {
        "iata": "UMM",
        "name": "Summit Airport",
        "city": "Summit",
        "country": "US"
      },
      {
        "iata": "SVW",
        "name": "Sparrevohn LRRS Airport",
        "city": "Sparrevohn",
        "country": "US"
      },
      {
        "iata": "SXQ",
        "name": "Soldotna Airport",
        "city": "Soldotna",
        "country": "US"
      },
      {
        "iata": "SYA",
        "name": "Eareckson Air Station",
        "city": "Shemya",
        "country": "US"
      },
      {
        "iata": "TAL",
        "name": "Ralph M Calhoun Memorial Airport",
        "city": "Tanana",
        "country": "US"
      },
      {
        "iata": "TNC",
        "name": "Tin City Long Range Radar Station Airport",
        "city": "Tin City",
        "country": "US"
      },
      {
        "iata": "TOG",
        "name": "Togiak Airport",
        "city": "Togiak Village",
        "country": "US"
      },
      {
        "iata": "TKJ",
        "name": "Tok Airport",
        "city": "Tok",
        "country": "US"
      },
      {
        "iata": "TLJ",
        "name": "Tatalina LRRS Airport",
        "city": "Takotna",
        "country": "US"
      },
      {
        "iata": "ATK",
        "name": "Atqasuk Edward Burnell Sr Memorial Airport",
        "city": "Atqasuk",
        "country": "US"
      },
      {
        "iata": "AUK",
        "name": "Alakanuk Airport",
        "city": "Alakanuk",
        "country": "US"
      },
      {
        "iata": "UMT",
        "name": "Umiat Airport",
        "city": "Umiat",
        "country": "US"
      },
      {
        "iata": "UNK",
        "name": "Unalakleet Airport",
        "city": "Unalakleet",
        "country": "US"
      },
      {
        "iata": "VAK",
        "name": "Chevak Airport",
        "city": "Chevak",
        "country": "US"
      },
      {
        "iata": "KVC",
        "name": "King Cove Airport",
        "city": "King Cove",
        "country": "US"
      },
      {
        "iata": "VDZ",
        "name": "Valdez Pioneer Field",
        "city": "Valdez",
        "country": "US"
      },
      {
        "iata": "VEE",
        "name": "Venetie Airport",
        "city": "Venetie",
        "country": "US"
      },
      {
        "iata": "KVL",
        "name": "Kivalina Airport",
        "city": "Kivalina",
        "country": "US"
      },
      {
        "iata": "WBQ",
        "name": "Beaver Airport",
        "city": "Beaver",
        "country": "US"
      },
      {
        "iata": "SWD",
        "name": "Seward Airport",
        "city": "Seward",
        "country": "US"
      },
      {
        "iata": "WRG",
        "name": "Wrangell Airport",
        "city": "Wrangell",
        "country": "US"
      },
      {
        "iata": "AIN",
        "name": "Wainwright Airport",
        "city": "Wainwright",
        "country": "US"
      },
      {
        "iata": "WTK",
        "name": "Noatak Airport",
        "city": "Noatak",
        "country": "US"
      },
      {
        "iata": "IYS",
        "name": "Wasilla Airport",
        "city": "Wasilla",
        "country": "US"
      },
      {
        "iata": "YAK",
        "name": "Yakutat Airport",
        "city": "Yakutat",
        "country": "US"
      },
      {
        "iata": "CIS",
        "name": "Canton Airport",
        "city": "Abariringa",
        "country": "KI"
      },
      {
        "iata": "AKI",
        "name": "Akiak Airport",
        "city": "Akiak",
        "country": "US"
      },
      {
        "iata": "AET",
        "name": "Allakaket Airport",
        "city": "Allakaket",
        "country": "US"
      },
      {
        "iata": "NCN",
        "name": "Chenega Bay Airport",
        "city": "Chenega",
        "country": "US"
      },
      {
        "iata": "CLP",
        "name": "Clarks Point Airport",
        "city": "Clarks Point",
        "country": "US"
      },
      {
        "iata": "ELI",
        "name": "Elim Airport",
        "city": "Elim",
        "country": "US"
      },
      {
        "iata": "KNK",
        "name": "Kokhanok Airport",
        "city": "Kokhanok",
        "country": "US"
      },
      {
        "iata": "KOT",
        "name": "Kotlik Airport",
        "city": "Kotlik",
        "country": "US"
      },
      {
        "iata": "KYU",
        "name": "Koyukuk Airport",
        "city": "Koyukuk",
        "country": "US"
      },
      {
        "iata": "KWT",
        "name": "Kwethluk Airport",
        "city": "Kwethluk",
        "country": "US"
      },
      {
        "iata": "ORV",
        "name": "Robert (Bob) Curtis Memorial Airport",
        "city": "Noorvik",
        "country": "US"
      },
      {
        "iata": "SKK",
        "name": "Shaktoolik Airport",
        "city": "Shaktoolik",
        "country": "US"
      },
      {
        "iata": "WSN",
        "name": "South Naknek Nr 2 Airport",
        "city": "South Naknek",
        "country": "US"
      },
      {
        "iata": "FYU",
        "name": "Fort Yukon Airport",
        "city": "Fort Yukon",
        "country": "US"
      },
      {
        "iata": "ROP",
        "name": "Rota International Airport",
        "city": "Rota Island",
        "country": "MP"
      },
      {
        "iata": "SPN",
        "name": "Francisco C. Ada Saipan International Airport",
        "city": "Saipan Island",
        "country": "MP"
      },
      {
        "iata": "GUM",
        "name": "Antonio B. Won Pat International Airport",
        "city": "Hagatna",
        "country": "GU"
      },
      {
        "iata": "TIQ",
        "name": "Tinian International Airport",
        "city": "Tinian Island",
        "country": "MP"
      },
      {
        "iata": "BKH",
        "name": "Barking Sands Airport",
        "city": "Kekaha",
        "country": "US"
      },
      {
        "iata": "HDH",
        "name": "Dillingham Airfield",
        "city": "Mokuleia",
        "country": "US"
      },
      {
        "iata": "HHI",
        "name": "Wheeler Army Airfield",
        "city": "Wahiawa",
        "country": "US"
      },
      {
        "iata": "HNM",
        "name": "Hana Airport",
        "city": "Hana",
        "country": "US"
      },
      {
        "iata": "JHM",
        "name": "Kapalua Airport",
        "city": "Lahaina",
        "country": "US"
      },
      {
        "iata": "JRF",
        "name": "Kalaeloa (John Rodgers Field) Airport",
        "city": "Kapolei",
        "country": "US"
      },
      {
        "iata": "KOA",
        "name": "Kona International At Keahole Airport",
        "city": "Kailua/Kona",
        "country": "US"
      },
      {
        "iata": "LIH",
        "name": "Lihue Airport",
        "city": "Lihue",
        "country": "US"
      },
      {
        "iata": "LUP",
        "name": "Kalaupapa Airport",
        "city": "Kalaupapa",
        "country": "US"
      },
      {
        "iata": "MKK",
        "name": "Molokai Airport",
        "city": "Kaunakakai",
        "country": "US"
      },
      {
        "iata": "MUE",
        "name": "Waimea Kohala Airport",
        "city": "Kamuela",
        "country": "US"
      },
      {
        "iata": "HNL",
        "name": "Honolulu International Airport",
        "city": "Honolulu",
        "country": "US"
      },
      {
        "iata": "LNY",
        "name": "Lanai Airport",
        "city": "Lanai City",
        "country": "US"
      },
      {
        "iata": "OGG",
        "name": "Kahului Airport",
        "city": "Kahului",
        "country": "US"
      },
      {
        "iata": "PAK",
        "name": "Port Allen Airport",
        "city": "Hanapepe",
        "country": "US"
      },
      {
        "iata": "BSF",
        "name": "Bradshaw Army Airfield",
        "city": "Camp Pohakuloa",
        "country": "US"
      },
      {
        "iata": "ITO",
        "name": "Hilo International Airport",
        "city": "Hilo",
        "country": "US"
      },
      {
        "iata": "UPP",
        "name": "Upolu Airport",
        "city": "Hawi",
        "country": "US"
      },
      {
        "iata": "ENT",
        "name": "Eniwetok Airport",
        "city": "Eniwetok Atoll",
        "country": "MH"
      },
      {
        "iata": "MAJ",
        "name": "Marshall Islands International Airport",
        "city": "Majuro Atoll",
        "country": "MH"
      },
      {
        "iata": "KIA",
        "name": "Kaieteur International Airport",
        "city": "Kaieteur Falls",
        "country": "GY"
      },
      {
        "iata": "KWA",
        "name": "Bucholz Army Air Field",
        "city": "Kwajalein",
        "country": "MH"
      },
      {
        "iata": "CXI",
        "name": "Cassidy International Airport",
        "city": "Banana",
        "country": "KI"
      },
      {
        "iata": "TNV",
        "name": "Tabuaeran Island Airport",
        "city": "Tabuaeran Island",
        "country": "KI"
      },
      {
        "iata": "MDY",
        "name": "Henderson Field",
        "city": "Sand Island",
        "country": "UM"
      },
      {
        "iata": "PIZ",
        "name": "Point Lay Lrrs Airport",
        "city": "Point Lay",
        "country": "US"
      },
      {
        "iata": "TKK",
        "name": "Chuuk International Airport",
        "city": "Weno Island",
        "country": "FM"
      },
      {
        "iata": "PNI",
        "name": "Pohnpei International Airport",
        "city": "Pohnpei Island",
        "country": "FM"
      },
      {
        "iata": "ROR",
        "name": "Babelthuap Airport",
        "city": "Babelthuap Island",
        "country": "PW"
      },
      {
        "iata": "KSA",
        "name": "Kosrae International Airport",
        "city": "Okat",
        "country": "FM"
      },
      {
        "iata": "YAP",
        "name": "Yap International Airport",
        "city": "Yap Island",
        "country": "FM"
      },
      {
        "iata": "AWK",
        "name": "Wake Island Airfield",
        "city": "Wake Island",
        "country": "UM"
      },
      {
        "iata": "KNH",
        "name": "Kinmen Airport",
        "city": "Shang-I",
        "country": "TW"
      },
      {
        "iata": "LZN",
        "name": "Matsu Nangan Airport",
        "city": "Nangang Island",
        "country": "TW"
      },
      {
        "iata": "TTT",
        "name": "Taitung Airport",
        "city": "Taitung City",
        "country": "TW"
      },
      {
        "iata": "GNI",
        "name": "Lyudao Airport",
        "city": "Lyudao",
        "country": "TW"
      },
      {
        "iata": "KHH",
        "name": "Kaohsiung International Airport",
        "city": "Kaohsiung City",
        "country": "TW"
      },
      {
        "iata": "CYI",
        "name": "Chiayi Airport",
        "city": "Chiayi City",
        "country": "TW"
      },
      {
        "iata": "HCN",
        "name": "Hengchun Airport",
        "city": "Hengchung",
        "country": "TW"
      },
      {
        "iata": "TXG",
        "name": "Taichung Airport",
        "city": "Taichung City",
        "country": "TW"
      },
      {
        "iata": "KYD",
        "name": "Lanyu Airport",
        "city": "Orchid Island",
        "country": "TW"
      },
      {
        "iata": "RMQ",
        "name": "Taichung Ching Chuang Kang Airport",
        "city": "Taichung City",
        "country": "TW"
      },
      {
        "iata": "MFK",
        "name": "Matsu Beigan Airport",
        "city": "Beigan Island",
        "country": "TW"
      },
      {
        "iata": "TNN",
        "name": "Tainan Airport",
        "city": "Tainan City",
        "country": "TW"
      },
      {
        "iata": "MZG",
        "name": "Makung Airport",
        "city": "Makung City",
        "country": "TW"
      },
      {
        "iata": "PIF",
        "name": "Pingtung North Airport",
        "city": "Pingtung",
        "country": "TW"
      },
      {
        "iata": "TSA",
        "name": "Taipei Songshan Airport",
        "city": "Taipei City",
        "country": "TW"
      },
      {
        "iata": "TPE",
        "name": "Taiwan Taoyuan International Airport",
        "city": "Taipei",
        "country": "TW"
      },
      {
        "iata": "WOT",
        "name": "Wang-an Airport",
        "city": "Wang-an",
        "country": "TW"
      },
      {
        "iata": "HUN",
        "name": "Hualien Airport",
        "city": "Hualien City",
        "country": "TW"
      },
      {
        "iata": "NRT",
        "name": "Narita International Airport",
        "city": "Tokyo",
        "country": "JP"
      },
      {
        "iata": "MMJ",
        "name": "Matsumoto Airport",
        "city": "Matsumoto",
        "country": "JP"
      },
      {
        "iata": "IBR",
        "name": "Hyakuri Airport",
        "city": "Omitama",
        "country": "JP"
      },
      {
        "iata": "MUS",
        "name": "Minami Torishima Airport",
        "city": "",
        "country": "JP"
      },
      {
        "iata": "IWO",
        "name": "Iwo Jima Airport",
        "city": "",
        "country": "JP"
      },
      {
        "iata": "KIX",
        "name": "Kansai International Airport",
        "city": "Osaka",
        "country": "JP"
      },
      {
        "iata": "SHM",
        "name": "Nanki Shirahama Airport",
        "city": "Shirahama",
        "country": "JP"
      },
      {
        "iata": "UKB",
        "name": "Kobe Airport",
        "city": "Kobe",
        "country": "JP"
      },
      {
        "iata": "HIW",
        "name": "Hiroshimanishi Airport",
        "city": "",
        "country": "JP"
      },
      {
        "iata": "TJH",
        "name": "Tajima Airport",
        "city": "Tajima",
        "country": "JP"
      },
      {
        "iata": "OBO",
        "name": "Tokachi-Obihiro Airport",
        "city": "Obihiro",
        "country": "JP"
      },
      {
        "iata": "CTS",
        "name": "New Chitose Airport",
        "city": "Chitose / Tomakomai",
        "country": "JP"
      },
      {
        "iata": "HKD",
        "name": "Hakodate Airport",
        "city": "Hakodate",
        "country": "JP"
      },
      {
        "iata": "KUH",
        "name": "Kushiro Airport",
        "city": "Kushiro",
        "country": "JP"
      },
      {
        "iata": "MMB",
        "name": "Memanbetsu Airport",
        "city": "Ozora",
        "country": "JP"
      },
      {
        "iata": "SHB",
        "name": "Nakashibetsu Airport",
        "city": "Nakashibetsu",
        "country": "JP"
      },
      {
        "iata": "OKD",
        "name": "Okadama Airport",
        "city": "Sapporo",
        "country": "JP"
      },
      {
        "iata": "RBJ",
        "name": "Rebun Airport Airport",
        "city": "",
        "country": "JP"
      },
      {
        "iata": "WKJ",
        "name": "Wakkanai Airport",
        "city": "Wakkanai",
        "country": "JP"
      },
      {
        "iata": "IKI",
        "name": "Iki Airport",
        "city": "Iki",
        "country": "JP"
      },
      {
        "iata": "UBJ",
        "name": "Yamaguchi Ube Airport",
        "city": "Ube",
        "country": "JP"
      },
      {
        "iata": "TSJ",
        "name": "Tsushima Airport",
        "city": "Tsushima",
        "country": "JP"
      },
      {
        "iata": "MBE",
        "name": "Monbetsu Airport",
        "city": "Monbetsu",
        "country": "JP"
      },
      {
        "iata": "AKJ",
        "name": "Asahikawa Airport",
        "city": "Asahikawa",
        "country": "JP"
      },
      {
        "iata": "OIR",
        "name": "Okushiri Airport",
        "city": "",
        "country": "JP"
      },
      {
        "iata": "RIS",
        "name": "Rishiri Airport",
        "city": "Rishiri",
        "country": "JP"
      },
      {
        "iata": "KUM",
        "name": "Yakushima Airport",
        "city": "",
        "country": "JP"
      },
      {
        "iata": "FUJ",
        "name": "Fukue Airport",
        "city": "Goto",
        "country": "JP"
      },
      {
        "iata": "FUK",
        "name": "Fukuoka Airport",
        "city": "Fukuoka",
        "country": "JP"
      },
      {
        "iata": "TNE",
        "name": "New Tanegashima Airport",
        "city": "",
        "country": "JP"
      },
      {
        "iata": "KOJ",
        "name": "Kagoshima Airport",
        "city": "Kagoshima",
        "country": "JP"
      },
      {
        "iata": "KMI",
        "name": "Miyazaki Airport",
        "city": "Miyazaki",
        "country": "JP"
      },
      {
        "iata": "OIT",
        "name": "Oita Airport",
        "city": "Oita",
        "country": "JP"
      },
      {
        "iata": "KKJ",
        "name": "Kitakyushu Airport",
        "city": "Kitakyushu",
        "country": "JP"
      },
      {
        "iata": "HSG",
        "name": "Saga Airport",
        "city": "Saga",
        "country": "JP"
      },
      {
        "iata": "KMJ",
        "name": "Kumamoto Airport",
        "city": "Kumamoto",
        "country": "JP"
      },
      {
        "iata": "NGS",
        "name": "Nagasaki Airport",
        "city": "Nagasaki",
        "country": "JP"
      },
      {
        "iata": "NGO",
        "name": "Chubu Centrair International Airport",
        "city": "Tokoname",
        "country": "JP"
      },
      {
        "iata": "ASJ",
        "name": "Amami Airport",
        "city": "Amami",
        "country": "JP"
      },
      {
        "iata": "OKE",
        "name": "Okierabu Airport",
        "city": "",
        "country": "JP"
      },
      {
        "iata": "KKX",
        "name": "Kikai Airport",
        "city": "",
        "country": "JP"
      },
      {
        "iata": "TKN",
        "name": "Tokunoshima Airport",
        "city": "Tokunoshima",
        "country": "JP"
      },
      {
        "iata": "NKM",
        "name": "Nagoya Airport",
        "city": "Nagoya",
        "country": "JP"
      },
      {
        "iata": "FKJ",
        "name": "Fukui Airport",
        "city": "",
        "country": "JP"
      },
      {
        "iata": "QGU",
        "name": "Gifu Airport",
        "city": "Gifu",
        "country": "JP"
      },
      {
        "iata": "KMQ",
        "name": "Komatsu Airport",
        "city": "Kanazawa",
        "country": "JP"
      },
      {
        "iata": "OKI",
        "name": "Oki Airport",
        "city": "Okinoshima",
        "country": "JP"
      },
      {
        "iata": "TOY",
        "name": "Toyama Airport",
        "city": "Toyama",
        "country": "JP"
      },
      {
        "iata": "NTQ",
        "name": "Noto Airport",
        "city": "Wajima",
        "country": "JP"
      },
      {
        "iata": "HIJ",
        "name": "Hiroshima Airport",
        "city": "Hiroshima",
        "country": "JP"
      },
      {
        "iata": "OKJ",
        "name": "Okayama Airport",
        "city": "Okayama City",
        "country": "JP"
      },
      {
        "iata": "IZO",
        "name": "Izumo Airport",
        "city": "Izumo",
        "country": "JP"
      },
      {
        "iata": "YGJ",
        "name": "Miho Yonago Airport",
        "city": "Yonago",
        "country": "JP"
      },
      {
        "iata": "IWK",
        "name": "Iwakuni Marine Corps Air Station",
        "city": "Iwakuni",
        "country": "JP"
      },
      {
        "iata": "KCZ",
        "name": "Kochi Ryoma Airport",
        "city": "Nankoku",
        "country": "JP"
      },
      {
        "iata": "MYJ",
        "name": "Matsuyama Airport",
        "city": "Matsuyama",
        "country": "JP"
      },
      {
        "iata": "ITM",
        "name": "Osaka International Airport",
        "city": "Osaka",
        "country": "JP"
      },
      {
        "iata": "TTJ",
        "name": "Tottori Airport",
        "city": "Tottori",
        "country": "JP"
      },
      {
        "iata": "TKS",
        "name": "Tokushima Airport",
        "city": "Tokushima",
        "country": "JP"
      },
      {
        "iata": "TAK",
        "name": "Takamatsu Airport",
        "city": "Takamatsu",
        "country": "JP"
      },
      {
        "iata": "IWJ",
        "name": "Iwami Airport",
        "city": "Masuda",
        "country": "JP"
      },
      {
        "iata": "AOJ",
        "name": "Aomori Airport",
        "city": "Aomori",
        "country": "JP"
      },
      {
        "iata": "GAJ",
        "name": "Yamagata Airport",
        "city": "Yamagata",
        "country": "JP"
      },
      {
        "iata": "SDS",
        "name": "Sado Airport",
        "city": "",
        "country": "JP"
      },
      {
        "iata": "FKS",
        "name": "Fukushima Airport",
        "city": "Sukagawa",
        "country": "JP"
      },
      {
        "iata": "HHE",
        "name": "Hachinohe Airport",
        "city": "",
        "country": "JP"
      },
      {
        "iata": "HNA",
        "name": "Hanamaki Airport",
        "city": "",
        "country": "JP"
      },
      {
        "iata": "AXT",
        "name": "Akita Airport",
        "city": "Akita",
        "country": "JP"
      },
      {
        "iata": "MSJ",
        "name": "Misawa Air Base",
        "city": "Misawa",
        "country": "JP"
      },
      {
        "iata": "KIJ",
        "name": "Niigata Airport",
        "city": "Niigata",
        "country": "JP"
      },
      {
        "iata": "ONJ",
        "name": "Odate Noshiro Airport",
        "city": "Odate",
        "country": "JP"
      },
      {
        "iata": "SDJ",
        "name": "Sendai Airport",
        "city": "Sendai",
        "country": "JP"
      },
      {
        "iata": "SYO",
        "name": "Shonai Airport",
        "city": "Shonai",
        "country": "JP"
      },
      {
        "iata": "NJA",
        "name": "Atsugi Naval Air Facility",
        "city": "",
        "country": "JP"
      },
      {
        "iata": "HAC",
        "name": "Hachijojima Airport",
        "city": "Hachijojima",
        "country": "JP"
      },
      {
        "iata": "OIM",
        "name": "Oshima Airport",
        "city": "Izu Oshima",
        "country": "JP"
      },
      {
        "iata": "MYE",
        "name": "Miyakejima Airport",
        "city": "Miyakejima",
        "country": "JP"
      },
      {
        "iata": "HND",
        "name": "Tokyo International Airport",
        "city": "Tokyo",
        "country": "JP"
      },
      {
        "iata": "QUT",
        "name": "Utsunomiya Airport",
        "city": "",
        "country": "JP"
      },
      {
        "iata": "OKO",
        "name": "Yokota Air Base",
        "city": "Fussa",
        "country": "JP"
      },
      {
        "iata": "MWX",
        "name": "Muan International Airport",
        "city": "",
        "country": "KR"
      },
      {
        "iata": "KWJ",
        "name": "Gwangju Airport",
        "city": "Gwangju",
        "country": "KR"
      },
      {
        "iata": "KUV",
        "name": "Kunsan Air Base",
        "city": "Kunsan",
        "country": "KR"
      },
      {
        "iata": "CHN",
        "name": "Jeon Ju Airport",
        "city": "Jeon Ju",
        "country": "KR"
      },
      {
        "iata": "RSU",
        "name": "Yeosu Airport",
        "city": "Yeosu",
        "country": "KR"
      },
      {
        "iata": "QUN",
        "name": "A-306 Airport",
        "city": "Chun Chon City",
        "country": "KR"
      },
      {
        "iata": "SHO",
        "name": "Sokcho Airport",
        "city": "",
        "country": "KR"
      },
      {
        "iata": "KAG",
        "name": "Gangneung Airport",
        "city": "",
        "country": "KR"
      },
      {
        "iata": "WJU",
        "name": "Wonju Airport",
        "city": "Wonju",
        "country": "KR"
      },
      {
        "iata": "YNY",
        "name": "Yangyang International Airport",
        "city": "Sokcho / Gangneung",
        "country": "KR"
      },
      {
        "iata": "CJU",
        "name": "Jeju International Airport",
        "city": "Jeju City",
        "country": "KR"
      },
      {
        "iata": "CHF",
        "name": "Jinhae Airport",
        "city": "Jinhae",
        "country": "KR"
      },
      {
        "iata": "PUS",
        "name": "Gimhae International Airport",
        "city": "Busan",
        "country": "KR"
      },
      {
        "iata": "HIN",
        "name": "Sacheon Air Base",
        "city": "Sacheon",
        "country": "KR"
      },
      {
        "iata": "USN",
        "name": "Ulsan Airport",
        "city": "Ulsan",
        "country": "KR"
      },
      {
        "iata": "ICN",
        "name": "Incheon International Airport",
        "city": "Seoul",
        "country": "KR"
      },
      {
        "iata": "SSN",
        "name": "Seoul Air Base",
        "city": "",
        "country": "KR"
      },
      {
        "iata": "OSN",
        "name": "Osan Air Base",
        "city": "",
        "country": "KR"
      },
      {
        "iata": "GMP",
        "name": "Gimpo International Airport",
        "city": "Seoul",
        "country": "KR"
      },
      {
        "iata": "SWU",
        "name": "Suwon Airport",
        "city": "",
        "country": "KR"
      },
      {
        "iata": "KPO",
        "name": "Pohang Airport",
        "city": "Pohang",
        "country": "KR"
      },
      {
        "iata": "TAE",
        "name": "Daegu Airport",
        "city": "Daegu",
        "country": "KR"
      },
      {
        "iata": "CJJ",
        "name": "Cheongju International Airport",
        "city": "Cheongju",
        "country": "KR"
      },
      {
        "iata": "YEC",
        "name": "Yecheon Airport",
        "city": "",
        "country": "KR"
      },
      {
        "iata": "OKA",
        "name": "Naha Airport",
        "city": "Naha",
        "country": "JP"
      },
      {
        "iata": "DNA",
        "name": "Kadena Air Base",
        "city": "",
        "country": "JP"
      },
      {
        "iata": "ISG",
        "name": "Ishigaki Airport",
        "city": "Ishigaki",
        "country": "JP"
      },
      {
        "iata": "UEO",
        "name": "Kumejima Airport",
        "city": "",
        "country": "JP"
      },
      {
        "iata": "KJP",
        "name": "Kerama Airport",
        "city": "Kerama",
        "country": "JP"
      },
      {
        "iata": "MMD",
        "name": "Minami Daito Airport",
        "city": "",
        "country": "JP"
      },
      {
        "iata": "MMY",
        "name": "Miyako Airport",
        "city": "Miyako City",
        "country": "JP"
      },
      {
        "iata": "AGJ",
        "name": "Aguni Airport",
        "city": "Aguni",
        "country": "JP"
      },
      {
        "iata": "IEJ",
        "name": "Ie Jima Airport",
        "city": "",
        "country": "JP"
      },
      {
        "iata": "HTR",
        "name": "Hateruma Airport",
        "city": "Hateruma",
        "country": "JP"
      },
      {
        "iata": "KTD",
        "name": "Kitadaito Airport",
        "city": "",
        "country": "JP"
      },
      {
        "iata": "SHI",
        "name": "Shimojishima Airport",
        "city": "",
        "country": "JP"
      },
      {
        "iata": "TRA",
        "name": "Tarama Airport",
        "city": "",
        "country": "JP"
      },
      {
        "iata": "RNJ",
        "name": "Yoron Airport",
        "city": "",
        "country": "JP"
      },
      {
        "iata": "OGN",
        "name": "Yonaguni Airport",
        "city": "",
        "country": "JP"
      },
      {
        "iata": "SFS",
        "name": "Subic Bay International Airport",
        "city": "Olongapo City",
        "country": "PH"
      },
      {
        "iata": "CRK",
        "name": "Diosdado Macapagal International Airport",
        "city": "Angeles City",
        "country": "PH"
      },
      {
        "iata": "LAO",
        "name": "Laoag International Airport",
        "city": "Laoag City",
        "country": "PH"
      },
      {
        "iata": "MNL",
        "name": "Ninoy Aquino International Airport",
        "city": "Manila",
        "country": "PH"
      },
      {
        "iata": "CYU",
        "name": "Cuyo Airport",
        "city": "Cuyo",
        "country": "PH"
      },
      {
        "iata": "LGP",
        "name": "Legazpi City International Airport",
        "city": "Legazpi City",
        "country": "PH"
      },
      {
        "iata": "NSP",
        "name": "Sangley Point Air Base",
        "city": "Cavite City",
        "country": "PH"
      },
      {
        "iata": "LBX",
        "name": "Lubang Airport",
        "city": "",
        "country": "PH"
      },
      {
        "iata": "AAV",
        "name": "Allah Valley Airport",
        "city": "Surallah",
        "country": "PH"
      },
      {
        "iata": "GES",
        "name": "General Santos International Airport",
        "city": "General Santos City",
        "country": "PH"
      },
      {
        "iata": "CBO",
        "name": "Awang Airport",
        "city": "Cotabato City",
        "country": "PH"
      },
      {
        "iata": "DVO",
        "name": "Francisco Bangoy International Airport",
        "city": "Davao City",
        "country": "PH"
      },
      {
        "iata": "BXU",
        "name": "Bancasi Airport",
        "city": "Butuan City",
        "country": "PH"
      },
      {
        "iata": "BPH",
        "name": "Bislig Airport",
        "city": "",
        "country": "PH"
      },
      {
        "iata": "DPL",
        "name": "Dipolog Airport",
        "city": "Dipolog City",
        "country": "PH"
      },
      {
        "iata": "CGM",
        "name": "Camiguin Airport",
        "city": "",
        "country": "PH"
      },
      {
        "iata": "IGN",
        "name": "Iligan Airport",
        "city": "",
        "country": "PH"
      },
      {
        "iata": "JOL",
        "name": "Jolo Airport",
        "city": "",
        "country": "PH"
      },
      {
        "iata": "CGY",
        "name": "Cagayan De Oro Airport",
        "city": "Cagayan De Oro City",
        "country": "PH"
      },
      {
        "iata": "MLP",
        "name": "Malabang Airport",
        "city": "Malabang",
        "country": "PH"
      },
      {
        "iata": "SGS",
        "name": "Sanga Sanga Airport",
        "city": "",
        "country": "PH"
      },
      {
        "iata": "OZC",
        "name": "Labo Airport",
        "city": "Ozamiz City",
        "country": "PH"
      },
      {
        "iata": "PAG",
        "name": "Pagadian Airport",
        "city": "Pagadian City",
        "country": "PH"
      },
      {
        "iata": "MXI",
        "name": "Mati National Airport",
        "city": "",
        "country": "PH"
      },
      {
        "iata": "SUG",
        "name": "Surigao Airport",
        "city": "Surigao City",
        "country": "PH"
      },
      {
        "iata": "CDY",
        "name": "Cagayan de Sulu Airport",
        "city": "Mapun",
        "country": "PH"
      },
      {
        "iata": "IPE",
        "name": "Ipil Airport",
        "city": "Ipil",
        "country": "PH"
      },
      {
        "iata": "TDG",
        "name": "Tandag Airport",
        "city": "",
        "country": "PH"
      },
      {
        "iata": "ZAM",
        "name": "Zamboanga International Airport",
        "city": "Zamboanga City",
        "country": "PH"
      },
      {
        "iata": "IAO",
        "name": "Siargao Airport",
        "city": "Del Carmen",
        "country": "PH"
      },
      {
        "iata": "RZP",
        "name": "Cesar Lim Rodriguez Airport",
        "city": "Taytay Airport",
        "country": "PH"
      },
      {
        "iata": "BAG",
        "name": "Loakan Airport",
        "city": "Baguio City",
        "country": "PH"
      },
      {
        "iata": "DTE",
        "name": "Daet Airport",
        "city": "Daet",
        "country": "PH"
      },
      {
        "iata": "SJI",
        "name": "San Jose Airport",
        "city": "San Jose",
        "country": "PH"
      },
      {
        "iata": "MBO",
        "name": "Mamburao Airport",
        "city": "",
        "country": "PH"
      },
      {
        "iata": "WNP",
        "name": "Naga Airport",
        "city": "Naga",
        "country": "PH"
      },
      {
        "iata": "BSO",
        "name": "Basco Airport",
        "city": "Basco",
        "country": "PH"
      },
      {
        "iata": "BQA",
        "name": "Dr.Juan C. Angara Airport",
        "city": "Baler",
        "country": "PH"
      },
      {
        "iata": "SFE",
        "name": "San Fernando Airport",
        "city": "",
        "country": "PH"
      },
      {
        "iata": "TUG",
        "name": "Tuguegarao Airport",
        "city": "Tuguegarao City",
        "country": "PH"
      },
      {
        "iata": "VRC",
        "name": "Virac Airport",
        "city": "Virac",
        "country": "PH"
      },
      {
        "iata": "MRQ",
        "name": "Marinduque Airport",
        "city": "Gasan",
        "country": "PH"
      },
      {
        "iata": "CYZ",
        "name": "Cauayan Airport",
        "city": "Cauayan City",
        "country": "PH"
      },
      {
        "iata": "TAC",
        "name": "Daniel Z. Romualdez Airport",
        "city": "Tacloban City",
        "country": "PH"
      },
      {
        "iata": "BCD",
        "name": "Bacolod-Silay City International Airport",
        "city": "Bacolod City",
        "country": "PH"
      },
      {
        "iata": "CYP",
        "name": "Calbayog Airport",
        "city": "Calbayog City",
        "country": "PH"
      },
      {
        "iata": "DGT",
        "name": "Sibulan Airport",
        "city": "Dumaguete City",
        "country": "PH"
      },
      {
        "iata": "MPH",
        "name": "Godofredo P. Ramos Airport",
        "city": "Malay",
        "country": "PH"
      },
      {
        "iata": "CRM",
        "name": "Catarman National Airport",
        "city": "Catarman",
        "country": "PH"
      },
      {
        "iata": "ILO",
        "name": "Iloilo International Airport",
        "city": "Iloilo City",
        "country": "PH"
      },
      {
        "iata": "MBT",
        "name": "Moises R. Espinosa Airport",
        "city": "Masbate",
        "country": "PH"
      },
      {
        "iata": "KLO",
        "name": "Kalibo International Airport",
        "city": "Kalibo",
        "country": "PH"
      },
      {
        "iata": "CEB",
        "name": "Mactan Cebu International Airport",
        "city": "Lapu-Lapu City",
        "country": "PH"
      },
      {
        "iata": "OMC",
        "name": "Ormoc Airport",
        "city": "Ormoc City",
        "country": "PH"
      },
      {
        "iata": "PPS",
        "name": "Puerto Princesa Airport",
        "city": "Puerto Princesa City",
        "country": "PH"
      },
      {
        "iata": "RXS",
        "name": "Roxas Airport",
        "city": "Roxas City",
        "country": "PH"
      },
      {
        "iata": "EUQ",
        "name": "Evelio Javier Airport",
        "city": "San Jose",
        "country": "PH"
      },
      {
        "iata": "TAG",
        "name": "Tagbilaran Airport",
        "city": "Tagbilaran City",
        "country": "PH"
      },
      {
        "iata": "TBH",
        "name": "Romblon Airport",
        "city": "Romblon",
        "country": "PH"
      },
      {
        "iata": "USU",
        "name": "Francisco B. Reyes Airport",
        "city": "Coron",
        "country": "PH"
      },
      {
        "iata": "BPR",
        "name": "Borongan Airport",
        "city": "Borongan City",
        "country": "PH"
      },
      {
        "iata": "ENI",
        "name": "El Nido Airport",
        "city": "El Nido",
        "country": "PH"
      },
      {
        "iata": "CCT",
        "name": "Colonia Catriel Airport",
        "city": "Colonia Catriel",
        "country": "AR"
      },
      {
        "iata": "COC",
        "name": "Comodoro Pierrestegui Airport",
        "city": "Concordia",
        "country": "AR"
      },
      {
        "iata": "GHU",
        "name": "Gualeguaychu Airport",
        "city": "Gualeguaychu",
        "country": "AR"
      },
      {
        "iata": "JNI",
        "name": "Junin Airport",
        "city": "Junin",
        "country": "AR"
      },
      {
        "iata": "PRA",
        "name": "General Urquiza Airport",
        "city": "Parana",
        "country": "AR"
      },
      {
        "iata": "ROS",
        "name": "Islas Malvinas Airport",
        "city": "Rosario",
        "country": "AR"
      },
      {
        "iata": "SFN",
        "name": "Sauce Viejo Airport",
        "city": "Santa Fe",
        "country": "AR"
      },
      {
        "iata": "AEP",
        "name": "Jorge Newbery Airpark",
        "city": "Buenos Aires",
        "country": "AR"
      },
      {
        "iata": "LCM",
        "name": "La Cumbre Airport",
        "city": "La Cumbre",
        "country": "AR"
      },
      {
        "iata": "COR",
        "name": "Ingeniero Ambrosio Taravella Airport",
        "city": "Cordoba",
        "country": "AR"
      },
      {
        "iata": "FDO",
        "name": "San Fernando Airport",
        "city": "San Fernando",
        "country": "AR"
      },
      {
        "iata": "LPG",
        "name": "La Plata Airport",
        "city": "La Plata",
        "country": "AR"
      },
      {
        "iata": "EPA",
        "name": "El Palomar Airport",
        "city": "El Palomar",
        "country": "AR"
      },
      {
        "iata": "MJR",
        "name": "Miramar Airport",
        "city": "Miramar",
        "country": "AR"
      },
      {
        "iata": "EZE",
        "name": "Ministro Pistarini International Airport",
        "city": "Ezeiza",
        "country": "AR"
      },
      {
        "iata": "NCJ",
        "name": "Sunchales Aeroclub Airport",
        "city": "Sunchales",
        "country": "AR"
      },
      {
        "iata": "HOS",
        "name": "Chos Malal Airport",
        "city": "Chos Malal",
        "country": "AR"
      },
      {
        "iata": "CVH",
        "name": "Caviahue Airport",
        "city": "Lafontaine",
        "country": "AR"
      },
      {
        "iata": "GNR",
        "name": "Dr. Arturo H. Illia Airport",
        "city": "General Roca",
        "country": "AR"
      },
      {
        "iata": "RDS",
        "name": "Rincon De Los Sauces Airport",
        "city": "Rincon de los Sauces",
        "country": "AR"
      },
      {
        "iata": "APZ",
        "name": "Zapala Airport",
        "city": "Zapala",
        "country": "AR"
      },
      {
        "iata": "MDZ",
        "name": "El Plumerillo Airport",
        "city": "Mendoza",
        "country": "AR"
      },
      {
        "iata": "LGS",
        "name": "Comodoro D.R. Salomon Airport",
        "city": "Malargue",
        "country": "AR"
      },
      {
        "iata": "AFA",
        "name": "Suboficial Ay Santiago Germano Airport",
        "city": "San Rafael",
        "country": "AR"
      },
      {
        "iata": "CTC",
        "name": "Catamarca Airport",
        "city": "Catamarca",
        "country": "AR"
      },
      {
        "iata": "SDE",
        "name": "Vicecomodoro Angel D. La Paz Aragones Airport",
        "city": "Santiago del Estero",
        "country": "AR"
      },
      {
        "iata": "RHD",
        "name": "Las Termas Airport",
        "city": "Rio Hondo",
        "country": "AR"
      },
      {
        "iata": "IRJ",
        "name": "Capitan V A Almonacid Airport",
        "city": "La Rioja",
        "country": "AR"
      },
      {
        "iata": "TUC",
        "name": "Teniente Benjamin Matienzo Airport",
        "city": "San Miguel de Tucuman",
        "country": "AR"
      },
      {
        "iata": "UAQ",
        "name": "Domingo Faustino Sarmiento Airport",
        "city": "San Juan",
        "country": "AR"
      },
      {
        "iata": "CRR",
        "name": "Ceres Airport",
        "city": "Ceres",
        "country": "AR"
      },
      {
        "iata": "RCU",
        "name": "Area De Material Airport",
        "city": "Rio Cuarto",
        "country": "AR"
      },
      {
        "iata": "VDR",
        "name": "Villa Dolores Airport",
        "city": "Villa Dolores",
        "country": "AR"
      },
      {
        "iata": "VME",
        "name": "Villa Reynolds Airport",
        "city": "Villa Reynolds",
        "country": "AR"
      },
      {
        "iata": "RLO",
        "name": "Valle Del Conlara International Airport",
        "city": "Merlo",
        "country": "AR"
      },
      {
        "iata": "LUQ",
        "name": "Brigadier Mayor D Cesar Raul Ojeda Airport",
        "city": "San Luis",
        "country": "AR"
      },
      {
        "iata": "CNQ",
        "name": "Corrientes Airport",
        "city": "Corrientes",
        "country": "AR"
      },
      {
        "iata": "RES",
        "name": "Resistencia International Airport",
        "city": "Resistencia",
        "country": "AR"
      },
      {
        "iata": "FMA",
        "name": "Formosa Airport",
        "city": "Formosa",
        "country": "AR"
      },
      {
        "iata": "IGR",
        "name": "Cataratas Del Iguazu International Airport",
        "city": "Puerto Iguazu",
        "country": "AR"
      },
      {
        "iata": "AOL",
        "name": "Paso De Los Libres Airport",
        "city": "Paso de los Libres",
        "country": "AR"
      },
      {
        "iata": "MCS",
        "name": "Monte Caseros Airport",
        "city": "Monte Caseros",
        "country": "AR"
      },
      {
        "iata": "PSS",
        "name": "Libertador Gral D Jose De San Martin Airport",
        "city": "Posadas",
        "country": "AR"
      },
      {
        "iata": "PRQ",
        "name": "Termal Airport",
        "city": "Presidencia Roque Saenz Pena",
        "country": "AR"
      },
      {
        "iata": "SLA",
        "name": "Martin Miguel De Guemes International Airport",
        "city": "Salta",
        "country": "AR"
      },
      {
        "iata": "JUJ",
        "name": "Gobernador Horacio Guzman International Airport",
        "city": "San Salvador de Jujuy",
        "country": "AR"
      },
      {
        "iata": "ORA",
        "name": "Oran Airport",
        "city": "Oran",
        "country": "AR"
      },
      {
        "iata": "TTG",
        "name": "General Enrique Mosconi Airport",
        "city": "Tartagal",
        "country": "AR"
      },
      {
        "iata": "CLX",
        "name": "Clorinda Airport",
        "city": "Clorinda",
        "country": "AR"
      },
      {
        "iata": "ELO",
        "name": "El Dorado Airport",
        "city": "El Dorado",
        "country": "AR"
      },
      {
        "iata": "OYA",
        "name": "Goya Airport",
        "city": "Goya",
        "country": "AR"
      },
      {
        "iata": "LLS",
        "name": "Alferez Armando Rodriguez Airport",
        "city": "Las Lomitas",
        "country": "AR"
      },
      {
        "iata": "MDX",
        "name": "Mercedes Airport",
        "city": "Mercedes",
        "country": "AR"
      },
      {
        "iata": "RCQ",
        "name": "Reconquista Airport",
        "city": "Reconquista",
        "country": "AR"
      },
      {
        "iata": "UZU",
        "name": "Curuzu Cuatia Airport",
        "city": "Curuzu Cuatia",
        "country": "AR"
      },
      {
        "iata": "EHL",
        "name": "El Bolson Airport",
        "city": "El Bolson",
        "country": "AR"
      },
      {
        "iata": "CRD",
        "name": "General E. Mosconi Airport",
        "city": "Comodoro Rivadavia",
        "country": "AR"
      },
      {
        "iata": "EMX",
        "name": "El Maiten Airport",
        "city": "El Maiten",
        "country": "AR"
      },
      {
        "iata": "EQS",
        "name": "Brigadier Antonio Parodi Airport",
        "city": "Esquel",
        "country": "AR"
      },
      {
        "iata": "LHS",
        "name": "Las Heras Airport",
        "city": "Las Heras",
        "country": "AR"
      },
      {
        "iata": "IGB",
        "name": "Cabo F.A.A. H. R. Bordon Airport",
        "city": "Ingeniero Jacobacci",
        "country": "AR"
      },
      {
        "iata": "OES",
        "name": "Antoine De St Exupery Airport",
        "city": "San Antonio Oeste",
        "country": "AR"
      },
      {
        "iata": "MQD",
        "name": "Maquinchao Airport",
        "city": "Maquinchao",
        "country": "AR"
      },
      {
        "iata": "ARR",
        "name": "D. Casimiro Szlapelis Airport",
        "city": "Alto Rio Senguerr",
        "country": "AR"
      },
      {
        "iata": "SGV",
        "name": "Sierra Grande Airport",
        "city": "Sierra Grande",
        "country": "AR"
      },
      {
        "iata": "REL",
        "name": "Almirante Marco Andres Zar Airport",
        "city": "Rawson",
        "country": "AR"
      },
      {
        "iata": "VDM",
        "name": "Gobernador Castello Airport",
        "city": "Viedma / Carmen de Patagones",
        "country": "AR"
      },
      {
        "iata": "PMY",
        "name": "El Tehuelche Airport",
        "city": "Puerto Madryn",
        "country": "AR"
      },
      {
        "iata": "ING",
        "name": "Lago Argentino Airport",
        "city": "El Calafate",
        "country": "AR"
      },
      {
        "iata": "FTE",
        "name": "El Calafate Airport",
        "city": "El Calafate",
        "country": "AR"
      },
      {
        "iata": "PUD",
        "name": "Puerto Deseado Airport",
        "city": "Puerto Deseado",
        "country": "AR"
      },
      {
        "iata": "RGA",
        "name": "Hermes Quijada International Airport",
        "city": "Rio Grande",
        "country": "AR"
      },
      {
        "iata": "RGL",
        "name": "Piloto Civil N. Fernandez Airport",
        "city": "Rio Gallegos",
        "country": "AR"
      },
      {
        "iata": "USH",
        "name": "Malvinas Argentinas Airport",
        "city": "Ushuahia",
        "country": "AR"
      },
      {
        "iata": "ULA",
        "name": "Capitan D Daniel Vazquez Airport",
        "city": "San Julian",
        "country": "AR"
      },
      {
        "iata": "ROY",
        "name": "Rio Mayo Airport",
        "city": "Rio Mayo",
        "country": "AR"
      },
      {
        "iata": "PMQ",
        "name": "Perito Moreno Airport",
        "city": "Perito Moreno",
        "country": "AR"
      },
      {
        "iata": "GGS",
        "name": "Gobernador Gregores Airport",
        "city": "Gobernador Gregores",
        "country": "AR"
      },
      {
        "iata": "JSM",
        "name": "Jose De San Martin Airport",
        "city": "Chubut",
        "country": "AR"
      },
      {
        "iata": "RYO",
        "name": "28 De Noviembre Airport",
        "city": "El Turbio",
        "country": "AR"
      },
      {
        "iata": "RZA",
        "name": "Santa Cruz Airport",
        "city": "Santa Cruz",
        "country": "AR"
      },
      {
        "iata": "BHI",
        "name": "Comandante Espora Airport",
        "city": "Bahia Blanca",
        "country": "AR"
      },
      {
        "iata": "CSZ",
        "name": "Brigadier D.H.E. Ruiz Airport",
        "city": "Coronel Suarez",
        "country": "AR"
      },
      {
        "iata": "OVR",
        "name": "Olavarria Airport",
        "city": "Olavarria",
        "country": "AR"
      },
      {
        "iata": "GPO",
        "name": "General Pico Airport",
        "city": "General Pico",
        "country": "AR"
      },
      {
        "iata": "OYO",
        "name": "Tres Arroyos Airport",
        "city": "Tres Arroyos",
        "country": "AR"
      },
      {
        "iata": "SST",
        "name": "Santa Teresita Airport",
        "city": "Santa Teresita",
        "country": "AR"
      },
      {
        "iata": "MDQ",
        "name": "Astor Piazzola International Airport",
        "city": "Mar del Plata",
        "country": "AR"
      },
      {
        "iata": "NQN",
        "name": "Presidente Peron Airport",
        "city": "Neuquen",
        "country": "AR"
      },
      {
        "iata": "NEC",
        "name": "Necochea Airport",
        "city": "Necochea",
        "country": "AR"
      },
      {
        "iata": "PEH",
        "name": "Comodoro Pedro Zanni Airport",
        "city": "Pehuajo",
        "country": "AR"
      },
      {
        "iata": "RSA",
        "name": "Santa Rosa Airport",
        "city": "Santa Rosa",
        "country": "AR"
      },
      {
        "iata": "BRC",
        "name": "San Carlos De Bariloche Airport",
        "city": "San Carlos de Bariloche",
        "country": "AR"
      },
      {
        "iata": "TDL",
        "name": "Heroes De Malvinas Airport",
        "city": "Tandil",
        "country": "AR"
      },
      {
        "iata": "VLG",
        "name": "Villa Gesell Airport",
        "city": "Villa Gesell",
        "country": "AR"
      },
      {
        "iata": "CUT",
        "name": "Cutral-Co Airport",
        "city": "Cutral-Co",
        "country": "AR"
      },
      {
        "iata": "CPC",
        "name": "Aviador C. Campos Airport",
        "city": "Chapelco/San Martin de los Andes",
        "country": "AR"
      },
      {
        "iata": "CDJ",
        "name": "Conceicao do Araguaia Airport",
        "city": "Conceicao Do Araguaia",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Campo Delio Jardim de Mattos Airport",
        "city": "Rio De Janeiro",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Amapa Airport",
        "city": "Amapa",
        "country": "BR"
      },
      {
        "iata": "AQA",
        "name": "Araraquara Airport",
        "city": "Araraquara",
        "country": "BR"
      },
      {
        "iata": "AJU",
        "name": "Santa Maria Airport",
        "city": "Aracaju",
        "country": "BR"
      },
      {
        "iata": "AIF",
        "name": "Marcelo Pires Halzhausen Airport",
        "city": "Assis",
        "country": "BR"
      },
      {
        "iata": "AFL",
        "name": "Alta Floresta Airport",
        "city": "Alta Floresta",
        "country": "BR"
      },
      {
        "iata": "ARU",
        "name": "Aracatuba Airport",
        "city": "Aracatuba",
        "country": "BR"
      },
      {
        "iata": "AAX",
        "name": "Araxa Airport",
        "city": "Araxa",
        "country": "BR"
      },
      {
        "iata": "BEL",
        "name": "Val de Cans/Julio Cezar Ribeiro International Airport",
        "city": "Belem",
        "country": "BR"
      },
      {
        "iata": "BGX",
        "name": "Comandante Gustavo Kraemer Airport",
        "city": "Bage",
        "country": "BR"
      },
      {
        "iata": "PLU",
        "name": "Pampulha - Carlos Drummond de Andrade Airport",
        "city": "Belo Horizonte",
        "country": "BR"
      },
      {
        "iata": "BFH",
        "name": "Bacacheri Airport",
        "city": "Curitiba",
        "country": "BR"
      },
      {
        "iata": "BJP",
        "name": "Aeroporto Estadual Arthur Siqueira Airport",
        "city": "Braganca Paulista",
        "country": "BR"
      },
      {
        "iata": "QAK",
        "name": "Major Brigadeiro Doorgal Borges Airport",
        "city": "Barbacena",
        "country": "BR"
      },
      {
        "iata": "BSB",
        "name": "Presidente Juscelino Kubistschek International Airport",
        "city": "Brasilia",
        "country": "BR"
      },
      {
        "iata": "BAT",
        "name": "Chafei Amsei Airport",
        "city": "Barretos",
        "country": "BR"
      },
      {
        "iata": "BAU",
        "name": "Bauru Airport",
        "city": "Bauru",
        "country": "BR"
      },
      {
        "iata": "BVB",
        "name": "Atlas Brasil Cantanhede Airport",
        "city": "Boa Vista",
        "country": "BR"
      },
      {
        "iata": "BPG",
        "name": "Barra do Garcas Airport",
        "city": "Barra Do Garcas",
        "country": "BR"
      },
      {
        "iata": "BZC",
        "name": "Umberto Modiano Airport",
        "city": "Cabo Frio",
        "country": "BR"
      },
      {
        "iata": "CAC",
        "name": "Cascavel Airport",
        "city": "Cascavel",
        "country": "BR"
      },
      {
        "iata": "CFB",
        "name": "Cabo Frio Airport",
        "city": "Cabo Frio",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Cacador Airport",
        "city": "Cacador",
        "country": "BR"
      },
      {
        "iata": "CNF",
        "name": "Tancredo Neves International Airport",
        "city": "Belo Horizonte",
        "country": "BR"
      },
      {
        "iata": "CGR",
        "name": "Campo Grande Airport",
        "city": "Campo Grande",
        "country": "BR"
      },
      {
        "iata": "XAP",
        "name": "Chapeco Airport",
        "city": "Chapeco",
        "country": "BR"
      },
      {
        "iata": "CLN",
        "name": "Brig. Lysias Augusto Rodrigues Airport",
        "city": "Carolina",
        "country": "BR"
      },
      {
        "iata": "CKS",
        "name": "Carajas Airport",
        "city": "Carajas",
        "country": "BR"
      },
      {
        "iata": "CCM",
        "name": "Forquilhinha - Criciuma Airport",
        "city": "Criciuma",
        "country": "BR"
      },
      {
        "iata": "CLV",
        "name": "Caldas Novas Airport",
        "city": "Caldas Novas",
        "country": "BR"
      },
      {
        "iata": "QNS",
        "name": "Canoas Airport",
        "city": "Porto Alegre",
        "country": "BR"
      },
      {
        "iata": "CAW",
        "name": "Bartolomeu Lisandro Airport",
        "city": "Campos Dos Goytacazes",
        "country": "BR"
      },
      {
        "iata": "CMG",
        "name": "Corumba International Airport",
        "city": "Corumba",
        "country": "BR"
      },
      {
        "iata": "CWB",
        "name": "Afonso Pena Airport",
        "city": "Curitiba",
        "country": "BR"
      },
      {
        "iata": "CRQ",
        "name": "Caravelas Airport",
        "city": "Caravelas",
        "country": "BR"
      },
      {
        "iata": "CXJ",
        "name": "Campo dos Bugres Airport",
        "city": "Caxias Do Sul",
        "country": "BR"
      },
      {
        "iata": "CGB",
        "name": "Marechal Rondon Airport",
        "city": "Cuiaba",
        "country": "BR"
      },
      {
        "iata": "CZS",
        "name": "Cruzeiro do Sul Airport",
        "city": "Cruzeiro Do Sul",
        "country": "BR"
      },
      {
        "iata": "PPB",
        "name": "Presidente Prudente Airport",
        "city": "Presidente Prudente",
        "country": "BR"
      },
      {
        "iata": "MAO",
        "name": "Eduardo Gomes International Airport",
        "city": "Manaus",
        "country": "BR"
      },
      {
        "iata": "JCR",
        "name": "Jacareacanga Airport",
        "city": "Jacareacanga",
        "country": "BR"
      },
      {
        "iata": "ESI",
        "name": "Espinosa Airport",
        "city": "Espinosa",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Sao Pedro da Aldeia Airport",
        "city": "Sao Pedro Da Aldeia",
        "country": "BR"
      },
      {
        "iata": "IGU",
        "name": "Cataratas International Airport",
        "city": "Foz Do Iguacu",
        "country": "BR"
      },
      {
        "iata": "FLN",
        "name": "Hercilio Luz International Airport",
        "city": "Florianopolis",
        "country": "BR"
      },
      {
        "iata": "FEN",
        "name": "Fernando de Noronha Airport",
        "city": "Fernando De Noronha",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Furnas Airport",
        "city": "Sao Jose Da Barra",
        "country": "BR"
      },
      {
        "iata": "FOR",
        "name": "Pinto Martins International Airport",
        "city": "Fortaleza",
        "country": "BR"
      },
      {
        "iata": "GIG",
        "name": "Galeao - Antonio Carlos Jobim International Airport",
        "city": "Rio De Janeiro",
        "country": "BR"
      },
      {
        "iata": "GJM",
        "name": "Guajara-Mirim Airport",
        "city": "Guajara-Mirim",
        "country": "BR"
      },
      {
        "iata": "GYN",
        "name": "Santa Genoveva Airport",
        "city": "Goiania",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "EMBRAER - Unidade Gaviao Peixoto Airport",
        "city": "Gaviao Peixoto",
        "country": "BR"
      },
      {
        "iata": "GRU",
        "name": "Guarulhos - Governador Andre Franco Montoro International Airport",
        "city": "Sao Paulo",
        "country": "BR"
      },
      {
        "iata": "GPB",
        "name": "Tancredo Thomas de Faria Airport",
        "city": "Guarapuava",
        "country": "BR"
      },
      {
        "iata": "GVR",
        "name": "Governador Valadares Airport",
        "city": "Governador Valadares",
        "country": "BR"
      },
      {
        "iata": "GUJ",
        "name": "Guaratingueta Airport",
        "city": "Guaratingueta",
        "country": "BR"
      },
      {
        "iata": "ATM",
        "name": "Altamira Airport",
        "city": "Altamira",
        "country": "BR"
      },
      {
        "iata": "ITA",
        "name": "Itacoatiara Airport",
        "city": "Itacoatiara",
        "country": "BR"
      },
      {
        "iata": "ITB",
        "name": "Itaituba Airport",
        "city": "Itaituba",
        "country": "BR"
      },
      {
        "iata": "IOS",
        "name": "Bahia - Jorge Amado Airport",
        "city": "Ilheus",
        "country": "BR"
      },
      {
        "iata": "IPN",
        "name": "Usiminas Airport",
        "city": "Ipatinga",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Hidroeletrica Airport",
        "city": "Itumbiara",
        "country": "BR"
      },
      {
        "iata": "IMP",
        "name": "Prefeito Renato Moreira Airport",
        "city": "Imperatriz",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Julio Cesar Airport",
        "city": "Belem",
        "country": "BR"
      },
      {
        "iata": "JJD",
        "name": "Comte. Ariston Pessoa Regional Airport",
        "city": "Jijoca de Jericoacoara",
        "country": "BR"
      },
      {
        "iata": "JDF",
        "name": "Francisco de Assis Airport",
        "city": "Juiz De Fora",
        "country": "BR"
      },
      {
        "iata": "JPA",
        "name": "Presidente Castro Pinto Airport",
        "city": "Joao Pessoa",
        "country": "BR"
      },
      {
        "iata": "JDO",
        "name": "Orlando Bezerra de Menezes Airport",
        "city": "Juazeiro Do Norte",
        "country": "BR"
      },
      {
        "iata": "JOI",
        "name": "Lauro Carneiro de Loyola Airport",
        "city": "Joinville",
        "country": "BR"
      },
      {
        "iata": "CPV",
        "name": "Presidente Joao Suassuna Airport",
        "city": "Campina Grande",
        "country": "BR"
      },
      {
        "iata": "VCP",
        "name": "Viracopos International Airport",
        "city": "Campinas",
        "country": "BR"
      },
      {
        "iata": "LEC",
        "name": "Chapada Diamantina Airport",
        "city": "Lencois",
        "country": "BR"
      },
      {
        "iata": "LAJ",
        "name": "Lages Airport",
        "city": "Lages",
        "country": "BR"
      },
      {
        "iata": "LIP",
        "name": "Lins Airport",
        "city": "Lins",
        "country": "BR"
      },
      {
        "iata": "LDB",
        "name": "Governador Jose Richa Airport",
        "city": "Londrina",
        "country": "BR"
      },
      {
        "iata": "LAZ",
        "name": "Bom Jesus da Lapa Airport",
        "city": "Bom Jesus Da Lapa",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Lagoa Santa Airport",
        "city": "Lagoa Santa",
        "country": "BR"
      },
      {
        "iata": "MAB",
        "name": "Maraba Airport",
        "city": "Maraba",
        "country": "BR"
      },
      {
        "iata": "MQH",
        "name": "Minacu Airport",
        "city": "Minacu",
        "country": "BR"
      },
      {
        "iata": "MEU",
        "name": "Monte Dourado Airport",
        "city": "Almeirim",
        "country": "BR"
      },
      {
        "iata": "MEA",
        "name": "Macae Airport",
        "city": "Macae",
        "country": "BR"
      },
      {
        "iata": "MGF",
        "name": "Regional de Maringa - Silvio Nane Junior Airport",
        "city": "Maringa",
        "country": "BR"
      },
      {
        "iata": "MOC",
        "name": "Mario Ribeiro Airport",
        "city": "Montes Claros",
        "country": "BR"
      },
      {
        "iata": "MII",
        "name": "Marilia Airport",
        "city": "Marilia",
        "country": "BR"
      },
      {
        "iata": "PLL",
        "name": "Ponta Pelada Airport",
        "city": "Manaus",
        "country": "BR"
      },
      {
        "iata": "MCZ",
        "name": "Zumbi dos Palmares Airport",
        "city": "Maceio",
        "country": "BR"
      },
      {
        "iata": "MCP",
        "name": "Alberto Alcolumbre Airport",
        "city": "Macapa",
        "country": "BR"
      },
      {
        "iata": "MVF",
        "name": "Dix-Sept Rosado Airport",
        "city": "Mossoro",
        "country": "BR"
      },
      {
        "iata": "SAO",
        "name": "Campo de Marte Airport",
        "city": "Sao Paulo",
        "country": "BR"
      },
      {
        "iata": "MNX",
        "name": "Manicore Airport",
        "city": "Manicore",
        "country": "BR"
      },
      {
        "iata": "NVT",
        "name": "Ministro Victor Konder International Airport",
        "city": "Navegantes",
        "country": "BR"
      },
      {
        "iata": "GEL",
        "name": "Santo Angelo Airport",
        "city": "Santo Angelo",
        "country": "BR"
      },
      {
        "iata": "NAT",
        "name": "Augusto Severo Airport",
        "city": "Natal",
        "country": "BR"
      },
      {
        "iata": "OYK",
        "name": "Oiapoque Airport",
        "city": "Oiapoque",
        "country": "BR"
      },
      {
        "iata": "POA",
        "name": "Salgado Filho Airport",
        "city": "Porto Alegre",
        "country": "BR"
      },
      {
        "iata": "PHB",
        "name": "Prefeito Doutor Joao Silva Filho Airport",
        "city": "Parnaiba",
        "country": "BR"
      },
      {
        "iata": "POO",
        "name": "Pocos de Caldas Airport",
        "city": "Pocos De Caldas",
        "country": "BR"
      },
      {
        "iata": "PFB",
        "name": "Lauro Kurtz Airport",
        "city": "Passo Fundo",
        "country": "BR"
      },
      {
        "iata": "PMW",
        "name": "Brigadeiro Lysias Rodrigues Airport",
        "city": "Palmas",
        "country": "BR"
      },
      {
        "iata": "PET",
        "name": "Pelotas Airport",
        "city": "Pelotas",
        "country": "BR"
      },
      {
        "iata": "PNZ",
        "name": "Senador Nilo Coelho Airport",
        "city": "Petrolina",
        "country": "BR"
      },
      {
        "iata": "PNB",
        "name": "Porto Nacional Airport",
        "city": "Porto Nacional",
        "country": "BR"
      },
      {
        "iata": "PMG",
        "name": "Ponta Pora Airport",
        "city": "Ponta Pora",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Carlos Prates Airport",
        "city": "Belo Horizonte",
        "country": "BR"
      },
      {
        "iata": "BPS",
        "name": "Porto Seguro Airport",
        "city": "Porto Seguro",
        "country": "BR"
      },
      {
        "iata": "PVH",
        "name": "Governador Jorge Teixeira de Oliveira Airport",
        "city": "Porto Velho",
        "country": "BR"
      },
      {
        "iata": "VDC",
        "name": "Vitoria da Conquista Airport",
        "city": "Vitoria Da Conquista",
        "country": "BR"
      },
      {
        "iata": "RBR",
        "name": "Placido de Castro Airport",
        "city": "Rio Branco",
        "country": "BR"
      },
      {
        "iata": "REC",
        "name": "Guararapes - Gilberto Freyre International Airport",
        "city": "Recife",
        "country": "BR"
      },
      {
        "iata": "SDU",
        "name": "Santos Dumont Airport",
        "city": "Rio De Janeiro",
        "country": "BR"
      },
      {
        "iata": "RAO",
        "name": "Leite Lopes Airport",
        "city": "Ribeirao Preto",
        "country": "BR"
      },
      {
        "iata": "BRB",
        "name": "Barreirinhas Airport",
        "city": "",
        "country": "BR"
      },
      {
        "iata": "SNZ",
        "name": "Santa Cruz Airport",
        "city": "Rio De Janeiro",
        "country": "BR"
      },
      {
        "iata": "SJK",
        "name": "Professor Urbano Ernesto Stumpf Airport",
        "city": "Sao Jose Dos Campos",
        "country": "BR"
      },
      {
        "iata": "SLZ",
        "name": "Marechal Cunha Machado International Airport",
        "city": "Sao Luis",
        "country": "BR"
      },
      {
        "iata": "RIA",
        "name": "Santa Maria Airport",
        "city": "Santa Maria",
        "country": "BR"
      },
      {
        "iata": "STM",
        "name": "Maestro Wilson Fonseca Airport",
        "city": "Santarem",
        "country": "BR"
      },
      {
        "iata": "CGH",
        "name": "Congonhas Airport",
        "city": "Sao Paulo",
        "country": "BR"
      },
      {
        "iata": "SJP",
        "name": "Sao Jose do Rio Preto Airport",
        "city": "Sao Jose Do Rio Preto",
        "country": "BR"
      },
      {
        "iata": "SSZ",
        "name": "Base Aerea de Santos Airport",
        "city": "Guaruja",
        "country": "BR"
      },
      {
        "iata": "SSA",
        "name": "Deputado Luiz Eduardo Magalhaes International Airport",
        "city": "Salvador",
        "country": "BR"
      },
      {
        "iata": "QHP",
        "name": "Base de Aviacao de Taubate Airport",
        "city": "Taubate",
        "country": "BR"
      },
      {
        "iata": "TMT",
        "name": "Trombetas Airport",
        "city": "Oriximina",
        "country": "BR"
      },
      {
        "iata": "UNA",
        "name": "Hotel Transamerica Airport",
        "city": "Una",
        "country": "BR"
      },
      {
        "iata": "TOW",
        "name": "Toledo Airport",
        "city": "Toledo",
        "country": "BR"
      },
      {
        "iata": "THE",
        "name": "Senador Petronio Portela Airport",
        "city": "Teresina",
        "country": "BR"
      },
      {
        "iata": "TFF",
        "name": "Tefe Airport",
        "city": "Tefe",
        "country": "BR"
      },
      {
        "iata": "TJL",
        "name": "Plinio Alarcom Airport",
        "city": "Tres Lagoas",
        "country": "BR"
      },
      {
        "iata": "TRQ",
        "name": "Tarauaca Airport",
        "city": "Tarauaca",
        "country": "BR"
      },
      {
        "iata": "TEC",
        "name": "Telemaco Borba Airport",
        "city": "Telemaco Borba",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Torres Airport",
        "city": "Torres",
        "country": "BR"
      },
      {
        "iata": "TBT",
        "name": "Tabatinga Airport",
        "city": "Tabatinga",
        "country": "BR"
      },
      {
        "iata": "TUR",
        "name": "Tucurui Airport",
        "city": "Tucurui",
        "country": "BR"
      },
      {
        "iata": "SJL",
        "name": "Sao Gabriel da Cachoeira Airport",
        "city": "Sao Gabriel Da Cachoeira",
        "country": "BR"
      },
      {
        "iata": "PAV",
        "name": "Paulo Afonso Airport",
        "city": "Paulo Afonso",
        "country": "BR"
      },
      {
        "iata": "URG",
        "name": "Rubem Berta Airport",
        "city": "Uruguaiana",
        "country": "BR"
      },
      {
        "iata": "UDI",
        "name": "Ten. Cel. Aviador Cesar Bombonato Airport",
        "city": "Uberlandia",
        "country": "BR"
      },
      {
        "iata": "UBA",
        "name": "Mario de Almeida Franco Airport",
        "city": "Uberaba",
        "country": "BR"
      },
      {
        "iata": "VAG",
        "name": "Major Brigadeiro Trompowsky Airport",
        "city": "Varginha",
        "country": "BR"
      },
      {
        "iata": "BVH",
        "name": "Vilhena Airport",
        "city": "Vilhena",
        "country": "BR"
      },
      {
        "iata": "VIX",
        "name": "Eurico de Aguiar Salles Airport",
        "city": "Vitoria",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Iauarete Airport",
        "city": "Sao Gabriel Da Cachoeira",
        "country": "BR"
      },
      {
        "iata": "QPS",
        "name": "Campo Fontenelle Airport",
        "city": "Pirassununga",
        "country": "BR"
      },
      {
        "iata": "IZA",
        "name": "Zona da Mata Regional Airport",
        "city": "Juiz De Fora",
        "country": "BR"
      },
      {
        "iata": "ZUD",
        "name": "Pupelde Airport",
        "city": "Ancud",
        "country": "CL"
      },
      {
        "iata": "LOB",
        "name": "San Rafael Airport",
        "city": "Los Andes",
        "country": "CL"
      },
      {
        "iata": "WAP",
        "name": "Alto Palena Airport",
        "city": "Alto Palena",
        "country": "CL"
      },
      {
        "iata": "ARI",
        "name": "Chacalluta Airport",
        "city": "Arica",
        "country": "CL"
      },
      {
        "iata": "WPA",
        "name": "Cabo 1° Juan Roman Airport",
        "city": "Puerto Aysen",
        "country": "CL"
      },
      {
        "iata": "CPO",
        "name": "Desierto de Atacama Airport",
        "city": "Copiapo",
        "country": "CL"
      },
      {
        "iata": "BBA",
        "name": "Balmaceda Airport",
        "city": "Balmaceda",
        "country": "CL"
      },
      {
        "iata": "TOQ",
        "name": "Barriles Airport",
        "city": "Tocopilla",
        "country": "CL"
      },
      {
        "iata": "CCH",
        "name": "Chile Chico Airport",
        "city": "Chile Chico",
        "country": "CL"
      },
      {
        "iata": "CJC",
        "name": "El Loa Airport",
        "city": "Calama",
        "country": "CL"
      },
      {
        "iata": "YAI",
        "name": "Gral. Bernardo O´Higgins Airport",
        "city": "Chillan",
        "country": "CL"
      },
      {
        "iata": "PUQ",
        "name": "Pdte. Carlos Ibanez del Campo Airport",
        "city": "Punta Arenas",
        "country": "CL"
      },
      {
        "iata": "COW",
        "name": "Tambillos Airport",
        "city": "Coquimbo",
        "country": "CL"
      },
      {
        "iata": "GXQ",
        "name": "Teniente Vidal Airport",
        "city": "Coyhaique",
        "country": "CL"
      },
      {
        "iata": "IQQ",
        "name": "Diego Aracena Airport",
        "city": "Iquique",
        "country": "CL"
      },
      {
        "iata": "SCL",
        "name": "Comodoro Arturo Merino Benitez International Airport",
        "city": "Santiago",
        "country": "CL"
      },
      {
        "iata": "ESR",
        "name": "Ricardo Garcia Posada Airport",
        "city": "El Salvador",
        "country": "CL"
      },
      {
        "iata": "FRT",
        "name": "El Avellano Airport",
        "city": "Frutillar",
        "country": "CL"
      },
      {
        "iata": "ANF",
        "name": "Cerro Moreno Airport",
        "city": "Antofagasta",
        "country": "CL"
      },
      {
        "iata": "WPR",
        "name": "Capitan Fuentes Martinez Airport Airport",
        "city": "Porvenir",
        "country": "CL"
      },
      {
        "iata": "FFU",
        "name": "Futaleufu Airport",
        "city": "Futaleufu",
        "country": "CL"
      },
      {
        "iata": "LSQ",
        "name": "Maria Dolores Airport",
        "city": "Los Angeles",
        "country": "CL"
      },
      {
        "iata": "WPU",
        "name": "Guardiamarina Zanartu Airport",
        "city": "Puerto Williams",
        "country": "CL"
      },
      {
        "iata": "LGR",
        "name": "Cochrane Airport",
        "city": "Cochrane",
        "country": "CL"
      },
      {
        "iata": "CCP",
        "name": "Carriel Sur Airport",
        "city": "Concepcion",
        "country": "CL"
      },
      {
        "iata": "IPC",
        "name": "Mataveri Airport",
        "city": "Isla De Pascua",
        "country": "CL"
      },
      {
        "iata": "ZOS",
        "name": "Canal Bajo Carlos - Hott Siebert Airport",
        "city": "Osorno",
        "country": "CL"
      },
      {
        "iata": "VLR",
        "name": "Vallenar Airport",
        "city": "Vallenar",
        "country": "CL"
      },
      {
        "iata": "ZLR",
        "name": "Municipal de Linares Airport",
        "city": "Linares",
        "country": "CL"
      },
      {
        "iata": "PNT",
        "name": "Tte. Julio Gallardo Airport",
        "city": "Puerto Natales",
        "country": "CL"
      },
      {
        "iata": "OVL",
        "name": "El Tuqui Airport",
        "city": "Ovalle",
        "country": "CL"
      },
      {
        "iata": "ZPC",
        "name": "Pucon Airport",
        "city": "Pucon",
        "country": "CL"
      },
      {
        "iata": "MHC",
        "name": "Mocopulli Airport",
        "city": "Dalcahue",
        "country": "CL"
      },
      {
        "iata": "PUX",
        "name": "El Mirador Airport",
        "city": "Puerto Varas",
        "country": "CL"
      },
      {
        "iata": "CNR",
        "name": "Chanaral Airport",
        "city": "Chanaral",
        "country": "CL"
      },
      {
        "iata": "VAP",
        "name": "Rodelillo Airport",
        "city": "Vina Del Mar",
        "country": "CL"
      },
      {
        "iata": "QRC",
        "name": "De La Independencia Airport",
        "city": "Rancagua",
        "country": "CL"
      },
      {
        "iata": "TNM",
        "name": "Teniente Rodolfo Marsh Martin Base",
        "city": "Isla Rey Jorge",
        "country": "AQ"
      },
      {
        "iata": "SMB",
        "name": "Franco Bianco Airport",
        "city": "Cerro Sombrero",
        "country": "CL"
      },
      {
        "iata": "LSC",
        "name": "La Florida Airport",
        "city": "La Serena-Coquimbo",
        "country": "CL"
      },
      {
        "iata": "SSD",
        "name": "Victor Lafon Airport",
        "city": "San Felipe",
        "country": "CL"
      },
      {
        "iata": "WCA",
        "name": "Gamboa Airport",
        "city": "Castro",
        "country": "CL"
      },
      {
        "iata": "ZCO",
        "name": "Maquehue Airport",
        "city": "Temuco",
        "country": "CL"
      },
      {
        "iata": "PMC",
        "name": "El Tepual Airport",
        "city": "Puerto Montt",
        "country": "CL"
      },
      {
        "iata": "TLX",
        "name": "Panguilemo Airport",
        "city": "Talca",
        "country": "CL"
      },
      {
        "iata": "WCH",
        "name": "Chaiten Airport",
        "city": "Chaiten",
        "country": "CL"
      },
      {
        "iata": "ZIC",
        "name": "Victoria Airport",
        "city": "Victoria",
        "country": "CL"
      },
      {
        "iata": "TTC",
        "name": "Las Breas Airport",
        "city": "Taltal",
        "country": "CL"
      },
      {
        "iata": "ZAL",
        "name": "Pichoy Airport",
        "city": "Valdivia",
        "country": "CL"
      },
      {
        "iata": "KNA",
        "name": "Vina del mar Airport",
        "city": "Vina Del Mar",
        "country": "CL"
      },
      {
        "iata": "CPQ",
        "name": "Amarais Airport",
        "city": "Campinas",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Fazenda Altair Airport",
        "city": "Santa Ernestina",
        "country": "BR"
      },
      {
        "iata": "QCJ",
        "name": "Botucatu Airport",
        "city": "Botucatu",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Bariri Airport",
        "city": "Bariri",
        "country": "BR"
      },
      {
        "iata": "OLC",
        "name": "Senadora Eunice Micheles Airport",
        "city": "Sao Paulo De Olivenca",
        "country": "BR"
      },
      {
        "iata": "SOD",
        "name": "Sorocaba Airport",
        "city": "Sorocaba",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Fazenda Santa Maria Airport",
        "city": "Moncoes",
        "country": "BR"
      },
      {
        "iata": "QDC",
        "name": "Dracena Airport",
        "city": "Dracena",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Usina Catanduva Airport",
        "city": "Palmares Paulista",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Fazenda Brumado Airport",
        "city": "Barretos",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Fazenda Constancia Airport",
        "city": "Altair",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Garca Airport",
        "city": "Garca",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Jaboticabal Airport",
        "city": "Jaboticabal",
        "country": "BR"
      },
      {
        "iata": "JLS",
        "name": "Jales Airport",
        "city": "Jales",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Sao Joaquim da Barra Airport",
        "city": "Sao Joaquim Da Barra",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Fazenda Barra do Agudo Airport",
        "city": "Morro Agudo",
        "country": "BR"
      },
      {
        "iata": "QOA",
        "name": "Mococa Airport",
        "city": "Mococa",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Lucelia Airport",
        "city": "Lucelia",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Leme Airport",
        "city": "Leme",
        "country": "BR"
      },
      {
        "iata": "QGC",
        "name": "Lencois Paulista Airport",
        "city": "Lencois Paulista",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Matao Airport",
        "city": "Matao",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Mirassol Airport",
        "city": "Mirassol",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Mogi Mirim Airport",
        "city": "Mogi Mirim",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Novo Horizonte Airport",
        "city": "Novo Horizonte",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Fazenda Sao Francisco do Itaquere Airport",
        "city": "Nova Europa",
        "country": "BR"
      },
      {
        "iata": "QNV",
        "name": "Aeroclube Airport",
        "city": "Nova Iguacu",
        "country": "BR"
      },
      {
        "iata": "OUS",
        "name": "Ourinhos Airport",
        "city": "Ourinhos",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Presidente Venceslau Airport",
        "city": "Presidente Venceslau",
        "country": "BR"
      },
      {
        "iata": "QHB",
        "name": "Piracicaba Airport",
        "city": "Piracicaba",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Fazenda das Represas Airport",
        "city": "Sao Miguel Arcanjo",
        "country": "BR"
      },
      {
        "iata": "QIQ",
        "name": "Rio Claro Airport",
        "city": "Rio Claro",
        "country": "BR"
      },
      {
        "iata": "QVP",
        "name": "Avare-Arandu Airport",
        "city": "Avare",
        "country": "BR"
      },
      {
        "iata": "QRZ",
        "name": "Resende Airport",
        "city": "Resende",
        "country": "BR"
      },
      {
        "iata": "QSC",
        "name": "Sao Carlos Airport",
        "city": "Sao Carlos",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Fazenda Sao Joao Airport",
        "city": "Orlandia",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Fazenda Cataco Airport",
        "city": "Ubarana",
        "country": "BR"
      },
      {
        "iata": "UBT",
        "name": "Ubatuba Airport",
        "city": "Ubatuba",
        "country": "BR"
      },
      {
        "iata": "QGS",
        "name": "Alagoinhas Airport",
        "city": "Alagoinhas",
        "country": "BR"
      },
      {
        "iata": "VOT",
        "name": "Votuporanga Airport",
        "city": "Votuporanga",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Fazenda Vassoural Airport",
        "city": "Pontal",
        "country": "BR"
      },
      {
        "iata": "QGB",
        "name": "Limeira Airport",
        "city": "Limeira",
        "country": "BR"
      },
      {
        "iata": "ATF",
        "name": "Chachoan Airport",
        "city": "Ambato",
        "country": "EC"
      },
      {
        "iata": "OCC",
        "name": "Francisco De Orellana Airport",
        "city": "Coca",
        "country": "EC"
      },
      {
        "iata": "CUE",
        "name": "Mariscal Lamar Airport",
        "city": "Cuenca",
        "country": "EC"
      },
      {
        "iata": "GPS",
        "name": "Seymour Airport",
        "city": "Baltra",
        "country": "EC"
      },
      {
        "iata": "GYE",
        "name": "Simon Bolivar International Airport",
        "city": "Guayaquil",
        "country": "EC"
      },
      {
        "iata": "IBB",
        "name": "General Villamil Airport",
        "city": "Isabela",
        "country": "EC"
      },
      {
        "iata": "JIP",
        "name": "Jipijapa Airport",
        "city": "Jipijapa",
        "country": "EC"
      },
      {
        "iata": "LTX",
        "name": "Cotopaxi International Airport",
        "city": "Latacunga",
        "country": "EC"
      },
      {
        "iata": "MRR",
        "name": "Jose Maria Velasco Ibarra Airport",
        "city": "Macara",
        "country": "EC"
      },
      {
        "iata": "XMS",
        "name": "Coronel E Carvajal Airport",
        "city": "Macas",
        "country": "EC"
      },
      {
        "iata": "MCH",
        "name": "General Manuel Serrano Airport",
        "city": "Machala",
        "country": "EC"
      },
      {
        "iata": "MEC",
        "name": "Eloy Alfaro International Airport",
        "city": "Manta",
        "country": "EC"
      },
      {
        "iata": "LGQ",
        "name": "Nueva Loja Airport",
        "city": "Lago Agrio",
        "country": "EC"
      },
      {
        "iata": "PYO",
        "name": "Putumayo Airport",
        "city": "Puerto Putumayo",
        "country": "EC"
      },
      {
        "iata": "PVO",
        "name": "Reales Tamarindos Airport",
        "city": "Portoviejo",
        "country": "EC"
      },
      {
        "iata": "UIO",
        "name": "Nuevo Aeropuerto Internacional Mariscal Sucre",
        "city": "Quito",
        "country": "EC"
      },
      {
        "iata": "ETR",
        "name": "Coronel Artilleria Victor Larrea Airport",
        "city": "Santa Rosa",
        "country": "EC"
      },
      {
        "iata": "SNC",
        "name": "General Ulpiano Paez Airport",
        "city": "Salinas",
        "country": "EC"
      },
      {
        "iata": "SUQ",
        "name": "Sucua Airport",
        "city": "Sucua",
        "country": "EC"
      },
      {
        "iata": "PTZ",
        "name": "Rio Amazonas Airport",
        "city": "Shell Mera",
        "country": "EC"
      },
      {
        "iata": "SCY",
        "name": "San Cristobal Airport",
        "city": "San Cristobal",
        "country": "EC"
      },
      {
        "iata": "BHA",
        "name": "Los Perales Airport",
        "city": "Bahia de Caraquez",
        "country": "EC"
      },
      {
        "iata": "TSC",
        "name": "Taisha Airport",
        "city": "Taisha",
        "country": "EC"
      },
      {
        "iata": "TPN",
        "name": "Tiputini Airport",
        "city": "Tiputini",
        "country": "EC"
      },
      {
        "iata": "LOH",
        "name": "Camilo Ponce Enriquez Airport",
        "city": "La Toma (Catamayo)",
        "country": "EC"
      },
      {
        "iata": "ESM",
        "name": "General Rivadeneira Airport",
        "city": "Tachina",
        "country": "EC"
      },
      {
        "iata": "TPC",
        "name": "Tarapoa Airport",
        "city": "Tarapoa",
        "country": "EC"
      },
      {
        "iata": "TUA",
        "name": "Teniente Coronel Luis a Mantilla Airport",
        "city": "Tulcan",
        "country": "EC"
      },
      {
        "iata": "PSY",
        "name": "Stanley Airport",
        "city": "Stanley",
        "country": "FK"
      },
      {
        "iata": "ASU",
        "name": "Silvio Pettirossi International Airport",
        "city": "Asuncion",
        "country": "PY"
      },
      {
        "iata": "AYO",
        "name": "Juan De Ayolas Airport",
        "city": "Ayolas",
        "country": "PY"
      },
      {
        "iata": "BFA",
        "name": "Bahia Negra Airport",
        "city": "Bahia Negra",
        "country": "PY"
      },
      {
        "iata": "CIO",
        "name": "Teniente Col Carmelo Peralta Airport",
        "city": "Concepcion",
        "country": "PY"
      },
      {
        "iata": "ENO",
        "name": "Encarnacion Airport",
        "city": "Encarnacion",
        "country": "PY"
      },
      {
        "iata": "AGT",
        "name": "Guarani International Airport",
        "city": "Ciudad del Este",
        "country": "PY"
      },
      {
        "iata": "FLM",
        "name": "Filadelfia Airport",
        "city": "Filadelfia",
        "country": "PY"
      },
      {
        "iata": "ESG",
        "name": "Dr. Luis Maria Argana International Airport",
        "city": "Mariscal Estigarribia",
        "country": "PY"
      },
      {
        "iata": "OLK",
        "name": "Fuerte Olimpo Airport",
        "city": "Fuerte Olimpo",
        "country": "PY"
      },
      {
        "iata": "PIL",
        "name": "Carlos Miguel Gimenez Airport",
        "city": "Pilar",
        "country": "PY"
      },
      {
        "iata": "PJC",
        "name": "Dr Augusto Roberto Fuster International Airport",
        "city": "Pedro Juan Caballero",
        "country": "PY"
      },
      {
        "iata": "0",
        "name": "Fazenda Palmital Airport",
        "city": "Morro Agudo",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Doutor Heraclito da Motta Luiz Airport",
        "city": "Guaira",
        "country": "BR"
      },
      {
        "iata": "LVR",
        "name": "Municipal Bom Futuro Airport",
        "city": "Lucas do Rio Verde",
        "country": "BR"
      },
      {
        "iata": "FRC",
        "name": "Franca Airport",
        "city": "Franca",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Santa Paula Airport",
        "city": "Ipigua",
        "country": "BR"
      },
      {
        "iata": "CFO",
        "name": "Confresa Airport",
        "city": "Confresa",
        "country": "BR"
      },
      {
        "iata": "RIG",
        "name": "Rio Grande Airport",
        "city": "Rio Grande",
        "country": "BR"
      },
      {
        "iata": "ACR",
        "name": "Araracuara Airport",
        "city": "Araracuara",
        "country": "CO"
      },
      {
        "iata": "ACD",
        "name": "Alcides Fernandez Airport",
        "city": "Acandi",
        "country": "CO"
      },
      {
        "iata": "AFI",
        "name": "Amalfi Airport",
        "city": "Amalfi",
        "country": "CO"
      },
      {
        "iata": "ADN",
        "name": "Andes Airport",
        "city": "Andes",
        "country": "CO"
      },
      {
        "iata": "API",
        "name": "Gomez Nino Apiay Air Base",
        "city": "Apiay",
        "country": "CO"
      },
      {
        "iata": "AXM",
        "name": "El Eden Airport",
        "city": "Armenia",
        "country": "CO"
      },
      {
        "iata": "PUU",
        "name": "Tres De Mayo Airport",
        "city": "Puerto Asis",
        "country": "CO"
      },
      {
        "iata": "ELB",
        "name": "Las Flores Airport",
        "city": "El Banco",
        "country": "CO"
      },
      {
        "iata": "BGA",
        "name": "Palonegro Airport",
        "city": "Bucaramanga",
        "country": "CO"
      },
      {
        "iata": "BOG",
        "name": "El Dorado International Airport",
        "city": "Bogota",
        "country": "CO"
      },
      {
        "iata": "BAQ",
        "name": "Ernesto Cortissoz International Airport",
        "city": "Barranquilla",
        "country": "CO"
      },
      {
        "iata": "BSC",
        "name": "Jose Celestino Mutis Airport",
        "city": "Bahia Solano",
        "country": "CO"
      },
      {
        "iata": "BUN",
        "name": "Gerardo Tobar Lopez Airport",
        "city": "Buenaventura",
        "country": "CO"
      },
      {
        "iata": "CPB",
        "name": "Capurgana Airport",
        "city": "Capurgana",
        "country": "CO"
      },
      {
        "iata": "CUC",
        "name": "Camilo Daza International Airport",
        "city": "Cucuta",
        "country": "CO"
      },
      {
        "iata": "COG",
        "name": "Mandinga Airport",
        "city": "Condoto",
        "country": "CO"
      },
      {
        "iata": "CTG",
        "name": "Rafael Nunez International Airport",
        "city": "Cartagena",
        "country": "CO"
      },
      {
        "iata": "CCO",
        "name": "Carimagua Airport",
        "city": "Puerto Lopez",
        "country": "CO"
      },
      {
        "iata": "CLO",
        "name": "Alfonso Bonilla Aragon International Airport",
        "city": "Cali",
        "country": "CO"
      },
      {
        "iata": "CIM",
        "name": "Cimitarra Airport",
        "city": "Cimitarra",
        "country": "CO"
      },
      {
        "iata": "RAV",
        "name": "Cravo Norte Airport",
        "city": "Cravo Norte",
        "country": "CO"
      },
      {
        "iata": "TCO",
        "name": "La Florida Airport",
        "city": "Tumaco",
        "country": "CO"
      },
      {
        "iata": "CUO",
        "name": "Caruru Airport",
        "city": "Caruru",
        "country": "CO"
      },
      {
        "iata": "CAQ",
        "name": "Juan H White Airport",
        "city": "Caucasia",
        "country": "CO"
      },
      {
        "iata": "CVE",
        "name": "Covenas Airport",
        "city": "Covenas",
        "country": "CO"
      },
      {
        "iata": "CZU",
        "name": "Las Brujas Airport",
        "city": "Corozal",
        "country": "CO"
      },
      {
        "iata": "EBG",
        "name": "El Bagre Airport",
        "city": "El Bagre",
        "country": "CO"
      },
      {
        "iata": "EJA",
        "name": "Yariguies Airport",
        "city": "Barrancabermeja",
        "country": "CO"
      },
      {
        "iata": "FLA",
        "name": "Gustavo Artunduaga Paredes Airport",
        "city": "Florencia",
        "country": "CO"
      },
      {
        "iata": "FDA",
        "name": "Fundacion Airport",
        "city": "Fundacion",
        "country": "CO"
      },
      {
        "iata": "GIR",
        "name": "Santiago Vila Airport",
        "city": "Girardot",
        "country": "CO"
      },
      {
        "iata": "CRC",
        "name": "Santa Ana Airport",
        "city": "Cartago",
        "country": "CO"
      },
      {
        "iata": "GPI",
        "name": "Juan Casiano Airport",
        "city": "Guapi",
        "country": "CO"
      },
      {
        "iata": "GLJ",
        "name": "Garzon La Jagua Airport",
        "city": "Garzon",
        "country": "CO"
      },
      {
        "iata": "CPL",
        "name": "Chaparral Airport",
        "city": "Chaparral",
        "country": "CO"
      },
      {
        "iata": "HTZ",
        "name": "Hato Corozal Airport",
        "city": "Hato Corozal",
        "country": "CO"
      },
      {
        "iata": "IBE",
        "name": "Perales Airport",
        "city": "Ibague",
        "country": "CO"
      },
      {
        "iata": "IGO",
        "name": "Chigorodo Airport",
        "city": "Chigorodo",
        "country": "CO"
      },
      {
        "iata": "MMP",
        "name": "Cicuco Airport",
        "city": "Limon",
        "country": "CO"
      },
      {
        "iata": "IPI",
        "name": "San Luis Airport",
        "city": "Ipiales",
        "country": "CO"
      },
      {
        "iata": "LQM",
        "name": "Caucaya Airport",
        "city": "Puerto Leguizamo",
        "country": "CO"
      },
      {
        "iata": "MCJ",
        "name": "Jorge Isaac Airport",
        "city": "La Mina-Maicao",
        "country": "CO"
      },
      {
        "iata": "LPD",
        "name": "La Pedrera Airport",
        "city": "La Pedrera",
        "country": "CO"
      },
      {
        "iata": "LET",
        "name": "Alfredo Vasquez Cobo International Airport",
        "city": "Leticia",
        "country": "CO"
      },
      {
        "iata": "EOH",
        "name": "Enrique Olaya Herrera Airport",
        "city": "Medellin",
        "country": "CO"
      },
      {
        "iata": "MFS",
        "name": "Miraflores Airport",
        "city": "Miraflores",
        "country": "CO"
      },
      {
        "iata": "MGN",
        "name": "Baracoa Airport",
        "city": "Magangue",
        "country": "CO"
      },
      {
        "iata": "MTB",
        "name": "Montelibano Airport",
        "city": "Montelibano",
        "country": "CO"
      },
      {
        "iata": "MTR",
        "name": "Los Garzones Airport",
        "city": "Monteria",
        "country": "CO"
      },
      {
        "iata": "MVP",
        "name": "Fabio Alberto Leon Bentley Airport",
        "city": "Mitu",
        "country": "CO"
      },
      {
        "iata": "MZL",
        "name": "La Nubia Airport",
        "city": "Manizales",
        "country": "CO"
      },
      {
        "iata": "NCI",
        "name": "Necocli Airport",
        "city": "Necocli",
        "country": "CO"
      },
      {
        "iata": "NQU",
        "name": "Reyes Murillo Airport",
        "city": "Nuqui",
        "country": "CO"
      },
      {
        "iata": "NVA",
        "name": "Benito Salas Airport",
        "city": "Neiva",
        "country": "CO"
      },
      {
        "iata": "OCV",
        "name": "Aguas Claras Airport",
        "city": "Ocana",
        "country": "CO"
      },
      {
        "iata": "ORC",
        "name": "Orocue Airport",
        "city": "Orocue",
        "country": "CO"
      },
      {
        "iata": "PCR",
        "name": "German Olano Airport",
        "city": "Puerto Carreno",
        "country": "CO"
      },
      {
        "iata": "PDA",
        "name": "Obando Airport",
        "city": "Puerto Inirida",
        "country": "CO"
      },
      {
        "iata": "PEI",
        "name": "Matecana International Airport",
        "city": "Pereira",
        "country": "CO"
      },
      {
        "iata": "PTX",
        "name": "Pitalito Airport",
        "city": "Pitalito",
        "country": "CO"
      },
      {
        "iata": "PLT",
        "name": "Plato Airport",
        "city": "Plato",
        "country": "CO"
      },
      {
        "iata": "NAR",
        "name": "Puerto Nare Airport",
        "city": "Armenia",
        "country": "CO"
      },
      {
        "iata": "PPN",
        "name": "Guillermo Leon Valencia Airport",
        "city": "Popayan",
        "country": "CO"
      },
      {
        "iata": "PQE",
        "name": "German Olano Air Base",
        "city": "La Dorada",
        "country": "CO"
      },
      {
        "iata": "PBE",
        "name": "Puerto Berrio Airport",
        "city": "Puerto Berrio",
        "country": "CO"
      },
      {
        "iata": "PSO",
        "name": "Antonio Narino Airport",
        "city": "Pasto",
        "country": "CO"
      },
      {
        "iata": "PVA",
        "name": "El Embrujo Airport",
        "city": "Providencia",
        "country": "CO"
      },
      {
        "iata": "PZA",
        "name": "Paz De Ariporo Airport",
        "city": "Paz De Ariporo",
        "country": "CO"
      },
      {
        "iata": "MQU",
        "name": "Jose Celestino Mutis Airport",
        "city": "Mariquita",
        "country": "CO"
      },
      {
        "iata": "MDE",
        "name": "Jose Maria Cordova International Airport",
        "city": "Rionegro",
        "country": "CO"
      },
      {
        "iata": "RCH",
        "name": "Almirante Padilla Airport",
        "city": "Riohacha",
        "country": "CO"
      },
      {
        "iata": "SJE",
        "name": "Jorge E. Gonzalez Torres Airport",
        "city": "San Jose Del Guaviare",
        "country": "CO"
      },
      {
        "iata": "SMR",
        "name": "Simon Bolivar International Airport",
        "city": "Santa Marta",
        "country": "CO"
      },
      {
        "iata": "SOX",
        "name": "Alberto Lleras Camargo Airport",
        "city": "Sogamoso",
        "country": "CO"
      },
      {
        "iata": "ADZ",
        "name": "Gustavo Rojas Pinilla International Airport",
        "city": "San Andres",
        "country": "CO"
      },
      {
        "iata": "SVI",
        "name": "Eduardo Falla Solano Airport",
        "city": "San Vicente Del Caguan",
        "country": "CO"
      },
      {
        "iata": "TAU",
        "name": "Tauramena Airport",
        "city": "Tauramena",
        "country": "CO"
      },
      {
        "iata": "TIB",
        "name": "Tibu Airport",
        "city": "Tibu",
        "country": "CO"
      },
      {
        "iata": "TDA",
        "name": "Trinidad Airport",
        "city": "Trinidad",
        "country": "CO"
      },
      {
        "iata": "TLU",
        "name": "Tolu Airport",
        "city": "Tolu",
        "country": "CO"
      },
      {
        "iata": "TME",
        "name": "Gustavo Vargas Airport",
        "city": "Tame",
        "country": "CO"
      },
      {
        "iata": "TQS",
        "name": "Tres Esquinas Air Base",
        "city": "Tres Esquinas",
        "country": "CO"
      },
      {
        "iata": "TRB",
        "name": "Gonzalo Mejia Airport",
        "city": "Turbo",
        "country": "CO"
      },
      {
        "iata": "AUC",
        "name": "Santiago Perez Airport",
        "city": "Arauca",
        "country": "CO"
      },
      {
        "iata": "UIB",
        "name": "El Carano Airport",
        "city": "Quibdo",
        "country": "CO"
      },
      {
        "iata": "ULQ",
        "name": "Farfan Airport",
        "city": "Tulua",
        "country": "CO"
      },
      {
        "iata": "URR",
        "name": "Urrao Airport",
        "city": "Urrao",
        "country": "CO"
      },
      {
        "iata": "VUP",
        "name": "Alfonso Lopez Pumarejo Airport",
        "city": "Valledupar",
        "country": "CO"
      },
      {
        "iata": "VVC",
        "name": "Vanguardia Airport",
        "city": "Villavicencio",
        "country": "CO"
      },
      {
        "iata": "AYG",
        "name": "Yaguara Airport",
        "city": "San Vicente Del Caguan",
        "country": "CO"
      },
      {
        "iata": "EYP",
        "name": "El Yopal Airport",
        "city": "El Yopal",
        "country": "CO"
      },
      {
        "iata": "MHW",
        "name": "Monteagudo Airport",
        "city": "El Banado",
        "country": "BO"
      },
      {
        "iata": "SRE",
        "name": "Alcantarí International Airport",
        "city": "Sucre",
        "country": "BO"
      },
      {
        "iata": "APB",
        "name": "Apolo Airport",
        "city": "Apolo",
        "country": "BO"
      },
      {
        "iata": "ASC",
        "name": "Ascencion De Guarayos Airport",
        "city": "Ascension de Guarayos",
        "country": "BO"
      },
      {
        "iata": "BVL",
        "name": "Baures Airport",
        "city": "Baures",
        "country": "BO"
      },
      {
        "iata": "BJO",
        "name": "Bermejo Airport",
        "city": "Bermejo",
        "country": "BO"
      },
      {
        "iata": "CAM",
        "name": "Camiri Airport",
        "city": "Camiri",
        "country": "BO"
      },
      {
        "iata": "CBB",
        "name": "Jorge Wilsterman International Airport",
        "city": "Cochabamba",
        "country": "BO"
      },
      {
        "iata": "CIJ",
        "name": "Capitan Anibal Arab Airport",
        "city": "Cobija",
        "country": "BO"
      },
      {
        "iata": "CEP",
        "name": "Concepcion Airport",
        "city": "Concepcion",
        "country": "BO"
      },
      {
        "iata": "SRZ",
        "name": "El Trompillo Airport",
        "city": "Santa Cruz",
        "country": "BO"
      },
      {
        "iata": "GYA",
        "name": "Capitan de Av. Emilio Beltran Airport",
        "city": "Guayaramerin",
        "country": "BO"
      },
      {
        "iata": "BVK",
        "name": "Huacaraje Airport",
        "city": "Itenes",
        "country": "BO"
      },
      {
        "iata": "SJS",
        "name": "San Jose De Chiquitos Airport",
        "city": "San Jose de Chiquitos",
        "country": "BO"
      },
      {
        "iata": "SJB",
        "name": "San Joaquin Airport",
        "city": "San Joaquin",
        "country": "BO"
      },
      {
        "iata": "SJV",
        "name": "San Javier Airport",
        "city": "San Javier",
        "country": "BO"
      },
      {
        "iata": "LPB",
        "name": "El Alto International Airport",
        "city": "La Paz / El Alto",
        "country": "BO"
      },
      {
        "iata": "MGD",
        "name": "Magdalena Airport",
        "city": "Magdalena",
        "country": "BO"
      },
      {
        "iata": "ORU",
        "name": "Juan Mendoza Airport",
        "city": "Oruro",
        "country": "BO"
      },
      {
        "iata": "POI",
        "name": "Capitan Nicolas Rojas Airport",
        "city": "Potosi",
        "country": "BO"
      },
      {
        "iata": "PUR",
        "name": "Puerto Rico Airport",
        "city": "Puerto Rico/Manuripi",
        "country": "BO"
      },
      {
        "iata": "PSZ",
        "name": "Capitan Av. Salvador Ogaya G. airport",
        "city": "Puerto Suarez",
        "country": "BO"
      },
      {
        "iata": "SRD",
        "name": "San Ramon Airport",
        "city": "San Ramon / Mamore",
        "country": "BO"
      },
      {
        "iata": "RBO",
        "name": "Robore Airport",
        "city": "Robore",
        "country": "BO"
      },
      {
        "iata": "RIB",
        "name": "Capitan Av. Selin Zeitun Lopez Airport",
        "city": "Riberalta",
        "country": "BO"
      },
      {
        "iata": "RBQ",
        "name": "Rurenabaque Airport",
        "city": "Rurenabaque",
        "country": "BO"
      },
      {
        "iata": "REY",
        "name": "Reyes Airport",
        "city": "Reyes",
        "country": "BO"
      },
      {
        "iata": "SBL",
        "name": "Santa Ana Del Yacuma Airport",
        "city": "Santa Ana del Yacuma",
        "country": "BO"
      },
      {
        "iata": "SRJ",
        "name": "Capitan Av. German Quiroga G. Airport",
        "city": "San Borja",
        "country": "BO"
      },
      {
        "iata": "SNG",
        "name": "Capitan Av. Juan Cochamanidis S. Airport",
        "city": "San Ignacio de Velasco",
        "country": "BO"
      },
      {
        "iata": "SNM",
        "name": "San Ignacio de Moxos Airport",
        "city": "San Ignacio de Moxos",
        "country": "BO"
      },
      {
        "iata": "SRB",
        "name": "Santa Rosa De Yacuma Airport",
        "city": "Santa Rosa",
        "country": "BO"
      },
      {
        "iata": "MQK",
        "name": "San Matias Airport",
        "city": "San Matias",
        "country": "BO"
      },
      {
        "iata": "TJA",
        "name": "Capitan Oriel Lea Plaza Airport",
        "city": "Tarija",
        "country": "BO"
      },
      {
        "iata": "TDD",
        "name": "Teniente Av. Jorge Henrich Arauz Airport",
        "city": "Trinidad",
        "country": "BO"
      },
      {
        "iata": "UYU",
        "name": "Uyuni Airport",
        "city": "Quijarro",
        "country": "BO"
      },
      {
        "iata": "VAH",
        "name": "Capitan Av. Vidal Villagomez Toledo Airport",
        "city": "Vallegrande",
        "country": "BO"
      },
      {
        "iata": "VLM",
        "name": "Teniente Coronel Rafael Pabon Airport",
        "city": "Villamontes",
        "country": "BO"
      },
      {
        "iata": "VVI",
        "name": "Viru Viru International Airport",
        "city": "Santa Cruz",
        "country": "BO"
      },
      {
        "iata": "BYC",
        "name": "Yacuiba Airport",
        "city": "Yacuiba",
        "country": "BO"
      },
      {
        "iata": "ABN",
        "name": "Albina Airport",
        "city": "Albina",
        "country": "SR"
      },
      {
        "iata": "BTO",
        "name": "Botopasi Airport",
        "city": "Botopasi",
        "country": "SR"
      },
      {
        "iata": "AAJ",
        "name": "Cayana Airstrip",
        "city": "Awaradam",
        "country": "SR"
      },
      {
        "iata": "TOT",
        "name": "Totness Airport",
        "city": "Totness",
        "country": "SR"
      },
      {
        "iata": "DRJ",
        "name": "Drietabbetje Airport",
        "city": "Drietabbetje",
        "country": "SR"
      },
      {
        "iata": "DOE",
        "name": "Djumu-Djomoe Airport",
        "city": "Djumu-Djomoe",
        "country": "SR"
      },
      {
        "iata": "LDO",
        "name": "Ladouanie Airport",
        "city": "Aurora",
        "country": "SR"
      },
      {
        "iata": "PBM",
        "name": "Johan Adolf Pengel International Airport",
        "city": "Zandery",
        "country": "SR"
      },
      {
        "iata": "MOJ",
        "name": "Moengo Airstrip",
        "city": "Moengo",
        "country": "SR"
      },
      {
        "iata": "ICK",
        "name": "Nieuw Nickerie Airport",
        "city": "Nieuw Nickerie",
        "country": "SR"
      },
      {
        "iata": "OEM",
        "name": "Vincent Fayks Airport",
        "city": "Paloemeu",
        "country": "SR"
      },
      {
        "iata": "SMZ",
        "name": "Stoelmanseiland Airport",
        "city": "Stoelmanseiland",
        "country": "SR"
      },
      {
        "iata": "KCB",
        "name": "Tepoe Airstrip",
        "city": "Kasikasima",
        "country": "SR"
      },
      {
        "iata": "AGI",
        "name": "Wageningen Airport Airport",
        "city": "Wageningen Airport",
        "country": "SR"
      },
      {
        "iata": "WSO",
        "name": "Washabo Airport",
        "city": "Washabo",
        "country": "SR"
      },
      {
        "iata": "ORG",
        "name": "Zorg en Hoop Airport",
        "city": "Paramaribo",
        "country": "SR"
      },
      {
        "iata": "APY",
        "name": "Alto Parnaiba Airport",
        "city": "Alto Parnaiba",
        "country": "BR"
      },
      {
        "iata": "APQ",
        "name": "Arapiraca Airport",
        "city": "Arapiraca",
        "country": "BR"
      },
      {
        "iata": "AMJ",
        "name": "Cirilo Queiroz Airport",
        "city": "Almenara",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Aeroclube Airport",
        "city": "Aracaju",
        "country": "BR"
      },
      {
        "iata": "BDC",
        "name": "Barra do Corda Airport",
        "city": "Barra Do Corda",
        "country": "BR"
      },
      {
        "iata": "BVM",
        "name": "Belmonte Airport",
        "city": "Belmonte",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Boquira Airport",
        "city": "Boquira",
        "country": "BR"
      },
      {
        "iata": "BRA",
        "name": "Barreiras Airport",
        "city": "Barreiras",
        "country": "BR"
      },
      {
        "iata": "BSS",
        "name": "Balsas Airport",
        "city": "Balsas",
        "country": "BR"
      },
      {
        "iata": "BMS",
        "name": "Socrates Mariani Bittencourt Airport",
        "city": "Brumado",
        "country": "BR"
      },
      {
        "iata": "BQQ",
        "name": "Barra Airport",
        "city": "Barra",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Campo do Meio Airport",
        "city": "Campo Do Meio",
        "country": "BR"
      },
      {
        "iata": "CTP",
        "name": "Carutapera Airport",
        "city": "Carutapera",
        "country": "BR"
      },
      {
        "iata": "CPU",
        "name": "Cururupu Airport",
        "city": "Cururupu",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Campina Verde Airport",
        "city": "Campina Verde",
        "country": "BR"
      },
      {
        "iata": "QCH",
        "name": "Colatina Airport",
        "city": "Colatina",
        "country": "BR"
      },
      {
        "iata": "RDC",
        "name": "Redencao Airport",
        "city": "Redencao",
        "country": "BR"
      },
      {
        "iata": "LEP",
        "name": "Leopoldina Airport",
        "city": "Leopoldina",
        "country": "BR"
      },
      {
        "iata": "DTI",
        "name": "Diamantina Airport",
        "city": "Diamantina",
        "country": "BR"
      },
      {
        "iata": "DIQ",
        "name": "Divinopolis Airport",
        "city": "Divinopolis",
        "country": "BR"
      },
      {
        "iata": "CNV",
        "name": "Canavieiras Airport",
        "city": "Canavieiras",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Encanta Moca Airport",
        "city": "Recife",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Formiga Airport",
        "city": "Formiga",
        "country": "BR"
      },
      {
        "iata": "SXX",
        "name": "Sao Felix do Xingu Airport",
        "city": "Sao Felix Do Xingu",
        "country": "BR"
      },
      {
        "iata": "GUZ",
        "name": "Guarapari Airport",
        "city": "Guarapari",
        "country": "BR"
      },
      {
        "iata": "GDP",
        "name": "Guadalupe Airport",
        "city": "Guadalupe",
        "country": "BR"
      },
      {
        "iata": "GNM",
        "name": "Guanambi Airport",
        "city": "Guanambi",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Grajau Airport",
        "city": "Grajau",
        "country": "BR"
      },
      {
        "iata": "GMS",
        "name": "Fazenda Canada Airport",
        "city": "Uberlandia",
        "country": "BR"
      },
      {
        "iata": "QGP",
        "name": "Garanhuns Airport",
        "city": "Garanhuns",
        "country": "BR"
      },
      {
        "iata": "IRE",
        "name": "Irece Airport",
        "city": "Irece",
        "country": "BR"
      },
      {
        "iata": "QIG",
        "name": "Iguatu Airport",
        "city": "Iguatu",
        "country": "BR"
      },
      {
        "iata": "QIT",
        "name": "Itapetinga Airport",
        "city": "Itapetinga",
        "country": "BR"
      },
      {
        "iata": "IPU",
        "name": "Ipiau Airport",
        "city": "Ipiau",
        "country": "BR"
      },
      {
        "iata": "JCM",
        "name": "Jacobina Airport",
        "city": "Jacobina",
        "country": "BR"
      },
      {
        "iata": "FEC",
        "name": "Joao Durval Carneiro Airport",
        "city": "Feira De Santana",
        "country": "BR"
      },
      {
        "iata": "JEQ",
        "name": "Jequie Airport",
        "city": "Jequie",
        "country": "BR"
      },
      {
        "iata": "JNA",
        "name": "Januaria Airport",
        "city": "Januaria",
        "country": "BR"
      },
      {
        "iata": "JDR",
        "name": "Prefeito Octavio de Almeida Neves Airport",
        "city": "Sao Joao Del Rei",
        "country": "BR"
      },
      {
        "iata": "CMP",
        "name": "Santana do Araguaia Airport",
        "city": "Santana Do Araguaia",
        "country": "BR"
      },
      {
        "iata": "QDF",
        "name": "Conselheiro Lafaiete Airport",
        "city": "Conselheiro Lafaiete",
        "country": "BR"
      },
      {
        "iata": "CDI",
        "name": "Cachoeiro do Itapemirim Airport",
        "city": "Cachoeiro Do Itapemirim",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Colinas Airport",
        "city": "Colinas",
        "country": "BR"
      },
      {
        "iata": "QCP",
        "name": "Currais Novos Airport",
        "city": "Currais Novos",
        "country": "BR"
      },
      {
        "iata": "LVB",
        "name": "Livramento do Brumado Airport",
        "city": "Livramento Do Brumado",
        "country": "BR"
      },
      {
        "iata": "SSO",
        "name": "Sao Lourenco Airport",
        "city": "Sao Lourenco",
        "country": "BR"
      },
      {
        "iata": "MTE",
        "name": "Monte Alegre Airport",
        "city": "Monte Alegre",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Mombaca Airport",
        "city": "Mombaca",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Monte Santo de Minas Airport",
        "city": "Monte Santo De Minas",
        "country": "BR"
      },
      {
        "iata": "MVS",
        "name": "Mucuri Airport",
        "city": "Mucuri",
        "country": "BR"
      },
      {
        "iata": "SBJ",
        "name": "Sao Mateus Airport",
        "city": "Sao Mateus",
        "country": "BR"
      },
      {
        "iata": "PTQ",
        "name": "Porto de Moz Airport",
        "city": "Porto De Moz",
        "country": "BR"
      },
      {
        "iata": "NNU",
        "name": "Nanuque Airport",
        "city": "Nanuque",
        "country": "BR"
      },
      {
        "iata": "QBX",
        "name": "Sobral Airport",
        "city": "Sobral",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Morro do Chapeu Airport",
        "city": "Morro Do Chapeu",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Oeiras Airport",
        "city": "Oeiras",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Ouro Fino Airport",
        "city": "Ouro Fino",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Propria Airport",
        "city": "Propria",
        "country": "BR"
      },
      {
        "iata": "PSW",
        "name": "Municipal Jose Figueiredo Airport",
        "city": "Passos",
        "country": "BR"
      },
      {
        "iata": "ORX",
        "name": "Oriximina Airport",
        "city": "Oriximina",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Pastos Bons Airport",
        "city": "Pastos Bons",
        "country": "BR"
      },
      {
        "iata": "PCS",
        "name": "Picos Airport",
        "city": "Picos",
        "country": "BR"
      },
      {
        "iata": "POJ",
        "name": "Patos de Minas Airport",
        "city": "Patos De Minas",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Piata Airport",
        "city": "Piata",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Patrocinio Airport",
        "city": "Patrocinio",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Pompeu Airport",
        "city": "Pompeu",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Paraguacu Airport",
        "city": "Paraguacu",
        "country": "BR"
      },
      {
        "iata": "PIV",
        "name": "Pirapora Airport",
        "city": "Pirapora",
        "country": "BR"
      },
      {
        "iata": "FLB",
        "name": "Cangapara Airport",
        "city": "Floriano",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Fazenda Sao Francisco Airport",
        "city": "Magda",
        "country": "BR"
      },
      {
        "iata": "PDF",
        "name": "Prado Airport",
        "city": "Prado",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Rio Paranaiba Airport",
        "city": "Rio Paranaiba",
        "country": "BR"
      },
      {
        "iata": "CAU",
        "name": "Caruaru Airport",
        "city": "Caruaru",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Riachao Airport",
        "city": "Riachao",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Sacramento Airport",
        "city": "Sacramento",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Sao Jose Airport",
        "city": "Santarem",
        "country": "BR"
      },
      {
        "iata": "SFK",
        "name": "Soure Airport",
        "city": "Soure",
        "country": "BR"
      },
      {
        "iata": "OBI",
        "name": "Obidos Airport",
        "city": "Obidos",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Monte Carmelo Airport",
        "city": "Monte Carmelo",
        "country": "BR"
      },
      {
        "iata": "TFL",
        "name": "Juscelino Kubitscheck Airport",
        "city": "Teofilo Otoni",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Buritirama Airport",
        "city": "Buritirama",
        "country": "BR"
      },
      {
        "iata": "VAL",
        "name": "Valenca Airport",
        "city": "Valenca",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Santa Maria da Vitoria Airport",
        "city": "Santa Maria Da Vitoria",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Volta Grande Airport",
        "city": "Conceicao Das Alagoas",
        "country": "BR"
      },
      {
        "iata": "QID",
        "name": "Melio Viana Airport",
        "city": "Tres Coracoes",
        "country": "BR"
      },
      {
        "iata": "BVS",
        "name": "Breves Airport",
        "city": "Breves",
        "country": "BR"
      },
      {
        "iata": "CMC",
        "name": "Camocim Airport",
        "city": "Camocim",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Machado Airport",
        "city": "Machado",
        "country": "BR"
      },
      {
        "iata": "QXC",
        "name": "Fazenda Sao Braz Airport",
        "city": "Barra De Santo Antonio",
        "country": "BR"
      },
      {
        "iata": "PHI",
        "name": "Pinheiro Airport",
        "city": "Pinheiro",
        "country": "BR"
      },
      {
        "iata": "ITI",
        "name": "Agropecuaria Castanhais Airport",
        "city": "Cumaru Do Norte",
        "country": "BR"
      },
      {
        "iata": "PPY",
        "name": "Pouso Alegre Airport",
        "city": "Pouso Alegre",
        "country": "BR"
      },
      {
        "iata": "CAY",
        "name": "Cayenne-Rochambeau Airport",
        "city": "Cayenne / Rochambeau",
        "country": "GF"
      },
      {
        "iata": "MPY",
        "name": "Maripasoula Airport",
        "city": "Maripasoula",
        "country": "GF"
      },
      {
        "iata": "OXP",
        "name": "Saint-Georges-de-l'Oyapock Airport",
        "city": "Saint-Georges-de-l'Oyapock Airport",
        "country": "GF"
      },
      {
        "iata": "LDX",
        "name": "Saint-Laurent-du-Maroni Airport",
        "city": "Saint-Laurent-du-Maroni",
        "country": "GF"
      },
      {
        "iata": "REI",
        "name": "Regina Airport",
        "city": "Regina",
        "country": "GF"
      },
      {
        "iata": "XAU",
        "name": "Saul Airport",
        "city": "Saul",
        "country": "GF"
      },
      {
        "iata": "APE",
        "name": "San Juan Aposento Airport",
        "city": "San Juan Aposento",
        "country": "PE"
      },
      {
        "iata": "ALD",
        "name": "Alerta Airport",
        "city": "Fortaleza",
        "country": "PE"
      },
      {
        "iata": "AOP",
        "name": "Alferez FAP Alfredo Vladimir Sara Bauer Airport",
        "city": "Andoas",
        "country": "PE"
      },
      {
        "iata": "ATG",
        "name": "Teniente General Gerardo Perez Pinedo Airport",
        "city": "Atalaya",
        "country": "PE"
      },
      {
        "iata": "MBP",
        "name": "Moyobamba Airport",
        "city": "Moyobamba",
        "country": "PE"
      },
      {
        "iata": "BLP",
        "name": "Huallaga Airport",
        "city": "Bellavista",
        "country": "PE"
      },
      {
        "iata": "IBP",
        "name": "Iberia Airport",
        "city": "Iberia",
        "country": "PE"
      },
      {
        "iata": "PCL",
        "name": "Cap FAP David Abenzur Rengifo International Airport",
        "city": "Pucallpa",
        "country": "PE"
      },
      {
        "iata": "CHM",
        "name": "Teniente FAP Jaime A De Montreuil Morales Airport",
        "city": "Chimbote",
        "country": "PE"
      },
      {
        "iata": "TGI",
        "name": "Tingo Maria Airport",
        "city": "Tingo Maria",
        "country": "PE"
      },
      {
        "iata": "CIX",
        "name": "Capitan FAP Jose A Quinones Gonzales International Airport",
        "city": "Chiclayo",
        "country": "PE"
      },
      {
        "iata": "AYP",
        "name": "Coronel FAP Alfredo Mendivil Duarte Airport",
        "city": "Ayacucho",
        "country": "PE"
      },
      {
        "iata": "ANS",
        "name": "Andahuaylas Airport",
        "city": "Andahuaylas",
        "country": "PE"
      },
      {
        "iata": "ATA",
        "name": "Comandante FAP German Arias Graziani Airport",
        "city": "Anta",
        "country": "PE"
      },
      {
        "iata": "UMI",
        "name": "Quince Air Base",
        "city": "Quince Mil",
        "country": "PE"
      },
      {
        "iata": "UCZ",
        "name": "Uchiza Airport",
        "city": "Uchiza",
        "country": "PE"
      },
      {
        "iata": "RIJ",
        "name": "Juan Simons Vela Airport",
        "city": "Rioja",
        "country": "PE"
      },
      {
        "iata": "LIM",
        "name": "Jorge Chavez International Airport",
        "city": "Lima",
        "country": "PE"
      },
      {
        "iata": "JJI",
        "name": "Juanjui Airport",
        "city": "Juanjui",
        "country": "PE"
      },
      {
        "iata": "JAU",
        "name": "Francisco Carle Airport",
        "city": "Jauja",
        "country": "PE"
      },
      {
        "iata": "JUL",
        "name": "Inca Manco Capac International Airport",
        "city": "Juliaca",
        "country": "PE"
      },
      {
        "iata": "SJA",
        "name": "San Juan de Marcona Airport",
        "city": "San Juan de Marcona",
        "country": "PE"
      },
      {
        "iata": "CJA",
        "name": "Mayor General FAP Armando Revoredo Iglesias Airport",
        "city": "Cajamarca",
        "country": "PE"
      },
      {
        "iata": "RIM",
        "name": "San Nicolas Airport",
        "city": "Rodriguez de Mendoza",
        "country": "PE"
      },
      {
        "iata": "ILQ",
        "name": "Ilo Airport",
        "city": "Ilo",
        "country": "PE"
      },
      {
        "iata": "TBP",
        "name": "Capitan FAP Pedro Canga Rodriguez Airport",
        "city": "Tumbes",
        "country": "PE"
      },
      {
        "iata": "SMG",
        "name": "Santa Maria Airport",
        "city": "Santa Maria",
        "country": "PE"
      },
      {
        "iata": "YMS",
        "name": "Moises Benzaquen Rengifo Airport",
        "city": "Yurimaguas",
        "country": "PE"
      },
      {
        "iata": "HUU",
        "name": "Alferez Fap David Figueroa Fernandini Airport",
        "city": "Huanuco",
        "country": "PE"
      },
      {
        "iata": "SQU",
        "name": "Saposoa Airport",
        "city": "Plaza Saposoa",
        "country": "PE"
      },
      {
        "iata": "CHH",
        "name": "Chachapoyas Airport",
        "city": "Chachapoyas",
        "country": "PE"
      },
      {
        "iata": "REQ",
        "name": "Requena Airport",
        "city": "Requena",
        "country": "PE"
      },
      {
        "iata": "IQT",
        "name": "Coronel FAP Francisco Secada Vignetta International Airport",
        "city": "Iquitos",
        "country": "PE"
      },
      {
        "iata": "AQP",
        "name": "Rodriguez Ballon International Airport",
        "city": "Arequipa",
        "country": "PE"
      },
      {
        "iata": "TRU",
        "name": "Capitan FAP Carlos Martinez De Pinillos International Airport",
        "city": "Trujillo",
        "country": "PE"
      },
      {
        "iata": "SQD",
        "name": "San Francisco Airport",
        "city": "San Francisco de Yeso",
        "country": "PE"
      },
      {
        "iata": "PIO",
        "name": "Capitan FAP Renan Elias Olivera International Airport",
        "city": "Pisco",
        "country": "PE"
      },
      {
        "iata": "TPP",
        "name": "Cadete FAP Guillermo Del Castillo Paredes Airport",
        "city": "Tarapoto",
        "country": "PE"
      },
      {
        "iata": "SYC",
        "name": "Shiringayoc Airport",
        "city": "Shiringayoc",
        "country": "PE"
      },
      {
        "iata": "TCQ",
        "name": "Coronel FAP Carlos Ciriani Santa Rosa International Airport",
        "city": "Tacna",
        "country": "PE"
      },
      {
        "iata": "PEM",
        "name": "Padre Aldamiz International Airport",
        "city": "Puerto Maldonado",
        "country": "PE"
      },
      {
        "iata": "PIU",
        "name": "Capitan FAP Guillermo Concha Iberico International Airport",
        "city": "Piura",
        "country": "PE"
      },
      {
        "iata": "TYL",
        "name": "Capitan Montes Airport",
        "city": "",
        "country": "PE"
      },
      {
        "iata": "NZA",
        "name": "Maria Reiche Neuman Airport",
        "city": "",
        "country": "PE"
      },
      {
        "iata": "CUZ",
        "name": "Alejandro Velasco Astete International Airport",
        "city": "Cusco",
        "country": "PE"
      },
      {
        "iata": "APU",
        "name": "Apucarana Airport",
        "city": "Apucarana",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Aeroclube Airport",
        "city": "Passo Fundo",
        "country": "BR"
      },
      {
        "iata": "BGV",
        "name": "Aeroclube de Bento Goncalves Airport",
        "city": "Bento Goncalves",
        "country": "BR"
      },
      {
        "iata": "BNU",
        "name": "Blumenau Airport",
        "city": "Blumenau",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Bandeirantes Airport",
        "city": "Bandeirantes",
        "country": "BR"
      },
      {
        "iata": "CCI",
        "name": "Concordia Airport",
        "city": "Concordia",
        "country": "BR"
      },
      {
        "iata": "QCN",
        "name": "Canela Airport",
        "city": "Canela",
        "country": "BR"
      },
      {
        "iata": "CKO",
        "name": "Cornelio Procopio Airport",
        "city": "Cornelio Procopio",
        "country": "BR"
      },
      {
        "iata": "DOU",
        "name": "Dourados Airport",
        "city": "Dourados",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Sao Sepe Airport",
        "city": "Sao Sepe",
        "country": "BR"
      },
      {
        "iata": "ERM",
        "name": "Erechim Airport",
        "city": "Erechim",
        "country": "BR"
      },
      {
        "iata": "FBE",
        "name": "Francisco Beltrao Airport",
        "city": "Francisco Beltrao",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Guapore Airport",
        "city": "Guapore",
        "country": "BR"
      },
      {
        "iata": "QGA",
        "name": "Guaira Airport",
        "city": "Guaira",
        "country": "BR"
      },
      {
        "iata": "IJU",
        "name": "Ijui Airport",
        "city": "Ijui",
        "country": "BR"
      },
      {
        "iata": "ITQ",
        "name": "Itaqui Airport",
        "city": "Itaqui",
        "country": "BR"
      },
      {
        "iata": "JCB",
        "name": "Santa Terezinha Airport",
        "city": "Joacaba",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Julio de Castilho Airport",
        "city": "Julio De Castilho",
        "country": "BR"
      },
      {
        "iata": "CBW",
        "name": "Campo Mourao Airport",
        "city": "Campo Mourao",
        "country": "BR"
      },
      {
        "iata": "QDB",
        "name": "Cachoeira do Sul Airport",
        "city": "Cachoeira Do Sul",
        "country": "BR"
      },
      {
        "iata": "QCR",
        "name": "Curitibanos Airport",
        "city": "Curitibanos",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Laguna Airport",
        "city": "Laguna",
        "country": "BR"
      },
      {
        "iata": "ALQ",
        "name": "Alegrete Novo Airport",
        "city": "Alegrete",
        "country": "BR"
      },
      {
        "iata": "QMF",
        "name": "Mafra Airport",
        "city": "Mafra",
        "country": "BR"
      },
      {
        "iata": "QGF",
        "name": "Montenegro Airport",
        "city": "Montenegro",
        "country": "BR"
      },
      {
        "iata": "QHV",
        "name": "Novo Hamburgo Airport",
        "city": "Novo Hamburgo",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Nonoai Airport",
        "city": "Nonoai",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Nova Prata Airport",
        "city": "Nova Prata",
        "country": "BR"
      },
      {
        "iata": "SQX",
        "name": "Sao Miguel do Oeste Airport",
        "city": "Sao Miguel Do Oeste",
        "country": "BR"
      },
      {
        "iata": "APX",
        "name": "Arapongas Airport",
        "city": "Arapongas",
        "country": "BR"
      },
      {
        "iata": "PTO",
        "name": "Pato Branco Airport",
        "city": "Pato Branco",
        "country": "BR"
      },
      {
        "iata": "PNG",
        "name": "Paranagua Airport",
        "city": "Paranagua",
        "country": "BR"
      },
      {
        "iata": "PVI",
        "name": "Paranavai Airport",
        "city": "Paranavai",
        "country": "BR"
      },
      {
        "iata": "PBB",
        "name": "Paranaiba Airport",
        "city": "Paranaiba",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Tanque Novo Airport",
        "city": "Tanque Novo",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Mundo Novo Airport",
        "city": "Mundo Novo",
        "country": "BR"
      },
      {
        "iata": "QAC",
        "name": "Castro Airport",
        "city": "Castro",
        "country": "BR"
      },
      {
        "iata": "SQY",
        "name": "Sao Lourenco do Sul Airport",
        "city": "Sao Lourenco Do Sul",
        "country": "BR"
      },
      {
        "iata": "QOJ",
        "name": "Sao Borja Airport",
        "city": "Sao Borja",
        "country": "BR"
      },
      {
        "iata": "CSU",
        "name": "Santa Cruz do Sul Airport",
        "city": "Santa Cruz Do Sul",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Soledade Airport",
        "city": "Soledade",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Sao Gabriel Airport",
        "city": "Sao Gabriel",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Sao Joaquim Airport",
        "city": "Sao Joaquim",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Sertanopolis Airport",
        "city": "Sertanopolis",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Tres Passos Airport",
        "city": "Tres Passos",
        "country": "BR"
      },
      {
        "iata": "UMU",
        "name": "Umuarama Airport",
        "city": "Umuarama",
        "country": "BR"
      },
      {
        "iata": "QVB",
        "name": "Uniao da Vitoria Airport",
        "city": "Uniao Da Vitoria",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Usina Mandu Airport",
        "city": "Guaira",
        "country": "BR"
      },
      {
        "iata": "VIA",
        "name": "Videira Airport",
        "city": "Videira",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Veranopolis Airport",
        "city": "Veranopolis",
        "country": "BR"
      },
      {
        "iata": "CTQ",
        "name": "Santa Vitoria do Palmar Airport",
        "city": "Santa Vitoria Do Palmar",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Fazenda Tres Barras Airport",
        "city": "Pitangueiras",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Venancio Aires Airport",
        "city": "Venancio Aires",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Cacapava do Sul Airport",
        "city": "Cacapava Do Sul",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Sarandi Airport",
        "city": "Sarandi",
        "country": "BR"
      },
      {
        "iata": "AXE",
        "name": "Xanxere Airport",
        "city": "Xanxere",
        "country": "BR"
      },
      {
        "iata": "AAG",
        "name": "Arapoti Airport",
        "city": "Arapoti",
        "country": "BR"
      },
      {
        "iata": "SRA",
        "name": "Santa Rosa Airport",
        "city": "Santa Rosa",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Centenario do Sul Airport",
        "city": "Centenario Do Sul",
        "country": "BR"
      },
      {
        "iata": "PGZ",
        "name": "Ponta Grossa Airport",
        "city": "Ponta Grossa",
        "country": "BR"
      },
      {
        "iata": "ATI",
        "name": "Artigas International Airport",
        "city": "Artigas",
        "country": "UY"
      },
      {
        "iata": "CYR",
        "name": "Laguna de Los Patos International Airport",
        "city": "Colonia",
        "country": "UY"
      },
      {
        "iata": "CAR",
        "name": "Carmelo International Airport",
        "city": "Carmelo",
        "country": "UY"
      },
      {
        "iata": "DZO",
        "name": "Santa Bernardina International Airport",
        "city": "Durazno",
        "country": "UY"
      },
      {
        "iata": "PDP",
        "name": "Capitan Corbeta CA Curbelo International Airport",
        "city": "Punta del Este",
        "country": "UY"
      },
      {
        "iata": "MER",
        "name": "Ricardo de Tomasi International Airport",
        "city": "Mercedes",
        "country": "UY"
      },
      {
        "iata": "MLZ",
        "name": "Cerro Largo International Airport",
        "city": "Melo",
        "country": "UY"
      },
      {
        "iata": "MVD",
        "name": "Carrasco International /General C L Berisso Airport",
        "city": "Montevideo",
        "country": "UY"
      },
      {
        "iata": "MDO",
        "name": "El Jaguel / Punta del Este Airport",
        "city": "Maldonado",
        "country": "UY"
      },
      {
        "iata": "PDU",
        "name": "Tydeo Larre Borges Airport",
        "city": "Paysandu",
        "country": "UY"
      },
      {
        "iata": "RVY",
        "name": "Presidente General Don Oscar D. Gestido International Airport",
        "city": "Rivera",
        "country": "UY"
      },
      {
        "iata": "STY",
        "name": "Nueva Hesperides International Airport",
        "city": "Salto",
        "country": "UY"
      },
      {
        "iata": "TAW",
        "name": "Tacuarembo Airport",
        "city": "Tacuarembo",
        "country": "UY"
      },
      {
        "iata": "TYT",
        "name": "Treinta y Tres Airport",
        "city": "Treinta y Tres",
        "country": "UY"
      },
      {
        "iata": "VCH",
        "name": "Vichadero Airport",
        "city": "Vichadero",
        "country": "UY"
      },
      {
        "iata": "AGV",
        "name": "Oswaldo Guevara Mujica Airport",
        "city": "Acarigua",
        "country": "VE"
      },
      {
        "iata": "AAO",
        "name": "Anaco Airport",
        "city": "Anaco",
        "country": "VE"
      },
      {
        "iata": "LPJ",
        "name": "Armando Schwarck Airport",
        "city": "Guayabal",
        "country": "VE"
      },
      {
        "iata": "BLA",
        "name": "General Jose Antonio Anzoategui International Airport",
        "city": "Barcelona",
        "country": "VE"
      },
      {
        "iata": "BNS",
        "name": "Barinas Airport",
        "city": "Barinas",
        "country": "VE"
      },
      {
        "iata": "BRM",
        "name": "Barquisimeto International Airport",
        "city": "Barquisimeto",
        "country": "VE"
      },
      {
        "iata": "MYC",
        "name": "Escuela Mariscal Sucre Airport",
        "city": "Maracay",
        "country": "VE"
      },
      {
        "iata": "CBL",
        "name": "Ciudad Bolivar Airport",
        "city": "",
        "country": "VE"
      },
      {
        "iata": "CXA",
        "name": "Caicara del Orinoco Airport",
        "city": "",
        "country": "VE"
      },
      {
        "iata": "CUV",
        "name": "Casigua El Cubo Airport",
        "city": "Casigua El Cubo",
        "country": "VE"
      },
      {
        "iata": "CLZ",
        "name": "Calabozo Airport",
        "city": "Guarico",
        "country": "VE"
      },
      {
        "iata": "CAJ",
        "name": "Canaima Airport",
        "city": "Canaima",
        "country": "VE"
      },
      {
        "iata": "VCR",
        "name": "Carora Airport",
        "city": "Carora",
        "country": "VE"
      },
      {
        "iata": "CUP",
        "name": "General Francisco Bermudez Airport",
        "city": "Carupano",
        "country": "VE"
      },
      {
        "iata": "CZE",
        "name": "Jose Leonardo Chirinos Airport",
        "city": "Coro",
        "country": "VE"
      },
      {
        "iata": "CUM",
        "name": "Cumana (Antonio Jose de Sucre) Airport",
        "city": "",
        "country": "VE"
      },
      {
        "iata": "isl",
        "name": "La Tortuga Punta Delgada Airport",
        "city": "Isla La Tortuga",
        "country": "VE"
      },
      {
        "iata": "EOR",
        "name": "El Dorado Airport",
        "city": "Bolivar",
        "country": "VE"
      },
      {
        "iata": "EOZ",
        "name": "Elorza Airport",
        "city": "",
        "country": "VE"
      },
      {
        "iata": "GDO",
        "name": "Guasdalito Airport",
        "city": "",
        "country": "VE"
      },
      {
        "iata": "GUI",
        "name": "Guiria Airport",
        "city": "",
        "country": "VE"
      },
      {
        "iata": "GUQ",
        "name": "Guanare Airport",
        "city": "Guanare",
        "country": "VE"
      },
      {
        "iata": "ICA",
        "name": "Icabaru Airport",
        "city": "",
        "country": "VE"
      },
      {
        "iata": "LSP",
        "name": "Josefa Camejo International Airport",
        "city": "Paraguana",
        "country": "VE"
      },
      {
        "iata": "KAV",
        "name": "Kavanayen Airport",
        "city": "",
        "country": "VE"
      },
      {
        "iata": "LFR",
        "name": "La Fria Airport",
        "city": "",
        "country": "VE"
      },
      {
        "iata": "MAR",
        "name": "La Chinita International Airport",
        "city": "Maracaibo",
        "country": "VE"
      },
      {
        "iata": "MRD",
        "name": "Alberto Carnevalli Airport",
        "city": "Merida",
        "country": "VE"
      },
      {
        "iata": "PMV",
        "name": "Del Caribe Santiago Marino International Airport",
        "city": "Isla Margarita",
        "country": "VE"
      },
      {
        "iata": "CCS",
        "name": "Maiquetia (Simon Bolivar Internacional) Airport",
        "city": "Caracas",
        "country": "VE"
      },
      {
        "iata": "MUN",
        "name": "Maturin Airport",
        "city": "",
        "country": "VE"
      },
      {
        "iata": "CBS",
        "name": "Oro Negro Airport",
        "city": "Cabimas",
        "country": "VE"
      },
      {
        "iata": "PYH",
        "name": "Cacique Aramare Airport",
        "city": "",
        "country": "VE"
      },
      {
        "iata": "PBL",
        "name": "General Bartolome Salom International Airport",
        "city": "",
        "country": "VE"
      },
      {
        "iata": "PDZ",
        "name": "Pedernales Airport",
        "city": "",
        "country": "VE"
      },
      {
        "iata": "PPH",
        "name": "Perai Tepuy Airport",
        "city": "",
        "country": "VE"
      },
      {
        "iata": "SCI",
        "name": "Paramillo Airport",
        "city": "",
        "country": "VE"
      },
      {
        "iata": "PZO",
        "name": "General Manuel Carlos Piar International Airport",
        "city": "Puerto Ordaz-Ciudad Guayana",
        "country": "VE"
      },
      {
        "iata": "PTM",
        "name": "Palmarito Airport",
        "city": "Palmarito",
        "country": "VE"
      },
      {
        "iata": "LRV",
        "name": "Gran Roque Airport",
        "city": "Los Roques",
        "country": "VE"
      },
      {
        "iata": "SVZ",
        "name": "San Antonio Del Tachira Airport",
        "city": "",
        "country": "VE"
      },
      {
        "iata": "SBB",
        "name": "Santa Barbara de Barinas Airport",
        "city": "Santa Barbara",
        "country": "VE"
      },
      {
        "iata": "SNV",
        "name": "Santa Elena de Uairen Airport",
        "city": "",
        "country": "VE"
      },
      {
        "iata": "STD",
        "name": "Mayor Buenaventura Vivas International Airport",
        "city": "Santo Domingo",
        "country": "VE"
      },
      {
        "iata": "SNF",
        "name": "Sub Teniente Nestor Arias Airport",
        "city": "San Felipe",
        "country": "VE"
      },
      {
        "iata": "SFD",
        "name": "San Fernando De Apure Airport",
        "city": "Inglaterra",
        "country": "VE"
      },
      {
        "iata": "SOM",
        "name": "San Tome Airport",
        "city": "",
        "country": "VE"
      },
      {
        "iata": "STB",
        "name": "Santa Barbara del Zulia Airport",
        "city": "",
        "country": "VE"
      },
      {
        "iata": "TUV",
        "name": "Tucupita Airport",
        "city": "Tucupita",
        "country": "VE"
      },
      {
        "iata": "TMO",
        "name": "Tumeremo Airport",
        "city": "",
        "country": "VE"
      },
      {
        "iata": "URM",
        "name": "Uriman Airport",
        "city": "",
        "country": "VE"
      },
      {
        "iata": "VLN",
        "name": "Arturo Michelena International Airport",
        "city": "Valencia",
        "country": "VE"
      },
      {
        "iata": "VIG",
        "name": "Juan Pablo Perez Alfonso Airport",
        "city": "El Vigia",
        "country": "VE"
      },
      {
        "iata": "VLV",
        "name": "Dr. Antonio Nicolas Briceno Airport",
        "city": "Valera",
        "country": "VE"
      },
      {
        "iata": "VDP",
        "name": "Valle de La Pascua Airport",
        "city": "",
        "country": "VE"
      },
      {
        "iata": "0",
        "name": "Araguaiana Airport",
        "city": "Araguaiana",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Buriti Alegre Airport",
        "city": "Buriti Alegre",
        "country": "BR"
      },
      {
        "iata": "BAZ",
        "name": "Barcelos Airport",
        "city": "Barcelos",
        "country": "BR"
      },
      {
        "iata": "RBB",
        "name": "Borba Airport",
        "city": "Borba",
        "country": "BR"
      },
      {
        "iata": "CAF",
        "name": "Carauari Airport",
        "city": "Carauari",
        "country": "BR"
      },
      {
        "iata": "CQS",
        "name": "Costa Marques Airport",
        "city": "Costa Marques",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Cavalcante Airport",
        "city": "Cavalcante",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Ceres Airport",
        "city": "Ceres",
        "country": "BR"
      },
      {
        "iata": "DMT",
        "name": "Diamantino Airport",
        "city": "Diamantino",
        "country": "BR"
      },
      {
        "iata": "DNO",
        "name": "Dianopolis Airport",
        "city": "Dianopolis",
        "country": "BR"
      },
      {
        "iata": "ERN",
        "name": "Eirunepe Airport",
        "city": "Eirunepe",
        "country": "BR"
      },
      {
        "iata": "CQA",
        "name": "Canarana Airport",
        "city": "Canarana",
        "country": "BR"
      },
      {
        "iata": "FEJ",
        "name": "Feijo Airport",
        "city": "Feijo",
        "country": "BR"
      },
      {
        "iata": "SXO",
        "name": "Sao Felix do Araguaia Airport",
        "city": "Sao Felix Do Araguaia",
        "country": "BR"
      },
      {
        "iata": "GRP",
        "name": "Gurupi Airport",
        "city": "Gurupi",
        "country": "BR"
      },
      {
        "iata": "AUX",
        "name": "Araguaina Airport",
        "city": "Araguaina",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Iaciara Airport",
        "city": "Iaciara",
        "country": "BR"
      },
      {
        "iata": "IPG",
        "name": "Ipiranga Airport",
        "city": "Santo Antonio Do Ica",
        "country": "BR"
      },
      {
        "iata": "IDO",
        "name": "Santa Izabel do Morro Airport",
        "city": "Cristalandia",
        "country": "BR"
      },
      {
        "iata": "JPR",
        "name": "Ji-Parana Airport",
        "city": "Ji-Parana",
        "country": "BR"
      },
      {
        "iata": "JIA",
        "name": "Juina Airport",
        "city": "Juina",
        "country": "BR"
      },
      {
        "iata": "JRN",
        "name": "Juruena Airport",
        "city": "Juruena",
        "country": "BR"
      },
      {
        "iata": "CCX",
        "name": "Caceres Airport",
        "city": "Caceres",
        "country": "BR"
      },
      {
        "iata": "CIZ",
        "name": "Coari Airport",
        "city": "Coari",
        "country": "BR"
      },
      {
        "iata": "TLZ",
        "name": "Catalao Airport",
        "city": "Catalao",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Corixa Airport",
        "city": "Caceres",
        "country": "BR"
      },
      {
        "iata": "LBR",
        "name": "Labrea Airport",
        "city": "Labrea",
        "country": "BR"
      },
      {
        "iata": "RVD",
        "name": "General Leite de Castro Airport",
        "city": "Rio Verde",
        "country": "BR"
      },
      {
        "iata": "MBZ",
        "name": "Maues Airport",
        "city": "Maues",
        "country": "BR"
      },
      {
        "iata": "NVP",
        "name": "Novo Aripuana Airport",
        "city": "Novo Aripuana",
        "country": "BR"
      },
      {
        "iata": "AQM",
        "name": "Nova Vida Airport",
        "city": "Ariquemes",
        "country": "BR"
      },
      {
        "iata": "BCR",
        "name": "Novo Campo Airport",
        "city": "Boca Do Acre",
        "country": "BR"
      },
      {
        "iata": "NQL",
        "name": "Niquelandia Airport",
        "city": "Niquelandia",
        "country": "BR"
      },
      {
        "iata": "APS",
        "name": "Anapolis Airport",
        "city": "Anapolis",
        "country": "BR"
      },
      {
        "iata": "FBA",
        "name": "Fonte Boa Airport",
        "city": "Fonte Boa",
        "country": "BR"
      },
      {
        "iata": "PIN",
        "name": "Parintins Airport",
        "city": "Parintins",
        "country": "BR"
      },
      {
        "iata": "PBQ",
        "name": "Pimenta Bueno Airport",
        "city": "Pimenta Bueno",
        "country": "BR"
      },
      {
        "iata": "AAI",
        "name": "Arraias Airport",
        "city": "Arraias",
        "country": "BR"
      },
      {
        "iata": "ROO",
        "name": "Rondonopolis Airport",
        "city": "Rondonopolis",
        "country": "BR"
      },
      {
        "iata": "AIR",
        "name": "Aripuana Airport",
        "city": "Aripuana",
        "country": "BR"
      },
      {
        "iata": "0",
        "name": "Meruri Airport",
        "city": "Tesouro",
        "country": "BR"
      },
      {
        "iata": "OPS",
        "name": "Presidente Joao Batista Figueiredo Airport",
        "city": "Sinop",
        "country": "BR"
      },
      {
        "iata": "STZ",
        "name": "Santa Terezinha Airport",
        "city": "Santa Terezinha",
        "country": "BR"
      },
      {
        "iata": "IRZ",
        "name": "Tapuruquara Airport",
        "city": "Santa Isabel Do Rio Negro",
        "country": "BR"
      },
      {
        "iata": "TGQ",
        "name": "Tangara da Serra Airport",
        "city": "Tangara Da Serra",
        "country": "BR"
      },
      {
        "iata": "AZL",
        "name": "Fazenda Tucunare Airport",
        "city": "Sapezal",
        "country": "BR"
      },
      {
        "iata": "QHN",
        "name": "Taguatinga Airport",
        "city": "Taguatinga",
        "country": "BR"
      },
      {
        "iata": "SQM",
        "name": "Sao Miguel do Araguaia Airport",
        "city": "Sao Miguel Do Araguaia",
        "country": "BR"
      },
      {
        "iata": "VLP",
        "name": "Vila Rica Airport",
        "city": "Vila Rica",
        "country": "BR"
      },
      {
        "iata": "MBK",
        "name": "Regional Orlando Villas Boas Airport",
        "city": "Matupa",
        "country": "BR"
      },
      {
        "iata": "NOK",
        "name": "Xavantina Airport",
        "city": "Nova Xavantina",
        "country": "BR"
      },
      {
        "iata": "AHL",
        "name": "Aishalton Airport",
        "city": "Aishalton",
        "country": "GY"
      },
      {
        "iata": "NAI",
        "name": "Annai Airport",
        "city": "Annai",
        "country": "GY"
      },
      {
        "iata": "BCG",
        "name": "Bemichi Airport",
        "city": "Bemichi",
        "country": "GY"
      },
      {
        "iata": "BMJ",
        "name": "Baramita Airport",
        "city": "Baramita",
        "country": "GY"
      },
      {
        "iata": "GFO",
        "name": "Bartica A Airport",
        "city": "Bartica",
        "country": "GY"
      },
      {
        "iata": "GEO",
        "name": "Cheddi Jagan International Airport",
        "city": "Georgetown",
        "country": "GY"
      },
      {
        "iata": "OGL",
        "name": "Ogle Airport",
        "city": "Ogle",
        "country": "GY"
      },
      {
        "iata": "IMB",
        "name": "Imbaimadai Airport",
        "city": "Imbaimadai",
        "country": "GY"
      },
      {
        "iata": "KAR",
        "name": "Kamarang Airport",
        "city": "Kamarang",
        "country": "GY"
      },
      {
        "iata": "KRM",
        "name": "Karanambo Airport",
        "city": "Karanambo",
        "country": "GY"
      },
      {
        "iata": "KRG",
        "name": "Karasabai Airport",
        "city": "Karasabai",
        "country": "GY"
      },
      {
        "iata": "KTO",
        "name": "Kato Airport",
        "city": "Kato",
        "country": "GY"
      },
      {
        "iata": "LUB",
        "name": "Lumid Pau Airport",
        "city": "Lumid Pau",
        "country": "GY"
      },
      {
        "iata": "LTM",
        "name": "Lethem Airport",
        "city": "Lethem",
        "country": "GY"
      },
      {
        "iata": "USI",
        "name": "Mabaruma Airport",
        "city": "Mabaruma",
        "country": "GY"
      },
      {
        "iata": "MHA",
        "name": "Mahdia Airport",
        "city": "Mahdia",
        "country": "GY"
      },
      {
        "iata": "MYM",
        "name": "Monkey Mountain Airport",
        "city": "Monkey Mountain",
        "country": "GY"
      },
      {
        "iata": "MWJ",
        "name": "Matthews Ridge Airport",
        "city": "Matthews Ridge",
        "country": "GY"
      },
      {
        "iata": "QSX",
        "name": "New Amsterdam Airport",
        "city": "New Amsterdam",
        "country": "GY"
      },
      {
        "iata": "ORJ",
        "name": "Orinduik Airport",
        "city": "Orinduik",
        "country": "GY"
      },
      {
        "iata": "PRR",
        "name": "Paruma Airport",
        "city": "Paruma",
        "country": "GY"
      },
      {
        "iata": "ANU",
        "name": "V.C. Bird International Airport",
        "city": "St. George",
        "country": "AG"
      },
      {
        "iata": "BBQ",
        "name": "Codrington Airport",
        "city": "Codrington",
        "country": "AG"
      },
      {
        "iata": "BGI",
        "name": "Sir Grantley Adams International Airport",
        "city": "Bridgetown",
        "country": "BB"
      },
      {
        "iata": "DCF",
        "name": "Canefield Airport",
        "city": "Canefield",
        "country": "DM"
      },
      {
        "iata": "DOM",
        "name": "Melville Hall Airport",
        "city": "Marigot",
        "country": "DM"
      },
      {
        "iata": "DSD",
        "name": "La Desirade Airport",
        "city": "Grande Anse",
        "country": "GP"
      },
      {
        "iata": "BBR",
        "name": "Baillif Airport",
        "city": "Basse Terre",
        "country": "GP"
      },
      {
        "iata": "SFC",
        "name": "St-Francois Airport",
        "city": "St-Francois",
        "country": "GP"
      },
      {
        "iata": "FDF",
        "name": "Martinique Aime Cesaire International Airport",
        "city": "Fort-de-France",
        "country": "MQ"
      },
      {
        "iata": "SFG",
        "name": "L'Esperance Airport",
        "city": "Grand Case",
        "country": "MF"
      },
      {
        "iata": "SBH",
        "name": "Gustaf III Airport",
        "city": "Gustavia",
        "country": "BL"
      },
      {
        "iata": "GBJ",
        "name": "Les Bases Airport",
        "city": "Grand Bourg",
        "country": "GP"
      },
      {
        "iata": "PTP",
        "name": "Pointe-a-Pitre Le Raizet",
        "city": "Pointe-a-Pitre Le Raizet",
        "country": "GP"
      },
      {
        "iata": "LSS",
        "name": "Terre-de-Haut Airport",
        "city": "Les Saintes",
        "country": "GP"
      },
      {
        "iata": "GND",
        "name": "Point Salines International Airport",
        "city": "Saint George's",
        "country": "GD"
      },
      {
        "iata": "CRU",
        "name": "Lauriston Airport",
        "city": "Carriacou Island",
        "country": "GD"
      },
      {
        "iata": "STT",
        "name": "Cyril E. King Airport",
        "city": "Charlotte Amalie",
        "country": "VI"
      },
      {
        "iata": "STX",
        "name": "Henry E Rohlsen Airport",
        "city": "Christiansted",
        "country": "VI"
      },
      {
        "iata": "ARE",
        "name": "Antonio Nery Juarbe Pol Airport",
        "city": "Arecibo",
        "country": "PR"
      },
      {
        "iata": "BQN",
        "name": "Rafael Hernandez Airport",
        "city": "Aguadilla",
        "country": "PR"
      },
      {
        "iata": "CPX",
        "name": "Benjamin Rivera Noriega Airport",
        "city": "Culebra Island",
        "country": "PR"
      },
      {
        "iata": "FAJ",
        "name": "Diego Jimenez Torres Airport",
        "city": "Fajardo",
        "country": "PR"
      },
      {
        "iata": "SIG",
        "name": "Fernando Luis Ribas Dominicci Airport",
        "city": "San Juan",
        "country": "PR"
      },
      {
        "iata": "MAZ",
        "name": "Eugenio Maria De Hostos Airport",
        "city": "Mayaguez",
        "country": "PR"
      },
      {
        "iata": "PSE",
        "name": "Mercedita Airport",
        "city": "Ponce",
        "country": "PR"
      },
      {
        "iata": "SJU",
        "name": "Luis Munoz Marin International Airport",
        "city": "San Juan",
        "country": "PR"
      },
      {
        "iata": "VQS",
        "name": "Antonio Rivera Rodriguez Airport",
        "city": "Vieques Island",
        "country": "PR"
      },
      {
        "iata": "SKB",
        "name": "Robert L. Bradshaw International Airport",
        "city": "Basseterre",
        "country": "KN"
      },
      {
        "iata": "NEV",
        "name": "Vance W. Amory International Airport",
        "city": "Charlestown",
        "country": "KN"
      },
      {
        "iata": "SLU",
        "name": "George F. L. Charles Airport",
        "city": "Castries",
        "country": "LC"
      },
      {
        "iata": "UVF",
        "name": "Hewanorra International Airport",
        "city": "Vieux Fort",
        "country": "LC"
      },
      {
        "iata": "AUA",
        "name": "Queen Beatrix International Airport",
        "city": "Oranjestad",
        "country": "AW"
      },
      {
        "iata": "BON",
        "name": "Flamingo International Airport",
        "city": "Kralendijk",
        "country": "BQ"
      },
      {
        "iata": "CUR",
        "name": "Hato International Airport",
        "city": "Willemstad",
        "country": "CW"
      },
      {
        "iata": "EUX",
        "name": "F. D. Roosevelt Airport",
        "city": "Sint Eustatius",
        "country": "BQ"
      },
      {
        "iata": "SXM",
        "name": "Princess Juliana International Airport",
        "city": "Saint Martin",
        "country": "SX"
      },
      {
        "iata": "SAB",
        "name": "Juancho E. Yrausquin Airport",
        "city": "Saba",
        "country": "BQ"
      },
      {
        "iata": "AXA",
        "name": "Wallblake Airport",
        "city": "The Valley",
        "country": "AI"
      },
      {
        "iata": "MNI",
        "name": "John A. Osborne Airport",
        "city": "Gerald's Park",
        "country": "MS"
      },
      {
        "iata": "TAB",
        "name": "Tobago-Crown Point Airport",
        "city": "Scarborough",
        "country": "TT"
      },
      {
        "iata": "POS",
        "name": "Piarco International Airport",
        "city": "Port of Spain",
        "country": "TT"
      },
      {
        "iata": "NGD",
        "name": "Captain Auguste George Airport",
        "city": "Anegada",
        "country": "VG"
      },
      {
        "iata": "EIS",
        "name": "Terrance B. Lettsome International Airport",
        "city": "Road Town",
        "country": "VG"
      },
      {
        "iata": "VIJ",
        "name": "Virgin Gorda Airport",
        "city": "Spanish Town",
        "country": "VG"
      },
      {
        "iata": "BQU",
        "name": "J F Mitchell Airport",
        "city": "Bequia",
        "country": "VC"
      },
      {
        "iata": "CIW",
        "name": "Canouan Airport",
        "city": "Canouan",
        "country": "VC"
      },
      {
        "iata": "MQS",
        "name": "Mustique Airport",
        "city": "Mustique Island",
        "country": "VC"
      },
      {
        "iata": "UNI",
        "name": "Union Island International Airport",
        "city": "Union Island",
        "country": "VC"
      },
      {
        "iata": "SVD",
        "name": "E. T. Joshua Airport",
        "city": "Kingstown",
        "country": "VC"
      },
      {
        "iata": "BDA",
        "name": "L.F. Wade International International Airport",
        "city": "Hamilton",
        "country": "BM"
      },
      {
        "iata": "ALA",
        "name": "Almaty Airport",
        "city": "Almaty",
        "country": "KZ"
      },
      {
        "iata": "BXH",
        "name": "Balkhash Airport",
        "city": "Balkhash",
        "country": "KZ"
      },
      {
        "iata": "USJ",
        "name": "Usharal Airport",
        "city": "Usharal",
        "country": "KZ"
      },
      {
        "iata": "BXJ",
        "name": "Boralday Airport",
        "city": "Aima Ata",
        "country": "KZ"
      },
      {
        "iata": "TDK",
        "name": "Taldykorgan Airport",
        "city": "Taldy Kurgan",
        "country": "KZ"
      },
      {
        "iata": "NQZ",
        "name": "Astana International Airport",
        "city": "Astana",
        "country": "KZ"
      },
      {
        "iata": "KOV",
        "name": "Kokshetau Airport",
        "city": "Kokshetau",
        "country": "KZ"
      },
      {
        "iata": "PPK",
        "name": "Petropavlosk South Airport",
        "city": "Petropavlosk",
        "country": "KZ"
      },
      {
        "iata": "DMB",
        "name": "Taraz Airport",
        "city": "Taraz",
        "country": "KZ"
      },
      {
        "iata": "CIT",
        "name": "Shymkent Airport",
        "city": "Shymkent",
        "country": "KZ"
      },
      {
        "iata": "HSA",
        "name": "Hazrat Sultan International Airport",
        "city": "Turkistan",
        "country": "KZ"
      },
      {
        "iata": "DZN",
        "name": "Zhezkazgan Airport",
        "city": "Zhezkazgan",
        "country": "KZ"
      },
      {
        "iata": "KGF",
        "name": "Sary-Arka Airport",
        "city": "Karaganda",
        "country": "KZ"
      },
      {
        "iata": "KZO",
        "name": "Kzyl-Orda Southwest Airport",
        "city": "Kzyl-Orda",
        "country": "KZ"
      },
      {
        "iata": "URA",
        "name": "Uralsk Airport",
        "city": "Uralsk",
        "country": "KZ"
      },
      {
        "iata": "EKB",
        "name": "Ekibastuz Airport",
        "city": "Ekibastuz",
        "country": "KZ"
      },
      {
        "iata": "UKK",
        "name": "Ust-Kamennogorsk Airport",
        "city": "Ust Kamenogorsk",
        "country": "KZ"
      },
      {
        "iata": "PWQ",
        "name": "Pavlodar Airport",
        "city": "Pavlodar",
        "country": "KZ"
      },
      {
        "iata": "DLX",
        "name": "Semipalatinsk Airport",
        "city": "Semey",
        "country": "KZ"
      },
      {
        "iata": "SCO",
        "name": "Aktau Airport",
        "city": "Aktau",
        "country": "KZ"
      },
      {
        "iata": "GUW",
        "name": "Atyrau Airport",
        "city": "Atyrau",
        "country": "KZ"
      },
      {
        "iata": "AKX",
        "name": "Aktobe Airport",
        "city": "Aktyubinsk",
        "country": "KZ"
      },
      {
        "iata": "AYK",
        "name": "Arkalyk North Airport",
        "city": "Arkalyk",
        "country": "KZ"
      },
      {
        "iata": "KSN",
        "name": "Kostanay West Airport",
        "city": "Kostanay",
        "country": "KZ"
      },
      {
        "iata": "GYD",
        "name": "Heydar Aliyev International Airport",
        "city": "Baku",
        "country": "AZ"
      },
      {
        "iata": "KVD",
        "name": "Ganja Airport",
        "city": "Ganja",
        "country": "AZ"
      },
      {
        "iata": "LLK",
        "name": "Lankaran International Airport",
        "city": "Lankaran",
        "country": "AZ"
      },
      {
        "iata": "NAJ",
        "name": "Nakhchivan Airport",
        "city": "Nakhchivan",
        "country": "AZ"
      },
      {
        "iata": "GBB",
        "name": "Gabala International Airport",
        "city": "Gabala",
        "country": "AZ"
      },
      {
        "iata": "ZTU",
        "name": "Zaqatala International Airport",
        "city": "Zaqatala",
        "country": "AZ"
      },
      {
        "iata": "IKU",
        "name": "Issyk-Kul International Airport",
        "city": "Tamchy",
        "country": "KG"
      },
      {
        "iata": "FRU",
        "name": "Manas International Airport",
        "city": "Bishkek",
        "country": "KG"
      },
      {
        "iata": "OSS",
        "name": "Osh Airport",
        "city": "Osh",
        "country": "KG"
      },
      {
        "iata": "LWN",
        "name": "Gyumri Shirak Airport",
        "city": "Gyumri",
        "country": "AM"
      },
      {
        "iata": "EVN",
        "name": "Zvartnots International Airport",
        "city": "Yerevan",
        "country": "AM"
      },
      {
        "iata": "TLK",
        "name": "Talakan Airport",
        "city": "",
        "country": "RU"
      },
      {
        "iata": "ADH",
        "name": "Aldan Airport",
        "city": "Aldan",
        "country": "RU"
      },
      {
        "iata": "YKS",
        "name": "Yakutsk Airport",
        "city": "Yakutsk",
        "country": "RU"
      },
      {
        "iata": "CNN",
        "name": "Chulman Airport",
        "city": "Chulman",
        "country": "RU"
      },
      {
        "iata": "ULK",
        "name": "Lensk Airport",
        "city": "Lensk",
        "country": "RU"
      },
      {
        "iata": "PYJ",
        "name": "Polyarny Airport",
        "city": "Yakutia",
        "country": "RU"
      },
      {
        "iata": "MJZ",
        "name": "Mirny Airport",
        "city": "Mirny",
        "country": "RU"
      },
      {
        "iata": "CKH",
        "name": "Chokurdakh Airport",
        "city": "Chokurdah",
        "country": "RU"
      },
      {
        "iata": "CYX",
        "name": "Cherskiy Airport",
        "city": "Cherskiy",
        "country": "RU"
      },
      {
        "iata": "IKS",
        "name": "Tiksi Airport",
        "city": "Tiksi",
        "country": "RU"
      },
      {
        "iata": "KUT",
        "name": "Kopitnari Airport",
        "city": "Kutaisi",
        "country": "GE"
      },
      {
        "iata": "BUS",
        "name": "Batumi International Airport",
        "city": "Batumi",
        "country": "GE"
      },
      {
        "iata": "SUI",
        "name": "Sukhumi Dranda Airport",
        "city": "Sukhumi",
        "country": "GE"
      },
      {
        "iata": "TBS",
        "name": "Tbilisi International Airport",
        "city": "Tbilisi",
        "country": "GE"
      },
      {
        "iata": "BQS",
        "name": "Ignatyevo Airport",
        "city": "Blagoveschensk",
        "country": "RU"
      },
      {
        "iata": "GDG",
        "name": "Magdagachi Airport",
        "city": "Magdagachi",
        "country": "RU"
      },
      {
        "iata": "TYD",
        "name": "Tynda Airport",
        "city": "Tynda",
        "country": "RU"
      },
      {
        "iata": "KHV",
        "name": "Khabarovsk-Novy Airport",
        "city": "Khabarovsk",
        "country": "RU"
      },
      {
        "iata": "KXK",
        "name": "Komsomolsk-on-Amur Airport",
        "city": "Komsomolsk-on-Amur",
        "country": "RU"
      },
      {
        "iata": "GVN",
        "name": "Maygatka Airport.",
        "city": "Sovetskaya Gavan",
        "country": "RU"
      },
      {
        "iata": "DYR",
        "name": "Ugolny Airport",
        "city": "Anadyr",
        "country": "RU"
      },
      {
        "iata": "PVS",
        "name": "Provideniya Bay Airport",
        "city": "Chukotka",
        "country": "RU"
      },
      {
        "iata": "GDX",
        "name": "Sokol Airport",
        "city": "Magadan",
        "country": "RU"
      },
      {
        "iata": "PWE",
        "name": "Pevek Airport",
        "city": "Pevek",
        "country": "RU"
      },
      {
        "iata": "BQG",
        "name": "Bogorodskoye Airport",
        "city": "Bogorodskoye",
        "country": "RU"
      },
      {
        "iata": "OHO",
        "name": "Okhotsk Airport",
        "city": "Okhotsk",
        "country": "RU"
      },
      {
        "iata": "PKC",
        "name": "Yelizovo Airport",
        "city": "Petropavlovsk-Kamchatsky",
        "country": "RU"
      },
      {
        "iata": "OHH",
        "name": "Okha Airport",
        "city": "Okha",
        "country": "RU"
      },
      {
        "iata": "EKS",
        "name": "Shakhtyorsk Airport",
        "city": "Shakhtersk",
        "country": "RU"
      },
      {
        "iata": "DEE",
        "name": "Mendeleyevo Airport",
        "city": "Kunashir Island",
        "country": "RU"
      },
      {
        "iata": "ZZO",
        "name": "Zonalnoye Airport",
        "city": "Tymovskoye",
        "country": "RU"
      },
      {
        "iata": "UUS",
        "name": "Yuzhno-Sakhalinsk Airport",
        "city": "Yuzhno-Sakhalinsk",
        "country": "RU"
      },
      {
        "iata": "VVO",
        "name": "Vladivostok International Airport",
        "city": "Vladivostok",
        "country": "RU"
      },
      {
        "iata": "HTA",
        "name": "Chita-Kadala Airport",
        "city": "Chita",
        "country": "RU"
      },
      {
        "iata": "BTK",
        "name": "Bratsk Airport",
        "city": "Bratsk",
        "country": "RU"
      },
      {
        "iata": "UIK",
        "name": "Ust-Ilimsk Airport",
        "city": "Ust-Ilimsk",
        "country": "RU"
      },
      {
        "iata": "IKT",
        "name": "Irkutsk Airport",
        "city": "Irkutsk",
        "country": "RU"
      },
      {
        "iata": "ODO",
        "name": "Bodaybo Airport",
        "city": "Bodaybo",
        "country": "RU"
      },
      {
        "iata": "ERG",
        "name": "Yerbogachen Airport",
        "city": "Erbogachen",
        "country": "RU"
      },
      {
        "iata": "UKX",
        "name": "Ust-Kut Airport",
        "city": "Ust-Kut",
        "country": "RU"
      },
      {
        "iata": "UUD",
        "name": "Ulan-Ude Airport (Mukhino)",
        "city": "Ulan Ude",
        "country": "RU"
      },
      {
        "iata": "UJE",
        "name": "Ujae Atoll Airport",
        "city": "Ujae Atoll",
        "country": "MH"
      },
      {
        "iata": "KBP",
        "name": "Boryspil International Airport",
        "city": "Kiev",
        "country": "UA"
      },
      {
        "iata": "DOK",
        "name": "Donetsk International Airport",
        "city": "Donetsk",
        "country": "UA"
      },
      {
        "iata": "KRQ",
        "name": "Kramatorsk Airport",
        "city": "Kramatorsk",
        "country": "UA"
      },
      {
        "iata": "MPW",
        "name": "Mariupol International Airport",
        "city": "Mariupol",
        "country": "UA"
      },
      {
        "iata": "SEV",
        "name": "Sievierodonetsk Airport",
        "city": "Sievierodonetsk",
        "country": "UA"
      },
      {
        "iata": "VSG",
        "name": "Luhansk International Airport",
        "city": "Luhansk",
        "country": "UA"
      },
      {
        "iata": "ERD",
        "name": "Berdyansk Airport",
        "city": "Berdyansk",
        "country": "UA"
      },
      {
        "iata": "DNK",
        "name": "Dnipropetrovsk International Airport",
        "city": "Dnipropetrovsk",
        "country": "UA"
      },
      {
        "iata": "OZH",
        "name": "Zaporizhzhia International Airport",
        "city": "Zaporizhia",
        "country": "UA"
      },
      {
        "iata": "KWG",
        "name": "Kryvyi Rih International Airport",
        "city": "Kryvyi Rih",
        "country": "UA"
      },
      {
        "iata": "KHC",
        "name": "Kerch Airport",
        "city": "Kerch",
        "country": "UA"
      },
      {
        "iata": "HRK",
        "name": "Kharkiv International Airport",
        "city": "Kharkiv",
        "country": "UA"
      },
      {
        "iata": "PLV",
        "name": "Suprunovka Airport",
        "city": "Poltava",
        "country": "UA"
      },
      {
        "iata": "UMY",
        "name": "Sumy Airport",
        "city": "Sumy",
        "country": "UA"
      },
      {
        "iata": "CKC",
        "name": "Cherkasy International Airport",
        "city": "Cherkasy",
        "country": "UA"
      },
      {
        "iata": "KGO",
        "name": "Kirovograd Airport",
        "city": "Kirovograd",
        "country": "UA"
      },
      {
        "iata": "IEV",
        "name": "Kiev Zhuliany International Airport",
        "city": "Kiev",
        "country": "UA"
      },
      {
        "iata": "GML",
        "name": "Gostomel Airport",
        "city": "Kiev",
        "country": "UA"
      },
      {
        "iata": "ZTR",
        "name": "Zhytomyr Airport",
        "city": "",
        "country": "UA"
      },
      {
        "iata": "UCK",
        "name": "Lutsk Airport",
        "city": "Lutsk",
        "country": "UA"
      },
      {
        "iata": "HMJ",
        "name": "Khmelnytskyi Airport",
        "city": "Khmelnytskyi",
        "country": "UA"
      },
      {
        "iata": "IFO",
        "name": "Ivano-Frankivsk International Airport",
        "city": "Ivano-Frankivsk",
        "country": "UA"
      },
      {
        "iata": "LWO",
        "name": "Lviv International Airport",
        "city": "Lviv",
        "country": "UA"
      },
      {
        "iata": "CWC",
        "name": "Chernivtsi International Airport",
        "city": "Chernivtsi",
        "country": "UA"
      },
      {
        "iata": "RWN",
        "name": "Rivne International Airport",
        "city": "Rivne",
        "country": "UA"
      },
      {
        "iata": "TNL",
        "name": "Ternopil International Airport",
        "city": "Ternopil",
        "country": "UA"
      },
      {
        "iata": "UDJ",
        "name": "Uzhhorod International Airport",
        "city": "Uzhhorod",
        "country": "UA"
      },
      {
        "iata": "KHE",
        "name": "Chernobayevka Airport",
        "city": "Kherson",
        "country": "UA"
      },
      {
        "iata": "NLV",
        "name": "Mykolaiv International Airport",
        "city": "Nikolayev",
        "country": "UA"
      },
      {
        "iata": "ODS",
        "name": "Odessa International Airport",
        "city": "Odessa",
        "country": "UA"
      },
      {
        "iata": "VIN",
        "name": "Vinnytsia/Gavyryshivka Airport",
        "city": "Vinnitsa",
        "country": "UA"
      },
      {
        "iata": "ARH",
        "name": "Talagi Airport",
        "city": "Archangelsk",
        "country": "RU"
      },
      {
        "iata": "NNM",
        "name": "Naryan Mar Airport",
        "city": "Naryan Mar",
        "country": "RU"
      },
      {
        "iata": "CSH",
        "name": "Solovki Airport",
        "city": "Solovetsky Islands",
        "country": "RU"
      },
      {
        "iata": "AMV",
        "name": "Amderma Airport",
        "city": "Amderma",
        "country": "RU"
      },
      {
        "iata": "KSZ",
        "name": "Kotlas Airport",
        "city": "Kotlas",
        "country": "RU"
      },
      {
        "iata": "LED",
        "name": "Pulkovo Airport",
        "city": "St. Petersburg",
        "country": "RU"
      },
      {
        "iata": "KVK",
        "name": "Kirovsk-Apatity Airport",
        "city": "Apatity",
        "country": "RU"
      },
      {
        "iata": "MMK",
        "name": "Murmansk Airport",
        "city": "Murmansk",
        "country": "RU"
      },
      {
        "iata": "VLU",
        "name": "Velikiye Luki Airport",
        "city": "Velikiye Luki",
        "country": "RU"
      },
      {
        "iata": "PKV",
        "name": "Pskov Airport",
        "city": "Pskov",
        "country": "RU"
      },
      {
        "iata": "PES",
        "name": "Petrozavodsk Airport",
        "city": "Petrozavodsk",
        "country": "RU"
      },
      {
        "iata": "CEE",
        "name": "Cherepovets Airport",
        "city": "Cherepovets",
        "country": "RU"
      },
      {
        "iata": "VUS",
        "name": "Velikiy Ustyug Airport",
        "city": "Velikiy Ustyug",
        "country": "RU"
      },
      {
        "iata": "VGD",
        "name": "Vologda Airport",
        "city": "Vologda",
        "country": "RU"
      },
      {
        "iata": "BQT",
        "name": "Brest Airport",
        "city": "Brest",
        "country": "BY"
      },
      {
        "iata": "GME",
        "name": "Gomel Airport",
        "city": "Gomel",
        "country": "BY"
      },
      {
        "iata": "VTB",
        "name": "Vitebsk East Airport",
        "city": "Vitebsk",
        "country": "BY"
      },
      {
        "iata": "KGD",
        "name": "Khrabrovo Airport",
        "city": "Kaliningrad",
        "country": "RU"
      },
      {
        "iata": "GNA",
        "name": "Hrodna Airport",
        "city": "Hrodna",
        "country": "BY"
      },
      {
        "iata": "MHP",
        "name": "Minsk 1 Airport",
        "city": "Minsk",
        "country": "BY"
      },
      {
        "iata": "MSQ",
        "name": "Minsk International Airport",
        "city": "Minsk",
        "country": "BY"
      },
      {
        "iata": "MVQ",
        "name": "Mogilev Airport",
        "city": "Mogilev",
        "country": "BY"
      },
      {
        "iata": "ABA",
        "name": "Abakan Airport",
        "city": "Abakan",
        "country": "RU"
      },
      {
        "iata": "BAX",
        "name": "Barnaul Airport",
        "city": "Barnaul",
        "country": "RU"
      },
      {
        "iata": "RGK",
        "name": "Gorno-Altaysk Airport",
        "city": "Gorno-Altaysk",
        "country": "RU"
      },
      {
        "iata": "KEJ",
        "name": "Kemerovo Airport",
        "city": "Kemerovo",
        "country": "RU"
      },
      {
        "iata": "EIE",
        "name": "Yeniseysk Airport",
        "city": "Yeniseysk",
        "country": "RU"
      },
      {
        "iata": "KJA",
        "name": "Yemelyanovo Airport",
        "city": "Krasnoyarsk",
        "country": "RU"
      },
      {
        "iata": "ACS",
        "name": "Achinsk Airport",
        "city": "Achinsk",
        "country": "RU"
      },
      {
        "iata": "KYZ",
        "name": "Kyzyl Airport",
        "city": "Kyzyl",
        "country": "RU"
      },
      {
        "iata": "OVB",
        "name": "Tolmachevo Airport",
        "city": "Novosibirsk",
        "country": "RU"
      },
      {
        "iata": "OMS",
        "name": "Omsk Central Airport",
        "city": "Omsk",
        "country": "RU"
      },
      {
        "iata": "TOF",
        "name": "Bogashevo Airport",
        "city": "Tomsk",
        "country": "RU"
      },
      {
        "iata": "NOZ",
        "name": "Spichenkovo Airport",
        "city": "Novokuznetsk",
        "country": "RU"
      },
      {
        "iata": "DKS",
        "name": "Dikson Airport",
        "city": "Dikson",
        "country": "RU"
      },
      {
        "iata": "HTG",
        "name": "Khatanga Airport",
        "city": "Khatanga",
        "country": "RU"
      },
      {
        "iata": "IAA",
        "name": "Igarka Airport",
        "city": "Igarka",
        "country": "RU"
      },
      {
        "iata": "NSK",
        "name": "Norilsk-Alykel Airport",
        "city": "Norilsk",
        "country": "RU"
      },
      {
        "iata": "UKS",
        "name": "Belbek Airport",
        "city": "Sevastopol",
        "country": "UA"
      },
      {
        "iata": "SIP",
        "name": "Simferopol International Airport",
        "city": "Simferopol",
        "country": "RU"
      },
      {
        "iata": "AAQ",
        "name": "Anapa Airport",
        "city": "Anapa",
        "country": "RU"
      },
      {
        "iata": "EIK",
        "name": "Yeysk Airport",
        "city": "Yeysk",
        "country": "RU"
      },
      {
        "iata": "GDZ",
        "name": "Gelendzhik Airport",
        "city": "Gelendzhik",
        "country": "RU"
      },
      {
        "iata": "KRR",
        "name": "Krasnodar International Airport",
        "city": "Krasnodar",
        "country": "RU"
      },
      {
        "iata": "GRV",
        "name": "Grozny North Airport",
        "city": "Grozny",
        "country": "RU"
      },
      {
        "iata": "MCX",
        "name": "Uytash Airport",
        "city": "Makhachkala",
        "country": "RU"
      },
      {
        "iata": "MRV",
        "name": "Mineralnyye Vody Airport",
        "city": "Mineralnyye Vody",
        "country": "RU"
      },
      {
        "iata": "NAL",
        "name": "Nalchik Airport",
        "city": "Nalchik",
        "country": "RU"
      },
      {
        "iata": "OGZ",
        "name": "Beslan Airport",
        "city": "Beslan",
        "country": "RU"
      },
      {
        "iata": "IGT",
        "name": "Magas Airport",
        "city": "Magas",
        "country": "RU"
      },
      {
        "iata": "STW",
        "name": "Stavropol Shpakovskoye Airport",
        "city": "Stavropol",
        "country": "RU"
      },
      {
        "iata": "ROV",
        "name": "Platov International Airport",
        "city": "Rostov-on-Don",
        "country": "RU"
      },
      {
        "iata": "RVI",
        "name": "Rostov-na-Donu Airport",
        "city": "Rostov-on-Don",
        "country": "RU"
      },
      {
        "iata": "AER",
        "name": "Sochi International Airport",
        "city": "Sochi",
        "country": "RU"
      },
      {
        "iata": "ASF",
        "name": "Astrakhan Airport",
        "city": "Astrakhan",
        "country": "RU"
      },
      {
        "iata": "ESL",
        "name": "Elista Airport",
        "city": "Elista",
        "country": "RU"
      },
      {
        "iata": "VOG",
        "name": "Volgograd International Airport",
        "city": "Volgograd",
        "country": "RU"
      },
      {
        "iata": "CEK",
        "name": "Chelyabinsk Balandino Airport",
        "city": "Chelyabinsk",
        "country": "RU"
      },
      {
        "iata": "MQF",
        "name": "Magnitogorsk International Airport",
        "city": "Magnitogorsk",
        "country": "RU"
      },
      {
        "iata": "SLY",
        "name": "Salekhard Airport",
        "city": "Salekhard",
        "country": "RU"
      },
      {
        "iata": "YMK",
        "name": "Mys Kamenny Airport",
        "city": "Mys Kamennyi",
        "country": "RU"
      },
      {
        "iata": "TQL",
        "name": "Tarko-Sale Airport",
        "city": "Tarko-Sale",
        "country": "RU"
      },
      {
        "iata": "UEN",
        "name": "Urengoy Airport",
        "city": "Urengoy",
        "country": "RU"
      },
      {
        "iata": "EZV",
        "name": "Berezovo Airport",
        "city": "",
        "country": "RU"
      },
      {
        "iata": "HMA",
        "name": "Khanty Mansiysk Airport",
        "city": "Khanty-Mansiysk",
        "country": "RU"
      },
      {
        "iata": "IRM",
        "name": "Igrim Airport",
        "city": "",
        "country": "RU"
      },
      {
        "iata": "NYA",
        "name": "Nyagan Airport",
        "city": "Nyagan",
        "country": "RU"
      },
      {
        "iata": "OVS",
        "name": "Sovetskiy Airport",
        "city": "Sovetskiy",
        "country": "RU"
      },
      {
        "iata": "URJ",
        "name": "Uray Airport",
        "city": "Uray",
        "country": "RU"
      },
      {
        "iata": "IJK",
        "name": "Izhevsk Airport",
        "city": "Izhevsk",
        "country": "RU"
      },
      {
        "iata": "KVX",
        "name": "Pobedilovo Airport",
        "city": "Kirov",
        "country": "RU"
      },
      {
        "iata": "NYM",
        "name": "Nadym Airport",
        "city": "Nadym",
        "country": "RU"
      },
      {
        "iata": "NUX",
        "name": "Novy Urengoy Airport",
        "city": "Novy Urengoy",
        "country": "RU"
      },
      {
        "iata": "NJC",
        "name": "Nizhnevartovsk Airport",
        "city": "Nizhnevartovsk",
        "country": "RU"
      },
      {
        "iata": "PEE",
        "name": "Bolshoye Savino Airport",
        "city": "Perm",
        "country": "RU"
      },
      {
        "iata": "KGP",
        "name": "Kogalym International Airport",
        "city": "Kogalym",
        "country": "RU"
      },
      {
        "iata": "NFG",
        "name": "Nefteyugansk Airport",
        "city": "Nefteyugansk",
        "country": "RU"
      },
      {
        "iata": "NOJ",
        "name": "Noyabrsk Airport",
        "city": "Noyabrsk",
        "country": "RU"
      },
      {
        "iata": "SGC",
        "name": "Surgut Airport",
        "city": "Surgut",
        "country": "RU"
      },
      {
        "iata": "SVX",
        "name": "Koltsovo Airport",
        "city": "Yekaterinburg",
        "country": "RU"
      },
      {
        "iata": "TOX",
        "name": "Tobolsk Airport",
        "city": "Tobolsk",
        "country": "RU"
      },
      {
        "iata": "TJM",
        "name": "Roshchino International Airport",
        "city": "Tyumen",
        "country": "RU"
      },
      {
        "iata": "KRO",
        "name": "Kurgan Airport",
        "city": "Kurgan",
        "country": "RU"
      },
      {
        "iata": "ASB",
        "name": "Ashgabat Airport",
        "city": "Ashgabat",
        "country": "TM"
      },
      {
        "iata": "KRW",
        "name": "Turkmenbashi Airport",
        "city": "Krasnovodsk",
        "country": "TM"
      },
      {
        "iata": "MYP",
        "name": "Mary Airport",
        "city": "Mary",
        "country": "TM"
      },
      {
        "iata": "TAZ",
        "name": "Dashoguz Airport",
        "city": "Dashoguz",
        "country": "TM"
      },
      {
        "iata": "CRZ",
        "name": "Turkmenabat Airport",
        "city": "Turkmenabat",
        "country": "TM"
      },
      {
        "iata": "DYU",
        "name": "Dushanbe Airport",
        "city": "Dushanbe",
        "country": "TJ"
      },
      {
        "iata": "TJU",
        "name": "Kulob Airport",
        "city": "Kulyab",
        "country": "TJ"
      },
      {
        "iata": "LBD",
        "name": "Khudzhand Airport",
        "city": "Khudzhand",
        "country": "TJ"
      },
      {
        "iata": "KQT",
        "name": "Qurghonteppa International Airport",
        "city": "Kurgan-Tyube",
        "country": "TJ"
      },
      {
        "iata": "AZN",
        "name": "Andizhan Airport",
        "city": "Andizhan",
        "country": "UZ"
      },
      {
        "iata": "FEG",
        "name": "Fergana Airport",
        "city": "Fergana",
        "country": "UZ"
      },
      {
        "iata": "NMA",
        "name": "Namangan Airport",
        "city": "Namangan",
        "country": "UZ"
      },
      {
        "iata": "NCU",
        "name": "Nukus Airport",
        "city": "Nukus",
        "country": "UZ"
      },
      {
        "iata": "UGC",
        "name": "Urgench Airport",
        "city": "Urgench",
        "country": "UZ"
      },
      {
        "iata": "NVI",
        "name": "Navoi Airport",
        "city": "Navoi",
        "country": "UZ"
      },
      {
        "iata": "BHK",
        "name": "Bukhara Airport",
        "city": "Bukhara",
        "country": "UZ"
      },
      {
        "iata": "KSQ",
        "name": "Karshi Airport",
        "city": "Karshi",
        "country": "UZ"
      },
      {
        "iata": "AFS",
        "name": "Sugraly Airport",
        "city": "Zarafshan",
        "country": "UZ"
      },
      {
        "iata": "SKD",
        "name": "Samarkand Airport",
        "city": "Samarkand",
        "country": "UZ"
      },
      {
        "iata": "TMJ",
        "name": "Termez Airport",
        "city": "Termez",
        "country": "UZ"
      },
      {
        "iata": "TAS",
        "name": "Tashkent International Airport",
        "city": "Tashkent",
        "country": "UZ"
      },
      {
        "iata": "KMW",
        "name": "Kostroma Sokerkino Airport",
        "city": "Kostroma",
        "country": "RU"
      },
      {
        "iata": "BKA",
        "name": "Bykovo Airport",
        "city": "Moscow",
        "country": "RU"
      },
      {
        "iata": "IWA",
        "name": "Ivanovo South Airport",
        "city": "Ivanovo",
        "country": "RU"
      },
      {
        "iata": "RYB",
        "name": "Staroselye Airport",
        "city": "Rybinsk",
        "country": "RU"
      },
      {
        "iata": "BZK",
        "name": "Bryansk Airport",
        "city": "Bryansk",
        "country": "RU"
      },
      {
        "iata": "LNX",
        "name": "Smolensk South Airport",
        "city": "Smolensk",
        "country": "RU"
      },
      {
        "iata": "DME",
        "name": "Domodedovo International Airport",
        "city": "Moscow",
        "country": "RU"
      },
      {
        "iata": "IAR",
        "name": "Tunoshna Airport",
        "city": "",
        "country": "RU"
      },
      {
        "iata": "SVO",
        "name": "Sheremetyevo International Airport",
        "city": "Moscow",
        "country": "RU"
      },
      {
        "iata": "KLD",
        "name": "Migalovo Air Base",
        "city": "Tver",
        "country": "RU"
      },
      {
        "iata": "EGO",
        "name": "Belgorod International Airport",
        "city": "Belgorod",
        "country": "RU"
      },
      {
        "iata": "URS",
        "name": "Kursk East Airport",
        "city": "Kursk",
        "country": "RU"
      },
      {
        "iata": "LPK",
        "name": "Lipetsk Airport",
        "city": "Lipetsk",
        "country": "RU"
      },
      {
        "iata": "VOZ",
        "name": "Voronezh International Airport",
        "city": "Voronezh",
        "country": "RU"
      },
      {
        "iata": "OEL",
        "name": "Oryol Yuzhny Airport",
        "city": "Orel",
        "country": "RU"
      },
      {
        "iata": "TBW",
        "name": "Donskoye Airport",
        "city": "Tambov",
        "country": "RU"
      },
      {
        "iata": "RZN",
        "name": "Turlatovo Airport",
        "city": "Ryazan",
        "country": "RU"
      },
      {
        "iata": "VKO",
        "name": "Vnukovo International Airport",
        "city": "Moscow",
        "country": "RU"
      },
      {
        "iata": "UCT",
        "name": "Ukhta Airport",
        "city": "Ukhta",
        "country": "RU"
      },
      {
        "iata": "INA",
        "name": "Inta Airport",
        "city": "Inta",
        "country": "RU"
      },
      {
        "iata": "PEX",
        "name": "Pechora Airport",
        "city": "Pechora",
        "country": "RU"
      },
      {
        "iata": "USK",
        "name": "Usinsk Airport",
        "city": "Usinsk",
        "country": "RU"
      },
      {
        "iata": "VKT",
        "name": "Vorkuta Airport",
        "city": "Vorkuta",
        "country": "RU"
      },
      {
        "iata": "UTS",
        "name": "Ust-Tsylma Airport",
        "city": "Ust-Tsylma",
        "country": "RU"
      },
      {
        "iata": "SCW",
        "name": "Syktyvkar Airport",
        "city": "Syktyvkar",
        "country": "RU"
      },
      {
        "iata": "GOJ",
        "name": "Nizhny Novgorod International Airport",
        "city": "Nizhny Novgorod",
        "country": "RU"
      },
      {
        "iata": "UUA",
        "name": "Bugulma Airport",
        "city": "Bugulma",
        "country": "RU"
      },
      {
        "iata": "KZN",
        "name": "Kazan International Airport",
        "city": "Kazan",
        "country": "RU"
      },
      {
        "iata": "NBC",
        "name": "Begishevo Airport",
        "city": "Nizhnekamsk",
        "country": "RU"
      },
      {
        "iata": "JOK",
        "name": "Yoshkar-Ola Airport",
        "city": "Yoshkar-Ola",
        "country": "RU"
      },
      {
        "iata": "CSY",
        "name": "Cheboksary Airport",
        "city": "Cheboksary",
        "country": "RU"
      },
      {
        "iata": "ULV",
        "name": "Ulyanovsk Baratayevka Airport",
        "city": "Ulyanovsk",
        "country": "RU"
      },
      {
        "iata": "ULY",
        "name": "Ulyanovsk East Airport",
        "city": "Ulyanovsk",
        "country": "RU"
      },
      {
        "iata": "REN",
        "name": "Orenburg Central Airport",
        "city": "Orenburg",
        "country": "RU"
      },
      {
        "iata": "OSW",
        "name": "Orsk Airport",
        "city": "Orsk",
        "country": "RU"
      },
      {
        "iata": "PEZ",
        "name": "Penza Airport",
        "city": "Penza",
        "country": "RU"
      },
      {
        "iata": "SKX",
        "name": "Saransk Airport",
        "city": "Saransk",
        "country": "RU"
      },
      {
        "iata": "BWO",
        "name": "Balakovo Airport",
        "city": "Balakovo",
        "country": "RU"
      },
      {
        "iata": "RTW",
        "name": "Saratov Central Airport",
        "city": "Saratov",
        "country": "RU"
      },
      {
        "iata": "BCX",
        "name": "Beloretsk Airport",
        "city": "Beloretsk",
        "country": "RU"
      },
      {
        "iata": "NEF",
        "name": "Neftekamsk Airport",
        "city": "Neftekamsk",
        "country": "RU"
      },
      {
        "iata": "OKT",
        "name": "Oktyabrskiy Airport",
        "city": "Kzyl-Yar",
        "country": "RU"
      },
      {
        "iata": "UFA",
        "name": "Ufa International Airport",
        "city": "Ufa",
        "country": "RU"
      },
      {
        "iata": "KUF",
        "name": "Kurumoch International Airport",
        "city": "Samara",
        "country": "RU"
      },
      {
        "iata": "DIU",
        "name": "Diu Airport",
        "city": "Diu",
        "country": "IN"
      },
      {
        "iata": "AMD",
        "name": "Sardar Vallabhbhai Patel International Airport",
        "city": "Ahmedabad",
        "country": "IN"
      },
      {
        "iata": "AKD",
        "name": "Akola Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "IXU",
        "name": "Aurangabad Airport",
        "city": "Aurangabad",
        "country": "IN"
      },
      {
        "iata": "BOM",
        "name": "Chhatrapati Shivaji International Airport",
        "city": "Mumbai",
        "country": "IN"
      },
      {
        "iata": "PAB",
        "name": "Bilaspur Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "BHJ",
        "name": "Bhuj Airport",
        "city": "Bhuj",
        "country": "IN"
      },
      {
        "iata": "IXG",
        "name": "Belgaum Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "BDQ",
        "name": "Vadodara Airport",
        "city": "Vadodara",
        "country": "IN"
      },
      {
        "iata": "BHO",
        "name": "Bhopal Airport",
        "city": "Bhopal",
        "country": "IN"
      },
      {
        "iata": "BHU",
        "name": "Bhavnagar Airport",
        "city": "Bhavnagar",
        "country": "IN"
      },
      {
        "iata": "NMB",
        "name": "Daman Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "GUX",
        "name": "Guna Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "GOI",
        "name": "Dabolim Airport",
        "city": "Vasco da Gama",
        "country": "IN"
      },
      {
        "iata": "HBX",
        "name": "Hubli Airport",
        "city": "Hubli",
        "country": "IN"
      },
      {
        "iata": "IDR",
        "name": "Devi Ahilyabai Holkar Airport",
        "city": "Indore",
        "country": "IN"
      },
      {
        "iata": "JLR",
        "name": "Jabalpur Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "JGA",
        "name": "Jamnagar Airport",
        "city": "Jamnagar",
        "country": "IN"
      },
      {
        "iata": "IXY",
        "name": "Kandla Airport",
        "city": "Kandla",
        "country": "IN"
      },
      {
        "iata": "HJR",
        "name": "Khajuraho Airport",
        "city": "Khajuraho",
        "country": "IN"
      },
      {
        "iata": "KLH",
        "name": "Kolhapur Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "IXK",
        "name": "Keshod Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "LTU",
        "name": "Murod Kond Airport",
        "city": "Latur",
        "country": "IN"
      },
      {
        "iata": "NDC",
        "name": "Nanded Airport",
        "city": "Nanded",
        "country": "IN"
      },
      {
        "iata": "NAG",
        "name": "Dr. Babasaheb Ambedkar International Airport",
        "city": "Naqpur",
        "country": "IN"
      },
      {
        "iata": "ISK",
        "name": "Gandhinagar Airport",
        "city": "Nashik",
        "country": "IN"
      },
      {
        "iata": "PNQ",
        "name": "Pune Airport",
        "city": "Pune",
        "country": "IN"
      },
      {
        "iata": "PBD",
        "name": "Porbandar Airport",
        "city": "Porbandar",
        "country": "IN"
      },
      {
        "iata": "RTC",
        "name": "Ratnagiri Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "RAJ",
        "name": "Rajkot Airport",
        "city": "Rajkot",
        "country": "IN"
      },
      {
        "iata": "RPR",
        "name": "Raipur Airport",
        "city": "Raipur",
        "country": "IN"
      },
      {
        "iata": "SAG",
        "name": "Shirdi Airport",
        "city": "Kakadi",
        "country": "IN"
      },
      {
        "iata": "SSE",
        "name": "Solapur Airport",
        "city": "Solapur",
        "country": "IN"
      },
      {
        "iata": "STV",
        "name": "Surat Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "UDR",
        "name": "Maharana Pratap Airport",
        "city": "Udaipur",
        "country": "IN"
      },
      {
        "iata": "CMB",
        "name": "Bandaranaike International Colombo Airport",
        "city": "Colombo",
        "country": "LK"
      },
      {
        "iata": "ACJ",
        "name": "Anuradhapura Air Force Base",
        "city": "Anuradhapura",
        "country": "LK"
      },
      {
        "iata": "BTC",
        "name": "Batticaloa Airport",
        "city": "Batticaloa",
        "country": "LK"
      },
      {
        "iata": "RML",
        "name": "Colombo Ratmalana Airport",
        "city": "Colombo",
        "country": "LK"
      },
      {
        "iata": "GOY",
        "name": "Amparai Airport",
        "city": "Amparai",
        "country": "LK"
      },
      {
        "iata": "MNH",
        "name": "Hingurakgoda Air Force Base",
        "city": "Polonnaruwa Town",
        "country": "LK"
      },
      {
        "iata": "JAF",
        "name": "Kankesanturai Airport",
        "city": "Jaffna",
        "country": "LK"
      },
      {
        "iata": "KCT",
        "name": "Koggala Airport",
        "city": "Galle",
        "country": "LK"
      },
      {
        "iata": "GIU",
        "name": "Sigiriya Air Force Base",
        "city": "Sigiriya",
        "country": "LK"
      },
      {
        "iata": "TRR",
        "name": "China Bay Airport",
        "city": "Trincomalee",
        "country": "LK"
      },
      {
        "iata": "WRZ",
        "name": "Weerawila International Airport",
        "city": "Weerawila",
        "country": "LK"
      },
      {
        "iata": "BBM",
        "name": "Battambang Airport",
        "city": "Battambang",
        "country": "KH"
      },
      {
        "iata": "KZC",
        "name": "Kampong Chhnang Airport",
        "city": "",
        "country": "KH"
      },
      {
        "iata": "KKZ",
        "name": "Kaoh Kong Airport",
        "city": "Kaoh Kong",
        "country": "KH"
      },
      {
        "iata": "KTI",
        "name": "Kratie Airport",
        "city": "Kratie",
        "country": "KH"
      },
      {
        "iata": "PNH",
        "name": "Phnom Penh International Airport",
        "city": "Phnom Penh",
        "country": "KH"
      },
      {
        "iata": "RBE",
        "name": "Ratanakiri Airport",
        "city": "Ratanakiri",
        "country": "KH"
      },
      {
        "iata": "REP",
        "name": "Angkor International Airport",
        "city": "Siem Reap",
        "country": "KH"
      },
      {
        "iata": "TNX",
        "name": "Stung Treng Airport",
        "city": "Stung Treng",
        "country": "KH"
      },
      {
        "iata": "KOS",
        "name": "Sihanoukville International Airport",
        "city": "Sihanukville",
        "country": "KH"
      },
      {
        "iata": "IXV",
        "name": "Along Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "IXA",
        "name": "Agartala Airport",
        "city": "Agartala",
        "country": "IN"
      },
      {
        "iata": "IXB",
        "name": "Bagdogra Airport",
        "city": "Siliguri",
        "country": "IN"
      },
      {
        "iata": "RGH",
        "name": "Balurghat Airport",
        "city": "Balurghat",
        "country": "IN"
      },
      {
        "iata": "SHL",
        "name": "Shillong Airport",
        "city": "Shillong",
        "country": "IN"
      },
      {
        "iata": "VNS",
        "name": "Lal Bahadur Shastri Airport",
        "city": "Varanasi",
        "country": "IN"
      },
      {
        "iata": "BBI",
        "name": "Biju Patnaik Airport",
        "city": "Bhubaneswar",
        "country": "IN"
      },
      {
        "iata": "CCU",
        "name": "Netaji Subhash Chandra Bose International Airport",
        "city": "Kolkata",
        "country": "IN"
      },
      {
        "iata": "COH",
        "name": "Cooch Behar Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "DBD",
        "name": "Dhanbad Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "DGH",
        "name": "Deoghar Airport",
        "city": "Deoghar",
        "country": "IN"
      },
      {
        "iata": "DAE",
        "name": "Daporijo Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "GOP",
        "name": "Gorakhpur Airport",
        "city": "Gorakhpur",
        "country": "IN"
      },
      {
        "iata": "GAU",
        "name": "Lokpriya Gopinath Bordoloi International Airport",
        "city": "Guwahati",
        "country": "IN"
      },
      {
        "iata": "GAY",
        "name": "Gaya Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "IMF",
        "name": "Imphal Airport",
        "city": "Imphal",
        "country": "IN"
      },
      {
        "iata": "JRG",
        "name": "Jharsuguda Airport",
        "city": "Jharsuguda",
        "country": "IN"
      },
      {
        "iata": "PYB",
        "name": "Jeypore Airport",
        "city": "Jeypore",
        "country": "IN"
      },
      {
        "iata": "IXW",
        "name": "Jamshedpur Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "JRH",
        "name": "Jorhat Airport",
        "city": "Jorhat",
        "country": "IN"
      },
      {
        "iata": "IXQ",
        "name": "Kamalpur Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "IXH",
        "name": "Kailashahar Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "IXS",
        "name": "Silchar Airport",
        "city": "Silchar",
        "country": "IN"
      },
      {
        "iata": "IXN",
        "name": "Khowai Airport",
        "city": "Khowai",
        "country": "IN"
      },
      {
        "iata": "AJL",
        "name": "Lengpui Airport",
        "city": "Aizawl",
        "country": "IN"
      },
      {
        "iata": "IXI",
        "name": "North Lakhimpur Airport",
        "city": "Lilabari",
        "country": "IN"
      },
      {
        "iata": "LDA",
        "name": "Malda Airport",
        "city": "Malda",
        "country": "IN"
      },
      {
        "iata": "DIB",
        "name": "Dibrugarh Airport",
        "city": "Dibrugarh",
        "country": "IN"
      },
      {
        "iata": "DMU",
        "name": "Dimapur Airport",
        "city": "Dimapur",
        "country": "IN"
      },
      {
        "iata": "MZU",
        "name": "Muzaffarpur Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "IXT",
        "name": "Pasighat Airport",
        "city": "Pasighat",
        "country": "IN"
      },
      {
        "iata": "PAT",
        "name": "Lok Nayak Jayaprakash Airport",
        "city": "Patna",
        "country": "IN"
      },
      {
        "iata": "IXR",
        "name": "Birsa Munda Airport",
        "city": "Ranchi",
        "country": "IN"
      },
      {
        "iata": "RRK",
        "name": "Rourkela Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "RUP",
        "name": "Rupsi India Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "TEI",
        "name": "Tezu Airport",
        "city": "Tezu",
        "country": "IN"
      },
      {
        "iata": "TEZ",
        "name": "Tezpur Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "VTZ",
        "name": "Vishakhapatnam Airport",
        "city": "Visakhapatnam",
        "country": "IN"
      },
      {
        "iata": "ZER",
        "name": "Zero Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "BZL",
        "name": "Barisal Airport",
        "city": "Barisal",
        "country": "BD"
      },
      {
        "iata": "CXB",
        "name": "Cox's Bazar Airport",
        "city": "Cox's Bazar",
        "country": "BD"
      },
      {
        "iata": "CLA",
        "name": "Comilla Airport",
        "city": "Comilla",
        "country": "BD"
      },
      {
        "iata": "CGP",
        "name": "Shah Amanat International Airport",
        "city": "Chittagong",
        "country": "BD"
      },
      {
        "iata": "DAC",
        "name": "Dhaka / Hazrat Shahjalal International Airport",
        "city": "Dhaka",
        "country": "BD"
      },
      {
        "iata": "IRD",
        "name": "Ishurdi Airport",
        "city": "Ishurdi",
        "country": "BD"
      },
      {
        "iata": "JSR",
        "name": "Jessore Airport",
        "city": "Jashahor",
        "country": "BD"
      },
      {
        "iata": "LLJ",
        "name": "Lalmonirhat Airport",
        "city": "Lalmonirhat",
        "country": "BD"
      },
      {
        "iata": "RJH",
        "name": "Shah Mokhdum Airport",
        "city": "Rajshahi",
        "country": "BD"
      },
      {
        "iata": "SPD",
        "name": "Saidpur Airport",
        "city": "Saidpur",
        "country": "BD"
      },
      {
        "iata": "TKR",
        "name": "Thakurgaon Airport",
        "city": "Thakurgaon",
        "country": "BD"
      },
      {
        "iata": "ZHM",
        "name": "Shamshernagar Airport",
        "city": "Shamshernagar",
        "country": "BD"
      },
      {
        "iata": "ZYL",
        "name": "Osmany International Airport",
        "city": "Sylhet",
        "country": "BD"
      },
      {
        "iata": "HKG",
        "name": "Chek Lap Kok International Airport",
        "city": "Hong Kong",
        "country": "HK"
      },
      {
        "iata": "AGR",
        "name": "Agra Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "IXD",
        "name": "Allahabad Airport",
        "city": "Allahabad",
        "country": "IN"
      },
      {
        "iata": "ATQ",
        "name": "Sri Guru Ram Dass Jee International Airport Amritsar",
        "city": "Amritsar",
        "country": "IN"
      },
      {
        "iata": "BKB",
        "name": "Nal Airport",
        "city": "Bikaner",
        "country": "IN"
      },
      {
        "iata": "VNS",
        "name": "Lal Bahadur Shastri Airport",
        "city": "Varanasi",
        "country": "IN"
      },
      {
        "iata": "KUU",
        "name": "Kullu Manali Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "BUP",
        "name": "Bhatinda Air Force Station",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "IXC",
        "name": "Chandigarh Airport",
        "city": "Chandigarh",
        "country": "IN"
      },
      {
        "iata": "DED",
        "name": "Dehradun Airport",
        "city": "Dehradun",
        "country": "IN"
      },
      {
        "iata": "DEL",
        "name": "Indira Gandhi International Airport",
        "city": "New Delhi",
        "country": "IN"
      },
      {
        "iata": "DHM",
        "name": "Kangra Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "GWL",
        "name": "Gwalior Airport",
        "city": "Gwalior",
        "country": "IN"
      },
      {
        "iata": "HSS",
        "name": "Hissar Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "JDH",
        "name": "Jodhpur Airport",
        "city": "Jodhpur",
        "country": "IN"
      },
      {
        "iata": "JAI",
        "name": "Jaipur International Airport",
        "city": "Jaipur",
        "country": "IN"
      },
      {
        "iata": "JSA",
        "name": "Jaisalmer Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "IXJ",
        "name": "Jammu Airport",
        "city": "Jammu",
        "country": "IN"
      },
      {
        "iata": "KNU",
        "name": "Kanpur Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "KQH",
        "name": "Kishangarh Airport, Ajmer",
        "city": "Kishangarh",
        "country": "IN"
      },
      {
        "iata": "KTU",
        "name": "Kota Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "LUH",
        "name": "Ludhiana Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "IXL",
        "name": "Leh Kushok Bakula Rimpochee Airport",
        "city": "Leh",
        "country": "IN"
      },
      {
        "iata": "LKO",
        "name": "Chaudhary Charan Singh International Airport",
        "city": "Lucknow",
        "country": "IN"
      },
      {
        "iata": "IXP",
        "name": "Pathankot Air Force Station",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "PGH",
        "name": "Pantnagar Airport",
        "city": "Pantnagar",
        "country": "IN"
      },
      {
        "iata": "SLV",
        "name": "Shimla Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "SXR",
        "name": "Sheikh ul Alam Airport",
        "city": "Srinagar",
        "country": "IN"
      },
      {
        "iata": "TNI",
        "name": "Satna Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "AOU",
        "name": "Attopeu Airport",
        "city": "Attopeu",
        "country": "LA"
      },
      {
        "iata": "OUI",
        "name": "Ban Huoeisay Airport",
        "city": "",
        "country": "LA"
      },
      {
        "iata": "LPQ",
        "name": "Luang Phabang International Airport",
        "city": "Luang Phabang",
        "country": "LA"
      },
      {
        "iata": "LXG",
        "name": "Luang Namtha Airport",
        "city": "Luang Namtha",
        "country": "LA"
      },
      {
        "iata": "ODY",
        "name": "Oudomsay Airport",
        "city": "Oudomsay",
        "country": "LA"
      },
      {
        "iata": "PKZ",
        "name": "Pakse International Airport",
        "city": "Pakse",
        "country": "LA"
      },
      {
        "iata": "ZBY",
        "name": "Sayaboury Airport",
        "city": "Sayaboury",
        "country": "LA"
      },
      {
        "iata": "ZVK",
        "name": "Savannakhet Airport",
        "city": "",
        "country": "LA"
      },
      {
        "iata": "NEU",
        "name": "Sam Neua Airport",
        "city": "",
        "country": "LA"
      },
      {
        "iata": "VNA",
        "name": "Saravane Airport",
        "city": "Saravane",
        "country": "LA"
      },
      {
        "iata": "THK",
        "name": "Thakhek Airport",
        "city": "Thakhek",
        "country": "LA"
      },
      {
        "iata": "VTE",
        "name": "Wattay International Airport",
        "city": "Vientiane",
        "country": "LA"
      },
      {
        "iata": "XKH",
        "name": "Xieng Khouang Airport",
        "city": "Xieng Khouang",
        "country": "LA"
      },
      {
        "iata": "MFM",
        "name": "Macau International Airport",
        "city": "Taipa",
        "country": "MO"
      },
      {
        "iata": "BJH",
        "name": "Bajhang Airport",
        "city": "Bajhang",
        "country": "NP"
      },
      {
        "iata": "BHP",
        "name": "Bhojpur Airport",
        "city": "Bhojpur",
        "country": "NP"
      },
      {
        "iata": "BGL",
        "name": "Baglung Airport",
        "city": "Baglung",
        "country": "NP"
      },
      {
        "iata": "BHR",
        "name": "Bharatpur Airport",
        "city": "Bharatpur",
        "country": "NP"
      },
      {
        "iata": "BJU",
        "name": "Bajura Airport",
        "city": "Bajura",
        "country": "NP"
      },
      {
        "iata": "BIT",
        "name": "Baitadi Airport",
        "city": "Baitadi",
        "country": "NP"
      },
      {
        "iata": "BWA",
        "name": "Bhairahawa Airport",
        "city": "Bhairawa",
        "country": "NP"
      },
      {
        "iata": "BDP",
        "name": "Bhadrapur Airport",
        "city": "Bhadrapur",
        "country": "NP"
      },
      {
        "iata": "DNP",
        "name": "Tulsipur Airport",
        "city": "Dang",
        "country": "NP"
      },
      {
        "iata": "DHI",
        "name": "Dhangarhi Airport",
        "city": "Dhangarhi",
        "country": "NP"
      },
      {
        "iata": "DAP",
        "name": "Darchula Airport",
        "city": "Darchula",
        "country": "NP"
      },
      {
        "iata": "DOP",
        "name": "Dolpa Airport",
        "city": "Dolpa",
        "country": "NP"
      },
      {
        "iata": "SIH",
        "name": "Silgadi Doti Airport",
        "city": "Silgadi Doti",
        "country": "NP"
      },
      {
        "iata": "GKH",
        "name": "Gorkha Airport",
        "city": "Gorkha",
        "country": "NP"
      },
      {
        "iata": "JIR",
        "name": "Jiri Airport",
        "city": "Jiri",
        "country": "NP"
      },
      {
        "iata": "JUM",
        "name": "Jumla Airport",
        "city": "Jumla",
        "country": "NP"
      },
      {
        "iata": "JKR",
        "name": "Janakpur Airport",
        "city": "Janakpur",
        "country": "NP"
      },
      {
        "iata": "JMO",
        "name": "Jomsom Airport",
        "city": "Jomsom",
        "country": "NP"
      },
      {
        "iata": "KTM",
        "name": "Tribhuvan International Airport",
        "city": "Kathmandu",
        "country": "NP"
      },
      {
        "iata": "LDN",
        "name": "Lamidanda Airport",
        "city": "Lamidanda",
        "country": "NP"
      },
      {
        "iata": "LUA",
        "name": "Lukla Airport",
        "city": "Lukla",
        "country": "NP"
      },
      {
        "iata": "LTG",
        "name": "Langtang Airport",
        "city": "Langtang",
        "country": "NP"
      },
      {
        "iata": "NGX",
        "name": "Manang Airport",
        "city": "Ngawal",
        "country": "NP"
      },
      {
        "iata": "MEY",
        "name": "Meghauli Airport",
        "city": "Meghauli",
        "country": "NP"
      },
      {
        "iata": "XMG",
        "name": "Mahendranagar Airport",
        "city": "Mahendranagar",
        "country": "NP"
      },
      {
        "iata": "KEP",
        "name": "Nepalgunj Airport",
        "city": "Nepalgunj",
        "country": "NP"
      },
      {
        "iata": "PKR",
        "name": "Pokhara Airport",
        "city": "Pokhara",
        "country": "NP"
      },
      {
        "iata": "PPL",
        "name": "Phaplu Airport",
        "city": "Phaplu",
        "country": "NP"
      },
      {
        "iata": "RJB",
        "name": "Rajbiraj Airport",
        "city": "Rajbiraj",
        "country": "NP"
      },
      {
        "iata": "RHP",
        "name": "Ramechhap Airport",
        "city": "Ramechhap",
        "country": "NP"
      },
      {
        "iata": "RUK",
        "name": "Rukumkot Airport",
        "city": "Rukumkot",
        "country": "NP"
      },
      {
        "iata": "RPA",
        "name": "Rolpa Airport",
        "city": "Rolpa",
        "country": "NP"
      },
      {
        "iata": "RUM",
        "name": "Rumjatar Airport",
        "city": "Rumjatar",
        "country": "NP"
      },
      {
        "iata": "SIF",
        "name": "Simara Airport",
        "city": "Simara",
        "country": "NP"
      },
      {
        "iata": "SKH",
        "name": "Surkhet Airport",
        "city": "Surkhet",
        "country": "NP"
      },
      {
        "iata": "FEB",
        "name": "Sanfebagar Airport",
        "city": "Sanfebagar",
        "country": "NP"
      },
      {
        "iata": "IMK",
        "name": "Simikot Airport",
        "city": "Simikot",
        "country": "NP"
      },
      {
        "iata": "TPJ",
        "name": "Suketar Airport",
        "city": "Taplejung",
        "country": "NP"
      },
      {
        "iata": "TMI",
        "name": "Tumling Tar Airport",
        "city": "Tumling Tar",
        "country": "NP"
      },
      {
        "iata": "BIR",
        "name": "Biratnagar Airport",
        "city": "Biratnagar",
        "country": "NP"
      },
      {
        "iata": "AGX",
        "name": "Agatti Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "BEP",
        "name": "Bellary Airport",
        "city": "Bellary",
        "country": "IN"
      },
      {
        "iata": "BLR",
        "name": "Bengaluru International Airport",
        "city": "Bangalore",
        "country": "IN"
      },
      {
        "iata": "VGA",
        "name": "Vijayawada Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "CJB",
        "name": "Coimbatore International Airport",
        "city": "Coimbatore",
        "country": "IN"
      },
      {
        "iata": "COK",
        "name": "Cochin International Airport",
        "city": "Cochin",
        "country": "IN"
      },
      {
        "iata": "CCJ",
        "name": "Calicut International Airport",
        "city": "Calicut",
        "country": "IN"
      },
      {
        "iata": "CDP",
        "name": "Cuddapah Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "CBD",
        "name": "Car Nicobar Air Force Station",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "GOI",
        "name": "Dabolim Airport",
        "city": "Dabolim",
        "country": "IN"
      },
      {
        "iata": "HYD",
        "name": "Rajiv Gandhi International Airport Shamshabad",
        "city": "Hyderabad",
        "country": "IN"
      },
      {
        "iata": "BPM",
        "name": "Begumpet Airport",
        "city": "Hyderabad",
        "country": "IN"
      },
      {
        "iata": "VDY",
        "name": "Vijayanagar Aerodrome (JSW)",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "IXM",
        "name": "Madurai Airport",
        "city": "Madurai",
        "country": "IN"
      },
      {
        "iata": "IXE",
        "name": "Mangalore International Airport",
        "city": "Mangalore",
        "country": "IN"
      },
      {
        "iata": "MAA",
        "name": "Chennai International Airport",
        "city": "Chennai",
        "country": "IN"
      },
      {
        "iata": "MYQ",
        "name": "Mysore Airport",
        "city": "Mysore",
        "country": "IN"
      },
      {
        "iata": "IXZ",
        "name": "Vir Savarkar International Airport",
        "city": "Port Blair",
        "country": "IN"
      },
      {
        "iata": "PNY",
        "name": "Pondicherry Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "RJA",
        "name": "Rajahmundry Airport",
        "city": "Rajahmundry",
        "country": "IN"
      },
      {
        "iata": "SXV",
        "name": "Salem Airport",
        "city": "",
        "country": "IN"
      },
      {
        "iata": "TJV",
        "name": "Tanjore Air Force Base",
        "city": "Thanjavur",
        "country": "IN"
      },
      {
        "iata": "TIR",
        "name": "Tirupati Airport",
        "city": "Tirupati",
        "country": "IN"
      },
      {
        "iata": "TRZ",
        "name": "Tiruchirapally Civil Airport Airport",
        "city": "Tiruchirappally",
        "country": "IN"
      },
      {
        "iata": "TRV",
        "name": "Trivandrum International Airport",
        "city": "Trivandrum",
        "country": "IN"
      },
      {
        "iata": "WGC",
        "name": "Warangal Airport",
        "city": "Warrangal",
        "country": "IN"
      },
      {
        "iata": "PBH",
        "name": "Paro Airport",
        "city": "Paro",
        "country": "BT"
      },
      {
        "iata": "IFU",
        "name": "Ifuru Airport",
        "city": "Ifuru",
        "country": "MV"
      },
      {
        "iata": "FVM",
        "name": "Fuvahmulah Airport",
        "city": "Fuvahmulah Island",
        "country": "MV"
      },
      {
        "iata": "GAN",
        "name": "Gan International Airport",
        "city": "Gan",
        "country": "MV"
      },
      {
        "iata": "HAQ",
        "name": "Hanimaadhoo Airport",
        "city": "Haa Dhaalu Atoll",
        "country": "MV"
      },
      {
        "iata": "KDO",
        "name": "Kadhdhoo Airport",
        "city": "Kadhdhoo",
        "country": "MV"
      },
      {
        "iata": "MLE",
        "name": "Male International Airport",
        "city": "Male",
        "country": "MV"
      },
      {
        "iata": "KDM",
        "name": "Kaadedhdhoo Airport",
        "city": "Huvadhu Atoll",
        "country": "MV"
      },
      {
        "iata": "VAM",
        "name": "Villa Airport",
        "city": "Maamigili",
        "country": "MV"
      },
      {
        "iata": "DMK",
        "name": "Don Mueang International Airport",
        "city": "Bangkok",
        "country": "TH"
      },
      {
        "iata": "KKM",
        "name": "Sa Pran Nak Airport",
        "city": "",
        "country": "TH"
      },
      {
        "iata": "KDT",
        "name": "Kamphaeng Saen Airport",
        "city": "Nakhon Pathom",
        "country": "TH"
      },
      {
        "iata": "TDX",
        "name": "Trat Airport",
        "city": "",
        "country": "TH"
      },
      {
        "iata": "BKK",
        "name": "Suvarnabhumi Airport",
        "city": "Bangkok",
        "country": "TH"
      },
      {
        "iata": "UTP",
        "name": "U-Tapao International Airport",
        "city": "Rayong",
        "country": "TH"
      },
      {
        "iata": "CNX",
        "name": "Chiang Mai International Airport",
        "city": "Chiang Mai",
        "country": "TH"
      },
      {
        "iata": "HGN",
        "name": "Mae Hong Son Airport",
        "city": "",
        "country": "TH"
      },
      {
        "iata": "PYY",
        "name": "Mae Hong Son Airport",
        "city": "Mae Hong Son",
        "country": "TH"
      },
      {
        "iata": "LPT",
        "name": "Lampang Airport",
        "city": "",
        "country": "TH"
      },
      {
        "iata": "NNT",
        "name": "Nan Airport",
        "city": "",
        "country": "TH"
      },
      {
        "iata": "PRH",
        "name": "Phrae Airport",
        "city": "",
        "country": "TH"
      },
      {
        "iata": "CEI",
        "name": "Chiang Rai International Airport",
        "city": "Chiang Rai",
        "country": "TH"
      },
      {
        "iata": "BAO",
        "name": "Udorn Air Base",
        "city": "Ban Mak Khaen",
        "country": "TH"
      },
      {
        "iata": "PHY",
        "name": "Phetchabun Airport",
        "city": "",
        "country": "TH"
      },
      {
        "iata": "HHQ",
        "name": "Hua Hin Airport",
        "city": "Hua Hin",
        "country": "TH"
      },
      {
        "iata": "TKH",
        "name": "Takhli Airport",
        "city": "",
        "country": "TH"
      },
      {
        "iata": "MAQ",
        "name": "Mae Sot Airport",
        "city": "",
        "country": "TH"
      },
      {
        "iata": "THS",
        "name": "Sukhothai Airport",
        "city": "",
        "country": "TH"
      },
      {
        "iata": "PHS",
        "name": "Phitsanulok Airport",
        "city": "",
        "country": "TH"
      },
      {
        "iata": "TKT",
        "name": "Tak Airport",
        "city": "",
        "country": "TH"
      },
      {
        "iata": "UTR",
        "name": "Uttaradit Airport",
        "city": "Uttaradit",
        "country": "TH"
      },
      {
        "iata": "URT",
        "name": "Surat Thani Airport",
        "city": "Surat Thani",
        "country": "TH"
      },
      {
        "iata": "NAW",
        "name": "Narathiwat Airport",
        "city": "",
        "country": "TH"
      },
      {
        "iata": "CJM",
        "name": "Chumphon Airport",
        "city": "",
        "country": "TH"
      },
      {
        "iata": "NST",
        "name": "Nakhon Si Thammarat Airport",
        "city": "Nakhon Si Thammarat",
        "country": "TH"
      },
      {
        "iata": "KBV",
        "name": "Krabi Airport",
        "city": "Krabi",
        "country": "TH"
      },
      {
        "iata": "SGZ",
        "name": "Songkhla Airport",
        "city": "",
        "country": "TH"
      },
      {
        "iata": "PAN",
        "name": "Pattani Airport",
        "city": "",
        "country": "TH"
      },
      {
        "iata": "USM",
        "name": "Samui Airport",
        "city": "Na Thon (Ko Samui Island)",
        "country": "TH"
      },
      {
        "iata": "HKT",
        "name": "Phuket International Airport",
        "city": "Phuket",
        "country": "TH"
      },
      {
        "iata": "UNN",
        "name": "Ranong Airport",
        "city": "",
        "country": "TH"
      },
      {
        "iata": "HDY",
        "name": "Hat Yai International Airport",
        "city": "Hat Yai",
        "country": "TH"
      },
      {
        "iata": "TST",
        "name": "Trang Airport",
        "city": "",
        "country": "TH"
      },
      {
        "iata": "UTH",
        "name": "Udon Thani Airport",
        "city": "Udon Thani",
        "country": "TH"
      },
      {
        "iata": "SNO",
        "name": "Sakon Nakhon Airport",
        "city": "",
        "country": "TH"
      },
      {
        "iata": "KKC",
        "name": "Khon Kaen Airport",
        "city": "Khon Kaen",
        "country": "TH"
      },
      {
        "iata": "LOE",
        "name": "Loei Airport",
        "city": "",
        "country": "TH"
      },
      {
        "iata": "BFV",
        "name": "Buri Ram Airport",
        "city": "",
        "country": "TH"
      },
      {
        "iata": "NAK",
        "name": "Nakhon Ratchasima Airport",
        "city": "",
        "country": "TH"
      },
      {
        "iata": "UBP",
        "name": "Ubon Ratchathani Airport",
        "city": "Ubon Ratchathani",
        "country": "TH"
      },
      {
        "iata": "ROI",
        "name": "Roi Et Airport",
        "city": "",
        "country": "TH"
      },
      {
        "iata": "KOP",
        "name": "Nakhon Phanom Airport",
        "city": "",
        "country": "TH"
      },
      {
        "iata": "BMV",
        "name": "Buon Ma Thuot Airport",
        "city": "Buon Ma Thuot",
        "country": "VN"
      },
      {
        "iata": "VCL",
        "name": "Chu Lai International Airport",
        "city": "Dung Quat Bay",
        "country": "VN"
      },
      {
        "iata": "HPH",
        "name": "Cat Bi International Airport",
        "city": "Haiphong",
        "country": "VN"
      },
      {
        "iata": "CAH",
        "name": "Ca Mau Airport",
        "city": "Ca Mau City",
        "country": "VN"
      },
      {
        "iata": "CXR",
        "name": "Cam Ranh Airport",
        "city": "Nha Trang",
        "country": "VN"
      },
      {
        "iata": "VCS",
        "name": "Co Ong Airport",
        "city": "Con Ong",
        "country": "VN"
      },
      {
        "iata": "VCA",
        "name": "Tra Noc Airport",
        "city": "Can Tho",
        "country": "VN"
      },
      {
        "iata": "DIN",
        "name": "Dien Bien Phu Airport",
        "city": "Dien Bien Phu",
        "country": "VN"
      },
      {
        "iata": "VDH",
        "name": "Dong Hoi Airport",
        "city": "Dong Hoi",
        "country": "VN"
      },
      {
        "iata": "DLI",
        "name": "Lien Khuong Airport",
        "city": "Dalat",
        "country": "VN"
      },
      {
        "iata": "DAD",
        "name": "Da Nang International Airport",
        "city": "Da Nang",
        "country": "VN"
      },
      {
        "iata": "HAN",
        "name": "Noi Bai International Airport",
        "city": "Hanoi",
        "country": "VN"
      },
      {
        "iata": "SQH",
        "name": "Na-San Airport",
        "city": "Son-La",
        "country": "VN"
      },
      {
        "iata": "NHA",
        "name": "Nha Trang Air Base",
        "city": "Nha Trang",
        "country": "VN"
      },
      {
        "iata": "HUI",
        "name": "Phu Bai Airport",
        "city": "Hue",
        "country": "VN"
      },
      {
        "iata": "UIH",
        "name": "Phu Cat Airport",
        "city": "Quy Nohn",
        "country": "VN"
      },
      {
        "iata": "PXU",
        "name": "Pleiku Airport",
        "city": "Pleiku",
        "country": "VN"
      },
      {
        "iata": "PQC",
        "name": "Phu Quoc Airport",
        "city": "Duong Dong",
        "country": "VN"
      },
      {
        "iata": "PHA",
        "name": "Phan Rang Airport",
        "city": "Phan Rang",
        "country": "VN"
      },
      {
        "iata": "PHH",
        "name": "Phan Thiet Airport",
        "city": "Phan Thiet",
        "country": "VN"
      },
      {
        "iata": "VKG",
        "name": "Rach Gia Airport",
        "city": "Rach Gia",
        "country": "VN"
      },
      {
        "iata": "TBB",
        "name": "Dong Tac Airport",
        "city": "Tuy Hoa",
        "country": "VN"
      },
      {
        "iata": "SGN",
        "name": "Tan Son Nhat International Airport",
        "city": "Ho Chi Minh City",
        "country": "VN"
      },
      {
        "iata": "THD",
        "name": "Thọ Xuân Airport",
        "city": "Thanh Hóa",
        "country": "VN"
      },
      {
        "iata": "VII",
        "name": "Vinh Airport",
        "city": "Vinh",
        "country": "VN"
      },
      {
        "iata": "VTG",
        "name": "Vung Tau Airport",
        "city": "Vung Tau",
        "country": "VN"
      },
      {
        "iata": "NYU",
        "name": "Bagan Airport",
        "city": "Nyaung U",
        "country": "MM"
      },
      {
        "iata": "BMO",
        "name": "Banmaw Airport",
        "city": "Banmaw",
        "country": "MM"
      },
      {
        "iata": "TVY",
        "name": "Dawei Airport",
        "city": "Dawei",
        "country": "MM"
      },
      {
        "iata": "NYT",
        "name": "Naypyidaw Airport",
        "city": "Pyinmana",
        "country": "MM"
      },
      {
        "iata": "GAW",
        "name": "Gangaw Airport",
        "city": "Gangaw",
        "country": "MM"
      },
      {
        "iata": "GWA",
        "name": "Gwa Airport",
        "city": "Gwa",
        "country": "MM"
      },
      {
        "iata": "HEH",
        "name": "Heho Airport",
        "city": "Heho",
        "country": "MM"
      },
      {
        "iata": "HOX",
        "name": "Hommalinn Airport",
        "city": "Hommalinn",
        "country": "MM"
      },
      {
        "iata": "TIO",
        "name": "Tilin Airport",
        "city": "Tilin",
        "country": "MM"
      },
      {
        "iata": "KET",
        "name": "Kengtung Airport",
        "city": "Kengtung",
        "country": "MM"
      },
      {
        "iata": "KHM",
        "name": "Kanti Airport",
        "city": "Kanti",
        "country": "MM"
      },
      {
        "iata": "KMV",
        "name": "Kalay Airport",
        "city": "Kalemyo",
        "country": "MM"
      },
      {
        "iata": "KYP",
        "name": "Kyaukpyu Airport",
        "city": "Kyaukpyu",
        "country": "MM"
      },
      {
        "iata": "KAW",
        "name": "Kawthoung Airport",
        "city": "Kawthoung",
        "country": "MM"
      },
      {
        "iata": "KYT",
        "name": "Kyauktu Airport",
        "city": "Kyauktu",
        "country": "MM"
      },
      {
        "iata": "LIW",
        "name": "Loikaw Airport",
        "city": "Loikaw",
        "country": "MM"
      },
      {
        "iata": "LSH",
        "name": "Lashio Airport",
        "city": "Lashio",
        "country": "MM"
      },
      {
        "iata": "MDL",
        "name": "Mandalay International Airport",
        "city": "Mandalay",
        "country": "MM"
      },
      {
        "iata": "MGZ",
        "name": "Myeik Airport",
        "city": "Mkeik",
        "country": "MM"
      },
      {
        "iata": "MYT",
        "name": "Myitkyina Airport",
        "city": "Myitkyina",
        "country": "MM"
      },
      {
        "iata": "MNU",
        "name": "Mawlamyine Airport",
        "city": "Mawlamyine",
        "country": "MM"
      },
      {
        "iata": "MGU",
        "name": "Manaung Airport",
        "city": "Manaung",
        "country": "MM"
      },
      {
        "iata": "MOE",
        "name": "Momeik Airport",
        "city": "",
        "country": "MM"
      },
      {
        "iata": "MOG",
        "name": "Mong Hsat Airport",
        "city": "Mong Hsat",
        "country": "MM"
      },
      {
        "iata": "MGK",
        "name": "Mong Tong Airport",
        "city": "Mong Tong",
        "country": "MM"
      },
      {
        "iata": "MWQ",
        "name": "Magway Airport",
        "city": "Magway",
        "country": "MM"
      },
      {
        "iata": "NMS",
        "name": "Namsang Airport",
        "city": "Namsang",
        "country": "MM"
      },
      {
        "iata": "NMT",
        "name": "Namtu Airport",
        "city": "Namtu",
        "country": "MM"
      },
      {
        "iata": "PAA",
        "name": "Hpa-N Airport",
        "city": "Hpa-N",
        "country": "MM"
      },
      {
        "iata": "PAU",
        "name": "Pauk Airport",
        "city": "Pauk",
        "country": "MM"
      },
      {
        "iata": "BSX",
        "name": "Pathein Airport",
        "city": "Pathein",
        "country": "MM"
      },
      {
        "iata": "PPU",
        "name": "Hpapun Airport",
        "city": "Pa Pun",
        "country": "MM"
      },
      {
        "iata": "PBU",
        "name": "Putao Airport",
        "city": "Putao",
        "country": "MM"
      },
      {
        "iata": "PKK",
        "name": "Pakhokku Airport",
        "city": "Pakhokku",
        "country": "MM"
      },
      {
        "iata": "PRU",
        "name": "Pyay Airport",
        "city": "Pye",
        "country": "MM"
      },
      {
        "iata": "AKY",
        "name": "Sittwe Airport",
        "city": "Sittwe",
        "country": "MM"
      },
      {
        "iata": "SNW",
        "name": "Thandwe Airport",
        "city": "Thandwe",
        "country": "MM"
      },
      {
        "iata": "THL",
        "name": "Tachileik Airport",
        "city": "Tachileik",
        "country": "MM"
      },
      {
        "iata": "XYE",
        "name": "Ye Airport",
        "city": "Ye",
        "country": "MM"
      },
      {
        "iata": "RGN",
        "name": "Yangon International Airport",
        "city": "Yangon",
        "country": "MM"
      },
      {
        "iata": "UPG",
        "name": "Hasanuddin International Airport",
        "city": "Ujung Pandang-Celebes Island",
        "country": "ID"
      },
      {
        "iata": "BIK",
        "name": "Frans Kaisiepo Airport",
        "city": "Biak-Supiori Island",
        "country": "ID"
      },
      {
        "iata": "ONI",
        "name": "Moanamani Airport",
        "city": "Moanamani-Papua Island",
        "country": "ID"
      },
      {
        "iata": "FOO",
        "name": "Kornasoren Airfield",
        "city": "Kornasoren-Numfoor Island",
        "country": "ID"
      },
      {
        "iata": "WET",
        "name": "Wagethe Airport",
        "city": "Wagethe-Papua Island",
        "country": "ID"
      },
      {
        "iata": "NBX",
        "name": "Nabire Airport",
        "city": "Nabire-Papua Island",
        "country": "ID"
      },
      {
        "iata": "ILA",
        "name": "Illaga Airport",
        "city": "Illaga-Papua Island",
        "country": "ID"
      },
      {
        "iata": "KOX",
        "name": "Kokonau Airport",
        "city": "Kokonau-Papua Island",
        "country": "ID"
      },
      {
        "iata": "ZRI",
        "name": "Serui Airport",
        "city": "Serui-Japen Island",
        "country": "ID"
      },
      {
        "iata": "TIM",
        "name": "Moses Kilangin Airport",
        "city": "Timika-Papua Island",
        "country": "ID"
      },
      {
        "iata": "EWI",
        "name": "Enarotali Airport",
        "city": "Enarotali-Papua Island",
        "country": "ID"
      },
      {
        "iata": "AMI",
        "name": "Selaparang Airport",
        "city": "Mataram-Lombok Island",
        "country": "ID"
      },
      {
        "iata": "BMU",
        "name": "Muhammad Salahuddin Airport",
        "city": "Bima-Sumbawa Island",
        "country": "ID"
      },
      {
        "iata": "DPS",
        "name": "Ngurah Rai (Bali) International Airport",
        "city": "Denpasar-Bali Island",
        "country": "ID"
      },
      {
        "iata": "LOP",
        "name": "Bandara International Lombok Airport",
        "city": "Mataram",
        "country": "ID"
      },
      {
        "iata": "SWQ",
        "name": "Sumbawa Besar Airport",
        "city": "Sumbawa Island",
        "country": "ID"
      },
      {
        "iata": "TMC",
        "name": "Tambolaka Airport",
        "city": "Waikabubak-Sumba Island",
        "country": "ID"
      },
      {
        "iata": "WGP",
        "name": "Waingapu Airport",
        "city": "Waingapu-Sumba Island",
        "country": "ID"
      },
      {
        "iata": "YIA",
        "name": "Yogyakarta International Airport",
        "city": "Yogyakarta",
        "country": "ID"
      },
      {
        "iata": "ARJ",
        "name": "Arso Airport",
        "city": "Arso-Papua Island",
        "country": "ID"
      },
      {
        "iata": "BUI",
        "name": "Bokondini Airport",
        "city": "Bokondini-Papua Island",
        "country": "ID"
      },
      {
        "iata": "ZRM",
        "name": "Sarmi Airport",
        "city": "Sarmi-Papua Island",
        "country": "ID"
      },
      {
        "iata": "DJJ",
        "name": "Sentani Airport",
        "city": "Jayapura-Papua Island",
        "country": "ID"
      },
      {
        "iata": "LHI",
        "name": "Lereh Airport",
        "city": "Lereh-Papua Island",
        "country": "ID"
      },
      {
        "iata": "LII",
        "name": "Mulia Airport",
        "city": "Mulia-Papua Island",
        "country": "ID"
      },
      {
        "iata": "OKL",
        "name": "Oksibil Airport",
        "city": "Oksibil-Papua Island",
        "country": "ID"
      },
      {
        "iata": "WAR",
        "name": "Waris Airport",
        "city": "Waris-Papua Island",
        "country": "ID"
      },
      {
        "iata": "SEH",
        "name": "Senggeh Airport",
        "city": "Senggeh-Papua Island",
        "country": "ID"
      },
      {
        "iata": "UBR",
        "name": "Ubrub Airport",
        "city": "Ubrub-Papua Island",
        "country": "ID"
      },
      {
        "iata": "WMX",
        "name": "Wamena Airport",
        "city": "Wamena-Papua Island",
        "country": "ID"
      },
      {
        "iata": "MDP",
        "name": "Mindiptana Airport",
        "city": "Mindiptana-Papua Island",
        "country": "ID"
      },
      {
        "iata": "BXD",
        "name": "Bade Airport",
        "city": "Bade-Papua Island",
        "country": "ID"
      },
      {
        "iata": "MKQ",
        "name": "Mopah Airport",
        "city": "Merauke-Papua Island",
        "country": "ID"
      },
      {
        "iata": "OKQ",
        "name": "Okaba Airport",
        "city": "Okaba-Papua Island",
        "country": "ID"
      },
      {
        "iata": "KEI",
        "name": "Kepi Airport",
        "city": "Kepi-Papua Island",
        "country": "ID"
      },
      {
        "iata": "TMH",
        "name": "Tanah Merah Airport",
        "city": "Tanah Merah-Papua Island",
        "country": "ID"
      },
      {
        "iata": "TJS",
        "name": "Tanjung Harapan Airport",
        "city": "Tanjung Selor-Borneo Island",
        "country": "ID"
      },
      {
        "iata": "DTD",
        "name": "Datadawai Airport",
        "city": "Datadawai-Borneo Island",
        "country": "ID"
      },
      {
        "iata": "BEJ",
        "name": "Barau(Kalimaru) Airport",
        "city": "Tanjung Redep-Borneo Island",
        "country": "ID"
      },
      {
        "iata": "BPN",
        "name": "Sepinggan International Airport",
        "city": "Balikpapan-Borneo Island",
        "country": "ID"
      },
      {
        "iata": "TRK",
        "name": "Juwata Airport",
        "city": "Tarakan Island",
        "country": "ID"
      },
      {
        "iata": "SRI",
        "name": "Temindung Airport",
        "city": "Samarinda-Borneo Island",
        "country": "ID"
      },
      {
        "iata": "TSX",
        "name": "Tanjung Santan Airport",
        "city": "Santan-Borneo Island",
        "country": "ID"
      },
      {
        "iata": "BYQ",
        "name": "Bunyu Airport",
        "city": "Bunju Island",
        "country": "ID"
      },
      {
        "iata": "GLX",
        "name": "Gamarmalamo Airport",
        "city": "Galela-Celebes Island",
        "country": "ID"
      },
      {
        "iata": "GTO",
        "name": "Jalaluddin Airport",
        "city": "Gorontalo-Celebes Island",
        "country": "ID"
      },
      {
        "iata": "NAH",
        "name": "Naha Airport",
        "city": "Tahuna-Sangihe Island",
        "country": "ID"
      },
      {
        "iata": "TLI",
        "name": "Toli Toli Airport",
        "city": "Toli Toli-Celebes Island",
        "country": "ID"
      },
      {
        "iata": "GEB",
        "name": "Gebe Airport",
        "city": "Gebe Island",
        "country": "ID"
      },
      {
        "iata": "KAZ",
        "name": "Kao Airport",
        "city": "Kao-Celebes Island",
        "country": "ID"
      },
      {
        "iata": "PLW",
        "name": "Mutiara Airport",
        "city": "Palu-Celebes Island",
        "country": "ID"
      },
      {
        "iata": "MDC",
        "name": "Sam Ratulangi Airport",
        "city": "Manado-Celebes Island",
        "country": "ID"
      },
      {
        "iata": "MNA",
        "name": "Melangguane Airport",
        "city": "Karakelong Island",
        "country": "ID"
      },
      {
        "iata": "PSJ",
        "name": "Kasiguncu Airport",
        "city": "Poso-Celebes Island",
        "country": "ID"
      },
      {
        "iata": "OTI",
        "name": "Pitu Airport",
        "city": "Gotalalamo-Morotai Island",
        "country": "ID"
      },
      {
        "iata": "TTE",
        "name": "Sultan Khairun Babullah Airport",
        "city": "Sango-Ternate Island",
        "country": "ID"
      },
      {
        "iata": "LUW",
        "name": "Bubung Airport",
        "city": "Luwok-Celebes Island",
        "country": "ID"
      },
      {
        "iata": "UOL",
        "name": "Buol Airport",
        "city": "Buol-Celebes Island",
        "country": "ID"
      },
      {
        "iata": "BTW",
        "name": "Batu Licin Airport",
        "city": "Batu Licin-Borneo Island",
        "country": "ID"
      },
      {
        "iata": "PKN",
        "name": "Iskandar Airport",
        "city": "Pangkalanbun-Borneo Island",
        "country": "ID"
      },
      {
        "iata": "KBU",
        "name": "Stagen Airport",
        "city": "Laut Island",
        "country": "ID"
      },
      {
        "iata": "MTW",
        "name": "Beringin Airport",
        "city": "Murateweh-Borneo Island",
        "country": "ID"
      },
      {
        "iata": "TJG",
        "name": "Warukin Airport",
        "city": "Tanta-Tabalong-Borneo Island",
        "country": "ID"
      },
      {
        "iata": "BDJ",
        "name": "Syamsudin Noor Airport",
        "city": "Banjarmasin-Borneo Island",
        "country": "ID"
      },
      {
        "iata": "PKY",
        "name": "Tjilik Riwut Airport",
        "city": "Palangkaraya-Kalimantan Tengah",
        "country": "ID"
      },
      {
        "iata": "SMQ",
        "name": "Sampit(Hasan) Airport",
        "city": "Sampit-Borneo Island",
        "country": "ID"
      },
      {
        "iata": "AHI",
        "name": "Amahai Airport",
        "city": "Amahai-Seram Island",
        "country": "ID"
      },
      {
        "iata": "DOB",
        "name": "Dobo Airport",
        "city": "Dobo-Kobror Island",
        "country": "ID"
      },
      {
        "iata": "MAL",
        "name": "Mangole Airport Falabisahaya",
        "city": "Mangole Island",
        "country": "ID"
      },
      {
        "iata": "NRE",
        "name": "Namrole Airport",
        "city": "Namrole-Buru Island",
        "country": "ID"
      },
      {
        "iata": "LAH",
        "name": "Oesman Sadik Airport Labuha",
        "city": "Labuha-Halmahera Island",
        "country": "ID"
      },
      {
        "iata": "SXK",
        "name": "Saumlaki Airport",
        "city": "Saumlaki-Yamdena Island",
        "country": "ID"
      },
      {
        "iata": "BJK",
        "name": "Nangasuri Airport",
        "city": "Maikoor Island",
        "country": "ID"
      },
      {
        "iata": "LUV",
        "name": "Dumatumbun Airport",
        "city": "Langgur-Seram Island",
        "country": "ID"
      },
      {
        "iata": "SQN",
        "name": "Emalamo Sanana Airport",
        "city": "Sanana-Seram Island",
        "country": "ID"
      },
      {
        "iata": "AMQ",
        "name": "Pattimura Airport Ambon",
        "city": "Ambon",
        "country": "ID"
      },
      {
        "iata": "NAM",
        "name": "Namlea Airport",
        "city": "Namlea-Buru Island",
        "country": "ID"
      },
      {
        "iata": "TAX",
        "name": "Taliabu Island Airport",
        "city": "Tikong-Taliabu Island",
        "country": "ID"
      },
      {
        "iata": "MLG",
        "name": "Abdul Rachman Saleh Airport",
        "city": "Malang-Java Island",
        "country": "ID"
      },
      {
        "iata": "CPF",
        "name": "Cepu Airport",
        "city": "Tjepu-Java Island",
        "country": "ID"
      },
      {
        "iata": "JOG",
        "name": "Adi Sutjipto International Airport",
        "city": "Yogyakarta-Java Island",
        "country": "ID"
      },
      {
        "iata": "SOC",
        "name": "Adi Sumarmo Wiryokusumo Airport",
        "city": "Sukarata(Solo)-Java Island",
        "country": "ID"
      },
      {
        "iata": "SUB",
        "name": "Juanda International Airport",
        "city": "Surabaya",
        "country": "ID"
      },
      {
        "iata": "SRG",
        "name": "Achmad Yani Airport",
        "city": "Semarang-Java Island",
        "country": "ID"
      },
      {
        "iata": "SUP",
        "name": "Trunojoyo Airport",
        "city": "Sumenep-Madura Island",
        "country": "ID"
      },
      {
        "iata": "NTI",
        "name": "Stenkol Airport",
        "city": "Bintuni-Papua Island",
        "country": "ID"
      },
      {
        "iata": "RSK",
        "name": "Abresso Airport",
        "city": "Ransiki-Papua Island",
        "country": "ID"
      },
      {
        "iata": "KEQ",
        "name": "Kebar Airport",
        "city": "Kebar-Papua Island",
        "country": "ID"
      },
      {
        "iata": "FKQ",
        "name": "Fakfak Airport",
        "city": "Fakfak-Papua Island",
        "country": "ID"
      },
      {
        "iata": "INX",
        "name": "Inanwatan Airport",
        "city": "Inanwatan Airport-Papua Island",
        "country": "ID"
      },
      {
        "iata": "KNG",
        "name": "Kaimana Airport",
        "city": "Kaimana-Papua Island",
        "country": "ID"
      },
      {
        "iata": "RDE",
        "name": "Merdei Airport",
        "city": "Merdei-Papua Island",
        "country": "ID"
      },
      {
        "iata": "BXB",
        "name": "Babo Airport",
        "city": "Babo-Papua Island",
        "country": "ID"
      },
      {
        "iata": "MKW",
        "name": "Rendani Airport",
        "city": "Manokwari-Papua Island",
        "country": "ID"
      },
      {
        "iata": "SOQ",
        "name": "Sorong (Jefman) Airport",
        "city": "Sorong-Papua Island",
        "country": "ID"
      },
      {
        "iata": "TXM",
        "name": "Teminabuan Airport",
        "city": "Atinjoe-Papua Island",
        "country": "ID"
      },
      {
        "iata": "WSR",
        "name": "Wasior Airport",
        "city": "Wasior-Papua Island",
        "country": "ID"
      },
      {
        "iata": "BJW",
        "name": "Bajawa Soa Airport",
        "city": "Bajawa",
        "country": "ID"
      },
      {
        "iata": "MOF",
        "name": "Maumere(Wai Oti) Airport",
        "city": "Maumere-Flores Island",
        "country": "ID"
      },
      {
        "iata": "ENE",
        "name": "Ende (H Hasan Aroeboesman) Airport",
        "city": "Ende-Flores Island",
        "country": "ID"
      },
      {
        "iata": "RTG",
        "name": "Satar Tacik Airport",
        "city": "Satar Tacik-Flores Island",
        "country": "ID"
      },
      {
        "iata": "ARD",
        "name": "Mali Airport",
        "city": "Alor Island",
        "country": "ID"
      },
      {
        "iata": "LBJ",
        "name": "Komodo (Mutiara II) Airport",
        "city": "Labuan Bajo-Flores Island",
        "country": "ID"
      },
      {
        "iata": "KOE",
        "name": "El Tari Airport",
        "city": "Kupang-Timor Island",
        "country": "ID"
      },
      {
        "iata": "BUW",
        "name": "Betoambari Airport",
        "city": "Bau Bau-Butung Island",
        "country": "ID"
      },
      {
        "iata": "MJU",
        "name": "Tampa Padang Airport",
        "city": "Mamuju-Celebes Island",
        "country": "ID"
      },
      {
        "iata": "MXB",
        "name": "Andi Jemma Airport",
        "city": "Masamba-Celebes Island",
        "country": "ID"
      },
      {
        "iata": "SQR",
        "name": "Soroako Airport",
        "city": "Soroako-Celebes Island",
        "country": "ID"
      },
      {
        "iata": "TTR",
        "name": "Pongtiku Airport",
        "city": "Tanah Toraja-Celebes Island",
        "country": "ID"
      },
      {
        "iata": "KDI",
        "name": "Wolter Monginsidi Airport",
        "city": "Kendari-Celebes Island",
        "country": "ID"
      },
      {
        "iata": "BTU",
        "name": "Bintulu Airport",
        "city": "Bintulu",
        "country": "MY"
      },
      {
        "iata": "BLG",
        "name": "Belaga Airport",
        "city": "Belaga",
        "country": "MY"
      },
      {
        "iata": "LSM",
        "name": "Long Semado Airport",
        "city": "Long Semado",
        "country": "MY"
      },
      {
        "iata": "LGL",
        "name": "Long Lellang Airport",
        "city": "Long Datih",
        "country": "MY"
      },
      {
        "iata": "KCH",
        "name": "Kuching International Airport",
        "city": "Kuching",
        "country": "MY"
      },
      {
        "iata": "ODN",
        "name": "Long Seridan Airport",
        "city": "Long Seridan",
        "country": "MY"
      },
      {
        "iata": "LMN",
        "name": "Limbang Airport",
        "city": "Limbang",
        "country": "MY"
      },
      {
        "iata": "MKM",
        "name": "Mukah Airport",
        "city": "Mukah",
        "country": "MY"
      },
      {
        "iata": "LKH",
        "name": "Long Akah Airport",
        "city": "Long Akah",
        "country": "MY"
      },
      {
        "iata": "MUR",
        "name": "Marudi Airport",
        "city": "Marudi",
        "country": "MY"
      },
      {
        "iata": "BSE",
        "name": "Sematan Airport",
        "city": "Sematan",
        "country": "MY"
      },
      {
        "iata": "KPI",
        "name": "Kapit Airport",
        "city": "Kapit",
        "country": "MY"
      },
      {
        "iata": "BKM",
        "name": "Bakalalan Airport",
        "city": "Bakalalan",
        "country": "MY"
      },
      {
        "iata": "MYY",
        "name": "Miri Airport",
        "city": "Miri",
        "country": "MY"
      },
      {
        "iata": "SBW",
        "name": "Sibu Airport",
        "city": "Sibu",
        "country": "MY"
      },
      {
        "iata": "TGC",
        "name": "Tanjung Manis Airport",
        "city": "Tanjung Manis",
        "country": "MY"
      },
      {
        "iata": "LSU",
        "name": "Long Sukang Airport",
        "city": "Long Sukang",
        "country": "MY"
      },
      {
        "iata": "LWY",
        "name": "Lawas Airport",
        "city": "Lawas",
        "country": "MY"
      },
      {
        "iata": "SGG",
        "name": "Simanggang Airport",
        "city": "Simanggang",
        "country": "MY"
      },
      {
        "iata": "BBN",
        "name": "Bario Airport",
        "city": "Bario",
        "country": "MY"
      },
      {
        "iata": "SMM",
        "name": "Semporna Airport",
        "city": "Semporna",
        "country": "MY"
      },
      {
        "iata": "LDU",
        "name": "Lahad Datu Airport",
        "city": "Lahad Datu",
        "country": "MY"
      },
      {
        "iata": "TEL",
        "name": "Telupid Airport",
        "city": "Telupid",
        "country": "MY"
      },
      {
        "iata": "KGU",
        "name": "Keningau Airport",
        "city": "Keningau",
        "country": "MY"
      },
      {
        "iata": "SXS",
        "name": "Sahabat [Sahabat 16] Airport",
        "city": "Sahabat",
        "country": "MY"
      },
      {
        "iata": "BKI",
        "name": "Kota Kinabalu International Airport",
        "city": "Kota Kinabalu",
        "country": "MY"
      },
      {
        "iata": "LBU",
        "name": "Labuan Airport",
        "city": "Labuan",
        "country": "MY"
      },
      {
        "iata": "TMG",
        "name": "Tomanggong Airport",
        "city": "Tomanggong",
        "country": "MY"
      },
      {
        "iata": "GSA",
        "name": "Long Pasia Airport",
        "city": "Long Miau",
        "country": "MY"
      },
      {
        "iata": "SPE",
        "name": "Sepulot Airport",
        "city": "Sepulot",
        "country": "MY"
      },
      {
        "iata": "PAY",
        "name": "Pamol Airport",
        "city": "Pamol",
        "country": "MY"
      },
      {
        "iata": "RNU",
        "name": "Ranau Airport",
        "city": "Ranau",
        "country": "MY"
      },
      {
        "iata": "SDK",
        "name": "Sandakan Airport",
        "city": "Sandakan",
        "country": "MY"
      },
      {
        "iata": "KUD",
        "name": "Kudat Airport",
        "city": "Kudat",
        "country": "MY"
      },
      {
        "iata": "TWU",
        "name": "Tawau Airport",
        "city": "Tawau",
        "country": "MY"
      },
      {
        "iata": "MZV",
        "name": "Mulu Airport",
        "city": "Mulu",
        "country": "MY"
      },
      {
        "iata": "BWN",
        "name": "Brunei International Airport",
        "city": "Bandar Seri Begawan",
        "country": "BN"
      },
      {
        "iata": "PKU",
        "name": "Sultan Syarif Kasim Ii (Simpang Tiga) Airport",
        "city": "Pekanbaru-Sumatra Island",
        "country": "ID"
      },
      {
        "iata": "DUM",
        "name": "Pinang Kampai Airport",
        "city": "Dumai-Sumatra Island",
        "country": "ID"
      },
      {
        "iata": "RKO",
        "name": "Rokot Airport",
        "city": "Sipora Island",
        "country": "ID"
      },
      {
        "iata": "SEQ",
        "name": "Sungai Pakning Bengkalis Airport",
        "city": "Bengkalis-Sumatra Island",
        "country": "ID"
      },
      {
        "iata": "TJB",
        "name": "Tanjung Balai Airport",
        "city": "Karinmunbesar Island",
        "country": "ID"
      },
      {
        "iata": "BDO",
        "name": "Husein Sastranegara International Airport",
        "city": "Bandung-Java Island",
        "country": "ID"
      },
      {
        "iata": "CBN",
        "name": "Penggung Airport",
        "city": "Cirebon-Java Island",
        "country": "ID"
      },
      {
        "iata": "TSY",
        "name": "Cibeureum Airport",
        "city": "Tasikmalaya-Java Island",
        "country": "ID"
      },
      {
        "iata": "TKG",
        "name": "Radin Inten II (Branti) Airport",
        "city": "Bandar Lampung-Sumatra Island",
        "country": "ID"
      },
      {
        "iata": "BTH",
        "name": "Hang Nadim Airport",
        "city": "Batam Island",
        "country": "ID"
      },
      {
        "iata": "PPR",
        "name": "Pasir Pangaraan Airport",
        "city": "Pasir Pengarayan-Sumatra Island",
        "country": "ID"
      },
      {
        "iata": "TNJ",
        "name": "Kijang Airport",
        "city": "Tanjung Pinang-Bintan Island",
        "country": "ID"
      },
      {
        "iata": "SIQ",
        "name": "Dabo Airport",
        "city": "Pasirkuning-Singkep Island",
        "country": "ID"
      },
      {
        "iata": "PDG",
        "name": "Minangkabau Airport",
        "city": "Ketaping/Padang-Sumatra Island",
        "country": "ID"
      },
      {
        "iata": "HLP",
        "name": "Halim Perdanakusuma International Airport",
        "city": "Jakarta",
        "country": "ID"
      },
      {
        "iata": "CXP",
        "name": "Tunggul Wulung Airport",
        "city": "Cilacap-Java Island",
        "country": "ID"
      },
      {
        "iata": "PCB",
        "name": "Pondok Cabe Air Base",
        "city": "Jakarta",
        "country": "ID"
      },
      {
        "iata": "PPJ",
        "name": "Pulau Panjang Airport",
        "city": "Tjipara-Java Island",
        "country": "ID"
      },
      {
        "iata": "CGK",
        "name": "Soekarno-Hatta International Airport",
        "city": "Jakarta",
        "country": "ID"
      },
      {
        "iata": "GNS",
        "name": "Binaka Airport",
        "city": "Gunung Sitoli-Nias Island",
        "country": "ID"
      },
      {
        "iata": "AEG",
        "name": "Aek Godang Airport",
        "city": "Padang Sidempuan-Sumatra Island",
        "country": "ID"
      },
      {
        "iata": "MES",
        "name": "Soewondo Air Force Base",
        "city": "Medan",
        "country": "ID"
      },
      {
        "iata": "KNO",
        "name": "Polonia International Airport",
        "city": "Medan-Sumatra Island",
        "country": "ID"
      },
      {
        "iata": "FLZ",
        "name": "Dr Ferdinand Lumban Tobing Airport",
        "city": "Sibolga-Sumatra Island",
        "country": "ID"
      },
      {
        "iata": "TJQ",
        "name": "Buluh Tumbang (H A S Hanandjoeddin) Airport",
        "city": "Tanjung Pandan-Belitung Island",
        "country": "ID"
      },
      {
        "iata": "NPO",
        "name": "Nanga Pinoh I Airport",
        "city": "Nanga Pinoh-Borneo Island",
        "country": "ID"
      },
      {
        "iata": "KTG",
        "name": "Ketapang(Rahadi Usman) Airport",
        "city": "Ketapang-Borneo Island",
        "country": "ID"
      },
      {
        "iata": "MWK",
        "name": "Tarempa Airport",
        "city": "Matak Island",
        "country": "ID"
      },
      {
        "iata": "NTX",
        "name": "Ranai Airport",
        "city": "Ranai-Natuna Besar Island",
        "country": "ID"
      },
      {
        "iata": "PNK",
        "name": "Supadio Airport",
        "city": "Pontianak-Borneo Island",
        "country": "ID"
      },
      {
        "iata": "PSU",
        "name": "Pangsuma Airport",
        "city": "Putussibau-Borneo Island",
        "country": "ID"
      },
      {
        "iata": "SQG",
        "name": "Sintang(Susilo) Airport",
        "city": "Sintang-Borneo Island",
        "country": "ID"
      },
      {
        "iata": "DJB",
        "name": "Sultan Thaha Airport",
        "city": "Jambi-Sumatra Island",
        "country": "ID"
      },
      {
        "iata": "PGK",
        "name": "Pangkal Pinang (Depati Amir) Airport",
        "city": "Pangkal Pinang-Palaubangka Island",
        "country": "ID"
      },
      {
        "iata": "BKS",
        "name": "Padang Kemiling (Fatmawati Soekarno) Airport",
        "city": "Bengkulu-Sumatra Island",
        "country": "ID"
      },
      {
        "iata": "PLM",
        "name": "Sultan Mahmud Badaruddin Ii Airport",
        "city": "Palembang-Sumatra Island",
        "country": "ID"
      },
      {
        "iata": "PDO",
        "name": "Pendopo Airport",
        "city": "Talang Gudang-Sumatra Island",
        "country": "ID"
      },
      {
        "iata": "RGT",
        "name": "Japura Airport",
        "city": "Rengat-Sumatra Island",
        "country": "ID"
      },
      {
        "iata": "PDG",
        "name": "Minangkabau Airport",
        "city": "Ketaping/Padang-Sumatra Island",
        "country": "ID"
      },
      {
        "iata": "MPC",
        "name": "Muko Muko Airport",
        "city": "Muko Muko-Sumatra Island",
        "country": "ID"
      },
      {
        "iata": "KLQ",
        "name": "Keluang Airport",
        "city": "Keluang-Sumatra Island",
        "country": "ID"
      },
      {
        "iata": "TPK",
        "name": "Teuku Cut Ali Airport",
        "city": "Tapak Tuan-Sumatra Island",
        "country": "ID"
      },
      {
        "iata": "MEQ",
        "name": "Seunagan Airport",
        "city": "Peureumeue-Sumatra Island",
        "country": "ID"
      },
      {
        "iata": "LSX",
        "name": "Lhok Sukon Airport",
        "city": "Lhok Sukon-Sumatra Island",
        "country": "ID"
      },
      {
        "iata": "LSW",
        "name": "Malikus Saleh Airport",
        "city": "Lhok Seumawe-Sumatra Island",
        "country": "ID"
      },
      {
        "iata": "SBG",
        "name": "Maimun Saleh Airport",
        "city": "Sabang-We Island",
        "country": "ID"
      },
      {
        "iata": "BTJ",
        "name": "Sultan Iskandarmuda Airport",
        "city": "Banda Aceh-Sumatra Island",
        "country": "ID"
      },
      {
        "iata": "SXT",
        "name": "Sungai Tiang Airport",
        "city": "Taman Negara",
        "country": "MY"
      },
      {
        "iata": "MEP",
        "name": "Mersing Airport",
        "city": "Mersing",
        "country": "MY"
      },
      {
        "iata": "SWY",
        "name": "Sitiawan Airport",
        "city": "Sitiawan",
        "country": "MY"
      },
      {
        "iata": "TPG",
        "name": "Taiping (Tekah) Airport",
        "city": "Taiping",
        "country": "MY"
      },
      {
        "iata": "TOD",
        "name": "Pulau Tioman Airport",
        "city": "Pulau Tioman",
        "country": "MY"
      },
      {
        "iata": "AOR",
        "name": "Sultan Abdul Halim Airport",
        "city": "Alor Satar",
        "country": "MY"
      },
      {
        "iata": "BWH",
        "name": "Butterworth Airport",
        "city": "Butterworth",
        "country": "MY"
      },
      {
        "iata": "KBR",
        "name": "Sultan Ismail Petra Airport",
        "city": "Kota Baharu",
        "country": "MY"
      },
      {
        "iata": "KUA",
        "name": "Kuantan Airport",
        "city": "Kuantan",
        "country": "MY"
      },
      {
        "iata": "KTE",
        "name": "Kerteh Airport",
        "city": "Kerteh",
        "country": "MY"
      },
      {
        "iata": "IPH",
        "name": "Sultan Azlan Shah Airport",
        "city": "Ipoh",
        "country": "MY"
      },
      {
        "iata": "JHB",
        "name": "Senai International Airport",
        "city": "Senai",
        "country": "MY"
      },
      {
        "iata": "KUL",
        "name": "Kuala Lumpur International Airport",
        "city": "Kuala Lumpur",
        "country": "MY"
      },
      {
        "iata": "LGK",
        "name": "Langkawi International Airport",
        "city": "Langkawi",
        "country": "MY"
      },
      {
        "iata": "MKZ",
        "name": "Malacca Airport",
        "city": "Malacca",
        "country": "MY"
      },
      {
        "iata": "TGG",
        "name": "Sultan Mahmud Airport",
        "city": "Kuala Terengganu",
        "country": "MY"
      },
      {
        "iata": "PEN",
        "name": "Penang International Airport",
        "city": "Penang",
        "country": "MY"
      },
      {
        "iata": "PKG",
        "name": "Pulau Pangkor Airport",
        "city": "Pangkor Island",
        "country": "MY"
      },
      {
        "iata": "RDN",
        "name": "LTS Pulau Redang Airport",
        "city": "Redang",
        "country": "MY"
      },
      {
        "iata": "SZB",
        "name": "Sultan Abdul Aziz Shah International Airport",
        "city": "Subang",
        "country": "MY"
      },
      {
        "iata": "DTR",
        "name": "Decatur Shores Airport",
        "city": "Decatur",
        "country": "US"
      },
      {
        "iata": "AUT",
        "name": "Atauro Airport",
        "city": "Atauro",
        "country": "TL"
      },
      {
        "iata": "UAI",
        "name": "Suai Airport",
        "city": "Suai",
        "country": "TL"
      },
      {
        "iata": "DIL",
        "name": "Presidente Nicolau Lobato International Airport",
        "city": "Dili",
        "country": "TL"
      },
      {
        "iata": "BCH",
        "name": "Cakung Airport",
        "city": "Baucau",
        "country": "TL"
      },
      {
        "iata": "MPT",
        "name": "Maliana Airport",
        "city": "Maliana",
        "country": "TL"
      },
      {
        "iata": "OEC",
        "name": "Oecussi Airport",
        "city": "Oecussi-Ambeno",
        "country": "TL"
      },
      {
        "iata": "VIQ",
        "name": "Viqueque Airport",
        "city": "Viqueque",
        "country": "TL"
      },
      {
        "iata": "ABU",
        "name": "Haliwen Airport",
        "city": "Atambua-Timor Island",
        "country": "ID"
      },
      {
        "iata": "LKA",
        "name": "Gewayentana Airport",
        "city": "Larantuka-Flores Island",
        "country": "ID"
      },
      {
        "iata": "SAU",
        "name": "Sawu Airport",
        "city": "Sawu-Sawu Island",
        "country": "ID"
      },
      {
        "iata": "SGQ",
        "name": "Sanggata Airport",
        "city": "Sanggata-Timor Island",
        "country": "ID"
      },
      {
        "iata": "LBW",
        "name": "Long Bawan Airport",
        "city": "Long Bawan-Borneo Island",
        "country": "ID"
      },
      {
        "iata": "BXT",
        "name": "Bontang Airport",
        "city": "Bontang-Borneo Island",
        "country": "ID"
      },
      {
        "iata": "NNX",
        "name": "Nunukan Airport",
        "city": "Nunukan-Nunukan Island",
        "country": "ID"
      },
      {
        "iata": "TNB",
        "name": "Tanah Grogot Airport",
        "city": "Tanah Grogot-Borneo Island",
        "country": "ID"
      },
      {
        "iata": "LPU",
        "name": "Long Apung Airport",
        "city": "Long Apung-Borneo Island",
        "country": "ID"
      },
      {
        "iata": "QPG",
        "name": "Paya Lebar Air Base",
        "city": "",
        "country": "SG"
      },
      {
        "iata": "TGA",
        "name": "Tengah Air Base",
        "city": "",
        "country": "SG"
      },
      {
        "iata": "XSP",
        "name": "Seletar Airport",
        "city": "Seletar",
        "country": "SG"
      },
      {
        "iata": "SIN",
        "name": "Singapore Changi International Airport",
        "city": "Singapore",
        "country": "SG"
      },
      {
        "iata": "SKL",
        "name": "Skye Bridge Ashaig Airport",
        "city": "Broadford",
        "country": "GB"
      },
      {
        "iata": "ALH",
        "name": "Albany Airport",
        "city": "Albany",
        "country": "AU"
      },
      {
        "iata": "ABG",
        "name": "Abingdon Downs Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "AWN",
        "name": "Alton Downs Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "AUD",
        "name": "Augustus Downs Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "MRP",
        "name": "Marla Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "AXL",
        "name": "Alexandria Homestead Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "AXC",
        "name": "Aramac Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "ADO",
        "name": "Andamooka Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "AMX",
        "name": "Ammaroo Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "AMT",
        "name": "Amata Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "AYL",
        "name": "Anthony Lagoon Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "ABH",
        "name": "Alpha Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "ARY",
        "name": "Ararat Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "GYL",
        "name": "Argyle Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "ARM",
        "name": "Armidale Airport",
        "city": "Armidale",
        "country": "AU"
      },
      {
        "iata": "AAB",
        "name": "Arrabury Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "AUU",
        "name": "Aurukun Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "AWP",
        "name": "Austral Downs Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "AVG",
        "name": "Auvergne Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "AYQ",
        "name": "Ayers Rock Connellan Airport",
        "city": "Ayers Rock",
        "country": "AU"
      },
      {
        "iata": "AYR",
        "name": "Ayr Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "ACF",
        "name": "Brisbane Archerfield Airport",
        "city": "Brisbane",
        "country": "AU"
      },
      {
        "iata": "ABM",
        "name": "Bamaga Injinoo Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "BCI",
        "name": "Barcaldine Airport",
        "city": "Barcaldine",
        "country": "AU"
      },
      {
        "iata": "ASP",
        "name": "Alice Springs Airport",
        "city": "Alice Springs",
        "country": "AU"
      },
      {
        "iata": "BDD",
        "name": "Badu Island Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "BKP",
        "name": "Barkly Downs Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "BBE",
        "name": "Big Bell Airport",
        "city": "Big Bell",
        "country": "AU"
      },
      {
        "iata": "BNE",
        "name": "Brisbane International Airport",
        "city": "Brisbane",
        "country": "AU"
      },
      {
        "iata": "OOL",
        "name": "Gold Coast Airport",
        "city": "Gold Coast",
        "country": "AU"
      },
      {
        "iata": "BKQ",
        "name": "Blackall Airport",
        "city": "Blackall",
        "country": "AU"
      },
      {
        "iata": "CNS",
        "name": "Cairns International Airport",
        "city": "Cairns",
        "country": "AU"
      },
      {
        "iata": "CTL",
        "name": "Charleville Airport",
        "city": "Charleville",
        "country": "AU"
      },
      {
        "iata": "BDW",
        "name": "Bedford Downs Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "BXG",
        "name": "Bendigo Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "BVI",
        "name": "Birdsville Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "BTX",
        "name": "Betoota Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "BQW",
        "name": "Balgo Hill Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "BHQ",
        "name": "Broken Hill Airport",
        "city": "Broken Hill",
        "country": "AU"
      },
      {
        "iata": "HTI",
        "name": "Hamilton Island Airport",
        "city": "Hamilton Island",
        "country": "AU"
      },
      {
        "iata": "BEU",
        "name": "Bedourie Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "BIW",
        "name": "Billiluna Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "BZP",
        "name": "Bizant Airport",
        "city": "Lakefield National Park",
        "country": "AU"
      },
      {
        "iata": "BRK",
        "name": "Bourke Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "BUC",
        "name": "Burketown Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "BLN",
        "name": "Benalla Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "LCN",
        "name": "Balcanoona Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "BLS",
        "name": "Bollon Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "BQB",
        "name": "Busselton Regional Airport",
        "city": "Busselton",
        "country": "AU"
      },
      {
        "iata": "ISA",
        "name": "Mount Isa Airport",
        "city": "Mount Isa",
        "country": "AU"
      },
      {
        "iata": "MCY",
        "name": "Sunshine Coast Airport",
        "city": "Maroochydore",
        "country": "AU"
      },
      {
        "iata": "MKY",
        "name": "Mackay Airport",
        "city": "Mackay",
        "country": "AU"
      },
      {
        "iata": "BNK",
        "name": "Ballina Byron Gateway Airport",
        "city": "Ballina",
        "country": "AU"
      },
      {
        "iata": "BSJ",
        "name": "Bairnsdale Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "GIC",
        "name": "Boigu Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "OKY",
        "name": "Oakey Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "BQL",
        "name": "Boulia Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "BMP",
        "name": "Brampton Island Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "PPP",
        "name": "Proserpine Whitsunday Coast Airport",
        "city": "Proserpine",
        "country": "AU"
      },
      {
        "iata": "ROK",
        "name": "Rockhampton Airport",
        "city": "Rockhampton",
        "country": "AU"
      },
      {
        "iata": "BOX",
        "name": "Borroloola Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "BME",
        "name": "Broome International Airport",
        "city": "Broome",
        "country": "AU"
      },
      {
        "iata": "BZD",
        "name": "Balranald Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "BTD",
        "name": "Brunette Downs Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "BWQ",
        "name": "Brewarrina Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "BHS",
        "name": "Bathurst Airport",
        "city": "Bathurst",
        "country": "AU"
      },
      {
        "iata": "BRT",
        "name": "Bathurst Island Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "TSV",
        "name": "Townsville Airport",
        "city": "Townsville",
        "country": "AU"
      },
      {
        "iata": "BLT",
        "name": "Blackwater Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "BDB",
        "name": "Bundaberg Airport",
        "city": "Bundaberg",
        "country": "AU"
      },
      {
        "iata": "BUY",
        "name": "Bunbury Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "BIP",
        "name": "Bulimba Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "ZBO",
        "name": "Bowen Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "WEI",
        "name": "Weipa Airport",
        "city": "Weipa",
        "country": "AU"
      },
      {
        "iata": "WTB",
        "name": "Toowoomba Wellcamp Airport",
        "city": "Wellcamp",
        "country": "AU"
      },
      {
        "iata": "BWB",
        "name": "Barrow Island Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "BVZ",
        "name": "Beverley Springs Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CGV",
        "name": "Caiguna Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CLH",
        "name": "Coolah Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CVQ",
        "name": "Carnarvon Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CSI",
        "name": "Casino Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CAZ",
        "name": "Cobar Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "COJ",
        "name": "Coonabarabran Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CBY",
        "name": "Canobie Airport",
        "city": "Canobie",
        "country": "AU"
      },
      {
        "iata": "CBI",
        "name": "Cape Barren Island Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CPD",
        "name": "Coober Pedy Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CRB",
        "name": "Collarenebri Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CCL",
        "name": "Chinchilla Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CNC",
        "name": "Coconut Island Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CNJ",
        "name": "Cloncurry Airport",
        "city": "Cloncurry",
        "country": "AU"
      },
      {
        "iata": "CBX",
        "name": "Condobolin Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CUD",
        "name": "Caloundra Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CED",
        "name": "Ceduna Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CVC",
        "name": "Cleve Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CFI",
        "name": "Camfield Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "LLG",
        "name": "Chillagoe Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CKW",
        "name": "Graeme Rowley Aerodrome",
        "city": "Christmas Creek mine",
        "country": "AU"
      },
      {
        "iata": "CXT",
        "name": "Charters Towers Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "DCN",
        "name": "RAAF Base Curtin",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CKI",
        "name": "Croker Island Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CTN",
        "name": "Cooktown Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CMQ",
        "name": "Clermont Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CMA",
        "name": "Cunnamulla Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CML",
        "name": "Camooweal Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "NIF",
        "name": "Camp Nifty Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CES",
        "name": "Cessnock Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CNB",
        "name": "Coonamble Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "ODL",
        "name": "Cordillo Downs Airport",
        "city": "Cordillo Downs",
        "country": "AU"
      },
      {
        "iata": "CUQ",
        "name": "Coen Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "OOM",
        "name": "Cooma Snowy Mountains Airport",
        "city": "Cooma",
        "country": "AU"
      },
      {
        "iata": "CDA",
        "name": "Cooinda Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CWW",
        "name": "Corowa Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CYG",
        "name": "Corryong Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CDQ",
        "name": "Croydon Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "KCE",
        "name": "Collinsville Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CMD",
        "name": "Cootamundra Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CUG",
        "name": "Cudal Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CUY",
        "name": "Cue Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CJF",
        "name": "Coondewanna Wa Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CWR",
        "name": "Cowarie Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CCW",
        "name": "Cowell Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CWT",
        "name": "Cowra Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "DJR",
        "name": "Dajarra Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "DBY",
        "name": "Dalby Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "DRN",
        "name": "Dirranbandi Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "DNB",
        "name": "Dunbar Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "DRB",
        "name": "Derby Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "DFP",
        "name": "Drumduff Airport",
        "city": "Drumduff",
        "country": "AU"
      },
      {
        "iata": "DGD",
        "name": "Dalgaranga Gold Mine Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "DXD",
        "name": "Dixie Airport",
        "city": "New Dixie",
        "country": "AU"
      },
      {
        "iata": "DLK",
        "name": "Dulkaninna Airport",
        "city": "Dulkaninna",
        "country": "AU"
      },
      {
        "iata": "DDN",
        "name": "Delta Downs Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "DLV",
        "name": "Delissaville Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "DYW",
        "name": "Daly Waters Airport",
        "city": "Daly Waters",
        "country": "AU"
      },
      {
        "iata": "DMD",
        "name": "Doomadgee Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "DVR",
        "name": "Daly River Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "NLF",
        "name": "Darnley Island Airport",
        "city": "Darnley Island",
        "country": "AU"
      },
      {
        "iata": "DRD",
        "name": "Dorunda Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "DVP",
        "name": "Davenport Downs Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "DPO",
        "name": "Devonport Airport",
        "city": "Devonport",
        "country": "AU"
      },
      {
        "iata": "DOX",
        "name": "Dongara Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "DRY",
        "name": "Drysdale River Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "DHD",
        "name": "Durham Downs Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "DRR",
        "name": "Durrie Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "DKV",
        "name": "Docker River Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "DYA",
        "name": "Dysart Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "ECH",
        "name": "Echuca Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "EUC",
        "name": "Eucla Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "ETD",
        "name": "Etadunna Airport",
        "city": "Etadunna",
        "country": "AU"
      },
      {
        "iata": "ENB",
        "name": "Eneabba Airport",
        "city": "Eneabba",
        "country": "AU"
      },
      {
        "iata": "EIH",
        "name": "Einasleigh Airport",
        "city": "Einasleigh",
        "country": "AU"
      },
      {
        "iata": "ELC",
        "name": "Elcho Island Airport",
        "city": "Elcho Island",
        "country": "AU"
      },
      {
        "iata": "EMD",
        "name": "Emerald Airport",
        "city": "Emerald",
        "country": "AU"
      },
      {
        "iata": "ERB",
        "name": "Ernabella Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "EPR",
        "name": "Esperance Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "EVD",
        "name": "Eva Downs Airport",
        "city": "Eva Downs",
        "country": "AU"
      },
      {
        "iata": "EVH",
        "name": "Evans Head Aerodrome",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "EXM",
        "name": "Exmouth Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "KFE",
        "name": "Fortescue - Dave Forrest Aerodrome",
        "city": "Cloudbreak Village",
        "country": "AU"
      },
      {
        "iata": "FLY",
        "name": "Finley Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "FLS",
        "name": "Flinders Island Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "FVL",
        "name": "Flora Valley Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "FIK",
        "name": "Finke Airport",
        "city": "Finke",
        "country": "AU"
      },
      {
        "iata": "FOS",
        "name": "Forrest Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "FOT",
        "name": "Forster (Wallis Is) Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "FIZ",
        "name": "Fitzroy Crossing Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "GAH",
        "name": "Gayndah Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "GBL",
        "name": "South Goulburn Is Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "GUH",
        "name": "Gunnedah Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "GOO",
        "name": "Goondiwindi Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "GDD",
        "name": "Gordon Downs Airport",
        "city": "Gordon Downs",
        "country": "AU"
      },
      {
        "iata": "GGD",
        "name": "Gregory Downs Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "GTS",
        "name": "Granite Downs Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "GET",
        "name": "Geraldton Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "GFN",
        "name": "Grafton Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "GBW",
        "name": "Ginbata",
        "city": "Ginbata",
        "country": "AU"
      },
      {
        "iata": "GBV",
        "name": "Gibb River Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "GLT",
        "name": "Gladstone Airport",
        "city": "Gladstone",
        "country": "AU"
      },
      {
        "iata": "GUL",
        "name": "Goulburn Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "GLG",
        "name": "Glengyle Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "GEX",
        "name": "Geelong Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "GLI",
        "name": "Glen Innes Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "GLM",
        "name": "Glenormiston Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "GVP",
        "name": "Greenvale Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "GPN",
        "name": "Garden Point Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "GTE",
        "name": "Groote Eylandt Airport",
        "city": "Groote Eylandt",
        "country": "AU"
      },
      {
        "iata": "GFF",
        "name": "Griffith Airport",
        "city": "Griffith",
        "country": "AU"
      },
      {
        "iata": "GTT",
        "name": "Georgetown Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "GEE",
        "name": "Georgetown (Tas) Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "GYP",
        "name": "Gympie Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "HWK",
        "name": "Wilpena Pound Airport",
        "city": "Hawker",
        "country": "AU"
      },
      {
        "iata": "HXX",
        "name": "Hay Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "HVB",
        "name": "Hervey Bay Airport",
        "city": "Hervey Bay",
        "country": "AU"
      },
      {
        "iata": "HUB",
        "name": "Humbert River Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "HIP",
        "name": "Headingly Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "HID",
        "name": "Horn Island Airport",
        "city": "Horn Island",
        "country": "AU"
      },
      {
        "iata": "HCQ",
        "name": "Halls Creek Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "HMG",
        "name": "Hermannsburg Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "HLT",
        "name": "Hamilton Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "HOK",
        "name": "Hooker Creek Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "MHU",
        "name": "Mount Hotham Airport",
        "city": "Mount Hotham",
        "country": "AU"
      },
      {
        "iata": "HTU",
        "name": "Hopetoun Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "HSM",
        "name": "Horsham Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "HGD",
        "name": "Hughenden Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "IDK",
        "name": "Indulkana Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "IFL",
        "name": "Innisfail Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "IFF",
        "name": "Iffley Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "IGH",
        "name": "Ingham Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "IKP",
        "name": "Inkerman Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "INJ",
        "name": "Injune Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "INM",
        "name": "Innamincka Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "IVW",
        "name": "Inverway Airport",
        "city": "Inverway",
        "country": "AU"
      },
      {
        "iata": "ISI",
        "name": "Isisford Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "IVR",
        "name": "Inverell Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "JAB",
        "name": "Jabiru Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "JUN",
        "name": "Jundah Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "QJD",
        "name": "Jindabyne Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "JCK",
        "name": "Julia Creek Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "JUR",
        "name": "Jurien Bay Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "UBU",
        "name": "Kalumburu Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "KAX",
        "name": "Kalbarri Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "KBY",
        "name": "Streaky Bay Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "KCS",
        "name": "Kings Creek Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "KRA",
        "name": "Kerang Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "KNS",
        "name": "King Island Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "KBB",
        "name": "Kirkimbie Station Airport",
        "city": "Kirkimbie",
        "country": "AU"
      },
      {
        "iata": "KFG",
        "name": "Kalkgurung Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "KKP",
        "name": "Koolburra Airport",
        "city": "Koolburra",
        "country": "AU"
      },
      {
        "iata": "KRB",
        "name": "Karumba Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "KML",
        "name": "Kamileroi Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "KPS",
        "name": "Kempsey Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "KNI",
        "name": "Katanning Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "KWM",
        "name": "Kowanyama Airport",
        "city": "Kowanyama",
        "country": "AU"
      },
      {
        "iata": "KGY",
        "name": "Kingaroy Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "KGC",
        "name": "Kingscote Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "KUG",
        "name": "Kubin Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "LWH",
        "name": "Lawn Hill Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "LGH",
        "name": "Leigh Creek Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "LNO",
        "name": "Leonora Airport",
        "city": "Leonora",
        "country": "AU"
      },
      {
        "iata": "LEL",
        "name": "Lake Evella Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "LDH",
        "name": "Lord Howe Island Airport",
        "city": "Lord Howe Island",
        "country": "AU"
      },
      {
        "iata": "IRG",
        "name": "Lockhart River Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "LTP",
        "name": "Lyndhurst Airport",
        "city": "Lyndhurst",
        "country": "AU"
      },
      {
        "iata": "LDC",
        "name": "Lindeman Island Airport",
        "city": "Lindeman Island",
        "country": "AU"
      },
      {
        "iata": "LSY",
        "name": "Lismore Airport",
        "city": "Lismore",
        "country": "AU"
      },
      {
        "iata": "LOC",
        "name": "Lock Airport",
        "city": "Lock",
        "country": "AU"
      },
      {
        "iata": "LOA",
        "name": "Lorraine Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "LTV",
        "name": "Lotus Vale Airport",
        "city": "Lotus Vale",
        "country": "AU"
      },
      {
        "iata": "LUU",
        "name": "Laura Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "LHG",
        "name": "Lightning Ridge Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "LRE",
        "name": "Longreach Airport",
        "city": "Longreach",
        "country": "AU"
      },
      {
        "iata": "LUT",
        "name": "New Laura Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "LER",
        "name": "Leinster Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "LVO",
        "name": "Laverton Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "TGN",
        "name": "Latrobe Valley Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "LZR",
        "name": "Lizard Island Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "UBB",
        "name": "Mabuiag Island Airport",
        "city": "Mabuiag Island",
        "country": "AU"
      },
      {
        "iata": "AVV",
        "name": "Avalon Airport",
        "city": "Melbourne",
        "country": "AU"
      },
      {
        "iata": "ABX",
        "name": "Albury Airport",
        "city": "Albury",
        "country": "AU"
      },
      {
        "iata": "MRG",
        "name": "Mareeba Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "MBB",
        "name": "Marble Bar Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "XMC",
        "name": "Mallacoota Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "MFP",
        "name": "Manners Creek Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "MLR",
        "name": "Millicent Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "DGE",
        "name": "Mudgee Airport",
        "city": "Mudgee",
        "country": "AU"
      },
      {
        "iata": "MQA",
        "name": "Mandora Airport",
        "city": "Mandora",
        "country": "AU"
      },
      {
        "iata": "MKR",
        "name": "Meekatharra Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "MEB",
        "name": "Melbourne Essendon Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "MIM",
        "name": "Merimbula Airport",
        "city": "Merimbula",
        "country": "AU"
      },
      {
        "iata": "SXE",
        "name": "RAAF Base East Sale",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "MGT",
        "name": "Milingimbi Airport",
        "city": "Milingimbi Island",
        "country": "AU"
      },
      {
        "iata": "MNG",
        "name": "Maningrida Airport",
        "city": "Maningrida",
        "country": "AU"
      },
      {
        "iata": "GSN",
        "name": "Mount Gunson Airport",
        "city": "Mount Gunson",
        "country": "AU"
      },
      {
        "iata": "MGV",
        "name": "Margaret River (Station) Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "MQZ",
        "name": "Margaret River Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "HBA",
        "name": "Hobart International Airport",
        "city": "Hobart",
        "country": "AU"
      },
      {
        "iata": "MHO",
        "name": "Mount House Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "MCV",
        "name": "McArthur River Mine Airport",
        "city": "McArthur River Mine",
        "country": "AU"
      },
      {
        "iata": "MQL",
        "name": "Mildura Airport",
        "city": "Mildura",
        "country": "AU"
      },
      {
        "iata": "XML",
        "name": "Minlaton Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "MIH",
        "name": "Mitchell Plateau Airport",
        "city": "Mitchell Plateau",
        "country": "AU"
      },
      {
        "iata": "MTQ",
        "name": "Mitchell Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "MJP",
        "name": "Manjimup Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "LST",
        "name": "Launceston Airport",
        "city": "Launceston",
        "country": "AU"
      },
      {
        "iata": "MBW",
        "name": "Melbourne Moorabbin Airport",
        "city": "Melbourne",
        "country": "AU"
      },
      {
        "iata": "MEL",
        "name": "Melbourne International Airport",
        "city": "Melbourne",
        "country": "AU"
      },
      {
        "iata": "MMM",
        "name": "Middlemount Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "MTL",
        "name": "Maitland Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "WME",
        "name": "Mount Keith Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "ONR",
        "name": "Monkira Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "OXY",
        "name": "Morney Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "MMG",
        "name": "Mount Magnet Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "OOR",
        "name": "Mooraberree Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "MRZ",
        "name": "Moree Airport",
        "city": "Moree",
        "country": "AU"
      },
      {
        "iata": "MET",
        "name": "Moreton Airport",
        "city": "Moreton",
        "country": "AU"
      },
      {
        "iata": "MIN",
        "name": "Minnipa Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "MQE",
        "name": "Marqua Airport",
        "city": "Marqua",
        "country": "AU"
      },
      {
        "iata": "MOV",
        "name": "Moranbah Airport",
        "city": "Moranbah",
        "country": "AU"
      },
      {
        "iata": "RRE",
        "name": "Marree Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "MWB",
        "name": "Morawa Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "MYA",
        "name": "Moruya Airport",
        "city": "Moruya",
        "country": "AU"
      },
      {
        "iata": "MTD",
        "name": "Mount Sanford Station Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "UTB",
        "name": "Muttaburra Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "MGB",
        "name": "Mount Gambier Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "ONG",
        "name": "Mornington Island Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "MNQ",
        "name": "Monto Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "MUQ",
        "name": "Muccan Station Airport",
        "city": "Muccan Station",
        "country": "AU"
      },
      {
        "iata": "MNE",
        "name": "Mungeranie Airport",
        "city": "Mungeranie",
        "country": "AU"
      },
      {
        "iata": "MYI",
        "name": "Murray Island Airport",
        "city": "Murray Island",
        "country": "AU"
      },
      {
        "iata": "MVK",
        "name": "Mulka Airport",
        "city": "Mulka",
        "country": "AU"
      },
      {
        "iata": "MXU",
        "name": "Mullewa Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "MXD",
        "name": "Marion Downs Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "MBH",
        "name": "Maryborough Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "RTY",
        "name": "Merty Merty Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "NMR",
        "name": "Nappa Merrie Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "NRA",
        "name": "Narrandera Airport",
        "city": "Narrandera",
        "country": "AU"
      },
      {
        "iata": "NAA",
        "name": "Narrabri Airport",
        "city": "Narrabri",
        "country": "AU"
      },
      {
        "iata": "RPM",
        "name": "Ngukurr Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "NBH",
        "name": "Nambucca Heads Airport",
        "city": "Nambucca Heads",
        "country": "AU"
      },
      {
        "iata": "NLS",
        "name": "Nicholson Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "NAC",
        "name": "Naracoorte Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "QRM",
        "name": "Narromine Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "RVT",
        "name": "Ravensthorpe Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "NSV",
        "name": "Noosa Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "NSM",
        "name": "Norseman Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "NTN",
        "name": "Normanton Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "NUR",
        "name": "Nullabor Motel Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "NLL",
        "name": "Nullagine Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "NUB",
        "name": "Numbulwar Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "ZNE",
        "name": "Newman Airport",
        "city": "Newman",
        "country": "AU"
      },
      {
        "iata": "NYN",
        "name": "Nyngan Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "OPI",
        "name": "Oenpelli Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "XCO",
        "name": "Colac Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "OLP",
        "name": "Olympic Dam Airport",
        "city": "Olympic Dam",
        "country": "AU"
      },
      {
        "iata": "ONS",
        "name": "Onslow Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "ODD",
        "name": "Oodnadatta Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "MOO",
        "name": "Moomba Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "RBS",
        "name": "Orbost Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "OAG",
        "name": "Orange Airport",
        "city": "Orange",
        "country": "AU"
      },
      {
        "iata": "ODR",
        "name": "Ord River Airport",
        "city": "Ord River",
        "country": "AU"
      },
      {
        "iata": "OSO",
        "name": "Osborne Mine Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "OYN",
        "name": "Ouyen Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "ADL",
        "name": "Adelaide International Airport",
        "city": "Adelaide",
        "country": "AU"
      },
      {
        "iata": "PUG",
        "name": "Port Augusta Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "PMK",
        "name": "Palm Island Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "PBO",
        "name": "Paraburdoo Airport",
        "city": "Paraburdoo",
        "country": "AU"
      },
      {
        "iata": "CCK",
        "name": "Cocos (Keeling) Islands Airport",
        "city": "Cocos (Keeling) Islands",
        "country": "CC"
      },
      {
        "iata": "PDE",
        "name": "Pandie Pandie Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "DRW",
        "name": "Darwin International Airport",
        "city": "Darwin",
        "country": "AU"
      },
      {
        "iata": "PRD",
        "name": "Pardoo Airport",
        "city": "Pardoo",
        "country": "AU"
      },
      {
        "iata": "BEO",
        "name": "Aeropelican Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "GOV",
        "name": "Gove Airport",
        "city": "Nhulunbuy",
        "country": "AU"
      },
      {
        "iata": "PPI",
        "name": "Port Pirie Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "JAD",
        "name": "Perth Jandakot Airport",
        "city": "Perth",
        "country": "AU"
      },
      {
        "iata": "KTA",
        "name": "Karratha Airport",
        "city": "Karratha",
        "country": "AU"
      },
      {
        "iata": "KGI",
        "name": "Kalgoorlie Boulder Airport",
        "city": "Kalgoorlie",
        "country": "AU"
      },
      {
        "iata": "PKE",
        "name": "Parkes Airport",
        "city": "Parkes",
        "country": "AU"
      },
      {
        "iata": "PKT",
        "name": "Port Keats Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "KNX",
        "name": "Kununurra Airport",
        "city": "Kununurra",
        "country": "AU"
      },
      {
        "iata": "PLO",
        "name": "Port Lincoln Airport",
        "city": "Port Lincoln",
        "country": "AU"
      },
      {
        "iata": "LEA",
        "name": "Learmonth Airport",
        "city": "Exmouth",
        "country": "AU"
      },
      {
        "iata": "EDR",
        "name": "Pormpuraaw Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "PQQ",
        "name": "Port Macquarie Airport",
        "city": "Port Macquarie",
        "country": "AU"
      },
      {
        "iata": "PTJ",
        "name": "Portland Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "PHE",
        "name": "Port Hedland International Airport",
        "city": "Port Hedland",
        "country": "AU"
      },
      {
        "iata": "PER",
        "name": "Perth International Airport",
        "city": "Perth",
        "country": "AU"
      },
      {
        "iata": "PEA",
        "name": "Penneshaw Airport",
        "city": "Ironstone",
        "country": "AU"
      },
      {
        "iata": "KTR",
        "name": "Tindal Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "UMR",
        "name": "Woomera Airfield",
        "city": "Woomera",
        "country": "AU"
      },
      {
        "iata": "XCH",
        "name": "Christmas Island Airport",
        "city": "Christmas Island",
        "country": "CX"
      },
      {
        "iata": "UIR",
        "name": "Quirindi Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "ULP",
        "name": "Quilpie Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "UEE",
        "name": "Queenstown Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "RMK",
        "name": "Renmark Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "RCM",
        "name": "Richmond Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "RAM",
        "name": "Ramingining Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "ROH",
        "name": "Robinhood Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "RBU",
        "name": "Roebourne Airport",
        "city": "Roebourne",
        "country": "AU"
      },
      {
        "iata": "RBC",
        "name": "Robinvale Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "RMA",
        "name": "Roma Airport",
        "city": "Roma",
        "country": "AU"
      },
      {
        "iata": "RSB",
        "name": "Roseberth Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "RTS",
        "name": "Rottnest Island Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "RTP",
        "name": "Rutland Plains Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "RHL",
        "name": "Roy Hill Station Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "NDS",
        "name": "Sandstone Airport",
        "city": "Sandstone",
        "country": "AU"
      },
      {
        "iata": "BWU",
        "name": "Sydney Bankstown Airport",
        "city": "Sydney",
        "country": "AU"
      },
      {
        "iata": "CBR",
        "name": "Canberra International Airport",
        "city": "Canberra",
        "country": "AU"
      },
      {
        "iata": "CFS",
        "name": "Coffs Harbour Airport",
        "city": "Coffs Harbour",
        "country": "AU"
      },
      {
        "iata": "CDU",
        "name": "Camden Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "NSO",
        "name": "Scone Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "SQC",
        "name": "Southern Cross Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "DBO",
        "name": "Dubbo City Regional Airport",
        "city": "Dubbo",
        "country": "AU"
      },
      {
        "iata": "SGO",
        "name": "St George Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "SIX",
        "name": "Singleton Airport",
        "city": "Singleton",
        "country": "AU"
      },
      {
        "iata": "ZGL",
        "name": "South Galway Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "SGP",
        "name": "Shay Gap Airport",
        "city": "Shay Gap",
        "country": "AU"
      },
      {
        "iata": "MJK",
        "name": "Shark Bay Airport",
        "city": "Monkey Mia",
        "country": "AU"
      },
      {
        "iata": "JHQ",
        "name": "Shute Harbour Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "SHT",
        "name": "Shepparton Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "SBR",
        "name": "Saibai Island Airport",
        "city": "Saibai Island",
        "country": "AU"
      },
      {
        "iata": "SIO",
        "name": "Smithton Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "SHU",
        "name": "Smith Point Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "STH",
        "name": "Strathmore Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "SNB",
        "name": "Snake Bay Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "NLK",
        "name": "Norfolk Island International Airport",
        "city": "Burnt Pine",
        "country": "NF"
      },
      {
        "iata": "NOA",
        "name": "Nowra Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "SLJ",
        "name": "Solomon Airport",
        "city": "Karijini National Park",
        "country": "AU"
      },
      {
        "iata": "SNH",
        "name": "Stanthorpe Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "SCG",
        "name": "Spring Creek Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "SHQ",
        "name": "Southport Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "KSV",
        "name": "Springvale Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "SRN",
        "name": "Strahan Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "SYD",
        "name": "Sydney Kingsford Smith International Airport",
        "city": "Sydney",
        "country": "AU"
      },
      {
        "iata": "HLS",
        "name": "St Helens Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "TMW",
        "name": "Tamworth Airport",
        "city": "Tamworth",
        "country": "AU"
      },
      {
        "iata": "WGA",
        "name": "Wagga Wagga City Airport",
        "city": "Wagga Wagga",
        "country": "AU"
      },
      {
        "iata": "SWH",
        "name": "Swan Hill Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "SWC",
        "name": "Stawell Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "XTR",
        "name": "Tara Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "TBL",
        "name": "Tableland Homestead Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "XTO",
        "name": "Taroom Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "TAQ",
        "name": "Tarcoola Airport",
        "city": "Tarcoola",
        "country": "AU"
      },
      {
        "iata": "TBK",
        "name": "Timber Creek Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "TDR",
        "name": "Theodore Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "TEF",
        "name": "Telfer Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "TEM",
        "name": "Temora Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "TAN",
        "name": "Tangalooma Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "XTG",
        "name": "Thargomindah Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "TYG",
        "name": "Thylungra Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "TYB",
        "name": "Tibooburra Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "TKY",
        "name": "Turkey Creek Airport",
        "city": "Turkey Creek",
        "country": "AU"
      },
      {
        "iata": "TPR",
        "name": "Tom Price Airport",
        "city": "Tom Price",
        "country": "AU"
      },
      {
        "iata": "TUM",
        "name": "Tumut Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "TYP",
        "name": "Tobermorey Airport",
        "city": "Tobermorey",
        "country": "AU"
      },
      {
        "iata": "THG",
        "name": "Thangool Airport",
        "city": "Biloela",
        "country": "AU"
      },
      {
        "iata": "TCA",
        "name": "Tennant Creek Airport",
        "city": "Tennant Creek",
        "country": "AU"
      },
      {
        "iata": "TCW",
        "name": "Tocumwal Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "TRO",
        "name": "Taree Airport",
        "city": "Taree",
        "country": "AU"
      },
      {
        "iata": "TWB",
        "name": "Toowoomba Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "UDA",
        "name": "Undara Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "CZY",
        "name": "Cluny Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "USL",
        "name": "Useless Loop Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "VCD",
        "name": "Victoria River Downs Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "VNR",
        "name": "Vanrook Station Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "WLA",
        "name": "Wallal Airport",
        "city": "Wallal",
        "country": "AU"
      },
      {
        "iata": "WAV",
        "name": "Wave Hill Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "WMB",
        "name": "Warrnambool Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "SYU",
        "name": "Warraber Island Airport",
        "city": "Sue Islet",
        "country": "AU"
      },
      {
        "iata": "WIO",
        "name": "Wilcannia Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "WLC",
        "name": "Walcha Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "WAZ",
        "name": "Warwick Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "WND",
        "name": "Windarra Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "WNR",
        "name": "Windorah Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "WGT",
        "name": "Wangaratta Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "WYA",
        "name": "Whyalla Airport",
        "city": "Whyalla",
        "country": "AU"
      },
      {
        "iata": "WIT",
        "name": "Wittenoom Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "WKB",
        "name": "Warracknabeal Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "WGE",
        "name": "Walgett Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "NTL",
        "name": "Newcastle Airport",
        "city": "Williamtown",
        "country": "AU"
      },
      {
        "iata": "WUN",
        "name": "Wiluna Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "WPK",
        "name": "Wrotham Park Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "WDI",
        "name": "Wondai Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "WOL",
        "name": "Wollongong Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "QRR",
        "name": "Warren Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "WLO",
        "name": "Waterloo Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "WIN",
        "name": "Winton Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "WUD",
        "name": "Wudinna Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "WEW",
        "name": "Wee Waa Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "WRW",
        "name": "Warrawagine Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "WWI",
        "name": "Woodie Woodie Airport",
        "city": "Woodie Woodie",
        "country": "AU"
      },
      {
        "iata": "WYN",
        "name": "Wyndham Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "BWT",
        "name": "Wynyard Airport",
        "city": "Burnie",
        "country": "AU"
      },
      {
        "iata": "YLG",
        "name": "Yalgoo Airport",
        "city": "Yalgoo",
        "country": "AU"
      },
      {
        "iata": "OKR",
        "name": "Yorke Island Airport",
        "city": "Yorke Island",
        "country": "AU"
      },
      {
        "iata": "KYF",
        "name": "Yeelirrie Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "XMY",
        "name": "Yam Island Airport",
        "city": "Yam Island",
        "country": "AU"
      },
      {
        "iata": "YUE",
        "name": "Yuendumu Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "NGA",
        "name": "Young Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "ORR",
        "name": "Yorketown Airport",
        "city": "",
        "country": "AU"
      },
      {
        "iata": "KYI",
        "name": "Yalata Mission Airport",
        "city": "Yalata Mission",
        "country": "AU"
      },
      {
        "iata": "PEK",
        "name": "Beijing Capital International Airport",
        "city": "Beijing",
        "country": "CN"
      },
      {
        "iata": "CIF",
        "name": "Chifeng Airport",
        "city": "Chifeng",
        "country": "CN"
      },
      {
        "iata": "CIH",
        "name": "Changzhi Airport",
        "city": "Changzhi",
        "country": "CN"
      },
      {
        "iata": "DSN",
        "name": "Ordos Ejin Horo Airport",
        "city": "Ordos",
        "country": "CN"
      },
      {
        "iata": "DAT",
        "name": "Datong Airport",
        "city": "Datong",
        "country": "CN"
      },
      {
        "iata": "AEB",
        "name": "Tian Yang Air Base",
        "city": "Baise",
        "country": "CN"
      },
      {
        "iata": "HDG",
        "name": "Handan Airport",
        "city": "Handan",
        "country": "CN"
      },
      {
        "iata": "HET",
        "name": "Baita International Airport",
        "city": "Hohhot",
        "country": "CN"
      },
      {
        "iata": "HLD",
        "name": "Dongshan Airport",
        "city": "Hailar",
        "country": "CN"
      },
      {
        "iata": "NAY",
        "name": "Beijing Nanyuan Airport",
        "city": "Beijing",
        "country": "CN"
      },
      {
        "iata": "BAV",
        "name": "Baotou Airport",
        "city": "Baotou",
        "country": "CN"
      },
      {
        "iata": "SHP",
        "name": "Shanhaiguan Airport",
        "city": "Qinhuangdao",
        "country": "CN"
      },
      {
        "iata": "SJW",
        "name": "Shijiazhuang Daguocun International Airport",
        "city": "Shijiazhuang",
        "country": "CN"
      },
      {
        "iata": "TSN",
        "name": "Tianjin Binhai International Airport",
        "city": "Tianjin",
        "country": "CN"
      },
      {
        "iata": "TGO",
        "name": "Tongliao Airport",
        "city": "Tongliao",
        "country": "CN"
      },
      {
        "iata": "HLH",
        "name": "Ulanhot Airport",
        "city": "Ulanhot",
        "country": "CN"
      },
      {
        "iata": "XIL",
        "name": "Xilinhot Airport",
        "city": "Xilinhot",
        "country": "CN"
      },
      {
        "iata": "YCU",
        "name": "Yuncheng Guangong Airport",
        "city": "Yuncheng",
        "country": "CN"
      },
      {
        "iata": "TYN",
        "name": "Taiyuan Wusu Airport",
        "city": "Taiyuan",
        "country": "CN"
      },
      {
        "iata": "BHY",
        "name": "Beihai Airport",
        "city": "Beihai",
        "country": "CN"
      },
      {
        "iata": "CGD",
        "name": "Changde Airport",
        "city": "Changde",
        "country": "CN"
      },
      {
        "iata": "HJJ",
        "name": "Zhijiang Airport",
        "city": "Huaihua",
        "country": "CN"
      },
      {
        "iata": "DYG",
        "name": "Dayong Airport",
        "city": "Dayong",
        "country": "CN"
      },
      {
        "iata": "FUO",
        "name": "Foshan Shadi Airport",
        "city": "Foshan",
        "country": "CN"
      },
      {
        "iata": "CAN",
        "name": "Guangzhou Baiyun International Airport",
        "city": "Guangzhou",
        "country": "CN"
      },
      {
        "iata": "CSX",
        "name": "Changsha Huanghua Airport",
        "city": "Changsha",
        "country": "CN"
      },
      {
        "iata": "HNY",
        "name": "Hengyang Airport",
        "city": "Hengyang",
        "country": "CN"
      },
      {
        "iata": "HUZ",
        "name": "Huizhou Airport",
        "city": "Huizhou",
        "country": "CN"
      },
      {
        "iata": "KWL",
        "name": "Guilin Liangjiang International Airport",
        "city": "Guilin City",
        "country": "CN"
      },
      {
        "iata": "LLF",
        "name": "Lingling Airport",
        "city": "Yongzhou",
        "country": "CN"
      },
      {
        "iata": "MXZ",
        "name": "Meixian Airport",
        "city": "Meixian",
        "country": "CN"
      },
      {
        "iata": "NNG",
        "name": "Nanning Wuxu Airport",
        "city": "Nanning",
        "country": "CN"
      },
      {
        "iata": "SWA",
        "name": "Shantou Waisha Airport",
        "city": "Shantou",
        "country": "CN"
      },
      {
        "iata": "ZUH",
        "name": "Zhuhai Airport",
        "city": "Zhuhai",
        "country": "CN"
      },
      {
        "iata": "SZX",
        "name": "Shenzhen Bao'an International Airport",
        "city": "Shenzhen",
        "country": "CN"
      },
      {
        "iata": "WUZ",
        "name": "Changzhoudao Airport",
        "city": "Wuzhou",
        "country": "CN"
      },
      {
        "iata": "XIN",
        "name": "Xingning Airport",
        "city": "Xingning",
        "country": "CN"
      },
      {
        "iata": "LZH",
        "name": "Bailian Airport",
        "city": "Liuzhou",
        "country": "CN"
      },
      {
        "iata": "ZHA",
        "name": "Zhanjiang Airport",
        "city": "Zhanjiang",
        "country": "CN"
      },
      {
        "iata": "AYN",
        "name": "Anyang Airport",
        "city": "Anyang",
        "country": "CN"
      },
      {
        "iata": "CGO",
        "name": "Xinzheng Airport",
        "city": "Zhengzhou",
        "country": "CN"
      },
      {
        "iata": "ENH",
        "name": "Enshi Airport",
        "city": "Enshi",
        "country": "CN"
      },
      {
        "iata": "LHK",
        "name": "Guangzhou MR Air Base",
        "city": "Guanghua",
        "country": "CN"
      },
      {
        "iata": "WUH",
        "name": "Wuhan Tianhe International Airport",
        "city": "Wuhan",
        "country": "CN"
      },
      {
        "iata": "LYA",
        "name": "Luoyang Airport",
        "city": "Luoyang",
        "country": "CN"
      },
      {
        "iata": "NNY",
        "name": "Nanyang Airport",
        "city": "Nanyang",
        "country": "CN"
      },
      {
        "iata": "SHS",
        "name": "Shashi Airport",
        "city": "Shashi",
        "country": "CN"
      },
      {
        "iata": "XFN",
        "name": "Xiangfan Airport",
        "city": "Xiangfan",
        "country": "CN"
      },
      {
        "iata": "YIH",
        "name": "Yichang Airport",
        "city": "Yichang",
        "country": "CN"
      },
      {
        "iata": "HAK",
        "name": "Haikou Meilan International Airport",
        "city": "Haikou",
        "country": "CN"
      },
      {
        "iata": "SYX",
        "name": "Sanya Phoenix International Airport",
        "city": "Sanya",
        "country": "CN"
      },
      {
        "iata": "RGO",
        "name": "Orang Airport",
        "city": "",
        "country": "KP"
      },
      {
        "iata": "FNJ",
        "name": "Sunan International Airport",
        "city": "Pyongyang",
        "country": "KP"
      },
      {
        "iata": "DSO",
        "name": "Sondok Airport",
        "city": "",
        "country": "KP"
      },
      {
        "iata": "YJS",
        "name": "Samjiyon Airport",
        "city": "Samjiyon",
        "country": "KP"
      },
      {
        "iata": "AKA",
        "name": "Ankang Airport",
        "city": "Ankang",
        "country": "CN"
      },
      {
        "iata": "DNH",
        "name": "Dunhuang Airport",
        "city": "Dunhuang",
        "country": "CN"
      },
      {
        "iata": "GOQ",
        "name": "Golmud Airport",
        "city": "Golmud",
        "country": "CN"
      },
      {
        "iata": "GYU",
        "name": "Guyuan Liupanshan Airport",
        "city": "Guyuan",
        "country": "CN"
      },
      {
        "iata": "HZG",
        "name": "Hanzhong Airport",
        "city": "Hanzhong",
        "country": "CN"
      },
      {
        "iata": "INC",
        "name": "Yinchuan Airport",
        "city": "Yinchuan",
        "country": "CN"
      },
      {
        "iata": "JIC",
        "name": "Jinchuan Airport",
        "city": "Jinchang",
        "country": "CN"
      },
      {
        "iata": "JNG",
        "name": "Jining Qufu Airport",
        "city": "Jining",
        "country": "CN"
      },
      {
        "iata": "JGN",
        "name": "Jiayuguan Airport",
        "city": "Jiayuguan",
        "country": "CN"
      },
      {
        "iata": "LHW",
        "name": "Lanzhou Zhongchuan Airport",
        "city": "Lanzhou",
        "country": "CN"
      },
      {
        "iata": "IQN",
        "name": "Qingyang Airport",
        "city": "Qingyang",
        "country": "CN"
      },
      {
        "iata": "SIA",
        "name": "Xiguan Airport",
        "city": "Xi'an",
        "country": "CN"
      },
      {
        "iata": "THQ",
        "name": "Tianshui Maijishan Airport",
        "city": "Tianshui",
        "country": "CN"
      },
      {
        "iata": "XNN",
        "name": "Xining Caojiabu Airport",
        "city": "Xining",
        "country": "CN"
      },
      {
        "iata": "XIY",
        "name": "Xi'an Xianyang International Airport",
        "city": "Xianyang",
        "country": "CN"
      },
      {
        "iata": "ENY",
        "name": "Yan'an Airport",
        "city": "Yan'an",
        "country": "CN"
      },
      {
        "iata": "UYN",
        "name": "Yulin Airport",
        "city": "Yulin",
        "country": "CN"
      },
      {
        "iata": "ZHY",
        "name": "Zhongwei Shapotou Airport",
        "city": "Zhongwei",
        "country": "CN"
      },
      {
        "iata": "AVK",
        "name": "Arvaikheer Airport",
        "city": "Arvaikheer",
        "country": "MN"
      },
      {
        "iata": "LTI",
        "name": "Altai Airport",
        "city": "Altai",
        "country": "MN"
      },
      {
        "iata": "BYN",
        "name": "Bayankhongor Airport",
        "city": "Bayankhongor",
        "country": "MN"
      },
      {
        "iata": "UGA",
        "name": "Bulgan Airport",
        "city": "Bulgan",
        "country": "MN"
      },
      {
        "iata": "UGT",
        "name": "Bulagtai Resort Airport",
        "city": "Umnugobitour",
        "country": "MN"
      },
      {
        "iata": "HBU",
        "name": "Bulgan Sum Airport",
        "city": "",
        "country": "MN"
      },
      {
        "iata": "UUN",
        "name": "Baruun Urt Airport",
        "city": "",
        "country": "MN"
      },
      {
        "iata": "COQ",
        "name": "Choibalsan Airport",
        "city": "",
        "country": "MN"
      },
      {
        "iata": "DLZ",
        "name": "Dalanzadgad Airport",
        "city": "Dalanzadgad",
        "country": "MN"
      },
      {
        "iata": "KHR",
        "name": "Kharkhorin Airport",
        "city": "",
        "country": "MN"
      },
      {
        "iata": "HVD",
        "name": "Khovd Airport",
        "city": "Khovd",
        "country": "MN"
      },
      {
        "iata": "MXV",
        "name": "Moron Airport",
        "city": "Moron",
        "country": "MN"
      },
      {
        "iata": "ULN",
        "name": "Chinggis Khaan International Airport",
        "city": "Ulan Bator",
        "country": "MN"
      },
      {
        "iata": "ULO",
        "name": "Ulaangom Airport",
        "city": "",
        "country": "MN"
      },
      {
        "iata": "ULG",
        "name": "Ulgii Mongolei Airport",
        "city": "",
        "country": "MN"
      },
      {
        "iata": "BSD",
        "name": "Baoshan Yunduan Airport",
        "city": "",
        "country": "CN"
      },
      {
        "iata": "DLU",
        "name": "Dali Airport",
        "city": "Xiaguan",
        "country": "CN"
      },
      {
        "iata": "DIG",
        "name": "Diqing Airport",
        "city": "Shangri-La",
        "country": "CN"
      },
      {
        "iata": "LNJ",
        "name": "Lincang Airport",
        "city": "Lincang",
        "country": "CN"
      },
      {
        "iata": "JHG",
        "name": "Xishuangbanna Gasa Airport",
        "city": "Jinghong",
        "country": "CN"
      },
      {
        "iata": "LJG",
        "name": "Lijiang Airport",
        "city": "Lijiang",
        "country": "CN"
      },
      {
        "iata": "LUM",
        "name": "Mangshi Airport",
        "city": "Luxi",
        "country": "CN"
      },
      {
        "iata": "KMG",
        "name": "Kunming Wujiaba International Airport",
        "city": "Kunming",
        "country": "CN"
      },
      {
        "iata": "SYM",
        "name": "Simao Airport",
        "city": "Simao",
        "country": "CN"
      },
      {
        "iata": "ZAT",
        "name": "Zhaotong Airport",
        "city": "Zhaotong",
        "country": "CN"
      },
      {
        "iata": "XMN",
        "name": "Xiamen Gaoqi International Airport",
        "city": "Xiamen",
        "country": "CN"
      },
      {
        "iata": "AQG",
        "name": "Anqing Airport",
        "city": "Anqing",
        "country": "CN"
      },
      {
        "iata": "BFU",
        "name": "Bengbu Airport",
        "city": "Bengbu",
        "country": "CN"
      },
      {
        "iata": "CZX",
        "name": "Changzhou Airport",
        "city": "Changzhou",
        "country": "CN"
      },
      {
        "iata": "KHN",
        "name": "Nanchang Changbei International Airport",
        "city": "Nanchang",
        "country": "CN"
      },
      {
        "iata": "DOY",
        "name": "Dongying Shengli Airport",
        "city": "Dongying",
        "country": "CN"
      },
      {
        "iata": "FUG",
        "name": "Fuyang Xiguan Airport",
        "city": "Fuyang",
        "country": "CN"
      },
      {
        "iata": "FOC",
        "name": "Fuzhou Changle International Airport",
        "city": "Fuzhou",
        "country": "CN"
      },
      {
        "iata": "JGS",
        "name": "Jinggangshan Airport",
        "city": "Ji'an",
        "country": "CN"
      },
      {
        "iata": "KOW",
        "name": "Ganzhou Airport",
        "city": "Ganzhou",
        "country": "CN"
      },
      {
        "iata": "HGH",
        "name": "Hangzhou Xiaoshan International Airport",
        "city": "Hangzhou",
        "country": "CN"
      },
      {
        "iata": "JDZ",
        "name": "Jingdezhen Airport",
        "city": "Jingdezhen",
        "country": "CN"
      },
      {
        "iata": "JIU",
        "name": "Jiujiang Lushan Airport",
        "city": "Jiujiang",
        "country": "CN"
      },
      {
        "iata": "TNA",
        "name": "Yaoqiang Airport",
        "city": "Jinan",
        "country": "CN"
      },
      {
        "iata": "JUZ",
        "name": "Quzhou Airport",
        "city": "Quzhou",
        "country": "CN"
      },
      {
        "iata": "LCX",
        "name": "Longyan Guanzhishan Airport",
        "city": "Longyan",
        "country": "CN"
      },
      {
        "iata": "LYG",
        "name": "Lianyungang Airport",
        "city": "Lianyungang",
        "country": "CN"
      },
      {
        "iata": "HYN",
        "name": "Huangyan Luqiao Airport",
        "city": "Huangyan",
        "country": "CN"
      },
      {
        "iata": "LYI",
        "name": "Shubuling Airport",
        "city": "Linyi",
        "country": "CN"
      },
      {
        "iata": "NGB",
        "name": "Ningbo Lishe International Airport",
        "city": "Ningbo",
        "country": "CN"
      },
      {
        "iata": "NKG",
        "name": "Nanjing Lukou Airport",
        "city": "Nanjing",
        "country": "CN"
      },
      {
        "iata": "NTG",
        "name": "Nantong Airport",
        "city": "Nantong",
        "country": "CN"
      },
      {
        "iata": "HFE",
        "name": "Hefei Xinqiao International Airport",
        "city": "Hefei",
        "country": "CN"
      },
      {
        "iata": "PVG",
        "name": "Shanghai Pudong International Airport",
        "city": "Shanghai",
        "country": "CN"
      },
      {
        "iata": "TAO",
        "name": "Liuting Airport",
        "city": "Qingdao",
        "country": "CN"
      },
      {
        "iata": "JJN",
        "name": "Quanzhou Airport",
        "city": "Quanzhou",
        "country": "CN"
      },
      {
        "iata": "RUG",
        "name": "Rugao Air Base",
        "city": "Rugao",
        "country": "CN"
      },
      {
        "iata": "HIA",
        "name": "Lianshui Airport",
        "city": "Huai'an",
        "country": "CN"
      },
      {
        "iata": "SHA",
        "name": "Shanghai Hongqiao International Airport",
        "city": "Shanghai",
        "country": "CN"
      },
      {
        "iata": "SZV",
        "name": "Guangfu Airport",
        "city": "Suzhou",
        "country": "CN"
      },
      {
        "iata": "TXN",
        "name": "Tunxi International Airport",
        "city": "Huangshan",
        "country": "CN"
      },
      {
        "iata": "WEF",
        "name": "Weifang Airport",
        "city": "Weifang",
        "country": "CN"
      },
      {
        "iata": "WEH",
        "name": "Weihai Airport",
        "city": "Weihai",
        "country": "CN"
      },
      {
        "iata": "WHU",
        "name": "Wuhu Air Base",
        "city": "Wuhu",
        "country": "CN"
      },
      {
        "iata": "WUX",
        "name": "Sunan Shuofang International Airport",
        "city": "Wuxi",
        "country": "CN"
      },
      {
        "iata": "WUS",
        "name": "Nanping Wuyishan Airport",
        "city": "Wuyishan",
        "country": "CN"
      },
      {
        "iata": "WNZ",
        "name": "Wenzhou Yongqiang Airport",
        "city": "Wenzhou",
        "country": "CN"
      },
      {
        "iata": "XUZ",
        "name": "Xuzhou Guanyin Airport",
        "city": "Xuzhou",
        "country": "CN"
      },
      {
        "iata": "YNZ",
        "name": "Yancheng Airport",
        "city": "Yancheng",
        "country": "CN"
      },
      {
        "iata": "YNT",
        "name": "Yantai Laishan Airport",
        "city": "Yantai",
        "country": "CN"
      },
      {
        "iata": "YIW",
        "name": "Yiwu Airport",
        "city": "Yiwu",
        "country": "CN"
      },
      {
        "iata": "HSN",
        "name": "Zhoushan Airport",
        "city": "Zhoushan",
        "country": "CN"
      },
      {
        "iata": "NGQ",
        "name": "Ngari Gunsa Airport",
        "city": "Shiquanhe",
        "country": "CN"
      },
      {
        "iata": "AVA",
        "name": "Anshun Huangguoshu Airport",
        "city": "Anshun",
        "country": "CN"
      },
      {
        "iata": "BPX",
        "name": "Qamdo Bangda Airport",
        "city": "Bangda",
        "country": "CN"
      },
      {
        "iata": "CKG",
        "name": "Chongqing Jiangbei International Airport",
        "city": "Chongqing",
        "country": "CN"
      },
      {
        "iata": "DAX",
        "name": "Dachuan Airport",
        "city": "Dazhou",
        "country": "CN"
      },
      {
        "iata": "GYS",
        "name": "Guangyuan Airport",
        "city": "Guangyuan",
        "country": "CN"
      },
      {
        "iata": "KWE",
        "name": "Longdongbao Airport",
        "city": "Guiyang",
        "country": "CN"
      },
      {
        "iata": "JZH",
        "name": "Jiuzhai Huanglong Airport",
        "city": "Jiuzhaigou",
        "country": "CN"
      },
      {
        "iata": "LIA",
        "name": "Liangping Airport",
        "city": "Liangping",
        "country": "CN"
      },
      {
        "iata": "LXA",
        "name": "Lhasa Gonggar Airport",
        "city": "Lhasa",
        "country": "CN"
      },
      {
        "iata": "LZO",
        "name": "Luzhou Airport",
        "city": "Luzhou",
        "country": "CN"
      },
      {
        "iata": "MIG",
        "name": "Mianyang Airport",
        "city": "Mianyang",
        "country": "CN"
      },
      {
        "iata": "NAO",
        "name": "Nanchong Airport",
        "city": "Nanchong",
        "country": "CN"
      },
      {
        "iata": "LZY",
        "name": "Nyingchi Airport",
        "city": "Nyingchi",
        "country": "CN"
      },
      {
        "iata": "JIQ",
        "name": "Qianjiang Wulingshan Airport",
        "city": "Chongqing",
        "country": "CN"
      },
      {
        "iata": "TCZ",
        "name": "Tengchong Tuofeng Airport",
        "city": "Tengchong",
        "country": "CN"
      },
      {
        "iata": "TEN",
        "name": "Tongren Fenghuang Airport",
        "city": "",
        "country": "CN"
      },
      {
        "iata": "CTU",
        "name": "Chengdu Shuangliu International Airport",
        "city": "Chengdu",
        "country": "CN"
      },
      {
        "iata": "WXN",
        "name": "Wanxian Airport",
        "city": "Wanxian",
        "country": "CN"
      },
      {
        "iata": "XIC",
        "name": "Xichang Qingshan Airport",
        "city": "Xichang",
        "country": "CN"
      },
      {
        "iata": "YBP",
        "name": "Yibin Caiba Airport",
        "city": "Yibin",
        "country": "CN"
      },
      {
        "iata": "ACX",
        "name": "Xingyi Airport",
        "city": "Xingyi",
        "country": "CN"
      },
      {
        "iata": "ZYI",
        "name": "Zunyi Xinzhou Airport",
        "city": "Zunyi",
        "country": "CN"
      },
      {
        "iata": "AKU",
        "name": "Aksu Airport",
        "city": "Aksu",
        "country": "CN"
      },
      {
        "iata": "AAT",
        "name": "Altay Air Base",
        "city": "Altay",
        "country": "CN"
      },
      {
        "iata": "BPL",
        "name": "Alashankou Bole (Bortala) airport",
        "city": "Bole",
        "country": "CN"
      },
      {
        "iata": "IQM",
        "name": "Qiemo Airport",
        "city": "Qiemo",
        "country": "CN"
      },
      {
        "iata": "HMI",
        "name": "Hami Airport",
        "city": "Hami",
        "country": "CN"
      },
      {
        "iata": "KCA",
        "name": "Kuqa Airport",
        "city": "Kuqa",
        "country": "CN"
      },
      {
        "iata": "KRL",
        "name": "Korla Airport",
        "city": "Korla",
        "country": "CN"
      },
      {
        "iata": "KRY",
        "name": "Karamay Airport",
        "city": "Karamay",
        "country": "CN"
      },
      {
        "iata": "KHG",
        "name": "Kashgar Airport",
        "city": "Kashgar",
        "country": "CN"
      },
      {
        "iata": "SXJ",
        "name": "Shanshan Airport",
        "city": "Shanshan",
        "country": "CN"
      },
      {
        "iata": "TCG",
        "name": "Tacheng Airport",
        "city": "Tacheng",
        "country": "CN"
      },
      {
        "iata": "HTN",
        "name": "Hotan Airport",
        "city": "Hotan",
        "country": "CN"
      },
      {
        "iata": "URC",
        "name": "Urumqi Diwopu International Airport",
        "city": "Urumqi",
        "country": "CN"
      },
      {
        "iata": "YIN",
        "name": "Yining Airport",
        "city": "Yining",
        "country": "CN"
      },
      {
        "iata": "AOG",
        "name": "Anshan Air Base",
        "city": "Anshan",
        "country": "CN"
      },
      {
        "iata": "CGQ",
        "name": "Longjia Airport",
        "city": "Changchun",
        "country": "CN"
      },
      {
        "iata": "CNI",
        "name": "Changhai Airport",
        "city": "Changhai",
        "country": "CN"
      },
      {
        "iata": "CHG",
        "name": "Chaoyang Airport",
        "city": "Chaoyang",
        "country": "CN"
      },
      {
        "iata": "DDG",
        "name": "Dandong Airport",
        "city": "Dandong",
        "country": "CN"
      },
      {
        "iata": "DQA",
        "name": "Saertu Airport",
        "city": "Daqing Shi",
        "country": "CN"
      },
      {
        "iata": "HRB",
        "name": "Taiping Airport",
        "city": "Harbin",
        "country": "CN"
      },
      {
        "iata": "HEK",
        "name": "Heihe Airport",
        "city": "Heihe",
        "country": "CN"
      },
      {
        "iata": "JIL",
        "name": "Jilin Airport",
        "city": "Jilin",
        "country": "CN"
      },
      {
        "iata": "JMU",
        "name": "Jiamusi Airport",
        "city": "Jiamusi",
        "country": "CN"
      },
      {
        "iata": "JNZ",
        "name": "Jinzhou Airport",
        "city": "Jinzhou",
        "country": "CN"
      },
      {
        "iata": "LDS",
        "name": "Lindu Airport",
        "city": "Yichun",
        "country": "CN"
      },
      {
        "iata": "YUS",
        "name": "Yushu Batang Airport",
        "city": "Yushu",
        "country": "CN"
      },
      {
        "iata": "MDG",
        "name": "Mudanjiang Hailang International Airport",
        "city": "Mudanjiang",
        "country": "CN"
      },
      {
        "iata": "OHE",
        "name": "Gu-Lian Airport",
        "city": "Mohe",
        "country": "CN"
      },
      {
        "iata": "NDG",
        "name": "Qiqihar Sanjiazi Airport",
        "city": "Qiqihar",
        "country": "CN"
      },
      {
        "iata": "DLC",
        "name": "Zhoushuizi Airport",
        "city": "Dalian",
        "country": "CN"
      },
      {
        "iata": "TNH",
        "name": "Tonghua Sanyuanpu Airport",
        "city": "Tonghua",
        "country": "CN"
      },
      {
        "iata": "SHE",
        "name": "Taoxian Airport",
        "city": "Shenyang",
        "country": "CN"
      },
      {
        "iata": "XEN",
        "name": "Xingcheng Air Base",
        "city": "",
        "country": "CN"
      },
      {
        "iata": "YNJ",
        "name": "Yanji Chaoyangchuan Airport",
        "city": "Yanji",
        "country": "CN"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
