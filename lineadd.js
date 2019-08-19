var express = require("express"),
    bodyParser = require("body-parser"),
    request = require("request"),
    app = express();
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
app.listen("3000");
app.post("/webhook", (req, res) => {
    var reply_token = req.body.events[0].replyToken;
    var msg = req.body.events[0].message.text;
    reply(reply_token, msg);
    res.sendStatus(200);
});

function reply(reply_token, msg) {
    var headers = {
        "Content-Type": "application/json",
        Authorization:
            "Bearer {VdKGNhSVx5cGjQ4bWjbVPmD88+MXVwHCS9oTJu5sZZgx2rFGa+bq93E3oQVo6ExDSZIFApjjR5GT30d+ca7IXPEpS30Ggnvkq1JEuQB2eVsHRJ6cCsZEC1Cf9Em2VPWhvQVxZbSBh6pBMV9HP+f0EQdB04t89/1O/w1cDnyilFU=}"
    };
    var body = JSON.stringify({
        replyToken: reply_token,
        messages: [
            {
                type: "text",
                text: msg
            }
        ]
    });
    request.post(
        {
            url: "https://api.line.me/v2/bot/message/reply",
            headers: headers,
            body: body
        },
        (err, res, body) => {
            console.log("status = " + res.statusCode);
        }
    );
}
