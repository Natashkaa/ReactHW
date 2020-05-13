// import React, {Component} from 'react';
// import './App.css';

// function App(){
//   return (
//     <div className="main">
//       <h1>APP</h1>
//     </div>
//   )
// }
// export default App
// class App extends Component {
//   constructor() {
//       super()
//       this.state = {
//         firstname: '',
//         lastname: '',
//         age: '',
//         man: false,
//         woman: true,
//         city: 'LA',
//         diet: [
//           {id: 0, value: "Milk", isChecked : true},
//           {id: 1, value: "Rice", isChecked : false },
//           {id: 2, value: "Fresh Water", isChecked : true },
//           {id: 3, value: "Apples", isChecked : false },
//           {id: 4, value: "Green tea", isChecked : true },
//           {id: 5, value: "Fish Soup", isChecked : true },
//           {id: 6, value: "Bananas", isChecked : false },
//           {id: 7, value: "Beer", isChecked : false },
//           {id: 8, value: "Meat", isChecked : false }
//         ]
//       };
//       this.handleSubmit = this.handleSubmit.bind(this);
//       this.handleChange = this.handleChange.bind(this);
//   }

//   handleSubmit(event){
//     event.preventDefault();
//   }
//   handleChange(event){
//     const { name, value, type, checked } = event.target;
//     if(type === "radio"){
//       if(name === "man"){
//         this.setState({
//           man: true,
//           woman: false
//         })
//       }
//       else{
//         this.setState({
//           man: false,
//           woman: true
//         })
//       }
//     }
//     if(name === "city"){
//       this.setState({
//         city: event.target.value
//       })
//     }
//     if(type === "checkbox"){
//       let res = this.state.diet;
//       res.forEach(r => {
//       if (r.value === event.target.value)
//         r.isChecked =  event.target.checked
//       })
//       this.setState({diet: res})
//     }
//     else{
//       this.setState({
//           [name]: event.target.value
//         })
//     }
//   }
  
//   render() {
//       return (
//           <main>
//               <form onSubmit={this.handleSubmit}>
//                   <input className="input" type="text" placeholder="First Name" 
//                          value={this.state.firstname}
//                          onChange={this.handleChange}
//                          name="firstname"/><br />
//                   <input className="input" type="text" placeholder="Last Name" 
//                           value={this.state.lastname}
//                           onChange={this.handleChange}
//                           name="lastname"/><br />
//                   <input className="input" type="number" placeholder="Age" 
//                          value={this.state.age}
//                          onChange={this.handleChange}
//                          name="age"/><br />
//                   {/* Здесь создайте переключатели для выбора пола */}
//                   <div>
//                     <input type="radio"
//                            onChange={this.handleChange}
//                            value="Man"
//                            name="man"
//                            checked={this.state.man}></input> Man<br/>
//                     <input type="radio"
//                            onChange={this.handleChange}
//                            value="Woman"
//                            name="woman" 
//                            checked={this.state.woman}></input> Woman
//                   </div>
//                   {/* Здесь создайте поле со списком для выбора пункта назначения */}
//                   <div>
//                     <select name="city" value={this.state.city} onChange={this.handleChange}>
//                       <option value="London">London</option>
//                       <option value="Paris">Paris</option>
//                       <option  value="Atlanta">Atlanta</option>
//                       <option selected value="LA">LA</option>
//                     </select>
//                   </div>
//                   <br />
//                   {/* Здесь создайте флажки для указания диетологических ограничений */}
//                   <div>
//                     <p><input key={this.state.diet[0].id} type="checkbox" className="input" onChange={this.handleChange} value={this.state.diet[0].value} checked={this.state.diet[0].isChecked}></input> Milk</p>
//                     <p><input key={this.state.diet[1].id} type="checkbox" className="input" onChange={this.handleChange} value={this.state.diet[1].value} checked={this.state.diet[1].isChecked}></input> Rice</p>
//                     <p><input key={this.state.diet[2].id} type="checkbox" className="input" onChange={this.handleChange} value={this.state.diet[2].value} checked={this.state.diet[2].isChecked}></input> Fresh Water</p>
//                     <p><input key={this.state.diet[3].id} type="checkbox" className="input" onChange={this.handleChange} value={this.state.diet[3].value} checked={this.state.diet[3].isChecked}></input> Apples</p>
//                     <p><input key={this.state.diet[4].id} type="checkbox" className="input" onChange={this.handleChange} value={this.state.diet[4].value} checked={this.state.diet[4].isChecked}></input> Green tea</p>
//                     <p><input key={this.state.diet[5].id} type="checkbox" className="input" onChange={this.handleChange} value={this.state.diet[5].value} checked={this.state.diet[5].isChecked}></input> Fish Soup</p>
//                     <p><input key={this.state.diet[6].id} type="checkbox" className="input" onChange={this.handleChange} value={this.state.diet[6].value} checked={this.state.diet[6].isChecked}></input> Bananas</p>
//                     <p><input key={this.state.diet[7].id} type="checkbox" className="input" onChange={this.handleChange} value={this.state.diet[7].value} checked={this.state.diet[7].isChecked}></input> Beer</p>
//                     <p><input key={this.state.diet[8].id} type="checkbox" className="input" onChange={this.handleChange} value={this.state.diet[8].value} checked={this.state.diet[8].isChecked}></input> Meat</p>
//                   </div>
//                   <button className="logInBtn">Submit</button>
//               </form>
//               <hr />
//               <div className="info">
//                 <h2><font color="#3AC1EF">Entered information:</font></h2>
//                 <p>Your name: {this.state.firstname} {this.state.lastname}</p>
//                 <p>Your age: {this.state.age}</p>
//                 <p>Your gender: {this.state.woman ? 'Woman' : 'Man'}</p>
//                 <p>Your destination: {this.state.city}</p>
//                 <p>
//                   Your dietary restrictions: 
//                 </p>
//                 <ol>
//                   {/* Список диетологических ограничений */}
//                   {this.state.diet.filter(d => d.isChecked).map((d) => {  
//                       return <li>{d.value}</li>        
//                   })}
//                 </ol>
//               </div>
//           </main>
//       )
//   }
// }

