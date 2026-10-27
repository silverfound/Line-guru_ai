// Complete Teams & Captains Database (All International, Associate & Leagues)
const teamsData = [
    // International Teams
    { name: "Afghanistan", captains: { test: "Rahmat Shah", odi: "Rahmat Shah", t20: "Rashid Khan" } },
    { name: "Australia", captains: { test: "Pat Cummins", odi: "Mitchell Marsh", t20: "Mitchell Marsh" } },
    { name: "Bangladesh", captains: { test: "Najmul Hossain Shanto", odi: "Mehidy Hasan Miraz", t20: "Litton Das" } },
    { name: "England", captains: { test: "Ben Stokes", odi: "Harry Brook", t20: "Harry Brook" } },
    { name: "India", captains: { test: "Shubman Gill", odi: "Shubman Gill", t20: "Suryakumar Yadav" } },
    { name: "Ireland", captains: { test: "Andy Balbirnie", odi: "Paul Stirling", t20: "Lorcan Tucker" } },
    { name: "New Zealand", captains: { test: "Tom Latham", odi: "Mitchell Santner", t20: "Mitchell Santner" } },
    { name: "Pakistan", captains: { test: "Shan Masood", odi: "Shaheen Shah Afridi", t20: "Salman Ali Agha" } },
    { name: "South Africa", captains: { test: "Temba Bavuma", odi: "Temba Bavuma", t20: "Aiden Markram" } },
    { name: "Sri Lanka", captains: { test: "Dhananjaya de Silva", odi: "Charith Asalanka", t20: "Dasun Shanaka" } },
    { name: "West Indies", captains: { test: "Roston Chase", odi: "Shai Hope", t20: "Shai Hope" } },
    { name: "Zimbabwe", captains: { test: "Richard Ngarava", odi: "Richard Ngarava", t20: "Sikandar Raza" } },

    // Associate Teams
    { name: "Namibia", captains: { test: "Gerhard Erasmus", odi: "Gerhard Erasmus", t20: "Gerhard Erasmus" } },
    { name: "Netherlands", captains: { test: "Scott Edwards", odi: "Scott Edwards", t20: "Scott Edwards" } },
    { name: "USA", captains: { test: "Monank Patel", odi: "Monank Patel", t20: "Monank Patel" } },
    { name: "Oman", captains: { test: "Jatinder Singh", odi: "Jatinder Singh", t20: "Jatinder Singh" } },
    { name: "Scotland", captains: { test: "Richie Berrington", odi: "Richie Berrington", t20: "Richie Berrington" } },
    { name: "Nepal", captains: { test: "Rohit Paudel", odi: "Rohit Paudel", t20: "Rohit Paudel" } },
    { name: "Italy", captains: { test: "Wayne Madsen", odi: "Wayne Madsen", t20: "Wayne Madsen" } },
    { name: "Canada", captains: { test: "Dilpreet Bajwa", odi: "Dilpreet Bajwa", t20: "Dilpreet Bajwa" } },
    { name: "UAE", captains: { test: "Muhammad Waseem", odi: "Muhammad Waseem", t20: "Muhammad Waseem" } },
    { name: "Hong Kong", captains: { test: "Nizakat Khan", odi: "Nizakat Khan", t20: "Nizakat Khan" } },
    { name: "Papua New Guinea", captains: { test: "Assad Vala", odi: "Assad Vala", t20: "Assad Vala" } },
    { name: "Jersey", captains: { test: "Charles Perchard", odi: "Charles Perchard", t20: "Charles Perchard" } },
    { name: "Uganda", captains: { test: "Brian Masaba", odi: "Brian Masaba", t20: "Brian Masaba" } },
    { name: "Malaysia", captains: { test: "Ahmad Faiz", odi: "Ahmad Faiz", t20: "Ahmad Faiz" } },
    { name: "Singapore", captains: { test: "Manpreet Singh", odi: "Manpreet Singh", t20: "Manpreet Singh" } },
    { name: "Kenya", captains: { test: "Rakep Patel", odi: "Rakep Patel", t20: "Rakep Patel" } },
    { name: "Nigeria", captains: { test: "Joshua Ayannaike", odi: "Joshua Ayannaike", t20: "Joshua Ayannaike" } },
    { name: "Germany", captains: { test: "Rohit Singh", odi: "Rohit Singh", t20: "Rohit Singh" } },
    { name: "Japan", captains: { test: "Kendel Kadowaki-Fleming", odi: "Kendel Kadowaki-Fleming", t20: "Kendel Kadowaki-Fleming" } },
    { name: "Spain", captains: { test: "Christian Munoz-Mills", odi: "Christian Munoz-Mills", t20: "Christian Munoz-Mills" } },
    { name: "Belgium", captains: { test: "Shaheryar Butt", odi: "Shaheryar Butt", t20: "Shaheryar Butt" } },
    { name: "Austria", captains: { test: "Amir Waqif", odi: "Amir Waqif", t20: "Amir Waqif" } },
    { name: "France", captains: { test: "Noman Amjad", odi: "Noman Amjad", t20: "Noman Amjad" } },
    { name: "Portugal", captains: { test: "Amir Zaib", odi: "Amir Zaib", t20: "Amir Zaib" } },
    { name: "Denmark", captains: { test: "Shangeev Thanikaithasan", odi: "Shangeev Thanikaithasan", t20: "Shangeev Thanikaithasan" } },
    { name: "Norway", captains: { test: "Raza Iqbal", odi: "Raza Iqbal", t20: "Raza Iqbal" } },
    { name: "Sweden", captains: { test: "Abhijit Venkatesh", odi: "Abhijit Venkatesh", t20: "Abhijit Venkatesh" } },
    { name: "Romania", captains: { test: "Ramesh Satheesan", odi: "Ramesh Satheesan", t20: "Ramesh Satheesan" } },
    { name: "Czech Republic", captains: { test: "Sudesh Wickramasekara", odi: "Sudesh Wickramasekara", t20: "Sudesh Wickramasekara" } },
    { name: "Finland", captains: { test: "Nathan Collins", odi: "Nathan Collins", t20: "Nathan Collins" } },
    { name: "Bahrain", captains: { test: "Sohail Ahmed", odi: "Sohail Ahmed", t20: "Sohail Ahmed" } },
    { name: "Kuwait", captains: { test: "Mohammed Aslam", odi: "Mohammed Aslam", t20: "Mohammed Aslam" } },
    { name: "Saudi Arabia", captains: { test: "Abdul Waheed", odi: "Abdul Waheed", t20: "Abdul Waheed" } },
    { name: "Qatar", captains: { test: "Mohammed Rizlan", odi: "Mohammed Rizlan", t20: "Mohammed Rizlan" } },
    { name: "Maldives", captains: { test: "Ahmed Hassan", odi: "Ahmed Hassan", t20: "Ahmed Hassan" } },
    { name: "Thailand", captains: { test: "Chanchai Pengkumta", odi: "Chanchai Pengkumta", t20: "Chanchai Pengkumta" } },
    { name: "Indonesia", captains: { test: "Gede Priandana", odi: "Gede Priandana", t20: "Gede Priandana" } },
    { name: "Philippines", captains: { test: "Daniel Smith", odi: "Daniel Smith", t20: "Daniel Smith" } },
    { name: "Vanuatu", captains: { test: "Andrew Mansale", odi: "Andrew Mansale", t20: "Andrew Mansale" } },
    { name: "Fiji", captains: { test: "Jiko Rasaku", odi: "Jiko Rasaku", t20: "Jiko Rasaku" } },
    { name: "Samoa", captains: { test: "Douglas Fale", odi: "Douglas Fale", t20: "Douglas Fale" } },
    { name: "Cook Islands", captains: { test: "Henry Aitken", odi: "Henry Aitken", t20: "Henry Aitken" } },
    { name: "Argentina", captains: { test: "Luciano Musiani", odi: "Luciano Musiani", t20: "Luciano Musiani" } },
    { name: "Brazil", captains: { test: "Roberto Moreira", odi: "Roberto Moreira", t20: "Roberto Moreira" } },
    { name: "Bermuda", captains: { test: "Delray Rawlins", odi: "Delray Rawlins", t20: "Delray Rawlins" } },
    { name: "Cayman Islands", captains: { test: "Ramon Sealy", odi: "Ramon Sealy", t20: "Ramon Sealy" } },
    { name: "Bahamas", captains: { test: "Marc Taylor", odi: "Marc Taylor", t20: "Marc Taylor" } },
    { name: "Suriname", captains: { test: "Shivnarine Chanderpaul", odi: "Shivnarine Chanderpaul", t20: "Shivnarine Chanderpaul" } },
    { name: "Panama", captains: { test: "Saad Zaman", odi: "Saad Zaman", t20: "Saad Zaman" } },
    { name: "Belize", captains: { test: "Clinton Lewis", odi: "Clinton Lewis", t20: "Clinton Lewis" } },
    { name: "Botswana", captains: { test: "Karabo Motlhanka", odi: "Karabo Motlhanka", t20: "Karabo Motlhanka" } },
    { name: "Ghana", captains: { test: "Obed Harvey", odi: "Obed Harvey", t20: "Obed Harvey" } },
    { name: "Rwanda", captains: { test: "Clinton Rubagumya", odi: "Clinton Rubagumya", t20: "Clinton Rubagumya" } },
    { name: "Sierra Leone", captains: { test: "George Sesay", odi: "George Sesay", t20: "George Sesay" } },
    { name: "Tanzania", captains: { test: "Abhik Patwa", odi: "Abhik Patwa", t20: "Abhik Patwa" } },
    { name: "Mozambique", captains: { test: "Amade Abubacar", odi: "Amade Abubacar", t20: "Amade Abubacar" } },
    { name: "Malawi", captains: { test: "Moazzam Baig", odi: "Moazzam Baig", t20: "Moazzam Baig" } },
    { name: "Lesotho", captains: { test: "Shadrack Mofokeng", odi: "Shadrack Mofokeng", t20: "Shadrack Mofokeng" } },
    { name: "Eswatini", captains: { test: "Shane Burger", odi: "Shane Burger", t20: "Shane Burger" } },
    { name: "Gambia", captains: { test: "Momodou Lamin Bah", odi: "Momodou Lamin Bah", t20: "Momodou Lamin Bah" } },
    { name: "Cameroon", captains: { test: "Arrey Ekwen", odi: "Arrey Ekwen", t20: "Arrey Ekwen" } },
    { name: "Ivory Coast", captains: { test: "Diomande Mahamadou", odi: "Diomande Mahamadou", t20: "Diomande Mahamadou" } },

    // IPL Teams
    { name: "IPL - Chennai Super Kings", captains: { test: "Ruturaj Gaikwad", odi: "Ruturaj Gaikwad", t20: "Ruturaj Gaikwad" } },
    { name: "IPL - Delhi Capitals", captains: { test: "Axar Patel", odi: "Axar Patel", t20: "Axar Patel" } },
    { name: "IPL - Gujarat Titans", captains: { test: "Shubman Gill", odi: "Shubman Gill", t20: "Shubman Gill" } },
    { name: "IPL - Kolkata Knight Riders", captains: { test: "Ajinkya Rahane", odi: "Ajinkya Rahane", t20: "Ajinkya Rahane" } },
    { name: "IPL - Lucknow Super Giants", captains: { test: "Rishabh Pant", odi: "Rishabh Pant", t20: "Rishabh Pant" } },
    { name: "IPL - Mumbai Indians", captains: { test: "Hardik Pandya", odi: "Hardik Pandya", t20: "Hardik Pandya" } },
    { name: "IPL - Punjab Kings", captains: { test: "Shreyas Iyer", odi: "Shreyas Iyer", t20: "Shreyas Iyer" } },
    { name: "IPL - Rajasthan Royals", captains: { test: "Riyan Parag", odi: "Riyan Parag", t20: "Riyan Parag" } },
    { name: "IPL - Royal Challengers Bengaluru", captains: { test: "Rajat Patidar", odi: "Rajat Patidar", t20: "Rajat Patidar" } },
    { name: "IPL - Sunrisers Hyderabad", captains: { test: "Ishan Kishan", odi: "Ishan Kishan", t20: "Ishan Kishan" } },

    // PSL Teams
    { name: "PSL - Islamabad United", captains: { test: "Shadab Khan", odi: "Shadab Khan", t20: "Shadab Khan" } },
    { name: "PSL - Karachi Kings", captains: { test: "David Warner", odi: "David Warner", t20: "David Warner" } },
    { name: "PSL - Lahore Qalandars", captains: { test: "Shaheen Shah Afridi", odi: "Shaheen Shah Afridi", t20: "Shaheen Shah Afridi" } },
    { name: "PSL - Multan Sultans", captains: { test: "Mohammad Rizwan", odi: "Mohammad Rizwan", t20: "Mohammad Rizwan" } },
    { name: "PSL - Peshawar Zalmi", captains: { test: "Babar Azam", odi: "Babar Azam", t20: "Babar Azam" } },
    { name: "PSL - Quetta Gladiators", captains: { test: "Saud Shakeel", odi: "Saud Shakeel", t20: "Saud Shakeel" } },

    // BBL Teams
    { name: "BBL - Adelaide Strikers", captains: { test: "Matt Short", odi: "Matt Short", t20: "Matt Short" } },
    { name: "BBL - Brisbane Heat", captains: { test: "Usman Khawaja", odi: "Usman Khawaja", t20: "Usman Khawaja" } },
    { name: "BBL - Hobart Hurricanes", captains: { test: "Nathan Ellis", odi: "Nathan Ellis", t20: "Nathan Ellis" } },
    { name: "BBL - Melbourne Renegades", captains: { test: "Will Sutherland", odi: "Will Sutherland", t20: "Will Sutherland" } },
    { name: "BBL - Melbourne Stars", captains: { test: "Marcus Stoinis", odi: "Marcus Stoinis", t20: "Marcus Stoinis" } },
    { name: "BBL - Perth Scorchers", captains: { test: "Ashton Turner", odi: "Ashton Turner", t20: "Ashton Turner" } },
    { name: "BBL - Sydney Sixers", captains: { test: "Moises Henriques", odi: "Moises Henriques", t20: "Moises Henriques" } },
    { name: "BBL - Sydney Thunder", captains: { test: "David Warner", odi: "David Warner", t20: "David Warner" } },

    // SA20 Teams
    { name: "SA20 - Durban Super Giants", captains: { test: "Aiden Markram", odi: "Aiden Markram", t20: "Aiden Markram" } },
    { name: "SA20 - Joburg Super Kings", captains: { test: "Faf du Plessis", odi: "Faf du Plessis", t20: "Faf du Plessis" } },
    { name: "SA20 - MI Cape Town", captains: { test: "Rashid Khan", odi: "Rashid Khan", t20: "Rashid Khan" } },
    { name: "SA20 - Paarl Royals", captains: { test: "David Miller", odi: "David Miller", t20: "David Miller" } },
    { name: "SA20 - Pretoria Capitals", captains: { test: "Keshav Maharaj", odi: "Keshav Maharaj", t20: "Keshav Maharaj" } },
    { name: "SA20 - Sunrisers Eastern Cape", captains: { test: "Tristan Stubbs", odi: "Tristan Stubbs", t20: "Tristan Stubbs" } },

    // MLC Teams
    { name: "MLC - MI New York", captains: { test: "Nicholas Pooran", odi: "Nicholas Pooran", t20: "Nicholas Pooran" } },
    { name: "MLC - Texas Super Kings", captains: { test: "Faf du Plessis", odi: "Faf du Plessis", t20: "Faf du Plessis" } },
    { name: "MLC - Washington Freedom", captains: { test: "Steve Smith", odi: "Steve Smith", t20: "Steve Smith" } },
    { name: "MLC - San Francisco Unicorns", captains: { test: "Matthew Short", odi: "Matthew Short", t20: "Matthew Short" } },
    { name: "MLC - Seattle Orcas", captains: { test: "Heinrich Klaasen", odi: "Heinrich Klaasen", t20: "Heinrich Klaasen" } },
    { name: "MLC - Los Angeles Knight Riders", captains: { test: "Jason Holder", odi: "Jason Holder", t20: "Jason Holder" } },

    // CPL Teams
    { name: "CPL - Jamaica Kingsmen", captains: { test: "Rovman Powell", odi: "Rovman Powell", t20: "Rovman Powell" } },
    { name: "CPL - Antigua & Barbuda Falcons", captains: { test: "Moeen Ali", odi: "Moeen Ali", t20: "Moeen Ali" } },
    { name: "CPL - Trinbago Knight Riders", captains: { test: "Nicholas Pooran", odi: "Nicholas Pooran", t20: "Nicholas Pooran" } },
    { name: "CPL - St Lucia Kings", captains: { test: "Roston Chase", odi: "Roston Chase", t20: "Roston Chase" } },
    { name: "CPL - Guyana Amazon Warriors", captains: { test: "Imran Tahir", odi: "Imran Tahir", t20: "Imran Tahir" } },

    // LPL Teams
    { name: "LPL - Colombo Strikers", captains: { test: "Kusal Mendis", odi: "Kusal Mendis", t20: "Kusal Mendis" } },
    { name: "LPL - Dambulla Sixers", captains: { test: "Dinesh Chandimal", odi: "Dinesh Chandimal", t20: "Dinesh Chandimal" } },
    { name: "LPL - Galle Marvels", captains: { test: "Dasun Shanaka", odi: "Dasun Shanaka", t20: "Dasun Shanaka" } },
    { name: "LPL - Jaffna Kings", captains: { test: "Bhanuka Rajapaksa", odi: "Bhanuka Rajapaksa", t20: "Bhanuka Rajapaksa" } },
    { name: "LPL - Kandy Falcons", captains: { test: "Angelo Mathews", odi: "Angelo Mathews", t20: "Angelo Mathews" } },

    // ILT20 Teams
    { name: "ILT20 - Abu Dhabi Knight Riders", captains: { test: "Jason Holder", odi: "Jason Holder", t20: "Jason Holder" } },
    { name: "ILT20 - Desert Vipers", captains: { test: "Lockie Ferguson", odi: "Lockie Ferguson", t20: "Lockie Ferguson" } },
    { name: "ILT20 - Dubai Capitals", captains: { test: "David Warner", odi: "David Warner", t20: "David Warner" } },
    { name: "ILT20 - Gulf Giants", captains: { test: "James Vince", odi: "James Vince", t20: "James Vince" } },
    { name: "ILT20 - MI Emirates", captains: { test: "Nicholas Pooran", odi: "Nicholas Pooran", t20: "Nicholas Pooran" } },
    { name: "ILT20 - Sharjah Warriors", captains: { test: "Tom Kohler-Cadmore", odi: "Tom Kohler-Cadmore", t20: "Tom Kohler-Cadmore" } },

    // BPL Teams
    { name: "BPL - Chattogram Royals", captains: { test: "Mehidy Hasan", odi: "Mehidy Hasan", t20: "Mehidy Hasan" } },
    { name: "BPL - Dhaka Capitals", captains: { test: "Mohammad Mithun", odi: "Mohammad Mithun", t20: "Mohammad Mithun" } },
    { name: "BPL - Rajshahi Warriors", captains: { test: "Najmul Hossain Shanto", odi: "Najmul Hossain Shanto", t20: "Najmul Hossain Shanto" } },
    { name: "BPL - Rangpur Riders", captains: { test: "Nurul Hasan", odi: "Nurul Hasan", t20: "Nurul Hasan" } },
    { name: "BPL - Sylhet Titans", captains: { test: "Mehidy Hasan Miraz", odi: "Mehidy Hasan Miraz", t20: "Mehidy Hasan Miraz" } },

    // The Hundred
    { name: "The Hundred - Birmingham Phoenix", captains: { test: "Jacob Bethell", odi: "Jacob Bethell", t20: "Jacob Bethell" } },
    { name: "The Hundred - Manchester Super Giants", captains: { test: "Aiden Markram", odi: "Aiden Markram", t20: "Aiden Markram" } },
    { name: "The Hundred - MI London", captains: { test: "Sam Curran", odi: "Sam Curran", t20: "Sam Curran" } },
    { name: "The Hundred - Trent Rockets", captains: { test: "Sam Billings", odi: "Sam Billings", t20: "Sam Billings" } },
    { name: "The Hundred - Welsh Fire", captains: { test: "Phil Salt", odi: "Phil Salt", t20: "Phil Salt" } },

    // WPL & WBBL
    { name: "WPL - Mumbai Indians Women", captains: { test: "Harmanpreet Kaur", odi: "Harmanpreet Kaur", t20: "Harmanpreet Kaur" } },
    { name: "WPL - Delhi Capitals Women", captains: { test: "Jemimah Rodrigues", odi: "Jemimah Rodrigues", t20: "Jemimah Rodrigues" } },
    { name: "WPL - Royal Challengers Bengaluru Women", captains: { test: "Smriti Mandhana", odi: "Smriti Mandhana", t20: "Smriti Mandhana" } },
    { name: "WPL - UP Warriorz", captains: { test: "Meg Lanning", odi: "Meg Lanning", t20: "Meg Lanning" } },
    { name: "WPL - Gujarat Giants Women", captains: { test: "Ashleigh Gardner", odi: "Ashleigh Gardner", t20: "Ashleigh Gardner" } },

    // WBBL
    { name: "WBBL - Adelaide Strikers Women", captains: { test: "Tahlia McGrath", odi: "Tahlia McGrath", t20: "Tahlia McGrath" } },
    { name: "WBBL - Brisbane Heat Women", captains: { test: "Jess Jonassen", odi: "Jess Jonassen", t20: "Jess Jonassen" } },
    { name: "WBBL - Hobart Hurricanes Women", captains: { test: "Elyse Villani", odi: "Elyse Villani", t20: "Elyse Villani" } },
    { name: "WBBL - Melbourne Renegades Women", captains: { test: "Sophie Molineux", odi: "Sophie Molineux", t20: "Sophie Molineux" } },
    { name: "WBBL - Melbourne Stars Women", captains: { test: "Annabel Sutherland", odi: "Annabel Sutherland", t20: "Annabel Sutherland" } },
    { name: "WBBL - Perth Scorchers Women", captains: { test: "Sophie Devine", odi: "Sophie Devine", t20: "Sophie Devine" } },
    { name: "WBBL - Sydney Sixers Women", captains: { test: "Ellyse Perry", odi: "Ellyse Perry", t20: "Ellyse Perry" } },
    { name: "WBBL - Sydney Thunder Women", captains: { test: "Phoebe Litchfield", odi: "Phoebe Litchfield", t20: "Phoebe Litchfield" } },

    // Vitality Blast
    { name: "Vitality Blast - Essex", captains: { test: "Simon Harmer", odi: "Simon Harmer", t20: "Simon Harmer" } },
    { name: "Vitality Blast - Surrey", captains: { test: "Sam Curran", odi: "Sam Curran", t20: "Sam Curran" } },
    { name: "Vitality Blast - Sussex", captains: { test: "Tymal Mills", odi: "Tymal Mills", t20: "Tymal Mills" } },
    { name: "Vitality Blast - Kent", captains: { test: "Sam Billings", odi: "Sam Billings", t20: "Sam Billings" } },
    { name: "Vitality Blast - Hampshire", captains: { test: "James Vince", odi: "James Vince", t20: "James Vince" } },
    { name: "Vitality Blast - Somerset", captains: { test: "Lewis Gregory", odi: "Lewis Gregory", t20: "Lewis Gregory" } },
    { name: "Vitality Blast - Gloucestershire", captains: { test: "Jack Taylor", odi: "Jack Taylor", t20: "Jack Taylor" } },
    { name: "Vitality Blast - Worcestershire", captains: { test: "Brett D'Oliveira", odi: "Brett D'Oliveira", t20: "Brett D'Oliveira" } },
    { name: "Vitality Blast - Warwickshire", captains: { test: "Alex Davies", odi: "Alex Davies", t20: "Alex Davies" } },
    { name: "Vitality Blast - Nottinghamshire", captains: { test: "Joe Clarke", odi: "Joe Clarke", t20: "Joe Clarke" } },
    { name: "Vitality Blast - Derbyshire", captains: { test: "Wayne Madsen", odi: "Wayne Madsen", t20: "Wayne Madsen" } },
    { name: "Vitality Blast - Leicestershire", captains: { test: "Lewis Hill", odi: "Lewis Hill", t20: "Lewis Hill" } },
    { name: "Vitality Blast - Northamptonshire", captains: { test: "David Willey", odi: "David Willey", t20: "David Willey" } },
    { name: "Vitality Blast - Durham", captains: { test: "Alex Lees", odi: "Alex Lees", t20: "Alex Lees" } },
    { name: "Vitality Blast - Yorkshire", captains: { test: "Jonny Bairstow", odi: "Jonny Bairstow", t20: "Jonny Bairstow" } },
    { name: "Vitality Blast - Lancashire", captains: { test: "Keaton Jennings", odi: "Keaton Jennings", t20: "Keaton Jennings" } },
    { name: "Vitality Blast - Glamorgan", captains: { test: "Kiran Carlson", odi: "Kiran Carlson", t20: "Kiran Carlson" } },
    { name: "Vitality Blast - Middlesex", captains: { test: "Stephen Eskinazi", odi: "Stephen Eskinazi", t20: "Stephen Eskinazi" } }
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

    t1Select.innerHTML = '<option value="">-- Select Team --</option>';
    t2Select.innerHTML = '<option value="">-- Select Team --</option>';

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

// Abjad Calculator & Prediction Engine
function getUrduAbjadValue(text) {
    if (!text) return 1;
    let cleanText = text.trim();
    
    let abjadMap = {
        'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
        'j': 10, 'k': 20, 'l': 30, 'm': 40, 'n': 50, 'o': 60, 'p': 70, 'q': 80,
        'r': 90, 's': 100, 't': 200, 'u': 300, 'v': 400, 'w': 500, 'x': 600,
        'y': 700, 'z': 800
    };

    let totalSum = 0;
    for (let i = 0; i < cleanText.length; i++) {
        let char = cleanText[i].toLowerCase();
        if (abjadMap[char]) {
            totalSum += abjadMap[char];
        } else {
            totalSum += 5; // Default weight for non-mapped chars
        }
    }

    let sum = totalSum;
    while (sum > 9) {
        let tempSum = 0;
        let strNum = sum.toString();
        for (let j = 0; j < strNum.length; j++) {
            tempSum += parseInt(strNum[j]);
        }
        sum = tempSum;
    }
    return sum === 0 ? 1 : sum;
}

function getZodiacElement(val) {
    const elements = ["Fire", "Earth", "Air", "Water"];
    return elements[val % 4];
}

function getSolarLunarType(text) {
    if (!text) return "qamari";
    let firstChar = text.trim()[0].toLowerCase();
    let shamsiChars = ['t', 's', 'r', 'l', 'n', 'd', 'z'];
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
    let ground = document.getElementById("ground") ? document.getElementById("ground").value : "Sharjah";
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
    let activePlanet = "Jupiter";
    let earlyPressureTeam = tossTeam;
    let hour = 12;

    let c1TossPower = c1Val;
    let c2TossPower = c2Val;
    let predictedTossWinner = captain1;
    let predictedTossTeam = team1;

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
        formatLabel = "Test Match";
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

            const planets = ["Saturn", "Jupiter", "Mars", "Sun", "Venus", "Mercury", "Moon"];
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
    let tossImpactText = `Captain (${tossWinnerName}) has favorable Jafri energy alignment for winning the toss!`;

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
        <div class="analysis-section" style="border-right: 4px solid #38bdf8; background: rgba(56, 189, 248, 0.1); padding: 12px; margin-bottom: 12px; border-radius: 6px; text-align: left; direction: ltr;">
            <strong>🪙 Toss Analysis:</strong> 
            <br>Ruler Planet: <span style="color: #38bdf8; font-weight: bold;">${activePlanet}</span>. Based on Abjad power, <span style="color: #38bdf8; font-weight: bold;">${predictedTossWinner} (${predictedTossTeam})</span> has higher probability to win the toss.
            <br><br>✨🔮 <strong>Jafri Impact:</strong> ${tossImpactText}
        </div>

        <div class="analysis-section" style="border-right: 4px solid #a855f7; background: rgba(168, 85, 247, 0.1); padding: 12px; margin-bottom: 12px; border-radius: 6px; text-align: left; direction: ltr;">
            <strong>📊 Score Estimation (${formatLabel}):</strong> 
            <br>• 1st Innings Expected Score: <span style="color: #a855f7; font-weight: bold;">${estimatedTotal1} to ${estimatedTotal1 + rangeSpan} Runs</span>
            <br>• 2nd Innings Target / Range: <span style="color: #a855f7; font-weight: bold;">${estimatedTotal2} to ${estimatedTotal2 + rangeSpan} Runs</span>
        </div>

        <div class="analysis-section" style="text-align: left; direction: ltr; margin-bottom: 12px; padding: 8px;">
            <strong>🏟️ Ground & Elements:</strong> 
            <br>• Team 1 Element: <span style="color: #38bdf8;">${t1Element}</span> | Team 2 Element: <span style="color: #38bdf8;">${t2Element}</span>
            <br>• Planet: <span style="color: #38bdf8;">${activePlanet}</span>, Lunar Date: <span style="color: #38bdf8;">${lunarDateVal}</span>, Venue: (${ground})
        </div>

        <div class="analysis-section" style="border-top: 1px dashed #334155; padding-top: 12px; margin-top: 10px; text-align: left; direction: ltr;">
            <strong>🔮 Final Prediction:</strong> 
            <br>According to the deep Jafri and planetary calculations, <strong style="color: #38bdf8;">${winningTeam}</strong> will win the match!
        </div>
    `;

    document.getElementById("outputContent").innerHTML = analysisHTML;
    document.getElementById("resultBox").classList.remove("hidden");
}
