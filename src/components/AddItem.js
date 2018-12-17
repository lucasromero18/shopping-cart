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
    onSubmit = (id) => {
        id.prevent.default()
        const selectedItem = this.props.products.filter(item => this.props.product.id === id)
        
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
                 <input style={input_alignment.styles} onChange={this._onChange} type="text" name="quantity" value={this.props.quantity}></input>
                        <div>
                         <h3 style={header_alignment.styles}>Products</h3>  
                        <select onChange={this._onChange} style={input_alignment.styles} name="products" value={this.props.products}>
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