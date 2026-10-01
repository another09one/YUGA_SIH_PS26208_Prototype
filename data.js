const GAMES=[
{id:"heritage",icon:"🏛️",title:"Heritage Hunt",difficulty:"Easy",desc:"Identify monuments and discover their stories.",questions:[
{q:"Which monument is in Agra and was commissioned by Shah Jahan?",o:["Taj Mahal","Sanchi Stupa","Konark Sun Temple","Gateway of India"],a:0,fact:"The Taj Mahal was commissioned by Shah Jahan in memory of Mumtaz Mahal."},
{q:"The Konark Sun Temple is in which state?",o:["Odisha","Gujarat","Rajasthan","Maharashtra"],a:0,fact:"Konark Sun Temple in Odisha is designed as a monumental chariot dedicated to Surya."},
{q:"The Great Stupa at Sanchi is primarily associated with:",o:["Buddhism","Jainism","Sikhism","Zoroastrianism"],a:0,fact:"Sanchi is one of India's important Buddhist heritage sites."},
{q:"Hampi was the capital of which empire?",o:["Vijayanagara","Maurya","Gupta","Chola"],a:0,fact:"Hampi was the capital of the Vijayanagara Empire."},
{q:"Ajanta Caves are especially famous for ancient:",o:["Buddhist paintings","Mughal gardens","Stepwells","Fortifications"],a:0,fact:"Ajanta contains remarkable Buddhist murals and rock-cut architecture."},
{q:"Which monument is located in Delhi and was begun by Qutb-ud-din Aibak?",o:["Qutub Minar","Charminar","India Gate","Victoria Memorial"],a:0,fact:"Construction of the Qutub Minar was begun by Qutb-ud-din Aibak."},
{q:"The Shore Temple is located at:",o:["Mahabalipuram","Amritsar","Udaipur","Patna"],a:0,fact:"The Shore Temple is a famous Pallava-era monument at Mahabalipuram."}]},
{id:"timeline",icon:"📜",title:"Time Traveler",difficulty:"Medium",desc:"Travel through Indian history with era-based challenges.",questions:[
{q:"Harappa and Mohenjo-daro belong to which civilization?",o:["Indus Valley Civilization","Roman Civilization","Mayan Civilization","Aztec Civilization"],a:0,fact:"The Indus Valley Civilization developed planned urban settlements and sophisticated drainage."},
{q:"Who founded the Mauryan Empire?",o:["Chandragupta Maurya","Ashoka","Samudragupta","Harsha"],a:0,fact:"Chandragupta Maurya founded the Mauryan Empire around the 4th century BCE."},
{q:"Ashoka is especially remembered for promoting:",o:["Dhamma and Buddhist teachings","Roman law","Viking culture","Greek mythology"],a:0,fact:"After the Kalinga War, Ashoka promoted dhamma and Buddhist principles."},
{q:"The Gupta period saw major advances in:",o:["Mathematics, astronomy and arts","Steam engines","Digital computing","Spaceflight"],a:0,fact:"The Gupta period is associated with important work in mathematics, astronomy, literature and art."},
{q:"The Cholas were renowned for:",o:["Temple architecture and maritime power","Printing presses","Railways","Digital technology"],a:0,fact:"The Cholas built monumental temples and maintained a strong maritime network."},
{q:"Nalanda was famous historically as a:",o:["Centre of learning","Trading port","Fort","Royal palace"],a:0,fact:"Nalanda was a major ancient centre of higher learning."},
{q:"The Kalinga War is associated with which ruler?",o:["Ashoka","Akbar","Shivaji","Krishnadevaraya"],a:0,fact:"The Kalinga War deeply influenced Ashoka's later policies."}]},
{id:"culture",icon:"🪔",title:"Culture Quest",difficulty:"Medium",desc:"Explore festivals, dance, art, music and traditions.",questions:[
{q:"Bharatanatyam is traditionally associated with:",o:["Tamil Nadu","Punjab","Assam","Goa"],a:0,fact:"Bharatanatyam is a classical Indian dance tradition associated with Tamil Nadu."},
{q:"Which festival is commonly known as the festival of lights?",o:["Diwali","Holi","Baisakhi","Onam"],a:0,fact:"Diwali is widely celebrated and commonly known as the festival of lights."},
{q:"Madhubani painting is traditionally associated with:",o:["Bihar","Kerala","Sikkim","Haryana"],a:0,fact:"Madhubani or Mithila painting originated in the Mithila region, especially Bihar."},
{q:"Which is a bowed string instrument?",o:["Sarangi","Tabla","Bansuri","Mridangam"],a:0,fact:"The sarangi is a bowed string instrument used in Indian musical traditions."},
{q:"Onam is strongly associated with:",o:["Kerala","Odisha","Himachal Pradesh","Nagaland"],a:0,fact:"Onam is a major festival of Kerala associated with the legend of King Mahabali."},
{q:"Warli painting is traditionally associated with:",o:["Maharashtra","Punjab","Bihar","Manipur"],a:0,fact:"Warli painting is a tribal art tradition associated with Maharashtra."},
{q:"Bihu is a major festival of:",o:["Assam","Gujarat","Rajasthan","Goa"],a:0,fact:"Bihu is a major festival tradition of Assam."}]
}];
const CULTURE=[
{title:"Indus Valley Civilization",icon:"🏺",place:"Harappa & Mohenjo-daro",era:"c. 2500–1900 BCE",text:"Known for planned cities, drainage systems, craft traditions and long-distance trade."},
{title:"Mauryan Heritage",icon:"🦁",place:"Pataliputra",era:"c. 322–185 BCE",text:"A major early empire associated with pillars, inscriptions, administration and Ashokan heritage."},
{title:"Gupta Age",icon:"📐",place:"Northern India",era:"c. 4th–6th century CE",text:"Associated with influential developments in mathematics, astronomy, literature, sculpture and metallurgy."},
{title:"Vijayanagara",icon:"🏛️",place:"Hampi, Karnataka",era:"14th–16th century CE",text:"A South Indian imperial centre celebrated for monumental architecture and temple complexes."},
{title:"Indian Classical Arts",icon:"🎭",place:"Across India",era:"Living traditions",text:"Dance, music, painting and theatre traditions preserve knowledge across generations."}];