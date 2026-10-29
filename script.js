// Complete Teams & Captains Database in Pure Urdu
const teamsData = [
    // International & Associate Teams
    { name: "افغانستان", captains: { test: "رحمت شاہ", odi: "رحمت شاہ", t20: "راشد خان" } },
    { name: "آسٹریلیا", captains: { test: "پیٹ کمنز", odi: "مچل مارش", t20: "مچل مارش" } },
    { name: "بنگلہ دیش", captains: { test: "نجم الحسن شانتو", odi: "مہدی حسن میراز", t20: "لٹن داس" } },
    { name: "انگلینڈ", captains: { test: "بین اسٹوکس", odi: "ہیری بروک", t20: "ہیری بروک" } },
    { name: "انڈیا", captains: { test: "شبمن گل", odi: "شبمن گل", t20: "شریاس آئیر" } },
    { name: "آئرلینڈ", captains: { test: "اینڈی بالبرنی", odi: "پال اسٹرلنگ", t20: "لورکن ٹکر" } },
    { name: "نیوزی لینڈ", captains: { test: "ٹام لیتھم", odi: "مچل سینٹنر", t20: "مچل سینٹنر" } },
    { name: "پاکستان", captains: { test: "شان مسعود", odi: "شاہین شاہ آفریدی", t20: "صاحب زادہ فرحان" } },
    { name: "جنوبی افریقہ", captains: { test: "ٹیمبا باووما", odi: "ٹیمبا باووما", t20: "ایڈن مارکرم" } },
    { name: "سری لنکا", captains: { test: "دھننجایا ڈی سلوا", odi: "کوسل مینڈس", t20: "داسن شناکا" } },
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

    // ================= LEAGUES DATA =================
    // IPL — 10 Teams
    { name: "انڈین پریمیئر لیگ - دہلی کیپیٹلز", captain: "اکشر پٹیل" },
    { name: "انڈین پریمیئر لیگ - گجرات ٹائٹنز", captain: "شبمن گل" },
    { name: "انڈین پریمیئر لیگ - کولکتہ نائٹ رائیڈرز", captain: "اجنکیا رہانے" },
    { name: "انڈین پریمیئر لیگ - لکھنؤ سپر جائنٹس", captain: "رشبھ پنت" },
    { name: "انڈین پریمیئر لیگ - پنجاب کنگز", captain: "شریاس آئیر" },
    { name: "انڈین پریمیئر لیگ - راجستھان رائلز", captain: "ریان پراگ" },
    { name: "انڈین پریمیئر لیگ - سن رائزرز حیدرآباد", captain: "ایشان کشن" },
    { name: "انڈین پریمیئر لیگ - چنئی سپر کنگز", captain: "رتوراج گائیکواڑ" },
    { name: "انڈین پریمیئر لیگ - ممبئی انڈینز", captain: "ہارڈک پانڈیا" },
    { name: "انڈین پریمیئر لیگ - رائل چیلنجرز بنگلورو", captain: "رجت پاٹیدار" },
    
    // PSL — 8 Teams
    { name: "پاکستان سپر لیگ - لاہور قلندرز", captain: "شاہین شاہ آفریدی" },
    { name: "پاکستان سپر لیگ - کراچی کنگز", captain: "ڈیوڈ وارنر" },
    { name: "پاکستان سپر لیگ - پشاور زلمی", captain: "بابر اعظم" },
    { name: "پاکستان سپر لیگ - ملتان سلطانز", captain: "محمد رضوان" },
    { name: "پاکستان سپر لیگ - کوئٹہ گلیڈی ایٹرز", captain: "سعود شکیل" },
    { name: "پاکستان سپر لیگ - اسلام آباد یونائیٹڈ", captain: "شاداب خان" },
    { name: "پاکستان سپر لیگ - حیدرآباد کنگز مین", captain: "مارنس لبوشین" },
    { name: "پاکستان سپر لیگ - راولپنڈی پنڈیز", captain: "" },
    
    // Big Bash League — 8 Teams
    { name: "بگ بیش لیگ - ایڈیلیڈ اسٹرائیکرز", captain: "میٹ شارٹ" },
    { name: "بگ بیش لیگ - برسبین ہیٹ", captain: "عثمان خواجہ" },
    { name: "بگ بیش لیگ - ہوبارٹ ہریکینز", captain: "نیتھن ایلس" },
    { name: "بگ بیش لیگ - میلبورن رینیگیڈز", captain: "ول سدرلینڈ" },
    { name: "بگ بیش لیگ - میلبورن اسٹارز", captain: "مارکس اسٹوئنس" },
    { name: "بگ بیش لیگ - پرتھ اسکارچرز", captain: "ایشٹن ٹرنر" },
    { name: "بگ بیش لیگ - سڈنی سکسرز", captain: "موئسس ہینرکس" },
    { name: "بگ بیش لیگ - سڈنی تھنڈر", captain: "ڈیوڈ وارنر" },
    
    // SA20 — 6 Teams
    { name: "ایس اے ۲۰ - ڈربن سپر جائنٹس", captain: "ایڈن مارکرم" },
    { name: "ایس اے ۲۰ - جوبرگ سپر کنگز", captain: "فاف ڈو پلیسی" },
    { name: "ایس اے ۲۰ - ایم آئی کیپ ٹاؤن", captain: "راشد خان" },
    { name: "ایس اے ۲۰ - پارل رائلز", captain: "ڈیوڈ ملر" },
    { name: "ایس اے ۲۰ - پریٹوریا کیپیٹلز", captain: "کیشو مہاراج" },
    { name: "ایس اے ۲۰ - سن رائزرز ایسٹرن کیپ", captain: "ٹرسٹن اسٹبز" },
    
    // Major League Cricket — 6 Teams
    { name: "میجر لیگ کرکٹ - ایم آئی نیویارک", captain: "نکولس پورن" },
    { name: "میجر لیگ کرکٹ - ٹیکساس سپر کنگز", captain: "فاف ڈو پلیسی" },
    { name: "میجر لیگ کرکٹ - واشنگٹن فریڈم", captain: "اسٹیو اسمتھ" },
    { name: "میجر لیگ کرکٹ - سان فرانسسکو یونی کورنز", captain: "میتھیو شارٹ" },
    { name: "میجر لیگ کرکٹ - سیئٹل اورکاز", captain: "ہینرک کلاسن" },
    { name: "میجر لیگ کرکٹ - لاس انجلس نائٹ رائیڈرز", captain: "جیسن ہولڈر" },
    
    // Caribbean Premier League — 6 Teams
    { name: "کیریبین پریمیئر لیگ - جمیکا کنگز مین", captain: "روومین پاول" },
    { name: "کیریبین پریمیئر لیگ - اینٹیگوا اینڈ باربوڈا فالکنز", captain: "معین علی" },
    { name: "کیریبین پریمیئر لیگ - ٹرنباگو نائٹ رائیڈرز", captain: "نکولس پورن" },
    { name: "کیریبین پریمیئر لیگ - سینٹ لوشیا کنگز", captain: "روسٹن چیز" },
    { name: "کیریبین پریمیئر لیگ - سینٹ کٹس اینڈ نیوس پیٹریاٹس", captain: "جیسن ہولڈر" },
    { name: "کیریبین پریمیئر لیگ - گیانا ایمیزون واریئرز", captain: "عمران طاہر" },
    { name: "کیریبین پریمیئر لیگ - بارباڈوس ٹرائیڈنٹس", captain: "روومین پاول" },
    
    // International League T20 — 6 Teams
    { name: "انٹرنیشنل لیگ ٹی ۲۰ - ابوظہبی نائٹ رائیڈرز", captain: "جیسن ہولڈر" },
    { name: "انٹرنیشنل لیگ ٹی ۲۰ - ڈیزرٹ وائپرز", captain: "لاکی فرگوسن" },
    { name: "انٹرنیشنل لیگ ٹی ۲۰ - دبئی کیپیٹلز", captain: "ڈیوڈ وارنر" },
    { name: "انٹرنیشنل لیگ ٹی ۲۰ - گلف جائنٹس", captain: "جیمز ونس" },
    { name: "انٹرنیشنل لیگ ٹی ۲۰ - ایم آئی ایمریٹس", captain: "نکولس پورن" },
    { name: "انٹرنیشنل لیگ ٹی ۲۰ - شارجہ واریئرز", captain: "ٹام کوہلر کیڈمور" },

    // Sri Lanka Premier League (LPL) — 5 Teams
    { name: "لنکا پریمیئر لیگ - کولمبو", captain: "" },
    { name: "لنکا پریمیئر لیگ - دمبولا", captain: "" },
    { name: "لنکا پریمیئر لیگ - گال", captain: "" },
    { name: "لنکا پریمیئر لیگ - جافنا", captain: "" },
    { name: "لنکا پریمیئر لیگ - کینڈی", captain: "" },

    // Bangladesh Premier League (BPL) — 6 Teams
    { name: "بی پی ایل - ڈھاکہ کیپیٹلز", captain: "" },
    { name: "بی پی ایل - چٹوگرام رائلز", captain: "" },
    { name: "بی پی ایل - نوآکھالی ایکسپریس", captain: "" },
    { name: "بی پی ایل - راجشاہی واریئرز", captain: "" },
    { name: "بی پی ایل - رنگپور رائیڈرز", captain: "" },
    { name: "بی پی ایل - سلہٹ ٹائٹنز", captain: "" },

    // The Hundred Men's Competition — 8 Teams
    { name: "دی ہنڈرڈ - برمنگھم فینکس", captain: "" },
    { name: "دی ہنڈرڈ - لندن اسپرٹ", captain: "" },
    { name: "دی ہنڈرڈ - مانچسٹر سپر جائنٹس", captain: "" },
    { name: "دی ہنڈرڈ - ایم آئی لندن", captain: "" },
    { name: "دی ہنڈرڈ - سدرن بریو", captain: "" },
    { name: "دی ہنڈرڈ - سن رائزرز لیڈز", captain: "" },
    { name: "دی ہنڈرڈ - ٹرینٹ راکٹس", captain: "" },
    { name: "دی ہنڈرڈ - ویلش فائر", captain: "" },
    
    // Women's Premier League (WPL) 5 Teams
    { name: "ویمنز پریمیئر لیگ - دہلی کیپیٹلز", captain: "میگ لیننگ" },
    { name: "ویمنز پریمیئر لیگ - گجرات جائنٹس", captain: "ایشلے گارڈنر" },
    { name: "ویمنز پریمیئر لیگ - ممبئی انڈینز", captain: "ہرمن پریت کور" },
    { name: "ویمنز پریمیئر لیگ - رائل چیلنجرز بنگلورو", captain: "اسمرتی مندھانا" },
    { name: "ویمنز پریمیئر لیگ - یو پی واریئرز", captain: "دیپتی شرما" },

    // Women's Big Bash League (WBBL) 8 Teams
    { name: "ویمنز بگ بیش لیگ - ایڈیلیڈ اسٹرائیکرز", captain: "" },
    { name: "ویمنز بگ بیش لیگ - برسبین ہیٹ", captain: "جارجیا ریڈمائن" },
    { name: "ویمنز بگ بیش لیگ - ہوبارٹ ہریکینز", captain: "نیکولا کیری" },
    { name: "ویمنز بگ بیش لیگ - میلبورن رینیگیڈز", captain: "سوفی مولینکس" },
    { name: "ویمنز بگ بیش لیگ - میلبورن اسٹارز", captain: "مِگ لیننگ" },
    { name: "ویمنز بگ بیش لیگ - پرتھ اسکارچرز", captain: "" },
    { name: "ویمنز بگ بیش لیگ - سڈنی سکسرز", captain: "اشلے گارڈنر" },
    { name: "ویمنز بگ بیش لیگ - سڈنی تھنڈر", captain: "فوبی لِچفیلڈ" },

    // Nepal Premier League 8 Teams 
    { name: "نیپال پریمیئر لیگ - بیرات نگر کنگز", captain: "" },
    { name: "نیپال پریمیئر لیگ - جنک پور بولٹس", captain: "" },
    { name: "نیپال پریمیئر لیگ - کرنالی یاکس", captain: "" },
    { name: "نیپال پریمیئر لیگ - کاٹھمانڈو گورکھاز", captain: "" },
    { name: "نیپال پریمیئر لیگ - لمبینی لائنز", captain: "" },
    { name: "نیپال پریمیئر لیگ - پوکھرا ایونجرز", captain: "" },
    { name: "نیپال پریمیئر لیگ - سدورپشچم رائلز", captain: "" },
    { name: "نیپال پریمیئر لیگ - چتوان رائنو", captain: "" },

    // Global T20 Canada 6 Teams
    { name: "گلوبل ٹی ۲۰ کینیڈا - برامپٹن وولوز", captain: "" },
    { name: "گلوبل ٹی ۲۰ کینیڈا - مونٹریال ٹائیگرز", captain: "" },
    { name: "گلوبل ٹی ۲۰ کینیڈا - ٹورنٹو نیشنلز", captain: "" },
    { name: "گلوبل ٹی ۲۰ کینیڈا - وینکوور نائٹس", captain: "" },
    { name: "گلوبل ٹی ۲۰ کینیڈا - سرے جیگوارز", captain: "" },
    { name: "گلوبل ٹی ۲۰ کینیڈا - مسی ساگا پینتھرز", captain: "" }
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
        captainInput.value = selectedTeam.captain || selectedTeam.captains[format] || selectedTeam.captains["t20"] || "";
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
        captainInput.value = selectedTeam.captain || selectedTeam.captains[format] || selectedTeam.captains["t20"] || "";
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


const elementRulingPlanets = {
    1: ["Sun", "Mars"],       // Fire
    2: ["Mercury", "Saturn"], // Earth
    3: ["Jupiter", "Venus"],  // Air
    0: ["Moon", "Jupiter"]    // Water
};
const planetAliases = {
    "Sun": ["Sun", "شمس"], "Moon": ["Moon", "قمر"], "Mars": ["Mars", "مریخ"],
    "Mercury": ["Mercury", "عطارد"], "Jupiter": ["Jupiter", "مشتری"],
    "Venus": ["Venus", "زہرہ"], "Saturn": ["Saturn", "زحل"]
};
const planetNameFromHour = {
    "زحل (Saturn)": "Saturn", "مشتری (Jupiter)": "Jupiter", "مریخ (Mars)": "Mars",
    "شمس (Sun)": "Sun", "زہرہ (Venus)": "Venus", "عطارد (Mercury)": "Mercury", "قمر (Moon)": "Moon"
};
const planetFriends = {
    Sun: ["Mars", "Jupiter", "Moon"],
    Moon: ["Sun", "Mercury"],
    Mars: ["Sun", "Jupiter", "Moon"],
    Mercury: ["Sun", "Venus", "Saturn"],
    Jupiter: ["Sun", "Moon", "Mars"],
    Venus: ["Mercury", "Saturn"],
    Saturn: ["Mercury", "Venus"]
};
const planetEnemies = {
    Sun: ["Saturn", "Venus"],
    Moon: ["Mars", "Saturn"],
    Mars: ["Mercury", "Moon"],
    Mercury: ["Mars", "Moon"],
    Jupiter: ["Mercury", "Venus"],
    Venus: ["Sun", "Mars"],
    Saturn: ["Sun", "Moon", "Mars"]
};
function mutualPlanetRelationship(a, b) {
    const aFriend = planetFriends[a]?.includes(b) || false;
    const bFriend = planetFriends[b]?.includes(a) || false;
    const aEnemy = planetEnemies[a]?.includes(b) || false;
    const bEnemy = planetEnemies[b]?.includes(a) || false;
    if (aFriend && bFriend && !(aEnemy || bEnemy)) return "Power";
    if (aEnemy && bEnemy && !(aFriend || bFriend)) return "Weakness";
    return "Neutral";
}
function getCaptainElementPlanets(captainAbjadValue) {
    return elementRulingPlanets[((captainAbjadValue % 4) + 4) % 4];
}
function calculateTossPlanetaryPower(captainAbjadValue, tossHourPlanet) {
    const tossPlanet = planetNameFromHour[tossHourPlanet] || null;
    if (!tossPlanet) return { adjustment: 0, relationships: [], reason: "Toss planetary hour unavailable" };
    const captainPlanets = getCaptainElementPlanets(captainAbjadValue);
    const relationships = captainPlanets.map(planet => ({
        captainPlanet: planet,
        tossPlanet,
        relationship: mutualPlanetRelationship(planet, tossPlanet)
    }));
    const bothPower = relationships.every(item => item.relationship === "Power");
    const bothWeakness = relationships.every(item => item.relationship === "Weakness");
    return {
        adjustment: bothPower ? 10 : (bothWeakness ? -10 : 0),
        captainPlanets,
        tossPlanet,
        relationships,
        reason: bothPower ? "Both captain planets are mutual friends of the toss-hour planet"
            : bothWeakness ? "Both captain planets are mutual enemies of the toss-hour planet"
            : "Mixed or neutral relationships"
    };
}
function makeDateTimeLocal(date) {
    const pad = value => String(value).padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}
function getDefaultTossTime(matchTimeValue) {
    if (!matchTimeValue) return "";
    const matchDate = new Date(matchTimeValue);
    if (Number.isNaN(matchDate.getTime())) return "";
    matchDate.setMinutes(matchDate.getMinutes() - 30);
    return makeDateTimeLocal(matchDate);
}

function getDayRulerPlanet(dateValue) {
    if (!dateValue) return null;
    const date = new Date(dateValue);
    if (Number.isNaN(date.getTime())) return null;
    return ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"][date.getDay()];
}

function classifyCaptainCompatibility(captainAbjadValue, comparisonPlanet) {
    if (!comparisonPlanet) return "Unavailable";
    const captainPlanets = getCaptainElementPlanets(captainAbjadValue);
    const relationships = captainPlanets.map(planet => mutualPlanetRelationship(planet, comparisonPlanet));
    if (relationships.every(value => value === "Power")) return "Friend";
    if (relationships.every(value => value === "Weakness")) return "Enemy";
    return "Mixed";
}

function calculateSuggestedTossWinner() {
    const team1 = document.getElementById("team1").value || document.getElementById("team1Select").options[document.getElementById("team1Select").selectedIndex].text;
    const captain1 = document.getElementById("captain1").value || "";
    const team2 = document.getElementById("team2").value || document.getElementById("team2Select").options[document.getElementById("team2Select").selectedIndex].text;
    const captain2 = document.getElementById("captain2").value || "";
    const matchTimeInput = document.getElementById("matchTime")?.value || "";
    const tossTimeInput = document.getElementById("tossTime")?.value || "";
    const sunriseInput = document.getElementById("sunriseTime")?.value || "";
    const sunsetInput = document.getElementById("sunsetTime")?.value || "";
    const tossLunarDate = Number.parseInt(document.getElementById("tossLunarDate")?.value || "15", 10);
    const effectiveTossTime = tossTimeInput || getDefaultTossTime(matchTimeInput);
    const output = document.getElementById("tossSuggestionContent");
    const box = document.getElementById("tossSuggestionBox");

    if (!team1.trim() || !team2.trim() || !captain1.trim() || !captain2.trim() || team1.trim() === team2.trim()) {
        alert("براہِ کرم دو مختلف ٹیمیں اور دونوں کپتان درست درج/منتخب کریں۔");
        return;
    }
    if (!Number.isInteger(tossLunarDate) || tossLunarDate < 1 || tossLunarDate > 30) {
        alert("ٹاس سیکشن میں قمری تاریخ 1 سے 30 کے درمیان درج کریں۔");
        return;
    }
    const tossHour = getPlanetaryHour(effectiveTossTime, sunriseInput, sunsetInput);
    const dayRuler = getDayRulerPlanet(effectiveTossTime);
    if (!tossHour || !dayRuler) {
        output.innerHTML = "<p>خودکار ٹاس پیشگوئی کے لیے میچ/ٹاس کی تاریخ، مقامی طلوعِ آفتاب اور غروبِ آفتاب درج کریں۔ ٹاس کا وقت خالی ہو تو میچ سے 30 منٹ پہلے لیا جائے گا۔</p>";
        box.classList.remove("hidden");
        return;
    }

    const abjad1 = getUrduAbjadValue(captain1);
    const abjad2 = getUrduAbjadValue(captain2);
    const totalAbjad = abjad1 + abjad2;
    const abjadScore1 = totalAbjad > 0 ? (abjad1 / totalAbjad) * 40 : 20;
    const abjadScore2 = totalAbjad > 0 ? (abjad2 / totalAbjad) * 40 : 20;
    const hourPlanet = planetNameFromHour[tossHour.planet] || null;
    const hourCompat1 = classifyCaptainCompatibility(abjad1, hourPlanet);
    const hourCompat2 = classifyCaptainCompatibility(abjad2, hourPlanet);
    const compatibilityPoints = status => status === "Friend" ? 40 : status === "Enemy" ? 0 : 20;
    const hourScore1 = compatibilityPoints(hourCompat1);
    const hourScore2 = compatibilityPoints(hourCompat2);

    const dayCompat1 = classifyCaptainCompatibility(abjad1, dayRuler);
    const dayCompat2 = classifyCaptainCompatibility(abjad2, dayRuler);
    const dayPoints = status => status === "Friend" ? 20 : status === "Enemy" ? 0 : 10;
    const dayScore1 = dayPoints(dayCompat1);
    const dayScore2 = dayPoints(dayCompat2);

    const score1 = abjadScore1 + hourScore1 + dayScore1;
    const score2 = abjadScore2 + hourScore2 + dayScore2;
    const totalScore = score1 + score2;
    const indicator1 = totalScore > 0 ? Math.max(40, Math.min(60, 50 + ((score1 - score2) / totalScore) * 10)) : 50;
    const indicator2 = 100 - indicator1;
    const isTie = Math.abs(score1 - score2) < 0.000001;
    const suggestedWinner = isTie ? "برابر / واضح برتری نہیں" : (score1 > score2 ? team1 : team2);
    const format = n => Number(n).toFixed(2);
    const compatLabel = status => status === "Friend" ? "باہمی دوستی" : status === "Enemy" ? "باہمی دشمنی" : "مخلوط / غیر جانبدار";
    const tossTimeText = effectiveTossTime ? effectiveTossTime.replace("T", " ") : "درج نہیں";
    const dayRulerUrdu = {Sun:"شمس",Moon:"قمر",Mars:"مریخ",Mercury:"عطارد",Jupiter:"مشتری",Venus:"زہرہ",Saturn:"زحل"}[dayRuler] || dayRuler;

    output.innerHTML = `
        <div class="analysis-section" style="text-align:right;direction:rtl;padding:12px;">
            <strong>تجویز کردہ ٹاس ونر:</strong> ${escapeHTML(suggestedWinner)}
            <br><strong>اشاری اسکور:</strong> ${format(score1)} بمقابلہ ${format(score2)}
            <br><strong>محدود اشارتی تناسب (40–60):</strong> ${format(indicator1)}% بمقابلہ ${format(indicator2)}%
            <br><strong>چاند کی تاریخ (قمری):</strong> ${tossLunarDate}
            <br><br><strong>${escapeHTML(team1)} — ${escapeHTML(captain1)}</strong>
            <br>ابجد حصہ (40): ${format(abjadScore1)}؛ سیاروی ساعت (40): ${hourScore1} (${compatLabel(hourCompat1)}؛ ${escapeHTML(hourPlanet || "غیر دستیاب")})؛ دن کا حاکم (20): ${dayScore1} (${compatLabel(dayCompat1)}؛ ${escapeHTML(dayRulerUrdu)})
            <br><br><strong>${escapeHTML(team2)} — ${escapeHTML(captain2)}</strong>
            <br>ابجد حصہ (40): ${format(abjadScore2)}؛ سیاروی ساعت (40): ${hourScore2} (${compatLabel(hourCompat2)}؛ ${escapeHTML(hourPlanet || "غیر دستیاب")})؛ دن کا حاکم (20): ${dayScore2} (${compatLabel(dayCompat2)}؛ ${escapeHTML(dayRulerUrdu)})
            <br><br><strong>ٹاس وقت:</strong> ${escapeHTML(tossTimeText)}؛ <strong>سیاروی ساعت:</strong> ${escapeHTML(tossHour.planet)}
            <br><small>یہ روایتی/تجرباتی اسکور ہے، ثابت شدہ حقیقی احتمال نہیں۔ 40–60% صرف display cap ہے، تاریخی accuracy کی ضمانت نہیں۔ قمری تاریخ یہاں معلومات کے لیے دکھائی گئی ہے؛ موجودہ 40/40/20 ٹاس اسکور میں اس کا وزن شامل نہیں۔ یہ تجویز مین میچ کے ٹاس انتخاب کو خودکار طور پر تبدیل نہیں کرتی۔</small>
        </div>`;
    box.classList.remove("hidden");
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
    let tossTimeInput = document.getElementById("tossTime") ? document.getElementById("tossTime").value : "";
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
    if (tossWinnerChoice !== "captain1" && tossWinnerChoice !== "captain2") {
        alert("مین میچ پریڈکشن کے لیے اصل ٹاس جیتنے والی ٹیم منتخب کریں۔ خودکار ٹاس پیشگوئی اس انتخاب کو خودکار طور پر نہیں بدلے گی۔");
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
        formatLabel = "ایک روزہ میچ (ODI)";
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
    const effectiveTossTime = tossTimeInput || getDefaultTossTime(matchTimeInput);
    const tossPlanetaryHour = getPlanetaryHour(effectiveTossTime, sunriseInput, sunsetInput);

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

    // Toss winner is entered by the user; the model does not predict who wins the toss.
    const tossIsTeam1 = tossWinnerChoice === "captain1";
    const tossTeam = tossIsTeam1 ? team1 : team2;
    const tossCaptain = tossIsTeam1 ? captain1 : captain2;
    const tossCaptainValue = tossIsTeam1 ? c1Val : c2Val;
    const tossPower = calculateTossPlanetaryPower(tossCaptainValue, tossPlanetaryHour?.planet);
    const finalScore1 = score1 + (tossIsTeam1 ? tossPower.adjustment : 0);
    const finalScore2 = score2 + (!tossIsTeam1 ? tossPower.adjustment : 0);
    const tossPowerLabel = tossPower.adjustment > 0 ? "+10 (مثبت طاقت)" : (tossPower.adjustment < 0 ? "-10 (منفی کمزوری)" : "0 (غیر جانبدار)");
    const tossHourText = tossPlanetaryHour
        ? `${tossPlanetaryHour.type} کا ${tossPlanetaryHour.number} واں سیارہ وار وقت — ${tossPlanetaryHour.planet}`
        : "ٹاس کی سیاروی ساعت دستیاب نہیں؛ تاریخ، مقامی طلوع و غروب اور ٹاس کا درست وقت چیک کریں۔";
    const captainPlanetNames = (tossPower.captainPlanets || []).join(" اور ");
    const relationshipText = tossPower.relationships?.length
        ? tossPower.relationships.map(item => `${item.captainPlanet} ↔ ${item.tossPlanet}: ${item.relationship === "Power" ? "باہمی دوستی" : item.relationship === "Weakness" ? "باہمی دشمنی" : "غیر جانبدار"}`).join("؛ ")
        : "سیاروی تعلق معلوم کرنے کے لیے درست ٹاس وقت اور طلوع و غروب درکار ہیں۔";
    const tossTimeText = effectiveTossTime ? effectiveTossTime.replace("T", " ") : "درج نہیں";
    const tossImpactText = `ٹاس جیتنے والی منتخب ٹیم: ${tossTeam}؛ کپتان: ${tossCaptain}۔ ٹاس وقت: ${tossTimeText}۔ حاکم ساعت: ${tossHourText}۔ کپتان کے عناصر کے سیارے: ${captainPlanetNames || "دستیاب نہیں"}۔ تعلق: ${relationshipText}۔ ٹاس ایڈجسٹمنٹ: ${tossPowerLabel}۔`;
    const planetaryHourText = planetaryHour
        ? `${planetaryHour.type} کا ${planetaryHour.number} واں سیارہ وار وقت — ${planetaryHour.planet}`
        : "سیاروی ساعت نہیں نکالی گئی؛ درست میچ تاریخ، مقامی طلوعِ آفتاب اور غروبِ آفتاب درج کریں۔";

    let winningTeam = (Math.abs(finalScore1 - finalScore2) < 0.01) ? "برابر / واضح برتری نہیں" : ((finalScore1 > finalScore2) ? team1 : team2);

    let multiplier = (matchFormat === "odi") ? 1.8 : (matchFormat === "test" ? 2.5 : 1);
    // Use the same estimation formula for both teams.
    let estimatedTotal1 = Math.round(baseScore1 + ((t1Val + c1Val + groundVal) % 30) * multiplier);
    let estimatedTotal2 = Math.round(baseScore2 + ((t2Val + c2Val + groundVal) % 30) * multiplier);
    let rangeSpan = (matchFormat === "test") ? 40 : (matchFormat === "odi" ? 25 : 15);

    let analysisHTML = `
        <div class="analysis-section" style="border-right: 4px solid #38bdf8; background: rgba(56, 189, 248, 0.1); padding: 12px; margin-bottom: 12px; border-radius: 6px; text-align: right; direction: rtl;">
            <strong>🪙 اصل ٹاس کا نتیجہ (صارف کا انتخاب):</strong> 
            <br>مین میچ پریڈکشن میں صرف صارف کا منتخب کردہ اصل ٹاس ونر استعمال ہوتا ہے؛ الگ خودکار ٹاس تجویز اس انتخاب کو تبدیل نہیں کرتی۔
            <br><br>✨ ${escapeHTML(tossImpactText)}
        </div>

        <div class="analysis-section" style="text-align: right; direction: rtl; margin-bottom: 12px; padding: 8px;">
            <strong>📅 میچ کا دن اور روایتی حاکم سیارہ:</strong> 
            <br>• میچ کا دن: <span style="color: #38bdf8;">${matchDayName}</span> | حاکم سیارہ: <span style="color: #38bdf8;">${dayRulingPlanet}</span>
            <br>• ٹیم 1 ابجدی عنصر: <span style="color: #38bdf8;">${t1Element}</span> | ٹیم 2 ابجدی عنصر: <span style="color: #38bdf8;">${t2Element}</span>
            <br>• چاند کی <span style="color: #38bdf8;">${lunarDateVal}</span> تاریخ اور گراؤنڈ (${escapeHTML(ground)})۔
            <br>• روایتی سیاروی ساعت: <span style="color: #38bdf8;">${escapeHTML(planetaryHourText)}</span>
        </div>

        <div class="analysis-section" style="border-top: 1px dashed #334155; padding-top: 12px; margin-top: 10px; text-align: right; direction: rtl;">
            <strong>دونوں ٹیموں کے مجموعی اسکور:</strong>
            <br>• ${escapeHTML(team1)}: <strong>${finalScore1.toFixed(2)}</strong> (بنیادی ابجدی حصہ ${teamBase1.toFixed(2)} + معاون عوامل ${factors1.total.toFixed(2)})
            <br>• ${escapeHTML(team2)}: <strong>${finalScore2.toFixed(2)}</strong> (بنیادی ابجدی حصہ ${teamBase2.toFixed(2)} + معاون عوامل ${factors2.total.toFixed(2)})
            <br><br><strong>🪐 ٹاس کی سیاروی طاقت:</strong>
            <br>• ${escapeHTML(tossImpactText)}
            <br>• ٹاس کا ایڈجسٹمنٹ صرف ٹاس جیتنے والی منتخب ٹیم کے اسکور میں شامل کیا گیا ہے۔
            <br><br><strong>وزن:</strong> ٹیم ابجد 50، کپتان ابجد 25، گراؤنڈ 10، دن کا حاکم 7، سیاروی ساعت ${hourFactorIndex === null ? "0 (دستیاب نہیں)" : "5"}، قمری تاریخ 3 پوائنٹس۔
            <br><strong>فعال مجموعی وزن:</strong> ${activeWeightTotal}/100 پوائنٹس۔
            <br><small>نوٹ: یہ ایک روایتی عددی مفروضاتی ماڈل ہے؛ اس کی پیش گوئی کی درستگی ثابت کرنے کے لیے تاریخی میچوں پر بیک ٹیسٹ ضروری ہے۔</small>
            <br><br><div style="border-top: 2px solid #38bdf8; margin-top: 16px; padding-top: 14px; text-align: center;">
                <strong>🔮 مشترکہ وزنی ماڈل کا حتمی تخمینہ</strong>
                <br><br>اس عددی تخمینی ماڈل کے مطابق ممکنہ نتیجہ:
                <br><strong style="color: #38bdf8; font-size: 1.25em;">${escapeHTML(winningTeam)}</strong>
            </div>
        </div>
    `;

    document.getElementById("outputContent").innerHTML = analysisHTML;
    document.getElementById("resultBox").classList.remove("hidden");
}
