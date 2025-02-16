const score = JSON.parse(localStorage.getItem('score')) || {win:0,losses:0,tie:0};

    updateScore();
   

    function playGame(playerMove){
      const computerMove = TakecomputerMove();
      let result='';
        if(playerMove ==='rock'){
            if(computerMove ==='rock'){
              result='tie';
              }
            else if(computerMove ==='paper'){
              result='you lose';
              }
            else if(computerMove ==='scissors'){
                result='you win';
              }}
         else if(playerMove ==='paper'){
            
                  if(computerMove==='rock'){
                    result='you win';
                  }
                  else if(computerMove==='paper'){
                    result='tie';
                  }
                  else if(computerMove==='scissors'){
                    result='you lose';
                  }
                } 
                
            else if(playerMove ==='scissors'){
              
                  if(computerMove==='rock'){
                    result='you lose';
                  }
                  else if(computerMove==='paper'){
                    result='you win';
                  }
                  else if(computerMove==='scissors'){
                    result='tie';
                  }
          }   
          
          if(result==='you win'){
            score.win += 1;
          } else if(result === 'you lose'){
            score.losses += 1;
          } else if(result ==='tie'){
            score.tie += 1;
          }

          localStorage.setItem('score',JSON.stringify(score));
          
          updateScore();

          
          document.querySelector('.js-result').innerHTML=result;
          document.querySelector('.js-moves').innerHTML=`you
    <img class="move-img" src="images/${playerMove}-emoji.png">
    Computer
    <img class="move-img" src="images/${computerMove}-emoji.png">`;
        

      
    }

    function updateScore(){
      document.querySelector('.js-score').innerHTML= `win :${score.win},  loses :${score.losses},  tie :${score.tie}`;

    }
   
    function TakecomputerMove(){
      const randomNumber=Math.random();
      let computerMove='';
       if (randomNumber>=0 && randomNumber<=(1/3)){
         computerMove='rock';
        }
       else if(randomNumber>=(1/3) && randomNumber<=(2/3)){
         computerMove='paper';
        }
        else if(randomNumber>=2/3 && randomNumber<=1){
         computerMove='scissors';
        }
      
      return computerMove;
    } 