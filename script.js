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
    if (matchTimeInput) {
        let dateObj = new Date(matchTimeInput);
        if (!isNaN(dateObj.getTime())) {
            let dayOfMonth = dateObj.getDate();
            let estimatedLunar = (dayOfMonth % 29) + 1; 
            
            let lunarInput = document.getElementById("lunarDate");
            if (lunarInput) {
                lunarInput.value = estimatedLunar;
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let timeField = document.getElementById("matchTime");
    if (timeField) {
        timeField.addEventListener("change", autoEstimateLunarDate);
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

    // 1. Asli Urdu/Arabic Abjad Values
    let t1Val = getUrduAbjadValue(team1);
    let c1Val = getUrduAbjadValue(captain1);
    let t2Val = getUrduAbjadValue(team2);
    let c2Val = getUrduAbjadValue(captain2);
    let groundVal = getUrduAbjadValue(ground);

    // 2. Advanced Planetary Hours & Toss Calculation Logic
    let dayFactor1 = 1, dayFactor2 = 1, timeScoreBonus1 = 0, timeScoreBonus2 = 0;
    let formattedTimeDisplay = "Venue Live Time / Not Specified";
    let activePlanet = "Mushtari (Jupiter)";
    let earlyPressureTeam = tossTeam;

    let c1TossPower = c1Val;
    let c2TossPower = c2Val;
    let predictedTossWinner = captain1;
    let predictedTossTeam = team1;

    // Format-based Base Score Ranges
    let baseScore1 = 165;
    let baseScore2 = 155;
    let formatLabel = "T20 Match";

    if (matchFormat === "odi") {
        baseScore1 = 285;
        baseScore2 = 270;
        formatLabel = "ODI Match";
    } else if (matchFormat === "test") {
        baseScore1 = 350;
        baseScore2 = 320;
        formatLabel = "Test Match (Per Innings)";
    }

    if (matchTimeInput) {
        let dateObj = new Date(matchTimeInput);
        if (!isNaN(dateObj.getTime())) {
            let dayOfWeek = dateObj.getDay(); 
            let hour = dateObj.getHours();    
            
            if (dayOfWeek % 2 === 0) {
                dayFactor1 = 2;
                c1TossPower += 2;
            } else {
                dayFactor2 = 2;
                c2TossPower += 2;
            }

            const planets = [
                "زحل (Saturn)", "مشتری (Jupiter)", "مریخ (Mars)", 
                "شمس (Sun - Suraj)", "زہرہ (Venus)", "عطارد (Mercury)", "قمر (Moon - Chand)"
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

            formattedTimeDisplay = dateObj.toLocaleString();
        }
    }

    // Mathematical Toss Winner Decision
    if (c2TossPower > c1TossPower) {
        predictedTossWinner = captain2;
        predictedTossTeam = team2;
    } else {
        predictedTossWinner = captain1;
        predictedTossTeam = team1;
    }

    // 3. Final Power Scores Calculation
    let score1 = (t1Val * dayFactor1) + c1Val + Math.floor(groundVal / 2) + (tossWinnerChoice === "captain1" ? 5 : 0) + timeScoreBonus1;
    let score2 = (t2Val * dayFactor2) + c2Val + Math.floor(groundVal / 2) + (tossWinnerChoice === "captain2" ? 5 : 0) + timeScoreBonus2;

    let winningTeam = (score1 >= score2) ? team1 : team2;

    // Strict Mathematical Total Score Calculation based on Format and Ground Adad
    let multiplier = (matchFormat === "odi") ? 1.8 : (matchFormat === "test" ? 2.5 : 1);
    let estimatedTotal1 = Math.round(baseScore1 + (groundVal * multiplier) + ((score1 - score2) > 0 ? (score1 - score2) * 2 : 5));
    let estimatedTotal2 = Math.round(baseScore2 + (groundVal * (multiplier * 0.9)) + (lunarDateVal > 15 ? 12 : -5));
    let rangeSpan = (matchFormat === "test") ? 40 : (matchFormat === "odi" ? 25 : 15);

    // 4. Structured Display with Format Section
    let analysisHTML = `
        <div class="analysis-section" style="border-left: 4px solid #38bdf8; background: rgba(56, 189, 248, 0.1); padding: 10px; margin-bottom: 10px; border-radius: 4px;">
            <strong>🪙 Toss Ki Paheli Prediction (Toss Analysis):</strong> 
            <br>Waqt (${formattedTimeDisplay}) aur Hakim Sayara <span class="highlight">${activePlanet}</span> ki roshni mein, Captains (${captain1} vs ${captain2}) ki Abjad power ke hisab se **Toss jeetne ki sabse zyada salahiyat <span class="highlight">${predictedTossWinner} (${predictedTossTeam})</span> ki hai.**
        </div>

        <div class="analysis-section" style="border-left: 4px solid #a855f7; background: rgba(168, 85, 247, 0.1); padding: 10px; margin-bottom: 10px; border-radius: 4px;">
            <strong>📊 Total Score Prediction (${formatLabel}):</strong> 
            <br>• <strong>Pehli Innings (1st Innings Projected Score):</strong> <span class="highlight">${estimatedTotal1} - ${estimatedTotal1 + rangeSpan} Runs</span>.
            <br>• <strong>Doosri Innings (2nd Innings Target Range):</strong> <span class="highlight">${estimatedTotal2} - ${estimatedTotal2 + rangeSpan} Runs</span>.
        </div>

        <div class="analysis-section">
            <strong>🏟️ Venue & Planetary Sa'at:</strong> Format: <strong>${formatLabel}</strong>, Waqt (${formattedTimeDisplay}), Hakim Sayara: <span class="highlight">${activePlanet}</span>, 🌙 <strong>Chand ki ${lunarDateVal} Tareekh</strong> aur Ground (${ground}) ki energy ke sath match aage barhega.
        </div>

        <div class="analysis-section">
            <strong>⚡ Phase-wise Flow (Pehle Ovarz vs Aakhir):</strong> 
            <br>• <strong>Shuruati Phase (Early Pressure):</strong> Sa'at aur Toss ki initial energy ke tehat <span class="highlight">${earlyPressureTeam}</span> shuru mein match par haavi rah sakti hai.
            <br>• <strong>Asli Abjad Power:</strong> Team 1 Score (${score1}) vs Team 2 Score (${score2}) ka mathematical wazan.
        </div>

        <div class="analysis-section" style="border-top: 1px dashed #334155; padding-top: 10px; margin-top: 10px;">
            <strong>🔮 Final Sitaron Ka Natija:</strong> 
            <br>Shuruati overs ke utaar-chadhaw aur pressure ke baad, Asli Abjad-e-Kabeer aur waqt ki poori energy ke hisab se aakhir mein <strong>${winningTeam}</strong> jeet apne naam karegi!
        </div>
    `;

    document.getElementById("outputContent").innerHTML = analysisHTML;
    document.getElementById("resultBox").classList.remove("hidden");
        }
