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

    // Single digit reduction (Root number 1 to 9)
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
    let tossWinnerChoice = document.getElementById("tossWinner").value;
    
    // User ka dala hua ya auto-fill hone wala chand ka adad (Lunar Date)
    let lunarDateVal = parseInt(document.getElementById("lunarDate") ? document.getElementById("lunarDate").value : 15) || 15;

    let tossWinnerName = (tossWinnerChoice === "captain1") ? captain1 : captain2;
    let tossTeam = (tossWinnerChoice === "captain1") ? team1 : team2;

    // 1. Asli Urdu/Arabic Abjad Values
    let t1Val = getUrduAbjadValue(team1);
    let c1Val = getUrduAbjadValue(captain1);
    let t2Val = getUrduAbjadValue(team2);
    let c2Val = getUrduAbjadValue(captain2);
    let groundVal = getUrduAbjadValue(ground);

    // 2. Venue Time, Day & Lunar Energy Factor Calculation
    let dayFactor1 = 1, dayFactor2 = 1, timeScoreBonus1 = 0, timeScoreBonus2 = 0;
    let formattedTimeDisplay = "Venue Live Time / Not Specified";

    if (matchTimeInput) {
        let dateObj = new Date(matchTimeInput);
        if (!isNaN(dateObj.getTime())) {
            let dayOfWeek = dateObj.getDay(); 
            let hour = dateObj.getHours(); // Venue ka exact ghanta (Sa'at)    
            
            if (dayOfWeek % 2 === 0) {
                dayFactor1 = 2;
            } else {
                dayFactor2 = 2;
            }

            // Chand ki tareekh (Lunar Date) ki roshni aur manazil ka asar
            let lunarEnergyEffect = (lunarDateVal >= 13 && lunarDateVal <= 17) ? 3 : 1; 

            if (hour >= 12) {
                timeScoreBonus1 = (hour % 3) * lunarEnergyEffect;
                timeScoreBonus2 = (hour % 2) * lunarEnergyEffect;
            } else {
                timeScoreBonus1 = (hour % 2) * lunarEnergyEffect;
                timeScoreBonus2 = (hour % 3) * lunarEnergyEffect;
            }

            formattedTimeDisplay = dateObj.toLocaleString();
        }
    }

    // 3. Final Power Scores (Urdu Abjad + Ground + Toss + Venue Time + Lunar Energy)
    let score1 = (t1Val * dayFactor1) + c1Val + Math.floor(groundVal / 2) + (tossWinnerChoice === "captain1" ? 4 : 0) + timeScoreBonus1;
    let score2 = (t2Val * dayFactor2) + c2Val + Math.floor(groundVal / 2) + (tossWinnerChoice === "captain2" ? 4 : 0) + timeScoreBonus2;

    let winningTeam = (score1 >= score2) ? team1 : team2;

    let analysisHTML = `
        <div class="analysis-section">
            <strong>🏟️ Venue Local Time & Ground:</strong> Waqt (${formattedTimeDisplay}), 🌙 <strong>Chand ki ${lunarDateVal} Tareekh</strong> aur Ground (${ground}, Adad: ${groundVal}) ki energy ke sath, <span class="highlight">${tossWinnerName} (${tossTeam})</span> ne toss jeet kar Position 7 (Control) active kar li hai.
        </div>
        <div class="analysis-section">
            <strong>⚡ Asli Abjad & Venue Planetary Energies:</strong> 
            <br>• <strong>${team1} & ${captain1} (Power Score: ${score1}):</strong> Position 1 & 10 (Peak & Winning House).
            <br>• <strong>${team2} & ${captain2} (Power Score: ${score2}):</strong> Position 4 & 7 (Defense & Early Pressure).
        </div>
        <div class="analysis-section" style="border-top: 1px dashed #334155; padding-top: 10px; margin-top: 10px;">
            <strong>🔮 Final Sitaron Ka Natija:</strong> 
            <br>Toss aur shuruati halaat se <strong>${tossTeam}</strong> ko faida milega, lekin asli Abjad-e-Kabeer, قمری تاریخ aur venue ke waqt ki position ke mutabiq aakhir mein <strong>${winningTeam}</strong> jeet apne naam karegi!
        </div>
    `;

    document.getElementById("outputContent").innerHTML = analysisHTML;
    document.getElementById("resultBox").classList.remove("hidden");
}
