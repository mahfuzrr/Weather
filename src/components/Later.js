export default function Later() {
    return (
        <div>
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
                <use
                    width="102.66"
                    height="186.74"
                    transform="translate(205.23 291)"
                    xlinkHref="#d"
                />
            </svg>
        </div>
    );
}
