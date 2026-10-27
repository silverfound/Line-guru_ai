function getRealAbjadValue(englishText) {
    if (!englishText) return 1;
    let name = englishText.toLowerCase().trim();
    
    let abjadMap = {
        'a': 1, 'b': 2, 'j': 3, 'd': 4, 'h': 5, 'w': 6, 'z': 7,
        'c': 3, 'k': 20, 'l': 30, 'm': 40, 'n': 50, 's': 60,
        'e': 10, 'i': 10, 'o': 6, 'u': 6, 'p': 2, 't': 400,
        'r': 200, 'f': 80, 'g': 3, 'q': 100, 'y': 10, 'x': 60
    };

    let totalSum = 0;
    for (let i = 0; i < name.length; i++) {
        let char = name[i];
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

function calculatePrediction() {
    let team1 = document.getElementById("team1").value || "Team 1";
    let captain1 = document.getElementById("captain1").value || "Captain 1";
    let team2 = document.getElementById("team2").value || "Team 2";
    let captain2 = document.getElementById("captain2").value || "Captain 2";
    let ground = document.getElementById("ground") ? document.getElementById("ground").value : "Sharjah";
    let matchTimeInput = document.getElementById("matchTime") ? document.getElementById("matchTime").value : "";
    let tossWinnerChoice = document.getElementById("tossWinner").value;

    let tossWinnerName = (tossWinnerChoice === "captain1") ? captain1 : captain2;
    let tossTeam = (tossWinnerChoice === "captain1") ? team1 : team2;

    // 1. Base Abjad Values
    let t1Val = getRealAbjadValue(team1);
    let c1Val = getRealAbjadValue(captain1);
    let t2Val = getRealAbjadValue(team2);
    let c2Val = getRealAbjadValue(captain2);
    let groundVal = getRealAbjadValue(ground);

    // 2. Date & Time Factor Calculation (Day & Hour)
    let dayFactor1 = 1, dayFactor2 = 1, timeScoreBonus1 = 0, timeScoreBonus2 = 0;
    let formattedTimeDisplay = "Live / Not Specified";

    if (matchTimeInput) {
        let dateObj = new Date(matchTimeInput);
        if (!isNaN(dateObj.getTime())) {
            let dayOfWeek = dateObj.getDay(); // 0 (Sun) to 6 (Sat)
            let hour = dateObj.getHours();    // 0 to 23
            
            // Day influence split
            if (dayOfWeek % 2 === 0) {
                dayFactor1 = 2;
            } else {
                dayFactor2 = 2;
            }

            // Time Hour influence (Sa'at / Timing shift)
            if (hour >= 12) {
                timeScoreBonus1 = (hour % 3);
                timeScoreBonus2 = (hour % 2);
            } else {
                timeScoreBonus1 = (hour % 2);
                timeScoreBonus2 = (hour % 3);
            }

            formattedTimeDisplay = dateObj.toLocaleString();
        }
    }

    // 3. Final Combined Power Scores (Including Teams, Captains, Ground, Toss, Date & Time)
    let score1 = (t1Val * dayFactor1) + c1Val + Math.floor(groundVal / 2) + (tossWinnerChoice === "captain1" ? 4 : 0) + timeScoreBonus1;
    let score2 = (t2Val * dayFactor2) + c2Val + Math.floor(groundVal / 2) + (tossWinnerChoice === "captain2" ? 4 : 0) + timeScoreBonus2;

    let winningTeam = (score1 >= score2) ? team1 : team2;
    let losingTeam = (score1 >= score2) ? team2 : team1;

    let analysisHTML = `
        <div class="analysis-section">
            <strong>📅 Match Date, Time & Venue:</strong> Waqt (${formattedTimeDisplay}) aur Ground (${ground}, Adad: ${groundVal}) ki energy ke sath, <span class="highlight">${tossWinnerName} (${tossTeam})</span> ne toss jeet kar Position 7 (Control) active kar li hai.
        </div>
        <div class="analysis-section">
            <strong>⚡ Combined Energies (Teams + Captains + Time/Day):</strong> 
            <br>• <strong>${team1} & ${captain1} (Power Score: ${score1}):</strong> Position 1 & 10 (Peak & Winning House).
            <br>• <strong>${team2} & ${captain2} (Power Score: ${score2}):</strong> Position 4 & 7 (Defense & Early Pressure).
        </div>
        <div class="analysis-section" style="border-top: 1px dashed #334155; padding-top: 10px; margin-top: 10px;">
            <strong>🔮 Final Sitaron Ka Natija:</strong> 
            <br>Toss aur shuruati halaat se <strong>${tossTeam}</strong> ko faida milega, lekin asli Abjad, Din, aur waqt ki badalti hui position ke mutabiq aakhir mein <strong>${winningTeam}</strong> jeet apne naam karegi!
        </div>
    `;

    document.getElementById("outputContent").innerHTML = analysisHTML;
    document.getElementById("resultBox").classList.remove("hidden");
}
