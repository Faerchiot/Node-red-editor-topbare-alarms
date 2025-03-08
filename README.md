1. : Copy TopbarPanel.js into your node-red root folder
2. : change the line in the TopbarPanel.js : let socket = new WebSocket("ws://192.168.1.11:1885/buttonws"); to a endpoint as you prefer! Remember WSS or WS! 
3. : Add the following to settings.js of your node-red instance and restart node-red

  editorTheme: {
        /** The following property can be used to set a custom theme for the editor.
         * See https://github.com/node-red-contrib-themes/theme-collection for
         * a collection of themes to chose from.
         */
        page: {
            scripts: [ "</YOURROOTPATH>/TopbarPanel.js"]
        },

        .............................................
        .....................
        ................

 3. :   in node-red in a flow, make an Array with the states of the 10 buttons, send the payload to the websocket.
        put the array in context, and update it async.

 4. : Have fun, change it as you like, this is just a piece of example :-)

        EXAMPLE Payload: 

        [
    {
        "label": "Button 1",
        "topic": "topic1",
        "state": "alarm"
    },
    {
        "label": "Button 2",
        "topic": "topic2",
        "state": "ok"
    },
    {
        "label": "Button 3",
        "topic": "topic3",
        "state": "alarm"
    },
    {
        "label": "Button 4",
        "topic": "topic4",
        "state": "ok"
    },
    {
        "label": "Button 5",
        "topic": "topic5",
        "state": "alarm"
    },
    {
        "label": "Button 6",
        "topic": "topic6",
        "state": "ok"
    },
    {
        "label": "Button 7",
        "topic": "topic7",
        "state": "ok"
    },
    {
        "label": "Button 8",
        "topic": "topic8",
        "state": "alarm"
    },
    {
        "label": "Button 9",
        "topic": "topic9",
        "state": "ok"
    },
    {
        "label": "Button 10",
        "topic": "topic10",
        "state": "ok"
    }
]
