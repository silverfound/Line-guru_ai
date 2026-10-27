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
    let matchTime = document.getElementById("matchTime") ? document.getElementById("matchTime").value : "Not Specified";
    let tossWinnerChoice = document.getElementById("tossWinner").value;

    let tossWinnerName = (tossWinnerChoice === "captain1") ? captain1 : captain2;
    let tossTeam = (tossWinnerChoice === "captain1") ? team1 : team2;

    let t1Val = getRealAbjadValue(team1);
    let c1Val = getRealAbjadValue(captain1);
    let t2Val = getRealAbjadValue(team2);
    let c2Val = getRealAbjadValue(captain2);
    let groundVal = getRealAbjadValue(ground);

    let score1 = t1Val + c1Val + (tossWinnerChoice === "captain1" ? 3 : 0);
    let score2 = t2Val + c2Val + (tossWinnerChoice === "captain2" ? 3 : 0);

    let analysisHTML = `
        <div class="analysis-section">
            <strong>📅 Match Timing & Venue:</strong> Waqt (${matchTime ? matchTime : 'Live'}) aur Ground (${ground}, Adad: ${groundVal}) ki energy ke sath, <span class="highlight">${tossWinnerName} (${tossTeam})</span> ne toss jeet kar Position 7 (Control) active kar li hai.
        </div>
        <div class="analysis-section">
            <strong>⚡ Combined Energies (Teams + Captains):</strong> 
            <br>• <strong>${team1} & ${captain1} (Power Score: ${score1}):</strong> Position 1 & 10 (Peak & Winning House) ki alignment.
            <br>• <strong>${team2} & ${captain2} (Power Score: ${score2}):</strong> Position 4 & 7 (Defense & Early Pressure) ki alignment.
        </div>
        <div class="analysis-section" style="border-top: 1px dashed #334155; padding-top: 10px; margin-top: 10px;">
            <strong>🔮 Final Sitaron Ka Natija:</strong> 
            <br>Toss aur shuruati halaat se <strong>${tossTeam}</strong> ko faida milega, lekin asli Abjad aur waqt ki position ke mutabiq <strong>${team1}</strong> aakhri marhalay mein jeet apne naam karegi!
        </div>
    `;

    document.getElementById("outputContent").innerHTML = analysisHTML;
    document.getElementById("resultBox").classList.remove("hidden");
}
