import React from 'react';
import '../addproperty.css';

class AddProperties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            fields: {
                      title: '',
                      type: 'Flat',
                      city: 'Manchester',
                      bedrooms: 0,
                      bathrooms: 0,
                      price: 0,
                      email: '',
                    },
          };
    this.handleAddProperty = this.handleAddProperty.bind(this);
  }

  handleAddProperty = (event) => {
    event.preventDefault();
    console.log(this.state.fields);
  };

  handleFieldChange = (event) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return  <div>
              <div className="AddProperty">
                Add Property Page
              </div>
              <div>
                <form onSubmit={this.handleAddProperty}>
                  Property Title
                  <input name="title" value={this.state.fields.title} type="string" onChange={this.handleFieldChange}/>
                  Property Type
                  <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
                    <option value="Flat">Flat</option>
                    <option value="Detached">Detached</option>
                    <option value="Semi-Detached">Semi-Detached</option>
                    <option value="Terraced">Terraced</option>
                    <option value="End of Terrace">End of Terrace</option>
                    <option value="Cottage">Cottage</option>
                    <option value="Bungalow">Bungalow</option>
                  </select>
                  City
                  <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
                    <option value="Manchester">Manchester</option>
                    <option value="Leeds">Leeds</option>
                    <option value="Sheffield">Sheffield</option>
                    <option value="Liverpool">Liverpool</option>
                  </select>
                  Bedrooms
                  <input name="bedrooms" type="number" onChange={this.handleFieldChange}/>
                  Bathrooms
                  <input name="bathrooms" type="number"onChange={this.handleFieldChange}/>
                  Price
                  <input name="price" type="string"onChange={this.handleFieldChange}/>
                  Email
                  <input name="email" type="email"onChange={this.handleFieldChange}/>
                  <button type="submit">Add</button>
                </form>
              </div>
            </div>
  }
};

export default AddProperties;
