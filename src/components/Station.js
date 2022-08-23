export function Station(props) {
    return (
        <div style={{display: 'flex', justifyContent: 'between'}}>
            <img src={props.img} width="200" alt="station location" />
            <div>
                <h2>{props.name}</h2>
            </div>
        </div>
    )
}