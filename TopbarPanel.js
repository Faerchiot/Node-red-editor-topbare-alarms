localStorage.setItem("last-sidebar-tab", "info");

(function() {
    // Create an array of 10 objects to hold button details (initially empty)
    const buttonData = [
        { label: "", topic: "topic1", state: "ok", animation: "" },
        { label: "", topic: "topic2", state: "ok", animation: "" },
        { label: "", topic: "topic3", state: "ok", animation: "" },
        { label: "", topic: "topic4", state: "ok", animation: "" },
        { label: "", topic: "topic5", state: "ok", animation: "" },
        { label: "", topic: "topic6", state: "ok", animation: "" },
        { label: "", topic: "topic7", state: "ok", animation: "" },
        { label: "", topic: "topic8", state: "ok", animation: "" },
        { label: "", topic: "topic9", state: "ok", animation: "" },
        { label: "", topic: "topic10", state: "ok", animation: "" }
    ];

    // Create a container to hold the buttons side by side
    let buttonContainer = document.createElement("div");
    buttonContainer.style.position = "fixed";
    buttonContainer.style.top = "10px";
    buttonContainer.style.right = "400px";
    buttonContainer.style.zIndex = "1000";
    buttonContainer.style.display = "flex";
    buttonContainer.style.flexDirection = "row";
    buttonContainer.style.flexWrap = "wrap"; // Allow wrapping if screen size is too small
    buttonContainer.style.gap = "2px"; // 10px padding between buttons
    document.body.appendChild(buttonContainer);

    // Create buttons dynamically inside the container
    buttonData.forEach((buttonInfo, index) => {
        let button = document.createElement("button");
        button.id = "button_" + index;
        button.innerText = buttonInfo.label + " (" + buttonInfo.state.toUpperCase() + ")";
        button.style.padding = "2px 10px";
        button.style.background = "#444";
        button.style.color = "#fff";
        button.style.borderRadius = "2px";
        button.style.cursor = "pointer";
        button.style.border = "none";
        button.style.transition = "background 0.5s ease-in-out"; // Smooth transition

        buttonContainer.appendChild(button);
    });

    // Create the WebSocket connection (only one)
    let socket = new WebSocket("ws://192.168.1.11:1885/buttonws");

    socket.onopen = function() {
        console.log("WebSocket connection established.");
    };

    socket.onmessage = function(event) {
        try {
            // Parse the incoming data (assumes JSON)
            let data = JSON.parse(event.data);

            // Update the button data based on the received message
            data.forEach((buttonUpdate, index) => {
                let button = document.getElementById("button_" + index);
                if (button) {
                    // Update button text
                    button.innerText = buttonUpdate.label + " (" + buttonUpdate.state.toUpperCase() + ")";

                    // Apply the state animation if it's "alarm"
                    if (buttonUpdate.animation === "blink" && buttonUpdate.state === "alarm") {
                        button.style.animation = "blink 0.7s infinite alternate";
                    } else {
                        button.style.animation = "none";
                    }

                    // Update button style based on state
                    button.style.background = buttonUpdate.state === "alarm" ? "darkred" : "limegreen";
                }
            });
        } catch (e) {
            console.log("Error parsing message:", e);
        }
    };

    socket.onerror = function() {
        console.log("WebSocket Error");
    };

    socket.onclose = function() {
        console.log("WebSocket closed");
    };

    // Add blinking effect using CSS animation
    let style = document.createElement("style");
    style.innerHTML = `
        @keyframes blink {
            0% { background-color: red; }
            50% { background-color: orange; }
            100% { background-color: darkred; }
        }
    `;
    document.head.appendChild(style);

})();
