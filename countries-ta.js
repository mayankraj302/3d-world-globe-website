/**
 * Global Countries Metadata & Geographic Registry
 * Accurate Latitude/Longitude, IANA Timezone Identifiers, Historical Legacies & Top Landmarks
 */

const COUNTRIES_DATA = [
  {
    id: 'usa',
    name: 'United States',
    nativeName: 'United States of America',
    code: 'US',
    flag: '🇺🇸',
    capital: 'Washington, D.C.',
    lat: 37.0902,
    lng: -95.7129,
    timezone: 'America/New_York',
    continent: 'North America',
    history: 'Forged through the Declaration of Independence in 1776 and propelled by rapid industrialization, the United States emerged as a constitutional republic rooted in democratic experimentation. Its modern identity was shaped through westward expansion, civil rights transformation, and technological pioneerism that fundamentally redefined global culture and governance.',
    landmarks: [
      { name: 'Grand Canyon', type: 'Natural Wonder', desc: 'A colossal 277-mile geological gorge sculpted over billions of years by the Colorado River.' },
      { name: 'Statue of Liberty', type: 'Monument', desc: 'Neoclassical copper colossus gifted by France in 1886, standing as a universal emblem of freedom.' },
      { name: 'Golden Gate Bridge', type: 'Architectural', desc: 'Iconic 1.7-mile International Orange suspension span completed in 1937 across the Pacific strait.' }
    ],
    quickFacts: { population: '335M', area: '9.8M km²', elevation: '6,190m (Denali)' }
  },
  {
    id: 'gbr',
    name: 'United Kingdom',
    nativeName: 'United Kingdom of Great Britain and Northern Ireland',
    code: 'GB',
    flag: '🇬🇧',
    capital: 'London',
    lat: 55.3781,
    lng: -3.4360,
    timezone: 'Europe/London',
    continent: 'Europe',
    history: 'A maritime island nation that gave rise to parliamentary democracy, the common law tradition, and the Industrial Revolution. From Roman outposts to medieval chivalric dynasties and Victorian global expansion, Britain’s enduring legacy permeates world literature, scientific inquiry, and institutional architecture.',
    landmarks: [
      { name: 'Stonehenge', type: 'Prehistoric', desc: 'Mysterious 5,000-year-old megalithic sarsen stone circle aligned with celestial solstices.' },
      { name: 'Big Ben & Westminster', type: 'Historical', desc: 'Gothic Revival clock tower and the mother of constitutional parliaments beside the Thames.' },
      { name: 'Tower of London', type: 'Fortress', desc: 'William the Conqueror’s 11th-century castle holding royal armor, dungeons, and the Crown Jewels.' }
    ],
    quickFacts: { population: '67.7M', area: '242K km²', elevation: '1,345m (Ben Nevis)' }
  },
  {
    id: 'fra',
    name: 'France',
    nativeName: 'République française',
    code: 'FR',
    flag: '🇫🇷',
    capital: 'Paris',
    lat: 46.2276,
    lng: 2.2137,
    timezone: 'Europe/Paris',
    continent: 'Europe',
    history: 'The philosophical cradle of the Enlightenment and the birthplace of republican ideals during the 1789 Revolution. France has stood for millennia at the crossroads of European artistic renaissance, culinary mastery, philosophical jurisprudence, and grand architectural ambition.',
    landmarks: [
      { name: 'Eiffel Tower', type: 'Architectural', desc: 'Gustave Eiffel’s 330-meter wrought-iron lattice masterpiece erected for the 1889 World’s Fair.' },
      { name: 'Palace of Versailles', type: 'Royal Estate', desc: 'Opulent baroque seat of Louis XIV featuring the Hall of Mirrors and vast geometrical gardens.' },
      { name: 'Mont-Saint-Michel', type: 'Abbey Fortress', desc: 'Gravity-defying Gothic monastery perched on a tidal granite island in Normandy.' }
    ],
    quickFacts: { population: '68M', area: '643K km²', elevation: '4,809m (Mont Blanc)' }
  },
  {
    id: 'ita',
    name: 'Italy',
    nativeName: 'Repubblica Italiana',
    code: 'IT',
    flag: '🇮🇹',
    capital: 'Rome',
    lat: 41.8719,
    lng: 12.5674,
    timezone: 'Europe/Rome',
    continent: 'Europe',
    history: 'Heart of the Roman Empire that laid the legal and infrastructural foundations of Western civilization, and later the spark of the 14th-century Renaissance. Italy holds the world’s dense collection of UNESCO World Heritage sites, blending timeless classical ruins with peerless artistic craftsmanship.',
    landmarks: [
      { name: 'Colosseum', type: 'Classical Arena', desc: 'Flavian amphitheater built in 80 AD, capable of staging spectacles for 50,000 Roman citizens.' },
      { name: 'Florence Cathedral (Duomo)', type: 'Renaissance', desc: 'Brunelleschi’s revolutionary terracotta dome dominating the Tuscan Renaissance skyline.' },
      { name: 'Venice Grand Canal', type: 'Waterway', desc: 'Sinuous aquatic thoroughfare lined with Gothic and Venetian Byzantine palaces.' }
    ],
    quickFacts: { population: '59M', area: '302K km²', elevation: '4,810m (Monte Bianco)' }
  },
  {
    id: 'jpn',
    name: 'Japan',
    nativeName: '日本国 (Nihon-koku)',
    code: 'JP',
    flag: '🇯🇵',
    capital: 'Tokyo',
    lat: 36.2048,
    lng: 138.2529,
    timezone: 'Asia/Tokyo',
    continent: 'Asia',
    history: 'An archipelago defined by centuries of feudal samurai discipline, Shinto reverence for nature, and isolated refinement during the Edo period. Following the Meiji Restoration, Japan harmonized ancient artisanal aesthetics with cutting-edge robotic precision and high-speed infrastructural innovation.',
    landmarks: [
      { name: 'Mount Fuji', type: 'Sacred Stratovolcano', desc: 'Snow-capped symmetrical peak rising 3,776 meters, celebrated in ukiyo-e woodblock prints.' },
      { name: 'Fushimi Inari-taisha', type: 'Shinto Shrine', desc: 'Kyoto shrine featuring over 10,000 vibrant vermilion torii gates winding through sacred mountain paths.' },
      { name: 'Himeji Castle', type: 'Feudal Fortress', desc: 'The "White Heron Castle", an extraordinarily preserved 17th-century hilltop wooden citadel.' }
    ],
    quickFacts: { population: '124M', area: '377K km²', elevation: '3,776m (Mt. Fuji)' }
  },
  {
    id: 'chn',
    name: 'China',
    nativeName: '中华人民共和国',
    code: 'CN',
    flag: '🇨🇳',
    capital: 'Beijing',
    lat: 35.8617,
    lng: 104.1954,
    timezone: 'Asia/Shanghai',
    continent: 'Asia',
    history: 'One of the world’s four primary ancient civilizations with unbroken written history spanning five millennia. Through imperial dynasties, the Silk Road, and groundbreaking innovations like paper, printing, and gunpowder, China continuously reshaped global trade and philosophical thought.',
    landmarks: [
      { name: 'Great Wall of China', type: 'Fortification', desc: 'Over 13,000 miles of stone and rammed-earth fortifications guarding northern frontier passes.' },
      { name: 'Forbidden City', type: 'Imperial Palace', desc: 'Imperial complex with 980 surviving buildings that housed 24 emperors across 500 years.' },
      { name: 'Terracotta Army', type: 'Mausoleum', desc: '8,000 life-sized clay soldiers and chariots buried in 210 BC to protect Emperor Qin Shi Huang.' }
    ],
    quickFacts: { population: '1.41B', area: '9.6M km²', elevation: '8,848m (Everest / Qomolangma)' }
  },
  {
    id: 'ind',
    name: 'India',
    nativeName: 'भारत गणराज्य (Bharat)',
    code: 'IN',
    flag: '🇮🇳',
    capital: 'New Delhi',
    lat: 20.5937,
    lng: 78.9629,
    timezone: 'Asia/Kolkata',
    continent: 'Asia',
    history: 'Home to the Indus Valley civilization and the spiritual origin of Hinduism, Buddhism, and Jainism. India’s rich tapestry of princely kingdoms, maritime trade, and astronomical scholarship coalesced into the world’s largest vibrant democracy, combining profound ancient traditions with modern digital dynamism.',
    landmarks: [
      { name: 'Taj Mahal', type: 'Mausoleum', desc: 'Ivory-white marble jewel built by Emperor Shah Jahan in 1632 in memory of Mumtaz Mahal.' },
      { name: 'Varanasi Ghats', type: 'Spiritual Sacred', desc: 'Ancient stone riverfront steps along the sacred Ganges inhabited continuously for 3,000 years.' },
      { name: 'Amber Fort', type: 'Rajput Citadel', desc: 'Majestic honey-hued hilltop palace in Rajasthan overlooking Maota Lake with mirrored halls.' }
    ],
    quickFacts: { population: '1.43B', area: '3.28M km²', elevation: '8,586m (Kangchenjunga)' }
  },
  {
    id: 'egy',
    name: 'Egypt',
    nativeName: 'جمهورية مصر العربية',
    code: 'EG',
    flag: '🇪🇬',
    capital: 'Cairo',
    lat: 26.8206,
    lng: 30.8025,
    timezone: 'Africa/Cairo',
    continent: 'Africa',
    history: 'The gift of the Nile, where monumental stone engineering, hieroglyphic writing, and complex theological cosmologies emerged over 5,000 years ago. Egypt’s pharaonic dynasties and the Greco-Roman library of Alexandria preserved human knowledge that became the bedrock of world history.',
    landmarks: [
      { name: 'Great Pyramid of Giza', type: 'Ancient Wonder', desc: 'The oldest and sole surviving Ancient Wonder of the World, constructed for Pharaoh Khufu circa 2560 BC.' },
      { name: 'Valley of the Kings', type: 'Necropolis', desc: 'Rock-cut royal tombs beneath Theban cliffs, including the gold-laden burial of Tutankhamun.' },
      { name: 'Karnak Temple', type: 'Sacred Sanctuary', desc: 'Massive precinct featuring the Great Hypostyle Hall with 134 towering sandstone papyrus columns.' }
    ],
    quickFacts: { population: '110M', area: '1.0M km²', elevation: '2,629m (Mount Catherine)' }
  },
  {
    id: 'bra',
    name: 'Brazil',
    nativeName: 'República Federativa do Brasil',
    code: 'BR',
    flag: '🇧🇷',
    capital: 'Brasília',
    lat: -14.2350,
    lng: -51.9253,
    timezone: 'America/Sao_Paulo',
    continent: 'South America',
    history: 'A land of immense biological and cultural exuberance, shaped by indigenous Amazonian guardians, Portuguese maritime landfall in 1500, and African artistic heritage. Brazil stands as South America’s geographic giant, championing biodiversity, modern architectural capitals, and infectious musical rhythm.',
    landmarks: [
      { name: 'Christ the Redeemer', type: 'Art Deco Colossus', desc: '30-meter soapstone statue crowning Mount Corcovado overlooking Guanabara Bay.' },
      { name: 'Iguazu Falls', type: 'Waterfalls System', desc: 'Dramatic semicircle of 275 thunderous cascades straddling the subtropical border with Argentina.' },
      { name: 'Amazon Rainforest', type: 'Biosphere', desc: 'The "Lungs of the Earth", harboring one in ten known species across 6.7 million square kilometers.' }
    ],
    quickFacts: { population: '215M', area: '8.5M km²', elevation: '2,995m (Pico da Neblina)' }
  },
  {
    id: 'aus',
    name: 'Australia',
    nativeName: 'Commonwealth of Australia',
    code: 'AU',
    flag: '🇦🇺',
    capital: 'Canberra',
    lat: -25.2744,
    lng: 133.7751,
    timezone: 'Australia/Sydney',
    continent: 'Oceania',
    history: 'Home to the world’s oldest continuous living cultures, with Aboriginal songlines dating back 65,000 years. Following 18th-century European voyages, this isolated island continent transformed into a prosperous federation characterized by rugged outback frontier landscapes and sun-drenched coastal metropolises.',
    landmarks: [
      { name: 'Sydney Opera House', type: 'Modern Architectural', desc: 'Jørn Utzon’s sail-shaped expressionist performing arts center gracing Sydney Harbour.' },
      { name: 'Uluru', type: 'Sacred Sandstone Monolith', desc: 'Sacred 348-meter red sandstone inselberg in the Red Centre, glowing deep crimson at sundown.' },
      { name: 'Great Barrier Reef', type: 'Coral Ecosystem', desc: 'The planet’s largest living organism, visible from orbit with 2,900 individual coral reefs.' }
    ],
    quickFacts: { population: '26M', area: '7.7M km²', elevation: '2,228m (Mount Kosciuszko)' }
  },
  {
    id: 'deu',
    name: 'Germany',
    nativeName: 'Bundesrepublik Deutschland',
    code: 'DE',
    flag: '🇩🇪',
    capital: 'Berlin',
    lat: 51.1657,
    lng: 10.4515,
    timezone: 'Europe/Berlin',
    continent: 'Europe',
    history: 'The land of poets, philosophers, and industrial pioneers at the geographic core of Europe. From Gutenberg’s printing press to Bach and Beethoven’s symphonic heights, Germany rebuilt itself from the ashes of 20th-century division into the economic powerhouse and democratic anchor of modern Europe.',
    landmarks: [
      { name: 'Brandenburg Gate', type: 'Classical Monument', desc: '18th-century neoclassical triumphal monument, a historical symbol of European reunification.' },
      { name: 'Neuschwanstein Castle', type: 'Fairy Tale Palace', desc: 'King Ludwig II’s romantic Romanesque Revival castle perched above the Bavarian Alps.' },
      { name: 'Cologne Cathedral', type: 'Gothic Masterpiece', desc: 'High-Gothic twin-spired cathedral that took over 630 years to complete on the Rhine.' }
    ],
    quickFacts: { population: '84M', area: '357K km²', elevation: '2,962m (Zugspitze)' }
  },
  {
    id: 'esp',
    name: 'Spain',
    nativeName: 'Reino de España',
    code: 'ES',
    flag: '🇪🇸',
    capital: 'Madrid',
    lat: 40.4637,
    lng: -3.7492,
    timezone: 'Europe/Madrid',
    continent: 'Europe',
    history: 'A rich crossroads of Celtic, Roman, Visigothic, and Islamic civilization that birthed the Golden Age of maritime exploration. Spain’s diverse regions offer a brilliant dialogue between Moorish palatial courtyards, Gothic cathedrals, and visionary modernist architecture.',
    landmarks: [
      { name: 'La Sagrada Família', type: 'Modernist Temple', desc: 'Antoni Gaudí’s organic nature-inspired basilica rising with organic stonework in Barcelona.' },
      { name: 'The Alhambra', type: 'Moorish Citadel', desc: 'Nasrid dynasty’s palatial fortress in Granada renowned for intricate arabesques and water gardens.' },
      { name: 'Prado Museum', type: 'Art Treasury', desc: 'Madrid’s premier gallery housing masterworks by Velázquez, Goya, and El Greco.' }
    ],
    quickFacts: { population: '48M', area: '505K km²', elevation: '3,718m (Teide)' }
  },
  {
    id: 'can',
    name: 'Canada',
    nativeName: 'Canada',
    code: 'CA',
    flag: '🇨🇦',
    capital: 'Ottawa',
    lat: 56.1304,
    lng: -106.3468,
    timezone: 'America/Toronto',
    continent: 'North America',
    history: 'Inhabited for millennia by First Nations and Inuit peoples before French and British settlement established a dual-heritage confederation in 1867. Spanning six time zones and three oceans, Canada is renowned for untamed boreal wilderness, peacebuilding diplomacy, and inclusive multiculturalism.',
    landmarks: [
      { name: 'Banff & Lake Louise', type: 'Alpine Splendor', desc: 'Glacial turquoise waters mirroring snow-clad peaks in the Canadian Rocky Mountains.' },
      { name: 'Niagara Falls', type: 'Hydraulic Wonder', desc: 'Horseshoe cascade spilling 3,160 tons of water per second into the Niagara River.' },
      { name: 'Old Quebec & Frontenac', type: 'Walled Heritage', desc: 'Only fortified city north of Mexico, crowned by the chateau hotel above the St. Lawrence.' }
    ],
    quickFacts: { population: '40M', area: '9.98M km²', elevation: '5,959m (Mount Logan)' }
  },
  {
    id: 'zaf',
    name: 'South Africa',
    nativeName: 'Republic of South Africa',
    code: 'ZA',
    flag: '🇿🇦',
    capital: 'Pretoria / Cape Town',
    lat: -30.5595,
    lng: 22.9375,
    timezone: 'Africa/Johannesburg',
    continent: 'Africa',
    history: 'Known as the "Rainbow Nation", South Africa’s history spans ancient hominid origins in the Cradle of Humankind, colonial seafaring stops, and the historic triumph over apartheid led by Nelson Mandela. Its extraordinary landscape transitions from arid Karoo to coastal fynbos and big-game savannahs.',
    landmarks: [
      { name: 'Table Mountain', type: 'Sandstone Plateau', desc: 'Flat-topped 1,086m mountain overlooking Cape Town, cloaked in misty "tablecloth" clouds.' },
      { name: 'Kruger National Park', type: 'Wildlife Sanctuary', desc: 'Nearly 20,000 square kilometers of protected wilderness home to Africa’s Big Five.' },
      { name: 'Robben Island', type: 'Living Monument', desc: 'Island prison off Cape Town where Nelson Mandela spent 18 of his 27 years incarcerated.' }
    ],
    quickFacts: { population: '60M', area: '1.22M km²', elevation: '3,450m (Mafadi)' }
  },
  {
    id: 'grc',
    name: 'Greece',
    nativeName: 'Ελληνική Δημοκρατία',
    code: 'GR',
    flag: '🇬🇷',
    capital: 'Athens',
    lat: 39.0742,
    lng: 21.8243,
    timezone: 'Europe/Athens',
    continent: 'Europe',
    history: 'The birthplace of democracy, Western philosophy, Olympic athletic ideals, and theatrical drama. Golden Age Athens and the maritime city-states developed rational inquiry, classical symmetry, and scientific axioms that still illuminate contemporary thought.',
    landmarks: [
      { name: 'The Acropolis & Parthenon', type: 'Classical Sanctuary', desc: 'Pericles’ 5th-century BC hilltop marble citadel dedicated to the goddess Athena.' },
      { name: 'Santorini Caldera', type: 'Volcanic Island', desc: 'Whitewashed cliffside villages hanging over a submerged volcanic lagoon in the Aegean Sea.' },
      { name: 'Meteora Monasteries', type: 'Byzantine Monoliths', desc: 'Eastern Orthodox monasteries suspended atop sheer 400-meter sandstone rock pillars.' }
    ],
    quickFacts: { population: '10.4M', area: '131K km²', elevation: '2,918m (Mount Olympus)' }
  },
  {
    id: 'isl',
    name: 'Iceland',
    nativeName: 'Ísland',
    code: 'IS',
    flag: '🇮🇸',
    capital: 'Reykjavik',
    lat: 64.9631,
    lng: -19.0208,
    timezone: 'Atlantic/Reykjavik',
    continent: 'Europe',
    history: 'Settled by Norse explorers in the 9th century who created the world’s oldest surviving parliament, the Althing, in 930 AD. Straddling the Mid-Atlantic Ridge, Iceland is a dynamic laboratory of fire and ice where tectonic rifts, geysers, glaciers, and geothermal energy define daily life.',
    landmarks: [
      { name: 'Blue Lagoon', type: 'Geothermal Spa', desc: 'Mineral-rich milky-blue silica seawater pools nestled in a jagged black lava field.' },
      { name: 'Gullfoss Waterfall', type: 'Glacial Chasm', desc: 'Golden Falls roaring into a rugged 32-meter crevice fed by the Langjökull glacier.' },
      { name: 'Jökulsárlón Glacier Lagoon', type: 'Iceberg Bay', desc: 'Deep glacial lagoon filled with luminous electric-blue icebergs drifting toward Diamond Beach.' }
    ],
    quickFacts: { population: '380K', area: '103K km²', elevation: '2,110m (Hvannadalshnúkur)' }
  },
  {
    id: 'mex',
    name: 'Mexico',
    nativeName: 'Estados Unidos Mexicanos',
    code: 'MX',
    flag: '🇲🇽',
    capital: 'Mexico City',
    lat: 23.6345,
    lng: -102.5528,
    timezone: 'America/Mexico_City',
    continent: 'North America',
    history: 'The magnificent crossroad of Mesoamerican civilizations—the Olmecs, Maya, and Aztecs—and Spanish colonial baroque architecture. Mexico City was built atop the ancient island capital of Tenochtitlan, retaining profound cultural vitality, culinary genius, and vibrant artistic expression.',
    landmarks: [
      { name: 'Chichen Itza', type: 'Mayan Pyramid', desc: 'El Castillo step-pyramid engineered to cast a serpentine shadow on astronomical equinoxes.' },
      { name: 'Teotihuacan', type: 'Pre-Columbian City', desc: 'Mysterious City of the Gods featuring the colossal Pyramids of the Sun and Moon.' },
      { name: 'Cenotes of Yucatán', type: 'Subterranean Aquifer', desc: 'Natural limestone sinkholes with crystal-clear sacred waters connected underground.' }
    ],
    quickFacts: { population: '128M', area: '1.96M km²', elevation: '5,636m (Pico de Orizaba)' }
  },
  {
    id: 'arg',
    name: 'Argentina',
    nativeName: 'República Argentina',
    code: 'AR',
    flag: '🇦🇷',
    capital: 'Buenos Aires',
    lat: -38.4161,
    lng: -63.6167,
    timezone: 'America/Argentina/Buenos_Aires',
    continent: 'South America',
    history: 'Stretching from the humid Chaco to the glacial tip of Tierra del Fuego, Argentina was shaped by gaucho cattle frontiers on the Pampas and waves of European migration. It gifted the world the sensual passion of tango, literary magic realism, and legendary sporting lore.',
    landmarks: [
      { name: 'Perito Moreno Glacier', type: 'Glacial Wall', desc: 'Advancing ice monolith in Patagonia that regularly calves building-sized ice blocks into Lake Argentino.' },
      { name: 'La Boca & Caminito', type: 'Historic Barrio', desc: 'Cobbled portside neighborhood of brightly painted zinc tenements and open-air tango salons.' },
      { name: 'Mount Fitz Roy', type: 'Granite Spire', desc: 'Cerro Chaltén’s sheer vertical granite walls rising dramatically above pristine glacial lakes.' }
    ],
    quickFacts: { population: '46M', area: '2.78M km²', elevation: '6,961m (Aconcagua)' }
  },
  {
    id: 'tur',
    name: 'Turkey',
    nativeName: 'Türkiye Cumhuriyeti',
    code: 'TR',
    flag: '🇹🇷',
    capital: 'Ankara',
    lat: 38.9637,
    lng: 35.2433,
    timezone: 'Europe/Istanbul',
    continent: 'Asia/Europe',
    history: 'The continental bridge linking East and West across the Bosphorus Strait. As the seat of the Byzantine Empire (Constantinople) and later the grand Ottoman Empire, Turkey presents a mesmerizing synthesis of Islamic domes, ancient silk caravanserais, and Aegean antiquity.',
    landmarks: [
      { name: 'Hagia Sophia', type: 'Architectural Marvel', desc: '6th-century cathedral turned imperial mosque with a floating celestial dome in Istanbul.' },
      { name: 'Cappadocia Valleys', type: 'Fairy Chimneys', desc: 'Surreal volcanic tuff landscape dotted with ancient cave churches and sunrise hot air balloons.' },
      { name: 'Ephesus Ruins', type: 'Greco-Roman Metropolis', desc: 'Magnificently preserved ancient city boasting the monumental Library of Celsus facade.' }
    ],
    quickFacts: { population: '85M', area: '783K km²', elevation: '5,137m (Mount Ararat)' }
  },
  {
    id: 'kor',
    name: 'South Korea',
    nativeName: '대한민국 (Daehan Minguk)',
    code: 'KR',
    flag: '🇰🇷',
    capital: 'Seoul',
    lat: 35.9078,
    lng: 127.7669,
    timezone: 'Asia/Seoul',
    continent: 'Asia',
    history: 'From the ancient Joseon dynasty and the scientific phonetic creation of Hangul script to the "Miracle on the Han River", South Korea forged an extraordinary path. Today, it stands as a global technological titan and cultural trendsetter whose music, cinema, and design captivate the globe.',
    landmarks: [
      { name: 'Gyeongbokgung Palace', type: 'Joseon Dynasty Seat', desc: '1395 Northern Palace with the majestic Gyeonghoeru pavilion floating on a lotus pond.' },
      { name: 'Bukchon Hanok Village', type: 'Traditional Enclave', desc: 'Preserved neighborhood of tiled-roof Korean hanok houses nestled between Seoul skyscrapers.' },
      { name: 'Jeju Island Volcanic Cones', type: 'Natural UNESCO', desc: 'Subtropical island of volcanic lava tubes, pristine waterfalls, and sunrise tuff peaks.' }
    ],
    quickFacts: { population: '51M', area: '100K km²', elevation: '1,947m (Hallasan)' }
  },
  {
    id: 'nor',
    name: 'Norway',
    nativeName: 'Kongeriket Norge',
    code: 'NO',
    flag: '🇳🇴',
    capital: 'Oslo',
    lat: 60.4720,
    lng: 8.4689,
    timezone: 'Europe/Oslo',
    continent: 'Europe',
    history: 'Carved by glacial epochs into dramatic coastal fjords, Norway was the maritime springboard for Viking exploration across the North Atlantic. Blending seafaring resilience with progressive social sustainability, it is celebrated for pristine arctic wilderness and midnight sun.',
    landmarks: [
      { name: 'Geirangerfjord', type: 'Glacial Fjord', desc: 'Emerald-green fjord with sheer rock walls and the thunderous Seven Sisters waterfalls.' },
      { name: 'Lofoten Islands', type: 'Arctic Archipelago', desc: 'Dramatic alpine peaks plunging into icy blue seas dotted with crimson rorbu fishermen cabins.' },
      { name: 'Preikestolen (Pulpit Rock)', type: 'Cliffs Lookout', desc: 'Flat 25x25 meter cliff plateau suspended 604 meters dizzyingly above Lysefjord.' }
    ],
    quickFacts: { population: '5.5M', area: '385K km²', elevation: '2,469m (Galdhøpiggen)' }
  },
  {
    id: 'nzl',
    name: 'New Zealand',
    nativeName: 'Aotearoa',
    code: 'NZ',
    flag: '🇳🇿',
    capital: 'Wellington',
    lat: -40.9006,
    lng: 174.8860,
    timezone: 'Pacific/Auckland',
    continent: 'Oceania',
    history: 'Known to the Māori as Aotearoa ("Land of the Long White Cloud"), this pristine volcanic archipelago was the last major habitable landmass reached by humans. It is legendary for rugged Southern Alps, volcanic geothermal fields, and deep Māori cultural heritage.',
    landmarks: [
      { name: 'Milford Sound', type: 'Fiordland Wonder', desc: 'Rudyard Kipling’s "Eighth Wonder", where Mitre Peak rises dramatically from dark fjord waters.' },
      { name: 'Mount Cook (Aoraki)', type: 'Southern Alps Summit', desc: 'Majestic 3,724-meter peak surrounded by glistening glaciers and dark sky reserves.' },
      { name: 'Rotorua Geothermal Field', type: 'Thermal Wonderland', desc: 'Bubbling mud pools, steaming geysers, and traditional living Māori villages.' }
    ],
    quickFacts: { population: '5.2M', area: '268K km²', elevation: '3,724m (Aoraki)' }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = COUNTRIES_DATA;
}
