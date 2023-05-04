function convertlbs(lbs) {
    return{ 
        oz: lbs * 16 ,
        kg: lbs / 2.2046 ,
        g: lbs / 0.0022046
    };
};

function convertoz(oz) {
    return{
        lbs: oz / 16,
        kg: oz / 35.274,
        g: oz * 28.35
    };
};

function convertkg(kg) {
    return{
        lbs: kg * 2.205,
        g: kg * 1000,
        oz: kg * 35.274
    };
};

function convertg(g){
    return{
        lbs: 
    }
}

module.exports = {convertlbs, convertoz, convertkg};