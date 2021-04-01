export const template = ({ bundle }) => (
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>flame-chart-js</title>
    <style>
        html {
            height: 100%;
        }

        body {
            height: 100%;
        }

        .root {
            display: flex;
            flex-direction: column;
            height: 75%;
        }

        .inputLabel {
            padding: 0 6px 0 16px;
        }

        .input {
            width: 100px;
        }

        .inputWrapper {
            margin-bottom: 8px;
            display: flex;
            justify-content: space-between;
        }

        #inputs {
            display: inline-block;
        }

        .updateButton {
            margin: 16px 0 0 14px;
            width: 100px;
            height: 30px;
        }

        #wrapper {
            padding: 20px;
            border: 1px solid black;
            flex: 1;
        }
    </style>
</head>
<body>
<div class="root">
    <div id="wrapper">
        <canvas id="canvas"></canvas>
    </div>
    <div style="margin-top: 24px;">
        <div id="inputs">
            <div class="inputWrapper">
                <label class="inputLabel" for="performance">performance:</label><input type="checkbox" id="performance"/>
            </div>
        </div>
        <div>
            <button class="updateButton" id="button">Update</button>
        </div>
    </div>
    <div>
        <pre id="selected-node"></pre>
    </div>
</div>
${
    Object.keys(bundle).map((name) => (
        `<script src="${name}"></script>`
    ))
}
</body>
</html>`
)
