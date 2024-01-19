import { useEffect, useState } from 'react';

export default function Toggle() {
    const [isChecked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const toggleChecked = () => {
        setChecked(!isChecked);
    };

    useEffect(() => {
        const allCss = document.getElementById('slide').classList;
        if (isChecked) {
            allCss.add('slider-f');
            allCss.remove('slider');
        } else {
            allCss.add('slider');
            allCss.remove('slider-f');
        }
    }, [isChecked]);

    return (
        <div id="switchLeft">
            <div className="switch">
                <span>
                    <input
                        type="checkbox"
                        id="toggleInput"
                        checked={isChecked}
                        onChange={handleChange}
                    ></input>
                    <button
                        id="slide"
                        className="slider"
                        type="button"
                        onClick={toggleChecked}
                    ></button>
                </span>
            </div>
        </div>
    );
}
