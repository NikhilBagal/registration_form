import React,{Component} from 'react';
import "./Form.css"

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstname:"",
            middlename:"",
            lastname:"",
            course:"",
            gender:"",
            phone:"",
            rowCount:1
         }
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })   
    }

    handleSubmit = (e) => {
        e.preventDefault()
        var selector = document.querySelector(".table-layout table")
        var row = selector.insertRow(this.state.rowCount)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        var cell4 = row.insertCell(3)
        var cell5 = row.insertCell(4)
        var cell6 = row.insertCell(5)
        cell1.appendChild(document.createTextNode(this.state.firstname))
        cell2.appendChild(document.createTextNode(this.state.middlename))
        cell3.appendChild(document.createTextNode(this.state.lastname))
        cell4.appendChild(document.createTextNode(this.state.course))
        cell5.appendChild(document.createTextNode(this.state.gender))
        cell6.appendChild(document.createTextNode(this.state.phone))
        this.setState({rowCount:this.state.rowCount+1})
    }

    render() { 
        return ( 
            <div className="form-div">
                <center>  <h1> Student Registeration Form</h1> </center>
                <form onSubmit={this.handleSubmit}>
                    <label> Firstname: </label>         
                    <input type="text" value={this.state.firstname} onChange={this.handleChange} name="firstname" size="15" placeholder="First Name" required/> 
                    <label> Middlename: </label>     
                    <input type="text" value={this.state.middlename} onChange={this.handleChange} name="middlename" size="15" placeholder="Middle Name" required/> 
                    <label> Lastname: </label>         
                    <input type="text" value={this.state.lastname} onChange={this.handleChange} name="lastname" size="15" placeholder="Last Name" required/>
                    <label>   
                    Course :  
                    </label>   
                    <select required name="course" onChange={this.handleChange} value={this.state.course}>  
                    <option value="Course">Course</option>  
                    <option value="BCA">BCA</option>  
                    <option value="BBA">BBA</option>  
                    <option value="B.Tech">B.Tech</option>  
                    <option value="MBA">MBA</option>  
                    <option value="MCA">MCA</option>  
                    <option value="M.Tech">M.Tech</option>  
                    </select>  
                    <label>   
                    Gender :  
                    </label> 
                    <div className="radio-grp">
                        <input type="radio" onChange={this.handleChange} value="male" name="gender" required/> Male 
                        <input type="radio" onChange={this.handleChange} value="female"  name="gender" required/> Female
                        <input type="radio" onChange={this.handleChange} value="other"  name="gender" required/> Other  
                    </div>
                    <label>   
                    Phone :  
                    </label>  
                    <input type="text" onChange={this.handleChange} name="phone" value={this.state.phone} size="10" required/> 
                    <button type="submit" class="registerbtn">Register</button>
                </form>
                <div className="table-layout">
                    <table>
                        <tbody>
                            <tr>
                                <th>First Name</th>
                                <th>Middle Name</th>
                                <th>Last Name</th>
                                <th>Course</th>
                                <th>Gender</th>
                                <th>Phone</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
         );
    }
}
 
export default Form;