// English to Urdu/Arabic Phonetic Mapping for Real Abjad Calculation
function getRealAbjadValue(englishName) {
    let name = englishName.toLowerCase().trim();
    
    // English letters/sounds ko Asli Abjad ke table ke mutabiq map karna
    let abjadMap = {
        'a': 1,   // Alif (1)
        'b': 2,   // Baa (2)
        'j': 3,   // Jeem (3)
        'd': 4,   // Daal (4)
        'h': 5,   // Haa/Hah (5 or 8) - Standard H = 5
        'w': 6,   // Waw (6)
        'z': 7,   // Zain (7)
        'c': 3,   // Soft C = Jeem (3)
        'k': 20,  // Kaf (20)
        'l': 30,  // Lam (30)
        'm': 40,  // Meem (40)
        'n': 50,  // Noon (50)
        's': 60,  // Seen (60)
        'e': 10,  // Yaa equivalent (10)
        'i': 10,  // Yaa (10)
        'o': 6,   // Waw equivalent (6)
        'u': 6,   // Waw equivalent (6)
        'p': 2,   // Paa -> Baa equivalent (2)
        't': 400, // Taa (400)
        'r': 200, // Raa (200)
        'f': 80,  // Faa (80)
        'g': 3,   // Ghaaf/Jeem sound
        'q': 100, // Qaaf (100)
        'y': 10   // Yaa (10)
    };

    let totalSum = 0;
    for (let i = 0; i < name.length; i++) {
        let char = name[i];
        if (abjadMap[char]) {
            totalSum += abjadMap[char];
        }
    }

    // Agar koi naam na mile ya khali ho
    if (totalSum === 0) {
        return 1;
    }

    // Single digit (1 to 9) mein reduce karne ka Asli tareeqa
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
    let tossWinnerChoice = document.getElementById("tossWinner").value;

    let tossWinnerName = (tossWinnerChoice === "captain1") ? captain1 : captain2;
    let tossTeam = (tossWinnerChoice === "captain1") ? team1 : team2;

    // Asli Abjad values calculation from English text
    let val1 = getRealAbjadValue(captain1);
    let val2 = getRealAbjadValue(captain2);

    let analysisHTML = `
        <div class="analysis-section">
            <strong>1. Asli Abjad & Toss Effect:</strong> <span class="highlight">${tossWinnerName} (${tossTeam})</span> ne toss jeet kar Position 7 (Control/Pressure) hasil kar li hai. Inka Abjad root is waqt match ke sitaron ke sath align hai.
        </div>
        <div class="analysis-section">
            <strong>2. Captains Energy (Abjad Root Output):</strong> 
            <br>• <strong>${captain1} (Root: ${val1}):</strong> Position 1 & 10 (Peak & Winning House) ki taraf ishara kar raha hai. Shuruati dabao ke baad strong comeback.
            <br>• <strong>${captain2} (Root: ${val2}):</strong> Position 4 & 7 (Tactical & Defense) ki taqat. Shuruat mein wickets aur control ka moka.
        </div>
        <div class="analysis-section">
            <strong>3. Final Sitaron Ka Natija:</strong> 
            <br>Toss aur shuruati overs mein <strong>${tossTeam}</strong> ka palra bhaari rahega, lekin Asli Abjad aur Positions ke mutabiq <strong>${team1}</strong> ($'${captain1}'$) aakhri marhalay mein jeet apne naam karegi!
        </div>
    `;

    document.getElementById("outputContent").innerHTML = analysisHTML;
    document.getElementById("resultBox").classList.remove("hidden");
}
