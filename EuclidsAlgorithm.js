class EuclidsAlgorithm {
    gcd(a, b){
      if (a===0) { 
          return b;
      }
      else if (b===0) { // === checks the value and type while == only checks the value
          return a;
      }
      else{
          return this.gcd(b,a, a%b);
      }
    }
}

module.exports = EuclidsAlgorithm;