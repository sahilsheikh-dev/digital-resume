// this script is to calculate year of experience dynamically

const currentDate = new Date();     // To get the current date
const givenDateStr = '04/07/2022';  // Replace with your first job start date

const [givenDay, givenMonth, givenYear] = givenDateStr.split('/').map(Number);  // To distribute the date, month, and year
const yearDifference = currentDate.getFullYear() - givenYear;   // To calculate the difference

const yearDifferenceParagraph = document.getElementById('experience-year'); // To get experience-year element
yearDifferenceParagraph.textContent = `${yearDifference}+`; // To update year in experience-year element
