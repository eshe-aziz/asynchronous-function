// Write an asynchronous function that accepts a message string and a delay time in milliseconds.
// The function should log the message to the console after the specified delay time.
function message(){
    console.log('Akirachix')
}

setTimeout(message, 5000)


// You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID.
// Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.

const userIds = [1, 2, 3, 4, 5];
function getUserData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = { id, name: `User ${id}` };
      resolve(userData);
    }, 1000);
  });
}
async function fetchAndLogUserData() {
    for (const userId of userIds) {
      try {
        const userData = await getUserData(userId);
        console.log(`User ID ${userId}: ${userData.name}`);
      } catch (error) {
        console.error(`Error fetching data for User ID ${userId}: ${error.message}`);
      }
    }
  }
  fetchAndLogUserData()


// You have an asynchronous function performTask() that returns a Promise.
// The Promise resolves if the task is successful and rejects if there's an error.
// Write a function that calls performTask() and logs a custom success message if the task is successful, and a custom error message if there's an error.

async function performTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Task completed successfully');
    }, 1000);
  });
}
async function handleTask() {
  try {
    const result = await performTask();
    console.log(`Success: ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}
handleTask();




// Scenario:
// Write a function unstableTask that:

// 1.Accepts a taskName and failureProbability (a number between 0 and 1).
// 2. Returns a Promise that:
// Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
// Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
// Write another function executeWithRetry that:

// Accepts a taskName, retries, and failureProbability.
// Uses a retry mechanism to attempt the unstableTask up to retries times.
// Logs whether the task succeeded or failed after all attempts.


function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        if(random > failureProbability){
            resolve(`Task ${taskName} completed successfully`)
        } else{
            reject(`Task ${taskName} failed`)
        }
    })
}

async function executeWithRetry(taskName, retries, failureProbability) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await unstableTask(taskName, failureProbability);
      console.log(`Attempt ${attempt}: Task "${taskName}" succeeded`);
      return;
    } catch (error) {
      console.error(`Attempt ${attempt}: ${error.message}`);
    }
  }
  console.log(`All ${retries} attempts failed for task "${taskName}"`);
}
executeWithRetry('Data Processing', 3, 0.3);











