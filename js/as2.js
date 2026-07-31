//Problem-01: Match Winner
function matchWinner(teamAGoals, teamBGoals) {
  if (typeof teamAGoals !== "number" || typeof teamBGoals !== "number") {
    return "Invalid";
  }

  if (teamAGoals > teamBGoals) {
    return "Team A Won";
  } else if (teamBGoals > teamAGoals) {
    return "Team B Won";
  } else {
    return "Draw";
  }
}

// ------------------------------------------------------------------------------------------


//Problem-02: Elevator Weight Safety Checker
function isElevatorSafe(weights) {
  if (!Array.isArray(weights)) {
    return "Invalid";
  }

  let totalWeight = 0;

  for (let i = 0; i < weights.length; i++) {
    totalWeight += weights[i];
  }

  return totalWeight <= 400;
}


// ------------------------------------------------------------------------------------------


//Problem-03: AI Token Cost Calculator
function calculateAiCost(tokensUsed) {
  if (typeof tokensUsed !== "number" || tokensUsed < 0) {
    return "Invalid";
  }

  if (tokensUsed <= 500) {
    return 0;
  }

  let extraTokens = tokensUsed - 500;
  let chargeableBlocks = Math.floor(extraTokens / 100);

  return chargeableBlocks * 5;
}


// ------------------------------------------------------------------------------------------


//Problem-04: Top Rated Restaurant Finder
function topRatedRestaurant(restaurants) {
    
    if (!Array.isArray(restaurants) || restaurants.length === 0) {
        return "Invalid";
    }

    let topRestaurant = restaurants[0];

    for (let i = 1; i < restaurants.length; i++) {
        if (restaurants[i].rating > topRestaurant.rating) {
            topRestaurant = restaurants[i];
        }
    }

    return topRestaurant.name.toUpperCase();
}

// ------------------------------------------------------------------------------------------

//Problem-05: Debugging Challenge - API Response Time Monitor
function averageResponseTime(times) {

  if (Array.isArray(times) === false) {
    return "Invalid";
  }

  if (times.length === 0) {
    return "Invalid";
  }

  let total = 0;

  for (let i = 0; i < times.length; i++) {
    if (typeof times[i] !== "number") {
      return "Invalid";
    }
    total += times[i];
  }


  return total / times.length;
}

// ------------------------------------------------------------------------------------------