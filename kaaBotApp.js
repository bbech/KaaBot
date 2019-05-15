const express = require('express');
const bodyParser = require('body-parser');
const slack = require('@slack/client');


// const bot_token = 'TO_Replace';
// const rtm = new slack.RtmClient(bot_token);


let httpApi = express();
httpApi.use(bodyParser.json());
httpApi.use(bodyParser.urlencoded({extended: true}));
httpApi.post('/', handleChanlege);
httpApi.get('/test', handleTest);
httpApi.listen(24605);



// rtm.on(slack.CLIENT_EVENTS.RTM.AUTHENTICATED, (data) => {
//     console.log(`Authenticated to ${data.team.name}`);
// });
// rtm.start();


async function handleChanlege(req, res) {
    let result = '';
    try {
        result = req.body.challenge;
    } catch(e) {
        result = e;
    } finally {
        res.status(200).send(result);
    }
}


async function handleTest(req, res) {
    let result = '';
    try {
        result = 'Serveur UP';
    } catch(e) {
        result = e;
    } finally {
        res.status(200).send(result);
    }
}