const DASHBOARD_DATA = {
  batters: [
    {
      name: "Vaibhav Sooryavanshi", role: "Batter",
      pressureSR: 254.7, pressureBalls: 86, pressureRuns: 219,
      dismissals: 4, normalBalls: 363, normalRuns: 809,
      normalSR: 222.9, uplift: 31.8, rank: 5, eligible: true
    },
    {
      name: "Ravindra Jadeja", role: "Batting all-rounder",
      pressureSR: 152.0, pressureBalls: 490, pressureRuns: 745,
      dismissals: 22, normalBalls: 347, normalRuns: 395,
      normalSR: 113.8, uplift: 38.2, rank: 28, eligible: true
    },
    {
      name: "Dhruv Jurel", role: "Wicketkeeper-batter",
      pressureSR: 168.5, pressureBalls: 349, pressureRuns: 588,
      dismissals: 23, normalBalls: 426, normalRuns: 607,
      normalSR: 142.5, uplift: 26.0, rank: 48, eligible: true
    },
    {
      name: "Cameron Green", role: "Batting all-rounder",
      pressureSR: 152.7, pressureBalls: 220, pressureRuns: 336,
      dismissals: 9, normalBalls: 461, normalRuns: 693,
      normalSR: 150.3, uplift: 2.4, rank: 51, eligible: true
    },
    {
      name: "Yashasvi Jaiswal", role: "Batter",
      pressureSR: 174.4, pressureBalls: 211, pressureRuns: 368,
      dismissals: 16, normalBalls: 1274, normalRuns: 1936,
      normalSR: 152.0, uplift: 22.4, rank: 55, eligible: true
    },
    {
      name: "Riyan Parag", role: "Batting all-rounder",
      pressureSR: 168.5, pressureBalls: 372, pressureRuns: 627,
      dismissals: 29, normalBalls: 642, normalRuns: 909,
      normalSR: 141.6, uplift: 27.0, rank: 57, eligible: true
    },
    {
      name: "Donovan Ferreira", role: "Batting all-rounder",
      pressureSR: 202.9, pressureBalls: 137, pressureRuns: null,
      dismissals: null, normalBalls: 54, normalRuns: null,
      normalSR: null, uplift: null, rank: null, eligible: false,
      note: "54 normal balls faced; below the 120-ball threshold."
    },
    {
      name: "Shubham Dubey", role: "Batter",
      pressureSR: 165.0, pressureBalls: 123, pressureRuns: null,
      dismissals: null, normalBalls: 20, normalRuns: null,
      normalSR: null, uplift: null, rank: null, eligible: false,
      note: "20 normal balls faced; below the 120-ball threshold."
    },
    {
      name: "Matthew Short", role: "Batting all-rounder",
      pressureSR: 135.7, pressureBalls: 28, pressureRuns: null,
      dismissals: null, normalBalls: 115, normalRuns: null,
      normalSR: null, uplift: null, rank: null, eligible: false,
      note: "Below both pressure and normal-ball thresholds."
    },
    {
      name: "Dasun Shanaka", role: "Batting all-rounder",
      pressureSR: 127.8, pressureBalls: 36, pressureRuns: null,
      dismissals: null, normalBalls: 36, normalRuns: null,
      normalSR: null, uplift: null, rank: null, eligible: false,
      note: "Below both pressure and normal-ball thresholds."
    }
  ],

  bowlers: [
    {
      name: "Akash Madhwal", role: "Bowler",
      economy: 10.07, pressureBalls: 152, conceded: 255,
      wickets: 12, wicketRate: 7.89, normalBalls: 201,
      normalConceded: 334, rank: 17, eligible: true
    },
    {
      name: "Nandre Burger", role: "Bowler",
      economy: 10.29, pressureBalls: 175, conceded: 300,
      wickets: 12, wicketRate: 6.86, normalBalls: 188,
      normalConceded: 285, rank: 41, eligible: true
    },
    {
      name: "Jofra Archer", role: "Bowler",
      economy: 10.29, pressureBalls: 308, conceded: 528,
      wickets: 21, wicketRate: 6.82, normalBalls: 447,
      normalConceded: 650, rank: 47, eligible: true
    },
    {
      name: "Mohammed Shami", role: "Bowler",
      economy: 10.17, pressureBalls: 328, conceded: 556,
      wickets: 22, wicketRate: 6.71, normalBalls: 917,
      normalConceded: 1247, rank: 53, eligible: true
    },
    {
      name: "Tushar Deshpande", role: "Bowler",
      economy: 11.00, pressureBalls: 505, conceded: 926,
      wickets: 35, wicketRate: 6.93, normalBalls: 498,
      normalConceded: 738, rank: 58, eligible: true
    },
    {
      name: "Ravi Bishnoi", role: "Bowler",
      economy: 10.45, pressureBalls: 426, conceded: 742,
      wickets: 23, wicketRate: 5.40, normalBalls: 840,
      normalConceded: 1144, rank: 69, eligible: true
    },
    {
      name: "Sandeep Sharma", role: "Bowler",
      economy: 10.66, pressureBalls: 404, conceded: 718,
      wickets: 23, wicketRate: 5.69, normalBalls: 557,
      normalConceded: 727, rank: 70, eligible: true
    },
    {
      name: "Yash Raj Punja", role: "Bowler",
      economy: null, pressureBalls: 68, conceded: null,
      wickets: null, wicketRate: null, normalBalls: 112,
      normalConceded: null, rank: null, eligible: false,
      note: "Below both pressure and normal legal-ball thresholds."
    },
    {
      name: "Fazalhaq Farooqi", role: "Bowler",
      economy: null, pressureBalls: 63, conceded: null,
      wickets: 1, wicketRate: null, normalBalls: 191,
      normalConceded: null, rank: null, eligible: false,
      note: "63 pressure legal balls; below the 90-ball threshold."
    },
    {
      name: "Vignesh Puthur", role: "Bowler",
      economy: null, pressureBalls: 10, conceded: null,
      wickets: null, wicketRate: null, normalBalls: 62,
      normalConceded: null, rank: null, eligible: false,
      note: "Below both pressure and normal legal-ball thresholds."
    }
  ],

  methodology: {
    seasons: "2022–2026",
    matchRecords: 371,
    matchesWithBallData: 367,
    totalDeliveries: 87673,
    pressureDeliveries: 31248,
    normalDeliveries: 56425,
    batterPopulation: 87,
    bowlerPopulation: 81,
    batterPressureThreshold: 60,
    batterNormalThreshold: 120,
    bowlerPressureThreshold: 90,
    bowlerNormalThreshold: 180
  }
};