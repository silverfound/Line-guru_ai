// Complete Teams & Captains Database in Pure Urdu
const teamsData = [
    // International & Associate Teams
    { name: "افغانستان", captains: { test: "رحمت شاہ", odi: "رحمت شاہ", t20: "راشد خان" } },
    { name: "آسٹریلیا", captains: { test: "پیٹ کمنز", odi: "مچل مارش", t20: "مچل مارش" } },
    { name: "بنگلہ دیش", captains: { test: "نجم الحسن شانتو", odi: "مہدی حسن میراز", t20: "لٹن داس" } },
    { name: "انگلینڈ", captains: { test: "بین اسٹوکس", odi: "ہیری بروک", t20: "ہیری بروک" } },
    { name: "انڈیا", captains: { test: "شبمن گل", odi: "شبمن گل", t20: "سوریہ کمار یادو" } },
    { name: "آئرلینڈ", captains: { test: "اینڈی بالبرنی", odi: "پال اسٹرلنگ", t20: "لورکن ٹکر" } },
    { name: "نیوزی لینڈ", captains: { test: "ٹام لیتھم", odi: "مچل سینٹنر", t20: "مچل سینٹنر" } },
    { name: "پاکستان", captains: { test: "شان مسعود", odi: "شاہین شاہ آفریدی", t20: "سلمان علی آغا" } },
    { name: "جنوبی افریقہ", captains: { test: "ٹেম্বا باووما", odi: "ٹেম্বا باووما", t20: "ایڈن مارکرم" } },
    { name: "سری لنکا", captains: { test: "دھننجایا ڈی سلوا", odi: "چارتھ اسالنکا", t20: "داسن شناکا" } },
    { name: "ویسٹ انڈیز", captains: { test: "روسٹن چیز", odi: "شائی ہوپ", t20: "شائی ہوپ" } },
    { name: "زمبابوے", captains: { test: "رچرڈ نگاراوا", odi: "رچرڈ نگاراوا", t20: "سکندر رضا" } },
    { name: "نمیبیا", captains: { test: "گیہارڈ ایراسمس", odi: "گیہارڈ ایراسمس", t20: "گیہارڈ ایراسمس" } },
    { name: "نیدرلینڈز", captains: { test: "اسکاٹ ایڈورڈز", odi: "اسکاٹ ایڈورڈز", t20: "اسکاٹ ایڈورڈز" } },
    { name: "امریکہ", captains: { test: "موننک پٹیل", odi: "موننک پٹیل", t20: "موننک پٹیل" } },
    { name: "عمان", captains: { test: "جتندر سنگھ", odi: "جتندر سنگھ", t20: "جتندر سنگھ" } },
    { name: "اسکاٹ لینڈ", captains: { test: "رچی بیرنگٹن", odi: "رچی بیرنگٹن", t20: "رچی بیرنگٹن" } },
    { name: "نیپال", captains: { test: "روہت پاوڈیل", odi: "روہت پاوڈیل", t20: "روہت پاوڈیل" } },
    { name: "اٹلی", captains: { test: "وین میڈسن", odi: "وین میڈسن", t20: "وین میڈسن" } },
    { name: "کینیڈا", captains: { test: "دلپریت باجوہ", odi: "دلپریت باجوہ", t20: "دلپریت باجوہ" } },
    { name: "متحدہ عرب امارات", captains: { test: "محمد وسیم", odi: "محمد وسیم", t20: "محمد وسیم" } },
    { name: "ہانگ کانگ", captains: { test: "نزاکت خان", odi: "نزاکت خان", t20: "نزاکت خان" } },
    { name: "پاپوا نیو گنی", captains: { test: "اسد والا", odi: "اسد والا", t20: "اسد والا" } },
    { name: "جرسی", captains: { test: "چارلس پرچارڈ", odi: "چارلس پرچارڈ", t20: "چارلس پرچارڈ" } },
    { name: "یوگنڈا", captains: { test: "برائن ماسابا", odi: "برائن ماسابا", t20: "برائن ماسابا" } },
    { name: "ملائیشیا", captains: { test: "احمد فیض", odi: "احمد فیض", t20: "احمد فیض" } },
    { name: "سنگاپور", captains: { test: "منپریت سنگھ", odi: "منپریت سنگھ", t20: "منپریت سنگھ" } },
    { name: "کینیا", captains: { test: "راکپ پٹیل", odi: "راکپ پٹیل", t20: "راکپ پٹیل" } },
    { name: "نائجیریا", captains: { test: "جوشوا آیاناائیکے", odi: "جوشوا آیاناائیکے", t20: "جوشوا آیاناائیکے" } },
    { name: "جرمنی", captains: { test: "روہت سنگھ", odi: "روہت سنگھ", t20: "روہت سنگھ" } },
    { name: "جاپان", captains: { test: "کینڈل کادوواکی فلیمنگ", odi: "کینڈل کادوواکی فلیمنگ", t20: "کینڈل کادوواکی فلیمنگ" } },
    { name: "اسپین", captains: { test: "کرسچن مونوز ملز", odi: "کرسچن مونوز ملز", t20: "کرسچن مونوز ملز" } },

    // Leagues Data
    { name: "انڈین پریمیئر لیگ - دہلی کیپیٹلز", captains: { test: "اکشر پٹیل", odi: "اکشر پٹیل", t20: "اکشر پٹیل" } },
    { name: "انڈین پریمیئر لیگ - گجرات ٹائٹنز", captains: { test: "شبمن گل", odi: "شبمن گل", t20: "شبمن گل" } },
    { name: "انڈین پریمیئر لیگ - کولکتہ نائٹ رائیڈرز", captains: { test: "اجنکیا رہانے", odi: "اجنکیا رہانے", t20: "اجنکیا رہانے" } },
    { name: "انڈین پریمیئر لیگ - لکھنؤ سپر جائنٹس", captains: { test: "رشبھ پنت", odi: "رشبھ پنت", t20: "رشبھ پنت" } },
    { name: "انڈین پریمیئر لیگ - پنجاب کنگز", captains: { test: "شریاس آئر", odi: "شریاس آئر", t20: "شریاس آئر" } },
    { name: "انڈین پریمیئر لیگ - راجستھان رائلز", captains: { test: "ریان پراگ", odi: "ریان پراگ", t20: "ریان پراگ" } },
    { name: "انڈین پریمیئر لیگ - سن رائزرز حیدرآباد", captains: { test: "ایشان کشن", odi: "ایشان کشن", t20: "ایشان کشن" } },

    { name: "پاکستان سپر لیگ - لاہور قلندرز", captains: { test: "شاہین شاہ آفریدی", odi: "شاہین شاہ آفریدی", t20: "شاہین شاہ آفریدی" } },
    { name: "پاکستان سپر لیگ - کراچی کنگز", captains: { test: "ڈیوڈ وارنر", odi: "ڈیوڈ وارنر", t20: "ڈیوڈ وارنر" } },
    { name: "پاکستان سپر لیگ - پشاور زلمی", captains: { test: "بابر اعظم", odi: "بابر اعظم", t20: "بابر اعظم" } },
    { name: "پاکستان سپر لیگ - ملتان سلطانز", captains: { test: "محمد رضوان", odi: "محمد رضوان", t20: "محمد رضوان" } },
    { name: "پاکستان سپر لیگ - کوئٹہ گلیڈی ایٹرز", captains: { test: "سعود شکیل", odi: "سعود شکیل", t20: "سعود شکیل" } },
    { name: "پاکستان سپر لیگ - اسلام آباد یونائیٹڈ", captains: { test: "شاداب خان", odi: "شاداب خان", t20: "شاداب خان" } },

    { name: "بگ بیش لیگ - ایڈیلیڈ اسٹرائیکرز", captains: { test: "میٹ شارٹ", odi: "میٹ شارٹ", t20: "میٹ شارٹ" } },
    { name: "بگ بیش لیگ - برسبین ہیٹ", captains: { test: "عثمان خواجہ", odi: "عثمان خواجہ", t20: "عثمان خواجہ" } },
    { name: "بگ بیش لیگ - ہوبارٹ ہریکینز", captains: { test: "نیتھن ایلس", odi: "نیتھن ایلس", t20: "نیتھن ایلس" } },
    { name: "بگ بیش لیگ - میلبورن رینیگیڈز", captains: { test: "ول سدرلینڈ", odi: "ول سدرلینڈ", t20: "ول سدرلینڈ" } },
    { name: "بگ بیش لیگ - میلبورن اسٹارز", captains: { test: "مارکس اسٹوئنس", odi: "مارکس اسٹوئنس", t20: "مارکس اسٹوئنس" } },
    { name: "بگ بیش لیگ - پرتھ اسکارچرز", captains: { test: "ایشٹن ٹرنر", odi: "ایشٹن ٹرنر", t20: "ایشٹن ٹرنر" } },
    { name: "بگ بیش لیگ - سڈنی سکسرز", captains: { test: "موئسس ہینرکس", odi: "موئسس ہینرکس", t20: "موئسس ہینرکس" } },
    { name: "بگ بیش لیگ - سڈنی تھنڈر", captains: { test: "ڈیوڈ وارنر", odi: "ڈیوڈ وارنر", t20: "ڈیوڈ وارنر" } },

    { name: "ایس اے ۲۰ - ڈربن سپر جائنٹس", captains: { test: "ایڈن مارکرم", odi: "ایڈن مارکرم", t20: "ایڈن مارکرم" } },
    { name: "ایس اے ۲۰ - جوبرگ سپر کنگز", captains: { test: "فاف ڈو پلیسی", odi: "فاف ڈو پلیسی", t20: "فاف ڈو پلیسی" } },
    { name: "ایس اے ۲۰ - ایم آئی کیپ ٹاؤن", captains: { test: "راشد خان", odi: "راشد خان", t20: "راشد خان" } },
    { name: "ایس اے ۲۰ - پارل رائلز", captains: { test: "ڈیوڈ ملر", odi: "ڈیوڈ ملر", t20: "ڈیوڈ ملر" } },
    { name: "ایس اے ۲۰ - پریٹوریا کیپیٹلز", captains: { test: "کیشو مہاراج", odi: "کیشو مہاراج", t20: "کیشو مہاراج" } },
    { name: "ایس اے ۲۰ - سن رائزرز ایسٹرن کیپ", captains: { test: "ٹرسٹن اسٹبز", odi: "ٹرسٹن اسٹبز", t20: "ٹرسٹن اسٹبز" } },

    { name: "میجر لیگ کرکٹ - ایم آئی نیویارک", captains: { test: "نکولس پورن", odi: "نکولس پورن", t20: "نکولس پورن" } },
    { name: "میجر لیگ کرکٹ - ٹیکساس سپر کنگز", captains: { test: "فاف ڈو پلیسی", odi: "فاف ڈو پلیسی", t20: "فاف ڈو پلیسی" } },
    { name: "میجر لیگ کرکٹ - واشنگٹن فریڈم", captains: { test: "اسٹیو اسمتھ", odi: "اسٹیو اسمتھ", t20: "اسٹیو اسمتھ" } },
    { name: "میجر لیگ کرکٹ - سان فرانسسکو یونی کورنز", captains: { test: "میتھیو شارٹ", odi: "میتھیو شارٹ", t20: "میتھیو شارٹ" } },
    { name: "میجر لیگ کرکٹ - سیئٹل اورکاز", captains: { test: "ہینرک کلاسن", odi: "ہینرک کلاسن", t20: "ہینرک کلاسن" } },
    { name: "میجر لیگ کرکٹ - لاس اینجلس نائٹ رائیڈرز", captains: { test: "جیسن ہولڈر", odi: "جیسن ہولڈر", t20: "جیسن ہولڈر" } },

    { name: "کیریبین پریمیئر لیگ - جمیکا کنگز مین", captains: { test: "روومین پاول", odi: "روومین پاول", t20: "روومین پاول" } },
    { name: "کیریبین پریمیئر لیگ - اینٹیگوا اینڈ باربوڈا فالکنز", captains: { test: "معین علی", odi: "معین علی", t20: "معین علی" } },
    { name: "کیریبین پریمیئر لیگ - ٹرنباگو نائٹ رائیڈرز", captains: { test: "نکولس پورن", odi: "نکولس پورن", t20: "نکولس پورن" } },
    { name: "کیریبین پریمیئر لیگ - سینٹ لوشیا کنگز", captains: { test: "روسٹن چیز", odi: "روسٹن چیز", t20: "روسٹن چیز" } },
    { name: "کیریبین پریمیئر لیگ - سینٹ کٹس اینڈ نیوس پیٹریاٹس", captains: { test: "جیسن ہولڈر", odi: "جیسن ہولڈر", t20: "جیسن ہولڈر" } },
    { name: "کیریبین پریمیئر لیگ - گیانا ایمیزون واریئرز", captains: { test: "عمران طاہر", odi: "عمران طاہر", t20: "عمران طاہر" } },
    { name: "کیریبین پریمیئر لیگ - بارباڈوس ٹرائیڈنٹس", captains: { test: "روومین پاول", odi: "روومین پاول", t20: "روومین پاول" } },

    { name: "انٹرنیشنل لیگ ٹی ۲۰ - ابوظہبی نائٹ رائیڈرز", captains: { test: "جیسن ہولڈر", odi: "جیسن ہولڈر", t20: "جیسن ہولڈر" } },
    { name: "انٹرنیشنل لیگ ٹی ۲۰ - ڈیزرٹ وائپرز", captains: { test: "لاکی فرگوسن", odi: "لاکی فرگوسن", t20: "لاکی فرگوسن" } },
    { name: "انٹرنیشنل لیگ ٹی ۲۰ - دبئی کیپیٹلز", captains: { test: "ڈیوڈ وارنر", odi: "ڈیوڈ وارنر", t20: "ڈیوڈ وارنر" } },
    { name: "انٹرنیشنل لیگ ٹی ۲۰ - گلف جائنٹس", captains: { test: "جیمز ونس", odi: "جیمز ونس", t20: "جیمز ونس" } },
    { name: "انٹرنیشنل لیگ ٹی ۲۰ - ایم آئی ایمریٹس", captains: { test: "نکولس پورن", odi: "نکولس پورن", t20: "نکولس پورن" } },
    { name: "انٹرنیشنل لیگ ٹی ۲۰ - شارجہ واریئرز", captains: { test: "ٹام کوہلر کیڈمور", odi: "ٹام کوہلر کیڈمور", t20: "ٹام کوہلر کیڈمور" } },

    { name: "لنکا پریمیئر لیگ - کولمبو کیپس", captains: { test: "کوسل مینڈس", odi: "کوسل مینڈس", t20: "کوسل مینڈس" } },
    { name: "لنکا پریمیئر لیگ - دمبولا سکسز", captains: { test: "دنیش چندیمل", odi: "دنیش چندیمل", t20: "دنیش چندیمل" } },
    { name: "لنکا پریمیئر لیگ - گال گیلنٹس", captains: { test: "داسن شناکا", odi: "داسن شناکا", t20: "داسن شناکا" } },
    { name: "لنکا پریمیئر لیگ - جافنا کنگز", captains: { test: "بھانوکا راجاپکسا", odi: "بھانوکا راجاپکسا", t20: "بھانوکا راجاپکسا" } },
    { name: "لنکا پریمیئر لیگ - کینڈی رائلز", captains: { test: "اینجلو میتھیوز", odi: "اینجلو میتھیوز", t20: "اینجلو میتھیوز" } },

    { name: "بنگلہ دیش پریمیئر لیگ - چٹوگرام رائلز", captains: { test: "مہدی حسن", odi: "مہدی حسن", t20: "مہدی حسن" } },
    { name: "بنگلہ دیش پریمیئر لیگ - ڈھاکہ کیپیٹلز", captains: { test: "محمد متھن", odi: "محمد متھن", t20: "محمد متھن" } },
    { name: "بنگلہ دیش پریمیئر لیگ - نوکھالی ایکسپریس", captains: { test: "شائکت علی", odi: "شائکت علی", t20: "شائکت علی" } },
    { name: "بنگلہ دیش پریمیئر لیگ - راجشاہی واریئرز", captains: { test: "نجم الحسن شانتو", odi: "نجم الحسن شانتو", t20: "نجم الحسن شانتو" } },
    { name: "بنگلہ دیش پریمیئر لیگ - رنگپور رائیڈرز", captains: { test: "نورالحسن", odi: "نورالحسن", t20: "نورالحسن" } },
    { name: "بنگلہ دیش پریمیئر لیگ - سلہٹ ٹائٹنز", captains: { test: "مہدی حسن میراز", odi: "مہدی حسن میراز", t20: "مہدی حسن میراز" } },

    { name: "دی ہنڈرڈ - برمنگھم فینکس", captains: { test: "جیکب بیتھل", odi: "جیکب بیتھل", t20: "جیکب بیتھل" } },
    { name: "دی ہنڈرڈ - لندن اسپرٹ", captains: { test: "ہیری بروک", odi: "ہیری بروک", t20: "ہیری بروک" } },
    { name: "دی ہنڈرڈ - مانچسٹر سپر جائنٹس", captains: { test: "ایڈن مارکرم", odi: "ایڈن مارکرم", t20: "ایڈن مارکرم" } },
    { name: "دی ہنڈرڈ - ایم آئی لندن", captains: { test: "سیم کرن", odi: "سیم کرن", t20: "سیم کرن" } },
    { name: "دی ہنڈرڈ - سدرن بریو", captains: { test: "جیمز ونس", odi: "جیمز ونس", t20: "جیمز ونس" } },
    { name: "دی ہنڈرڈ - سن رائزرز لیڈز", captains: { test: "ہیری بروک", odi: "ہیری بروک", t20: "ہیری بروک" } },
    { name: "دی ہنڈرڈ - ٹرینٹ راکٹس", captains: { test: "سیم بلنگز", odi: "سیم بلنگز", t20: "سیم بلنگز" } },
    { name: "دی ہنڈرڈ - ویلش فائر", captains: { test: "فل سالٹ", odi: "فل سالٹ", t20: "فل سالٹ" } }
];

// Populate Team Dropdowns on Page Load
document.addEventListener("DOMContentLoaded", () => {
    populateTeamDropdowns();
    let timeField = document.getElementById("matchTime");
    if (timeField) {
        timeField.addEventListener("change", autoEstimateLunarDate);
        timeField.addEventListener("input", autoEstimateLunarDate);
    }
});

function populateTeamDropdowns() {
    let t1Select = document.getElementById("team1Select");
    let t2Select = document.getElementById("team2Select");
    
    if (!t1Select || !t2Select) return;

    t1Select.innerHTML = '<option value="">-- ٹیم کا انتخاب کریں --</option>';
    t2Select.innerHTML = '<option value="">-- ٹیم کا انتخاب کریں --</option>';

    teamsData.forEach((team, index) => {
        let opt1 = document.createElement("option");
        opt1.value = index;
        opt1.textContent = team.name;
        t1Select.appendChild(opt1);

        let opt2 = document.createElement("option");
        opt2.value = index;
        opt2.textContent = team.name;
        t2Select.appendChild(opt2);
    });
}

function onTeam1Change() {
    let t1Select = document.getElementById("team1Select");
    let format = document.getElementById("matchFormat").value;
    let teamInput = document.getElementById("team1");
    let captainInput = document.getElementById("captain1");

    if (t1Select.value !== "") {
        let selectedTeam = teamsData[t1Select.value];
        teamInput.value = selectedTeam.name;
        captainInput.value = selectedTeam.captains[format] || selectedTeam.captains['t20'] || "";
    } else {
        teamInput.value = "";
        captainInput.value = "";
    }
}

function onTeam2Change() {
    let t2Select = document.getElementById("team2Select");
    let format = document.getElementById("matchFormat").value;
    let teamInput = document.getElementById("team2");
    let captainInput = document.getElementById("captain2");

    if (t2Select.value !== "") {
        let selectedTeam = teamsData[t2Select.value];
        teamInput.value = selectedTeam.name;
        captainInput.value = selectedTeam.captains[format] || selectedTeam.captains['t20'] || "";
    } else {
        teamInput.value = "";
        captainInput.value = "";
    }
}

function updateFormatCaptains() {
    onTeam1Change();
    onTeam2Change();
}

// Asli Arabic / Urdu Abjad-e-Kabeer Table (Jumtal-Jummal)
function getUrduAbjadValue(text) {
    if (!text) return 1;
    let cleanText = text.trim();
    
    let abjadMap = {
        'ا': 1, 'أ': 1, 'إ': 1, 'آ': 1, 'ب': 2, 'ج': 3, 'د': 4,
        'ه': 5, 'و': 6, 'ز': 7, 'ح': 8, 'ط': 9, 'ي': 10, 'ی': 10, 'ئ': 10,
        'ك': 20, 'ک': 20, 'ل': 30, 'م': 40, 'ن': 50, 'س': 60, 'ع': 70,
        'ف': 80, 'ص': 90, 'ق': 100, 'ر': 200, 'ش': 300, 'ت': 400,
        'ث': 500, 'خ': 600, 'ذ': 700, 'ض': 800, 'ظ': 900, 'غ': 1000,
        'پ': 2, 'چ': 3, 'ژ': 7, 'گ': 20, 'ڈ': 4, 'ڑ': 200, 'ں': 50, 'ھ': 5, 'ۃ': 5, 'ۀ': 5
    };

    let totalSum = 0;
    for (let i = 0; i < cleanText.length; i++) {
        let char = cleanText[i];
        if (abjadMap[char]) {
            totalSum += abjadMap[char];
        }
    }

    if (totalSum === 0) return 1;

    let sum = totalSum;
    while (sum > 9) {
        let tempSum = 0;
        let strNum = sum.toString();
        for (let j = 0; j < strNum.length; j++) {
            tempSum += parseInt(strNum[j]);
        }
        sum = tempSum;
    }
    return sum;
}

function getZodiacElement(val) {
    const elements = ["آتشي (Fire)", "خاكي (Earth)", "هوائي (Air)", "آبي (Water)"];
    return elements[val % 4];
}

function getSolarLunarType(text) {
    if (!text) return "qamari";
    let firstChar = text.trim()[0];
    let shamsiChars = ['ت', 'ث', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ل', 'ن'];
    if (shamsiChars.includes(firstChar)) {
        return "shamsi";
    }
    return "qamari";
}

function autoEstimateLunarDate() {
    let matchTimeInput = document.getElementById("matchTime").value;
    let lunarInput = document.getElementById("lunarDate");
    
    if (matchTimeInput && lunarInput) {
        let dateObj = new Date(matchTimeInput);
        if (!isNaN(dateObj.getTime())) {
            let dayOfMonth = dateObj.getDate();
            let estimatedLunar = (dayOfMonth % 29) + 1; 
            lunarInput.value = estimatedLunar;
        }
    }
}

function startPredictionAnimation() {
    let loader = document.getElementById("loaderBox");
    let resultBox = document.getElementById("resultBox");
    
    if (loader) loader.classList.remove("hidden");
    if (resultBox) resultBox.classList.add("hidden");
    
    setTimeout(() => {
        if (loader) loader.classList.add("hidden");
        calculatePrediction();
    }, 800);
}

function calculatePrediction() {
    let team1 = document.getElementById("team1").value || document.getElementById("team1Select").options[document.getElementById("team1Select").selectedIndex].text;
    let captain1 = document.getElementById("captain1").value || "Captain 1";
    let team2 = document.getElementById("team2").value || document.getElementById("team2Select").options[document.getElementById("team2Select").selectedIndex].text;
    let captain2 = document.getElementById("captain2").value || "Captain 2";
    let ground = document.getElementById("ground") ? document.getElementById("ground").value : "شارجه";
    let matchTimeInput = document.getElementById("matchTime") ? document.getElementById("matchTime").value : "";
    let matchFormat = document.getElementById("matchFormat") ? document.getElementById("matchFormat").value : "t20";
    let tossWinnerChoice = document.getElementById("tossWinner").value;
    
    let lunarDateVal = parseInt(document.getElementById("lunarDate") ? document.getElementById("lunarDate").value : 15) || 15;

    let tossWinnerName = (tossWinnerChoice === "captain1") ? captain1 : captain2;
    let tossTeam = (tossWinnerChoice === "captain1") ? team1 : team2;

    let t1Val = getUrduAbjadValue(team1);
    let c1Val = getUrduAbjadValue(captain1);
    let t2Val = getUrduAbjadValue(team2);
    let c2Val = getUrduAbjadValue(captain2);
    let groundVal = getUrduAbjadValue(ground);

    let t1Element = getZodiacElement(t1Val);
    let t2Element = getZodiacElement(t2Val);

    let dayFactor1 = 1, dayFactor2 = 1, timeScoreBonus1 = 0, timeScoreBonus2 = 0;
    let activePlanet = "مشتری";
    let earlyPressureTeam = tossTeam;
    let hour = 12;

    let c1TossPower = c1Val;
    let c2TossPower = c2Val;
    let predictedTossWinner = captain1;
    let predictedTossTeam = team1;

    let baseScore1 = 165;
    let baseScore2 = 155;
    let formatLabel = "ٹی ٹوئنٹی میچ";

    if (matchFormat === "odi") {
        baseScore1 = 285;
        baseScore2 = 270;
        formatLabel = "یک روزہ میچ (ODI)";
    } else if (matchFormat === "test") {
        baseScore1 = 350;
        baseScore2 = 320;
        formatLabel = "ٹیسٹ میچ (فی اننگز)";
    }

    if (matchTimeInput) {
        let dateObj = new Date(matchTimeInput);
        if (!isNaN(dateObj.getTime())) {
            let dayOfWeek = dateObj.getDay(); 
            hour = dateObj.getHours();    
            
            if (dayOfWeek % 2 === 0) {
                dayFactor1 = 2;
                c1TossPower += 2;
            } else {
                dayFactor2 = 2;
                c2TossPower += 2;
            }

            const planets = [
                "زحل", "مشتری", "مریخ", 
                "شمس (سورج)", "زہرہ", "عطارد", "قمر (چاند)"
            ];
            activePlanet = planets[hour % planets.length];

            let lunarEnergyEffect = (lunarDateVal >= 13 && lunarDateVal <= 17) ? 4 : 2; 

            let t1Type = getSolarLunarType(team1);
            let t2Type = getSolarLunarType(team2);

            let planetaryBonus1 = (t1Type === "shamsi" && (hour >= 6 && hour <= 18)) ? 3 : 2;
            let planetaryBonus2 = (t2Type === "qamari" && (hour < 6 || hour > 18)) ? 3 : 2;

            if (hour >= 12) {
                timeScoreBonus1 = ((hour % 3) + planetaryBonus1) * lunarEnergyEffect;
                timeScoreBonus2 = ((hour % 2) + planetaryBonus2) * lunarEnergyEffect;
                c1TossPower += (hour % 3);
                c2TossPower += (hour % 2);
            } else {
                timeScoreBonus1 = ((hour % 2) + planetaryBonus1) * lunarEnergyEffect;
                timeScoreBonus2 = ((hour % 3) + planetaryBonus2) * lunarEnergyEffect;
                c1TossPower += (hour % 2);
                c2TossPower += (hour % 3);
            }

            if (timeScoreBonus2 > timeScoreBonus1) {
                earlyPressureTeam = team2;
            } else {
                earlyPressureTeam = team1;
            }
        }
    }

    if (c2TossPower > c1TossPower) {
        predictedTossWinner = captain2;
        predictedTossTeam = team2;
    } else {
        predictedTossWinner = captain1;
        predictedTossTeam = team1;
    }

    let tossCaptainChar = tossWinnerName.trim()[0] || 'ا';
    let isShamsiCaptain = ['ت', 'ث', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ل', 'ن'].includes(tossCaptainChar);
    
    let tossImpactScore = 0;
    let tossImpactText = "";
    let isDayTime = (hour >= 6 && hour < 18);

    if ((isShamsiCaptain && isDayTime) || (!isShamsiCaptain && !isDayTime)) {
        tossImpactScore = 10; 
        tossImpactText = `کپتان (${tossWinnerName}) کے برج اور ساعت کی حروفی موافقت کی وجہ سے سکہ جیتنے پر ان کے ستارے کو **قوی جفری طاقت (Positive Energy)** ملی ہے!`;
    } else {
        tossImpactScore = -8; 
        tossImpactText = `سکہ (${tossTeam}) کے جیتنے کے باوجود وقت کی ساعت اور برج کے اختلاف کی وجہ سے ان کے ستارے پر **دباؤ (Jafri Pressure)** درج کیا گیا ہے۔`;
    }

    let zodicBoost1 = (t1Element.includes("آتشي") || t1Element.includes("هوائي")) ? 5 : 2;
    let zodicBoost2 = (t2Element.includes("آتشي") || t2Element.includes("هوائي")) ? 5 : 2;

    let score1 = (t1Val * dayFactor1) + c1Val + Math.floor(groundVal / 2) + timeScoreBonus1 + zodicBoost1 + (tossWinnerChoice === "captain1" ? tossImpactScore : 0);
    let score2 = (t2Val * dayFactor2) + c2Val + Math.floor(groundVal / 2) + timeScoreBonus2 + zodicBoost2 + (tossWinnerChoice === "captain2" ? tossImpactScore : 0);

    let winningTeam = (score1 >= score2) ? team1 : team2;

    let multiplier = (matchFormat === "odi") ? 1.8 : (matchFormat === "test" ? 2.5 : 1);
    let estimatedTotal1 = Math.round(baseScore1 + (groundVal * multiplier) + ((score1 - score2) > 0 ? (score1 - score2) * 2 : 5));
    let estimatedTotal2 = Math.round(baseScore2 + (groundVal * (multiplier * 0.9)) + (lunarDateVal > 15 ? 12 : -5));
    let rangeSpan = (matchFormat === "test") ? 40 : (matchFormat === "odi" ? 25 : 15);

    let analysisHTML = `
        <div class="analysis-section" style="border-right: 4px solid #38bdf8; background: rgba(56, 189, 248, 0.1); padding: 12px; margin-bottom: 12px; border-radius: 6px; text-align: right; direction: rtl;">
            <strong>🪙 سکہ اچھالنے کا فیصلہ:</strong> 
            <br>حاکم سیارہ <span style="color: #38bdf8; font-weight: bold;">${activePlanet}</span> کی روشنی میں، کپتانوں (${captain1} بمقابلہ ${captain2}) کی ابجد پاور کے حساب سے سکہ جیتنے کی سب سے زیادہ صلاحیت <span style="color: #38bdf8; font-weight: bold;">${predictedTossWinner} (${predictedTossTeam})</span> ہے۔
            <br><br>✨🔮 **جفری و برج کا اثر:** ${tossImpactText}
        </div>

        <div class="analysis-section" style="border-right: 4px solid #a855f7; background: rgba(168, 85, 247, 0.1); padding: 12px; margin-bottom: 12px; border-radius: 6px; text-align: right; direction: rtl;">
            <strong>📊 ٹوٹل سکور کا تخمینہ (${formatLabel}):</strong> 
            <br>• پہلی اننگز کا متوقع اسکور: <span style="color: #a855f7; font-weight: bold;">${estimatedTotal1} سے ${estimatedTotal1 + rangeSpan} رنز</span>
            <br>• دوسری اننگز کا ہدف یا رینج: <span style="color: #a855f7; font-weight: bold;">${estimatedTotal2} سے ${estimatedTotal2 + rangeSpan} رنز</span>
        </div>

        <div class="analysis-section" style="text-align: right; direction: rtl; margin-bottom: 12px; padding: 8px;">
            <strong>🏟️ گراؤنڈ، عنصر اور ساعت:</strong> 
            <br>• ٹیم 1 عنصر: <span style="color: #38bdf8;">${t1Element}</span> | ٹیم 2 عنصر: <span style="color: #38bdf8;">${t1Element}</span>
            <br>• حاکم سیارہ: <span style="color: #38bdf8;">${activePlanet}</span>، چاند کی <span style="color: #38bdf8;">${lunarDateVal}</span> تاریخ اور گراؤنڈ (${ground})۔
        </div>

        <div class="analysis-section" style="text-align: right; direction: rtl; margin-bottom: 12px; padding: 8px;">
            <strong>⚡ میچ کا آغاز اور دباؤ:</strong> 
            <br>• شروعاتی اوورز (ابتدائی دباؤ): ساعت اور جفری توانائی کے تحت <span style="color: #38bdf8;">${earlyPressureTeam}</span> شروعات میں میچ پر حاوی رہ سکتی ہے۔
            <br>• جفری طاقتی وزن: ٹیم 1 (${score1}) بمقابلہ ٹیم 2 (${score2})۔
        </div>

        <div class="analysis-section" style="border-top: 1px dashed #334155; padding-top: 12px; margin-top: 10px; text-align: right; direction: rtl;">
            <strong>🔮 ستاروں کا حتمی نتیجہ:</strong> 
            <br>بروج، عناصر اور ساعت کے گہرے جفری حساب کے بعد، وقت کی پوری توانائی کے مطابق آخر میں <strong style="color: #38bdf8;">${winningTeam}</strong> فتح اپنے نام کرے گی!
        </div>
    `;

    document.getElementById("outputContent").innerHTML = analysisHTML;
    document.getElementById("resultBox").classList.remove("hidden");
}
