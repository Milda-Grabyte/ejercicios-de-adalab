import React from 'react';
import './Form.css';
import Card from './Card.js'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description : '',
      language : '',
      age: '',
      genre : '',
    };
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    let key = '';
    if (ev.target.name === 'age' || ev.target.name === 'genre') {
      key = ev.target.name;
    } else {
      key = ev.currentTarget.id;
    }

    this.setState({
      [key]: ev.target.value,
    });
    console.log(ev.target.value);
  }

  render() {
    return (
      <>
        <form>
          <label htmlFor='name'>Movie name:</label>
          <input id='name' type='text' name='name' placeholder='Title' onChange={this.handleChange} />
          <label htmlFor='description'>What's it about?</label>
          <textarea id='description' type='text' rows='4' cols='20' placeholder='Description' onChange={this.handleChange} />
          <label htmlFor='language'>Choose language:</label>
          <select id='language' onChange={this.handleChange}>
            <option value='english'>English</option>
            <option value='spanish'>Spanish</option>
            <option selected value='portuguese'>
              Portuguese
            </option>
          </select>
        </form>
        <div className='ageRestrictions' onClick={this.handleChange}>
          <input type='radio' name='age' id='A' value='A (todos los públicos)' defaultChecked />
          <label htmlFor='A'>A (todos los públicos)</label>
          <input type='radio' name='age' id='7' value='No recomendada para menores de 7 años.' />
          <label htmlFor='7'>No recomendada para menores de 7 años.</label>
          <input type='radio' name='age' id='12' value='No recomendada para menores de 12 años.' />
          <label htmlFor='12'>No recomendada para menores de 12 años.</label>
          <input type='radio' name='age' id='16' value='No recomendada para menores de 16 años.' />
          <label htmlFor='16'>No recomendada para menores de 16 años.</label>
          <input type='radio' name='age' id='18' value='No recomendada para menores de 18 años.' />
          <label htmlFor='7'>No recomendada para menores de 18 años.</label>
        </div>
        <div className='genrePicker' onChange={this.handleChange}>
          <input type='checkbox' id='genre1' name='genre' value='Comedy' />
          <label htmlFor='genre1'>Comedy</label>
          <input type='checkbox' id='genre2' name='genre' value='Drama' />
          <label htmlFor='genre2'>Drama</label>
          <input type='checkbox' id='genre3' name='genre' value='Fantasy' />
          <label htmlFor='genre3'>Fantasy</label>
          <input type='checkbox' id='genre4' name='genre' value='Action' />
          <label htmlFor='genre4'>Action</label>
          <input type='checkbox' id='genre5' name='genre' value='Family' />
          <label htmlFor='genre5'>Family</label>
          <input type='checkbox' id='genre6' name='genre' value='Horror' />
          <label htmlFor='genre6'>Horror</label>
        </div>
        <Card name={this.state.name} description={this.state.description} language={this.state.language} age={this.state.age} genres={this.state.genre}/>
      </>
    );
  }
}

export default Form;