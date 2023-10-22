export default function template({monitors, rows, cols, labelFontSize = '20px'}) {
    const displayLogo = monitors.length < rows * cols;
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
                align-items: center;
                
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
        
        .logo {
           display: ${displayLogo ? 'flex' : 'none'};
           justify-content: center;
           align-items: center;
           height: 200px;
           max-height: 100%;
           min-height: 0;
           min-width: 0;
           grid-row: ${rows};
           grid-column: ${cols};
        }
        
        .logo svg {
            max-height: 100%;
            max-width: 100%;
        }
        
        </style>
    </head>
    <body>
        ${iframes}   
        <div class="logo">
            ${logoSvg} 
        </div>       
    </body>
</html>`;
}

const logoSvg = `

<svg
        height="553.93872"
        width="646.68616"
        version="1.1"
        id="Layer_1"
        viewBox="0 0 226.36198 193.89725"
        xmlns="http://www.w3.org/2000/svg">
    <defs
            id="defs118"/>
    <g
            id="g113"
            transform="matrix(0.53898831,0,0,0.53898831,37.932275,25.461827)"
            style="stroke-width:6.49427;stroke-dasharray:none">
        <path
                id="path1184"
                style="fill:#3caed6;stroke:#fbfbfb;stroke-width:64.9427;stroke-dasharray:none;stroke-opacity:1"
                d="m 140.01429,4.1686897e-4 c 0,0 -101.754713,113.62545313103 -104.934525,172.26694313103 -0.05089,0.9304 -0.07737,1.84749 -0.07737,2.74992 0,9.02437 1.154812,17.79218 3.321973,26.16355 1.73373,6.6971 4.116015,13.14064 7.075207,19.25831 3.69899,7.6471 8.299407,14.78569 13.660806,21.27509 2.144754,2.596 4.411707,5.08656 6.791082,7.46588 1.189363,1.18933 2.405869,2.35123 3.650492,3.48306 2.26e-4,2.1e-4 0.001,-2e-4 0.0013,0 2.489482,2.26384 5.08715,4.41179 7.78425,6.43212 2.66e-4,2e-4 0.001,-2e-4 0.0013,0 1.348413,1.01004 2.720326,1.9893 4.117268,2.93511 2.85e-4,1.9e-4 9.83e-4,-1.9e-4 0.0013,0 1.396944,0.94579 2.817369,1.85918 4.260599,2.7385 3.04e-4,1.9e-4 9.64e-4,-1.8e-4 0.0013,0 1.443231,0.87931 2.909044,1.72497 4.396319,2.53556 3.22e-4,1.8e-4 9.46e-4,-1.7e-4 0.0013,0 1.487277,0.81058 2.995352,1.58665 4.524429,2.32627 3.39e-4,1.6e-4 9.29e-4,-1.6e-4 0.0013,0 1.52908,0.7396 3.078827,1.44423 4.647465,2.11064 3.55e-4,1.5e-4 9.13e-4,-1.5e-4 0.0013,0 1.568645,0.66639 3.155665,1.29644 4.761625,1.8874 3.7e-4,1.3e-4 9e-4,-1.4e-4 10e-4,0 3.21229,1.18201 6.49729,2.21042 9.84542,3.07717 3.9e-4,10e-5 8.7e-4,-1.1e-4 0.001,0 3.34814,0.8667 6.75991,1.57206 10.22594,2.10556 4.1e-4,6e-5 8.6e-4,-6e-5 0.001,0 3.46605,0.53347 6.98592,0.89583 10.55193,1.07815 1.78321,0.0912 3.5783,0.13697 5.38314,0.13699 h 0.001 0.003 c 2.69218,0 5.89357,-0.0101 8.82435,-0.40843 7.58857,-0.63713 14.93037,-2.07895 21.95496,-4.23142 0.82339,-0.15628 1.64635,-0.33569 2.4696,-0.61011 0.875,0 1.75061,-0.8752 2.62561,-0.8752 2.625,-0.875 5.25058,-1.74935 7.87558,-2.62435 0.875,0 1.75041,-0.87521 1.75041,-0.87521 2.625,-0.87499 5.25058,-2.62475 7.87557,-4.37475 0.875,0 0.87541,-0.87521 1.75041,-0.87521 2.625,-1.74999 5.25058,-3.50023 7.87558,-5.25122 0,0 0.8752,-2.1e-4 0.8752,-0.87521 2.625,-1.75 5.25058,-4.37417 7.87558,-6.12517 20.12698,-20.12697 33.25271,-47.25511 33.25271,-77.88308 0,-56.00494 -96.25816,-165.3906671 -104.13416,-174.1416583 z"
                transform="translate(-1.4990817e-6)"/>
        <path
                style="fill:#3caed6;stroke:none;stroke-width:6.49427;stroke-dasharray:none;stroke-opacity:1"
                d="M 245.023,175.017 C 245.023,119.012 148.764,9.626 140.888,0.875 v 0 0 0 c 0,0 -105.885,116.386 -105.885,174.142 0,57.756 47.255,105.01 105.01,105.01 3.5,0 7.876,0 11.376,-0.875 0.875,0 1.75,0 2.625,-0.875 2.625,0 5.251,-0.875 7.876,-0.875 0.875,0 1.75,-0.875 3.5,-0.875 2.625,-0.875 5.251,-0.875 7.876,-1.75 0.875,0 1.75,-0.875 2.625,-0.875 2.625,-0.875 5.251,-1.75 7.876,-2.625 0.875,0 1.75,-0.875 1.75,-0.875 2.625,-0.875 5.251,-2.625 7.876,-4.375 0.875,0 0.875,-0.875 1.75,-0.875 2.625,-1.75 5.251,-3.5 7.876,-5.251 0,0 0.875,0 0.875,-0.875 2.625,-1.75 5.251,-4.375 7.876,-6.126 v 0 c 20.127,-20.127 33.253,-47.255 33.253,-77.883 z"
                id="path107"/>
        <path
                style="fill:#63bfde;stroke-width:6.49427;stroke-dasharray:none"
                d="m 183.768,140.014 c -9.626,0 -17.502,7.876 -17.502,17.502 0,9.626 7.876,17.502 17.502,17.502 9.626,0 17.502,-7.876 17.502,-17.502 0,-9.627 -7.877,-17.502 -17.502,-17.502 z"
                id="path109"/>
        <path
                style="display:inline;fill:#369dc0;stroke-width:6.49427;stroke-dasharray:none"
                d="m 148.764,271.276 c -57.756,0 -105.01,-47.255 -105.01,-105.01 0,-48.13 71.757,-136.513 97.134,-165.391 L 140.014,0 c 0,0 -105.01,117.261 -105.01,175.017 0,57.756 47.255,105.01 105.01,105.01 31.503,0 59.506,-14.001 78.758,-35.003 -19.254,15.751 -42.881,26.252 -70.008,26.252 z"
                id="path111"/>
    </g>
    <g
            aria-label="technologie
diabetyka"
            id="text278"
            style="font-size:29.8695px;font-family:Garet;-inkscape-font-specification:'Garet, Normal';fill:#f9f9f9;stroke:#fbfbfb;stroke-width:7.00068;stroke-linecap:round;stroke-linejoin:round;paint-order:stroke markers fill"
            transform="translate(-27.155252,-54.083118)">
        <path
                d="m 37.465838,155.13065 v -12.57506 h 5.107684 v -3.61421 h -5.107684 v -4.57004 h -4.540164 v 4.57004 h -2.270082 v 3.61421 h 2.270082 v 12.57506 z"
                style="font-family:Neuropolitical;-inkscape-font-specification:Neuropolitical;text-align:center;text-anchor:middle;fill:#323232"
                id="path1326"/>
        <path
                d="m 65.662606,148.67883 v -5.31677 c 0,-2.56877 -1.284389,-4.42068 -5.914161,-4.42068 h -7.825809 c -5.705074,0 -7.347897,1.58308 -7.347897,6.30246 v 3.73369 c 0,4.30121 2.001257,6.15312 7.138811,6.15312 h 5.257032 v -3.37526 H 51.71355 c -2.090865,0 -2.688255,-0.35843 -2.688255,-2.32982 v -0.74674 z M 61.21205,145.81136 H 49.025295 v -0.86621 c 0,-2.32982 0.716868,-2.56878 2.95708,-2.56878 h 7.407636 c 1.344127,0 1.822039,0.26883 1.822039,1.34413 z"
                style="font-family:Neuropolitical;-inkscape-font-specification:Neuropolitical;text-align:center;text-anchor:middle;fill:#323232"
                id="path1328"/>
        <path
                d="m 88.243888,155.13065 v -3.76356 H 76.654522 c -2.777863,0 -3.464861,-0.77661 -3.464861,-3.34539 v -1.91164 c 0,-2.65839 0.657128,-3.34539 3.464861,-3.34539 h 11.559497 v -3.82329 H 76.505175 c -6.003769,0 -7.76607,1.85191 -7.76607,7.01933 v 2.18047 c 0,5.13756 1.762301,6.98947 7.76607,6.98947 z"
                style="font-family:Neuropolitical;-inkscape-font-specification:Neuropolitical;text-align:center;text-anchor:middle;fill:#323232"
                id="path1330"/>
        <path
                d="m 112.73684,155.13065 v -9.16994 c 0,-5.16742 -1.7623,-7.01933 -7.82581,-7.01933 h -8.990719 v -5.22717 h -4.450556 v 21.41644 h 4.450556 v -12.36598 h 8.871239 c 2.748,0 3.49473,0.62726 3.49473,3.34539 v 9.02059 z"
                style="font-family:Neuropolitical;-inkscape-font-specification:Neuropolitical;text-align:center;text-anchor:middle;fill:#323232"
                id="path1332"/>
        <path
                d="m 137.0506,155.13065 v -9.16994 c 0,-5.16742 -1.7623,-7.01933 -7.79594,-7.01933 h -5.40638 c -6.00376,0 -7.76606,1.85191 -7.76606,7.01933 v 9.16994 h 4.45055 v -9.02059 c 0,-2.68826 0.80648,-3.34539 3.61421,-3.34539 h 4.83886 c 2.86747,0 3.61421,0.65713 3.61421,3.34539 v 9.02059 z"
                style="font-family:Neuropolitical;-inkscape-font-specification:Neuropolitical;text-align:center;text-anchor:middle;fill:#323232"
                id="path1334"/>
        <path
                d="m 153.50867,155.13065 c 6.03364,0 7.79594,-1.85191 7.79594,-6.98947 v -2.1506 c 0,-5.19729 -1.7623,-7.0492 -7.79594,-7.0492 h -5.40638 c -6.00377,0 -7.76607,1.85191 -7.76607,7.01933 v 2.18047 c 0,5.13756 1.7623,6.98947 7.76607,6.98947 z m 3.34538,-7.10895 c 0,2.68826 -0.71687,3.34539 -3.94277,3.34539 h -4.2116 c -3.16617,0 -3.9129,-0.65713 -3.9129,-3.34539 v -1.91164 c 0,-2.748 0.74673,-3.34539 3.9129,-3.34539 h 4.2116 c 3.2259,0 3.94277,0.59739 3.94277,3.34539 z"
                style="font-family:Neuropolitical;-inkscape-font-specification:Neuropolitical;text-align:center;text-anchor:middle;fill:#323232"
                id="path1336"/>
        <path
                d="m 169.22001,155.13065 v -21.41644 h -4.54016 v 21.41644 z"
                style="font-family:Neuropolitical;-inkscape-font-specification:Neuropolitical;text-align:center;text-anchor:middle;fill:#323232"
                id="path1338"/>
        <path
                d="m 185.76766,155.13065 c 6.03364,0 7.79594,-1.85191 7.79594,-6.98947 v -2.1506 c 0,-5.19729 -1.7623,-7.0492 -7.79594,-7.0492 h -5.40638 c -6.00376,0 -7.76607,1.85191 -7.76607,7.01933 v 2.18047 c 0,5.13756 1.76231,6.98947 7.76607,6.98947 z m 3.34539,-7.10895 c 0,2.68826 -0.71687,3.34539 -3.94278,3.34539 h -4.2116 c -3.16616,0 -3.9129,-0.65713 -3.9129,-3.34539 v -1.91164 c 0,-2.748 0.74674,-3.34539 3.9129,-3.34539 h 4.2116 c 3.22591,0 3.94278,0.59739 3.94278,3.34539 z"
                style="font-family:Neuropolitical;-inkscape-font-specification:Neuropolitical;text-align:center;text-anchor:middle;fill:#323232"
                id="path1340"/>
        <path
                d="m 211.93333,159.9695 c 4.03238,0 5.73494,-1.52334 5.73494,-5.13755 v -9.43876 c 0,-4.5999 -1.70256,-6.45181 -7.0492,-6.45181 h -7.22842 c -5.52585,0 -6.98946,1.52334 -6.98946,6.45181 v 2.47917 c 0,3.9129 1.82204,5.40638 6.78038,5.40638 h 10.15563 v 1.31425 c 0,1.28439 -0.50779,1.73244 -1.82204,1.73244 h -6.18299 v 3.64407 z m 1.40387,-10.15563 h -9.88681 c -2.06099,0 -2.68825,-0.44804 -2.68825,-2.18047 v -2.12073 c 0,-2.15061 0.62726,-2.77787 2.68825,-2.77787 h 6.98946 c 2.18048,0 2.89735,0.59739 2.89735,2.748 z"
                style="font-family:Neuropolitical;-inkscape-font-specification:Neuropolitical;text-align:center;text-anchor:middle;fill:#323232"
                id="path1342"/>
        <path
                d="m 225.55381,155.13065 v -15.7711 h -4.54016 v 15.7711 z m -1.55321,-17.11523 c 1.13504,0 1.55321,-0.41817 1.55321,-1.37399 v -1.73244 c 0,-0.95582 -0.41817,-1.34412 -1.55321,-1.34412 h -1.4636 c -1.10518,0 -1.52335,0.3883 -1.52335,1.34412 v 1.73244 c 0,0.95582 0.41817,1.37399 1.52335,1.37399 z"
                style="font-family:Neuropolitical;-inkscape-font-specification:Neuropolitical;text-align:center;text-anchor:middle;fill:#323232"
                id="path1344"/>
        <path
                d="m 250.0169,148.67883 v -5.31677 c 0,-2.56877 -1.28439,-4.42068 -5.91416,-4.42068 h -7.82581 c -5.70508,0 -7.3479,1.58308 -7.3479,6.30246 v 3.73369 c 0,4.30121 2.00126,6.15312 7.13881,6.15312 h 5.25703 v -3.37526 h -5.25703 c -2.09086,0 -2.68825,-0.35843 -2.68825,-2.32982 v -0.74674 z m -4.45056,-2.86747 h -12.18675 v -0.86621 c 0,-2.32982 0.71686,-2.56878 2.95708,-2.56878 h 7.40763 c 1.34413,0 1.82204,0.26883 1.82204,1.34413 z"
                style="font-family:Neuropolitical;-inkscape-font-specification:Neuropolitical;text-align:center;text-anchor:middle;fill:#323232"
                id="path1346"/>
        <path
                d="m 61.047784,193.7241 c 6.033639,0 7.795939,-1.85191 7.795939,-6.98946 v -14.42697 h -4.450555 v 5.22716 h -8.99072 c -6.063508,0 -7.825808,1.85191 -7.825808,7.01933 v 2.18048 c 0,5.13755 1.7623,6.98946 7.825808,6.98946 z m -9.020589,-9.02059 c 0,-2.89734 0.776607,-3.34538 3.912904,-3.34538 h 8.453069 v 5.2869 c 0,2.68825 -0.657129,3.31551 -3.464862,3.31551 h -4.958337 c -3.166167,0 -3.942774,-0.50778 -3.942774,-3.34538 z"
                style="font-family:Neuropolitical;-inkscape-font-specification:Neuropolitical;text-align:center;text-anchor:middle;fill:#323232"
                id="path1348"/>
        <path
                d="M 76.818853,193.7241 V 177.953 h -4.540164 v 15.7711 z m -1.553214,-17.11522 c 1.135041,0 1.553214,-0.41818 1.553214,-1.374 v -1.73243 c 0,-0.95583 -0.418173,-1.34413 -1.553214,-1.34413 h -1.463605 c -1.105172,0 -1.523345,0.3883 -1.523345,1.34413 v 1.73243 c 0,0.95582 0.418173,1.374 1.523345,1.374 z"
                style="font-family:Neuropolitical;-inkscape-font-specification:Neuropolitical;text-align:center;text-anchor:middle;fill:#323232"
                id="path1350"/>
        <path
                d="m 94.621032,193.7241 c 5.734948,0 7.377768,-1.58308 7.377768,-6.2726 v -3.94277 c 0,-4.12199 -2.031127,-5.9739 -7.198551,-5.9739 h -4.420686 v 3.16617 h 4.420686 c 1.971387,0 2.747994,0.53765 2.747994,2.59864 v 0.35844 H 85.570574 c -4.480425,0 -5.615466,1.55321 -5.615466,4.27134 v 1.52334 c 0,2.62852 1.254519,4.27134 5.914161,4.27134 z m 2.927211,-5.94403 c 0,2.41943 -0.896085,2.89734 -2.98695,2.89734 h -8.36346 c -1.135041,0 -1.822039,-0.3883 -1.822039,-1.52334 v -1.10518 c 0,-1.28438 0.627259,-1.64282 1.672692,-1.64282 h 11.499757 z"
                style="font-family:Neuropolitical;-inkscape-font-specification:Neuropolitical;text-align:center;text-anchor:middle;fill:#323232"
                id="path1352"/>
        <path
                d="m 118.7257,193.7241 c 6.03364,0 7.79594,-1.85191 7.79594,-6.98946 v -2.18048 c 0,-5.16742 -1.7623,-7.01933 -7.79594,-7.01933 h -8.99072 v -5.22716 h -4.45056 v 14.42697 c 0,5.13755 1.7623,6.98946 7.76607,6.98946 z m 3.34538,-7.10894 c 0,2.68825 -0.687,3.34538 -3.49473,3.34538 h -5.37651 c -2.80773,0 -3.46486,-0.65713 -3.46486,-3.31551 v -5.2869 h 8.84137 c 2.80773,0 3.49473,0.53765 3.49473,3.34538 z"
                style="font-family:Neuropolitical;-inkscape-font-specification:Neuropolitical;text-align:center;text-anchor:middle;fill:#323232"
                id="path1354"/>
        <path
                d="m 150.83538,187.27229 v -5.31677 c 0,-2.56878 -1.28439,-4.42069 -5.91416,-4.42069 h -7.82581 c -5.70507,0 -7.34789,1.58308 -7.34789,6.30246 v 3.73369 c 0,4.30121 2.00125,6.15312 7.13881,6.15312 h 5.25703 v -3.37525 h -5.25703 c -2.09087,0 -2.68826,-0.35844 -2.68826,-2.32983 v -0.74673 z m -4.45055,-2.86748 h -12.18676 v -0.86621 c 0,-2.32982 0.71687,-2.56878 2.95708,-2.56878 h 7.40764 c 1.34412,0 1.82204,0.26883 1.82204,1.34413 z"
                style="font-family:Neuropolitical;-inkscape-font-specification:Neuropolitical;text-align:center;text-anchor:middle;fill:#323232"
                id="path1356"/>
        <path
                d="m 159.52735,193.7241 v -12.57506 h 5.10768 v -3.61421 h -5.10768 v -4.57003 h -4.54016 v 4.57003 h -2.27009 v 3.61421 h 2.27009 v 12.57506 z"
                style="font-family:Neuropolitical;-inkscape-font-specification:Neuropolitical;text-align:center;text-anchor:middle;fill:#323232"
                id="path1358"/>
        <path
                d="m 171.14654,177.53483 h -4.39081 v 8.60242 c 0,3.9129 1.82204,5.73494 6.66089,5.73494 h 10.21537 v 1.31426 c 0,1.34413 -0.56752,1.73243 -1.79217,1.73243 h -6.09337 v 3.64408 h 6.48168 c 4.03238,0 5.73494,-1.52335 5.73494,-5.13756 v -15.89057 h -4.33108 v 10.81276 h -9.94654 c -1.82204,0 -2.53891,-0.59739 -2.53891,-2.38956 z"
                style="font-family:Neuropolitical;-inkscape-font-specification:Neuropolitical;text-align:center;text-anchor:middle;fill:#323232"
                id="path1360"/>
        <path
                d="m 211.4106,193.7241 -10.33485,-8.39333 10.06603,-7.79594 h -5.79469 l -9.34915,7.49724 v -12.7244 h -4.48043 v 21.41643 h 4.48043 v -7.64659 l 9.40889,7.64659 z"
                style="font-family:Neuropolitical;-inkscape-font-specification:Neuropolitical;text-align:center;text-anchor:middle;fill:#323232"
                id="path1362"/>
        <path
                d="m 226.73361,193.7241 c 5.73495,0 7.37777,-1.58308 7.37777,-6.2726 v -3.94277 c 0,-4.12199 -2.03113,-5.9739 -7.19855,-5.9739 h -4.42069 v 3.16617 h 4.42069 c 1.97139,0 2.74799,0.53765 2.74799,2.59864 v 0.35844 h -11.97767 c -4.48042,0 -5.61546,1.55321 -5.61546,4.27134 v 1.52334 c 0,2.62852 1.25452,4.27134 5.91416,4.27134 z m 2.92721,-5.94403 c 0,2.41943 -0.89608,2.89734 -2.98695,2.89734 h -8.36346 c -1.13504,0 -1.82204,-0.3883 -1.82204,-1.52334 v -1.10518 c 0,-1.28438 0.62726,-1.64282 1.6727,-1.64282 h 11.49975 z"
                style="font-family:Neuropolitical;-inkscape-font-specification:Neuropolitical;text-align:center;text-anchor:middle;fill:#323232"
                id="path1364"/>
    </g>
</svg>

`