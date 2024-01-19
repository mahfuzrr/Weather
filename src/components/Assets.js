const Assets = {
    Cloudy: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <defs>
                <linearGradient
                    id="a"
                    x1="99.45"
                    y1="30.68"
                    x2="232.64"
                    y2="261.37"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#f3f7fe" />
                    <stop offset="0.45" stopColor="#f3f7fe" />
                    <stop offset="1" stopColor="#deeafb" />
                </linearGradient>
                <symbol id="b" viewBox="0 0 350 222">
                    {/* <!-- cloud --> */}
                    <path
                        d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                        stroke="#e6effc"
                        strokeMiterlimit="10"
                        strokeWidth="6"
                        fill="url(#a)"
                    />
                </symbol>
            </defs>
            <use width="350" height="222" transform="translate(81 145)" xlinkHref="#b">
                <animateTransform
                    attributeName="transform"
                    additive="sum"
                    type="translate"
                    values="-18 0; 18 0; -18 0"
                    dur="6s"
                    repeatCount="indefinite"
                />
            </use>
        </svg>
    ),
    fewCloud: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <defs>
                <linearGradient
                    id="a"
                    x1="99.45"
                    y1="30.68"
                    x2="232.64"
                    y2="261.37"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#f3f7fe" />
                    <stop offset="0.45" stopColor="#f3f7fe" />
                    <stop offset="1" stopColor="#deeafb" />
                </linearGradient>
                <linearGradient
                    id="b"
                    x1="78"
                    y1="63.35"
                    x2="118"
                    y2="132.65"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#fbbf24" />
                    <stop offset="0.45" stopColor="#fbbf24" />
                    <stop offset="1" stopColor="#f59e0b" />
                </linearGradient>
                <symbol id="d" viewBox="0 0 196 196">
                    {/* <!-- sun-core --> */}
                    <circle
                        cx="98"
                        cy="98"
                        r="40"
                        stroke="#f8af18"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                        fill="url(#b)"
                    />

                    {/* <!-- sun-rays --> */}
                    <path
                        d="M98,31.38V6m0,184V164.62M145.11,50.89,163.05,33M33,163.05l17.94-17.94m0-94.22L33,33m130.1,130.1-17.94-17.94M6,98H31.38M190,98H164.62"
                        fill="none"
                        stroke="#fbbf24"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="12"
                    >
                        <animateTransform
                            attributeName="transform"
                            additive="sum"
                            type="rotate"
                            values="0 98 98; 45 98 98"
                            dur="6s"
                            repeatCount="indefinite"
                        />
                    </path>
                </symbol>
                <symbol id="e" viewBox="0 0 350 222">
                    <path
                        d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                        stroke="#e6effc"
                        strokeMiterlimit="10"
                        strokeWidth="6"
                        fill="url(#a)"
                    />
                </symbol>
                <symbol id="c" viewBox="0 0 363 258">
                    <use width="196" height="196" xlinkHref="#d" />
                    <use width="350" height="222" transform="translate(13 36)" xlinkHref="#e" />
                </symbol>
            </defs>
            <use width="363" height="258" transform="translate(68 109)" xlinkHref="#c" />
        </svg>
    ),
    brokenCloud: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <defs>
                <linearGradient
                    id="a"
                    x1="99.45"
                    y1="30.68"
                    x2="232.64"
                    y2="261.37"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#f3f7fe" />
                    <stop offset="0.45" stopColor="#f3f7fe" />
                    <stop offset="1" stopColor="#deeafb" />
                </linearGradient>
                <linearGradient
                    id="b"
                    x1="52.74"
                    y1="9.62"
                    x2="133.36"
                    y2="149.27"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#9ca3af" />
                    <stop offset="0.45" stopColor="#9ca3af" />
                    <stop offset="1" stopColor="#6b7280" />
                </linearGradient>
                <symbol id="d" viewBox="0 0 200.26 126.12">
                    <path
                        d="M.5,93.18a32.44,32.44,0,0,0,32.44,32.44H162.69v-.12c.77,0,1.53.12,2.31.12a34.75,34.75,0,0,0,6.49-68.89A32.38,32.38,0,0,0,123,23.62,48.58,48.58,0,0,0,34.4,60.81c-.49,0-1-.07-1.46-.07A32.44,32.44,0,0,0,.5,93.18Z"
                        stroke="#848b98"
                        strokeMiterlimit="10"
                        fill="url(#b)"
                    />
                </symbol>
                <symbol id="e" viewBox="0 0 350 222">
                    <path
                        d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                        stroke="#e6effc"
                        strokeMiterlimit="10"
                        strokeWidth="6"
                        fill="url(#a)"
                    />
                </symbol>
                <symbol id="c" viewBox="0 0 398 222" overflow="visible">
                    {/* <!-- dark-cloud --> */}
                    <use
                        width="200.26"
                        height="126.12"
                        transform="translate(198 27)"
                        xlinkHref="#d"
                    >
                        <animateTransform
                            attributeName="transform"
                            additive="sum"
                            type="translate"
                            values="-9 0; 9 0; -9 0"
                            dur="6s"
                            repeatCount="indefinite"
                        />
                    </use>

                    {/* <!-- cloud --> */}
                    <use width="350" height="222" xlinkHref="#e">
                        <animateTransform
                            attributeName="transform"
                            additive="sum"
                            type="translate"
                            values="-18 0; 18 0; -18 0"
                            dur="6s"
                            repeatCount="indefinite"
                        />
                    </use>
                </symbol>
            </defs>
            <use width="398" height="222" transform="translate(68.84 145)" xlinkHref="#c" />
        </svg>
    ),
    rainyDay:
        'https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/rainy-6.svg',
    Sun: 'https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/day.svg',
    Haze: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <defs>
                <linearGradient
                    id="a"
                    x1="17.25"
                    y1="43.11"
                    x2="89.25"
                    y2="167.82"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#d4d7dd" />
                    <stop offset="0.45" stopColor="#d4d7dd" />
                    <stop offset="1" stopColor="#bec1c6" />
                </linearGradient>
                <linearGradient
                    id="b"
                    x1="107.25"
                    y1="-8.85"
                    x2="179.25"
                    y2="115.86"
                    xlinkHref="#a"
                />
                <linearGradient
                    id="c"
                    x1="174.75"
                    y1="-47.82"
                    x2="246.75"
                    y2="76.89"
                    xlinkHref="#a"
                />
                <linearGradient id="d" y1="-4.89" x2="89.25" y2="119.82" xlinkHref="#a" />
                <linearGradient
                    id="e"
                    x1="107.25"
                    y1="-56.85"
                    x2="179.25"
                    y2="67.86"
                    xlinkHref="#a"
                />
                <linearGradient
                    id="f"
                    x1="174.75"
                    y1="-95.82"
                    x2="246.75"
                    y2="28.89"
                    xlinkHref="#a"
                />
                <linearGradient
                    id="g"
                    x1="149.99"
                    y1="119.24"
                    x2="234.01"
                    y2="264.76"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#fbbf24" />
                    <stop offset="0.45" stopColor="#fbbf24" />
                    <stop offset="1" stopColor="#f59e0b" />
                </linearGradient>
                <clipPath id="h">
                    <rect width="512" height="306" fill="none" />
                </clipPath>
                <symbol id="i" viewBox="0 0 384 384">
                    {/* <!-- sun-core --> */}
                    <circle
                        cx="192"
                        cy="192"
                        r="84"
                        stroke="#f8af18"
                        strokeMiterlimit="10"
                        strokeWidth="6"
                        fill="url(#g)"
                    />

                    {/* <!-- sun-rays --> */}
                    <path
                        d="M192,61.66V12m0,360V322.34M284.17,99.83l35.11-35.11M64.72,319.28l35.11-35.11m0-184.34L64.72,64.72M319.28,319.28l-35.11-35.11M61.66,192H12m360,0H322.34"
                        fill="none"
                        stroke="#fbbf24"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="24"
                    >
                        <animateTransform
                            attributeName="transform"
                            additive="sum"
                            type="rotate"
                            values="0 192 192; 45 192 192"
                            dur="6s"
                            repeatCount="indefinite"
                        />
                    </path>
                </symbol>
                <symbol id="j" viewBox="0 0 264 72" overflow="visible">
                    <g>
                        <line
                            x1="12"
                            y1="60"
                            x2="42"
                            y2="60"
                            fill="none"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="24"
                            stroke="url(#a)"
                        />
                        <line
                            x1="102"
                            y1="60"
                            x2="192"
                            y2="60"
                            fill="none"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="24"
                            strokeDasharray="60 60"
                            stroke="url(#b)"
                        />
                        <line
                            x1="222"
                            y1="60"
                            x2="252"
                            y2="60"
                            fill="none"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="24"
                            stroke="url(#c)"
                        />

                        <animateTransform
                            attributeName="transform"
                            additive="sum"
                            type="translate"
                            values="-24 0; 24 0; -24 0"
                            dur="6s"
                            repeatCount="indefinite"
                        />
                    </g>
                    <g>
                        <line
                            x1="12"
                            y1="12"
                            x2="42"
                            y2="12"
                            fill="none"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="24"
                            stroke="url(#d)"
                        />
                        <line
                            x1="102"
                            y1="12"
                            x2="192"
                            y2="12"
                            fill="none"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="24"
                            strokeDasharray="60 60"
                            stroke="url(#e)"
                        />
                        <line
                            x1="222"
                            y1="12"
                            x2="252"
                            y2="12"
                            fill="none"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="24"
                            stroke="url(#f)"
                        />

                        <animateTransform
                            attributeName="transform"
                            additive="sum"
                            type="translate"
                            values="24 0; -24 0; 24 0"
                            dur="6s"
                            repeatCount="indefinite"
                        />
                    </g>
                </symbol>
            </defs>
            <g clipPath="url(#h)">
                <use width="384" height="384" transform="translate(64 100)" xlinkHref="#i" />
            </g>
            <use width="264" height="72" transform="translate(124 336)" xlinkHref="#j" />
        </svg>
    ),
    thunderstorm: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <defs>
                <linearGradient
                    id="a"
                    x1="99.45"
                    y1="30.68"
                    x2="232.64"
                    y2="261.37"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#f3f7fe" />
                    <stop offset="0.45" stopColor="#f3f7fe" />
                    <stop offset="1" stopColor="#deeafb" />
                </linearGradient>
                <linearGradient
                    id="b"
                    x1="8.67"
                    y1="17.07"
                    x2="80.88"
                    y2="142.14"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#f7b23b" />
                    <stop offset="0.45" stopColor="#f7b23b" />
                    <stop offset="1" stopColor="#f59e0b" />
                </linearGradient>
                <symbol id="c" viewBox="0 0 350 222">
                    <path
                        d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                        stroke="#e6effc"
                        strokeMiterlimit="10"
                        strokeWidth="6"
                        fill="url(#a)"
                    />
                </symbol>
                <symbol id="d" viewBox="0 0 102.66 186.75">
                    {/* <!-- lightning-bolt --> */}
                    <polygon
                        points="34.77 2 2.77 98 34.77 98 18.77 178 98.78 66 50.77 66 82.78 2 34.77 2"
                        stroke="#f6a823"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                        fill="url(#b)"
                    >
                        <animate
                            id="x1"
                            attributeName="opacity"
                            values="1; 1; 0; 1; 0; 1; 0; 1"
                            begin="0s; x1.end+.67s"
                            dur="1.33s"
                            keyTimes="0; .38; .5; .63; .75; .86; .94; 1"
                        />
                    </polygon>
                </symbol>
            </defs>
            <use width="350" height="222" transform="translate(81 145)" xlinkHref="#c" />
            <use width="102.66" height="186.74" transform="translate(205.23 291)" xlinkHref="#d" />
        </svg>
    ),
    snow: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <defs>
                <linearGradient
                    id="a"
                    x1="99.45"
                    y1="30.68"
                    x2="232.64"
                    y2="261.37"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#f3f7fe" />
                    <stop offset="0.45" stopColor="#f3f7fe" />
                    <stop offset="1" stopColor="#deeafb" />
                </linearGradient>
                <linearGradient
                    id="b"
                    x1="11.38"
                    y1="5.93"
                    x2="32.82"
                    y2="43.07"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#86c3db" />
                    <stop offset="0.45" stopColor="#86c3db" />
                    <stop offset="1" stopColor="#5eafcf" />
                </linearGradient>
                <linearGradient id="c" x1="67.38" y1="5.93" x2="88.82" y2="43.07" xlinkHref="#b" />
                <linearGradient
                    id="d"
                    x1="123.38"
                    y1="5.93"
                    x2="144.82"
                    y2="43.07"
                    xlinkHref="#b"
                />
                <symbol id="e" viewBox="0 0 350 222">
                    <path
                        d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                        stroke="#e6effc"
                        strokeMiterlimit="10"
                        strokeWidth="6"
                        fill="url(#a)"
                    />
                </symbol>
                <symbol id="f" viewBox="0 0 156.2 49" overflow="visible">
                    {/* <!-- snowflake-1 --> */}
                    <g>
                        <path
                            d="M41.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L41.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,37.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L6.58,11A4.08,4.08,0,0,0,1,12.5,4,4,0,0,0,2.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L2.53,31A4,4,0,0,0,1,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23L37.62,38a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,41.67,31ZM19.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,19.06,29.7Z"
                            stroke="#86c3db"
                            strokeMiterlimit="10"
                            fill="url(#b)"
                            opacity="0"
                        >
                            <animateTransform
                                attributeName="transform"
                                additive="sum"
                                type="rotate"
                                values="0 24 24; 360 24 24"
                                dur="6s"
                                repeatCount="indefinite"
                            />

                            <animate
                                id="t1"
                                attributeName="opacity"
                                values="0; 1; 1; 0"
                                begin="0s; t1.end+1s"
                                dur="2s"
                                keyTimes="0; .17; .83; 1"
                            />
                        </path>

                        <animateTransform
                            id="s1"
                            attributeName="transform"
                            additive="sum"
                            type="translate"
                            values="0 -36; 0 92;"
                            begin="0s; s1.end+1s"
                            dur="2s"
                        />
                    </g>

                    {/* <!-- snowflake-2 --> */}
                    <g>
                        <path
                            d="M97.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L97.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,93.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L62.58,11A4.08,4.08,0,0,0,57,12.5,4,4,0,0,0,58.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L58.53,31A4,4,0,0,0,57,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23L93.62,38a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,97.67,31ZM75.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,75.06,29.7Z"
                            stroke="#86c3db"
                            strokeMiterlimit="10"
                            fill="url(#c)"
                            opacity="0"
                        >
                            <animateTransform
                                attributeName="transform"
                                additive="sum"
                                type="rotate"
                                values="0 80 24; 360 80 24"
                                dur="6s"
                                repeatCount="indefinite"
                            />

                            <animate
                                id="t2"
                                attributeName="opacity"
                                values="0; 1; 1; 0"
                                begin="-.83s; t2.end+1s"
                                dur="2s"
                                keyTimes="0; .17; .83; 1"
                            />
                        </path>

                        <animateTransform
                            id="s2"
                            attributeName="transform"
                            additive="sum"
                            type="translate"
                            values="0 -36; 0 92;"
                            begin="-.83s; s2.end+1s"
                            dur="2s"
                        />
                    </g>

                    {/* <!-- snowflake-3 --> */}
                    <g>
                        <path
                            d="M153.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L153.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,149.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L118.58,11A4.08,4.08,0,0,0,113,12.5,4,4,0,0,0,114.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L114.53,31A4,4,0,0,0,113,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23l5.79,3.3a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,153.67,31ZM131.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,131.06,29.7Z"
                            stroke="#86c3db"
                            strokeMiterlimit="10"
                            fill="url(#d)"
                            opacity="0"
                        >
                            <animateTransform
                                attributeName="transform"
                                additive="sum"
                                type="rotate"
                                values="0 136 24; 360 136 24"
                                dur="6s"
                                repeatCount="indefinite"
                            />

                            <animate
                                id="t3"
                                attributeName="opacity"
                                values="0; 1; 1; 0"
                                begin=".83s; t3.end+1s"
                                dur="2s"
                                keyTimes="0; .17; .83; 1"
                            />
                        </path>

                        <animateTransform
                            id="s3"
                            attributeName="transform"
                            additive="sum"
                            type="translate"
                            values="0 -36; 0 92;"
                            begin=".83s; s3.end+1s"
                            dur="2s"
                        />
                    </g>
                </symbol>
            </defs>
            <use width="350" height="222" transform="translate(81 145)" xlinkHref="#e" />
            <use width="156.2" height="49" transform="translate(177.9 337.5)" xlinkHref="#f" />
        </svg>
    ),
    mist: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <defs>
                <linearGradient
                    id="a"
                    x1="220"
                    y1="137.65"
                    x2="292"
                    y2="262.35"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#d4d7dd" />
                    <stop offset="0.45" stopColor="#d4d7dd" />
                    <stop offset="1" stopColor="#bec1c6" />
                </linearGradient>
                <linearGradient id="b" y1="193.65" y2="318.35" xlinkHref="#a" />
                <linearGradient id="c" y1="249.65" y2="374.35" xlinkHref="#a" />
            </defs>

            {/* <!-- layer-1 --> */}
            <line
                x1="136"
                y1="200"
                x2="376"
                y2="200"
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="24"
                stroke="url(#a)"
            >
                <animateTransform
                    attributeName="transform"
                    additive="sum"
                    type="translate"
                    values="-48 0; 48 0; -48 0"
                    dur="6s"
                    repeatCount="indefinite"
                />
            </line>

            {/* <!-- layer-2 --> */}
            <line
                x1="136"
                y1="256"
                x2="376"
                y2="256"
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="24"
                stroke="url(#b)"
            >
                <animateTransform
                    attributeName="transform"
                    additive="sum"
                    type="translate"
                    values="-48 0; 48 0; -48 0"
                    begin="-1.5s"
                    dur="6s"
                    repeatCount="indefinite"
                />
            </line>

            {/* <!-- layer-3 --> */}
            <line
                x1="136"
                y1="312"
                x2="376"
                y2="312"
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="24"
                stroke="url(#c)"
            >
                <animateTransform
                    attributeName="transform"
                    additive="sum"
                    type="translate"
                    values="48 0; -48 0; 48 0"
                    dur="6s"
                    repeatCount="indefinite"
                />
            </line>
        </svg>
    ),
    night: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <defs>
                <linearGradient
                    id="a"
                    x1="54.33"
                    y1="29.03"
                    x2="187.18"
                    y2="259.13"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#86c3db" />
                    <stop offset="0.45" stopColor="#86c3db" />
                    <stop offset="1" stopColor="#5eafcf" />
                </linearGradient>
                <linearGradient
                    id="b"
                    x1="294"
                    y1="112.82"
                    x2="330"
                    y2="175.18"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#fcd966" />
                    <stop offset="0.45" stopColor="#fcd966" />
                    <stop offset="1" stopColor="#fccd34" />
                </linearGradient>
                <linearGradient
                    id="c"
                    x1="295.52"
                    y1="185.86"
                    x2="316.48"
                    y2="222.14"
                    xlinkHref="#b"
                />
                <linearGradient
                    id="d"
                    x1="356.29"
                    y1="194.78"
                    x2="387.71"
                    y2="249.22"
                    xlinkHref="#b"
                />
                <symbol id="e" viewBox="0 0 270 270" overflow="visible">
                    {/* <!-- moon --> */}
                    <path
                        d="M252.25,168.63C178.13,168.63,118,109.35,118,36.21A130.48,130.48,0,0,1,122.47,3C55.29,10.25,3,66.37,3,134.58,3,207.71,63.09,267,137.21,267,199.69,267,252,224.82,267,167.79A135.56,135.56,0,0,1,252.25,168.63Z"
                        stroke="#72b9d5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="6"
                        fill="url(#a)"
                    >
                        <animateTransform
                            attributeName="transform"
                            additive="sum"
                            type="rotate"
                            values="-15 135 135; 9 135 135; -15 135 135"
                            dur="6s"
                            repeatCount="indefinite"
                        />
                    </path>
                </symbol>
            </defs>

            {/* <!-- star-1 --> */}
            <path
                d="M282.83,162.84l24.93-6.42a1.78,1.78,0,0,1,1.71.46l18.37,18a1.8,1.8,0,0,0,3-1.73l-6.42-24.93a1.78,1.78,0,0,1,.46-1.71l18-18.37a1.8,1.8,0,0,0-1.73-3l-24.93,6.42a1.78,1.78,0,0,1-1.71-.46l-18.37-18a1.8,1.8,0,0,0-3,1.73l6.42,24.93a1.78,1.78,0,0,1-.46,1.71l-18,18.37A1.8,1.8,0,0,0,282.83,162.84Z"
                stroke="#fcd34d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                fill="url(#b)"
            >
                <animateTransform
                    attributeName="transform"
                    additive="sum"
                    type="rotate"
                    values="-15 312 144; 15 312 144; -15 312 144"
                    dur="6s"
                    calcMode="spline"
                    keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
                    repeatCount="indefinite"
                />

                <animate attributeName="opacity" values="1; .75; 1; .75; 1; .75; 1" dur="6s" />
            </path>

            {/* <!-- star-2 --> */}
            <path
                d="M285.4,193.44l12,12.25a1.19,1.19,0,0,1,.3,1.14l-4.28,16.62a1.2,1.2,0,0,0,2,1.15l12.25-12a1.19,1.19,0,0,1,1.14-.3l16.62,4.28a1.2,1.2,0,0,0,1.15-2l-12-12.25a1.19,1.19,0,0,1-.3-1.14l4.28-16.62a1.2,1.2,0,0,0-2-1.15l-12.25,12a1.19,1.19,0,0,1-1.14.3l-16.62-4.28A1.2,1.2,0,0,0,285.4,193.44Z"
                stroke="#fcd34d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                fill="url(#c)"
            >
                <animateTransform
                    attributeName="transform"
                    additive="sum"
                    type="rotate"
                    values="-15 306 204; 15 306 204; -15 306 204"
                    begin="-.33s"
                    dur="6s"
                    calcMode="spline"
                    keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
                    repeatCount="indefinite"
                />

                <animate
                    attributeName="opacity"
                    values="1; .75; 1; .75; 1; .75; 1"
                    begin="-.33s"
                    dur="6s"
                />
            </path>

            {/* <!-- star-3 --> */}
            <path
                d="M337.32,223.73l24.8,6.9a1.83,1.83,0,0,1,1.25,1.25l6.9,24.8a1.79,1.79,0,0,0,3.46,0l6.9-24.8a1.83,1.83,0,0,1,1.25-1.25l24.8-6.9a1.79,1.79,0,0,0,0-3.46l-24.8-6.9a1.83,1.83,0,0,1-1.25-1.25l-6.9-24.8a1.79,1.79,0,0,0-3.46,0l-6.9,24.8a1.83,1.83,0,0,1-1.25,1.25l-24.8,6.9A1.79,1.79,0,0,0,337.32,223.73Z"
                stroke="#fcd34d"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                fill="url(#d)"
            >
                <animateTransform
                    attributeName="transform"
                    additive="sum"
                    type="rotate"
                    values="-15 372 222; 15 372 222; -15 372 222"
                    begin="-.67s"
                    dur="6s"
                    calcMode="spline"
                    keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
                    repeatCount="indefinite"
                />

                <animate
                    attributeName="opacity"
                    values="1; .75; 1; .75; 1; .75; 1"
                    begin="-.67s"
                    dur="6s"
                />
            </path>

            <use width="270" height="270" transform="translate(121 121)" xlinkHref="#e" />
        </svg>
    ),
    locationIcon: (
        <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            width="20px"
            aria-hidden="true"
            role="img"
            className="iconify iconify--gis"
            preserveAspectRatio="xMidYMid meet"
            fill="#2240d8"
            stroke="#2240d8"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M50.001 0C33.65 0 20.25 13.36 20.25 29.666c0 6.318 2.018 12.19 5.433 17.016L46.37 82.445c2.897 3.785 4.823 3.066 7.232-.2l22.818-38.83c.46-.834.822-1.722 1.137-2.629a29.28 29.28 0 0 0 2.192-11.12C79.75 13.36 66.354 0 50.001 0zm0 13.9c8.806 0 15.808 6.986 15.808 15.766c0 8.78-7.002 15.763-15.808 15.763c-8.805 0-15.81-6.982-15.81-15.763c0-8.78 7.005-15.765 15.81-15.765z"
                    fill="#2240d8"
                ></path>
                <path
                    d="M68.913 48.908l-.048.126c.015-.038.027-.077.042-.115l.006-.011z"
                    fill="#2240d8"
                ></path>
                <path
                    d="M34.006 69.057C19.88 71.053 10 75.828 10 82.857C10 92.325 26.508 100 50 100s40-7.675 40-17.143c0-7.029-9.879-11.804-24.004-13.8l-1.957 3.332C74.685 73.866 82 76.97 82 80.572c0 5.05-14.327 9.143-32 9.143c-17.673 0-32-4.093-32-9.143c-.001-3.59 7.266-6.691 17.945-8.174c-.645-1.114-1.294-2.226-1.94-3.341z"
                    fill="#2240d8"
                ></path>
            </g>
        </svg>
    ),
    locationIcon1: (
        <svg
            fill="#4661ce"
            viewBox="-7 0 32 32"
            version="1.1"
            height="25px"
            width="25px"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#4661ce"
            strokeWidth="0.00032"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                {' '}
                <title>location-arrow</title>{' '}
                <path d="M10.2 25.080c0 0-0.040 0-0.040 0-0.36-0.040-0.64-0.28-0.76-0.6l-1.96-6.84-6.84-1.96c-0.32-0.080-0.56-0.4-0.6-0.76s0.16-0.68 0.48-0.8l16.52-7.12c0.32-0.12 0.68-0.080 0.92 0.16s0.32 0.6 0.16 0.92l-7.12 16.48c-0.12 0.32-0.44 0.52-0.76 0.52zM3.28 14.72l5.080 1.44c0.28 0.080 0.48 0.28 0.56 0.56l1.44 5.080 5.4-12.44-12.48 5.36z"></path>{' '}
            </g>
        </svg>
    ),
    locationIcon2: (
        <svg
            version="1.1"
            id="LOCATION"
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            width="20px"
            viewBox="0 0 1800 1800"
            enableBackground="new 0 0 1800 1800"
            xmlSpace="preserve"
            fill="#2058d9"
            stroke="#2058d9"
            strokeWidth="18"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                {' '}
                <g>
                    {' '}
                    <g>
                        {' '}
                        <path
                            fill="#2058d9"
                            d="M899.993,1556.267l441.512-441.511c8.202-7.819,26.127-26.384,26.893-27.184l0.36-0.383 c110.946-118.997,172.046-274.141,172.046-436.851c0-353.342-287.463-640.805-640.803-640.805 c-353.342,0-640.805,287.463-640.805,640.805c0,162.714,61.1,317.857,172.038,436.851L899.993,1556.267z M900.001,71.159 c319.355,0,579.179,259.818,579.179,579.18c0,146.968-55.159,287.114-155.315,394.639c-5.202,5.387-19.292,19.873-25.095,25.383 L900.006,1469.1l-424.049-424.315C375.902,937.286,320.82,797.229,320.82,650.339C320.82,330.977,580.634,71.159,900.001,71.159z"
                        ></path>{' '}
                    </g>{' '}
                    <g>
                        {' '}
                        <path
                            fill="#2058d9"
                            d="M998.745,225.279c110.577,0,325.781,120.91,325.781,342.553c0,17.018,13.789,30.812,30.812,30.812 c17.014,0,30.812-13.794,30.812-30.812c0-115.37-50.989-222.331-143.563-301.184c-73.464-62.566-169.175-102.994-243.842-102.994 c-17.014,0-30.812,13.794-30.812,30.813S981.731,225.279,998.745,225.279z"
                        ></path>{' '}
                    </g>{' '}
                    <g>
                        {' '}
                        <path
                            fill="#2058d9"
                            d="M1286.716,1361.056c-24.003-9.809-49.854-18.548-77.134-26.264l-50.474,50.478 c148.765,35.502,240.488,98.79,240.488,157.599c0,87.962-205.171,185.974-499.596,185.974 c-294.417,0-499.597-98.012-499.597-185.974c0-58.805,91.723-122.097,240.488-157.599l-50.478-50.478 c-27.271,7.716-53.126,16.455-77.121,26.264c-112.537,45.995-174.513,110.563-174.513,181.813s61.977,135.817,174.513,181.813 c103.793,42.422,241.128,65.785,386.708,65.785c145.582,0,282.921-23.363,386.715-65.785 c112.536-45.995,174.504-110.563,174.504-181.813S1399.252,1407.051,1286.716,1361.056z"
                        ></path>{' '}
                    </g>{' '}
                    <g>
                        {' '}
                        <path
                            fill="#2058d9"
                            d="M901.771,945.221c-171.172,0-310.434-139.256-310.434-310.425S730.599,324.37,901.771,324.37 c171.172,0,310.434,139.256,310.434,310.425S1072.943,945.221,901.771,945.221z M901.771,385.995 c-137.193,0-248.809,111.612-248.809,248.801s111.616,248.801,248.809,248.801c137.192,0,248.809-111.612,248.809-248.801 S1038.964,385.995,901.771,385.995z"
                        ></path>{' '}
                    </g>{' '}
                </g>{' '}
            </g>
        </svg>
    ),
};

export default Assets;
