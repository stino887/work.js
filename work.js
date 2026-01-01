// =====================================================
// DAY 2 ASSIGNMENT – STRING MANIPULATION EXERCISES
// Professional & Corrected Version
// =====================================================


// ---------------------------------------------
// 1. STRING CONCATENATION CHALLENGE
// ---------------------------------------------
const dealerName = "karibu";
const location = "mbarara";
const product = "tomatoes bananas mangoes";

// Using + operator
const message = "Dealer: " + dealerName + " | Location: " + location + " | Product: " + product;

console.log("Exercise 1 Output:");
console.log(message);
console.log("--------------------------------------------------");



// ---------------------------------------------
// 2. TEMPLATE LITERAL PRACTICE
// ---------------------------------------------
const message2 = `Dealer: ${dealerName} | Location: ${location} | Product: ${product}`;

console.log("Exercise 2 Output:");
console.log(message2);
console.log("--------------------------------------------------");



// ---------------------------------------------
// 3. TYPE CHECKING AND CONVERSION
// ---------------------------------------------
const price = "1000";   // string
const quantity = 100;   // number

console.log("Exercise 3 Output:");
console.log("Type of price:", typeof price);
console.log("Type of quantity:", typeof quantity);

// Conversions
const priceNumber = Number(price);
const qtyString = String(quantity);
const truthValue = Boolean("hello");  // true

console.log("Converted price to number:", priceNumber);
console.log("Converted quantity to string:", qtyString);
console.log("Boolean truth value:", truthValue);
console.log("--------------------------------------------------");



// ---------------------------------------------
// 4. STRING METHOD CHALLENGE
// ---------------------------------------------
let rawProduct = "  fresh fruits from koranorya, mbarara city  ";

const cleaned = rawProduct.trim();
const upper = cleaned.toUpperCase();
const lower = cleaned.toLowerCase();
const hasBukere = cleaned.includes("Bukere");  // returns false
const replaced = cleaned.replace("Bukere", "Kyaka 2");
const words = cleaned.split(" ");

console.log("Exercise 4 Output:");
console.log("Trimmed:", cleaned);
console.log("Uppercase:", upper);
console.log("Lowercase:", lower);
console.log("Includes 'Bukere'? →", hasBukere);
console.log("Replaced (Bukere → Kyaka 2):", replaced);
console.log("Split into words:", words);
console.log("--------------------------------------------------");



// ---------------------------------------------
// 5. KGL DATA FORMATTING TASK
// ---------------------------------------------
let dealerNameRaw = "   karibu   ";
let productCodeRaw = " prd-2023-maize ";
let recordRaw = "100 bags supplied by karibu in mbarara";

// Clean and format dealer name
const dealerNameClean = dealerNameRaw.trim().toUpperCase();

// Clean and format product code
const productCodeClean = productCodeRaw.trim().toUpperCase().replace("-", "_");

// Validate data
const nameIsValid = dealerNameClean.length > 0;
const codeIsValid = productCodeClean.includes("PRD");

// Process procurement record
const recordWords = recordRaw.split(" ");

// Final formatted summary
const formattedRecord = `
=== KGL FORMATTED DATA ===
DEALER: ${dealerNameClean}
PRODUCT CODE: ${productCodeClean}
VALID NAME: ${nameIsValid}
VALID PRODUCT CODE: ${codeIsValid}
RECORD WORDS: ${recordWords}
`;

console.log("Exercise 5 Output:");
console.log(formattedRecord);
console.log("--------------------------------------------------");
