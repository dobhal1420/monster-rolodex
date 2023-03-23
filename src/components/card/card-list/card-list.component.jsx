
import Card from '../card-container/card-container.component'
import './card-list.styles.css';

const CardList = (props) => {

        const { monsters } = props;
        return (
            <div className='card-list'> 
                { monsters.map(monster => {
                return <Card monster={monster}/>
                }
                )}
            </div>
        )

}

export default CardList;