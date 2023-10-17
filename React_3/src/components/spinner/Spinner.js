const Spinner = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{margin: '0 auto', background: 'none', display: 'block'}} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <g transform="translate(80,50)">
            <g transform="rotate(0)">
            <rect x="-7" y="-7" width="14" height="14" fill="#FF0000" fillOpacity="1">
            <animateTransform attributeName="transform" type="scale" begin="-0.875s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
            <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.875s"></animate>
            </rect>
            </g>
            </g><g transform="translate(71.21320343559643,71.21320343559643)">
            <g transform="rotate(45)">
            <rect x="-7" y="-7" width="14" height="14" fill="#FF0000" fillOpacity="0.875">
            <animateTransform attributeName="transform" type="scale" begin="-0.75s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
            <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.75s"></animate>
            </rect>
            </g>
            </g><g transform="translate(50,80)">
            <g transform="rotate(90)">
            <rect x="-7" y="-7" width="14" height="14" fill="#FF0000" fillOpacity="0.75">
            <animateTransform attributeName="transform" type="scale" begin="-0.625s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
            <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.625s"></animate>
            </rect>
            </g>
            </g><g transform="translate(28.786796564403577,71.21320343559643)">
            <g transform="rotate(135)">
            <rect x="-7" y="-7" width="14" height="14" fill="#FF0000" fillOpacity="0.625">
            <animateTransform attributeName="transform" type="scale" begin="-0.5s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
            <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.5s"></animate>
            </rect>
            </g>
            </g><g transform="translate(20,50.00000000000001)">
            <g transform="rotate(180)">
            <rect x="-7" y="-7" width="14" height="14" fill="#FF0000" fillOpacity="0.5">
            <animateTransform attributeName="transform" type="scale" begin="-0.375s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
            <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.375s"></animate>
            </rect>
            </g>
            </g><g transform="translate(28.78679656440357,28.786796564403577)">
            <g transform="rotate(225)">
            <rect x="-7" y="-7" width="14" height="14" fill="#FF0000" fillOpacity="0.375">
            <animateTransform attributeName="transform" type="scale" begin="-0.25s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
            <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.25s"></animate>
            </rect>
            </g>
            </g><g transform="translate(49.99999999999999,20)">
            <g transform="rotate(270)">
            <rect x="-7" y="-7" width="14" height="14" fill="#FF0000" fillOpacity="0.25">
            <animateTransform attributeName="transform" type="scale" begin="-0.125s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
            <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="-0.125s"></animate>
            </rect>
            </g>
            </g><g transform="translate(71.21320343559643,28.78679656440357)">
            <g transform="rotate(315)">
            <rect x="-7" y="-7" width="14" height="14" fill="#FF0000" fillOpacity="0.125">
            <animateTransform attributeName="transform" type="scale" begin="0s" values="1.5 1.5;1 1" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animateTransform>
            <animate attributeName="fillOpacity" keyTimes="0;1" dur="1s" repeatCount="indefinite" values="1;0" begin="0s"></animate>
            </rect>
            </g>
            </g>
        </svg>
    )
}

export default Spinner;
