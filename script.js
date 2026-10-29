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
    { name: "ویمنز بگ بیش لیگ - برسبین ہیٹ", captain: "" },
    { name: "ویمنز بگ بیش لیگ - ہوبارٹ ہریکینز", captain: "نیکولا کیری" },
    { name: "ویمنز بگ بیش لیگ - میلبورن رینیگیڈز", captain: "سوفی مولینکس" },
    { name: "ویمنز بگ بیش لیگ - میلبورن اسٹارز", captain: "مِگ لیننگ" },
    { name: "ویمنز بگ بیش لیگ - پرتھ اسکارچرز", captain: "" },
    { name: "ویمنز بگ بیش لیگ - سڈنی سکسرز", captain: "" },
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

/* Cricket-statistics prototype.
   The team/captain database above is preserved from the previous project.
   No astrology, Abjad, lunar-date, or planetary-hour calculations are used. */

document.addEventListener("DOMContentLoaded", () => {
    populateTeamDropdowns();
    updateBattingTeamOptions();
    document.getElementById("team1Select").addEventListener("change", () => {
        updateCaptain(1);
        updateBattingTeamOptions();
    });
    document.getElementById("team2Select").addEventListener("change", () => {
        updateCaptain(2);
        updateBattingTeamOptions();
    });
    document.getElementById("matchFormat").addEventListener("change", () => {
        updateCaptain(1);
        updateCaptain(2);
        updateOversHint();
    });
    document.getElementById("inningsType").addEventListener("change", updateInningsFields);
    updateInningsFields();
    updateOversHint();
});

function populateTeamDropdowns() {
    ["team1Select", "team2Select"].forEach(id => {
        const select = document.getElementById(id);
        select.innerHTML = '<option value="">-- ٹیم منتخب کریں --</option>';
        teamsData.forEach((team, index) => {
            const option = document.createElement("option");
            option.value = String(index);
            option.textContent = team.name;
            select.appendChild(option);
        });
    });
}

function selectedTeam(index) {
    const select = document.getElementById(index === 1 ? "team1Select" : "team2Select");
    return select.value === "" ? null : teamsData[Number(select.value)] || null;
}

function teamName(index) {
    const team = selectedTeam(index);
    return team ? team.name : "";
}

function captainName(index) {
    return document.getElementById(index === 1 ? "captain1" : "captain2").value.trim();
}

function updateCaptain(index) {
    const team = selectedTeam(index);
    const captainInput = document.getElementById(index === 1 ? "captain1" : "captain2");
    if (!team) {
        captainInput.value = "";
        return;
    }
    const format = document.getElementById("matchFormat").value;
    captainInput.value = team.captain || (team.captains && (team.captains[format] || team.captains.t20)) || "";
}

function updateBattingTeamOptions() {
    const select = document.getElementById("battingTeam");
    if (!select) return;
    const previous = select.value;
    select.innerHTML = '<option value="1">پہلی ٹیم</option><option value="2">دوسری ٹیم</option>';
    const a = teamName(1) || "پہلی ٹیم";
    const b = teamName(2) || "دوسری ٹیم";
    select.options[0].textContent = a;
    select.options[1].textContent = b;
    if (previous === "1" || previous === "2") select.value = previous;
    updateChaseTargetLabel();
}

function updateChaseTargetLabel() {
    const label = document.getElementById("targetLabel");
    if (label) label.textContent = "ہدف (Target)";
}

function updateInningsFields() {
    const chase = document.getElementById("inningsType").value === "chase";
    document.getElementById("targetGroup").classList.toggle("hidden", !chase);
    document.getElementById("battingTeamGroup").classList.toggle("hidden", !chase);
    document.getElementById("inningsHelp").textContent = chase
        ? "دوسری اننگز کے موجودہ اسکور، اوورز، وکٹ اور ہدف درج کریں۔"
        : "پہلی اننگز کے موجودہ اسکور، اوورز اور وکٹ درج کریں۔";
}

function updateOversHint() {
    const format = document.getElementById("matchFormat").value;
    const hint = document.getElementById("oversHint");
    hint.textContent = format === "t20" ? "T20: زیادہ سے زیادہ 20 اوور"
        : format === "odi" ? "ODI: زیادہ سے زیادہ 50 اوور"
        : "Test: اندازہ موجودہ رن ریٹ پر؛ دن کے 90 اوور صرف ایک حوالہ ہیں۔";
}

function parseCricketOvers(value) {
    const raw = String(value || "0").trim();
    if (!raw) return null;
    const parts = raw.split(".");
    const whole = Number(parts[0]);
    const balls = parts.length > 1 ? Number(parts[1]) : 0;
    if (!Number.isInteger(whole) || whole < 0 || !Number.isInteger(balls) || balls < 0 || balls > 5) return null;
    return whole * 6 + balls;
}

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function safeNumber(id, fallback = 0) {
    const raw = document.getElementById(id).value;
    if (raw === "" || raw === null || raw === undefined) return fallback;
    const value = Number(raw);
    return Number.isFinite(value) ? value : fallback;
}

function formatNumber(value, decimals = 1) {
    return Number(value).toLocaleString("en-US", { maximumFractionDigits: decimals, minimumFractionDigits: decimals });
}

function showError(message) {
    const box = document.getElementById("resultBox");
    document.getElementById("outputContent").innerHTML = '<p class="error-message">' + escapeHTML(message) + '</p>';
    box.classList.remove("hidden");
    box.scrollIntoView({ behavior: "smooth", block: "start" });
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[char]));
}

function calculatePrediction() {
    const team1 = teamName(1);
    const team2 = teamName(2);
    if (!team1 || !team2) return showError("پیشگوئی کے لیے دونوں ٹیمیں منتخب کریں۔");
    if (Number(document.getElementById("team1Select").value) === Number(document.getElementById("team2Select").value)) {
        return showError("براہِ کرم دو مختلف ٹیمیں منتخب کریں۔");
    }

    const format = document.getElementById("matchFormat").value;
    const inningsType = document.getElementById("inningsType").value;
    const pitch = document.getElementById("pitchType").value;
    const form1 = clamp(safeNumber("form1", 50), 0, 100);
    const form2 = clamp(safeNumber("form2", 50), 0, 100);
    const toss = document.getElementById("tossWinner").value;
    const currentRuns = Math.max(0, Math.floor(safeNumber("currentRuns", 0)));
    const wickets = clamp(Math.floor(safeNumber("wickets", 0)), 0, 10);
    const legalBalls = parseCricketOvers(document.getElementById("overs").value);
    if (legalBalls === null) return showError("اوور درست لکھیں، مثلاً 15.2 (15 اوور اور 2 گیندیں)۔");

    const standardOvers = format === "t20" ? 20 : format === "odi" ? 50 : 90;
    const maxBalls = standardOvers * 6;
    if (format !== "test" && legalBalls > maxBalls) {
        return showError("درج کردہ اوور منتخب فارمیٹ کی حد سے زیادہ ہیں۔");
    }
    if (inningsType === "chase" && legalBalls > maxBalls) {
        return showError("درج کردہ اوور منتخب فارمیٹ کی حد سے زیادہ ہیں۔");
    }

    const oversDone = legalBalls / 6;
    const currentRate = oversDone > 0 ? currentRuns / oversDone : 0;
    let scoreProjection;
    let scoreLabel;
    if (format === "test") {
        const remaining = Math.max(0, 90 - oversDone);
        const wicketFactor = wickets >= 8 ? 0.55 : wickets >= 6 ? 0.75 : 1;
        scoreProjection = oversDone <= 0 ? 300 : Math.round(currentRuns + currentRate * remaining * wicketFactor);
        scoreLabel = "90 اوور تک تخمینی اسکور";
    } else {
        const remaining = Math.max(0, standardOvers - oversDone);
        const wicketFactor = wickets >= 9 ? 0.25 : wickets >= 7 ? 0.55 : wickets >= 5 ? 0.78 : 1;
        const pitchFactor = pitch === "batting" ? 1.08 : pitch === "bowling" ? 0.92 : 1;
        const venueAverage = safeNumber("venueAverage", format === "t20" ? 165 : 270);
        if (oversDone <= 0) {
            scoreProjection = Math.round(venueAverage * (pitch === "batting" ? 1.06 : pitch === "bowling" ? 0.94 : 1));
        } else {
            scoreProjection = Math.round(currentRuns + currentRate * remaining * wicketFactor * pitchFactor);
        }
        scoreProjection = Math.max(currentRuns, scoreProjection);
        scoreLabel = "تخمینی اننگز اسکور";
    }

    let win1;
    let win2;
    let winReason;
    if (inningsType === "chase") {
        const target = Math.max(1, Math.floor(safeNumber("target", 1)));
        if (target <= currentRuns) {
            const battingTeam = document.getElementById("battingTeam").value;
            win1 = battingTeam === "1" ? 98 : 2;
            win2 = 100 - win1;
            winReason = "درج کردہ اسکور ہدف تک پہنچ چکا ہے؛ میچ کی حقیقی صورتحال کی تصدیق کریں۔";
        } else {
            const ballsLeft = Math.max(0, maxBalls - legalBalls);
            const runsNeeded = target - currentRuns;
            const requiredRate = ballsLeft > 0 ? runsNeeded / (ballsLeft / 6) : runsNeeded;
            const wicketsLeft = 10 - wickets;
            const battingTeam = document.getElementById("battingTeam").value;
            const battingForm = battingTeam === "1" ? form1 : form2;
            const otherForm = battingTeam === "1" ? form2 : form1;
            const pitchAdjustment = pitch === "batting" ? 3 : pitch === "bowling" ? -3 : 0;
            const formAdjustment = (battingForm - otherForm) * 0.12;
            const rateAdjustment = (currentRate - requiredRate) * 5.5;
            const wicketAdjustment = (wicketsLeft - 5) * 2.8;
            const chaseChance = clamp(50 + rateAdjustment + wicketAdjustment + formAdjustment + pitchAdjustment, 3, 97);
            win1 = battingTeam === "1" ? chaseChance : 100 - chaseChance;
            win2 = 100 - win1;
            winReason = "چیز کی صورتحال: موجودہ اور مطلوبہ رن ریٹ، باقی وکٹیں، فارم اور پچ کے دستی ان پٹس سے تخمینہ۔";
        }
    } else {
        const tossAdjustment = toss === "1" ? 3 : toss === "2" ? -3 : 0;
        const pitchAdjustment = pitch === "batting" ? 2 : pitch === "bowling" ? -2 : 0;
        win1 = clamp(50 + (form1 - form2) * 0.35 + tossAdjustment + pitchAdjustment, 5, 95);
        win2 = 100 - win1;
        winReason = "پری میچ تخمینہ دستیاب فارم، منتخب ٹاس اور پچ کی معلومات پر مبنی ہے؛ تاریخی ڈیٹا خودکار طور پر منسلک نہیں۔";
    }

    const result = document.getElementById("outputContent");
    result.innerHTML = `
        <div class="result-hero">
            <span class="eyebrow">CRICKET STATS · PROTOTYPE ESTIMATE</span>
            <h3>${escapeHTML(team1)} <span>vs</span> ${escapeHTML(team2)}</h3>
            <p class="subtle">${format === "t20" ? "T20" : format === "odi" ? "ODI" : "Test"} · ${inningsType === "chase" ? "دوسری اننگز / چیز" : "پہلی اننگز"}</p>
        </div>
        <div class="probability-grid">
            <div class="prob-card"><span>${escapeHTML(team1)}</span><strong>${formatNumber(win1, 0)}%</strong><div class="bar"><i style="width:${win1}%"></i></div></div>
            <div class="prob-card"><span>${escapeHTML(team2)}</span><strong>${formatNumber(win2, 0)}%</strong><div class="bar"><i style="width:${win2}%"></i></div></div>
        </div>
        <div class="stats-grid">
            <div class="stat"><small>${scoreLabel}</small><strong>${scoreProjection}</strong></div>
            <div class="stat"><small>موجودہ رن ریٹ</small><strong>${formatNumber(currentRate, 2)}</strong></div>
            <div class="stat"><small>موجودہ اسکور</small><strong>${currentRuns}/${wickets}</strong></div>
            <div class="stat"><small>اوورز</small><strong>${Math.floor(legalBalls / 6)}.${legalBalls % 6}</strong></div>
        </div>
        ${inningsType === "chase" ? (function(){
            const target = Math.max(1, Math.floor(safeNumber("target", 1)));
            const ballsLeft = Math.max(0, maxBalls - legalBalls);
            const runsNeeded = Math.max(0, target - currentRuns);
            const rrr = ballsLeft > 0 ? runsNeeded / (ballsLeft / 6) : runsNeeded;
            return '<div class="chase-line"><span>ہدف: <b>' + target + '</b></span><span>درکار رنز: <b>' + runsNeeded + '</b></span><span>مطلوبہ رن ریٹ: <b>' + formatNumber(rrr, 2) + '</b></span><span>باقی گیندیں: <b>' + ballsLeft + '</b></span></div>';
        })() : ""}
        <p class="analysis-note">${escapeHTML(winReason)}</p>
        <p class="disclaimer">اہم: یہ ابتدائی rule-based تخمینہ ہے، trained machine-learning model نہیں۔ live score API اور تاریخی میچ ڈیٹا ابھی منسلک نہیں، اس لیے یہ حقیقی وقت کی پیشگوئی نہیں ہے۔</p>
    `;
    document.getElementById("resultBox").classList.remove("hidden");
    document.getElementById("resultBox").scrollIntoView({ behavior: "smooth", block: "start" });
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[char]));
}
