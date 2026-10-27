function calculatePrediction() {
    let team1 = document.getElementById("team1").value || "Team 1";
    let captain1 = document.getElementById("captain1").value || "Captain 1";
    let team2 = document.getElementById("team2").value || "Team 2";
    let captain2 = document.getElementById("captain2").value || "Captain 2";
    let tossWinnerChoice = document.getElementById("tossWinner").value;

    let tossWinnerName = (tossWinnerChoice === "captain1") ? captain1 : captain2;
    let tossTeam = (tossWinnerChoice === "captain1") ? team1 : team2;

    // Logic calculation matching our discussion
    let analysisHTML = `
        <div class="analysis-section">
            <strong>1. Toss & Catalyst Effect:</strong> <span class="highlight">${tossWinnerName} (${tossTeam})</span> ne toss jeet kar shuruati control (Position 7 - Pressure/Trap) apne haath mein le liya hai. Inke sitare shuruat mein aggressive perform karenge.
        </div>
        <div class="analysis-section">
            <strong>2. Team Energies & Positions:</strong> 
            <br>• <strong>${team1} (${captain1}):</strong> Position 1 & 10 alignment. Shuruati dabao ke bawajood middle aur death overs mein peak energy par jayenge aur bara target/comeback karenge.
            <br>• <strong>${team2} (${captain2}):</strong> Position 4 & 7 alignment. Disciplined bowling aur toss ke booster se shuru mein wickets nikalne ki poori salahiyat rakhte hain.
        </div>
        <div class="analysis-section">
            <strong>3. Turning Point:</strong> Match ke middle overs mein energy shift hogi. Toss ki taqat pehle team 2 ko favor karegi, lekin final execution team 1 ke peak house ki taraf jayegi.
        </div>
        <div class="analysis-section" style="border-top: 1px dashed #334155; padding-top: 10px; margin-top: 10px;">
            <strong>🔮 Final Sitaron Ka Natija (Prediction):</strong> 
            <br>Shuruati faida <strong>${tossTeam}</strong> ke paas rahega, lekin sitaron ki final position aur energy balance ke mutabiq <strong>${team1}</strong> is mukable ko aakhri overs ke sakht muqable ke baad jeetne ke liye sab se strong position mein hai!
        </div>
    `;

    document.getElementById("outputContent").innerHTML = analysisHTML;
    document.getElementById("resultBox").classList.remove("hidden");
}
