import React, { useState } from "react";
import { FormGroup, Card, CardBody } from "reactstrap";
import { useHistory } from "react-router-dom";

function AddItemForm({ addNewItem }) {
  const [formData, setFormData] = useState({
    type: "snacks",
    name: "",
    description: "",
    recipe: "",
    serve: "",
  });

  const history = useHistory();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { type, ...itemData } = formData;
    addNewItem(type, itemData);
    setFormData({
      type: "snacks",
      name: "",
      description: "",
      recipe: "",
      serve: "",
    });

    history.push(`/${type}`);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardBody>
          <FormGroup>
            <label>Type:</label>
            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="snacks">Snack</option>
              <option value="drinks">Drink</option>
            </select>
          </FormGroup>
          <FormGroup>
            <label>Name:</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label>Description:</label>
            <input
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Recipe:</label>
            <input
              name="recipe"
              value={formData.recipe}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Serve:</label>
            <input
              name="serve"
              value={formData.serve}
              onChange={handleChange}
            />
          </FormGroup>
          <button>Add Item</button>
        </CardBody>
      </form>
    </Card>
  );
}

export default AddItemForm;
