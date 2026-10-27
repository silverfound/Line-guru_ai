// Complete Teams & Captains Database in Pure Urdu (Unicode Safe)
const teamsData = [
    { name: "\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646", captains: { test: "\u0631\u062d\u0645\u062a \u0634\u0627\u06c1", odi: "\u0631\u062d\u0645\u062a \u0634\u0627\u06c1", t20: "\u0631\u0627\u0634\u062f \u062e\u0627\u0646" } },
    { name: "\u0622\u0633\u0679\u0631\u06cc\u0644\u06cc\u0627", captains: { test: "\u067e\u06cc\u0679 \u06a9\u0645\u0646\u0632", odi: "\u0645\u0686\u0644 \u0645\u0627\u0631\u06B1", t20: "\u0645\u0686\u0644 \u0645\u0627\u0631\u06B1" } },
    { name: "\u0628\u0646\u06AF\u0644\u06c1 \u062f\u06cc\u0634", captains: { test: "\u0646\u062c\u0645 \u0627\u0644\u062d\u0633\u0646 \u0634\u0627\u0646\u062a\u0648", odi: "\u0645\u06c1\u062f\u06cc \u062d\u0633\u0646 \u0645\u06cc\u0631\u0627\u0632", t20: "\u0644\u0679\u0646 \u062f\u0627\u0633" } },
    { name: "\u0627\u0646\u06AF\u0644\u06cc\u0646\u0688", captains: { test: "\u0628\u06cc\u0646 \u0627\u0633\u0679\u0648\u06a9\u0633", odi: "\u06c1\u06cc\u0631\u06cc \u0628\u0631\u0648\u06a9", t20: "\u06c1\u06cc\u0631\u06cc \u0628\u0631\u0648\u06a9" } },
    { name: "\u0628\u06be\u0627\u0631\u062a", captains: { test: "\u0634\u0628\u0645\u0646 \u06AF\u0644", odi: "\u0634\u0628\u0645\u0646 \u06AF\u0644", t20: "\u0633\u0648\u0631\u06cc\u06c1 \u06a9\u0645\u0627\u0631 \u06cc\u0627\u062f\u0648" } },
    { name: "\u0622\u0626\u0631\u0644\u06cc\u0646\u0688", captains: { test: "\u0627\u06cc\u0646\u0688\u06cc \u0628\u0627\u0644\u0628\u0631\u0646\u06cc", odi: "\u067e\u0627\u0644 \u0627\u0633\u0679\u0631\u0644\u0646\u06AF", t20: "\u0644\u0648\u0631\u06a9\u0646 \u0679\u06a9\u0631" } },
    { name: "\u0646\u06cc\u0648\u0632\u06cc \u0644\u06cc\u0646\u0688", captains: { test: "\u0679\u0627\u0645 \u0644\u06cc\u0679\u06be\u0645", odi: "\u0645\u0686\u0644 \u0633\u06cc\u0646\u0679\u0646\u0631", t20: "\u0645\u0686\u0644 \u0633\u06cc\u0646\u0679\u0646\u0631" } },
    { name: "\u067e\u0627\u06a9\u0633\u062a\u0627\u0646", captains: { test: "\u0634\u0627\u0646 \u0645\u0633\u0639\u0648\u062f", odi: "\u0634\u0627\u06c1\u06cc\u0646 \u0634\u0627\u06c1 \u0622\u0641\u0631\u06cc\u062f\u06cc", t20: "\u0633\u0644\u0645\u0627\u0646 \u0639\u0644\u06cc \u0622\u063a\u0627" } },
    { name: "\u062c\u0646\u0648\u0628\u06cc \u0627\u0641\u0631\u06cc\u0642\u06c1", captains: { test: "\u0679\u06cc\u0645\u0628\u0627 \u0628\u0627\u0648\u0648\u0645\u0627", odi: "\u0679\u06cc\u0645\u0628\u0627 \u0628\u0627\u0648\u0648\u0645\u0627", t20: "\u0627\u06cc\u0688\u0646 \u0645\u0627\u0631\u06a9\u0631\u0645" } },
    { name: "\u0633\u0631\u06cc \u0644\u0646\u06a9\u0627", captains: { test: "\u062f\u06be\u0646\u0646\u062c\u0627\u06cc\u0627 \u0688\u06cc \u0633\u0644\u0648\u0627", odi: "\u0686\u0627\u0631\u062a\u06be \u0627\u0633\u0627\u0644\u0646\u06a9\u0627", t20: "\u062f\u0627\u0633\u0646 \u0634\u0646\u0627\u06a9\u0627" } },
    { name: "\u0648\u06cc\u0633\u0679 \u0627\u0646\u0688\u06cc\u0632", captains: { test: "\u0631\u0648\u0633\u0679\u0646 \u0686\u06cc\u0632", odi: "\u0634\u0627\u0626\u06cc \u06c1\u0648\u06BE", t20: "\u0634\u0627\u0626\u06cc \u06c1\u0648\u06BE" } },
    { name: "\u0632\u0645\u0628\u0627\u0628\u0648\u06c1", captains: { test: "\u0631\u0686\u0631\u0688 \u0646\u06AF\u0627\u0631\u0627\u0648\u0627", odi: "\u0631\u0686\u0631\u0688 \u0646\u06AF\u0627\u0631\u0627\u0648\u0627", t20: "\u0633\u06a9\u0646\u062f\u0631 \u0631\u0636\u0627" } },
    { name: "\u0646\u0645\u06cc\u0628\u06cc\u0627", captains: { test: "\u06AF\u06cc\u06c1\u0627\u0631\u0688 \u0627\u06cc\u0631\u0627\u0633\u0645\u0633", odi: "\u06AF\u06cc\u06c1\u0627\u0631\u0688 \u0627\u06cc\u0631\u0627\u0633\u0645\u0633", t20: "\u06AF\u06cc\u06c1\u0627\u0631\u0688 \u0627\u06cc\u0631\u0627\u0633\u0645\u0633" } },
    { name: "\u0646\u06cc\u0688\u0631\u0644\u06cc\u0646\u0688\u0632", captains: { test: "\u0627\u0633\u06a9\u0627\u0679 \u0627\u06cc\u0688\u0648\u0631\u0688\u0632", odi: "\u0627\u0633\u06a9\u0627\u0679 \u0627\u06cc\u0688\u0648\u0631\u0688\u0632", t20: "\u0627\u0633\u06a9\u0627\u0679 \u0627\u06cc\u0688\u0648\u0631\u0688\u0632" } },
    { name: "\u0627\u0645\u0631\u06cc\u06a9\u06c1", captains: { test: "\u0645\u0648\u0646\u0646\u06a9 \u067e\u0679\u06cc\u0644", odi: "\u0645\u0648\u0646\u0646\u06a9 \u067e\u0679\u06cc\u0644", t20: "\u0645\u0648\u0646\u0646\u06a9 \u067e\u0679\u06cc\u0644" } },
    { name: "\u0639\u0645\u0627\u0646", captains: { test: "\u062c\u062a\u0646\u062f\u0631 \u0633\u0646\u06AF\u06be", odi: "\u062c\u062a\u0646\u062f\u0631 \u0633\u0646\u06AF\u06be", t20: "\u062c\u062a\u0646\u062f\u0631 \u0633\u0646\u06AF\u06be" } },
    { name: "\u0627\u0633\u06a9\u0627\u0679 \u0644\u06cc\u0646\u0688", captains: { test: "\u0631\u0686\u06cc \u0628\u06cc\u0631\u0646\u06AF\u0679\u0646", odi: "\u0631\u0686\u06cc \u0628\u06cc\u0631\u0646\u06AF\u0679\u0646", t20: "\u0631\u0686\u06cc \u0628\u06cc\u0631\u0646\u06AF\u0679\u0646" } },
    { name: "\u0646\u06cc\u067e\u0627\u0644", captains: { test: "\u0631\u0648\u06c1\u062a \u067e\u0627\u06c1\u0688\u06cc\u0644", odi: "\u0631\u0648\u06c1\u062a \u067e\u0627\u06c1\u0688\u06cc\u0644", t20: "\u0631\u0648\u06c1\u062a \u067e\u0627\u06c1\u0688\u06cc\u0644" } },
    { name: "\u067e\u06a9\u0633\u062a\u0627\u0646 \u0633\u067e\u0631 \u0644\u06cc\u06af - \u0644\u0627\u06c1\u0648\u0631 \u0642\u0644\u0646\u062f\u0631\u0632", captains: { test: "\u0634\u0627\u06c1\u06cc\u0646 \u0634\u0627\u06c1 \u0622\u0641\u0631\u06cc\u062f\u06cc", odi: "\u0634\u0627\u06c1\u06cc\u0646 \u0634\u0627\u06c1 \u0622\u0641\u0631\u06cc\u062f\u06cc", t20: "\u0634\u0627\u06c1\u06cc\u0646 \u0634\u0627\u06c1 \u0622\u0641\u0631\u06cc\u062f\u06cc" } },
    { name: "\u067e\u06a9\u0633\u062a\u0627\u0646 \u0633\u067e\u0631 \u0644\u06cc\u06af - \u06a9\u0631\u0627\u0686\u06cc \u06a9\u0646\u06AF\u0632", captains: { test: "\u0688\u06cc\u0648\u0688 \u0648\u0627\u0631\u0646\u0631", odi: "\u0688\u06cc\u0648\u0688 \u0648\u0627\u0631\u0646\u0631", t20: "\u0688\u06cc\u0648\u0688 \u0648\u0627\u0631\u0646\u0631" } },
    { name: "\u067e\u06a9\u0633\u062a\u0627\u0646 \u0633\u067e\u0631 \u0644\u06cc\u06af - \u067e\u0634\u0627\u0648\u0631 \u0632\u0644\u0645\u06cc", captains: { test: "\u0628\u0627\u0628\u0631 \u0627\u0639\u0638\u0645", odi: "\u0628\u0627\u0628\u0631 \u0627\u0639\u0638\u0645", t20: "\u0628\u0627\u0628\u0631 \u0627\u0639\u0638\u0645" } },
    { name: "\u067e\u06a9\u0633\u062a\u0627\u0646 \u0633\u067e\u0631 \u0644\u06cc\u06af - \u0645\u0644\u062a\u0627\u0646 \u0633\u0644\u0637\u0627\u0646\u0632", captains: { test: "\u0645\u062d\u0645\u062f \u0631\u0636\u0648\u0627\u0646", odi: "\u0645\u062d\u0645\u062f \u0631\u0636\u0648\u0627\u0646", t20: "\u0645\u062d\u0645\u062f \u0631\u0636\u0648\u0627\u0646" } },
    { name: "\u067e\u06a9\u0633\u062a\u0627\u0646 \u0633\u067e\u0631 \u0644\u06cc\u06af - \u0627\u0633\u0644\u0627\u0645 \u0622\u0628\u0627\u062f \u06cc\u0648\u0646\u0627\u0626\u06cc\u0679\u0688", captains: { test: "\u0634\u0627\u062f\u0627\u0628 \u062e\u0627\u0646", odi: "\u0634\u0627\u062f\u0627\u0628 \u062e\u0627\u0646", t20: "\u0634\u0627\u062f\u0627\u0628 \u062e\u0627\u0646" } },
    { name: "\u0627\u0646\u0688\u06cc\u0646 \u067e\u0631\u06cc\u0645\u06cc\u0626\u0631 \u0644\u06cc\u06af - \u0645\u0645\u0628\u0626\u06cc \u0627\u0646\u0688\u06cc\u0646\u0632", captains: { test: "\u06c1\u0627\u0631\u062f\u06a9 \u067e\u0627\u0646\u0688\u06cc\u0627", odi: "\u06c1\u0627\u0631\u062f\u06a9 \u067e\u0627\u0646\u0688\u06cc\u0627", t20: "\u06c1\u0627\u0631\u062f\u06a9 \u067e\u0627\u0646\u0688\u06cc\u0627" } },
    { name: "\u0627\u0646\u0688\u06cc\u0646 \u067e\u0631\u06cc\u0645\u06cc\u0626\u0631 \u0644\u06cc\u06af - \u0686\u0646\u0626\u06cc \u0633\u067e\u0631 \u06a9\u0646\u06AF\u0632", captains: { test: "\u0631\u062a\u0648\u0631\u0627\u062c \u06AF\u0627\u0626\u06cc\u06a9\u0648\u0627\u0691", odi: "\u0631\u062a\u0648\u0631\u0627\u062c \u06AF\u0627\u0626\u06cc\u06a9\u0648\u0627\u0691", t20: "\u0631\u062a\u0648\u0631\u0627\u062c \u06AF\u0627\u0626\u06cc\u06a9\u0648\u0627\u0691" } },
    { name: "\u0627\u0646\u0688\u06cc\u0646 \u067e\u0631\u06cc\u0645\u06cc\u0626\u0631 \u0644\u06cc\u06af - \u0631\u0627\u0626\u0644 \u0686\u06cc\u0644\u06cc\u0646\u06AC\u0631\u0632 \u0628\u06AD\u0644\u0648\u0631", captains: { test: "\u0631\u062c\u062a \u067e\u0627\u0679\u06cc\u062f\u0627\u0631", odi: "\u0631\u062c\u062a \u067e\u0627\u0679\u06cc\u062f\u0627\u0631", t20: "\u0631\u062c\u062a \u067e\u0627\u0679\u06cc\u062f\u0627\u0631" } }
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

    t1Select.innerHTML = '<option value="">-- ٹیم منتخب کریں --</option>';
    t2Select.innerHTML = '<option value="">-- ٹیم منتخب کریں --</option>';

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
        '\u0627': 1, '\u0623': 1, '\u0625': 1, '\u0622': 1, '\u0628': 2, '\u062C': 3, '\u062F': 4,
        '\u0647': 5, '\u0648': 6, '\u0632': 7, '\u062D': 8, '\u0637': 9, '\u064A': 10, '\u06CC': 10, '\u0626': 10,
        '\u0643': 20, '\u06A9': 20, '\u0644': 30, '\u0645': 40, '\u0646': 50, '\u0633': 60, '\u0639': 70,
        '\u0641': 80, '\u0635': 90, '\u0642': 100, '\u0631': 200, '\u0634': 300, '\u062A': 400,
        '\u062B': 500, '\u062E': 600, '\u0630': 700, '\u0636': 800, '\u0638': 900, '\u063A': 1000,
        '\u067E': 2, '\u0686': 3, '\u0698': 7, '\u06AF': 20, '\u0688': 4, '\u0691': 200, '\u06BA': 50, '\u06BE': 5, '\u06C1': 5
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
    const elements = ["\u0622\u062A\u0634\u06cc (Fire)", "\u062E\u0627\u06A9\u06cc (Earth)", "\u06BE\u0648\u0627\u0626\u06cc (Air)", "\u0622\u0628\u06cc (Water)"];
    return elements[val % 4];
}

function getSolarLunarType(text) {
    if (!text) return "qamari";
    let firstChar = text.trim()[0];
    let shamsiChars = ['\u062A', '\u062B', '\u062F', '\u0630', '\u0631', '\u0632', '\u0633', '\u0634', '\u0635', '\u0636', '\u0637', '\u0638', '\u0644', '\u0646'];
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
    let ground = document.getElementById("ground") ? document.getElementById("ground").value : "\u0634\u0627\u0631\u062c\u06c1";
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
    let activePlanet = "\u0645\u0634\u062a\u0631\u06cc";
    let earlyPressureTeam = tossTeam;
    let hour = 12;

    let c1TossPower = c1Val;
    let c2TossPower = c2Val;
    let predictedTossWinner = captain1;
    let predictedTossTeam = team1;

    let baseScore1 = 165;
    let baseScore2 = 155;
    let formatLabel = "\u0679\u06cc \u0679\u0648\u0626\u0646\u0679\u06cc \u0645\u06cc\u0686";

    if (matchFormat === "odi") {
        baseScore1 = 285;
        baseScore2 = 270;
        formatLabel = "\u06cc\u06a9 \u0631\u0648\u0632\u06c1 \u0645\u06cc\u0686 (ODI)";
    } else if (matchFormat === "test") {
        baseScore1 = 350;
        baseScore2 = 320;
        formatLabel = "\u0679\u06cc\u0633\u0679 \u0645\u06cc\u0686";
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

            const planets = ["\u0632\u062d\u0644", "\u0645\u0634\u062a\u0631\u06cc", "\u0645\u0631\u06cc\u062e", "\u0634\u0645\u0633", "\u0632\u06c1\u0631\u06c1", "\u0639\u0637\u0627\u0631\u062f", "\u0642\u0645\u0631"];
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

    let tossImpactScore = 10; 
    let tossImpactText = "\u06a9\u067e\u062a\u0627\u0646 \u06a9\u06d2 \u0628\u0631\u06AC \u0627\u0648\u0631 \u0633\u0627\u0639\u062a \u06a9\u06cc \u0645\u0648\u0627\u0641\u0642\u062a \u06c1\u06d2\u0633";

    let zodicBoost1 = 5;
    let zodicBoost2 = 5;

    let score1 = (t1Val * dayFactor1) + c1Val + Math.floor(groundVal / 2) + timeScoreBonus1 + zodicBoost1 + (tossWinnerChoice === "captain1" ? tossImpactScore : 0);
    let score2 = (t2Val * dayFactor2) + c2Val + Math.floor(groundVal / 2) + timeScoreBonus2 + zodicBoost2 + (tossWinnerChoice === "captain2" ? tossImpactScore : 0);

    let winningTeam = (score1 >= score2) ? team1 : team2;

    let multiplier = (matchFormat === "odi") ? 1.8 : (matchFormat === "test" ? 2.5 : 1);
    let estimatedTotal1 = Math.round(baseScore1 + (groundVal * multiplier) + ((score1 - score2) > 0 ? (score1 - score2) * 2 : 5));
    let estimatedTotal2 = Math.round(baseScore2 + (groundVal * (multiplier * 0.9)) + (lunarDateVal > 15 ? 12 : -5));
    let rangeSpan = (matchFormat === "test") ? 40 : (matchFormat === "odi" ? 25 : 15);

    let analysisHTML = `
        <div class="analysis-section" style="border-right: 4px solid #38bdf8; background: rgba(56, 189, 248, 0.1); padding: 12px; margin-bottom: 12px; border-radius: 6px; text-align: right; direction: rtl;">
            <strong>\u0633\u06a9\u06c1 \u0627\u0686\u06be\u0627\u0644\u0646\u06bc \u06a9\u0627 \u0641\u06cc\u0635\u0644\u06c1:</strong> 
            <br>\u062d\u0627\u06a9\u0645 \u0633\u06cc\u0627\u0631\u06c1 <span style="color: #38bdf8; font-weight: bold;">${activePlanet}</span> \u06a9\u06cc \u0631\u0648\u0634\u0646\u06cc \u0645\u06cc\u06ba\u06d4 <span style="color: #38bdf8; font-weight: bold;">${predictedTossWinner} (${predictedTossTeam})</span> \u06a9\u06d2 \u062c\u062a\u0646\u06d2 \u06a9\u0627 \u0627\u0645\u06A9\u0627\u0646 \u0632\u06cc\u0627\u062f\u06c1 \u06c1\u06d2\u06d4
        </div>

        <div class="analysis-section" style="border-right: 4px solid #a855f7; background: rgba(168, 85, 247, 0.1); padding: 12px; margin-bottom: 12px; border-radius: 6px; text-align: right; direction: rtl;">
            <strong>\u0679\u0648\u0679\u0644 \u0633\u06A9\u0648\u0631 \u06a9\u0627 \u062a\u062e\u0645\u06cc\u0646\u06c1 (${formatLabel}):</strong> 
            <br>\u067e\u06c1\u0644\u06cc \u0627\u0646\u0646\u06AF\u0632: <span style="color: #a855f7; font-weight: bold;">${estimatedTotal1} \u0633\u06d2 ${estimatedTotal1 + rangeSpan} \u0631\u0646\u0632</span>
        </div>

        <div class="analysis-section" style="border-top: 1px dashed #334155; padding-top: 12px; margin-top: 10px; text-align: right; direction: rtl;">
            <strong>\u0633\u062a\u0627\u0631\u0648\u06BA \u06a9\u0627 \u062d\u062a\u0645\u06cc \u0646\u062a\u06cc\u062c\u06c1:</strong> 
            <br>\u0627\u062e\u0631 \u0645\u06cc\u06ba <strong style="color: #38bdf8;">${winningTeam}</strong> \u0641\u062a\u062d \u0627\u067e\u0646\u06d2 \u0646\u0627\u0645 \u06a9\u0631\u06d2 \u06AF\u06cc!
        </div>
    `;

    document.getElementById("outputContent").innerHTML = analysisHTML;
    document.getElementById("resultBox").classList.remove("hidden");
}
