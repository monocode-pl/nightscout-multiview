export default function template({monitors, rows, cols, labelFontSize = '20px'}) {
    const iframes = monitors.map(({label, url}) => {
        return `<div class="monitor"> 
            <div class="monitor-label">${label}</div>
            <iframe title="${label}" src="${url}"></iframe>
        </div>`;
    }).join('\n');

    return `<html lang="pl">
    <head>
        <title>Nightscout MultiView</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: Helvetica, Arial, sans-serif;
                
                height: 100vh;
                width: 100vw;
                overflow: hidden;
            
                display: grid;
                grid-template-rows: repeat(${rows}, 1fr);
                grid-template-columns: repeat(${cols}, 1fr);
                grid-gap: 2px;
            }

            .monitor {
                position: relative;
                min-height: 0;
            }
    
            .monitor-label {
                position: absolute;
                top: 10px;
                left: 50%;
                transform: translateX(-50%);
                font-size: ${labelFontSize};
                text-transform: uppercase;
                font-weight: bold;
                color: #f5f5f5;
            }

        iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
        </style>
    </head>
    <body>
        ${iframes}           
    </body>
</html>`;
}