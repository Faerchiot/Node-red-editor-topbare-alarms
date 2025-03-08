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
    "label": "PLC 1",
    "topic": "topic1",
    "state": "ok",
    "animation": "none"
  },
  {
    "label": "PLC 2 💩",
    "topic": "topic2",
    "state": "alarm",
    "animation": "blink"
  },
  {
    "label": "PLC 3",
    "topic": "topic3",
    "state": "ok",
    "animation": "none"
  },
  {
    "label": "PLC 4",
    "topic": "topic4",
    "state": "ok",
    "animation": "none"
  },
  {
    "label": "PLC 5",
    "topic": "topic5",
    "state": "ok",
    "animation": "none"
  },
    {
      "label": "PLC 6",
      "topic": "topic6",
      "state": "ok",
      "animation": "none"
    },
    {
      "label": "PLC 7 💩",
      "topic": "topic7",
      "state": "alarm",
      "animation": "blink"
    },
    {
      "label": "PLC 8",
      "topic": "topic8",
      "state": "ok",
      "animation": "none"
    },
    {
      "label": "PLC 9",
      "topic": "topic9",
      "state": "ok",
      "animation": "none"
    },
    {
      "label": "PLC 10",
      "topic": "topic10",
      "state": "ok",
      "animation": "none"
    }
]
