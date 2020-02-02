import { LightningElement, track } from 'lwc';

export default class LwcBasics_1 extends LightningElement {
    message="world"; //this doesn't have any decorator which means private 
    @track inputmessage="Hi John";
    @track firstName='';
    @track lastName='';
    @track isVisible=false;

    handleChange(event){
        let field=event.target.name;
        if(field==='firstName'){
            this.firstName=event.target.value;
        }else if(field==='lastName'){
            this.lastName=event.target.value;
        }else if(field==='visiblityCheckbox'){
            this.isVisible=event.target.checked;

        }else{
            this.inputmessage=event.target.value;
        }
    }

    get lowercasedFullName(){
        return `${this.firstName} ${this.lastName}`.toLowerCase();
    }

    contacts=[
        {Id:'0035hg8fj74j48',Name:'John',Title:'Mr.'},
        {Id:'0035hg8fj74j44',Name:'Maria',Title:'Mrs.'},
        {Id:'0035hg8fj74j42',Name:'Maddy',Title:'Mr.'},
    ];
}


//@track is a Decorator to mark properties and monitor the property values
//@api is another Decorator is surfaced which means this property is available for another component
