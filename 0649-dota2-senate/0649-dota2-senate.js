/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let queueR = [];
    let queueD = [];
    
    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === "R") {
            queueR.push(i);
        } else {
            queueD.push(i);
        }
    }
    
    while (queueR.length > 0 && queueD.length > 0) {
        if (queueR[0] < queueD[0]) {
            queueR.push(queueR[0] + senate.length);
        } else {
            queueD.push(queueD[0] + senate.length);
        }
        
        queueR.shift();
        queueD.shift();
    }
    
    return queueR.length > 0 ? "Radiant" : "Dire";
};