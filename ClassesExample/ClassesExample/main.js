class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  static generatePassword(){
    return Math.floor(Math.random()*10000);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }

  get certifications() {
    return this._certifications;
  }

  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

class Doctor extends HospitalEmployee {
  constructor(name, insurance){
  super(name);
  this._insurance = insurance;
 }
 get insurance(){
  return this._insurance;
 }
}
const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

const doctorRoy = new Doctor('Roy Rico', ['fully comprehensive', 'public liability insurance']);
doctorRoy.takeVacationDays(12);
console.log(doctorRoy.remainingVacationDays);
console.log(doctorRoy.insurance);

// -------------------------------------------------------------------------------------------------------------------

class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get ratings(){
    return this._ratings;
  }
  set isCheckedOut(value){
    this._isCheckedOut = value;
  }
  toggleCheckOutStatus(){
    this.isCheckedOut = !this.isCheckedOut;
    }

  getAverageRating(){
      let ratingSum = this.ratings.reduce ((accumulator,rating) => accumulator + rating);
  return ratingSum / this.ratings.length;
  }
  addRating(value){
    this.ratings.push(value);
  }
}

class Book extends Media{
  constructor(author, title, pages){
  super(title)
  this._author = author;
  this._pages = pages;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
}

class Movie extends Media{
  constructor(director, title, runTime){
    super(title)
    this._director = director;
    this._runTime = runTime;
  }
  get director(){
    return this._director
  }
  get runTime(){
    return this._runTime
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus;
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus;
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());


// -------------------------------------------------------------------------------------------------------

class School {
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }
  set numberOfStudents(value){
    if (value.isNAN()) {
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    }
      else {
        this._numberOfStudents = value;
      }
  }
  quickFacts(){
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
  }
  static pickSubstituteTeachers(substituteTeachers){
     const randNum = Math.floor(Math.random() * substituteTeachers.length)
      return substituteTeachers[randNum];
  }
}

class PrimarySchool extends School{
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy(){
    return this._pickupPolicy
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams){
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams(){
    return this._sportsTeams;
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13')

lorraineHansbury.quickFacts();
const subTeacher = School.pickSubstituteTeachers(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HighSchool ('Al E.Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams)
console.log(subTeacher);
