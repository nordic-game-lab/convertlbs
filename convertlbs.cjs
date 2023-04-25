function convertlbs(lbs) {
    return{ 
        oz: lbs * 16 ,
        kg: lbs / 2.2046 ,
        g: lbs / 0.0022046
    };
};

module.exports = convertlbs;