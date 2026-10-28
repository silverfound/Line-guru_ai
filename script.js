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
    { name: "جنوبی افریقہ", captains: { test: "ٹیمبا باووما", odi: "ٹیمبا باووما", t20: "ایڈن مارکرم" } },
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
    { name: "میجر لیگ کرکٹ - لاس انجلس نائٹ رائیڈرز", captains: { test: "جیسن ہولڈر", odi: "جیسن ہولڈر", t20: "جیسن ہولڈر" } },

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

// ==========================================
// ASLI AUTHENTIC ABJAD-E-KABEER (Full Jumtal-Jummal)
// ==========================================
function getUrduAbjadValue(text) {
    if (!text) return 10;
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

    return totalSum > 0 ? totalSum : 10;
}

function getAbjadElement(val) {
    const elements = ["آتشی (Fire)", "خاکی (Earth)", "ہوائی (Air)", "آبی (Water)"];
    return elements[((val % 4) + 4) % 4];
}

function escapeHTML(value) {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return String(value).replace(/[&<>"']/g, char => entities[char]);
}

// Gregorian day-of-month is not a reliable Hijri-date conversion.
// Keep the lunar date as a manual input unless a verified Hijri calendar/API is integrated.
function autoEstimateLunarDate() {
    // Intentionally no-op.
}

function getPlanetaryHour(matchTimeValue, sunriseValue, sunsetValue) {
    if (!matchTimeValue || !sunriseValue || !sunsetValue) return null;
    const match = new Date(matchTimeValue);
    if (Number.isNaN(match.getTime())) return null;
    const date = new Date(match.getFullYear(), match.getMonth(), match.getDate());
    const makeAt = (base, time) => {
        const parts = time.split(":").map(Number);
        const d = new Date(base);
        d.setHours(parts[0], parts[1], 0, 0);
        return d;
    };
    const sunrise = makeAt(date, sunriseValue);
    const sunset = makeAt(date, sunsetValue);
    if (sunset <= sunrise) return null;
    const tomorrow = new Date(date);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const nextSunrise = makeAt(tomorrow, sunriseValue);
    const yesterday = new Date(date);
    yesterday.setDate(yesterday.getDate() - 1);
    const previousSunset = makeAt(yesterday, sunsetValue);
    let weekday = date.getDay();
    // Before sunrise, the current hour belongs to the previous night and weekday.
    if (match < sunrise) weekday = (weekday + 6) % 7;
    // Chaldean order, beginning each weekday with that day's traditional ruler.
    const sequence = ["زحل (Saturn)", "مشتری (Jupiter)", "مریخ (Mars)", "شمس (Sun)", "زہرہ (Venus)", "عطارد (Mercury)", "قمر (Moon)"];
    const dayRulerIndex = [3, 6, 2, 5, 1, 4, 0][weekday];
    let elapsed, segmentLength, hourNumber;
    if (match >= sunrise && match < sunset) {
        elapsed = match - sunrise;
        segmentLength = (sunset - sunrise) / 12;
        hourNumber = Math.floor(elapsed / segmentLength);
    } else {
        const nightStart = match >= sunset ? sunset : previousSunset;
        const nightEnd = match >= sunset ? nextSunrise : sunrise;
        if (match < nightStart || match >= nightEnd) return null;
        elapsed = match - nightStart;
        segmentLength = (nightEnd - nightStart) / 12;
        hourNumber = 12 + Math.floor(elapsed / segmentLength);
    }
    const rulers = [];
    for (let i = 0; i < 24; i++) rulers.push(sequence[(dayRulerIndex + i) % 7]);
    return { number: Math.min(24, hourNumber + 1), planet: rulers[Math.min(23, hourNumber)], type: hourNumber < 12 ? "دن" : "رات" };
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
    let sunriseInput = document.getElementById("sunriseTime") ? document.getElementById("sunriseTime").value : "";
    let sunsetInput = document.getElementById("sunsetTime") ? document.getElementById("sunsetTime").value : "";

    if (!team1.trim() || !team2.trim() || !captain1.trim() || !captain2.trim()) {
        alert("براہِ کرم دونوں ٹیمیں اور دونوں کپتان درج/منتخب کریں۔");
        return;
    }
    if (team1.trim() === team2.trim()) {
        alert("براہِ کرم دو مختلف ٹیمیں منتخب کریں۔");
        return;
    }
    
    let lunarDateVal = parseInt(document.getElementById("lunarDate") ? document.getElementById("lunarDate").value : 15, 10);
    if (!Number.isInteger(lunarDateVal) || lunarDateVal < 1 || lunarDateVal > 30) {
        alert("قمری تاریخ 1 سے 30 کے درمیان درج کریں۔");
        return;
    }

    // Full Authentic Abjad Values
    let t1Val = getUrduAbjadValue(team1);
    let c1Val = getUrduAbjadValue(captain1);
    let t2Val = getUrduAbjadValue(team2);
    let c2Val = getUrduAbjadValue(captain2);
    let groundVal = getUrduAbjadValue(ground);

    let t1Element = getAbjadElement(t1Val);
    let t2Element = getAbjadElement(t2Val);

    let matchDayName = "اتوار";
    let dayRulingPlanet = "شمس (سورج)";
    let dayIndex = 0;

    // Base scores per format
    let baseScore1 = 165;
    let baseScore2 = 165;
    let formatLabel = "ٹی ٹوئنٹی میچ";

    if (matchFormat === "odi") {
        baseScore1 = 285;
        baseScore2 = 285;
        formatLabel = "یک روزہ میچ (ODI)";
    } else if (matchFormat === "test") {
        baseScore1 = 350;
        baseScore2 = 350;
        formatLabel = "ٹیسٹ میچ (فی اننگز)";
    }

    if (matchTimeInput) {
        let dateObj = new Date(matchTimeInput);
        if (!isNaN(dateObj.getTime())) {
            dayIndex = dateObj.getDay(); // 0 = Sunday, 1 = Monday, etc.
            const daysInUrdu = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
            const dayPlanets = [
                "شمس (سورج) - اتوار", 
                "قمر (چاند) - پیر", 
                "مریخ - منگل", 
                "عطارد - بدھ", 
                "مشتری - جمعرات", 
                "زہرہ - جمعہ", 
                "زحل - ہفتہ"
            ];
            matchDayName = daysInUrdu[dayIndex];
            dayRulingPlanet = dayPlanets[dayIndex];
        }
    }

    const planetaryHour = getPlanetaryHour(matchTimeInput, sunriseInput, sunsetInput);

    // Combined weighted model: Abjad remains primary; other factors act as smaller modifiers.
    // This is a transparent numerology heuristic, not a scientifically validated predictor.
    const weights = { teamAbjad: 50, captainAbjad: 25, ground: 10, weekday: 7, planetaryHour: 5, lunarDate: 3 };
    const circularResonance = (value, factor, cycle = 7) => {
        const a = ((value % cycle) + cycle) % cycle;
        const b = ((factor % cycle) + cycle) % cycle;
        const distance = Math.min(Math.abs(a - b), cycle - Math.abs(a - b));
        return 1 - distance / Math.floor(cycle / 2);
    };
    const dayFactorIndex = dayIndex;
    const hourPlanetOrder = ["زحل (Saturn)", "مشتری (Jupiter)", "مریخ (Mars)", "شمس (Sun)", "زہرہ (Venus)", "عطارد (Mercury)", "قمر (Moon)"];
    const hourFactorIndex = planetaryHour ? Math.max(0, hourPlanetOrder.indexOf(planetaryHour.planet)) : null;
    const teamBase1 = ((t1Val % 100) * weights.teamAbjad / 100) + ((c1Val % 100) * weights.captainAbjad / 100);
    const teamBase2 = ((t2Val % 100) * weights.teamAbjad / 100) + ((c2Val % 100) * weights.captainAbjad / 100);
    const supportingScore = (teamVal, captainVal) => {
        const signature = teamVal + captainVal;
        const groundPart = circularResonance(signature, groundVal) * weights.ground;
        const weekdayPart = circularResonance(signature, dayFactorIndex) * weights.weekday;
        const hourPart = hourFactorIndex === null ? 0 : circularResonance(signature, hourFactorIndex) * weights.planetaryHour;
        const lunarPart = circularResonance(signature, lunarDateVal) * weights.lunarDate;
        return { groundPart, weekdayPart, hourPart, lunarPart, total: groundPart + weekdayPart + hourPart + lunarPart };
    };
    const factors1 = supportingScore(t1Val, c1Val);
    const factors2 = supportingScore(t2Val, c2Val);
    const score1 = teamBase1 + factors1.total;
    const score2 = teamBase2 + factors2.total;
    // If planetary-hour data is unavailable, its 5 points are omitted safely.
    // The remaining active factors total 95 points; no crash and no invented hour.
    const activeWeightTotal = weights.teamAbjad + weights.captainAbjad + weights.ground +
        weights.weekday + (hourFactorIndex === null ? 0 : weights.planetaryHour) + weights.lunarDate;

    // Toss calculation independent of user choice
    let predictedTossWinner = (c1Val >= c2Val) ? captain1 : captain2;
    let predictedTossTeam = (c1Val >= c2Val) ? team1 : team2;

    let tossWinnerName = (tossWinnerChoice === "captain1") ? captain1 : captain2;
    let tossTeam = (tossWinnerChoice === "captain1") ? team1 : team2;

    let tossImpactText = `آپ نے ٹاس کی معلومات کے لیے (${tossTeam}) منتخب کی ہے۔ یہ انتخاب میچ کے فاتح کے حساب پر اثر انداز نہیں ہوتا۔`;
    const planetaryHourText = planetaryHour
        ? `${planetaryHour.type} کا ${planetaryHour.number} واں سیارہ وار وقت — ${planetaryHour.planet}`
        : "سیاروی ساعت نہیں نکالی گئی؛ درست میچ تاریخ، مقامی طلوعِ آفتاب اور غروبِ آفتاب درج کریں۔";

    let winningTeam = (Math.abs(score1 - score2) < 0.01) ? "برابر / واضح برتری نہیں" : ((score1 > score2) ? team1 : team2);

    let multiplier = (matchFormat === "odi") ? 1.8 : (matchFormat === "test" ? 2.5 : 1);
    // Use the same estimation formula for both teams.
    let estimatedTotal1 = Math.round(baseScore1 + ((t1Val + c1Val + groundVal) % 30) * multiplier);
    let estimatedTotal2 = Math.round(baseScore2 + ((t2Val + c2Val + groundVal) % 30) * multiplier);
    let rangeSpan = (matchFormat === "test") ? 40 : (matchFormat === "odi" ? 25 : 15);

    let analysisHTML = `
        <div class="analysis-section" style="border-right: 4px solid #38bdf8; background: rgba(56, 189, 248, 0.1); padding: 12px; margin-bottom: 12px; border-radius: 6px; text-align: right; direction: rtl;">
            <strong>🪙 ٹاس کی پیشگوئی (Toss Prediction):</strong> 
            <br>میچ کے دن (<span style="color: #38bdf8; font-weight: bold;">${matchDayName}</span>) اور کپتانوں کے ابجدی مجموعے کی بنیاد پر ٹاس کا اندازہ <span style="color: #38bdf8; font-weight: bold;">${escapeHTML(predictedTossWinner)} (${escapeHTML(predictedTossTeam)})</span> کی ہے۔
            <br><br>✨ **صارف کا ٹاس انتخاب:** ${escapeHTML(tossImpactText)}
        </div>

        <div class="analysis-section" style="border-right: 4px solid #a855f7; background: rgba(168, 85, 247, 0.1); padding: 12px; margin-bottom: 12px; border-radius: 6px; text-align: right; direction: rtl;">
            <strong>📊 ٹوٹل سکور کا تخمینہ (${formatLabel}):</strong> 
            <br>• پہلی اننگز کا متوقع اسکور: <span style="color: #a855f7; font-weight: bold;">${estimatedTotal1} سے ${estimatedTotal1 + rangeSpan} رنز</span>
            <br>• دوسری اننگز کا ہدف یا رینج: <span style="color: #a855f7; font-weight: bold;">${estimatedTotal2} سے ${estimatedTotal2 + rangeSpan} رنز</span>
        </div>

        <div class="analysis-section" style="text-align: right; direction: rtl; margin-bottom: 12px; padding: 8px;">
            <strong>📅 میچ کا دن اور روایتی حاکم سیارہ:</strong> 
            <br>• میچ کا دن: <span style="color: #38bdf8;">${matchDayName}</span> | حاکم سیارہ: <span style="color: #38bdf8;">${dayRulingPlanet}</span>
            <br>• ٹیم 1 ابجدی عنصر: <span style="color: #38bdf8;">${t1Element}</span> | ٹیم 2 ابجدی عنصر: <span style="color: #38bdf8;">${t2Element}</span>
            <br>• چاند کی <span style="color: #38bdf8;">${lunarDateVal}</span> تاریخ اور گراؤنڈ (${escapeHTML(ground)})۔
            <br>• روایتی سیاروی ساعت: <span style="color: #38bdf8;">${escapeHTML(planetaryHourText)}</span>
        </div>

        <div class="analysis-section" style="border-top: 1px dashed #334155; padding-top: 12px; margin-top: 10px; text-align: right; direction: rtl;">
            <strong>🔮 مشترکہ وزنی ماڈل کا حتمی تخمینہ:</strong>
            <br>اس عددی تخمینی ماڈل کے مطابق ممکنہ نتیجہ: <strong style="color: #38bdf8;">${escapeHTML(winningTeam)}</strong>
            <br><br><strong>دونوں ٹیموں کے مجموعی اسکور:</strong>
            <br>• ${escapeHTML(team1)}: <strong>${score1.toFixed(2)}</strong> (بنیادی ابجدی حصہ ${teamBase1.toFixed(2)} + معاون عوامل ${factors1.total.toFixed(2)})
            <br>• ${escapeHTML(team2)}: <strong>${score2.toFixed(2)}</strong> (بنیادی ابجدی حصہ ${teamBase2.toFixed(2)} + معاون عوامل ${factors2.total.toFixed(2)})
            <br><br><strong>وزن:</strong> ٹیم ابجد 50، کپتان ابجد 25، گراؤنڈ 10، دن کا حاکم 7، سیاروی ساعت ${hourFactorIndex === null ? "0 (دستیاب نہیں)" : "5"}، قمری تاریخ 3 پوائنٹس۔
            <br><strong>فعال مجموعی وزن:</strong> ${activeWeightTotal}/100 پوائنٹس۔
            <br><small>نوٹ: یہ ایک روایتی عددی مفروضاتی ماڈل ہے؛ اس کی پیش گوئی کی درستگی ثابت کرنے کے لیے تاریخی میچوں پر بیک ٹیسٹ ضروری ہے۔</small>
        </div>
    `;

    document.getElementById("outputContent").innerHTML = analysisHTML;
    document.getElementById("resultBox").classList.remove("hidden");
}
