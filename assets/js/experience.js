// this script is to calculate year of experience dynamically

const currentDate = new Date();
const givenDateStr = '04/07/2022'; // Replace with your first job start date
const [givenDay, givenMonth, givenYear] = givenDateStr.split('/').map(Number);
const yearDifference = currentDate.getFullYear() - givenYear;
const yearDifferenceParagraph = document.getElementById('experience-year');
yearDifferenceParagraph.textContent = `${yearDifference}+`;