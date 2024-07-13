const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (spec_num, DNA_bases) => {

  return {
    _specimenNum: spec_num,
    _dna: DNA_bases,

    mutate() {
      const random_index = Math.floor(Math.random() * this._dna.length);
      let new_base = returnRandBase();
      while (new_base === this._dna[random_index]) {
        new_base = returnRandBase();
      }
      this._dna[random_index] = new_base;
      return this._dna;
    },

    compareDNA(different_aequor) {
      let similarities = 0;
      for (let i=0; i<different_aequor.length; i++) {
        if (this._dna[i] === different_aequor.dna[i]) {
          similarities += 1
        }
      }
      let percentage = (similarities/this._dna.length) * 100;
      console.log(`${this._specimenNum} and ${different_aequor._specimenNum} have ${percentage}% DNA in common`);
    },

    willLikelySurvive() {
      const C_G = this._dna.filter(val => val === 'C' || val === 'G');
      return (C_G.length / this._dna.length >= 0.6);
    }
  }

}


const surviving_specimen = [];
let counter = 0;

while (surviving_specimen.length < 30) {
  let newOrg = pAequorFactory(counter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    surviving_specimen.push(newOrg);
  }
  counter++;
}

console.log(surviving_specimen[1]._dna.filter(val => val === 'C' || val === 'G').length / surviving_specimen[3]._dna.length);



console.log(surviving_specimen[1].mutate());

