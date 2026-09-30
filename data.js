const GAMES = [
  {
    id:"heritage",
    icon:"🏛️",
    title:"Heritage Hunt",
    desc:"Identify India's iconic monuments and discover the stories behind them.",
    difficulty:"Easy",
    questions:[
      {q:"Which monument is located in Agra and was built by Shah Jahan?",o:["Taj Mahal","Konark Sun Temple","Sanchi Stupa","Gateway of India"],a:0,fact:"The Taj Mahal was commissioned by Shah Jahan in memory of Mumtaz Mahal."},
      {q:"The Konark Sun Temple is located in which state?",o:["Odisha","Gujarat","Rajasthan","Maharashtra"],a:0,fact:"Konark Sun Temple in Odisha is designed as a monumental chariot dedicated to Surya."},
      {q:"The Sanchi Stupa is primarily associated with which tradition?",o:["Buddhism","Jainism","Sikhism","Zoroastrianism"],a:0,fact:"The Great Stupa at Sanchi is one of India's most important Buddhist monuments."},
      {q:"Hampi is associated with which historic empire?",o:["Vijayanagara","Maurya","Gupta","Chola"],a:0,fact:"Hampi was the capital of the Vijayanagara Empire and is a UNESCO World Heritage Site."},
      {q:"The Ajanta Caves are especially famous for their ancient:",o:["Buddhist paintings","Mughal gardens","Stepwells","Fortifications"],a:0,fact:"Ajanta contains remarkable Buddhist murals and rock-cut architecture dating back many centuries."}
    ]
  },
  {
    id:"timeline",
    icon:"📜",
    title:"Time Traveler",
    desc:"Travel through Indian history by solving era-based challenges.",
    difficulty:"Medium",
    questions:[
      {q:"Which civilization is associated with cities such as Harappa and Mohenjo-daro?",o:["Indus Valley Civilization","Roman Civilization","Mayan Civilization","Aztec Civilization"],a:0,fact:"The Indus Valley Civilization flourished across parts of present-day India and Pakistan."},
      {q:"Who founded the Mauryan Empire?",o:["Chandragupta Maurya","Ashoka","Samudragupta","Harsha"],a:0,fact:"Chandragupta Maurya founded the Mauryan Empire around the 4th century BCE."},
      {q:"Ashoka is especially remembered for spreading:",o:["Buddhist teachings","Roman law","Viking culture","Greek mythology"],a:0,fact:"After the Kalinga War, Ashoka embraced and promoted Buddhist principles and dhamma."},
      {q:"The Gupta period is often associated with major developments in:",o:["Science, mathematics and arts","Steam engines","Digital computing","Spaceflight"],a:0,fact:"The Gupta period saw major advances in mathematics, astronomy, literature and art."},
      {q:"The Chola dynasty was particularly renowned for:",o:["Temple architecture and maritime power","Printing presses","Gunpowder weapons","Modern railways"],a:0,fact:"The Cholas developed monumental temples and maintained an influential maritime network."}
    ]
  },
  {
    id:"culture",
    icon:"🪔",
    title:"Culture Quest",
    desc:"Test your knowledge of festivals, traditions, art and Indian cultural heritage.",
    difficulty:"Medium",
    questions:[
      {q:"Bharatanatyam originated in which Indian state?",o:["Tamil Nadu","Punjab","Assam","Goa"],a:0,fact:"Bharatanatyam is a classical Indian dance tradition historically associated with Tamil Nadu."},
      {q:"Which festival is widely known as the festival of lights?",o:["Diwali","Holi","Baisakhi","Onam"],a:0,fact:"Diwali is celebrated across India and is commonly known as the festival of lights."},
      {q:"Madhubani painting is traditionally associated with:",o:["Bihar","Kerala","Sikkim","Haryana"],a:0,fact:"Madhubani or Mithila painting originated in the Mithila region, especially Bihar."},
      {q:"Which instrument is a bowed string instrument?",o:["Sarangi","Tabla","Bansuri","Mridangam"],a:0,fact:"The sarangi is a bowed string instrument used in several Indian musical traditions."},
      {q:"Onam is strongly associated with which state?",o:["Kerala","Odisha","Himachal Pradesh","Nagaland"],a:0,fact:"Onam is a major festival of Kerala, associated with the legend of King Mahabali."}
    ]
  }
];

const CULTURE = [
 {title:"Indus Valley Civilization",icon:"🏺",place:"Harappa & Mohenjo-daro",text:"Known for planned cities, drainage systems, craft traditions and long-distance trade.",era:"c. 2500–1900 BCE"},
 {title:"Mauryan Heritage",icon:"🦁",place:"Pataliputra",text:"The Mauryan period connected a vast territory and left important pillars, inscriptions and archaeological remains.",era:"c. 322–185 BCE"},
 {title:"Gupta Age",icon:"📐",place:"Northern India",text:"A period associated with influential work in mathematics, astronomy, literature, sculpture and metallurgy.",era:"c. 4th–6th century CE"},
 {title:"Vijayanagara",icon:"🏛️",place:"Hampi, Karnataka",text:"A major South Indian imperial center celebrated for monumental architecture, markets and temple complexes.",era:"14th–16th century CE"},
 {title:"Indian Classical Arts",icon:"🎭",place:"Across India",text:"Dance, music, painting and theatre traditions preserve knowledge through generations.",era:"Living traditions"}
];