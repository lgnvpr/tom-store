import React, { Component } from 'react'
import Checkbox from '@material-ui/core/Checkbox';

export default class CartItem extends Component<Props, State> {
    constructor(props : any ){
        super(props )
        this.state = {
            name1 : "con vượn ngắn",
            name2 : "con vượn dài thiệt là thiệt là dàià "
        }
    }
    render() {
        return (
            <div className= "fr-cart-item">
                <div>
                    <Checkbox
                        checked={true}
                        color = {"default"}
                    />
                </div>
                <div className="image-cart-item">
                    <img src="https://vanluongg.github.io/vanluong/img/home/img-product/19.jpg" alt="" />
                </div>
                <div className="name-description-cart">
                    <div className= "name-cart">
                        <p>{Math.round(Math.random()*3)%2==0 ?this.state.name1 : this.state.name2 }</p>
                    </div>
                    <div className="description-cart">Size L, Màu trắng</div>
                </div>
                <div className="price-amount-cart">
                    <div>
                        <div className="after-price-cart">180.000</div>
                        <div className = "before-price-cart">200.000</div>
                        
                    </div>
                    <div className="amount-cart">
                        <div>
                            <button>-</button>
                            <input className="inputAmount" type="text" value="1" />
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

type Props = {

}
type State = {
    name1 : string;
    name2 : string;
}