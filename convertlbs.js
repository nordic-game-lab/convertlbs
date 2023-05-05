/**
 * converts pounds to ounces, kilograms, and grams. Called with convertlbs.convertlbs(lbs)
 * @param {number} lbs - The amount of pounds wanting to be converted  
 */
function convertlbs(lbs) {
    return{ 
        oz: lbs * 16 ,
        kg: lbs / 2.2046 ,
        g: lbs / 0.0022046
    };
};
/**
 * converts ounces to pounds, kilograms, and grams. Called with convertlbs.convertoz(oz)
 * @param {number} oz - The amount of ounces wanting to be converted
 */
function convertoz(oz) {
    return{
        lbs: oz / 16,
        kg: oz / 35.274,
        g: oz * 28.35
    };
};
/**
 * converts kilograms to ounces, pounds, and grams. Called with convertlbs.convertkg(kg)
 * @param {number} kg - The amount of kilograms wanting to be converted
 */
function convertkg(kg) {
    return{
        lbs: kg * 2.205,
        g: kg * 1000,
        oz: kg * 35.274
    };
};
/**
 * converts grams to ounces, pounds, and kilograms. Called with convertlbs.convertg(g)
 * @param {number} g - The amount of grams wanting to be converted 
 */
function convertg(g){
    return{
        lbs: g / 453.6,
        kg: g / 1000,
        oz: g / 28.35
    };
};

module.exports = {convertlbs, convertoz, convertkg, convertg};
