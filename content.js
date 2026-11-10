/* =====================================================================
   PORTSMOUTH VICTORIA SC — WEBSITE CONTENT
   This is the ONLY file volunteers need to edit.

   Simple rules (see the Volunteer Guide for more):
   • Only change the words between "double quotes".
   • Keep every quote mark, comma and bracket exactly where it is.
   • To add something new, copy a whole existing entry (from { to },)
     and paste it, then change the words.
   • Inside quotes, use ’ (curly apostrophe) or plain ' — never a plain ".
   • Lines starting with // are notes for you. The website ignores them.
   ===================================================================== */

window.CLUB = {

  // ------------------------------------------------------------------
  // CLUB DETAILS
  // ------------------------------------------------------------------
  email: "pvsc.info@gmail.com",

  // Email address that taster session requests go to.
  tasterEmail: "pvsc.taster@gmail.com",

  // Background video in the banner at the top of the home page.
  // Files live in the images/video folder. Set heroVideo to "" for no video.
  heroVideo: "hero-swimmers.mp4",
  heroPoster: "hero-swimmers.jpg",

  // Photo beside "Artistic swimming for everyone" on the home page.
  // The file lives in the images folder. Best shape: 4 wide by 3 tall.
  homePhoto: "home-collage.jpg",

  // Link to the Google Form for membership requests.
  // Leave as "" until the form exists: the Join page will then show an
  // "Email us" button instead.
  joinFormLink: "",

  // Link to the club shop order form.
  shopFormLink: "https://forms.gle/pTUoNUuQ99JX3gW57",

  facebook: "https://www.facebook.com/PortsmouthVictoria/",
  instagram: "https://www.instagram.com/portsmouth_victoria/",
  tiktok: "https://www.tiktok.com/@portsmouth.victoria",

  // Social media buttons at the top of the home page.
  //   Each is: ["Name", "icon file in images/social", "Link"]
  social: [
    ["Facebook",  "facebook.png",  "https://www.facebook.com/PortsmouthVictoria/"],
    ["Instagram", "instagram.png", "https://www.instagram.com/portsmouth_victoria/"],
    ["TikTok",    "tiktok.png",    "https://www.tiktok.com/@portsmouth.victoria"],
  ],

  // Affiliation badges at the bottom of every page.
  //   Each badge is: ["image file in images/badges", "Name", "Link"]
  badges: [
    ["swim-mark.png",        "Swim Mark",        "https://www.swimming.org/swimengland/"],
    ["swim-england.png",     "Swim England",     "https://www.swimming.org/swimengland/"],
    ["british-swimming.png", "British Swimming", "https://www.britishswimming.org/"],
    ["swim-england-affiliated-club.png",   "Swim England Affiliated Club",   "https://www.swimming.org/swimengland/"],
    ["swim-england-artistic-swimming.png", "Swim England Artistic Swimming", "https://www.swimming.org/swimengland/"],
  ],

  // Who to contact (shown on the Contact page).
  contacts: [
    { topic: "General enquiries", name: "Aimee Midgley, Secretary" },
    { topic: "Welfare",           name: "Tessa Parke, Club Welfare Officer" },
    { topic: "Kit and shop",      name: "David McClean" },
  ],

  // ------------------------------------------------------------------
  // TASTER SESSIONS  (the "Book a Taster Session" page under the Club menu)
  //   Bookings go to joinFormLink above if set, otherwise to the club email.
  // ------------------------------------------------------------------
  taster: {
    eyebrow: "Try it for free",
    heading: "Book a taster session",
    intro: "Not sure if artistic swimming is for you? Come and try it with no long-term commitment. Your first session is free.",
    // Each fact is: ["Label", "Detail"]
    facts: [
      ["Price", "First session free"],
      ["Length", "60 minutes"],
      ["Format", "Small group, led by a coach"],
      ["Where", "Mountbatten Leisure Centre or Ravelin Sports Centre"],
    ],
    expect: [
      "A welcome from our qualified coaches",
      "Basic figures and body positions, on land and in the pool",
      "A short routine sequence",
      "A chance to ask about training and squad pathways",
    ],
    bring: "Swimming costume, goggles and a towel. We provide everything else.",
    who: "Swimmers aged 6 and over who can swim 25m unaided and are confident in deep water. No artistic swimming experience needed: complete beginners and swimmers with diving, gymnastics or other aquatic backgrounds are all welcome, and coaches go at each swimmer’s pace.",
    // Photo beside the heading (file in the images folder). Set to "" for none.
    photo: "gallery/23.jpg",
    photoCaption: "Our coaches will welcome you poolside",
    howToBook: "Sessions run throughout the year. Send us a request and we’ll book you onto a date that suits you.",
  },

  // ------------------------------------------------------------------
  // NEWS  (newest first — add new stories at the TOP of the list)
  //   photo: the file name of a photo in the images/news folder
  //   paragraphs: one entry per paragraph.
  //     Start a line with "## " for a small heading.
  //     Start a line with "- " for a bullet point.
  // ------------------------------------------------------------------
  news: [
    {
      date: "22 June 2025",
      title: "Beautiful routine earns Portsmouth Victoria silver in thrilling regional competition",
      summary: "Our artistic swimmers took silver at the Regional Routine Event in Haslemere, missing gold by a single point.",
      photo: "pvsc-regional-comp-june-2025-2.jpg",
      paragraphs: [
        "Portsmouth Victoria’s artistic swimmers won a silver medal at the Regional Routine Event, held at Haslemere Leisure Centre on 22 June.",
        "The finale came down to a single point, and the team missed out on gold by the narrowest of margins. Their routine was the result of months of hard training and showed off explosive lifts, tightly synchronised movement, and plenty of power and grace.",
        "The head coach said that coming so close showed the team’s incredible spirit, and that the whole club is immensely proud of the silver.",
        "The team are taking the result as motivation, and have their sights set on gold at the next event.",
      ],
    },
    {
      date: "15 March 2024",
      title: "Inspirational Women of Portsmouth Awards 2024",
      summary: "Head Coach Mel received the Sports award at the Inspirational Women of Portsmouth Awards.",
      photo: "inspirational-women-award-2024.jpg",
      paragraphs: [
        "Our Head Coach, Mel, was recognised in the Sports category at the Inspirational Women of Portsmouth Awards, for her outstanding dedication to sport in the Portsmouth area.",
        "Mel attended with her daughter Chloe, alongside the Lord Mayor and Lady Mayoress. The black-tie ceremony was held on Friday 15 March 2024 at Guildhall Portsmouth and celebrated women who have made a positive difference to their community. The event calls those it honours “award recipients” rather than winners.",
        "Part of every ticket sale went to Endometriosis South Coast, a local charity supporting women with endometriosis and adenomyosis.",
        "Congratulations, Mel, from everyone at the club!",
      ],
    },
    {
      date: "11 May 2023",
      title: "Synchro Training Skill 5: Supporting Others",
      summary: "Synchro takes drive, determination and resilience, but nobody can do it alone.",
      photo: "news-02.jpg",
      paragraphs: [
        "Synchro is a competitive sport. Succeeding in it takes drive, determination and resilience, but individual skill is never enough. Athletes can’t do it alone, which makes supporting others one of the most important skills in training and in the sport.",
        "In a routine, swimmers move as one unit and rely on their teammates to make it work. At competitions, hearing clubmates cheering from the gallery reminds every swimmer that there’s a whole club behind them.",
        "## When support matters most",
        "Teams need each other most when things are hard, for example:",
        "- not making the squad",
        "- making mistakes in the water",
        "- struggling with a figure or land training despite working hard",
        "- failing a grade",
        "- being injured and watching from poolside",
        "Whatever happens in the water, we are still a team and still one club.",
      ],
    },
  ],

  // ------------------------------------------------------------------
  // SWIMMING TIMES & FEES
  //   Each session is: ["Day", "Time", "Venue", "Focus"]
  //   Day must be one of: Mon Tue Wed Thu Fri Sat Sun
  //   Venue must be one of the names in the venues list.
  // ------------------------------------------------------------------
  feesNote: "Monthly fees from April 2025. Reduced fees are available for eligible families, and fees for low or modest income families are capped at £520 a year.",

  venues: ["Mountbatten", "Temeraire", "Ravelin", "Havant"],

  squads: [
    { name: "Dolphins", grade: "Basic skills 1", fee: 43, sessions: [
      ["Sat", "1:30–2:30pm", "Mountbatten", "Pool"],
    ]},
    { name: "Flamingos", grade: "Basic skills 2", fee: 48, sessions: [
      ["Sat", "1:30–3:00pm", "Mountbatten", "Pool"],
    ]},
    { name: "Novice", grade: "Grade 1", fee: 68, sessions: [
      ["Tue", "5:45–6:45pm", "Temeraire", "Flex / S&C"],
      ["Tue", "7:00–8:00pm", "Temeraire", "F1"],
      ["Sat", "11:00am–12:30pm", "Temeraire", "R1 / F1"],
      ["Sat", "1:30–2:30pm", "Ravelin", "Swim"],
    ]},
    { name: "Novice", grade: "Grade 2", fee: 95, sessions: [
      ["Tue", "5:45–6:45pm", "Temeraire", "Flex / S&C"],
      ["Tue", "7:00–8:00pm", "Temeraire", "F2"],
      ["Wed", "5:45–6:45pm", "Temeraire", "Flex / S&C"],
      ["Wed", "7:00–8:00pm", "Temeraire", "F2"],
      ["Thu", "6:30–7:30pm", "Mountbatten", "Stamina"],
      ["Sat", "11:00am–12:30pm", "Temeraire", "R2 / F2"],
      ["Sat", "1:30–2:30pm", "Ravelin", "Swim"],
    ]},
    { name: "12 & Under Age Group", grade: "Grade 3", fee: 95, sessions: [
      ["Tue", "5:45–6:45pm", "Temeraire", "Flex / S&C"],
      ["Tue", "7:00–8:00pm", "Temeraire", "F3"],
      ["Wed", "5:45–6:45pm", "Temeraire", "Flex / S&C"],
      ["Wed", "7:00–8:00pm", "Temeraire", "F3"],
      ["Thu", "7:30–8:30pm", "Havant", "Stamina"],
      ["Sat", "11:00am–12:30pm", "Temeraire", "R3 / F3"],
      ["Sat", "1:30–3:00pm", "Mountbatten", "Team"],
    ]},
    { name: "Youth", grade: "Grade 4", fee: 102, sessions: [
      ["Tue", "7:00–8:00pm", "Temeraire", "F4"],
      ["Wed", "7:00–8:00pm", "Temeraire", "F4 / Team"],
      ["Thu", "5:45–6:45pm", "Havant", "Land drills"],
      ["Thu", "7:00–8:00pm", "Havant", "F4"],
      ["Fri", "6:30–8:00pm", "Mountbatten", "Stamina"],
      ["Sat", "11:00am–12:30pm", "Temeraire", "Team / S&C"],
      ["Sat", "1:30–3:00pm", "Mountbatten", "Team"],
    ]},
    { name: "Juniors", grade: "Grade 5", fee: 102, sessions: [
      ["Tue", "5:45–6:45pm", "Temeraire", "Flex / S&C"],
      ["Tue", "7:00–8:00pm", "Temeraire", "F4 / Team"],
      ["Wed", "5:45–6:45pm", "Temeraire", "Flex / S&C"],
      ["Wed", "7:00–8:00pm", "Temeraire", "F4"],
      ["Thu", "5:45–6:45pm", "Havant", "Land drills"],
      ["Thu", "7:00–8:00pm", "Havant", "F4"],
      ["Fri", "6:30–8:00pm", "Mountbatten", "Stamina"],
      ["Sat", "10:15–10:45am", "Temeraire", "Walk-throughs"],
      ["Sat", "11:00am–12:30pm", "Temeraire", "Team / S&C"],
      ["Sat", "1:30–3:00pm", "Mountbatten", "Team"],
    ]},
  ],

  // ------------------------------------------------------------------
  // MEET THE TEAM   Each person is: ["Name", "Role"]
  //   Use "Vacant" as the name for an empty role.
  // ------------------------------------------------------------------
  team: [
    { group: "Committee", people: [
      ["Stu Dunthorne", "Chair"],
      ["Claire Moret", "Vice-Chair"],
      ["Aimee Midgley", "Secretary"],
      ["Melanie Stanning", "Treasurer"],
      ["Tessa Parke", "Club Welfare Officer"],
      ["Lucy Gray", "Welfare Assistant"],
      ["Barbara Gosden", "Parent Liaison Officer"],
      ["Laura Miller", "Fundraising & Events Co-ordinator"],
      ["Catherine King", "Volunteer Co-ordinator"],
      ["Steve Hill", "Health & Safety Officer"],
      ["David McClean", "Club Shop & Merchandising Officer"],
      ["Vacant", "Marketing Officer"],
    ]},
    { group: "Poolside team", people: [
      ["Melanie Stanning", "Head Coach"],
      ["Barbara Gosden", "Senior Coach"],
      ["Hazel Parke", "Senior Coach"],
      ["Laura Benson", "Senior Coach"],
      ["Rhiannon Williams", "Senior Coach"],
      ["Matilda Davies", "Assistant Coach"],
      ["Nick Higginbottom", "Assistant Coach"],
      ["Laura Greenhalgh", "Assistant Coach"],
      ["Stephanie McClean", "Poolside Helper"],
      ["Aimee Midgley", "Poolside Helper"],
      ["Kelly Eames", "Poolside Helper"],
      ["Steve Lenn", "Poolside Helper"],
      ["Sarah Crabtree", "Poolside Helper"],
      ["Antigoni Barouni", "Poolside Helper"],
      ["Lucy Gray", "Poolside Helper"],
      ["Laura Miller", "Poolside Helper"],
      ["Lynda Kline", "Poolside Helper"],
      ["Catherine King", "Poolside Helper"],
      ["Sonya Brandon", "Poolside Helper"],
    ]},
    { group: "Competition team", people: [
      ["Melanie Stanning", "Senior Judge"],
      ["Barbara Gosden", "Judge · Level 2 Team Manager"],
      ["Matilda Davies", "Judge"],
      ["Stephanie McClean", "Judge · Level 2 Team Manager"],
      ["Aimee Midgley", "Level 2 Team Manager"],
      ["Tessa Parke", "Level 2 Team Manager"],
      ["Kelly Eames", "Level 1 Team Manager"],
      ["Nick Higginbottom", "Level 1 Team Manager"],
      ["Laura Greenhalgh", "Level 1 Team Manager"],
      ["Claire Moret", "Scorer"],
      ["David McClean", "Scorer"],
    ]},
  ],

  // ------------------------------------------------------------------
  // AWARDS  (newest year first)
  //   Each result is: ["gold" or "silver" or "bronze", "Event", "Result"]
  // ------------------------------------------------------------------
  awards: [
    { year: "2024", results: [
      ["silver", "National Age Groups", "12 & Under Team, silver medallists with a routine from The Lion King"],
      ["silver", "South East Region", "12 & Under Team, silver medallists"],
      ["silver", "South East Region", "Youth Team, silver medallists"],
      ["gold",   "South East Region", "12 & Under Figures, gold medallist"],
      ["gold",   "Leo Gamble Trophy, Hampshire Figure Competition", "Hampshire Figures Champions"],
    ]},
    { year: "2023", results: [
      ["silver", "Combo Cup", "15 & Under Division 2 Team, silver medallists"],
      ["silver", "National Age Group Championships", "Age 9–10 Figures, silver medal"],
      ["gold",   "Leo Gamble Trophy, Hampshire Figure Competition", "Hampshire Figures Champions"],
    ]},
    { year: "2022", results: [
      ["bronze", "Combo Cup", "15 & Under Division 1 Team, bronze medallists"],
      ["silver", "South East Region", "15 & Under Combo Team, silver medallists"],
      ["gold",   "South East Region Figure Competition", "2 gold medals"],
    ]},
  ],

  // ------------------------------------------------------------------
  // GALLERY  (photos in the images/gallery folder)
  //   Each photo is: ["file name", "caption"]
  //   Add new photos at the TOP to show them first.
  // ------------------------------------------------------------------
  gallery: [
    ["01.jpg", "Club photo"], ["02.jpg", "Club photo"], ["03.jpg", "Club photo"],
    ["04.jpg", "Club photo"], ["05.jpg", "Club photo"], ["06.jpg", "Club photo"],
    ["07.jpg", "Club photo"], ["08.jpg", "Club photo"], ["09.jpg", "Club photo"],
    ["10.jpg", "Club photo"], ["11.jpg", "Club photo"], ["12.jpg", "Club photo"],
    ["13.jpg", "Club photo"], ["14.jpg", "Club photo"], ["15.jpg", "Club photo"],
    ["16.jpg", "Club photo"], ["17.jpg", "Club photo"], ["18.jpg", "Club photo"],
    ["19.jpg", "Club photo"], ["20.jpg", "Club photo"], ["21.jpg", "Club photo"],
    ["22.jpg", "Club photo"], ["23.jpg", "Club photo"],
    ["24.jpg", "Club photo"], ["25.jpg", "Club photo"], ["26.jpg", "Club photo"],
    ["27.jpg", "Club photo"], ["28.jpg", "Club photo"],
  ],

};
