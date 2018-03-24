var clashApi = require('clash-of-clans-api');

var appRouter = function (app) {

    let client = clashApi({
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjI0Y2VlZThkLTI3MjMtNDU0MS04NWMxLTNhMTRjYjBhNzFmNiIsImlhdCI6MTUyMTkxNzkyNiwic3ViIjoiZGV2ZWxvcGVyLzRjODY5NGE4LTlmODctMzAzMy03YTUzLWMwODZjYTY4MGFlMSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEzOS41OS45Mi4xMzAiXSwidHlwZSI6ImNsaWVudCJ9XX0.xje-e9FpLcYcQZzV7FGEwlD30B-CkPqDvkxC56cbMLiLkj5YbBqqi4tXDdvrCeHg__LqQXCfQyvHvf2ngI8O-A"
    });

    app.get('/', function (req, res) {
        res.json(200, { msg: 'OK' });
    })

    // Clan by Tag
    app.get("/clans/:clanTag", function (req, res) {
        client
            .clanByTag('#'+req.params.clanTag)
            .then(function (response){
                console.log(response)
                return res.send(response);

            })
            .catch(function (error) {
                console.log(error)
                return res.send(error);

            });
    });

    app.get("/clans/:clanTag/members", function (req, res) {

        client
            .clanMembersByTag('#' +req.params.clanTag)
            .then(function (response) {
                console.log(response)
                return res.send(response);

            })
            .catch(function (error) {
                console.log(error)
                return res.send(error);

            });
    });

    app.get("/clans/:clanTag/warlog", function (req, res) {

        client
            .clanWarlogByTag('#'+req.params.clanTag)
            .then(function (response) {
                console.log(response)
                return res.send(response);

            })
            .catch(function (error) {
                console.log(error)
                return res.send(error);

            });
    });

    app.get("/clans/:clanTag/currentwar", function (req, res) {

        client
            .clanCurrentWarByTag('#'+req.params.clanTag)
            .then(function (response) {
                console.log(response)
                return res.send(response);

            })
            .catch(function (error) {
                console.log(error)
                return res.send(error);

            });
    });

    app.get("/players/:playerTag", function (req, res) {

        client
            .playerByTag('#' +req.params.playerTag)
            .then(function (response) {
                console.log(response)
                return res.send(response);

            })
            .catch(function (error) {
                console.log(error)
                return res.send(error);

            });
    });

}

module.exports = appRouter;
