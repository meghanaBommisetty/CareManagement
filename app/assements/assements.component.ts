import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Person }  from './app.component';
@Component({
    moduleId: module.id,
    templateUrl: 'assements.component.html'
})

export class AssementsComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    persons:Person[] = [];
today: number = Date.now();
show = false;
  person:Person;
  table= false;
  editable = false;
    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
    }

constructor(private router: Router){ }
  
  onClickAdd(id,name,dob,address,email):void{
  this.persons.push({id:id,name:name,dob:dob,address:address,email:email});
  this.table=true;
  }

    ngOnInit() {
        this.loadAllUsers();
    }
 


    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
    onDelete(id):void{
	  let allPersons = this.persons;
	  let length = allPersons.length;
	  for(let i=0;i<allPersons.length;i++){
		  if(allPersons[i].id == id){
			allPersons.splice(i,1);
			this.show = false;
				if(length == 1 ){
					this.table = false;
				}
		  } 
	  }
  }
  
  onView(person):void{
	  this.show =true;
	  this.person = person;
  }
  
  onEdit(person):void{
	  this.editable =true;
	  this.person = person;
	  this.show = false;
  }
  
  onModify(id,name,dob,address,email):void{
	let allPersons = this.persons;
	 for(let i=0;i<allPersons.length;i++){
		  if(allPersons[i].id == id){
			allPersons[i].id = id;
			allPersons[i].name= name;
		
			allPersons[i].dob = dob;
			allPersons[i].address = address;
			allPersons[i].email = email;
		  } 
	  }
	  this.editable = false;
  }
 
}