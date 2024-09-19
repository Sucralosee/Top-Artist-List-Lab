import '../App.css'

export default function ArtistDetails(props) {

    const { artist } = props;

    return (
        <div className="artist">
            <img className="portrait" alt="" src={artist.photo_url} />
            <div className="info">
                <h2 className="ar-name">{artist.name}</h2>
                <p className="ar-country">Country:{artist.country}</p>
                <p className="ar-years">Years active:{artist.years_active}</p>
            </div>
        </div>
    );
}
