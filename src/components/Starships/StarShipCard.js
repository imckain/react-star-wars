export function StarShipCard(props) {

    return (
        <div>
            {props.starships.map((starship, idx) =>
                <div key={idx}>
                    {props.name}
                </div>
            )}
        </div>
    )
}