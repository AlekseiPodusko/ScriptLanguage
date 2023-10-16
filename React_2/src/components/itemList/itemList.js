import React from "react";
import './itemList.css';
import Spinner from '../spinner';

export default class ItemList extends Comment {

    state = {
        ItemList: null
    }

    componentDedMount(){
        const {getData} = this.props;

        getData()
            .then( (itemList)=>{
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item)=>{
            const {id} = item;

            const label = this.prop.renderItems(item);

            return (
                <li
                    key={id}
                    className = "list-group-item"
                    onClick={ () => this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

    render(){
        const {itemList} = this.state;

        if(!itemList){
            return <Spinner/>
        }

        const item = this.renderItems(itemList);

        return(
            <ul className = "item-list list-group">
                {items}
            </ul>
        );
    }
}