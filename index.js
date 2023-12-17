const sjekkSnitt = document.getElementById('sjekkSnitt');
const snittSentence = document.getElementById('snittSentence');
const snittShow = document.getElementById('snittShow');
const settAlleKaraktererInput = document.getElementById('settAlleKarakterer');
const settAlleKaraktererKnapp = document.getElementById('settAlleKarakterer-knapp');
const hidden = "hidden";

function getGrades() {
  const subjectsHTML = [
    parseInt(document.getElementById('norsk-s').value),
    parseInt(document.getElementById('norsk-m').value),
    parseInt(document.getElementById('matematikk').value),
    parseInt(document.getElementById('engelsk').value),
    parseInt(document.getElementById('krle').value),
    parseInt(document.getElementById('samfunnsfag').value),
    parseInt(document.getElementById('naturfag').value),
    parseInt(document.getElementById('kroppsoving').value),
    parseInt(document.getElementById('kunst-handverk').value),
    parseInt(document.getElementById('mat-helse').value),
    parseInt(document.getElementById('musikk').value),
    parseInt(document.getElementById('valg-sprak').value),
    parseInt(document.getElementById('valg-fag').value)
  ];

  return subjectsHTML;
}

sjekkSnitt.addEventListener("click", ()=>{
  let snitt = 0;
  const grades = getGrades();
  for (let i = 0; i < grades.length; i++) {
    if(isNaN(grades[i])){
      snitt += 0;
    } else {
      snitt += grades[i];
    }
  };

  snitt = snitt / 13;

  snitt = String(snitt);

  if(snitt.length > 5){
    snitt = snitt.slice(0, 4)
  }

  snittShow.innerHTML = snitt;

  snittSentence.classList.remove("hidden");
});

settAlleKaraktererKnapp.addEventListener("click", () => {
  const valueOfGrade = settAlleKaraktererInput.value;
  
  document.getElementById('norsk-s').value = valueOfGrade;
  document.getElementById('norsk-m').value = valueOfGrade;
  document.getElementById('matematikk').value = valueOfGrade;
  document.getElementById('engelsk').value = valueOfGrade;
  document.getElementById('krle').value = valueOfGrade;
  document.getElementById('samfunnsfag').value = valueOfGrade;
  document.getElementById('naturfag').value = valueOfGrade;
  document.getElementById('kroppsoving').value = valueOfGrade;
  document.getElementById('kunst-handverk').value = valueOfGrade;
  document.getElementById('mat-helse').value = valueOfGrade;
  document.getElementById('musikk').value = valueOfGrade;
  document.getElementById('valg-sprak').value = valueOfGrade;
  document.getElementById('valg-fag').value = valueOfGrade;
});