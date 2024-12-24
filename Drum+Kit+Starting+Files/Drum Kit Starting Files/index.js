var noofButtons = document.querySelectorAll(".drum").length;
for(var i =0 ;i<noofButtons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener(
        "click",function (){
            var key = this.innerHTML;
            console.log(key);
            switch (key) {
                case 'w':
                    var tom1 = new Audio('./sounds/tom-1.mp3');
                    tom1.play();
                    break;
            
                default:
                    console.log(key);
                    break;
            }
        }
    );
}