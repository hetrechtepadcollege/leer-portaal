const EVENTS = [
  { id: 1, period: "Voor de geboorte", order: 1, title: "Arabië en de regio al-Ḥidjāz", year: "Voor de geboorte", summary: "Het Arabische schiereiland en de regio al-Ḥidjāz vormen het decor van de sīrah. Mekka en Medina liggen in deze regio en krijgen hierdoor een centrale historische plaats. Zo wordt duidelijk waarom veel sleutelmomenten van de biografie juist daar plaatsvinden." },
  { id: 2, period: "Voor de geboorte", order: 2, title: "Profeet Ibrāhīm en Ismāʿīl", year: "Voor de geboorte", summary: "De lijn van Profeet Ibrāhīm en zijn zoon Ismāʿīl, vrede zij met hen, loopt door Mekka en de Kaʿbah. Hun geschiedenis staat aan de basis van de aanwezigheid van tawḥīd in deze streek. Daardoor krijgt de komst van de Profeet ﷺ een duidelijke plaats in een bestaande profetische lijn." },
  { id: 3, period: "Voor de geboorte", order: 3, title: "Bloedlijn van de Gezant ﷺ", year: "Voor de geboorte", summary: "De afstamming van de Profeet ﷺ loopt via Quraysh en Banū Hāshim. Namen als Hāshim en ʿAbdul Muṭṭalib behoren tot die familielijn. Zijn afkomst stond in Mekka bekend om eer, zorg en verantwoordelijkheid." },
  { id: 4, period: "Voor de geboorte", order: 4, title: "Mensen van de olifant", year: "Voor de geboorte", summary: "Het olifantenleger trok op richting de Kaʿbah met het doel haar te vernietigen. Dat plan mislukte en de bescherming van Allah werd zichtbaar voor de mensen van Mekka. Dit jaar werd daarna een belangrijk ijkpunt in de periode vlak vóór de geboorte van de Profeet ﷺ." },
  { id: 5, period: "Voor de geboorte", order: 5, title: "Gebeurtenissen voor de geboorte", year: "Voor de geboorte", summary: "De laatste ontwikkelingen vóór zijn geboorte komen hier samen. De sociale situatie in Mekka, de status van de familie en de historische timing worden naast elkaar gezet. Hierdoor ontstaat een duidelijk beeld van de omstandigheden waarin de Profeet ﷺ geboren werd." },
  { id: 6, period: "Voor de geboorte", order: 6, title: "ʿAbdullāh en Āminah", year: "Voor de geboorte", summary: "De aandacht gaat naar zijn ouders: ʿAbdullāh en Āminah. Hun achtergrond en familierelaties maken deel uit van de voorbereiding op de komst van de Profeet ﷺ. Zo wordt de persoonlijke en familiale context van zijn geboorte concreter." },
  { id: 7, period: "Voor de geboorte", order: 7, title: "ʿAbdul Muṭṭalib als voogdfiguur", year: "Voor de geboorte", summary: "ʿAbdul Muṭṭalib was een gerespecteerde figuur binnen Quraysh. Zijn rol rond de Kaʿbah en zijn gezag in Mekka tonen zijn belangrijke positie. Die positie vormt een sleutel in het begrijpen van de familiecontext van de Profeet ﷺ." },

  { id: 8, period: "Leven van de Profeet ﷺ", order: 8, title: "Geboorte en vroege opvoeding", year: "570 n.Chr.", summary: "De geboorte vond plaats in Mekka, gevolgd door de eerste jaren van zijn jeugd. De vroege zorg en opvoeding verliepen volgens de gebruiken van die tijd. In deze jaren werd zijn karakter al zichtbaar gevormd." },
  { id: 9, period: "Leven van de Profeet ﷺ", order: 9, title: "Openstellen van de borst", year: "Jeugdjaren", summary: "Het openstellen van de borst wordt genoemd als bijzondere gebeurtenis in de jeugd. In de sīrah geldt dit als voorbereiding en zuivering. Daarmee wordt de speciale bescherming in zijn vroege levensjaren benadrukt." },
  { id: 10, period: "Leven van de Profeet ﷺ", order: 10, title: "Eerste reis naar Shām", year: "Jeugdjaren", summary: "De eerste reis naar Shām vond plaats in zijn jeugdjaren. Tijdens deze reis waren er ontmoetingen die later vaak in de biografie worden genoemd. De reis laat zien dat hij al op jonge leeftijd ervaring opdeed buiten Mekka." },
  { id: 11, period: "Leven van de Profeet ﷺ", order: 11, title: "Tweede reis naar Shām", year: "Voor profeetschap", summary: "De latere handelsreis naar Shām bevestigde opnieuw zijn betrouwbaarheid en eerlijkheid. In handel en omgang werd zijn zorgvuldigheid duidelijk gezien. Daardoor groeide zijn reputatie onder de mensen van Mekka verder." },
  { id: 12, period: "Leven van de Profeet ﷺ", order: 12, title: "Huwelijk met Vrouwe Khadīja", year: "Voor profeetschap", summary: "Het huwelijk met Vrouwe Khadīja bracht rust, stabiliteit en sterke steun in zijn leven. Deze periode gaf hem een stevige basis in de jaren vóór de eerste openbaring. Hun verbondenheid werd een belangrijke steun in de vroege loop van de sīrah." },
  { id: 13, period: "Leven van de Profeet ﷺ", order: 13, title: "Herbouw van de Kaʿbah", year: "Voor profeetschap", summary: "Bij de herbouw van de Kaʿbah ontstond een geschil over de plaatsing van de Zwarte Steen. Hij toonde daarbij wijsheid en rechtvaardigheid in zijn oplossing. Daarmee werd conflict tussen stammen voorkomen en groeide het vertrouwen in hem." },
  { id: 14, period: "Leven van de Profeet ﷺ", order: 14, title: "Ḥirā en eerste openbaring", year: "610 n.Chr.", summary: "In de grot van Ḥirā begon de eerste openbaring. De eerste āyāt markeerden het begin van de risālah. Vanaf dit moment brak een nieuwe fase aan voor hem en voor de mensheid." },
  { id: 15, period: "Leven van de Profeet ﷺ", order: 15, title: "Openbare verkondiging", year: "Mekkaanse periode", summary: "Hier verschuift de daʿwah van een besloten kring naar een open oproep. De boodschap van tawḥīd werd publiek verkondigd aan Quraysh en daarbuiten. Daarmee begon ook de zichtbare confrontatie met afgoderij en verzet." },
  { id: 16, period: "Leven van de Profeet ﷺ", order: 16, title: "Vervolging in Mekka", year: "Mekkaanse periode", summary: "De druk op moslims in Mekka nam in deze periode sterk toe. Spot, tegenwerking en harde vormen van vervolging troffen velen uit de eerste gemeenschap. Tegelijk groeiden sabr, standvastigheid en trouw aan het geloof." },
  { id: 17, period: "Leven van de Profeet ﷺ", order: 17, title: "Hijrah naar Abessinië", year: "5 AN", summary: "Een groep moslims migreerde naar Abessinië om geloof en veiligheid te beschermen. Die stap kwam voort uit zware vervolging in Mekka. Zo werd zichtbaar dat de gemeenschap ook strategisch kon handelen onder druk." },
  { id: 18, period: "Leven van de Profeet ﷺ", order: 18, title: "Ḥamzah en ʿUmar worden moslim", year: "Mekkaanse periode", summary: "De bekering van Ḥamzah en ʿUmar betekende een duidelijk keerpunt. Hun toetreding gaf de moslimgemeenschap extra kracht en zichtbaarheid. In een periode van druk bracht dit nieuwe stevigheid." },
  { id: 19, period: "Leven van de Profeet ﷺ", order: 19, title: "Grote boycot", year: "7-10 AN", summary: "Banū Hāshim en de moslims kregen te maken met zware sociale en economische uitsluiting. De boycot trof dagelijks leven, handel en relaties in Mekka. Deze jaren tonen hoe volharding en onderlinge steun de gemeenschap overeind hielden." },
  { id: 20, period: "Leven van de Profeet ﷺ", order: 20, title: "Reis naar Ṭāif", year: "10 AN", summary: "Na moeilijke jaren in Mekka volgde de reis naar Ṭāif. De oproep daar werd afgewezen en de tegenstand was pijnlijk. Toch bleef de Profeet ﷺ vasthouden aan geduld, hoop en toewijding aan de boodschap." },
  { id: 21, period: "Leven van de Profeet ﷺ", order: 21, title: "Isrāʾ en Miʿrāj", year: "10-11 AN", summary: "De nachtelijke reis en hemelreis brachten spirituele versterking in een periode van beproeving. In de sīrah geldt dit als een bijzonder moment van nabijheid, eer en bevestiging. Het moment gaf nieuwe kracht aan de voortgang van de boodschap." },
  { id: 22, period: "Leven van de Profeet ﷺ", order: 22, title: "Islam verspreidt in Medina", year: "11-13 AN", summary: "De boodschap vond gehoor bij mensen uit Medina, waaronder Aws en Khazraj. Contacten tijdens bedevaartseizoenen kregen steeds meer betekenis. Zo ontstond de weg naar een nieuwe maatschappelijke basis voor de daʿwah." },
  { id: 23, period: "Leven van de Profeet ﷺ", order: 23, title: "Dār al-Nadwah en tegenmaatregelen", year: "Vlak voor hijrah", summary: "Quraysh beraadslaagde in Dār al-Nadwah over manieren om de boodschap te stoppen. De besluiten uit dat overleg verscherpten de dreiging rond Mekka. Daarmee ontstond de directe aanloop naar de hijrah." },
  { id: 24, period: "Leven van de Profeet ﷺ", order: 24, title: "Hijrah van de Gezant ﷺ", year: "1 AH", summary: "De oversteek van Mekka naar Medina markeerde het grote keerpunt in de geschiedenis van de ummah. Met de hijrah begon een nieuwe maatschappelijke en religieuze opbouw. Vanaf dat moment kreeg de gemeenschap een eigen structuur in Medina." },
  { id: 25, period: "Leven van de Profeet ﷺ", order: 25, title: "Bouw van Masjid Nabawī", year: "1 AH", summary: "In Medina werd de Masjid Nabawī gebouwd als centrale plek van de gemeenschap. De moskee diende voor aanbidding, kennis, ontmoeting en leiding. Zo kreeg de jonge ummah een vaste en gedeelde kern." },
  { id: 26, period: "Leven van de Profeet ﷺ", order: 26, title: "Broederschap Anṣār-Muhājirīn", year: "1 AH", summary: "De broederschap tussen Anṣār en Muhājirīn werd bewust opgebouwd. Dit bracht sociale steun, gedeelde verantwoordelijkheid en echte verbondenheid. Zo groeide de gemeenschap niet alleen in geloof, maar ook in praktische solidariteit." },
  { id: 27, period: "Leven van de Profeet ﷺ", order: 27, title: "Jihād-context in Medina", year: "2 AH", summary: "In Medina vond een overgang plaats naar georganiseerde verdediging. Die context draaide om bescherming van gemeenschap, geloof en veiligheid. Daarmee veranderde ook de politieke en maatschappelijke positie van de moslims." },
  { id: 28, period: "Leven van de Profeet ﷺ", order: 28, title: "Slag bij Badr", year: "2 AH", summary: "De slag bij Badr was een vroege en beslissende confrontatie. De gebeurtenis had grote impact op het zelfvertrouwen en de positie van de gemeenschap. In de sīrah geldt Badr als een mijlpaal van vertrouwen, inzet en goddelijke steun." },
  { id: 29, period: "Leven van de Profeet ﷺ", order: 29, title: "Slag bij Uḥud", year: "3 AH", summary: "Bij Uḥud werd de gemeenschap geconfronteerd met verlies, fouten en herstel. De nasleep liet diepe sporen na in de ummah. Uḥud blijft een blijvend leerpunt in gehoorzaamheid, discipline en standvastigheid." },
  { id: 30, period: "Leven van de Profeet ﷺ", order: 30, title: "Banū al-Muṣṭaliq", year: "5 AH", summary: "De gebeurtenissen rond Banū al-Muṣṭaliq hadden sociale en politieke gevolgen binnen de gemeenschap. Interne spanningen en externe druk kwamen hier samen. Juist daardoor werd het belang van wijsheid en samenhang extra duidelijk." },
  { id: 31, period: "Leven van de Profeet ﷺ", order: 31, title: "Slag bij Khandaq", year: "5 AH", summary: "De slag bij Khandaq vond plaats in een periode van grote dreiging rond Medina. De aanleg van de greppel en gezamenlijke inzet tonen strategisch denken en eenheid. De gebeurtenis markeert een cruciale verdediging in moeilijke omstandigheden." },
  { id: 32, period: "Leven van de Profeet ﷺ", order: 32, title: "Banū Qurayẓah", year: "5 AH", summary: "Na Khandaq volgden de gebeurtenissen rond Banū Qurayẓah. De situatie vroeg om duidelijke besluitvorming in een kwetsbare tijd. Zo wordt zichtbaar hoe veiligheid, recht en gemeenschap met elkaar verbonden waren." },
  { id: 33, period: "Leven van de Profeet ﷺ", order: 33, title: "Verdrag van Ḥudaybiyyah", year: "6 AH", summary: "Hier staat het verdrag van Ḥudaybiyyah centraal als strategisch vredesmoment. Wat op korte termijn zwaar leek, bleek op langere termijn een opening voor groei. De fase laat zien hoe geduld en visie de richting van de sīrah bepaalden." },
  { id: 34, period: "Leven van de Profeet ﷺ", order: 34, title: "Slag bij Khaybar", year: "7 AH", summary: "De slag bij Khaybar bracht belangrijke veranderingen in de regio. De gemeenschap kreeg hierdoor meer stabiliteit en ruimte. Daarmee werd de positie van de moslims in de Medinese periode verder versterkt." },
  { id: 35, period: "Leven van de Profeet ﷺ", order: 35, title: "Slag bij Muʾtah", year: "8 AH", summary: "Muʾtah wordt genoemd als grote confrontatie buiten de directe omgeving van Medina. De gebeurtenis toonde moed en vastberadenheid onder moeilijke verhoudingen. Muʾtah gaf ook een signaal over de bredere reikwijdte van de gemeenschap." },
  { id: 36, period: "Leven van de Profeet ﷺ", order: 36, title: "Overwinning op Mekka", year: "8 AH", summary: "De intocht in Mekka vormde een historisch keerpunt. Ondanks eerdere vijandschap stonden vergeving en orde centraal bij deze terugkeer. Dat moment toont de kracht van genade, leiderschap en morele overwinning." },
  { id: 37, period: "Leven van de Profeet ﷺ", order: 37, title: "Slag bij Ḥunayn", year: "8 AH", summary: "Na de opening van Mekka volgde Ḥunayn. De gebeurtenis maakte duidelijk dat succes niet rust op aantallen, maar op afhankelijkheid van Allah. Zo kreeg de gemeenschap opnieuw diepe spirituele richting." },
  { id: 38, period: "Leven van de Profeet ﷺ", order: 38, title: "Expeditie van Tabūk", year: "9 AH", summary: "De expeditie van Tabūk vroeg om grote voorbereiding en mobilisatie. Dit werd een test van oprechtheid en inzet op brede schaal. Daardoor werd duidelijk wie standvastig bleef in een periode van beproeving." },
  { id: 39, period: "Leven van de Profeet ﷺ", order: 39, title: "Afscheidsbedevaart", year: "10 AH", summary: "In het tiende jaar na hijrah vond de afscheidsbedevaart plaats. Daar werden kernboodschappen gegeven over geloof, recht en onderlinge omgang. Dit moment geldt als samenvattende afronding van zijn openbare leiding." },
  { id: 40, period: "Leven van de Profeet ﷺ", order: 40, title: "Heengaan", year: "11 AH", summary: "Het heengaan van de Profeet ﷺ vond plaats in Medina. De gemeenschap werd geconfronteerd met diepe emotie en grote verantwoordelijkheid. Daarmee eindigde zijn aardse leven en begon een nieuwe taak voor de ummah." },
  { id: 41, period: "Leven van de Profeet ﷺ", order: 41, title: "Zijn uiterlijk (shamāʾil)", year: "Beschrijving", summary: "Overleveringen over zijn uiterlijk zijn bewaard in de shamāʾil. Deze beschrijvingen versterken liefde, eerbied en herkenning van zijn voorbeeld. Zo krijgt de biografie een persoonlijke en tastbare dimensie." },
  { id: 42, period: "Leven van de Profeet ﷺ", order: 42, title: "Zijn bijzonderheden", year: "Beschrijving", summary: "Bijzonderheden die specifiek voor hem waren maken zijn unieke positie als laatste Profeet ﷺ duidelijker. Zulke eigenschappen verdiepen het inzicht in zijn rol, taak en status in de openbaringsgeschiedenis. Daarmee wordt zijn bijzondere plaats in de sīrah helderder." },
  { id: 43, period: "Leven van de Profeet ﷺ", order: 43, title: "Zijn wonderen", year: "Beschrijving", summary: "Hier worden wonderen genoemd die als tekenen van zijn zending worden overgeleverd. Deze gebeurtenissen ondersteunden de waarheid van de boodschap en versterkten het geloof van de gelovigen. In de sīrah zijn ze verbonden met momenten van leiding en bevestiging." },
  { id: 44, period: "Leven van de Profeet ﷺ", order: 44, title: "Zijn karakter", year: "Beschrijving", summary: "De aandacht gaat naar zijn akhlāq: zachtmoedigheid, rechtvaardigheid, geduld en betrouwbaarheid. Zijn karakter wordt getoond als praktische vertaling van geloof in het dagelijks leven. Daarmee wordt duidelijk waarom navolging van zijn omgangsvormen zo centraal staat." },
  { id: 45, period: "Leven van de Profeet ﷺ", order: 45, title: "Zijn gezin en verwanten", year: "Familie", summary: "Zijn familiekring omvatte vrouwen, kinderen en verwanten. De biografie laat zien hoe hij thuis leefde, zorgde en leiding gaf met barmhartigheid. Zo wordt het familieleven onderdeel van de bredere sīrah." },
  { id: 46, period: "Leven van de Profeet ﷺ", order: 46, title: "Levensdetails en middelen", year: "Historische details", summary: "Praktische details over zijn leven en middelen maken de historische context concreter. Daardoor wordt de sīrah beter voorstelbaar in het dagelijkse leven van die tijd. Zo blijft de biografie verbonden met echte omstandigheden en niet alleen met grote gebeurtenissen." },
  { id: 47, period: "Leven van de Profeet ﷺ", order: 47, title: "Rechten van de Gezant ﷺ", year: "Afsluiting", summary: "De rechten van de Gezant ﷺ op zijn ummah worden benadrukt. Het gaat om liefde, gehoorzaamheid, eerbied en trouw aan zijn leiding. Zo verbindt de sīrah kennis met verantwoordelijkheid in praktijk." }
];

const QUIZ_QUESTIONS = [
  { question: "Welke gebeurtenis hoort bij de fase vóór de geboorte?", options: ["Mensen van de Olifant", "Slag bij Uḥud", "Afscheidsbedevaart"], answer: 0, explanation: "Correct. Dit voorval hoort bij de aanloop naar de geboorte." },
  { question: "Wat markeert het begin van de risālah?", options: ["Herbouw van de Kaʿbah", "Eerste openbaring in Ḥirā", "Hijrah"], answer: 1, explanation: "Juist. Hier begint de profetische zending." },
  { question: "Welke fase volgt na de eerste openbaring?", options: ["Openbare verkondiging", "Overwinning op Mekka", "Tabūk"], answer: 0, explanation: "Correct. Daarna volgt de open oproep in Mekka." },
  { question: "Welke gebeurtenis valt in 5 AN?", options: ["Hijrah naar Abessinië", "Slag bij Badr", "Ḥudaybiyyah"], answer: 0, explanation: "Goed. Deze migratie vond plaats in de Mekkaanse periode." },
  { question: "Welke twee metgezellen worden vaak samen genoemd in deze fase?", options: ["Bilāl en Abū Dharr", "Ḥamzah en ʿUmar", "ʿUthmān en ʿAlī"], answer: 1, explanation: "Juist. Hun toetreding was een sterk moment." },
  { question: "Wat hoort bij 7-10 AN?", options: ["Grote boycot", "Afscheidsbedevaart", "Slag bij Khaybar"], answer: 0, explanation: "Correct. Dit was een zware beproeving in Mekka." },
  { question: "Welke gebeurtenis volgt op de reis naar Ṭāif?", options: ["Isrāʾ en Miʿrāj", "Overwinning op Mekka", "Slag bij Muʾtah"], answer: 0, explanation: "Goed. Daarna volgt de hemelreis." },
  { question: "Welk moment luidt de Medinese fase in?", options: ["Hijrah naar Medina", "Herbouw Kaʿbah", "Mensen van de Olifant"], answer: 0, explanation: "Juist. De hijrah is het grote keerpunt." },
  { question: "Welke gebeurtenis hoort bij de vroege Medinese confrontaties?", options: ["Slag bij Badr", "Reis naar Ṭāif", "Openbaring in Ḥirā"], answer: 0, explanation: "Correct. Badr hoort bij de vroege Medinese periode." },
  { question: "Wat benadrukt Uḥud vooral?", options: ["Alleen numerieke kracht", "Discipline en gehoorzaamheid", "Geen voorbereiding"], answer: 1, explanation: "Goed. Uḥud benadrukt discipline en standvastigheid." },
  { question: "Welke gebeurtenis staat bij 6 AH?", options: ["Ḥudaybiyyah", "Muʾtah", "Tabūk"], answer: 0, explanation: "Juist. Het verdrag van Ḥudaybiyyah hoort bij 6 AH." },
  { question: "Welke slag hoort bij 7 AH?", options: ["Khaybar", "Ḥunayn", "Badr"], answer: 0, explanation: "Correct. Khaybar hoort bij 7 AH." },
  { question: "Welke gebeurtenis hoort bij 8 AH?", options: ["Overwinning op Mekka", "Boycot", "Afscheidsbedevaart"], answer: 0, explanation: "Juist. De overwinning op Mekka valt in 8 AH." },
  { question: "Welke slag volgt op de overwinning op Mekka?", options: ["Ḥunayn", "Uḥud", "Badr"], answer: 0, explanation: "Correct. Daarna volgt Ḥunayn." },
  { question: "Welke expeditie hoort bij 9 AH?", options: ["Tabūk", "Muʾtah", "Khaybar"], answer: 0, explanation: "Juist. Tabūk hoort bij 9 AH." },
  { question: "Welke gebeurtenis staat bij 10 AH?", options: ["Afscheidsbedevaart", "Hijrah", "Grote boycot"], answer: 0, explanation: "Goed. 10 AH staat in het teken van de afscheidsbedevaart." },
  { question: "Wat gebeurde er in 11 AH?", options: ["Heengaan van de Profeet ﷺ", "Eerste openbaring", "Herbouw Kaʿbah"], answer: 0, explanation: "Correct. 11 AH markeert het aardse afscheid." },
  { question: "Welke onderwerpen komen na de chronologie aan bod?", options: ["Alleen geografie", "Uiterlijk, wonderen en karakter", "Alleen veldslagen"], answer: 1, explanation: "Juist. Daarna volgen beschrijvingen van zijn persoon." },
  { question: "Welke namen horen bij de ouders van de Profeet ﷺ?", options: ["ʿAbdullāh en Āminah", "Abū Ṭālib en Fāṭimah", "Ḥamzah en Ṣafiyyah"], answer: 0, explanation: "Correct. Dit zijn de namen die in de sīrah worden genoemd." },
  { question: "Wat is het doel van deze tijdlijn?", options: ["Alleen jaartallen onthouden", "Gebeurtenissen in volgorde begrijpen", "Alleen locaties uit het hoofd kennen"], answer: 1, explanation: "Goed. De focus ligt op samenhang in de gebeurtenissen." }
];

const scoreEl = document.getElementById("score");
const levelEl = document.getElementById("level");
const moduleCountEl = document.getElementById("moduleCount");
const timelineListEl = document.getElementById("timelineList");
const phaseDescriptionEl = document.getElementById("phaseDescription");
const subphaseDescriptionEl = document.getElementById("subphaseDescription");
const filterAllBtn = document.getElementById("filterAllBtn");
const filterBeforeBirthBtn = document.getElementById("filterBeforeBirthBtn");
const filterLifeBtn = document.getElementById("filterLifeBtn");

const orderBeforeBirthListEl = document.getElementById("orderBeforeBirthList");
const checkBeforeBirthBtn = document.getElementById("checkBeforeBirthBtn");
const shuffleBeforeBirthBtn = document.getElementById("shuffleBeforeBirthBtn");
const beforeBirthFeedbackEl = document.getElementById("beforeBirthFeedback");

const orderLifeListEl = document.getElementById("orderLifeList");
const checkLifeBtn = document.getElementById("checkLifeBtn");
const shuffleLifeBtn = document.getElementById("shuffleLifeBtn");
const lifeFeedbackEl = document.getElementById("lifeFeedback");

const quizQuestionEl = document.getElementById("quizQuestion");
const quizOptionsEl = document.getElementById("quizOptions");
const quizFeedbackEl = document.getElementById("quizFeedback");
const nextQuizBtn = document.getElementById("nextQuizBtn");

let score = 0;
let completedModules = 0;
let quizIndex = 0;
let quizLocked = false;
let activeFilter = "all";
let activeSubphaseId = null;

let beforeBirthOrder = [];
let lifeOrder = [];
let beforeBirthCompleted = false;
let lifeCompleted = false;
let quizCompleted = false;

const PHASE_DESCRIPTIONS = {
  all:
    "Hier zie je alle subfases van de sīrah: van de periode vóór de geboorte tot de gebeurtenissen en beschrijvingen uit zijn gezegende levensloop ﷺ.",
  before:
    "Hier zie je de aanloop naar zijn geboorte ﷺ: de context van al-Ḥidjāz, de lijn van Ibrāhīm en Ismāʿīl, de familielijn via Banū Hāshim en gebeurtenissen zoals het jaar van de olifant.",
  life:
    "Zijn levensloop ﷺ loopt van geboorte en openbaring in Mekka tot hijrah, opbouw van de gemeenschap in Medina en de grote mijlpalen tot aan de afscheidsfase."
};

function trackEvent(path, title) {
  if (window.goatcounter && typeof window.goatcounter.count === "function") {
    window.goatcounter.count({ path, title, event: true });
  }
}

function updateMeta() {
  scoreEl.textContent = String(score);
  moduleCountEl.textContent = `${completedModules}/3`;

  if (score >= 36) {
    levelEl.textContent = "Sira Mentor";
  } else if (score >= 22) {
    levelEl.textContent = "Sira Gevorderd";
  } else if (score >= 10) {
    levelEl.textContent = "Sira Leerling";
  } else {
    levelEl.textContent = "Starter";
  }
}

function addPoints(points) {
  score += points;
  updateMeta();
}

function completeModuleOnce(module) {
  if (module === "before-birth" && beforeBirthCompleted) return;
  if (module === "life" && lifeCompleted) return;
  if (module === "quiz" && quizCompleted) return;

  if (module === "before-birth") beforeBirthCompleted = true;
  if (module === "life") lifeCompleted = true;
  if (module === "quiz") quizCompleted = true;

  completedModules += 1;
  updateMeta();
}

function setFilter(filter) {
  activeFilter = filter;
  filterAllBtn.classList.toggle("active", filter === "all");
  filterAllBtn.classList.toggle("secondary", filter !== "all");
  filterBeforeBirthBtn.classList.toggle("active", filter === "before");
  filterBeforeBirthBtn.classList.toggle("secondary", filter !== "before");
  filterLifeBtn.classList.toggle("active", filter === "life");
  filterLifeBtn.classList.toggle("secondary", filter !== "life");
  phaseDescriptionEl.textContent = PHASE_DESCRIPTIONS[filter];
  activeSubphaseId = null;
  trackEvent(`sira-explorer/fase-${filter}`, `Sira Explorer fase ${filter}`);
  renderTimeline();
}

function getFilteredTimelineEvents() {
  return EVENTS.filter((event) => {
    if (activeFilter === "before") return event.period === "Voor de geboorte";
    if (activeFilter === "life") return event.period === "Leven van de Profeet ﷺ";
    return true;
  }).sort((a, b) => a.order - b.order);
}

function getSubphaseDescription(event) {
  return event.summary;
}

function renderTimeline() {
  timelineListEl.innerHTML = "";

  const list = getFilteredTimelineEvents();
  if (!list.length) {
    subphaseDescriptionEl.textContent = "";
    return;
  }
  if (activeSubphaseId === null || !list.some((event) => event.id === activeSubphaseId)) {
    activeSubphaseId = list[0].id;
  }

  list.forEach((event) => {
    const item = document.createElement("article");
    item.className = "timeline-item";
    const btn = document.createElement("button");
    btn.className = "timeline-item-btn";
    if (event.id === activeSubphaseId) {
      btn.classList.add("active");
    }
    btn.type = "button";
    btn.textContent = event.title;
    btn.addEventListener("click", () => {
      activeSubphaseId = event.id;
      renderTimeline();
      trackEvent(`sira-explorer/subfase-${event.id}`, `Sira Explorer subfase ${event.id}`);
    });

    const detail = document.createElement("p");
    detail.className = "timeline-detail";
    if (event.id === activeSubphaseId) {
      const description = getSubphaseDescription(event);
      detail.textContent = description;
      subphaseDescriptionEl.textContent = `${event.title} — ${description}`;
    } else {
      detail.hidden = true;
    }

    item.appendChild(btn);
    item.appendChild(detail);
    timelineListEl.appendChild(item);
  });
}

function getBeforeBirthEvents() {
  return EVENTS.filter((event) => event.period === "Voor de geboorte").slice(0, 7);
}

function getLifeEventsForGame() {
  const ids = [8, 12, 14, 17, 20, 24, 28, 31, 33, 36, 39, 40];
  return EVENTS.filter((event) => ids.includes(event.id)).sort((a, b) => a.order - b.order);
}

function shuffleArray(arr) {
  const clone = [...arr];
  for (let i = clone.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

function moveItem(items, index, direction) {
  const nextIndex = index + direction;
  [items[index], items[nextIndex]] = [items[nextIndex], items[index]];
}

function renderOrderList(container, items, onMove) {
  container.innerHTML = "";
  items.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "order-item";

    const label = document.createElement("span");
    label.textContent = `${item.title} (${item.year})`;

    const controls = document.createElement("div");
    controls.className = "order-controls";

    const up = document.createElement("button");
    up.className = "move-btn";
    up.type = "button";
    up.textContent = "Omhoog";
    up.disabled = index === 0;
    up.addEventListener("click", () => onMove(index, -1));

    const down = document.createElement("button");
    down.className = "move-btn";
    down.type = "button";
    down.textContent = "Omlaag";
    down.disabled = index === items.length - 1;
    down.addEventListener("click", () => onMove(index, 1));

    controls.appendChild(up);
    controls.appendChild(down);
    li.appendChild(label);
    li.appendChild(controls);
    container.appendChild(li);
  });
}

function setupOrderGames() {
  beforeBirthOrder = shuffleArray(getBeforeBirthEvents());
  lifeOrder = shuffleArray(getLifeEventsForGame());
  beforeBirthFeedbackEl.textContent = "";
  beforeBirthFeedbackEl.className = "feedback";
  lifeFeedbackEl.textContent = "";
  lifeFeedbackEl.className = "feedback";
  renderBeforeBirthOrder();
  renderLifeOrder();
}

function renderBeforeBirthOrder() {
  renderOrderList(orderBeforeBirthListEl, beforeBirthOrder, (index, direction) => {
    moveItem(beforeBirthOrder, index, direction);
    renderBeforeBirthOrder();
  });
}

function renderLifeOrder() {
  renderOrderList(orderLifeListEl, lifeOrder, (index, direction) => {
    moveItem(lifeOrder, index, direction);
    renderLifeOrder();
  });
}

function checkOrder(orderItems, correctItems) {
  return orderItems.every((item, index) => item.id === correctItems[index].id);
}

function renderQuiz() {
  const quiz = QUIZ_QUESTIONS[quizIndex];
  quizLocked = false;
  quizQuestionEl.textContent = quiz.question;
  quizFeedbackEl.textContent = "";
  quizFeedbackEl.className = "feedback";
  quizOptionsEl.innerHTML = "";

  quiz.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.type = "button";
    btn.textContent = option;
    btn.addEventListener("click", () => answerQuiz(index));
    quizOptionsEl.appendChild(btn);
  });
}

function answerQuiz(choice) {
  if (quizLocked) return;
  quizLocked = true;

  const quiz = QUIZ_QUESTIONS[quizIndex];
  const isCorrect = choice === quiz.answer;
  quizFeedbackEl.textContent = isCorrect
    ? `Correct. ${quiz.explanation}`
    : `Niet helemaal. ${quiz.explanation}`;
  quizFeedbackEl.className = `feedback ${isCorrect ? "good" : "bad"}`;

  if (isCorrect) {
    addPoints(2);
    trackEvent("sira-explorer/quiz-goed", "Sira Explorer quiz goed");
  } else {
    trackEvent("sira-explorer/quiz-fout", "Sira Explorer quiz fout");
  }

  Array.from(quizOptionsEl.children).forEach((button) => {
    button.disabled = true;
  });
}

filterAllBtn.addEventListener("click", () => setFilter("all"));
filterBeforeBirthBtn.addEventListener("click", () => setFilter("before"));
filterLifeBtn.addEventListener("click", () => setFilter("life"));

checkBeforeBirthBtn.addEventListener("click", () => {
  const correct = checkOrder(beforeBirthOrder, getBeforeBirthEvents());
  beforeBirthFeedbackEl.textContent = correct
    ? "Perfect. Je hebt de pre-geboorte chronologie goed gezet."
    : "Nog niet helemaal. Kijk opnieuw naar de volgorde.";
  beforeBirthFeedbackEl.className = `feedback ${correct ? "good" : "bad"}`;

  if (correct) {
    addPoints(6);
    completeModuleOnce("before-birth");
    trackEvent("sira-explorer/volgorde-voor-geboorte-goed", "Volgorde voor geboorte correct");
  } else {
    trackEvent("sira-explorer/volgorde-voor-geboorte-fout", "Volgorde voor geboorte fout");
  }
});

shuffleBeforeBirthBtn.addEventListener("click", () => {
  beforeBirthOrder = shuffleArray(getBeforeBirthEvents());
  renderBeforeBirthOrder();
  beforeBirthFeedbackEl.textContent = "";
  beforeBirthFeedbackEl.className = "feedback";
});

checkLifeBtn.addEventListener("click", () => {
  const correct = checkOrder(lifeOrder, getLifeEventsForGame());
  lifeFeedbackEl.textContent = correct
    ? "Goed gedaan. De levenslijn staat in de juiste volgorde."
    : "Nog niet correct. Probeer opnieuw met de mijlpalen.";
  lifeFeedbackEl.className = `feedback ${correct ? "good" : "bad"}`;

  if (correct) {
    addPoints(6);
    completeModuleOnce("life");
    trackEvent("sira-explorer/volgorde-leven-goed", "Volgorde leven correct");
  } else {
    trackEvent("sira-explorer/volgorde-leven-fout", "Volgorde leven fout");
  }
});

shuffleLifeBtn.addEventListener("click", () => {
  lifeOrder = shuffleArray(getLifeEventsForGame());
  renderLifeOrder();
  lifeFeedbackEl.textContent = "";
  lifeFeedbackEl.className = "feedback";
});

nextQuizBtn.addEventListener("click", () => {
  quizIndex = (quizIndex + 1) % QUIZ_QUESTIONS.length;
  renderQuiz();
  if (quizIndex === 0) {
    completeModuleOnce("quiz");
  }
});

function init() {
  setupOrderGames();
  setFilter("all");
  renderQuiz();
  updateMeta();
  trackEvent("sira-explorer/geopend", "Sira Explorer geopend");
}

init();
