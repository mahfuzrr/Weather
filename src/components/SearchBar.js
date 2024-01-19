import Assets from './Assets';
export default function SearchBar({ setAddress, searchTemparature, getCurrentLocation }) {
    return (
        <div id="searchGroup">
            <div id="searchBar" className="col-sm-12">
                <div className="form-group" id="groupSearch">
                    <span id="searchIcon">
                        <i className="fa-solid fa-magnifying-glass" />
                    </span>
                    <input
                        type="text"
                        id="sBar"
                        className="form-control"
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Serch for places"
                    />
                    <button className="searchBtn" type="button" onClick={searchTemparature}>
                        Search
                    </button>
                    <button className="accessLocationBtn" onClick={getCurrentLocation}>
                        {Assets.locationIcon2}
                    </button>
                </div>
            </div>
        </div>
    );
}
