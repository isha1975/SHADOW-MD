const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "rN1AHBbR#5eudIHbvSWczWdPEj5Ct3He1YJnYxvAiW2DNE-C4LHM",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/91746e61ff4504a9014bb.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖🔰 Hi MD Is Online Now 💻\n*💻 Owner* - MD\n\n*💻 Owner Number* -94707330800\n\n_විධාන මෙනුව ලබා ගැනීමට .menu ලෙස ටයිප් කරන්න._",
SUDO_NB: process.env.SUDO_NB || "94707330800",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
MODE: process.env.MODE || "public",
};
