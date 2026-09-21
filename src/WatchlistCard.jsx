
export default function WatchlistCard(props) {

  return (
    <div >
      <div>
        <img src={props.icon} alt={props.base} />
        <div>
          <div><em>{props.base}</em>/{props.quote}</div>
          <p>Live Market</p>
        </div>
      </div>
      <div>
        <span>{props.price}</span>
        <span>{props.change}</span>
        <span>{props.sparkline}</span>
      </div>
    </div>
  )
}
