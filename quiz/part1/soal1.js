/*
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/
function sorting(arrNumber) {
   return arrNumber.sort((a, b) => b - a);
  }
  
  function getTotal(arrNumber) {
    if (arrNumber.length === 0) {
        return '';
    }

    let tertinggi = arrNumber[0];
    let jumlah = 0;

    for (let i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] === tertinggi) {
            jumlah++;
        } else {
            break;
        } // saya pake loop ya sir, soal nya materi rekrusi itu saya kurang paham
    }

    return (`angka paling besar adalah ${tertinggi} dan jumlah kemunculan sebanyak ${jumlah} kali`);
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''