//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
function person(name, age) {
	this.name = name;
	this.age = age;
}


//Now create three instances of Person with data you make up

  //code here

  var me = new person('Jessica', 26);
  var myFather = new person('Gary', 63);
  var myMother = new person('Kim', 56);


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here

  person.prototype.sayName = function() {
  	alert(this.name);
  }

  //Test

  me.sayName();
