import React, { Component } from 'react';

const header_alignment = {
    styles: {
        display: "flex",
        justifyContent: "center"
    }
}

const input_alignment = {
    styles: {
        marginLeft: "43%"
    }
}



class AddItem extends Component {
    state = {
        productId: 40,
        quantity: 0
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.addCartItem(this.state)
    }
    _onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
    const productList = this.props.products.map(product => <option value={product.id}>{product.name}</option>)
    return (
        <div>
            <div>
                <h3 style={header_alignment.styles}>Quantity</h3>  
                 <form onSubmit={ this.onSubmit }>
                    <input style={input_alignment.styles} onChange={this._onChange} type="text" name="quantity" value={this.state.quantity} />
                    <div>
                        <h3 style={header_alignment.styles}>Products</h3>  
                        <select onChange={this._onChange} style={input_alignment.styles} name="productId" value={this.state.productId}>
                            {productList}
                        </select>
                        <div>
                            <button style={input_alignment.styles} type="submit">Submit</button>
                        </div>
                    </div>
                 </form>    
            </div>
        </div>
        ) 
    }
}



export default AddItem;