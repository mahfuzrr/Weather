export default function ConverterSwitch({ isChecked, setChecked, toggleChecked }) {
    return (
        <div id="switchLeft">
            <div className="switch">
                <span>
                    <input
                        type="checkbox"
                        id="toggleInput"
                        checked={isChecked}
                        onChange={(e) => setChecked(e.target.checked)}
                    />
                    <button type="button" id="slide" className="slider" onClick={toggleChecked} />
                </span>
            </div>
        </div>
    );
}
