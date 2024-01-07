


function limitN(bina)
    {
        key_code = bina.keyCode ? bina.keyCode :  bina.charCode ? bina.charCode : bina.which ? bina.which : void 0;

        // if(key_code != 48 || key_code != 49)   
        // {
        //     var er = document.getElementById("error")
        //     er.innerHTML = "<p> Digite somente 0's ou/e 1's</p>"   
        // }
        
        
        if (key_code == 48 || key_code == 49)
        {
            er = document.getElementById("error")
            er.innerHTML = "<p> </p>" 

            return true;
            
            
        }
            else{
                 er = document.getElementById("error")
                er.innerHTML = "<p> Digite somente 0's ou/e 1's</p>" 
            }
            return false;

        
            
    }
    
function calc()
    {  
        var input = document.getElementById('bin').value;
        soma = [];
        
        for (var i = input.length; i > 0; i--)
        {
            alga = input.substr(-i, 1)
            if(alga == 1){
            result = Math.pow(2, i -1)
            soma.push(result)
                       }
        
        }
        
         valorI = soma.reduce(function(acumulador, valorAtual){
             return acumulador + valorAtual
        })
        document.getElementById('out').value = valorI
        
    }