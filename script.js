// English-only cricket teams and league database
const teamsData = [
 {name:"Afghanistan",captains:{test:"Hashmatullah Shahidi",odi:"Hashmatullah Shahidi",t20:"Rashid Khan"}},
 {name:"Australia",captains:{test:"Pat Cummins",odi:"Mitchell Marsh",t20:"Mitchell Marsh"}},
 {name:"Bangladesh",captains:{test:"Najmul Hossain Shanto",odi:"Mehidy Hasan Miraz",t20:"Litton Das"}},
 {name:"England",captains:{test:"Ben Stokes",odi:"Harry Brook",t20:"Harry Brook"}},
 {name:"India",captains:{test:"Shubman Gill",odi:"Shubman Gill",t20:"Suryakumar Yadav"}},
 {name:"Ireland",captains:{test:"Andy Balbirnie",odi:"Paul Stirling",t20:"Lorcan Tucker"}},
 {name:"New Zealand",captains:{test:"Tom Latham",odi:"Mitchell Santner",t20:"Mitchell Santner"}},
 {name:"Pakistan",captains:{test:"Shan Masood",odi:"Shaheen Afridi",t20:"Salman Ali Agha"}},
 {name:"South Africa",captains:{test:"Temba Bavuma",odi:"Temba Bavuma",t20:"Aiden Markram"}},
 {name:"Sri Lanka",captains:{test:"Dhananjaya de Silva",odi:"Kusal Mendis",t20:"Dasun Shanaka"}},
 {name:"West Indies",captains:{test:"Roston Chase",odi:"Shai Hope",t20:"Shai Hope"}},
 {name:"Zimbabwe",captains:{test:"Craig Ervine",odi:"Craig Ervine",t20:"Sikandar Raza"}},
 {name:"Namibia",captains:{test:"Gerhard Erasmus",odi:"Gerhard Erasmus",t20:"Gerhard Erasmus"}},
 {name:"Netherlands",captains:{test:"Scott Edwards",odi:"Scott Edwards",t20:"Scott Edwards"}},
 {name:"United States",captains:{test:"Monank Patel",odi:"Monank Patel",t20:"Monank Patel"}},
 {name:"Oman",captains:{test:"Jatinder Singh",odi:"Jatinder Singh",t20:"Jatinder Singh"}},
 {name:"Scotland",captains:{test:"Richie Berrington",odi:"Richie Berrington",t20:"Richie Berrington"}},
 {name:"Nepal",captains:{test:"Rohit Paudel",odi:"Rohit Paudel",t20:"Rohit Paudel"}},
 {name:"United Arab Emirates",captains:{test:"Muhammad Waseem",odi:"Muhammad Waseem",t20:"Muhammad Waseem"}},
 {name:"Hong Kong",captains:{test:"Nizakat Khan",odi:"Nizakat Khan",t20:"Nizakat Khan"}},
 {name:"Indian Premier League - Chennai Super Kings",captain:"Ruturaj Gaikwad"},
 {name:"Indian Premier League - Delhi Capitals",captain:"Axar Patel"},
 {name:"Indian Premier League - Gujarat Titans",captain:"Shubman Gill"},
 {name:"Indian Premier League - Kolkata Knight Riders",captain:"Ajinkya Rahane"},
 {name:"Indian Premier League - Lucknow Super Giants",captain:"Rishabh Pant"},
 {name:"Indian Premier League - Mumbai Indians",captain:"Hardik Pandya"},
 {name:"Indian Premier League - Punjab Kings",captain:"Shreyas Iyer"},
 {name:"Indian Premier League - Rajasthan Royals",captain:"Riyan Parag"},
 {name:"Indian Premier League - Royal Challengers Bengaluru",captain:"Rajat Patidar"},
 {name:"Indian Premier League - Sunrisers Hyderabad",captain:"Ishan Kishan"},
 {name:"Pakistan Super League - Islamabad United",captain:"Shadab Khan"},
 {name:"Pakistan Super League - Karachi Kings",captain:"David Warner"},
 {name:"Pakistan Super League - Lahore Qalandars",captain:"Shaheen Afridi"},
 {name:"Pakistan Super League - Multan Sultans",captain:"Mohammad Rizwan"},
 {name:"Pakistan Super League - Peshawar Zalmi",captain:"Babar Azam"},
 {name:"Pakistan Super League - Quetta Gladiators",captain:"Saud Shakeel"},
 {name:"Big Bash League - Adelaide Strikers",captain:"Matthew Short"},
 {name:"Big Bash League - Brisbane Heat",captain:"Usman Khawaja"},
 {name:"Big Bash League - Hobart Hurricanes",captain:"Nathan Ellis"},
 {name:"Big Bash League - Melbourne Renegades",captain:"Will Sutherland"},
 {name:"Big Bash League - Melbourne Stars",captain:"Marcus Stoinis"},
 {name:"Big Bash League - Perth Scorchers",captain:"Ashton Turner"},
 {name:"Big Bash League - Sydney Sixers",captain:"Moises Henriques"},
 {name:"Big Bash League - Sydney Thunder",captain:"David Warner"},
 {name:"SA20 - Durban's Super Giants",captain:"Aiden Markram"},
 {name:"SA20 - Joburg Super Kings",captain:"Faf du Plessis"},
 {name:"SA20 - MI Cape Town",captain:"Rashid Khan"},
 {name:"SA20 - Paarl Royals",captain:"David Miller"},
 {name:"SA20 - Pretoria Capitals",captain:"Keshav Maharaj"},
 {name:"SA20 - Sunrisers Eastern Cape",captain:"Tristan Stubbs"},
 {name:"International League T20 - Abu Dhabi Knight Riders",captain:"Jason Holder"},
 {name:"International League T20 - Desert Vipers",captain:"Lockie Ferguson"},
 {name:"International League T20 - Dubai Capitals",captain:"David Warner"},
 {name:"International League T20 - Gulf Giants",captain:"James Vince"},
 {name:"International League T20 - MI Emirates",captain:"Nicholas Pooran"},
 {name:"International League T20 - Sharjah Warriorz",captain:"Tom Kohler-Cadmore"}
,
 // Women's international teams
 {name:"Women's International - Afghanistan",captain:""},
 {name:"Women's International - Australia",captain:"Alyssa Healy"},
 {name:"Women's International - Bangladesh",captain:"Nigar Sultana Joty"},
 {name:"Women's International - England",captain:"Nat Sciver-Brunt"},
 {name:"Women's International - India",captain:"Harmanpreet Kaur"},
 {name:"Women's International - Ireland",captain:"Gaby Lewis"},
 {name:"Women's International - New Zealand",captain:"Sophie Devine"},
 {name:"Women's International - Pakistan",captain:"Fatima Sana"},
 {name:"Women's International - South Africa",captain:"Laura Wolvaardt"},
 {name:"Women's International - Sri Lanka",captain:"Chamari Athapaththu"},
 {name:"Women's International - West Indies",captain:"Hayley Matthews"},
 {name:"Women's International - Zimbabwe",captain:"Mary-Anne Musonda"},
 // Women's Premier League (WPL)
 {name:"Women's Premier League - Delhi Capitals",captain:""},
 {name:"Women's Premier League - Gujarat Giants",captain:""},
 {name:"Women's Premier League - Mumbai Indians",captain:""},
 {name:"Women's Premier League - Royal Challengers Bengaluru",captain:""},
 {name:"Women's Premier League - UP Warriorz",captain:""},
 // Women's Big Bash League (WBBL) — all eight teams
 {name:"Women's Big Bash League - Adelaide Strikers",captain:""},
 {name:"Women's Big Bash League - Brisbane Heat",captain:""},
 {name:"Women's Big Bash League - Hobart Hurricanes",captain:""},
 {name:"Women's Big Bash League - Melbourne Renegades",captain:""},
 {name:"Women's Big Bash League - Melbourne Stars",captain:""},
 {name:"Women's Big Bash League - Perth Scorchers",captain:""},
 {name:"Women's Big Bash League - Sydney Sixers",captain:""},
 {name:"Women's Big Bash League - Sydney Thunder",captain:""},
 // The Hundred Men's Competition
 {name:"The Hundred Men - Birmingham Phoenix",captain:""},
 {name:"The Hundred Men - London Spirit",captain:""},
 {name:"The Hundred Men - Manchester Originals",captain:""},
 {name:"The Hundred Men - Northern Superchargers",captain:""},
 {name:"The Hundred Men - Oval Invincibles",captain:""},
 {name:"The Hundred Men - Southern Brave",captain:""},
 {name:"The Hundred Men - Trent Rockets",captain:""},
 {name:"The Hundred Men - Welsh Fire",captain:""},
 // The Hundred Women's Competition
 {name:"The Hundred Women - Birmingham Phoenix",captain:""},
 {name:"The Hundred Women - London Spirit",captain:""},
 {name:"The Hundred Women - Manchester Originals",captain:""},
 {name:"The Hundred Women - Northern Superchargers",captain:""},
 {name:"The Hundred Women - Oval Invincibles",captain:""},
 {name:"The Hundred Women - Southern Brave",captain:""},
 {name:"The Hundred Women - Trent Rockets",captain:""},
 {name:"The Hundred Women - Welsh Fire",captain:""},
 // Women's Caribbean Premier League (WCPL) — all four 2026 teams
 {name:"Women's Caribbean Premier League - Barbados Tridents",captain:""},
 {name:"Women's Caribbean Premier League - Guyana Amazon Warriors",captain:""},
 {name:"Women's Caribbean Premier League - Jamaica Empress",captain:""},
 {name:"Women's Caribbean Premier League - Trinbago Knight Riders",captain:""},
 // Caribbean Premier League (CPL) — men's franchises
 {name:"Caribbean Premier League - Antigua & Barbuda Falcons",captain:""},
 {name:"Caribbean Premier League - Barbados Royals",captain:""},
 {name:"Caribbean Premier League - Guyana Amazon Warriors",captain:""},
 {name:"Caribbean Premier League - Saint Lucia Kings",captain:""},
 {name:"Caribbean Premier League - St Kitts & Nevis Patriots",captain:""},
 {name:"Caribbean Premier League - Trinbago Knight Riders",captain:""},
 // Major League Cricket (MLC)
 {name:"Major League Cricket - MI New York",captain:""},
 {name:"Major League Cricket - Los Angeles Knight Riders",captain:""},
 {name:"Major League Cricket - Seattle Orcas",captain:""},
 {name:"Major League Cricket - Texas Super Kings",captain:""},
 {name:"Major League Cricket - Washington Freedom",captain:""},
 {name:"Major League Cricket - San Francisco Unicorns",captain:""},
 // Nepal Premier League (NPL)
 {name:"Nepal Premier League - Biratnagar Kings",captain:""},
 {name:"Nepal Premier League - Chitwan Rhinos",captain:""},
 {name:"Nepal Premier League - Janakpur Bolts",captain:""},
 {name:"Nepal Premier League - Karnali Yaks",captain:""},
 {name:"Nepal Premier League - Kathmandu Gurkhas",captain:""},
 {name:"Nepal Premier League - Lumbini Lions",captain:""},
 {name:"Nepal Premier League - Pokhara Avengers",captain:""},
 {name:"Nepal Premier League - Sudurpaschim Royals",captain:""},
 // England and Wales Vitality Blast — county teams
 {name:"Vitality Blast - Derbyshire Falcons",captain:""},
 {name:"Vitality Blast - Durham",captain:""},
 {name:"Vitality Blast - Essex",captain:""},
 {name:"Vitality Blast - Glamorgan",captain:""},
 {name:"Vitality Blast - Gloucestershire",captain:""},
 {name:"Vitality Blast - Hampshire Hawks",captain:""},
 {name:"Vitality Blast - Kent",captain:""},
 {name:"Vitality Blast - Lancashire Lightning",captain:""},
 {name:"Vitality Blast - Leicestershire Foxes",captain:""},
 {name:"Vitality Blast - Middlesex",captain:""},
 {name:"Vitality Blast - Northamptonshire Steelbacks",captain:""},
 {name:"Vitality Blast - Nottinghamshire Outlaws",captain:""},
 {name:"Vitality Blast - Somerset",captain:""},
 {name:"Vitality Blast - Surrey",captain:""},
 {name:"Vitality Blast - Sussex Sharks",captain:""},
 {name:"Vitality Blast - Warwickshire Bears",captain:""},
 {name:"Vitality Blast - Worcestershire Rapids",captain:""},
 {name:"Vitality Blast - Yorkshire",captain:""},
 // Abu Dhabi T10 — franchise teams (team names can change by season)
 {name:"Abu Dhabi T10 - Ajman Titans",captain:""},
 {name:"Abu Dhabi T10 - Bangla Tigers",captain:""},
 {name:"Abu Dhabi T10 - Deccan Gladiators",captain:""},
 {name:"Abu Dhabi T10 - Delhi Bulls",captain:""},
 {name:"Abu Dhabi T10 - Morrisville Samp Army",captain:""},
 {name:"Abu Dhabi T10 - Northern Warriors",captain:""},
 {name:"Abu Dhabi T10 - Team Abu Dhabi",captain:""},
 {name:"Abu Dhabi T10 - The Chennai Braves",captain:""},
 // New Zealand Super Smash — men's teams
 {name:"Super Smash Men - Auckland Aces",captain:""},
 {name:"Super Smash Men - Canterbury Kings",captain:""},
 {name:"Super Smash Men - Central Stags",captain:""},
 {name:"Super Smash Men - Northern Districts",captain:""},
 {name:"Super Smash Men - Otago Volts",captain:""},
 {name:"Super Smash Men - Wellington Firebirds",captain:""},
 // New Zealand Super Smash — women's teams
 {name:"Super Smash Women - Auckland Hearts",captain:""},
 {name:"Super Smash Women - Canterbury Magicians",captain:""},
 {name:"Super Smash Women - Central Hinds",captain:""},
 {name:"Super Smash Women - Northern Brave Women",captain:""},
 {name:"Super Smash Women - Otago Sparks",captain:""},
 {name:"Super Smash Women - Wellington Blaze",captain:""},
 // Women's T20 Spring Challenge — Australian domestic competition
 {name:"Women's T20 Spring Challenge - ACT Meteors",captain:""},
 {name:"Women's T20 Spring Challenge - New South Wales Breakers",captain:""},
 {name:"Women's T20 Spring Challenge - Queensland Fire",captain:""},
 {name:"Women's T20 Spring Challenge - South Australian Scorpions",captain:""},
 {name:"Women's T20 Spring Challenge - Tasmania",captain:""},
 {name:"Women's T20 Spring Challenge - Victoria",captain:""},
 {name:"Women's T20 Spring Challenge - Western Australia",captain:""},
 // Caribbean Premier League aliases from 2026 team branding
 {name:"Caribbean Premier League - Barbados Tridents",captain:""},
 {name:"Caribbean Premier League - Jamaica Kingsmen",captain:""},
 // Global Super League — participating teams vary by season
 {name:"Global Super League - Guyana Amazon Warriors",captain:""},
 {name:"Global Super League - Lahore Qalandars",captain:""},
 {name:"Global Super League - Rangpur Riders",captain:""},
 {name:"Global Super League - Victoria",captain:""},
 {name:"Global Super League - Hampshire",captain:""},
 // Lanka Premier League (LPL) — 2026 franchises
 {name:"Lanka Premier League - Jaffna Kings",captain:""},
 {name:"Lanka Premier League - Galle Gallants",captain:""},
 {name:"Lanka Premier League - Colombo Kaps",captain:""},
 {name:"Lanka Premier League - Kandy Royals",captain:""},
 {name:"Lanka Premier League - Dambulla Sixers",captain:""},
 // Bangladesh Premier League (BPL) — 2026 franchises
 {name:"Bangladesh Premier League - Chattogram Royals",captain:""},
 {name:"Bangladesh Premier League - Dhaka Capitals",captain:""},
 {name:"Bangladesh Premier League - Noakhali Express",captain:""},
 {name:"Bangladesh Premier League - Rajshahi Warriors",captain:""},
 {name:"Bangladesh Premier League - Rangpur Riders",captain:""},
 {name:"Bangladesh Premier League - Sylhet Titans",captain:""},
 // Global T20 Canada — recent franchise names
 {name:"Global T20 Canada - Bangla Tigers Mississauga",captain:""},
 {name:"Global T20 Canada - Brampton Wolves",captain:""},
 {name:"Global T20 Canada - Montreal Tigers",captain:""},
 {name:"Global T20 Canada - Surrey Jaguars",captain:""},
 {name:"Global T20 Canada - Toronto Nationals",captain:""},
 {name:"Global T20 Canada - Vancouver Knights",captain:""},
 // GT20 Canada 2026 listed franchises
 {name:"GT20 Canada 2026 - Mississauga Skyhawks",captain:""},
 {name:"GT20 Canada 2026 - Toronto Kings",captain:""},
 {name:"GT20 Canada 2026 - Vancouver Guardians",captain:""},
 {name:"GT20 Canada 2026 - Montreal Warriors",captain:""},
 {name:"GT20 Canada 2026 - Brampton Blazers",captain:""},
 // Women's IPL (commonly known as WPL)
 {name:"Women's IPL - Delhi Capitals",captain:""},
 {name:"Women's IPL - Gujarat Giants",captain:""},
 {name:"Women's IPL - Mumbai Indians",captain:""},
 {name:"Women's IPL - Royal Challengers Bengaluru",captain:""},
 {name:"Women's IPL - UP Warriorz",captain:""}];/* Cricket-statistics prototype.
   The team/captain database above is preserved from the previous project.
   No astrology, Abjad, lunar-date, or planetary-hour calculations are used. */

document.addEventListener("DOMContentLoaded", () => {
    populateTeamDropdowns();
    updateTossWinnerOptions();
    updateBattingTeamOptions();
    document.getElementById("team1Select").addEventListener("change", () => {
        updateCaptain(1);
        updateTossWinnerOptions();
        updateBattingTeamOptions();
    });
    document.getElementById("team2Select").addEventListener("change", () => {
        updateCaptain(2);
        updateTossWinnerOptions();
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
        select.innerHTML = '<option value="">-- Select a team --</option>';
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

function updateTossWinnerOptions() {
    const select = document.getElementById("tossWinner");
    if (!select) return;
    const previous = select.value;
    const team1 = teamName(1) || "Team 1";
    const team2 = teamName(2) || "Team 2";
    select.innerHTML = '<option value="">Not known yet</option><option value="1"></option><option value="2"></option>';
    select.options[1].textContent = team1;
    select.options[2].textContent = team2;
    if (previous === "1" || previous === "2") select.value = previous;
}

function updateBattingTeamOptions() {
    const select = document.getElementById("battingTeam");
    if (!select) return;
    const previous = select.value;
    select.innerHTML = '<option value="1">Team 1</option><option value="2">Team 2</option>';
    const a = teamName(1) || "Team 1";
    const b = teamName(2) || "Team 2";
    select.options[0].textContent = a;
    select.options[1].textContent = b;
    if (previous === "1" || previous === "2") select.value = previous;
    updateChaseTargetLabel();
}

function updateChaseTargetLabel() {
    const label = document.getElementById("targetLabel");
    if (label) label.textContent = "Target";
}

function updateInningsFields() {
    const chase = document.getElementById("inningsType").value === "chase";
    document.getElementById("targetGroup").classList.toggle("hidden", !chase);
    document.getElementById("battingTeamGroup").classList.toggle("hidden", !chase);
    document.getElementById("inningsHelp").textContent = chase
        ? "Enter second-innings runs, overs, wickets, and target."
        : "Enter first-innings runs, overs, and wickets.";
}

function updateOversHint() {
    const format = document.getElementById("matchFormat").value;
    const hint = document.getElementById("oversHint");
    hint.textContent = format === "t20" ? "T20: Maximum 20 overs"
        : format === "odi" ? "ODI: Maximum 50 overs"
        : "Test: Estimate uses the current run rate; 90 overs per day is only a reference.";
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
    if (!team1 || !team2) return showError("Select both teams to generate a prediction.");
    if (Number(document.getElementById("team1Select").value) === Number(document.getElementById("team2Select").value)) {
        return showError("Please select two different teams.");
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
    if (legalBalls === null) return showError("Enter overs correctly, e.g. 15.2 (15 overs and 2 balls).");

    const standardOvers = format === "t20" ? 20 : format === "odi" ? 50 : 90;
    const maxBalls = standardOvers * 6;
    if (format !== "test" && legalBalls > maxBalls) {
        return showError("The entered overs exceed the limit for the selected format.");
    }
    if (inningsType === "chase" && legalBalls > maxBalls) {
        return showError("The entered overs exceed the limit for the selected format.");
    }

    const oversDone = legalBalls / 6;
    const currentRate = oversDone > 0 ? currentRuns / oversDone : 0;
    let scoreProjection;
    let scoreLabel;
    if (format === "test") {
        const remaining = Math.max(0, 90 - oversDone);
        const wicketFactor = wickets >= 8 ? 0.55 : wickets >= 6 ? 0.75 : 1;
        scoreProjection = oversDone <= 0 ? 300 : Math.round(currentRuns + currentRate * remaining * wicketFactor);
        scoreLabel = "Estimated score at 90 overs";
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
        scoreLabel = "Projected innings score";
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
            winReason = "The entered score has reached the target; verify the actual match situation.";
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
            winReason = "Chase estimate based on current and required run rates, wickets remaining, form, and pitch inputs.";
        }
    } else {
        const tossAdjustment = toss === "1" ? 3 : toss === "2" ? -3 : 0;
        const pitchAdjustment = pitch === "batting" ? 2 : pitch === "bowling" ? -2 : 0;
        win1 = clamp(50 + (form1 - form2) * 0.35 + tossAdjustment + pitchAdjustment, 5, 95);
        win2 = 100 - win1;
        winReason = "Pre-match estimate is based on entered form, toss, and pitch information; historical data is not connected automatically.";
    }

    const result = document.getElementById("outputContent");
    result.innerHTML = `
        <div class="result-hero">
            <span class="eyebrow">CRICKET STATS · PROTOTYPE ESTIMATE</span>
            <h3>${escapeHTML(team1)} <span>vs</span> ${escapeHTML(team2)}</h3>
            <p class="subtle">${format === "t20" ? "T20" : format === "odi" ? "ODI" : "Test"} · ${inningsType === "chase" ? "Second Innings / Chase" : "First Innings"}</p>
        </div>
        <div class="probability-grid">
            <div class="prob-card"><span>${escapeHTML(team1)}</span><strong>${formatNumber(win1, 0)}%</strong><div class="bar"><i style="width:${win1}%"></i></div></div>
            <div class="prob-card"><span>${escapeHTML(team2)}</span><strong>${formatNumber(win2, 0)}%</strong><div class="bar"><i style="width:${win2}%"></i></div></div>
        </div>
        <div class="stats-grid">
            <div class="stat"><small>${scoreLabel}</small><strong>${scoreProjection}</strong></div>
            <div class="stat"><small>Current Run Rate</small><strong>${formatNumber(currentRate, 2)}</strong></div>
            <div class="stat"><small>Current Score</small><strong>${currentRuns}/${wickets}</strong></div>
            <div class="stat"><small>Overs</small><strong>${Math.floor(legalBalls / 6)}.${legalBalls % 6}</strong></div>
        </div>
        ${inningsType === "chase" ? (function(){
            const target = Math.max(1, Math.floor(safeNumber("target", 1)));
            const ballsLeft = Math.max(0, maxBalls - legalBalls);
            const runsNeeded = Math.max(0, target - currentRuns);
            const rrr = ballsLeft > 0 ? runsNeeded / (ballsLeft / 6) : runsNeeded;
            return '<div class="chase-line"><span>Target: <b>' + target + '</b></span><span>Runs Needed: <b>' + runsNeeded + '</b></span><span>Required Run Rate: <b>' + formatNumber(rrr, 2) + '</b></span><span>Balls Remaining: <b>' + ballsLeft + '</b></span></div>';
        })() : ""}
        <p class="analysis-note">${escapeHTML(winReason)}</p>
        <p class="disclaimer">Important: This is an initial rule-based estimate, not a trained machine-learning model. Live score API and historical match data are not connected, so this is not a real-time prediction.</p>
    `;
    document.getElementById("resultBox").classList.remove("hidden");
    document.getElementById("resultBox").scrollIntoView({ behavior: "smooth", block: "start" });
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[char]));
}


// Read the public, sanitized feed generated by GitHub Actions. Provider API keys
// stay in GitHub Actions secrets and are never sent to this browser.
async function refreshPublishedCricketFeed() {
    const status = document.getElementById("liveApiStatus");
    const meta = document.getElementById("feedMeta");
    const list = document.getElementById("liveMatchList");
    const button = document.getElementById("refreshFeedButton");
    if (!status || !meta || !list) return;
    if (button) button.disabled = true;
    status.classList.remove("connected", "error");
    status.textContent = "LIVE DATA: CHECKING FEED…";
    meta.textContent = "Loading the latest published feed…";
    list.innerHTML = '<p class="feed-empty">Loading match data…</p>';
    try {
        const response = await Promise.race([\n            fetch("data/cricket-feed.json?ts=" + Date.now(), { cache: "no-store" }),\n            new Promise((_, reject) => setTimeout(() => reject(new Error("Feed request timed out.")), 12000))\n        ]);
        if (!response.ok) throw new Error("Published feed is not available yet.");
        const feed = await response.json();
        const matches = Array.isArray(feed.matches) ? feed.matches : [];
        const providers = Object.values(feed.providers || {});
        const configured = providers.filter(p => p && p.status !== "not_configured");
        const successful = configured.filter(p => p.status === "ok");
        const hasLiveMatches = matches.some(m => /live|in progress|innings|stumps/i.test(String(m.status || "")));
        const generatedAt = feed.generatedAt ? new Date(feed.generatedAt) : null;
        const hasTimestamp = Boolean(generatedAt && Number.isFinite(generatedAt.getTime()));
        const ageMs = hasTimestamp ? Date.now() - generatedAt.getTime() : Infinity;
        const stale = hasTimestamp && ageMs > 24 * 60 * 60 * 1000;
        if (successful.length && !stale) {
            status.textContent = hasLiveMatches ? "LIVE DATA: FEED UPDATED" : "CRICKET FEED: CONNECTED";
            status.classList.add("connected");
        } else if (configured.length && !successful.length) {
            status.textContent = "LIVE DATA: PROVIDER ERROR";
            status.classList.add("error");
        } else {
            status.textContent = !hasTimestamp ? "LIVE DATA: NO PROVIDER DATA" : "LIVE DATA: FEED STALE";
            status.classList.add("error");
        }
        const updated = generatedAt && Number.isFinite(generatedAt.getTime())
            ? generatedAt.toLocaleString() : "update time unavailable";
        const providerSummary = configured.length
            ? successful.length + "/" + configured.length + " provider(s) responded"
            : "No API provider configured in the latest feed";
        meta.textContent = "Last feed update: " + updated + " · " + matches.length + " match(es) · " + providerSummary
            + (stale ? " · Feed is older than 24 hours." : "");
        if (!matches.length) {
            list.innerHTML = '<p class="feed-empty">No matches are available in the published feed yet. Run the manual GitHub Actions refresh and merge its feed-update pull request to publish data.</p>';
            return;
        }
        const isPlaceholderTeam = value => /\\b(?:AB|A|B)\\d+\\s*\\(/i.test(String(value || ""));
        const usableMatches = matches.filter(match => {
            if (!match || !match.team1 || !match.team2) return false;
            if (isPlaceholderTeam(match.team1) || isPlaceholderTeam(match.team2)) return false;
            const statusText = String(match.status || "");
            const scheduled = /scheduled|upcoming|not started|fixture/i.test(statusText);
            // Do not show undated scheduled fixtures: they are often provider placeholders.
            if (scheduled && !/^\\d{4}-\\d{2}-\\d{2}/.test(String(match.date || ""))) return false;
            return true;
        });
        const statusGroup = match => {
            const value = String(match.status || "").toLowerCase();
            if (/won by|match drawn|tied|abandoned|no result|cancelled|conceded|result:/i.test(value)) return "completed";
            if (/live|in progress|stumps|day\\s*[1-5]\\s*:/i.test(value)) return "live";
            return "upcoming";
        };
        const dateValue = match => {
            const time = Date.parse(String(match.date || ""));
            return Number.isFinite(time) ? time : 0;
        };
        const unique = [];
        const seen = new Set();
        usableMatches.forEach(match => {
            const key = [match.date || "", match.team1, match.team2, match.competition || "", match.status || ""]
                .join("|").toLowerCase().replace(/\\s+/g, " ").trim();
            if (!seen.has(key)) { seen.add(key); unique.push(match); }
        });
        const groups = {
            live: unique.filter(m => statusGroup(m) === "live").sort((a,b) => dateValue(b)-dateValue(a)),
            upcoming: unique.filter(m => statusGroup(m) === "upcoming").sort((a,b) => dateValue(a)-dateValue(b)),
            completed: unique.filter(m => statusGroup(m) === "completed").sort((a,b) => dateValue(b)-dateValue(a))
        };
        const cleanScore = (score, opposingScore) => {
            const opposing = new Set(String(opposingScore || "").split(/\\s*&\\s*/).map(x => x.trim()).filter(Boolean));
            const seenParts = new Set();
            return String(score || "").split(/\\s*&\\s*/).map(x => x.trim()).filter(part => {
                if (!part || opposing.has(part) || seenParts.has(part)) return false;
                seenParts.add(part);
                return true;
            }).join(" & ");
        };
        const renderMatch = match => {
            const title = [match.team1, match.team2].join(" vs ");
            const score1 = cleanScore(match.score1, match.score2);
            const score2 = cleanScore(match.score2, match.score1);
            const score = [score1, score2].filter(Boolean).join(" · ");
            const details = [match.competition, match.format, match.date, match.venue].filter(Boolean).join(" · ");
            return '<article class="match-item"><strong>' + escapeHTML(title) + '</strong>'
                + (score ? '<p>' + escapeHTML(score) + '</p>' : '')
                + '<p class="match-status">' + escapeHTML(match.status || "Status unavailable") + '</p>'
                + (details ? '<p>' + escapeHTML(details) + '</p>' : '')
                + '</article>';
        };
        const renderSection = (title, items) => items.length
            ? '<section class="feed-section"><h3>' + title + ' <span>(' + items.length + ')</span></h3><div class="match-list">' + items.slice(0, 30).map(renderMatch).join("") + '</div></section>'
            : "";
        if (!unique.length) {
            list.innerHTML = '<p class="feed-empty">No clean, dated matches are available right now. Refresh the feed later for updated fixtures.</p>';
            return;
        }
        list.innerHTML = renderSection("Live / In Progress", groups.live)
            + renderSection("Upcoming Matches", groups.upcoming)
            + renderSection("Completed Matches", groups.completed);
    } catch (error) {
        status.textContent = "LIVE DATA: FEED NOT AVAILABLE";
        status.classList.add("error");
        meta.textContent = "The public cricket feed has not been published yet, or it could not be loaded.";
        list.innerHTML = '<p class="feed-empty">Live scores are not available yet. The prediction form still works with manual inputs; API keys are not stored in the app.</p>';
    } finally {
        if (button) button.disabled = false;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("refreshFeedButton");
    if (button) button.addEventListener("click", refreshPublishedCricketFeed);
    refreshPublishedCricketFeed();
});
