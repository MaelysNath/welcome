/**
 * @author Lothaire Guée
 * @description
 *      Contains the function linked to the database.
 */


/* ----------------------------------------------- */
/* DATABASES INITILIZATION                         */
/* ----------------------------------------------- */
const Enmap = require("enmap");

// SETUP
const setupWelcome = new Enmap({name: "setup_welcome"});

/* ----------------------------------------------- */
/* FUNCTIONS                                       */
/* ----------------------------------------------- */

/**
 * Commentaires
 * @returns {String} Channel ID by passing the Guild ID and the type of
 * the channel you want to search.
 * Example : getSetupData(GUILD_ID, "presentation") but it can be : "proposition" or "discussion"
 */
async function getSetupData(id, type){

    switch (type) {
        case "welcome":
            // Here id is the guild
            return await getResultsValue(setupWelcome, id)
        default:
            break;
    }

}

async function getResultsKey(db, id){
    let result;
    db.fetchEverything()?.forEach( async (value, key) => {
        if(key === id)
            result = key;
    })
    return result;
}

async function getResultsValue(db, id){
    let result;
    db.fetchEverything()?.forEach( async (value, key) => {
        if(key === id)
            result = value;
    })
    return result;
}

/* ----------------------------------------------- */
/* MODULE EXPORTS                                  */
/* ----------------------------------------------- */
module.exports = {
	getSetupData,
    setupWelcome,
}