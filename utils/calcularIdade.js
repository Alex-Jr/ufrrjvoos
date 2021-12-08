// função para calcular a idade apartir da data de nascimento
module.exports = (dob) => { 
  dob = new Date(dob);

  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms); 

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}