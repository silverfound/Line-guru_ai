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

// Boroj (Zodiac) aur Jafri Element Calculation
function getZodiacElement(val) {
    const elements = ["آتشي (Fire)", "خاكي (Earth)", "هوائي (Air)", "آبي (Water)"];
    return elements[val % 4];
}

// Huroof-e-Shamsi wa Qamari Check
function getSolarLunarType(text) {
    if (!text) return "qamari";
    let firstChar = text.trim()[0];
    let shamsiChars = ['ت', 'ث', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ل', 'ن'];
    if (shamsiChars.includes(firstChar)) {
        return "shamsi";
    }
    return "qamari";
}

// Venue ki tareekh se automatic chand ki tareekh ka andaza lagane ka function
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

document.addEventListener("DOMContentLoaded", () => {
    let timeField = document.getElementById("matchTime");
    if (timeField) {
        timeField.addEventListener("change", autoEstimateLunarDate);
        timeField.addEventListener("input", autoEstimateLunarDate);
    }
});

function calculatePrediction() {
    let team1 = document.getElementById("team1").value || "Team 1";
    let captain1 = document.getElementById("captain1").value || "Captain 1";
    let team2 = document.getElementById("team2").value || "Team 2";
    let captain2 = document.getElementById("captain2").value || "Captain 2";
    let ground = document.getElementById("ground") ? document.getElementById("ground").value : "شارجه";
    let matchTimeInput = document.getElementById("matchTime") ? document.getElementById("matchTime").value : "";
    let matchFormat = document.getElementById("matchFormat") ? document.getElementById("matchFormat").value : "t20";
    let tossWinnerChoice = document.getElementById("tossWinner").value;
    
    let lunarDateVal = parseInt(document.getElementById("lunarDate") ? document.getElementById("lunarDate").value : 15) || 15;

    let tossWinnerName = (tossWinnerChoice === "captain1") ? captain1 : captain2;
    let tossTeam = (tossWinnerChoice === "captain1") ? team1 : team2;

    // 1. Asli Urdu/Arabic Abjad & Boroj Values
    let t1Val = getUrduAbjadValue(team1);
    let c1Val = getUrduAbjadValue(captain1);
    let t2Val = getUrduAbjadValue(team2);
    let c2Val = getUrduAbjadValue(captain2);
    let groundVal = getUrduAbjadValue(ground);

    let t1Element = getZodiacElement(t1Val);
    let t2Element = getZodiacElement(t2Val);

    // 2. Advanced Planetary Hours & Toss Calculation Logic (Independent Toss)
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

    // 3. Jafri Zodiac & Shamsi/Qamari Toss Impact Formula
    let tossCaptainChar = tossWinnerName.trim()[0];
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

    // 4. Final Jafri Power Scores Calculation (Connected with Toss Impact & Zodiac Elements)
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
            <strong>🪙 سکہ اچھالنے کا فیصلہ (Toss Analysis):</strong> 
            <br>حاکم سیارہ <span style="color: #38bdf8; font-weight: bold;">${activePlanet}</span> کی روشنی میں، کپتانوں (${captain1} بمقابلہ ${captain2}) کی ابجد پاور کے حساب سے سکہ جیتنے کی سب سے زیادہ صلاحیت <span style="color: #38bdf8; font-weight: bold;">${predictedTossWinner} (${predictedTossTeam})</span> की है۔
            <br><br>✨🔮 **جفری و برج کا اثر (Jafri Toss Impact):** ${tossImpactText}
        </div>

        <div class="analysis-section" style="border-right: 4px solid #a855f7; background: rgba(168, 85, 247, 0.1); padding: 12px; margin-bottom: 12px; border-radius: 6px; text-align: right; direction: rtl;">
            <strong>📊 ٹوٹل سکور کا تخمینہ (${formatLabel}):</strong> 
            <br>• پہلی اننگز کا متوقع اسکور: <span style="color: #a855f7; font-weight: bold;">${estimatedTotal1} سے ${estimatedTotal1 + rangeSpan} رنز</span>
            <br>• دوسری اننگز کا ہدف یا رینج: <span style="color: #a855f7; font-weight: bold;">${estimatedTotal2} سے ${estimatedTotal2 + rangeSpan} رنز</span>
        </div>

        <div class="analysis-section" style="text-align: right; direction: rtl; margin-bottom: 12px; padding: 8px;">
            <strong>🏟️ گراؤنڈ، عنصر (Zodiac) اور ساعت:</strong> 
            <br>• ٹیم 1 عنصر: <span style="color: #38bdf8;">${t1Element}</span> | ٹیم 2 عنصر: <span style="color: #38bdf8;">${t2Element}</span>
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
