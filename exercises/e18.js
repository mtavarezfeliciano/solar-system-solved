/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  let greatestYear = {};

  for (let i = 0; i < data.asteroids.length; i++) {
    const year = data.asteroids[i].discoveryYear;
    greatestYear[year] = (greatestYear[year] || 0) + 1;
    
  }
  let mostCommonYear;
  let highestFrequency = 0;

  for (const year in greatestYear) {
    if (greatestYear[year] > highestFrequency) {
      mostCommonYear = parseInt(year);
      highestFrequency = greatestYear[year];
    }
  }
  return mostCommonYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
