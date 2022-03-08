
 // function Monday() {
   // console.log('Go for a five-mile run');
//
// function Tuesday() {
//     console.log('Go for a five-mile run');
//     console.log('Swim 40 laps');
//   }
  
//   function Wednesday() {
//     console.log('Go for a five-mile run');
//     console.log('Go for a five-mile run');
//   }
  
//   function Thursday() {
//     console.log('Go for a five-mile run');
//     console.log('Pump iron');
//   }
  
//   function Friday() {
//     console.log('Go for a five-mile run');
//     console.log('Swim 40 laps');
//   }   
  function Monday() {
    runFiveMiles();
    liftWeights();
  }
  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }
  function Monday() {
    exerciseRoutine(liftWeights);
  }
  
  function Tuesday() {
      exerciseRoutine(function() {
          console.log('Stretch! Work that core!');
      });
  //Or
  exerciseRoutine(() => {
      console.log('Stretch! Work that core!')
  });
  //Or

  exerciseRoutine(() => console.log('Stretch! Work that core!'));


  function morningRoutine(exercise) {
    var breakfast = null;
  
    if (exercise === liftWeights) {
      breakfast = 'protein bar';
    } else if (exercise === swimFortyLaps) {
      breakfast = 'kale smoothie';
    } else {
      breakfast = 'granola';
    }

    return function() {
        console.log(`Nom nom nom, this ${breakfast} is delicious!`);
      }
    }
    var afterExercise = morningRoutine(liftWeights);
}