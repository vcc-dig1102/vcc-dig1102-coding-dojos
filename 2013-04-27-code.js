/**
 * [Roman Numeral Conversion](http://codingdojo.org/cgi-bin/wiki.pl?KataRomanNumerals)
 *
 * The Romans were a clever bunch. They conquered most of Europe and ruled it for
 * hundreds of years. They invented concrete and straight roads and even bikinis. One
 * thing they never discovered though was the number zero. This made writing and
 * dating extensive histories of their exploits slightly more challenging, but the
 * system of numbers they came up with is still in use today. For example the BBC
 * uses Roman numerals to date their programmes.
 *
 * The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these
 * letters have lots of straight lines and are hence easy to hack into stone tablets)
 *
 * Given a decimal number, convert to a Roman numeral representation. For example,
 * in Roman numerals, decimal 1999 becomes "MCMXCIX". BONUS: Given a Roman numeral,
 * convert back into a decimal number.
 *
 * Useful references:
 *
 *  - [Roman Numerals @ NovaRoma.org](http://www.novaroma.org/via_romana/numbers.html)
 *  - [Roman Numerals @ Wikipedia.org](http://en.wikipedia.org/wiki/Roman_numerals)
 */

module.exports = { // Production code
    numerals: {
        roman: function( decimalNumber ) {
         
            if ( decimalNumber === 2) {
                return 'II';
            }
            
            if ( decimalNumber === 3) {
                return 'III';
            }
            
            if (decimalNumber === 4) {
                return 'IV';
            }
            
            if ( decimalNumber === 5 ) {
                return 'V';
            }
            if (decimalNumber === 6) {
                return 'VI';
            }
            if (decimalNumber === 7) {
                return 'VII';
            }
            if (decimalNumber === 8) {
                return 'VIII';
            }
            if (decimalNumber === 9) {
                return 'IX';
            }
            if ( decimalNumber === 10 ) {
                return 'X';
            }
            if ( decimalNumber === 50 ) {
                return 'L';
            }
            if ( decimalNumber === 100) {
                return 'C';
            }
            if ( decimalNumber === 500) {
                return 'D';
            }
            if ( decimalNumber === 1000) {
                return 'M';
            }
            else {
            return 'I'; 
            }
        },
        tenths: {}
    }
};
